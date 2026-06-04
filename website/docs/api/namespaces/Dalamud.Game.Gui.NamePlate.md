---
sidebar_label: "Dalamud.Game.Gui.NamePlate"
---

# Dalamud.Game.Gui.NamePlate

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Gui.NamePlate/](https://dalamud.dev/api/Dalamud.Game.Gui.NamePlate/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### NamePlateKindConversions​



### NamePlateQuotedParts​

用于构建和设置带引号的姓名牌字段（即自由公司标签和称号）的部分构建器。

### NamePlateSimpleParts​

用于构建和设置简单（不带引号）姓名牌字段的部分构建器。

## 接口

### INamePlateInfoView​

提供姓名牌信息对象数据的只读视图。对 Dalamud.Game.Gui.NamePlate.NamePlateUpdateHandler 字段的修改不会影响此数据。

### INamePlateUpdateContext​

包含与待处理姓名牌数据更新相关的信息。这仅在单个帧内有效，不应跨帧保留。

### INamePlateUpdateHandler​

一个表示单个姓名牌的类。提供查找与姓名牌相关的游戏对象的机制，并允许修改数字和字符串数组数据中的各种后备字段，这反过来会影响姓名牌绘制时的外观。此类的实例仅在单个帧内有效，不应跨帧保留。

## 枚举

### NamePlateKind​



### NamePlateStringField​

一个描述姓名牌数据中可用字符串字段的枚举。Dalamud.Game.Gui.NamePlate.NamePlateKind 和各种标志决定哪些字段将实际被渲染。

