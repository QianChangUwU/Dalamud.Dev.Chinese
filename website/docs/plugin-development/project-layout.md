---
sidebar_position: 2
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
