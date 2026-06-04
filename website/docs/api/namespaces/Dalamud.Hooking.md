---
sidebar_label: "Dalamud.Hooking"
---

# Dalamud.Hooking

> 🌐 本页是 [dalamud.dev/api/Dalamud.Hooking/](https://dalamud.dev/api/Dalamud.Hooking/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### AsmHook​

管理一个可以用于拦截对本机函数调用的挂钩。此类基本上是对 LocalHook 类型的一个薄包装，以提供辅助功能。

### Hook&lt;T&gt;​

管理一个可以用于拦截对本机函数调用的挂钩。此类基本上是对 LocalHook 类型的一个薄包装，以提供辅助功能。

## 接口

### IDalamudHook​

描述通用挂钩的接口。

## 枚举

### AsmHookBehaviour​

定义 Dalamud.Hooking.AsmHook 使用的行为。这与 Reloaded 中的相同枚举相当，并且包含在内，以便您不必引用程序集。

