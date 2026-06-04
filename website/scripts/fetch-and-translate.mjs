import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_BASE = 'https://dalamud.dev/api';
const OUTPUT_DIR = path.resolve(__dirname, '..', 'docs', 'api', 'namespaces');
const TRANSLATIONS_PATH = path.resolve(__dirname, 'api-translations.json');
const AI_CACHE_PATH = path.resolve(__dirname, 'ai-cache.json');

const dict = JSON.parse(fs.readFileSync(TRANSLATIONS_PATH, 'utf-8'));
const patternPrefixes = Object.keys(dict.patterns).sort((a, b) => b.length - a.length);
const wordEntries = Object.entries(dict.words).sort((a, b) => b[0].length - a[0].length);

// ─── AI provider detection ──────────────────────────────────────────

const AI_PROVIDERS = [];

if (process.env.DEEPSEEK_API_KEY) {
  AI_PROVIDERS.push({
    name: 'DeepSeek',
    key: process.env.DEEPSEEK_API_KEY,
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
  });
}

if (process.env.GITHUB_TOKEN) {
  AI_PROVIDERS.push({
    name: 'GitHub Models',
    key: process.env.GITHUB_TOKEN,
    endpoint: 'https://models.inference.ai.azure.com/chat/completions',
    model: 'gpt-4o-mini',
  });
}

const AI_PROVIDER = AI_PROVIDERS[0] || null;

// ─── AI translation state ──────────────────────────────────────────

const PENDING = new Map(); // original → { norm, dictResult, occurrences: [{ns, section, name}] }
let AI_CACHE = new Map(); // original → aiTranslation

function loadAiCache() {
  try {
    if (fs.existsSync(AI_CACHE_PATH)) {
      const data = JSON.parse(fs.readFileSync(AI_CACHE_PATH, 'utf-8'));
      AI_CACHE = new Map(Object.entries(data));
      console.log(`📦 AI cache loaded: ${AI_CACHE.size} entries`);
    }
  } catch { /* ignore */ }
}

function saveAiCache() {
  const obj = Object.fromEntries(AI_CACHE);
  fs.writeFileSync(AI_CACHE_PATH, JSON.stringify(obj, null, 2), 'utf-8');
}

// ─── Translation helpers ───────────────────────────────────────────

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wordReplace(text) {
  let result = text;
  for (const [en, zh] of wordEntries) {
    const regex = new RegExp(`\\b${escapeRegex(en)}\\b`, 'gi');
    result = result.replace(regex, zh);
  }
  return result;
}

function stripTrailingPunct(text) {
  return text.replace(/[.,;:!?]+(\s|$)/g, '$1').replace(/[.,;:!?]+$/, '');
}

function needsAI(text) {
  if (!/[a-zA-Z]/.test(text)) return false;
  // Look for English words of 3+ letters that aren't C# PascalCase identifiers
  const engWords = text.match(/\b[a-zA-Z]{3,}\b/g) || [];
  const unknownWords = engWords.filter(w =>
    // Not fully uppercase (like FFXIV, DTR)
    !(w === w.toUpperCase() && w.length > 1) &&
    // Not a known C# type name (PascalCase starting with uppercase, rest mixed)
    !(/^[A-Z]/.test(w) && /[a-z]/.test(w.slice(1)))
  );
  return unknownWords.length > 0;
}

