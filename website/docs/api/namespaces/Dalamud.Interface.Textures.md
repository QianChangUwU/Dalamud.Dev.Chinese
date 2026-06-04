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

Wraps a Dalamud texture allowing interoperability with certain 服务. Only use this if you need to provide a texture that has been created or rented as a ISharedImmediateTexture.

## 结构体

### GameIconLookup​

表示 a lookup for a game icon

### ImGuiViewportTextureArgs​

Describes how to take a texture of an existing ImGui viewport.

### RawImageSpecification​

Describes a raw image.

### TextureModificationArgs​

Describes how to modify a texture.

## 接口

### IBitmapCodecInfo​

表示 an available bitmap codec

### ISharedImmediateTexture​

A texture with a backing instance of Dalamud.接口.Textures.TextureWraps.IDalamudTextureWrap that is shared across multiple requesters.

