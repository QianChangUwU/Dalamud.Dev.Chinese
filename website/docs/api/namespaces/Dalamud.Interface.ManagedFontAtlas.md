---
sidebar_label: "Dalamud.Interface.ManagedFontAtlas"
---

# Dalamud.Interface.ManagedFontAtlas

> 🌐 本页是 [dalamud.dev/api/Dalamud.Interface.ManagedFontAtlas/](https://dalamud.dev/api/Dalamud.Interface.ManagedFontAtlas/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### FontAtlasBuildToolkitUtilities​

Convenience 函数 for building fonts through Dalamud.接口.ManagedFontAtlas.IFontAtlas.

## 结构体

### FluentGlyphRangeBuilder​

A fluent ImGui glyph range builder.

### SafeFontConfig​

Managed version of Dalamud.Bindings.ImGui.ImFontConfig, to avoid unnecessary heap allocation and use of unsafe blocks.

## 接口

### IFontAtlas​

Wrapper for Dalamud.Bindings.ImGui.ImFontAtlasPtr. Not intended for 插件 to implement.

### IFontAtlasBuildToolkit​

Common stuff for Dalamud.接口.ManagedFontAtlas.IFontAtlasBuildToolkitPreBuild and Dalamud.接口.ManagedFontAtlas.IFontAtlasBuildToolkitPostBuild. Not intended for 插件 to implement.

### IFontAtlasBuildToolkitPostBuild​

Toolkit for use when the build state is Dalamud.接口.ManagedFontAtlas.FontAtlasBuildStep.PostBuild. Not intended for 插件 to implement.

### IFontAtlasBuildToolkitPreBuild​

Toolkit for use when the build state is Dalamud.接口.ManagedFontAtlas.FontAtlasBuildStep.PreBuild. Not intended for 插件 to implement. After Dalamud.接口.ManagedFontAtlas.FontAtlasBuildStepDelegate returns, either Dalamud.接口.ManagedFontAtlas.IFontAtlasBuildToolkit.Font must be set, or at least one font must have been added to the atlas using one of AddFont... 函数.

### IFontHandle​

表示 a reference counting 处理 for fonts Not intended for 插件 to implement

### ILockedImFont​

The wrapper for Dalamud.Bindings.ImGui.ImFontPtr, guaranteeing that the associated 数据 will be available as long as this 结构体 is not disposed. Not intended for 插件 to implement.

## 枚举

### FontAtlasAutoRebuildMode​

How to rebuild Dalamud.接口.ManagedFontAtlas.IFontAtlas.

### FontAtlasBuildStep​

Build step for Dalamud.接口.ManagedFontAtlas.IFontAtlas.

### FontScaleMode​

指定 how should global font scale affect a font

## 委托

### FontAtlasBuildStepDelegate​

委托 to be called when a font needs to be built.

### IFontHandle.ImFontChangedDelegate​

Dalamud.接口.ManagedFontAtlas.IFontHandle.ImFontChanged 的委托

