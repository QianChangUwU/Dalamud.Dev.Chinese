---
sidebar_position: 3
---

# 构建 Dalamud

> **提示**：本指南介绍如何从源码构建 Dalamud，适用于打算修改 Dalamud 本身的人。
>
> **如果你只是想创建插件，不需要遵循本指南！** 可以直接跳到[插件开发](/docs/plugin-development/getting-started)部分。

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
