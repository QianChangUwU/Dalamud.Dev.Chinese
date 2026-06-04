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

此类提供游戏内 Addon 生命周期的事件。

### IAetheryteList​

此集合表示传送界面中可用的以太水晶列表。

### IAgentLifecycle​

此类提供游戏内代理生命周期的事件。

### IBuddyList​

此集合表示您部队或亲信战友中的伙伴。它不包括本地玩家。

### IChatGui​

此类处理与原生聊天用户界面的交互。

### IClientState​

此类表示访问时游戏客户端的状态。

### ICommandManager​

此类管理已注册的游戏内斜杠命令。

### ICondition​

提供对条件（通常是玩家状态）的访问。您可以检查玩家是否在战斗中、是否骑乘等。

### IConsole​

提供注册控制台命令和变量的功能。

### IContextMenu​

此类提供与游戏上下文菜单交互的方法。

### IDalamudService​

Dalamud 服务 的标记接口

### IDataManager​

此类提供 Dalamud 内部功能的数据，但插件在需要时也可以使用。

### IDtrBar​

用于与服务器信息栏接口的类。

### IDutyState​

此类表示当前占用副本的状态。

### IFateTable​

此集合表示当前可用的 FATE 事件。

### IFlyTextGui​

此类便于与原生游戏中的 "飞字" 进行交互和创建。

### IFramework​

此类表示原生游戏客户端的框架，并提供对各种子系统的访问。

### IGameConfig​

此类表示 游戏设定

### IGameGui​

处理游戏内用户界面多个方面的类。

### IGameInteropProvider​

服务负责创建 Hook

### IGameInventory​

此类提供游戏内背包的事件。

### IGameLifecycle​

提供常见游戏事件的取消令牌的类。

### IGamepadState​

将游戏手柄状态暴露给 Dalamud。如果设置了 Dalamud.Bindings.ImGui.ImGuiConfigFlags.NavEnableGamepad，将阻止游戏的手柄输入。

### IJobGauges​

此类将内存中的职业量谱数据转换为结构体。

### IKeyState​

围绕游戏按键状态缓冲区的包装器，该缓冲区包含所有键盘键的按下状态，按虚拟 vkCode 索引。

### IMarketBoard​

提供对市场板相关事件的访问，客户端接收/发送时使用。

### INamePlateGui​

用于修改渲染姓名板时使用的数据的类。

### INotificationManager​

使用 ImGui 提供的 Dalamud 通知的管理器。

### IObjectTable​

此集合表示当前生成的 FFXIV 游戏对象。

### IPartyFinderGui​

此类处理与原生小队查找窗口的交互。

### IPartyList​

此集合表示您小队或联盟中的角色。

### IPlayerState​

用于确定玩家状态的接口。

### IPluginLog​

一个有见地的服务，用于处理插件的日志记录。

### IReliableFileStorage​

与文件系统交互的服务，作为标准 C# 文件 I/O 的替代品。使用此服务的写入和读取在我们能力范围内是原子和可靠的。所有数据立即同步到磁盘并写入数据库，此外还写入磁盘上的文件。这意味着在文件损坏的情况下，数据可能可以从数据库中恢复。然而，这也意味着使用此服务的操作会在磁盘上重复数据，因此我们不建议执行大文件操作。该服务不允许写入大于 Dalamud.Plugin.Services.IReliableFileStorage.MaxFileSizeBytes（64MB）的文件。使用 Dalamud.Configuration.PluginConfigurations 类保存的配置数据隐式使用此功能。

### ISelfTestRegistry​

用于注册和注销插件自测步骤的接口。

### ISeStringEvaluator​

定义一个服务，用于检索各种游戏内实体的本地化文本。

### ISigScanner​

SigScanner 便于在给定的 ProcessModule 中搜索内存签名。

### ITargetManager​

获取和设置玩家的各种目标。

### ITextureProvider​

提供访问可以通过 ImGui 渲染的纹理的服务。

### ITextureReadbackProvider​

提供读取 Dalamud.Interface.Textures.TextureWraps.IDalamudTextureWrap 实例的服务。

### ITextureSubstitutionProvider​

提供替换将由 Dalamud 加载的纹理数据的能力的服务。

### ITitleScreenMenu​

负责管理标题屏幕菜单元素的类的接口。

### IToastGui​

此类便于与本地 Toast 窗口进行交互和创建。

### IUnlockState​

用于确定游戏中各种内容解锁状态的接口。

## 枚举

### IGameInteropProvider.HookBackend​

可用的钩子后端。

## 委托

### IAddonEventManager.AddonEventDelegate​

在接收到事件时调用的委托。

### IAddonLifecycle.AddonEventDelegate​