function normalize(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function translate(text, ns, section, name) {
  const t = normalize(text);
  if (!t) return t;

  // Phase 1: Exact match
  if (dict.exact[t]) return dict.exact[t];

  let result;
  // Phase 2: Pattern matching
  for (const prefixEn of patternPrefixes) {
    if (t.startsWith(prefixEn)) {
      const remainder = stripTrailingPunct(t.slice(prefixEn.length).trim());
      const template = dict.patterns[prefixEn];
      if (remainder) {
        result = template.replace('{0}', wordReplace(remainder));
      } else {
        result = template.replace('{0}', '').replace(/\s+/g, ' ').trim();
      }
      break;
    }
  }

  // Phase 3: Word replacement fallback
  if (!result && /^[A-Za-z]/.test(t) && t.split(' ').length > 1) {
    result = wordReplace(t);
  }

  if (!result) result = t;

  // Check if AI is needed
  if (AI_PROVIDER && needsAI(result)) {
    const normKey = t.toLowerCase().replace(/\s+/g, ' ');
    if (!PENDING.has(normKey)) {
      PENDING.set(normKey, { norm: t, normKey, dictResult: result, occurrences: [] });
    }
    PENDING.get(normKey).occurrences.push({ ns, section, name });
  }

  return result;
}

// ─── AI batch translation ──────────────────────────────────────────

async function batchAiTranslate() {
  if (!AI_PROVIDER || PENDING.size === 0) return;

  loadAiCache();

  // Only translate entries not in cache (cache key = lowercased text)
  const toTranslate = [...PENDING.values()].filter(e => !AI_CACHE.has(e.normKey));
  if (toTranslate.length === 0) {
    console.log(`🤖 All ${PENDING.size} pending items already cached, skipping AI`);
    return;
  }

  const uniqueTexts = [...new Set(toTranslate.map(e => e.norm))];
  const keyPreview = AI_PROVIDER.key.slice(0, 8);
  console.log(`🤖 AI translating ${uniqueTexts.length} descriptions via ${AI_PROVIDER.name} (key: ${keyPreview}...)`);

  // Batch in chunks
  const CHUNK = 30;
  let done = 0;

  for (let i = 0; i < uniqueTexts.length; i += CHUNK) {
    const batch = uniqueTexts.slice(i, i + CHUNK);
    const prompt = `Translate the following English API documentation descriptions (from C# XML /// comments) to Chinese. These describe classes, interfaces, enums, methods in a game modding framework called Dalamud for FFXIV.

Rules:
- Keep ALL C# type names, method names, property names, code snippets in original English (e.g. IAddonEventManager, Dalamud, EntryPoint, etc.)
- Only translate descriptive text
- USE FINAL FANTASY XIV OFFICIAL SIMPLIFIED CHINESE TERMINOLOGY:
  - Aetheryte → 以太水晶 (not 水晶 or 以太石)
  - Teleport → 传送
  - Teleport window → 传送界面
  - Squadron → 部队
  - Trust → 亲信战友
  - Party → 小队
  - Duty → 副本
  - Mount → 坐骑
  - Fate → FATE
  - Status effect → 状态效果
  - Buff → 增益, Debuff → 减益
  - Job gauge → 职业量谱
  - Configuration → 设定 (not 配置)
  - Inventory → 背包
  - Character → 角色
  - Localization → 本地化
  - Attribute → 特性
  - Addon → Addon (keep English)
  - Plugin → 插件
- Output a valid JSON object where keys are the original strings and values are Chinese translations
- No markdown, no extra text, just JSON

Input:
${JSON.stringify(batch, null, 2)}`;

    try {
      const resp = await fetch(AI_PROVIDER.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_PROVIDER.key}`,
        },
        body: JSON.stringify({
          model: AI_PROVIDER.model,
          messages: [
            { role: 'system', content: 'You are a translator for C# API documentation. Output only valid JSON.' },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          max_tokens: 4096,
          temperature: 0.1,
        }),
        signal: AbortSignal.timeout(60000),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${errText.slice(0, 200)}`);
      }

      const data = await resp.json();
      const parsed = JSON.parse(data.choices[0].message.content);

      for (const [orig, translated] of Object.entries(parsed)) {
        const cacheKey = orig.toLowerCase().replace(/\s+/g, ' ');
        AI_CACHE.set(cacheKey, translated);
      }

      done += batch.length;
      process.stdout.write(`\r  🤖 ${done}/${uniqueTexts.length} translated`);
    } catch (err) {
      console.error(`\n  ✗ AI batch failed: ${err.message}`);
    }
  }

  console.log('');
  saveAiCache();
  console.log(`📦 AI cache saved (${AI_CACHE.size} entries)`);
}

// ─── HTML parsing ──────────────────────────────────────────────────

function extractMainContent(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (m) return m[1];
  const a = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  return a ? a[1] : html;
}

function extractNamespaceTitle(html) {
  const m = html.match(/<title[^>]*>Namespace\s+([\w.]+)\s*\|/i);
  return m ? m[1] : null;
}

