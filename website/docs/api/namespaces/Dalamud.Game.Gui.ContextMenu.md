---
sidebar_label: "Dalamud.Game.Gui.ContextMenu"
---

# Dalamud.Game.Gui.ContextMenu

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Gui.ContextMenu/](https://dalamud.dev/api/Dalamud.Game.Gui.ContextMenu/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### MenuItem​

可以添加到上下文菜单中的菜单项。

### MenuTarget​

Dalamud.Game.Gui.ContextMenu.MenuArgs 上下文的基类。根据 Dalamud.Game.Gui.ContextMenu.ContextMenuType 进行区分。

### MenuTargetDefault​

默认上下文菜单上的目标信息。

### MenuTargetInventory​

库存上下文菜单上的目标信息。

## 接口

### IMenuArgs​

表示上下文菜单参数的接口。

### IMenuItem​

表示要添加到上下文菜单中的菜单项的接口。

### IMenuItemClickedArgs​

表示点击菜单项时使用的回调参数的接口。

### IMenuOpenedArgs​

表示打开菜单项时使用的回调参数的接口。

## 枚举

### ContextMenuType​

上下文菜单的类型。每个都有不同的关联 Dalamud.Game.Gui.ContextMenu.MenuTarget。

