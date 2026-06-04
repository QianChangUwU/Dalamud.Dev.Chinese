---
sidebar_label: "Dalamud.Game.Gui.NamePlate"
---

# Dalamud.Game.Gui.NamePlate

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Gui.NamePlate/](https://dalamud.dev/api/Dalamud.Game.Gui.NamePlate/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### NamePlateKindConversions​



### NamePlateQuotedParts​

A part builder for constructing and setting quoted 名牌 fields (i.e. free company tag and title).

### NamePlateSimpleParts​

A part builder for constructing and setting a simple (unquoted) 名牌 field.

## 接口

### INamePlateInfoView​

提供 a read-only view of the 名牌 信息 对象 数据 for a 名牌 Modifications to Dalamud.Game.Gui.名牌.NamePlateUpdateHandler fields do not affect this 数据

### INamePlateUpdateContext​

包含 information related to the pending 名牌 数据 update This is only valid for a single frame and should not be kept across frames

### INamePlateUpdateHandler​

A 类 representing a single 名牌. Provides mechanisms to look up the 游戏对象 associated with the 名牌 and allows for modification of various backing fields in number and string array 数据, which in turn affect aspects of the 名牌's appearance when drawn. Instances of this 类 are only valid for a single frame and should not be kept across frames.

## 枚举

### NamePlateKind​



### NamePlateStringField​

An 枚举 describing the string fields available in 名牌 数据. The Dalamud.Game.Gui.名牌.NamePlateKind and various flags determine which fields will actually be rendered.

