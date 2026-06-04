import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_BASE = 'https://dalamud.dev/api';
const OUTPUT_DIR = path.resolve(__dirname, '..', 'docs', 'api', 'namespaces');
const TRANSLATIONS_PATH = path.resolve(__dirname, 'api-translations.json');

const dict = JSON.parse(fs.readFileSync(TRANSLATIONS_PATH, 'utf-8'));
const patternPrefixes = Object.keys(dict.patterns).sort((a, b) => b.length - a.length);
const wordEntries = Object.entries(dict.words).sort((a, b) => b[0].length - a[0].length);

// Known 98 namespaces (hardcoded so we don't depend on sidebar scraping)
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

function translate(description) {
  let text = description.trim().replace(/\s+/g, ' ');
  if (!text) return text;

  // Phase 1: Exact match
  if (dict.exact[text]) return dict.exact[text];

  // Phase 2: Pattern matching with {0} placeholder
  for (const prefixEn of patternPrefixes) {
    if (text.startsWith(prefixEn)) {
      const remainder = stripTrailingPunct(text.slice(prefixEn.length).trim());
      const template = dict.patterns[prefixEn];
      if (remainder) {
        // Apply word-level replacements to the remainder only
        const remainderZh = wordReplace(remainder);
        return template.replace('{0}', remainderZh);
      }
      return template.replace('{0}', '').replace(/\s+/g, ' ').trim();
    }
  }

  // Phase 3: Direct word replacement (only if mostly English)
  // Skip if text is already Chinese or mixed
  if (/^[A-Za-z]/.test(text) && text.split(' ').length > 1) {
    return wordReplace(text);
  }

  return text;
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

  // Split into sections by h2
  const parts = mainHtml.split(/<h2[^>]*>/i);
  for (let i = 0; i < parts.length; i++) {
    const sectionMatch = parts[i].match(/^([^<]+)/);
    if (!sectionMatch) continue;
    const sectionName = sectionMatch[1].replace(/<[^>]*>/g, '').trim();

    const sectionContent = parts[i];

    // Extract h3 + p(s)
    const h3Regex = /<h3[^>]*id="([^"]*)"[^>]*>([\s\S]*?)<\/h3>/gi;
    let h3Match;
    let lastIndex = 0;
    const h3Positions = [];

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

      // Content between this h3 and the next h3 (or end of section)
      const descHtml = sectionContent.slice(h3.end, nextStart);

      // Extract text from <p> tags
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
  'Records': '记录',
};

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
      const translated = translate(entry.description);
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
      console.warn(`  Retry ${i + 1}/${retries} for ${url}: ${err.message}`);
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log(`🔧 Output: ${OUTPUT_DIR}`);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Try to discover namespaces from index page, fall back to hardcoded list
  let namespaces = [...KNOWN_NAMESPACES];
  try {
    console.log('🌐 Fetching API index page to discover namespaces...');
    const indexHtml = await fetchWithRetry(`${API_BASE}/`);
    const discovered = new Set();
    const linkRegex = /<a[^>]*href="\/api\/([\w.]+(?:\.[\w.]+)*)\/"[^>]*>/gi;
    let m;
    while ((m = linkRegex.exec(indexHtml)) !== null) {
      const ns = m[1];
      if (ns && !ns.includes('/') && ns.split('.').length >= 1) {
        discovered.add(ns);
      }
    }
    if (discovered.size > 0) {
      namespaces = [...discovered].sort();
      console.log(`📋 Discovered ${namespaces.length} namespaces from index page`);
    } else {
      console.log(`📋 Using known list of ${namespaces.length} namespaces`);
    }
  } catch (err) {
    console.warn(`⚠ Index fetch failed: ${err.message}, using known list (${namespaces.length})`);
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

        const html = await fetchWithRetry(url);
        const mainHtml = extractMainContent(html);
        const resolvedNs = extractNamespaceTitle(html) || ns;
        const entries = extractTypeEntries(mainHtml);

        if (entries.length === 0) {
          console.log(`⚠ no entries`);
          failed++;
          return;
        }

        const md = toMarkdown(resolvedNs, entries);
        const outFile = path.join(OUTPUT_DIR, `${ns}.md`);
        fs.writeFileSync(outFile, md, 'utf-8');
        console.log(`✓ ${entries.length} entries`);
        success++;
      })
    );

    for (const r of results) {
      if (r.status === 'rejected') {
        console.log(`✗ ${r.reason?.message || r.reason}`);
        failed++;
      }
    }
  }

  console.log(`\n✅ Done! ${success} succeeded, ${failed} failed`);

  // Write _category_.json for sidebar organization
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
