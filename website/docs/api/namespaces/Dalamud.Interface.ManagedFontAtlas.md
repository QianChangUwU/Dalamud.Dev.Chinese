---
sidebar_label: "Dalamud.Interface.ManagedFontAtlas"
---

# Dalamud.Interface.ManagedFontAtlas

> 🌐 本页是 [dalamud.dev/api/Dalamud.Interface.ManagedFontAtlas/](https://dalamud.dev/api/Dalamud.Interface.ManagedFontAtlas/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### FontAtlasBuildToolkitUtilities​

通过 Dalamud.Interface.ManagedFontAtlas.IFontAtlas 构建字体的便捷功能。

## 结构体

### FluentGlyphRangeBuilder​

流畅的 ImGui 字形范围构建器。

### SafeFontConfig​

Dalamud.Bindings.ImGui.ImFontConfig 的托管版本，以避免不必要的堆分配和使用不安全的代码块。

## 接口

### IFontAtlas​

Dalamud.Bindings.ImGui.ImFontAtlasPtr 的包装器。并不打算供插件实现。

### IFontAtlasBuildToolkit​

用于 Dalamud.Interface.ManagedFontAtlas.IFontAtlasBuildToolkitPreBuild 和 Dalamud.Interface.ManagedFontAtlas.IFontAtlasBuildToolkitPostBuild 的通用内容。并不打算供插件实现。

### IFontAtlasBuildToolkitPostBuild​

在构建状态为 Dalamud.Interface.ManagedFontAtlas.FontAtlasBuildStep.PostBuild 时使用的工具包。并不打算供插件实现。

### IFontAtlasBuildToolkitPreBuild​

在构建状态为 Dalamud.Interface.ManagedFontAtlas.FontAtlasBuildStep.PreBuild 时使用的工具包。并不打算供插件实现。在 Dalamud.Interface.ManagedFontAtlas.FontAtlasBuildStepDelegate 返回后，必须设置 Dalamud.Interface.ManagedFontAtlas.IFontAtlasBuildToolkit.Font，或者至少必须使用 AddFont... 函数将一个字体添加到字体图集中。

### IFontHandle​

表示字体的引用计数句柄。并不打算供插件实现。

### ILockedImFont​

Dalamud.Bindings.ImGui.ImFontPtr 的包装器，确保只要该结构未被释放，相关数据将始终可用。并不打算供插件实现。

## 枚举

### FontAtlasAutoRebuildMode​

如何重建 Dalamud.Interface.ManagedFontAtlas.IFontAtlas。

### FontAtlasBuildStep​

Dalamud.Interface.ManagedFontAtlas.IFontAtlas 的构建步骤。

### FontScaleMode​

指定全局字体缩放应如何影响字体。

## 委托

### FontAtlasBuildStepDelegate​

当需要构建字体时调用的委托。

### IFontHandle.ImFontChangedDelegate​

Dalamud.接口.ManagedFontAtlas.IFontHandle.ImFontChanged 的委托

