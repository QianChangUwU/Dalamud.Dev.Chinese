---
sidebar_label: "Dalamud.Interface.Textures"
---

# Dalamud.Interface.Textures

> 🌐 本页是 [dalamud.dev/api/Dalamud.Interface.Textures/](https://dalamud.dev/api/Dalamud.Interface.Textures/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### DalamudTextureWrapExtensions​

Dalamud.接口.Textures.TextureWraps.IDalamudTextureWrap 的扩展方法

### ForwardingSharedImmediateTexture​

包装一个 dalamud 纹理，允许与某些服务的互操作性。仅在需要提供已创建或租用的 ISharedImmediateTexture 纹理时使用此项。

## 结构体

### GameIconLookup​

表示游戏图标的查找。

### ImGuiViewportTextureArgs​

描述如何获取现有 ImGui 视口的纹理。

### RawImageSpecification​

描述一个原始图像。

### TextureModificationArgs​

描述如何修改纹理。

## 接口

### IBitmapCodecInfo​

表示可用的位图编解码器。

### ISharedImmediateTexture​

一个具有 Dalamud.Interface.Textures.TextureWraps.IDalamudTextureWrap 的后备实例的纹理，该实例在多个请求者之间共享。

