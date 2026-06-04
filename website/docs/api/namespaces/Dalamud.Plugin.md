---
sidebar_label: "Dalamud.Plugin"
---

# Dalamud.Plugin

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin/](https://dalamud.dev/api/Dalamud.Plugin/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### ActivePluginsChangedEventArgs​

包含 数据 about changes to the list of active 插件

### PluginUpdate​

The result of checking for an update for a 插件, including the latest version if available, and the changelog if available.

## 接口

### IActivePluginsChangedEventArgs​

包含 数据 about changes to the list of active 插件

### IAsyncDalamudPlugin​

This 接口 represents a basic Dalamud 插件 that loads and unloads asynchronously. All 插件 have to implement either Dalamud.插件.IDalamudPlugin or Dalamud.插件.IAsyncDalamudPlugin.

### IDalamudPlugin​

This 接口 represents a basic Dalamud 插件. All 插件 have to implement either Dalamud.插件.IDalamudPlugin or Dalamud.插件.IAsyncDalamudPlugin.

### IDalamudPluginInterface​

This 接口 acts as an 接口 to various 对象 needed to interact with Dalamud and the game.

### IExposedPlugin​

表示 an installed 插件 to be exposed to other 插件 的接口

## 枚举

### PluginListInvalidationKind​

Causes for a change to the 插件 list.

### PluginLoadReason​

This 枚举 reflects reasons for loading a 插件.

## 委托

### IDalamudPluginInterface.ActivePluginsChangedDelegate​

事件 that listen to changes to the list of active 插件 的委托

### IDalamudPluginInterface.LanguageChangedDelegate​

本地化 change with two-letter iso lang code 的委托

