---
sidebar_position: 1
---

# API 参考索引

> 本文档列出了 Dalamud 的所有公开 API 命名空间。每个命名空间包含相关的类、接口、枚举和委托。
>
> 详细的英文 API 文档请参阅 [dalamud.dev/api](https://dalamud.dev/api/)。此处提供中文概述帮助快速定位。

---

## 命名空间说明

| 命名空间 | 说明 |
|---------|------|
| **Dalamud** | 核心类型和基础结构 |
| **Dalamud.Configuration** | 插件配置管理，`PluginConfigurations` 等 |
| **Dalamud.Console** | 控制台命令和变量注册 |
| **Dalamud.Game** | 游戏交互的核心命名空间 |
| **Dalamud.Game.Addon.Events** | 游戏内 Addon（界面窗口）事件系统 |
| **Dalamud.Game.Addon.Events.EventDataTypes** | Addon 事件的数据类型 |
| **Dalamud.Game.Addon.Lifecycle** | Addon 生命周期事件（创建、更新、销毁） |
| **Dalamud.Game.Addon.Lifecycle.AddonArgTypes** | 生命周期事件的参数类型 |
| **Dalamud.Game.Agent** | Agent（Addon 控制器）交互 |
| **Dalamud.Game.Agent.AgentArgTypes** | Agent 事件的参数类型 |
| **Dalamud.Game.Chat** | 聊天系统交互 |
| **Dalamud.Game.ClientState** | 客户端状态基础 |
| **Dalamud.Game.ClientState.Aetherytes** | 传送点列表 |
| **Dalamud.Game.ClientState.Buddy** | 伙伴（亲信/战友/陆行鸟）状态 |
| **Dalamud.Game.ClientState.Conditions** | 玩家条件状态（战斗、坐骑等） |
| **Dalamud.Game.ClientState.Customize** | 角色外观数据 |
| **Dalamud.Game.ClientState.Fates** | FATE 事件列表 |
| **Dalamud.Game.ClientState.GamePad** | 手柄状态 |
| **Dalamud.Game.ClientState.JobGauge.Enums** | 职业量谱枚举 |
| **Dalamud.Game.ClientState.JobGauge.Types** | 各职业量谱数据结构 |
| **Dalamud.Game.ClientState.Keys** | 键盘状态 |
| **Dalamud.Game.ClientState.Objects.Enums** | 游戏对象枚举（对象类型等） |
| **Dalamud.Game.ClientState.Objects.SubKinds** | 游戏对象子类型（玩家、NPC、怪物等） |
| **Dalamud.Game.ClientState.Objects.Types** | 游戏对象类型接口（`IGameObject` 等） |
| **Dalamud.Game.ClientState.Party** | 队伍/团队信息 |
| **Dalamud.Game.ClientState.Statuses** | 状态效果（Buff/Debuff）列表 |
| **Dalamud.Game.Command** | 聊天命令注册和管理 |
| **Dalamud.Game.Config** | 游戏配置（系统设置） |
| **Dalamud.Game.DutyState** | 副本/任务状态 |
| **Dalamud.Game.Gui** | 游戏 UI 交互 |
| **Dalamud.Game.Gui.ContextMenu** | 右键菜单修改 |
| **Dalamud.Game.Gui.Dtr** | 服务器信息栏（DTR） |
| **Dalamud.Game.Gui.FlyText** | 浮动战斗文本 |
| **Dalamud.Game.Gui.NamePlate** | 名牌（血条上方名称）修改 |
| **Dalamud.Game.Gui.PartyFinder.Types** | 招募板数据类型 |
| **Dalamud.Game.Gui.Toast** | 通知弹窗（Toast）交互 |
| **Dalamud.Game.Inventory** | 背包/仓库事件 |
| **Dalamud.Game.Inventory.InventoryEventArgTypes** | 背包事件参数类型 |
| **Dalamud.Game.Inventory.Records** | 背包物品记录 |
| **Dalamud.Game.NativeWrapper** | 游戏原生函数包装 |
| **Dalamud.Game.Network.Structures** | 网络数据包结构 |
| **Dalamud.Game.Network.Structures.InfoProxy** | 信息代理网络结构 |
| **Dalamud.Game.Player** | 玩家数据 |
| **Dalamud.Game.Text** | 游戏文本处理 |
| **Dalamud.Game.Text.Evaluator** | SeString 表达式求值器 |
| **Dalamud.Game.Text.Evaluator.Internal** | 求值器内部实现 |
| **Dalamud.Game.Text.Noun.Enums** | 名词枚举（用于 SeString 名词宏） |
| **Dalamud.Game.Text.Sanitizer** | 文本清理/过滤 |
| **Dalamud.Game.Text.SeStringHandling** | SeString 解析和构建 |
| **Dalamud.Game.Text.SeStringHandling.Payloads** | SeString 负载类型（所有宏的实现） |
| **Dalamud.Hooking** | 函数钩子（Hook）系统 |
| **Dalamud.Hooking.Internal** | 钩子系统内部实现 |
| **Dalamud.Hooking.Internal.Verification** | 钩子验证机制 |
| **Dalamud.Interface** | 用户界面核心（ImGui 集成） |
| **Dalamud.Interface.Animation** | UI 动画系统 |
| **Dalamud.Interface.Animation.EasingFunctions** | 缓动函数 |
| **Dalamud.Interface.Colors** | 预定义颜色 |
| **Dalamud.Interface.Components** | UI 组件 |
| **Dalamud.Interface.DragDrop** | 拖放功能 |
| **Dalamud.Interface.FontIdentifier** | 字体识别 |
| **Dalamud.Interface.GameFonts** | 游戏字体 |
| **Dalamud.Interface.ImGuiBackend.Delegates** | ImGui 后端委托 |
| **Dalamud.Interface.ImGuiFileDialog** | 文件选择对话框 |
| **Dalamud.Interface.ImGuiFontChooserDialog** | 字体选择对话框 |
| **Dalamud.Interface.ImGuiNotification** | 通知系统 |
| **Dalamud.Interface.ImGuiNotification.EventArgs** | 通知事件参数 |
| **Dalamud.Interface.ImGuiNotification.Internal** | 通知系统内部 |
| **Dalamud.Interface.ImGuiSeStringRenderer** | SeString ImGui 渲染器 |
| **Dalamud.Interface.ManagedFontAtlas** | 托管字体图集 |
| **Dalamud.Interface.Style** | UI 样式 |
| **Dalamud.Interface.Textures** | 纹理系统 |
| **Dalamud.Interface.Textures.Internal** | 纹理系统内部 |
| **Dalamud.Interface.Textures.TextureWraps** | 纹理包装器 |
| **Dalamud.Interface.Utility** | UI 工具函数 |
| **Dalamud.Interface.Utility.Raii** | RAII 辅助（自动恢复 UI 状态） |
| **Dalamud.Interface.Utility.Table** | 表格辅助工具 |
| **Dalamud.Interface.Windowing** | 窗口系统 |
| **Dalamud.IoC** | 依赖注入容器 |
| **Dalamud.Logging.Internal** | 日志系统内部 |
| **Dalamud.Memory** | 内存操作 |
| **Dalamud.Memory.Exceptions** | 内存操作异常 |
| **Dalamud.Networking.Http** | HTTP 网络请求 |
| **Dalamud.Plugin** | 插件基础接口（所有插件必须实现） |
| **Dalamud.Plugin.Internal.Profiles** | 插件配置文件内部 |
| **Dalamud.Plugin.Internal.Types.Manifest** | 插件清单内部类型 |
| **Dalamud.Plugin.Ipc** | 插件间通信（IPC） |
| **Dalamud.Plugin.Ipc.Exceptions** | IPC 异常 |
| **Dalamud.Plugin.Ipc.Internal** | IPC 内部实现 |
| **Dalamud.Plugin.SelfTest** | 插件自检系统 |
| **Dalamud.Plugin.Services** | **插件服务接口（最常用）** — 聊天、客户端状态、对象表等 |
| **Dalamud.Plugin.VersionInfo** | 版本信息 |
| **Dalamud.Storage** | 存储系统 |
| **Dalamud.Storage.Assets** | 静态资源存储 |
| **Dalamud.Support** | 支持工具 |
| **Dalamud.Utility** | 通用工具函数 |
| **Dalamud.Utility.Numerics** | 数值工具 |
| **Dalamud.Utility.Signatures** | 签名扫描（内存特征码搜索） |
| **Dalamud.Utility.Timing** | 计时工具 |

## 核心服务速查

插件最常使用的服务接口集中在 `Dalamud.Plugin.Services`，均为以 `I` 开头的接口：

| 接口 | 用途 |
|------|------|
| `IChatGui` | 聊天消息读写 |
| `IClientState` | 客户端状态（等级、职业、地图等） |
| `ICommandManager` | 注册/注销聊天命令 |
| `ICondition` | 玩家状态判断（战斗、坐骑、游泳等） |
| `IContextMenu` | 右键菜单扩展 |
| `IDataManager` | 游戏数据文件访问 |
| `IDtrBar` | 服务器信息栏 |
| `IDutyState` | 副本状态 |
| `IFateTable` | FATE 列表 |
| `IFlyTextGui` | 浮动战斗文本 |
| `IFramework` | 游戏主循环（Update 事件） |
| `IGameConfig` | 游戏系统设置 |
| `IGameGui` | 游戏 UI 交互 |
| `IGameInteropProvider` | 创建函数钩子 |
| `IGameInventory` | 背包事件 |
| `IGameLifecycle` | 游戏生命周期事件 |
| `IGamepadState` | 手柄状态 |
| `IJobGauges` | 职业量谱数据 |
| `IKeyState` | 键盘按键状态 |
| `IMarketBoard` | 市场公告板数据 |
| `INamePlateGui` | 名牌修改 |
| `INotificationManager` | 发送 ImGui 通知 |
| `IObjectTable` | 当前区域所有游戏对象 |
| `IPartyFinderGui` | 招募板交互 |
| `IPartyList` | 队伍/团队列表 |
| `IPlayerState` | 玩家状态 |
| `IPluginLog` | 插件日志 |
| `ISeStringEvaluator` | SeString 求值 |
| `ISigScanner` | 内存签名扫描 |
| `ITargetManager` | 获取/设置目标 |
| `ITextureProvider` | 获取游戏贴图 |
| `IToastGui` | 通知弹窗 |
| `IUnlockState` | 解锁状态 |

> 完整的英文 API 参考请访问 [dalamud.dev/api](https://dalamud.dev/api/)。
> 本文档由 https://dalamud.dev/ 的 API 文档翻译整理而成。
