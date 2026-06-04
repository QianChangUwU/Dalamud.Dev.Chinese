---
sidebar_position: 5
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
