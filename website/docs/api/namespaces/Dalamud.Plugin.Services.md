---
sidebar_label: "Dalamud.Plugin.Services"
---

# Dalamud.Plugin.Services

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin.Services/](https://dalamud.dev/api/Dalamud.Plugin.Services/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 接口

### IAddonEventManager​

服务提供者，用于 Addon 事件管理

### IAddonLifecycle​

此类为 游戏内 Addon lifecycles 提供事件

### IAetheryteList​

此集合表示 可用传送点 in the 传送界面 的列表

### IAgentLifecycle​

此类为 游戏内 Agent lifecycles 提供事件

### IBuddyList​

此集合表示 the buddies present in your squadron or trust 队伍 It does not include the 本地玩家

### IChatGui​

此类处理与 the 原生聊天界面 的交互

### IClientState​

此类表示 the 游戏客户端 at the time of access 的状态

### ICommandManager​

此类管理 registered 游戏内斜杠命令

### ICondition​

提供对 conditions (generally 玩家 state) You can check whether a 玩家 is in combat mounted etc 的访问

### IConsole​

提供用于 register 控制台命令 and variables 的函数

### IContextMenu​

此类提供 interacting with 游戏右键菜单 的方法

### IDalamudService​

Dalamud 服务 的标记接口

### IDataManager​

此类为 Dalamud 内部功能 but can also be used by 插件 if needed 提供数据

### IDtrBar​

类 used to 接口 with the 服务器信息栏.

### IDutyState​

此类表示 the 当前所在副本 的状态

### IFateTable​

此集合表示当前 available FATE 事件

### IFlyTextGui​

此类辅助 interacting with and creating 原生游戏内 "浮动战斗文本"

### IFramework​

此类表示 原生游戏客户端框架 and grants access to various subsystems

### IGameConfig​

此类表示 游戏配置

### IGameGui​

A 类 handling many aspects of the 游戏内 UI.

### IGameInteropProvider​

服务负责创建 Hook

### IGameInventory​

此类为 the 游戏内背包 提供事件

### IGameLifecycle​

类 offering cancellation tokens for common gameplay 事件.

### IGamepadState​

公开 the game 手柄状态 to Dalamud Will block game's 手柄 input if Dalamud.Bindings.ImGui.ImGuiConfigFlags.NavEnableGamepad is set

### IJobGauges​

此类转换 内存中的职业量谱数据 to structs

### IKeyState​

封装 the 游戏按键状态缓冲区 which contains the pressed state for all 键盘按键 indexed by 虚拟键码 的包装器

### IMarketBoard​

提供对 market board related 事件 as the client receives/sends them 的访问

### INamePlateGui​

类 used to modify the 数据 used when rendering 名牌.

### INotificationManager​

通知 provided by Dalamud using ImGui 的管理器

### IObjectTable​

此集合表示当前 spawned FFXIV 游戏对象

### IPartyFinderGui​

此类处理与 the 原生 PartyFinder window 的交互

### IPartyList​

此集合表示 the actors present in your 队伍 or alliance

### IPlayerState​

determining the players state 的接口

### IPluginLog​

An opinionated 服务 to 处理 logging for 插件.

### IReliableFileStorage​

服务 to interact with the file 系统, as a replacement for standard C# file I/O. Writes and reads using this 服务 are, to the best of our ability, atomic and reliable. All 数据 is synced to disk immediately and written to a database, additionally to files on disk. This means that in case of file corruption, 数据 can likely be recovered from the database. However, this also means that operations using this 服务 duplicate 数据 on disk, so we don't recommend performing large file operations. The 服务 will not permit files larger than Dalamud.插件.服务.IReliableFileStorage.MaxFileSizeBytes (64MB) to be written. Saved 配置 数据 using the Dalamud.配置.PluginConfigurations 类 uses this functionality implicitly.

### ISelfTestRegistry​

registering and unregistering self-test steps from 插件 的接口

### ISeStringEvaluator​

定义 a 服务 for retrieving localized text for various 游戏内 entities

### ISigScanner​

A SigScanner facilitates searching for 内存 signatures in a given ProcessModule.

### ITargetManager​

Get and set various kinds of targets for the 玩家.

### ITextureProvider​

服务 that grants you access to textures you may render via ImGui.

### ITextureReadbackProvider​

服务 that grants you to read instances of Dalamud.接口.Textures.TextureWraps.IDalamudTextureWrap.

### ITextureSubstitutionProvider​

服务 that grants you the ability to replace texture 数据 that is to be loaded by Dalamud.

### ITitleScreenMenu​

类 responsible for managing elements in the title screen menu 的接口

### IToastGui​

此类辅助 interacting with and creating 原生 toast windows

### IUnlockState​

determining unlock state of various content in the game 的接口

## 枚举

### IGameInteropProvider.HookBackend​

Available Hook backends.

## 委托

### IAddonEventManager.AddonEventDelegate​

委托 to be called when an 事件 is received.

### IAddonLifecycle.AddonEventDelegate​

receiving Addon 生命周期 事件 messages 的委托

### IAgentLifecycle.AgentEventDelegate​

receiving agent lifecycle 事件 messages 的委托

### IChatGui.OnChatMessageDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IChatGui.ChatMessageHandled and Dalamud.插件.服务.IChatGui.ChatMessageUnhandled 事件.

### IChatGui.OnHandleableChatMessageDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IChatGui.ChatMessage and Dalamud.插件.服务.IChatGui.CheckMessageHandled 事件.

### IChatGui.OnLogMessageDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IChatGui.LogMessage 事件.

### IClientState.ClassJobChangeDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IClientState.ClassJobChanged 事件.

### IClientState.LevelChangeDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IClientState.LevelChanged 事件.

### IClientState.LogoutDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IClientState.Logout 事件.

### ICondition.ConditionChangeDelegate​

A 委托 类型 used with the Dalamud.插件.服务.ICondition.ConditionChange 事件.

### IContextMenu.OnMenuOpenedDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IContextMenu.OnMenuOpened 事件.

### IDutyState.DutyCompletedDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IDutyState.DutyCompleted 事件.

### IDutyState.DutyRecommencedDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IDutyState.DutyRecommenced 事件.

### IDutyState.DutyStartedDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IDutyState.DutyStarted 事件.

### IDutyState.DutyWipedDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IDutyState.DutyWiped 事件.

### IFlyTextGui.OnFlyTextCreatedDelegate​

The 委托 defining the 类型 for the FlyText 事件.

### IFramework.OnUpdateDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IFramework.Update 事件.

### IGameInventory.InventoryChangedDelegate​

委托 函数 to be called for each change to inventories. This 委托 sends individual 事件 for changes.

### IGameInventory.InventoryChangedDelegate&lt;T&gt;​

委托 函数 to be called for each change to inventories. This 委托 sends individual 事件 for changes.

### IGameInventory.InventoryChangelogDelegate​

委托 函数 to be called when inventories have been changed. This 委托 sends the entire set of changes recorded.

### IMarketBoard.HistoryReceivedDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IMarketBoard.HistoryReceived 事件.

### IMarketBoard.ItemPurchasedDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IMarketBoard.ItemPurchased 事件.

### IMarketBoard.OfferingsReceivedDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IMarketBoard.OfferingsReceived 事件.

### IMarketBoard.PurchaseRequestedDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IMarketBoard.PurchaseRequested 事件.

### IMarketBoard.TaxRatesReceivedDelegate​

A 委托 类型 used with the Dalamud.插件.服务.IMarketBoard.PurchaseRequested 事件.

### INamePlateGui.OnPlateUpdateDelegate​

The 委托 used for receiving 名牌 update 事件.

### IPartyFinderGui.PartyFinderListingEventDelegate​

事件 类型 fired each time the game receives an individual 队伍 Finder listing. Cannot modify listings but can hide them.

### ITextureSubstitutionProvider.TextureDataInterceptorDelegate​

委托 describing a 函数 that may be used to intercept and replace texture 数据. The path assigned may point to another texture inside the game's dats, or a .tex file or image on the disk.

### IToastGui.OnErrorToastDelegate​

A 委托 类型 used when an error toast window appears.

### IToastGui.OnNormalToastDelegate​

A 委托 类型 used when a normal toast window appears.

### IToastGui.OnQuestToastDelegate​

A 委托 类型 used when a quest toast window appears.

### IUnlockState.UnlockDelegate​

A 委托 类型 used for the Dalamud.插件.服务.IUnlockState.Unlock 事件.

