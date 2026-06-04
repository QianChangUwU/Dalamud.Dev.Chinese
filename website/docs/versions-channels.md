---
sidebar_position: 4
---

# 版本与频道

Dalamud 有两个版本相关的主要概念：**API 级别**和**频道/分支**。

## 摘要

| 频道 | 分支 | API 级别 | 稳定性 | 推荐用户 |
|------|------|---------|--------|---------|
| Release | master | 15 | 最高 | 自动分配给大多数用户 |
| Canary | master | 14 | 非常高 | 自动分配给少量用户 |
| Staging | master | 15 | 中等 | 核心/插件开发者、测试用户 |

## API 级别

API 级别是一个数字，每当 Dalamud API 发生破坏性变更时递增。

### 历史记录

| API 级别 | 首个 Dalamud 版本 | 首个游戏版本 | .NET 版本 | 首次提交 |
|---------|-----------------|-------------|-----------|---------|
| 15 | 15.0.0.0 | 补丁 7.5 | .NET 10.0 | 2026-05-01 |
| 14 | 14.0.0.0 | 补丁 7.4 | .NET 10.0 | 2025-12-20 |
| 13 | 13.0.0.0 | 补丁 7.3 | .NET 9.0 | 2025-08-10 |
| 12 | 12.0.0.0 | 补丁 7.2 | .NET 9.0 | 2025-03-28 |
| 11 | 11.0.0.0 | 补丁 7.1 | .NET 8.0 | 2024-11-20 |
| 10 | 10.0.0.0 | 补丁 7.0 | .NET 8.0 | 2024-07-05 |
| 9 | 9.0.0.0 | 补丁 6.5 | .NET 7.0 | 2023-10-05 |
| 8 | 7.4.0.0 | 补丁 6.3 | .NET 7.0 | 2023-01-10 |
| 7 | 7.0.0.0 | 补丁 6.2 | .NET 6.0 | 2022-08-23 |
| 6 | 6.4.0.0 | 补丁 6.1 | .NET 5.0 | 2022-04-13 |
| 5 | 6.1.0.0 | 补丁 6.0 | .NET 5.0 | 2021-12-04 |
| 4 | 6.0.0.17? | 补丁 5.57hf? | .NET 5.0 | 2021-07-12 |
| 3 | 5.2.3.5? | 补丁 5.45? | .NET 4.7.2 | 2021-04-01 |
| 2 | 5.1.1.2? | 补丁 5.4? | .NET 4.7.2 | 2020-12-08 |
| 1 | 4.9.8.2 | 补丁 5.25? | .NET 4.7.2 | 2020-06-11 |

## 分支与频道

### 频道

- **Release（发布）**：默认频道。推荐大多数用户使用。
- **Canary（金丝雀）**：新标记的 Dalamud 版本推送至此频道。自动分配给 Release 频道的少量用户。
- **Staging（暂存，stg）**：在发布版本标记前，`master` 的最新提交推送至此频道。

### 分支

- **master**：Dalamud 的主要开发分支。用于所有发布版本。

### 各版本更新内容

#### Dalamud v15 新特性（API 15，当前版本）

- **IAsyncDalamudPlugin**：新的异步插件基接口，减少加载/卸载时的异步工作摩擦
- **IChatGui**：事件参数移至 `IChatMessage` 接口；`XivChatType` 值现在正确解析
- **ImRaii**：`IEndObjects` 已移除，改为 `ref struct` 实现
- **字体资产**：语言特定的 Noto Sans 字体已统一并重命名
- **IAgentLifecycle**：新增 `PreventOriginal` 函数
- **IAddonLifecycle**：新增 `PreventOriginal` 函数
- **IClientState**：`ZoneInitEventArgs` 更新为使用 RowRefs
- **IDutyState**：新接口 `IDutyStateEventArgs`
- **枚举重新同步**：多个枚举已与 FFXIVClientStructs 重新同步
- **SDK**：Dalamud.NET.Sdk v15.0.0，DalamudPackager v15.0.0

#### Dalamud v14 新特性

- **升级到 .NET 10 / C# 14**
- **命名空间变更**：所有服务接口现在位于 `Dalamud.Plugin.Services` 命名空间
- **ImAnim v1.0.0 绑定**：新的动画引擎
- **新服务：IPlayerState**：`PlayerState` 的部分包装
- **新服务：IUnlockState**：检查各种内容和收藏品的解锁状态
- **新服务：IReliableFileStorage**：可靠的文件读写服务
- **SeStringRenderer**：可直接渲染 SeString 到纹理
- **Font Awesome 从 6.4.2 更新到 7.1.0**
- **IAddonLifecycle 重写**：通过替换虚拟表实现

#### Dalamud v13 新特性

- **新的 ImGui 绑定**：源自 Hexa.NET.ImGui
- **IGameNetwork 已移除**
- **AtkUnitBase、AgentInterface 和 UIModule 的新包装结构体**
- **IAddonLifecycle**：`AddonArgs.Addon` 现在为 `AtkUnitBasePtr` 类型
- **IDalamudPluginInterface**：聊天链接处理器移至 IChatGui
- **IObjectTable**：新增多个枚举器

#### Dalamud v12 新特性

- **升级到 .NET 9**
- **ISeStringEvaluator 服务**：新增实验性服务
- **IObjectTable 等的主线程检查**：非主线程操作会抛出 `InvalidOperationException`

#### Dalamud v11 新特性

- **升级到 Lumina 5**：Excel 接口重大变更
- **SeString 渲染器**：新的 SeString 渲染器
- **IClientState**：新增 `ClassJobChanged` 和 `LevelChanged` 事件

#### Lumina 5 迁移指南

- **Excel 行现在是值类型**（`readonly struct`）
- **所有列按需访问**
- **新的子行特定类型**：`SubrowCollection<T>`、`SubrowRef<T>` 等
- **LazyRow 现在是 RowRef**：拆分为 `RowRef<T>`、`SubrowRef<T>` 和 `RowRef`
- **透明 RSV 解析**
- 新的异常类型

#### Dalamud v10 新特性

- **新 API**：`IConsole` 和 `IMarketBoard`
- **接口重构**：大多数公开类已接口化
- **ITextureProvider 重写**：更高效、更易用

#### Dalamud v9 新特性

- **控制台重做**：支持过滤器
- **IPluginLog 服务**
- **DtrBarEntry 增强**：支持工具提示和 OnClick 事件
- **IAddonLifecycle 和 IAddonEventManager 服务**
- **ITextureProvider 新服务**
- **所有服务必须通过接口使用**
- **IDataManager 中的图标/纹理功能移至 ITextureProvider**
