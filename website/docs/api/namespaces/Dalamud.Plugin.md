---
sidebar_label: "Dalamud.Plugin"
---

# Dalamud.Plugin

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin/](https://dalamud.dev/api/Dalamud.Plugin/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### ActivePluginsChangedEventArgs​

包含有关活动插件列表更改的数据。

### PluginUpdate​

检查插件更新的结果，包括最新版本（如果可用）和变更日志（如果可用）。

## 接口

### IActivePluginsChangedEventArgs​

包含有关活动插件列表更改的数据。

### IAsyncDalamudPlugin​

此接口表示一个基本的 Dalamud 插件，异步加载和卸载。所有插件必须实现 Dalamud.Plugin.IDalamudPlugin 或 Dalamud.Plugin.IAsyncDalamudPlugin。

### IDalamudPlugin​

此接口表示一个基本的Dalamud插件。所有插件必须实现Dalamud.Plugin.IDalamudPlugin或Dalamud.Plugin.IAsyncDalamudPlugin。

### IDalamudPluginInterface​

此接口充当与Dalamud和游戏交互所需的各种对象的接口。

### IExposedPlugin​

表示已安装插件的接口，以便向其他插件公开。

## 枚举

### PluginListInvalidationKind​

插件列表更改的原因。

### PluginLoadReason​

此枚举反映加载插件的原因。

## 委托

### IDalamudPluginInterface.ActivePluginsChangedDelegate​

用于监听活动插件列表更改的事件的委托。

### IDalamudPluginInterface.LanguageChangedDelegate​

用于本地化更改的委托，带有两位字母的ISO语言代码。

