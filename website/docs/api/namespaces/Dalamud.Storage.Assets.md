---
sidebar_label: "Dalamud.Storage.Assets"
---

# Dalamud.Storage.Assets

> 🌐 本页是 [dalamud.dev/api/Dalamud.Storage.Assets/](https://dalamud.dev/api/Dalamud.Storage.Assets/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### DalamudAssetExtensions​

Dalamud.DalamudAsset 的扩展方法。

## 接口

### IDalamudAssetManager​

保持 Dalamud 资产的句柄为人质，以便在 Dalamud 运行时不会关闭它们。同时，尝试加载可选资产。关于 System.Diagnostics.Contracts.PureAttribute 的说明，它将帮助您在丢弃函数结果时收到通知，这很可能是由于错误。想想 C++ [[nodiscard]]。此外，像属性的预期含义一样，这些方法不会有外部可见的状态变化。

## 枚举

### DalamudAssetPurpose​

Dalamud 资产的用途。

