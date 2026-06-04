---
sidebar_label: "Dalamud.Storage.Assets"
---

# Dalamud.Storage.Assets

> 🌐 本页是 [dalamud.dev/api/Dalamud.Storage.Assets/](https://dalamud.dev/api/Dalamud.Storage.Assets/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### DalamudAssetExtensions​

Dalamud.DalamudAsset 的扩展方法

## 接口

### IDalamudAssetManager​

Holds Dalamud Assets' handles hostage, so that they do not get closed while Dalamud is running. Also, attempts to load optional assets. Note on 系统.Diagnostics.Contracts.PureAttribute It will help you get notified if you discard the result of 函数, mostly likely because of a mistake. Think of C++ [[nodiscard]]. Also, like the intended meaning of the 特性, such 方法 will not have externally visible state changes.

## 枚举

### DalamudAssetPurpose​

Purposes of a Dalamud 资源.

