---
sidebar_label: "Dalamud"
---

# Dalamud

> 🌐 本页是 [dalamud.dev/api/Dalamud/](https://dalamud.dev/api/Dalamud/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### EntryPoint​

Dalamud 系统的主入口点。

### Localization​

处理 本地化 的类

### SafeMemory​

用于安全内存访问的类。

## 接口

### IServiceType​

服务 类型 的标记类

## 枚举

### DalamudAsset​

指定作为 Dalamud Asset 发送的资产。任何资产都可以在任何时候停止存在，即使枚举值存在。要么发送您自己的资产，要么准备好处理错误。

## 委托

### EntryPoint.InitDelegate​

在从 Dalamud.Boot 初始化 CLR 时使用的委托。

### Localization.LocalizationChangedDelegate​

在语言更改时发生的 Dalamud.Localization.LocalizationChanged 事件的委托。

