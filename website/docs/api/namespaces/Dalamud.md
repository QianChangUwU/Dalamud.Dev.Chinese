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

类 facilitating 安全内存访问.

## 接口

### IServiceType​

服务 类型 的标记类

## 枚举

### DalamudAsset​

指定 an asset that has been shipped as Dalamud 资源 Any asset can cease to exist at any point even if the 枚举 value exists Either ship your own assets or be prepared for errors

## 委托

### EntryPoint.InitDelegate​

A 委托 used during initialization of the CLR from Dalamud.Boot.

### Localization.LocalizationChangedDelegate​

the Dalamud.本地化.LocalizationChanged 事件 that occurs when the language is changed 的委托

