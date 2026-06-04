---
sidebar_label: "Dalamud.Game.Gui.ContextMenu"
---

# Dalamud.Game.Gui.ContextMenu

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Gui.ContextMenu/](https://dalamud.dev/api/Dalamud.Game.Gui.ContextMenu/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### MenuItem​

A menu item that can be added to a 右键菜单.

### MenuTarget​

Dalamud.Game.Gui.ContextMenu.MenuArgs contexts Discriminated based on Dalamud.Game.Gui.ContextMenu.ContextMenuType 的基类

### MenuTargetDefault​

Target information on a default 右键菜单.

### MenuTargetInventory​

Target information on an 背包 右键菜单.

## 接口

### IMenuArgs​

表示 a context menus args 的接口

### IMenuItem​

表示 a menu item to be added to a 右键菜单 的接口

### IMenuItemClickedArgs​

An 接口 representing the callback args used when a menu item is clicked.

### IMenuOpenedArgs​

An 接口 representing the callback args used when a menu item is opened.

## 枚举

### ContextMenuType​

The 类型 of 右键菜单. Each one has a different associated Dalamud.Game.Gui.ContextMenu.MenuTarget.