function extractTypeEntries(mainHtml) {
  const entries = [];

  const parts = mainHtml.split(/<h2[^>]*>/i);
  for (let i = 0; i < parts.length; i++) {
    const sectionMatch = parts[i].match(/^([^<]+)/);
    if (!sectionMatch) continue;
    const sectionName = sectionMatch[1].replace(/<[^>]*>/g, '').trim();
    const sectionContent = parts[i];

    const h3Regex = /<h3[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h3>/gi;
    const h3Positions = [];
    let h3Match;
    while ((h3Match = h3Regex.exec(sectionContent)) !== null) {
      h3Positions.push({
        name: h3Match[2].replace(/<[^>]*>/g, '').trim(),
        start: h3Match.index,
        end: h3Match.index + h3Match[0].length,
      });
    }

    for (let j = 0; j < h3Positions.length; j++) {
      const h3 = h3Positions[j];
      const nextStart = j < h3Positions.length - 1 ? h3Positions[j + 1].start : sectionContent.length;
      const descHtml = sectionContent.slice(h3.end, nextStart);

      const pContents = [];
      const pRegex = /<p>([\s\S]*?)<\/p>/gi;
      let pMatch;
      while ((pMatch = pRegex.exec(descHtml)) !== null) {
        const cleaned = pMatch[1]
          .replace(/<[^>]*>/g, '')
          .replace(/&#x27;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&apos;/g, "'")
          .replace(/\s+/g, ' ')
          .trim();
        if (cleaned) pContents.push(cleaned);
      }

      if (h3.name && !h3.name.startsWith('#')) {
        entries.push({
          section: sectionName,
          name: h3.name,
          description: pContents.join('\n\n'),
        });
      }
    }
  }

  return entries;
}

// ─── Markdown generation ───────────────────────────────────────────

const SECTION_LABELS = {
  Classes: '类',
  Interfaces: '接口',
  Enums: '枚举',
  Delegates: '委托',
  Structs: '结构体',
  'Value Types': '值类型',
  Records: '记录',
};

function translateEntry(entry, ns) {
  // Try dictionary first
  const dictResult = translate(entry.description, ns, entry.section, entry.name);

  // If AI cache has a better translation, use it
  const normKey = normalize(entry.description).toLowerCase().replace(/\s+/g, ' ');
  if (AI_PROVIDER && AI_CACHE.has(normKey)) {
    return AI_CACHE.get(normKey);
  }

  return dictResult;
}

function toMarkdown(namespace, entries) {
  const title = namespace;
  let md = `---\nsidebar_label: "${title}"\n---\n\n`;
  md += `# ${title}\n\n`;
  md += `> 🌐 本页是 [dalamud.dev/api/${namespace}/](https://dalamud.dev/api/${namespace}/) 的中文翻译。\n`;
  md += `> 类型/方法名称保留英文原文，仅翻译说明文字。\n\n`;

  const sections = [...new Set(entries.map(e => e.section))];

  for (const section of sections) {
    const sectionEntries = entries.filter(e => e.section === section);
    if (sectionEntries.length === 0) continue;

    const zhLabel = SECTION_LABELS[section] || section;
    md += `## ${zhLabel}\n\n`;

    for (const entry of sectionEntries) {
      const translated = translateEntry(entry, namespace);
      md += `### ${entry.name}\n\n`;
      md += `${translated}\n\n`;
    }
  }

  return md;
}

// ─── HTTP ──────────────────────────────────────────────────────────

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const resp = await fetch(url, {
        headers: { 'User-Agent': 'Dalamud.Dev.Chinese/1.0' },
        signal: AbortSignal.timeout(20000),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      return await resp.text();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`  Retry ${i + 1}/${retries}: ${err.message}`);
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

// ─── Main ──────────────────────────────────────────────────────────

const KNOWN_NAMESPACES = [
  'Dalamud', 'Dalamud.Configuration', 'Dalamud.Console',
  'Dalamud.Game', 'Dalamud.Game.Addon.Events', 'Dalamud.Game.Addon.Events.EventDataTypes',
  'Dalamud.Game.Addon.Lifecycle', 'Dalamud.Game.Addon.Lifecycle.AddonArgTypes',
  'Dalamud.Game.Agent', 'Dalamud.Game.Agent.AgentArgTypes',
  'Dalamud.Game.Chat', 'Dalamud.Game.ClientState',
  'Dalamud.Game.ClientState.Aetherytes', 'Dalamud.Game.ClientState.Buddy',
  'Dalamud.Game.ClientState.Conditions', 'Dalamud.Game.ClientState.Customize',
  'Dalamud.Game.ClientState.Fates', 'Dalamud.Game.ClientState.GamePad',
  'Dalamud.Game.ClientState.JobGauge.Enums', 'Dalamud.Game.ClientState.JobGauge.Types',
  'Dalamud.Game.ClientState.Keys', 'Dalamud.Game.ClientState.Objects.Enums',
  'Dalamud.Game.ClientState.Objects.SubKinds', 'Dalamud.Game.ClientState.Objects.Types',
  'Dalamud.Game.ClientState.Party', 'Dalamud.Game.ClientState.Statuses',
  'Dalamud.Game.Command', 'Dalamud.Game.Config', 'Dalamud.Game.DutyState',
  'Dalamud.Game.Gui', 'Dalamud.Game.Gui.ContextMenu', 'Dalamud.Game.Gui.Dtr',
  'Dalamud.Game.Gui.FlyText', 'Dalamud.Game.Gui.NamePlate',
  'Dalamud.Game.Gui.PartyFinder.Types', 'Dalamud.Game.Gui.Toast',
  'Dalamud.Game.Inventory', 'Dalamud.Game.Inventory.InventoryEventArgTypes',
  'Dalamud.Game.Inventory.Records', 'Dalamud.Game.NativeWrapper',
  'Dalamud.Game.Network.Structures', 'Dalamud.Game.Network.Structures.InfoProxy',
  'Dalamud.Game.Player', 'Dalamud.Game.Text', 'Dalamud.Game.Text.Evaluator',
  'Dalamud.Game.Text.Evaluator.Internal', 'Dalamud.Game.Text.Noun.Enums',
  'Dalamud.Game.Text.Sanitizer', 'Dalamud.Game.Text.SeStringHandling',
  'Dalamud.Game.Text.SeStringHandling.Payloads',
  'Dalamud.Hooking', 'Dalamud.Hooking.Internal', 'Dalamud.Hooking.Internal.Verification',
  'Dalamud.Interface', 'Dalamud.Interface.Animation', 'Dalamud.Interface.Animation.EasingFunctions',
  'Dalamud.Interface.Colors', 'Dalamud.Interface.Components', 'Dalamud.Interface.DragDrop',
  'Dalamud.Interface.FontIdentifier', 'Dalamud.Interface.GameFonts',
  'Dalamud.Interface.ImGuiBackend.Delegates', 'Dalamud.Interface.ImGuiFileDialog',
  'Dalamud.Interface.ImGuiFontChooserDialog', 'Dalamud.Interface.ImGuiNotification',
  'Dalamud.Interface.ImGuiNotification.EventArgs', 'Dalamud.Interface.ImGuiNotification.Internal',
  'Dalamud.Interface.ImGuiSeStringRenderer', 'Dalamud.Interface.ManagedFontAtlas',
  'Dalamud.Interface.Style', 'Dalamud.Interface.Textures', 'Dalamud.Interface.Textures.Internal',
  'Dalamud.Interface.Textures.TextureWraps', 'Dalamud.Interface.Utility',
  'Dalamud.Interface.Utility.Raii', 'Dalamud.Interface.Utility.Table',
  'Dalamud.Interface.Windowing',
  'Dalamud.IoC', 'Dalamud.Logging.Internal', 'Dalamud.Memory', 'Dalamud.Memory.Exceptions',
  'Dalamud.Networking.Http',
  'Dalamud.Plugin', 'Dalamud.Plugin.Internal.Profiles',
  'Dalamud.Plugin.Internal.Types.Manifest',
  'Dalamud.Plugin.Ipc', 'Dalamud.Plugin.Ipc.Exceptions', 'Dalamud.Plugin.Ipc.Internal',
  'Dalamud.Plugin.SelfTest', 'Dalamud.Plugin.Services', 'Dalamud.Plugin.VersionInfo',
  'Dalamud.Storage', 'Dalamud.Storage.Assets', 'Dalamud.Support',
  'Dalamud.Utility', 'Dalamud.Utility.Numerics', 'Dalamud.Utility.Signatures',
  'Dalamud.Utility.Timing',
];

async function main() {
  console.log(`🔧 Output: ${OUTPUT_DIR}`);
  const providers = AI_PROVIDERS.map(p => p.name).join(' + ') || 'none';
console.log(`🤖 AI translation: ${AI_PROVIDER ? `ENABLED (${providers})` : 'DISABLED (set GITHUB_TOKEN or DEEPSEEK_API_KEY)'}`);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  if (AI_PROVIDER) loadAiCache();

  // Discover namespaces
  let namespaces = [...KNOWN_NAMESPACES];
  try {
    console.log('🌐 Fetching API index page...');
    const indexHtml = await fetchWithRetry(`${API_BASE}/`);
    const discovered = new Set();
    const linkRegex = /<a[^>]*href="\/api\/([\w.]+(?:\.[\w.]+)*)\/"[^>]*>/gi;
    let m;
    while ((m = linkRegex.exec(indexHtml)) !== null) {
      const ns = m[1];
      if (ns && !ns.includes('/') && ns.split('.').length >= 1) discovered.add(ns);
    }
    if (discovered.size > 0) {
      namespaces = [...discovered].sort();
      console.log(`📋 Discovered ${namespaces.length} namespaces`);
    }
  } catch (err) {
    console.warn(`⚠ Index fetch failed, using known list (${namespaces.length})`);
  }

  // Fetch each namespace page
  let success = 0;
  let failed = 0;
  const concurrency = 4;

  for (let i = 0; i < namespaces.length; i += concurrency) {
    const batch = namespaces.slice(i, i + concurrency);
    const results = await Promise.allSettled(
      batch.map(async (ns) => {
        const url = `${API_BASE}/${encodeURIComponent(ns)}/`;
        const progress = `[${i + batch.indexOf(ns) + 1}/${namespaces.length}]`;
        process.stdout.write(`  ${progress} ${ns}... `);

        try {
          const html = await fetchWithRetry(url);
          const mainHtml = extractMainContent(html);
          const resolvedNs = extractNamespaceTitle(html) || ns;
          const entries = extractTypeEntries(mainHtml);

          if (entries.length === 0) {
            console.log('⚠ no entries');
            failed++;
            return;
          }

          const md = toMarkdown(resolvedNs, entries);
          const outFile = path.join(OUTPUT_DIR, `${ns}.md`);
          fs.writeFileSync(outFile, md, 'utf-8');
          console.log(`✓ ${entries.length} entries`);
          success++;
        } catch (err) {
          console.log(`✗ ${err.message}`);
          failed++;
        }
      })
    );
  }

  console.log(`\n✅ Dictionary pass: ${success} succeeded, ${failed} failed`);

  // AI batch translation
  if (AI_PROVIDER && PENDING.size > 0) {
    console.log(`🤖 ${PENDING.size} descriptions flagged for AI translation`);
    await batchAiTranslate();

    // Rebuild files with AI translations
    console.log('📝 Rebuilding files with AI translations...');
    for (let i = 0; i < namespaces.length; i += concurrency) {
      const batch = namespaces.slice(i, i + concurrency);
      await Promise.allSettled(
        batch.map(async (ns) => {
          const filePath = path.join(OUTPUT_DIR, `${ns}.md`);
          if (!fs.existsSync(filePath)) return;

          const url = `${API_BASE}/${encodeURIComponent(ns)}/`;
          try {
            const html = await fetchWithRetry(url);
            const mainHtml = extractMainContent(html);
            const resolvedNs = extractNamespaceTitle(html) || ns;
            const entries = extractTypeEntries(mainHtml);

            if (entries.length === 0) return;

            const md = toMarkdown(resolvedNs, entries);
            fs.writeFileSync(filePath, md, 'utf-8');
          } catch { /* skip if fails */ }
        })
      );
    }
    console.log('✅ AI translation pass complete');
  }

  // Write _category_.json
  const categoryJson = {
    label: '命名空间',
    position: 2,
    link: { type: 'generated-index', description: '所有 Dalamud API 命名空间的中文概述。' },
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, '_category_.json'), JSON.stringify(categoryJson, null, 2), 'utf-8');
  console.log('📁 Created _category_.json');
}

main().catch(err => {
  console.error('\n❌ Fatal:', err);
  process.exit(1);
});
