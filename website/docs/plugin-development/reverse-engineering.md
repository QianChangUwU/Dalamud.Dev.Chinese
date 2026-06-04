---
sidebar_position: 6
---

## 逆向工程

### 入门

逆向工程非常困难，逆向像 FFXIV 这样的大型游戏更是难上加难。

**核心概念**：FFXIV 在你的机器上运行，不断执行代码。社区创建并维护了 [FFXIVClientStructs](https://github.com/aers/FFXIVClientStructs) 项目，提供了游戏内部结构的信息和 C# 绑定。

#### 静态分析

使用交互式反汇编器/反编译器阅读反汇编代码。常用工具：
- [Hex-Rays IDA](https://hex-rays.com/)
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra)
- [Binary Ninja](https://binary.ninja/)

#### 动态分析

实时检查代码行为。常用工具：
- [Cheat Engine](https://www.cheatengine.org/)
- [x64dbg](https://x64dbg.com/)
- [ReClass.NET](https://github.com/ReClassNET/ReClass.NET)

### 函数、偏移量和签名

**函数偏移**：函数在程序内存空间中从基地址开始的特定偏移量。每次游戏更新都会变化。

**签名（Signature）**：唯一标识函数起始位置或引用的一组特定字节（十六进制字符串）。例如 `E8 ?? ?? ?? ?? 41 88 84 2C`。签名更加稳定，可能跨越多个大版本。

### 使用自定义 ClientStructs

如需使用自定义 ClientStructs，更新 `.csproj`：

```xml
<PropertyGroup>
    <Use_Dalamud_FFXIVClientStructs>false</Use_Dalamud_FFXIVClientStructs>
</PropertyGroup>
<ItemGroup>
    <ProjectReference Include="..\FFXIVClientStructs\FFXIVClientStructs\FFXIVClientStructs.csproj" Private="True" />
    <ProjectReference Include="..\FFXIVClientStructs\InteropGenerator.Runtime\InteropGenerator.Runtime.csproj" Private="True" />
</ItemGroup>
```

在插件构造函数中手动初始化：

```csharp
InteropGenerator.Runtime.Resolver.GetInstance.Setup(
    SigScanner.SearchBase,
    DataManager.GameData.Repositories["ffxiv"].Version,
    new FileInfo(Path.Join(pluginInterface.ConfigDirectory.FullName, "SigCache.json")));
FFXIVClientStructs.Interop.Generated.Addresses.Register();
InteropGenerator.Runtime.Resolver.GetInstance.Resolve();
```