用于接收 Addon 生命周期事件消息的委托。

### IAgentLifecycle.AgentEventDelegate​

用于接收代理生命周期事件消息的委托。

### IChatGui.OnChatMessageDelegate​

用于 Dalamud.Plugin.Services.IChatGui.ChatMessageHandled 和 Dalamud.Plugin.Services.IChatGui.ChatMessageUnhandled 事件的委托类型。

### IChatGui.OnHandleableChatMessageDelegate​

用于 Dalamud.Plugin.Services.IChatGui.ChatMessage 和 Dalamud.Plugin.Services.IChatGui.CheckMessageHandled 事件的委托类型。

### IChatGui.OnLogMessageDelegate​

用于 Dalamud.Plugin.Services.IChatGui.LogMessage 事件的委托类型。

### IClientState.ClassJobChangeDelegate​

用于 Dalamud.Plugin.Services.IClientState.ClassJobChanged 事件的委托类型。

### IClientState.LevelChangeDelegate​

用于 Dalamud.Plugin.Services.IClientState.LevelChanged 事件的委托类型。

### IClientState.LogoutDelegate​

用于 Dalamud.Plugin.Services.IClientState.Logout 事件的委托类型。

### ICondition.ConditionChangeDelegate​

与 Dalamud.Plugin.Services.ICondition.ConditionChange 事件一起使用的委托类型。

### IContextMenu.OnMenuOpenedDelegate​

用于 Dalamud.Plugin.Services.IContextMenu.OnMenuOpened 事件的委托类型。

### IDutyState.DutyCompletedDelegate​

用于 Dalamud.Plugin.Services.IDutyState.DutyCompleted 事件的委托类型。

### IDutyState.DutyRecommencedDelegate​

用于 Dalamud.Plugin.Services.IDutyState.DutyRecommenced 事件的委托类型。

### IDutyState.DutyStartedDelegate​

用于 Dalamud.Plugin.Services.IDutyState.DutyStarted 事件的委托类型。

### IDutyState.DutyWipedDelegate​

用于 Dalamud.Plugin.Services.IDutyState.DutyWiped 事件的委托类型。

### IFlyTextGui.OnFlyTextCreatedDelegate​

定义 FlyText 事件类型的委托。

### IFramework.OnUpdateDelegate​

与 Dalamud.Plugin.Services.IFramework.Update 事件一起使用的委托类型。

### IGameInventory.InventoryChangedDelegate​

在每次背包发生变化时调用的委托函数。此委托为每个变化发送单独的事件。

### IGameInventory.InventoryChangedDelegate&lt;T&gt;​

在每次背包发生变化时调用的委托函数。此委托为每个变化发送单独的事件。

### IGameInventory.InventoryChangelogDelegate​

在背包发生变化时调用的委托函数。此委托发送记录的所有变化的完整集合。

### IMarketBoard.HistoryReceivedDelegate​

与 Dalamud.Plugin.Services.IMarketBoard.HistoryReceived 事件一起使用的委托类型。

### IMarketBoard.ItemPurchasedDelegate​

与 Dalamud.Plugin.Services.IMarketBoard.ItemPurchased 事件一起使用的委托类型。

### IMarketBoard.OfferingsReceivedDelegate​

与 Dalamud.Plugin.Services.IMarketBoard.OfferingsReceived 事件一起使用的委托类型。

### IMarketBoard.PurchaseRequestedDelegate​

用于 Dalamud.Plugin.Services.IMarketBoard.PurchaseRequested 事件的委托类型。

### IMarketBoard.TaxRatesReceivedDelegate​

用于 Dalamud.Plugin.Services.IMarketBoard.PurchaseRequested 事件的委托类型。

### INamePlateGui.OnPlateUpdateDelegate​

用于接收姓名板更新事件的委托。

### IPartyFinderGui.PartyFinderListingEventDelegate​

每当游戏接收到单个小队寻找器列表时触发的事件类型。无法修改列表，但可以隐藏它们。

### ITextureSubstitutionProvider.TextureDataInterceptorDelegate​

描述一个可以用于拦截和替换纹理数据的函数的委托。分配的路径可以指向游戏数据中的另一个纹理，或磁盘上的 .tex 文件或图像。

### IToastGui.OnErrorToastDelegate​

用于错误提示窗口出现时的委托类型。

### IToastGui.OnNormalToastDelegate​

用于普通提示窗口出现时的委托类型。

### IToastGui.OnQuestToastDelegate​

用于任务提示窗口出现时的委托类型。

### IUnlockState.UnlockDelegate​

用于 Dalamud.Plugin.Services.IUnlockState.Unlock 事件的委托类型。

