---
title: Dalamud .NET 8 升级（3月19日）
date: 2024-03-11
authors: [goat]
tags: [升级, .NET]
---

我很高兴地宣布我们计划在 3 月 19 日的补丁中将 Dalamud 升级到最新版本的 .NET 运行时 .NET 8。这对插件开发者来说基本是透明的。下面列出了一些可能对您有影响的次要破坏性变更。

如果这些变更影响到您，您应该可以在 .NET 7 上修复，并立即提交插件更新——这样您的用户就不会受到干扰。

如果您发现任何其他影响您的问题，欢迎在 Discord（#plugin-dev）频道联系我们，我们会将其添加到列表中。

## 潜在的重大更改

### 通过反射获取插件程序集位置不再可用

现在无法再通过 `Assembly.Location` 获取插件程序集的位置，例如通过 `Assembly.GetExecutingAssembly()` 或 `typeof`。自我们最初迁移到 .NET 5 以来，这一功能已被弃用，而我们用来使其工作的 hack/hook（或多或少可靠，但偶尔会失败）在 .NET 8 上引发了问题，因此我们最终决定移除它。

您应该改用 [`DalamudPluginInterface.AssemblyLocation`](https://dalamud.dev/api/Dalamud.Plugin/Classes/DalamudPluginInterface/#assemblylocation)。

### IntPtr 不再用于函数指针类型

.NET 8 不再对函数指针使用 IntPtr 类型。如果您的代码在反射成员时假定函数指针是 IntPtr，它将不再工作。您应该改用 `type.IsFunctionPointer || type.IsUnmanagedFunctionPointer`。

在 [Microsoft 文档页面](https://learn.microsoft.com/en-us/dotnet/core/compatibility/reflection/8.0/function-pointer-reflection)上了解有关此更改的更多信息。
