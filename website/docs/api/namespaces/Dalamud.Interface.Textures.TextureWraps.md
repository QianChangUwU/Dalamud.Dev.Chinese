---
sidebar_label: "Dalamud.Interface.Textures.TextureWraps"
---

# Dalamud.Interface.Textures.TextureWraps

> 🌐 本页是 [dalamud.dev/api/Dalamud.Interface.Textures.TextureWraps/](https://dalamud.dev/api/Dalamud.Interface.Textures.TextureWraps/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### ForwardingTextureWrap​

用于实现 Dalamud.Interface.Textures.TextureWraps.IDalamudTextureWrap 的基类，转发到另一个。

## 接口

### IDalamudTextureWrap​

所有 Dalamud 拥有的纹理包装的基本 TextureWrap 接口。用于避免引用 ImGuiScene。

### IDrawListTextureWrap​

可以使用 ImGui 绘制数据绘制的纹理包装。

