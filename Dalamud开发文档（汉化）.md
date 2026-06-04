# Dalamud 开发文档（汉化版）

> 原文：https://dalamud.dev/
> 翻译日期：2026-06-04
> API 版本：15（当前）

---

# 目录

1. [简介](#简介)
2. [行为准则](#行为准则)
3. [构建 Dalamud](#构建-dalamud)
4. [插件开发](#插件开发)
   - [入门指南](#入门指南)
   - [项目布局与配置](#项目布局与配置)
   - [设置插件元数据](#设置插件元数据)
   - [与游戏交互](#与游戏交互)
   - [操作指南](#操作指南)
   - [逆向工程](#逆向工程)
   - [SeString](#sestring)
   - [插件技术考量](#插件技术考量)
   - [术语表](#术语表)
5. [版本与频道](#版本与频道)
6. [发布插件](#发布插件)
7. [开发 FAQ（旧版）](#开发-faq旧版)

---

# 简介

欢迎阅读 Dalamud 开发者文档！

## 常用链接

- 如果你想为 Dalamud 做贡献，请查看[构建 Dalamud](#构建-dalamud) 部分。
- 如果你想学习如何开始插件开发，请查看[插件开发](#插件开发)部分。
- 如果你计划向官方仓库提交插件，请先查看[AI 使用政策](#ai-使用政策官方插件仓库提交)。
- 如果你想了解 Dalamud 的当前状态和最近的变更，请查看新闻部分。
- 如果你只需要原始 API 文档，可以点击此处查看。核心 Dalamud API 有完整的文档！

## 社区

所有 XIVLauncher & Dalamud 社区空间——包括我们的 Discord 服务器和 GitHub 仓库——都受我们的[行为准则](#行为准则)约束。参与前请仔细阅读。

## 贡献

如果你想为这些文档做贡献，发现需要修复的问题，或想编写指南，欢迎查看我们的 GitHub 仓库！

如有任何问题，欢迎加入我们的 Discord 服务器并获取开发者角色。

---

# 行为准则

本行为准则适用于所有 XIVLauncher & Dalamud 社区空间，包括我们的 Discord 服务器、GitHub 仓库，以及成员代表社区的任何场所。

## 我们的承诺

我们承诺让我们的社区成为欢迎、安全、公平的场所，适合所有人。

我们致力于营造一个尊重和促进所有人尊严、权利和贡献的环境，不论其种族、民族、种姓、肤色、年龄、身体特征、神经多样性、残疾、性别或性别认同、性取向、语言、哲学或宗教、国籍或社会出身、社会经济地位、教育水平或其他身份特征。参与的特权同样适用于每一个以善意并遵守本公约参与的人。

## 鼓励的行为

1. 尊重**我们社区的目的**、活动及聚会方式。
2. 与他人**友善和诚实**地交往。
3. 尊重**不同观点和经验**。
4. 对自己的行为和贡献**承担责任**。
5. 优雅地给予和接受**建设性反馈**。
6. 致力于在伤害发生时**修复伤害**。
7. 以其他方式促进和维持**社区的福祉**。

## 限制行为

1. **骚扰**：违反明确表达的界限，或在明确要求停止后继续进行不必要的个人关注。
2. **人身攻击**：针对社区成员或群体发表侮辱、贬低或轻蔑的评论。
3. **刻板印象或歧视**：基于不可改变的身份或特征来定性任何人的个性或行为。
4. **性化**：以在社区背景或目的下通常被认为不适当的亲密方式行事。
5. **违反保密**：未经许可分享或利用他人的个人或私人信息。
6. **危害**：导致、鼓励或威胁对任何人或群体实施暴力或其他伤害。
7. 以其他方式**威胁社区福祉**的行为。

## 举报问题

如要举报可能违规的行为，请联系我们 Discord 服务器上的 @moderator 组成员，或发送包含详细信息的电子邮件。

社区管理员严肃对待违规举报，并将尽力及时回应。

## 处理与修复伤害

1. **警告**：私下书面警告。
2. **临时限制活动**：私下书面警告加上有时限的冷却期。
3. **临时停权**：私下书面警告，附带恢复条件。
4. **永久封禁**：移除所有社区空间、工具和通信渠道的访问权限。

---

# 构建 Dalamud

> **提示**：本指南介绍如何从源码构建 Dalamud，适用于打算修改 Dalamud 本身的人。
>
> **如果你只是想创建插件，不需要遵循本指南！** 可以直接跳到[插件开发](#插件开发)部分。

Dalamud 使用 [Nuke](https://nuke.build) 构建，这是一个针对 C#/.NET 项目的代码优先构建系统。

## 前提条件

- Windows 10/Windows Server 2016 或更高版本
- [Visual Studio 2026](https://visualstudio.microsoft.com/vs/)
  - 需要同时安装"使用 C++ 的桌面开发"和".NET 桌面开发"工作负载。
- [.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Git](https://git-scm.com/downloads)

## 获取源码

```
git clone --recursive https://github.com/goatcorp/Dalamud.git
```

> Dalamud 有多个 Git 子模块。如果克隆仓库时没有使用 `--recursive` 标志，需要使用以下命令手动初始化子模块：
> ```
> git submodule update --init --recursive
> ```

## 构建

在 PowerShell 中，导航到仓库根目录并运行：

```
.\build.ps1
```

这将构建 Nuke 项目并运行默认目标，构建 Dalamud 及其所有组件（包括注入器）。

> 你也可以直接使用 MSBuild 或 IDE 的构建系统来构建。但 CI 使用 Nuke，如果遇到问题，应尝试使用 Nuke 构建以排除构建系统问题。

> 目前不支持在其他操作系统上构建，因为原生组件（如注入器）依赖 Windows API。但你可以通过使用 `./build.sh` 或使用 `dotnet build` 直接构建 `Dalamud` 项目，在 Linux/macOS 上部分构建成功。

## 运行

> **危险**：如果你使用这些说明绕过游戏补丁后 Dalamud 被禁用的限制，后果自负！

构建过程会将注入器输出到 `bin\Debug\Dalamud.Injector.exe`。

### 伪造启动

如果你想在不完全登录游戏的情况下测试 Dalamud，可以使用注入器的"伪造启动"功能：

```
.\Dalamud.Injector.exe launch -f
```

> 如果你的游戏安装在非标准位置，必须使用 `-g` 参数传递 `ffxiv_dx11.exe` 的完整路径。

### 手动注入

要完整测试 Dalamud，需要将其注入到正在运行的游戏进程中。推荐通过 XIVLauncher 启动游戏（禁用 Dalamud 注入），然后运行：

```
.\Dalamud.Injector.exe inject -a
```

> 使用 `help` 参数查看所有可用参数：
> ```
> .\Dalamud.Injector.exe help
> ```

---

# 插件开发

## 入门指南

插件允许你与游戏交互、添加功能、修改功能等。我们要求你尊重[我们的指南](#插件限制)，以确保你的插件被批准进入官方插件仓库，并最大程度降低 Square Enix 采取行动的风险。

> 开始前，请查看：
> - [AI 使用政策](#ai-使用政策官方插件仓库提交)
> - [行为准则](#行为准则)

**我们建议你从 [`SamplePlugin` 仓库](https://github.com/goatcorp/SamplePlugin) 点击"Use this template"开始**，然后根据你的具体需求进行定制。

要分发插件，需要正确打包。这由 [Dalamud.NET.Sdk](https://github.com/goatcorp/Dalamud.NET.Sdk) 处理——详见[设置插件元数据](#设置插件元数据)。

当插件准备好测试/发布时，应向 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库提交拉取请求。**请将测试插件放在 testing/live 文件夹中**。

---

## 项目布局与配置

Dalamud 对项目布局没有严格要求，但仍需满足一些要求。

示例目录结构：

```
MySolution/
├── MyPlugin/
│   ├── MyPlugin.csproj
│   ├── MyPlugin.json
│   ├── packages.lock.json
│   └── Plugin.cs
└── MySolution.sln
```

### 内部名称

插件的 `AssemblyName`（通常自动设置为 `.csproj` 文件名）将成为插件的 **`InternalName`**。一旦设置，此值**不得更改**。

内部名称将用于插件的配置目录、附加到所有日志条目，并用作插件 DLL 和 D17 提交的名称。

### 清单文件

插件 DLL 必须附带一个**清单文件**，包含作者名称、插件简介、内部名称声明等关键信息。

通常，`DalamudPackager` 助手会自动使用项目目录中的模板文件生成清单。此模板文件可以是 `.json` 或 `.yml` 格式，必须按插件的 InternalName 命名。

`DalamudPackager` 的最低清单模板必须包含以下键：

```json
{
  "Name": "My Awesome Plugin",
  "Author": "You!",
  "Punchline": "An awesome plugin that does cool things.",
  "Description": "Did you ever feel like your game could be even more awesome? This plugin is the answer!",
  "RepoUrl": "https://github.com/AwesomePluginDev/MyAwesomePlugin"
}
```

### 插件入口点

Dalamud 会扫描你的 DLL 寻找继承 `IDalamudPlugin` 的类。此类将被初始化，注入构造函数中声明的服务。你的插件只能有**一个**这样的入口点。

由于 `IDalamudPlugin` 继承自 `IDisposable`，你的插件还必须指定 `void Dispose()` 方法来清理资源。插件开发者必须实现功能完整的 dispose 周期，最好不泄漏任何资源。

---

## 设置插件元数据

你需要编写一个*插件清单*来配置插件在安装程序中的显示方式：名称、描述、图标、更新日志等。这是一个 JSON 或 YAML 文件，以插件内部名称命名。

> 使用 YAML 清单时，应将 CamelCase 键替换为 snake_case。例如，JSON 中的 `RepoUrl` 在 YAML 中为 `repo_url`。

### 示例 YAML 清单

```yaml
name: Test Plugin
author: You
punchline: Does nothing!
description: |-
  This is a test plugin - this first line is a summary.
  Down here is a more detailed explanation of what the plugin
  does, manually wrapped to make sure it stays visible in the
  installer.
repo_url: https://example.com
```

### 可用清单键

**必需键：**
- `Name`
- `Author`
- `Description`
- `Punchline`

**可选键：**
- `ApplicableVersion`
- `RepoUrl`
- `Tags`
- `CategoryTags`
- `LoadRequiredState`
- `LoadSync`
- `CanUnloadAsync`
- `LoadPriority`
- `ImageUrls`
- `IconUrl`
- `Changelog`
- `AcceptsFeedback`
- `FeedbackMessage`

**由 DalamudPackager 自动填充（请勿手动设置）：**
- `AssemblyVersion`
- `InternalName`
- `DalamudApiLevel`

### 更新日志

你可以通过三种方式设置插件更新日志：

1. 在 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库的 `manifest.toml` 中包含 `changelog` 字段
2. 在拉取请求描述中编写文本
3. 在插件清单中包含 `Changelog` 键

> 如果你希望更新日志在插件安装程序中可见，必须将其包含在 `manifest.toml` 或插件清单中。

---

## 与游戏交互

几乎所有的插件最终都会以某种方式与游戏本身交互。开发者通常建议按以下优先级进行游戏交互：

1. **尽可能使用 Dalamud 提供的 API**。这些通常是与游戏交互的最安全方式，提供稳定的 API，在 API 升级之外不会变化。
2. 如果 Dalamud API 未暴露所需行为，开发者可以使用 **Client Structs 项目**。它随 Dalamud 一起提供，有效地允许插件将游戏用作库。
3. 如果 Client Structs 项目也未暴露所需行为，Dalamud 提供**逃生通道**，允许使用原始内存和原始函数。

大多数插件将稳定地停留在第 1 和第 2 阶段，第 3 阶段用于尚未被完全逆向工程的新概念。

### 扩展游戏事件

#### 轮询（Polling）

最简单的方法是在每帧检查变化：

```csharp
public class HealthWatcher : IDisposable {
    private uint _lastHealth;
    public HealthWatcher() {
        Plugin.Framework.Update += this.OnFrameworkTick;
    }
    public void Dispose() {
        Plugin.Framework.Update -= this.OnFrameworkTick;
    }
    private void OnFrameworkTick(IFramework framework) {
        var player = Plugin.ObjectTable.LocalPlayer;
        if (player == null) return;
        var currentHealth = player.CurrentHp;
        if (currentHealth == this._lastHealth) return;
        this._lastHealth = currentHealth;
        Plugin.PluginLog.Information("玩家血量已更新为 {health}.", currentHealth);
    }
}
```

#### 钩子函数（Hooking）

当某些事件发生频率较低或没有好的轮询方式时，可以设置"钩子"。

> **警告**：钩子是**高度侵入性**的操作！如果钩子内的代码抛出异常，很可能导致游戏崩溃。

使用 Client Structs 的示例：

```csharp
using SetSavePendingDelegate = RaptureMacroModule.Delegates.SetSavePendingFlag;

public unsafe class MyHook : IDisposable {
    private readonly Hook<SetSavePendingDelegate> _macroSaveHook;

    public MyHook() {
        this._macroSaveHook = Plugin.GameInteropProvider.HookFromAddress<SetSavePendingDelegate>(
            RaptureMacroModule.MemberFunctionPointers.SetSavePendingFlag,
            this.SetSavePendingDetour
        );
        this._macroSaveHook.Enable();
    }

    public void Dispose() {
        this._macroSaveHook.Dispose();
    }

    private void SetSavePendingDetour(RaptureMacroModule* self, bool needsSave, uint set) {
        try {
            Plugin.PluginLog.Information("发生了宏保存！");
        } catch (Exception ex) {
            Plugin.PluginLog.Error(ex, "处理宏保存事件时出错。");
        }
        this._macroSaveHook.Original(self, needsSave, set);
    }
}
```

使用签名（Signature）的示例：

```csharp
public unsafe class MySiggedHook : IDisposable {
    private delegate void SetSavePendingDelegate(RaptureMacroModule* self, bool needsSave, uint set);

    [Signature("45 85 C0 75 04 88 51 3D", DetourName = nameof(SetSavePendingDetour))]
    private Hook<SetSavePendingDelegate>? _macroSaveHook;

    public MySiggedHook() {
        Plugin.GameInteropProvider.InitializeFromAttributes(this);
        this._macroSaveHook?.Enable();
    }

    public void Dispose() {
        this._macroSaveHook?.Dispose();
    }

    private void SetSavePendingDetour(RaptureMacroModule* self, bool needsSave, uint set) {
        try {
            Plugin.PluginLog.Information("发生了宏保存！");
        } catch (Exception ex) {
            Plugin.PluginLog.Error(ex, "处理宏保存事件时出错。");
        }
        this._macroSaveHook!.Original(self, needsSave, set);
    }
}
```

### 调用游戏代码

有时你需要让游戏本身执行某些操作，即将游戏代码用作库。

使用 Client Structs 的示例：

```csharp
public unsafe bool IsPlayerMentor() {
    var playerStatePtr = PlayerState.Instance();
    return playerStatePtr->IsMentor();
}
```

#### 创建自定义委托

当 Client Structs 中没有所需方法时：

```csharp
public class GameFunctions {
    private delegate byte IsQuestCompletedDelegate(ushort questId);

    [Signature("E8 ?? ?? ?? ?? 41 88 84 2C")]
    private readonly IsQuestCompletedDelegate? _isQuestCompleted = null;

    public GameFunctions() {
        Plugin.GameInteropProvider.InitializeFromAttributes(this);
    }

    public bool IsQuestCompleted(ushort questId) {
        if (this._isQuestCompleted == null)
            throw new InvalidOperationException("未找到 IsQuestCompleted 签名！");
        return this._isQuestCompleted(questId) > 0;
    }
}
```

#### 使用函数指针的更简洁方式

```csharp
[Signature("E8 ?? ?? ?? ?? 41 88 84 2C")]
private readonly delegate* unmanaged<ushort, byte> _isQuestCompletedDelegate;
```

#### 使用 SigScanner

```csharp
public class SomeSigWrapper {
    private readonly delegate* unmanaged<ushort, byte> _isQuestCompletedDelegate;

    public SomeSigWrapper() {
        var fptr = Plugin.SigScanner.ScanText("E8 ?? ?? ?? ?? 41 88 84 2C");
        this._isQuestCompletedDelegate = (delegate* unmanaged<ushort, byte>) fptr;
    }
}
```

---

## 操作指南

### AddonLifecycle

此服务提供对 `Addon` 各种状态和状态变更的便捷访问。

**主要目标**：让修改原生 UI 或从 addon 获取数据变得简单，无需逆向工程和钩子。

#### 提供的接口

```csharp
public interface IAddonLifecycle {
    public delegate void AddonEventDelegate(AddonEvent type, AddonArgs args);
    void RegisterListener(AddonEvent eventType, IEnumerable<string> addonNames, AddonEventDelegate handler);
    void RegisterListener(AddonEvent eventType, string addonName, AddonEventDelegate handler);
    void RegisterListener(AddonEvent eventType, AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, IEnumerable<string> addonNames, [Optional] AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, string addonName, [Optional] AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, [Optional] AddonEventDelegate handler);
    void UnregisterListener(params AddonEventDelegate[] handlers);
}
```

#### 注册事件

```csharp
AddonLifecycle.RegisterListener(AddonEvent.PreDraw, "FieldMarker", OnPreDraw);
AddonLifecycle.RegisterListener(AddonEvent.PostUpdate, "FieldMarker", OnPostUpdate);
AddonLifecycle.RegisterListener(AddonEvent.PostDraw, new[] { "Character", "FieldMarker", "NamePlate" }, OnPostDraw);
```

#### 取消注册事件

```csharp
AddonLifecycle.UnregisterListener(AddonEvent.PostDraw, new[] { "Character", "FieldMarker", "NamePlate" }, OnPostDraw);
AddonLifecycle.UnregisterListener(OnPreDraw, OnPostUpdate);
```

### AddonEventManager

此服务提供从原生游戏 UI 添加和删除自定义事件的管理器。

```csharp
public interface IAddonEventManager {
    public delegate void AddonEventHandler(AddonEventType atkEventType, nint atkUnitBase, nint atkResNode);
    IAddonEventHandle? AddEvent(nint atkUnitBase, nint atkResNode, AddonEventType eventType, AddonEventHandler eventHandler);
    void RemoveEvent(IAddonEventHandle eventHandle);
    void SetCursor(AddonCursorType cursor);
    void ResetCursor();
}
```

### 迁移到 Dalamud.NET.Sdk

**从 DalamudPackager 迁移：**
1. 从项目中移除 DalamudPackager 引用
2. 打开 `.csproj` 文件
3. 将 `<Project Sdk="Microsoft.NET.Sdk">` 替换为 `<Project Sdk="Dalamud.NET.Sdk/15.0.0">`
4. 移除 Dalamud 库的 `Reference` 项（SDK 已包含）
5. 移除 `DalamudLibPath` 属性

**从 Targets 文件迁移：**
1. 删除 `Dalamud.Plugin.Bootstrap.targets` 文件
2. 删除 `<Import Project="Dalamud.Plugin.Bootstrap.targets"/>`
3. 如上所述修改 SDK 引用

---

## 逆向工程

### 入门

逆向工程非常困难，逆向像 FFXIV 这样的大型游戏更是难上加难。

**核心概念**：FFXIV 在你的机器上运行，不断执行代码。社区创建并维护了 [FFXIVClientStructs](https://github.com/aers/FFXIVClientStructs) 项目，提供了游戏内部结构的信息和 C# 绑定。

#### 静态分析

使用交互式反汇编器/反编译器阅读反汇编代码。常用工具：
- [Hex-Rays IDA](https://hex-rays.com/)
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra)
- [Binary Ninja](https://binary.ninja/)

#### 动态分析

实时检查代码行为。常用工具：
- [Cheat Engine](https://www.cheatengine.org/)
- [x64dbg](https://x64dbg.com/)
- [ReClass.NET](https://github.com/ReClassNET/ReClass.NET)

### 函数、偏移量和签名

**函数偏移**：函数在程序内存空间中从基地址开始的特定偏移量。每次游戏更新都会变化。

**签名（Signature）**：唯一标识函数起始位置或引用的一组特定字节（十六进制字符串）。例如 `E8 ?? ?? ?? ?? 41 88 84 2C`。签名更加稳定，可能跨越多个大版本。

### 使用自定义 ClientStructs

如需使用自定义 ClientStructs，更新 `.csproj`：

```xml
<PropertyGroup>
    <Use_Dalamud_FFXIVClientStructs>false</Use_Dalamud_FFXIVClientStructs>
</PropertyGroup>
<ItemGroup>
    <ProjectReference Include="..\FFXIVClientStructs\FFXIVClientStructs\FFXIVClientStructs.csproj" Private="True" />
    <ProjectReference Include="..\FFXIVClientStructs\InteropGenerator.Runtime\InteropGenerator.Runtime.csproj" Private="True" />
</ItemGroup>
```

在插件构造函数中手动初始化：

```csharp
InteropGenerator.Runtime.Resolver.GetInstance.Setup(
    SigScanner.SearchBase,
    DataManager.GameData.Repositories["ffxiv"].Version,
    new FileInfo(Path.Join(pluginInterface.ConfigDirectory.FullName, "SigCache.json")));
FFXIVClientStructs.Interop.Generated.Addresses.Register();
InteropGenerator.Runtime.Resolver.GetInstance.Resolve();
```

---

## SeString

游戏使用自定义的空终止字符串实现，允许字符串携带二进制负载。

> 本指南使用最新的 C# 实现：Lumina 的 `ReadOnlySeString` 或 `ReadOnlySeStringSpan` 以及 `SeStringBuilder`。
> 旧的 `Lumina.Text.SeString` 类不应再使用。

### 负载（Payloads）

每个负载结构如下：
- 起始字节 (`0x02`)
- 宏代码（1 字节）
- 宏长度（整数表达式）
- 宏特定的表达式
- 结束字节 (`0x03`)

**粗体文本示例：**

宏字符串 `<bold(1)>` 启用粗体，`<bold(0)>` 禁用粗体。

编程方式（三种方式）：

**方式 1：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .BeginMacro(MacroCode.Bold)
    .AppendIntExpression(1)
  .EndMacro()
  .Append("Player Name")
  .BeginMacro(MacroCode.Bold)
    .AppendIntExpression(0)
  .EndMacro()
  .Append("!")
  .ToReadOnlySeString();
```

**方式 2：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .AppendSetBold(true)
  .Append("Player Name")
  .AppendSetBold(false)
  .Append("!")
  .ToReadOnlySeString();
```

**方式 3：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .AppendBold("Player Name")
  .Append("!")
  .ToReadOnlySeString();
```

### 表达式类型

#### 整数表达式
- 首字节在 `> 0x00` 且 `< 0xD0` 之间：值 = 字节 - 1
- 首字节在 `>= 0xF0` 且 `<= 0xFE` 之间：变长编码

#### 占位符表达式
- `0xD8`-`0xDF`: 时间相关（毫秒、秒、分、时、日、周、月、年）
- `0xEC`: 堆栈颜色

#### 二进制表达式（比较运算符）
- `0xE0`: >=
- `0xE1`: >
- `0xE2`: <=
- `0xE3`: <
- `0xE4`: ==
- `0xE5`: !=

#### 参数表达式
- `0xE8`: 本地数字参数 (lnum#)
- `0xE9`: 全局数字参数 (gnum#)
- `0xEA`: 本地字符串参数 (lstr#)
- `0xEB`: 全局字符串参数 (gstr#)

**已知的全局参数示例：**
- 索引 1: 玩家名称（字符串）
- 索引 4: 玩家性别（整数）
- 索引 11: 艾欧泽亚时间-小时（整数）
- 索引 12: 艾欧泽亚时间-分钟（整数）
- 索引 68: 玩家职业ID（整数）
- 索引 69: 玩家等级（整数）
- 索引 93: 区域类型ID（整数）

#### 字符串表达式
类型字节为 `0xFF`，后跟整数表达式（长度）和嵌套的 SeString。

### 宏列表

| 代码 | 名称 | 描述 |
|------|------|------|
| 0x06 | SetResetTime | 设置重置时间到上下文时间存储 |
| 0x07 | SetTime | 设置指定时间到上下文时间存储 |
| 0x08 | If | 测试表达式并使用相应子表达式 |
| 0x09 | Switch | 多路分支选择 |
| 0x0A | PcName | 添加角色名称 |
| 0x0B | IfPcGender | 测试角色性别 |
| 0x0C | IfPcName | 测试角色名称 |
| 0x0D | Josa | 韩语助词 |
| 0x0E | Josaro | 韩语助词（ro） |
| 0x0F | IfSelf | 测试是否为本地玩家 |
| 0x10 | NewLine | 换行 |
| 0x11 | Wait | 等待指定时长 |
| 0x12 | Icon | 添加图标 |
| 0x13 | Color | 设置文本前景色 |
| 0x14 | EdgeColor | 设置文本边框色 |
| 0x15 | ShadowColor | 设置文本阴影色 |
| 0x16 | SoftHyphen | 软连字符 |
| 0x17 | Key | 用途未知 |
| 0x18 | Scale | 用途未知 |
| 0x19 | Bold | 设置粗体 |
| 0x1A | Italic | 设置斜体 |
| 0x1B | Edge | 用途未知 |
| 0x1C | Shadow | 用途未知 |
| 0x1D | NonBreakingSpace | 不间断空格 |
| 0x1E | Icon2 | 动态图标（根据手柄配置重映射） |
| 0x1F | Hyphen | 连字符 |
| 0x20 | Num | 十进制整数 |
| 0x21 | Hex | 十六进制整数 |
| 0x22 | Kilo | 千分位格式 |
| 0x23 | Byte | 可读字节格式 |
| 0x24 | Sec | 零填充两位数字 |
| 0x25 | Time | 用途未知 |
| 0x26 | Float | 浮点数 |
| 0x27 | Link | 链接区域 |
| 0x28 | Sheet | 从数据表读取列 |
| 0x29 | String | 按原样添加字符串 |
| 0x2A | Caps | 全大写字符串 |
| 0x2B | Head | 首字母大写 |
| 0x2C | Split | 分割字符串 |
| 0x2D-0x33 | 各种字符串处理宏 | |

---

## 插件技术考量

### 窗口 API
对于常规窗口（如设置和工具窗口），应使用 [Dalamud Windowing API](https://dalamud.dev/api/Dalamud.Interface.Windowing/)。

### 数据处理
强烈推荐使用 [Lumina](https://github.com/NotAdam/Lumina) 而非 XIVAPI。Lumina 使用本地游戏文件，始终最新且准确。

### 性能约束
应尽量减少对游戏性能的影响。可以通过开发者菜单（`/xldev`）中的"Plugin Statistics"窗口来调试性能问题。

### 后端服务器通信

插件可以与维护者运行的后端服务通信，但需满足以下要求：

- 发送最少量的必要数据
- 非必要数据收集需用户明确选择加入
- 使用伪随机标识符（或不用标识符）
- 必须使用加密通信（HTTPS/TLS）
- 必须通过 DNS 主机名而非 IP 地址连接

---

## 术语表

### 面向玩家的系统

| 系统 | 内部名称 |
|------|---------|
| 配饰 | Ornament |
| 冒险者铭牌 | CharaCard |
| 精炼 | Purify |
| 衣柜 | Cabinet |
| 青魔法师 | AOZ |
| 博兹雅 | MYC |
| 聊天气泡 | MiniTalk |
| 陆行鸟伙伴 | Buddy |
| 陆行鸟出租 | ChocoboTaxi |
| 陆行鸟赛跑 | RaceChocobo |
| 制作日志 | RecipeNote |
| 自定义交付 | SatisfactionSupply |
| 友好部族 | 取决于具体部族 |
| 仙人仙乐 | WeeklyPuzzle |
| 幻化柜 | MiragePrismBox |
| 幻化模板 | MiragePrismPlate |
| 狩猎通缉令 | MobHunt |
| 伊修加德复兴 | HwdDev |
| 无人岛 | MJI |
| 市场公告板 | ItemSearch |
| 宠物指南 | MinionNoteBook |
| 坐骑指南 | MountNoteBook |
| 新人频道 | BeginnerChat |
| 亲信战友 | Dawn |
| 异变/绝命战士 | VVD |

### 技术术语

| 术语 | 描述 |
|------|------|
| AccountId | 账户上所有角色共享的唯一ID，仅当前游戏会话有效 |
| Addon | 用户界面中的窗口，即 AtkUnitBase |
| Agent | 管理 Addon 的控制器，处理事件和回调 |
| Atk | FFXIV UI 使用的库名称，推测为 "Addon Toolkit" 缩写 |
| BNpc/BattleNpc | 具有战斗能力的 NPC，如敌人和宠物 |
| ContentId | 玩家角色的唯一 ID，用于本地保存角色设置 |
| ENpc/EventNpc | EventHandler 控制的 NPC，如任务发布者和商人 |
| EObj/EventObject | EventHandler 控制的可交互对象 |
| EntityId | 当前区域中实体的唯一 ID |
| Rapture | FFXIV 的代号 |

### 程序与库

| 名称 | 描述 |
|------|------|
| Dalamud | FFXIV 的插件开发框架，允许开发者编写自定义 C# 插件 |
| EXDSchema | 社区维护的 FFXIV 内部二进制 Excel 文件的架构定义仓库 |
| FFXIVClientStructs | 集中社区对游戏内存布局和函数研究的库 |
| Lumina | 从 FFXIV 专有文件格式读取游戏数据的库 |
| Lumina.Excel | 使用 EXDSchema 生成 C# 结构体以方便读取游戏 Excel 表的库 |
| XIVLauncher | FFXIV 启动器的自定义现代替代品 |

---

# 版本与频道

Dalamud 有两个版本相关的主要概念：**API 级别**和**频道/分支**。

## 摘要

| 频道 | 分支 | API 级别 | 稳定性 | 推荐用户 |
|------|------|---------|--------|---------|
| Release | master | 15 | 最高 | 自动分配给大多数用户 |
| Canary | master | 14 | 非常高 | 自动分配给少量用户 |
| Staging | master | 15 | 中等 | 核心/插件开发者、测试用户 |

## API 级别

API 级别是一个数字，每当 Dalamud API 发生破坏性变更时递增。

### 历史记录

| API 级别 | 首个 Dalamud 版本 | 首个游戏版本 | .NET 版本 | 首次提交 |
|---------|-----------------|-------------|-----------|---------|
| 15 | 15.0.0.0 | 补丁 7.5 | .NET 10.0 | 2026-05-01 |
| 14 | 14.0.0.0 | 补丁 7.4 | .NET 10.0 | 2025-12-20 |
| 13 | 13.0.0.0 | 补丁 7.3 | .NET 9.0 | 2025-08-10 |
| 12 | 12.0.0.0 | 补丁 7.2 | .NET 9.0 | 2025-03-28 |
| 11 | 11.0.0.0 | 补丁 7.1 | .NET 8.0 | 2024-11-20 |
| 10 | 10.0.0.0 | 补丁 7.0 | .NET 8.0 | 2024-07-05 |
| 9 | 9.0.0.0 | 补丁 6.5 | .NET 7.0 | 2023-10-05 |
| 8 | 7.4.0.0 | 补丁 6.3 | .NET 7.0 | 2023-01-10 |
| 7 | 7.0.0.0 | 补丁 6.2 | .NET 6.0 | 2022-08-23 |
| 6 | 6.4.0.0 | 补丁 6.1 | .NET 5.0 | 2022-04-13 |
| 5 | 6.1.0.0 | 补丁 6.0 | .NET 5.0 | 2021-12-04 |
| 4 | 6.0.0.17? | 补丁 5.57hf? | .NET 5.0 | 2021-07-12 |
| 3 | 5.2.3.5? | 补丁 5.45? | .NET 4.7.2 | 2021-04-01 |
| 2 | 5.1.1.2? | 补丁 5.4? | .NET 4.7.2 | 2020-12-08 |
| 1 | 4.9.8.2 | 补丁 5.25? | .NET 4.7.2 | 2020-06-11 |

## 分支与频道

### 频道

- **Release（发布）**：默认频道。推荐大多数用户使用。
- **Canary（金丝雀）**：新标记的 Dalamud 版本推送至此频道。自动分配给 Release 频道的少量用户。
- **Staging（暂存，stg）**：在发布版本标记前，`master` 的最新提交推送至此频道。

### 分支

- **master**：Dalamud 的主要开发分支。用于所有发布版本。

### 各版本更新内容

#### Dalamud v15 新特性（API 15，当前版本）

- **IAsyncDalamudPlugin**：新的异步插件基接口，减少加载/卸载时的异步工作摩擦
- **IChatGui**：事件参数移至 `IChatMessage` 接口；`XivChatType` 值现在正确解析
- **ImRaii**：`IEndObjects` 已移除，改为 `ref struct` 实现
- **字体资产**：语言特定的 Noto Sans 字体已统一并重命名
- **IAgentLifecycle**：新增 `PreventOriginal` 函数
- **IAddonLifecycle**：新增 `PreventOriginal` 函数
- **IClientState**：`ZoneInitEventArgs` 更新为使用 RowRefs
- **IDutyState**：新接口 `IDutyStateEventArgs`
- **枚举重新同步**：多个枚举已与 FFXIVClientStructs 重新同步
- **SDK**：Dalamud.NET.Sdk v15.0.0，DalamudPackager v15.0.0

#### Dalamud v14 新特性

- **升级到 .NET 10 / C# 14**
- **命名空间变更**：所有服务接口现在位于 `Dalamud.Plugin.Services` 命名空间
- **ImAnim v1.0.0 绑定**：新的动画引擎
- **新服务：IPlayerState**：`PlayerState` 的部分包装
- **新服务：IUnlockState**：检查各种内容和收藏品的解锁状态
- **新服务：IReliableFileStorage**：可靠的文件读写服务
- **SeStringRenderer**：可直接渲染 SeString 到纹理
- **Font Awesome 从 6.4.2 更新到 7.1.0**
- **IAddonLifecycle 重写**：通过替换虚拟表实现

#### Dalamud v13 新特性

- **新的 ImGui 绑定**：源自 Hexa.NET.ImGui
- **IGameNetwork 已移除**
- **AtkUnitBase、AgentInterface 和 UIModule 的新包装结构体**
- **IAddonLifecycle**：`AddonArgs.Addon` 现在为 `AtkUnitBasePtr` 类型
- **IDalamudPluginInterface**：聊天链接处理器移至 IChatGui
- **IObjectTable**：新增多个枚举器

#### Dalamud v12 新特性

- **升级到 .NET 9**
- **ISeStringEvaluator 服务**：新增实验性服务
- **IObjectTable 等的主线程检查**：非主线程操作会抛出 `InvalidOperationException`

#### Dalamud v11 新特性

- **升级到 Lumina 5**：Excel 接口重大变更
- **SeString 渲染器**：新的 SeString 渲染器
- **IClientState**：新增 `ClassJobChanged` 和 `LevelChanged` 事件

#### Lumina 5 迁移指南

- **Excel 行现在是值类型**（`readonly struct`）
- **所有列按需访问**
- **新的子行特定类型**：`SubrowCollection<T>`、`SubrowRef<T>` 等
- **LazyRow 现在是 RowRef**：拆分为 `RowRef<T>`、`SubrowRef<T>` 和 `RowRef`
- **透明 RSV 解析**
- 新的异常类型

#### Dalamud v10 新特性

- **新 API**：`IConsole` 和 `IMarketBoard`
- **接口重构**：大多数公开类已接口化
- **ITextureProvider 重写**：更高效、更易用

#### Dalamud v9 新特性

- **控制台重做**：支持过滤器
- **IPluginLog 服务**
- **DtrBarEntry 增强**：支持工具提示和 OnClick 事件
- **IAddonLifecycle 和 IAddonEventManager 服务**
- **ITextureProvider 新服务**
- **所有服务必须通过接口使用**
- **IDataManager 中的图标/纹理功能移至 ITextureProvider**

---

# 发布插件

## 高级插件发布

### 全局禁用插件

通过 `bannedPlugin.json` 文件可以实现，该文件位于 [DalamudAssets](https://github.com/goatcorp/DalamudAssets) 仓库。

```json
{
  "Name": "插件内部名称",
  "AssemblyVersion": "要禁用的版本",
  "Reason": "显示给用户的原因（可选）"
}
```

## AI 使用政策（官方插件仓库提交）

### TL;DR

如果 AI 有帮助，可以使用，但必须理解、测试并能够解释你的代码。披露你的 AI 使用程度。完全由 AI 生成的提交将被自动拒绝；未披露的 AI 使用或重复违规将导致封禁。

### 披露级别

- **None（无）**：未使用任何 AI 工具。*无需披露。*
- **Hint（提示）**：仅 AI 自动补全或内联建议。*无需披露。*
- **Assist（辅助）**：人类主导，AI 按需用于特定任务。
- **Pair（协作）**：人类和 AI 全程积极参与，贡献大致相等。
- **Copilot（副驾驶）**：AI 实现，人类规划和审查。
- **Auto（自动）**：AI 自主行动，人类仅提供最低限度指导。

### 要求

- 提交前亲自测试插件
- "你为什么这样实现？"的答案永远不应是"我不确定，AI 做的"
- 验证 AI 输出——它经常弄错 Dalamud 及相邻 API
- 尊重并接受反馈

### 资源（图标、图片、音乐、声音、纹理）

AI 生成的资源比代码更显眼且更有争议。建议制作手工图标，哪怕是用 MS Paint 制作的粗糙图标也比 AI 生成的图标更好。

### 翻译

AI 辅助翻译可以接受，特别是作为占位符。建议尽可能咨询母语者。

## 审批流程

### 技术细节

- 官方仓库中的所有插件都是**开源的**
- 插件开发者通过提交"提交哈希"来提交插件
- 云构建系统下载源码、构建插件并输出"差异"
- 差异由插件审批团队检查

### 插件审批团队

由 6 名志愿者组成，是主观选择的，具有技术能力和安全意识，本身也是插件开发者。

### 新提交

- 检查是否符合指南、审批标准和技术标准
- 团队投票：通过 4 票赞成即批准
- 每个团队成员拥有一票否决权
- 新插件必须经过测试轨道

### 插件更新

只需一名团队成员批准，有助于保持队列规模较小。

## 发布到自定义仓库

### 仓库 URL

指向特定格式 JSON 文件的 URL，包含存储条目的数组。

```json
[
  {
    "Author": "A Plugin Developer",
    "Name": "A Custom Plugin",
    "InternalName": "ACustomPlugin",
    "AssemblyVersion": "1.0.0.0",
    "DalamudApiLevel": 10,
    "Punchline": "A short blurb",
    "DownloadLinkInstall": "https://example.com/path/to/output.zip",
    "DownloadLinkUpdate": "https://example.com/path/to/release/output.zip",
    "LastUpdate": "1701231234"
  }
]
```

### 存储条目键

额外支持：
- `IsHide`：隐藏插件
- `DownloadCount`：下载计数
- `DownloadLinkInstall`：安装下载链接
- `DownloadLinkUpdate`：更新下载链接
- `ImageUrls`：预览图片数组
- `IconUrl`：图标 URL

### 测试键

- `IsTestingExclusive`：仅测试用户可见
- `TestingAssemblyVersion`：测试版本
- `TestingChangelog`：测试更新日志
- `TestingDalamudApiLevel`：测试目标的 API 级别
- `DownloadLinkTesting`：测试版本下载链接

## 插件限制

### 基本原则

- 插件不应以人类玩家无法做到的方式与游戏服务器交互
- 插件不应增强、改变或干扰战斗（除非仅提供己方队伍信息并以不同方式呈现）
- 插件不应干涉 Square Enix 的金钱利益
- 插件不应提供解析、战斗日志、DPS 计量器等功能
- 插件不得以任何形式收集除自身以外的玩家角色的账户ID
- 插件不得硬依赖违反指南的其他插件
- 插件不得在竞技/PvP 环境中提供任何优势

### 常见不被允许的插件

- 表情/动作循环、跳过过场动画、跳过对话框、自动制作、自动拾取
- 好友列表登录/登出提醒（技术上不可能）
- 非预警机制的可见 AOE 标记、摄像机缩放调整
- FFLogs 集成、伤害解析器/ACT 插件
- 绕过商城购买（如幻想药）
- PvP 相关任何插件

### 不确定？

如果你不确定插件想法是否违反指南，请先在 Discord 中联系我们。插件审批委员会将评估你的想法。

## 提交流程

### D17 工作流

Dalamud 的插件工作流由 [Plogon](https://github.com/goatcorp/Plogon) 系统管理。

两个轨道：
- **stable（稳定）**：面向公众的构建版本
- **testing（测试）**：实验性或新版本

### 提交插件

向 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库提交拉取请求。

目录结构：

```
MyPluginName/
├── manifest.toml
└── images/
    ├── icon.png
    ├── image1.png [可选]
    ├── image2.png [可选]
    └── image3.png [可选]
```

`manifest.toml` 示例：

```toml
[plugin]
repository = "https://github.com/goatcorp/SamplePlugin.git"
commit = "765d9bb434ac99a27e9a3f2ba0a555b55fe6269d"
owners = ["goaaats"]
project_path = "SamplePlugin"
changelog = "Added Herobrine"
```

图标要求：1:1 宽高比，64x64 到 512x512 像素之间。

---

# 开发 FAQ（旧版）

> 🚧 抱歉，施工中！
> 我们正在更新和扩展文档，部分信息可能暂时过时。

## 入门

### 如何开始？

推荐使用 C#。获取最新版 Visual Studio Community 版。

**Dalamud 插件：** 建议从模板仓库开始：
- [SamplePlugin](https://github.com/goatcorp/SamplePlugin)
- [DalamudPluginProjectTemplate](https://github.com/karashiiro/DalamudPluginProjectTemplate)
- [PluginTemplate](https://github.com/lmcintyre/PluginTemplate)

### 哪里寻求帮助？

Discord 的 #dev 频道。

### 如何热重载插件？

Dalamud 设置 > Experimental > Dev Plugin Locations，添加插件所在文件夹或插件本身。

### 如何调试插件？

1. 使用 `/xldev` 开发者菜单，Dalamud > Enable AntiDebug
2. Visual Studio 中 Debug > Attach to Process，选择 FF14 进程
3. 确保同时勾选 Native code 和 Managed (.NET 4.x) code

### 如何在代码中使用 FFXIVClientStructs？

在 `.csproj` 中添加引用：

```xml
<Reference Include="FFXIVClientStructs">
  <HintPath>$(AppData)\XIVLauncher\addon\Hooks\dev\FFXIVClientStructs.dll</HintPath>
</Reference>
```

## 更新

### API 版本升级时会发生什么？

插件将不再被 Dalamud 加载。需要更新到最新 API 版本。

### 如何跟上 API 变化？

关注 Discord 服务器。首次提交插件后将获得 Plugin Developer 角色。

### 如何修复 "Nothing inherits from IDalamudPlugin"？

为每个引用添加 `<Private>false</Private>`，清理输出文件夹并重新构建。

### 游戏更新时会发生什么？

等待 Dalamud 更新，更新插件确保兼容，重新打包并重新上传。

## 插件收养

### 不想再维护插件了？

通知社区插件可被收养。如想阻止他人接手，请在 Discord 中告知管理员并提供理由。

### 停止更新插件会怎样？

- 落后当前 API 超过 3 个月：其他开发者可在合理努力联系你后收养
- 落后超过 6 个月：其他开发者可直接收养

### 如何收养现有插件？

满足以下任一条件：
1. 当前维护者同意
2. 落后当前 API 超过 3 个月且已尽力联系原开发者
3. 落后当前 API 超过 6 个月

## 开发

### Dalamud 服务如何工作？

Dalamud 由多个带有 `PluginInterfaceAttribute` 的服务组成。可以通过插件构造函数注入：

```csharp
public Plugin(
    DalamudPluginInterface pluginInterface,
    CommandManager commandManager)
```

或通过静态变量：

```csharp
[PluginService]
public static DalamudPluginInterface PluginInterface { get; private set; }
```

### 可用服务列表

- DataManager、AetheryteList、BuddyList、Condition、FateTable、GamepadState、JobGauges、KeyState、ObjectTable、TargetManager、PartyList、ClientState、CommandManager、ContextMenu、DtrBar、FlyTextGui、PartyFinderGui、ToastGui、ChatGui、GameGui、LibcFunction、GameNetwork、SeStringManager、ChatHandlers、Framework、SigScanner、TitleScreenMenu

### 世界坐标与地图坐标转换

参考 [ffxiv-datamining MapCoordinates 文档](https://github.com/xivapi/ffxiv-datamining/blob/master/docs/MapCoordinates.md)。

## 逆向工程

### 如何开始逆向工程？

1. 需要交互式反汇编器/反编译器（IDA Pro 或 Ghidra）
2. 反汇编 `ffxiv_dx11.exe`
3. 使用 [FFXIVClientStructs 脚本](https://github.com/aers/FFXIVClientStructs/tree/main/ida) 自动填充社区发现
4. 也可以使用动态分析（x64dbg、Cheat Engine）

### 如何钩子游戏函数？

1. 导入 `Dalamud.Hooking`
2. 创建与目标函数签名相同的委托类型
3. 创建 `Hook<YourDelegateType>` 变量
4. 创建自定义代码函数
5. 初始化钩子并启用
6. 在 Dispose 中禁用并释放钩子

## 调试游戏

### 安装 Visual Studio

下载 Visual Studio Community 版，选择"Just-In-Time debugger"组件。

### 配置 Visual Studio

Debug > Options > Debugging > General，禁用"Enable Just My Code"。

### 配置 Dalamud

游戏中输入 `/xldev`，打开 Dalamud 菜单，勾选 "Enable Anti-debug"。

### 附加调试器

Debug > Attach to Process，选择 Managed (.NET core, .NET 5+) 和 Native，选择 `ffxiv_dx11.exe`。

### 报告问题

需要包含：
1. 调用堆栈（Call Stack）
2. 异常信息（Exception）
3. 基地址（Base Address）
4. Dalamud 日志

---

> 本文档由 https://dalamud.dev/ 的开发者文档翻译整理而成。
> 原始版权归 goatcorp/Dalamud 项目所有。
