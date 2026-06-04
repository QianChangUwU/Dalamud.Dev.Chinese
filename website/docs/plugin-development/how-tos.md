---
sidebar_position: 5
---

## 操作指南

### AddonLifecycle

此服务提供对 `Addon` 各种状态和状态变更的便捷访问。

**主要目标**：让修改原生 UI 或从 addon 获取数据变得简单，无需逆向工程和钩子。

#### 提供的接口

```csharp
public interface IAddonLifecycle {
    public delegate void AddonEventDelegate(AddonEvent type, AddonArgs args);
    void RegisterListener(AddonEvent eventType, IEnumerable<string> addonNames, AddonEventDelegate handler);
    void RegisterListener(AddonEvent eventType, string addonName, AddonEventDelegate handler);
    void RegisterListener(AddonEvent eventType, AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, IEnumerable<string> addonNames, [Optional] AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, string addonName, [Optional] AddonEventDelegate handler);
    void UnregisterListener(AddonEvent eventType, [Optional] AddonEventDelegate handler);
    void UnregisterListener(params AddonEventDelegate[] handlers);
}
```

#### 注册事件

```csharp
AddonLifecycle.RegisterListener(AddonEvent.PreDraw, "FieldMarker", OnPreDraw);
AddonLifecycle.RegisterListener(AddonEvent.PostUpdate, "FieldMarker", OnPostUpdate);
AddonLifecycle.RegisterListener(AddonEvent.PostDraw, new[] { "Character", "FieldMarker", "NamePlate" }, OnPostDraw);
```

#### 取消注册事件

```csharp
AddonLifecycle.UnregisterListener(AddonEvent.PostDraw, new[] { "Character", "FieldMarker", "NamePlate" }, OnPostDraw);
AddonLifecycle.UnregisterListener(OnPreDraw, OnPostUpdate);
```

### AddonEventManager

此服务提供从原生游戏 UI 添加和删除自定义事件的管理器。

```csharp
public interface IAddonEventManager {
    public delegate void AddonEventHandler(AddonEventType atkEventType, nint atkUnitBase, nint atkResNode);
    IAddonEventHandle? AddEvent(nint atkUnitBase, nint atkResNode, AddonEventType eventType, AddonEventHandler eventHandler);
    void RemoveEvent(IAddonEventHandle eventHandle);
    void SetCursor(AddonCursorType cursor);
    void ResetCursor();
}
```

### 迁移到 Dalamud.NET.Sdk

**从 DalamudPackager 迁移：**
1. 从项目中移除 DalamudPackager 引用
2. 打开 `.csproj` 文件
3. 将 `<Project Sdk="Microsoft.NET.Sdk">` 替换为 `<Project Sdk="Dalamud.NET.Sdk/15.0.0">`
4. 移除 Dalamud 库的 `Reference` 项（SDK 已包含）
5. 移除 `DalamudLibPath` 属性

**从 Targets 文件迁移：**
1. 删除 `Dalamud.Plugin.Bootstrap.targets` 文件
2. 删除 `<Import Project="Dalamud.Plugin.Bootstrap.targets"/>`
3. 如上所述修改 SDK 引用
