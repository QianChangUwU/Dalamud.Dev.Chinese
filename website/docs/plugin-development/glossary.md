---
sidebar_position: 9
---

## 术语表

### 面向玩家的系统

| 系统 | 内部名称 |
|------|---------|
| 配饰 | Ornament |
| 冒险者铭牌 | CharaCard |
| 精炼 | Purify |
| 衣柜 | Cabinet |
| 青魔法师 | AOZ |
| 博兹雅 | MYC |
| 聊天气泡 | MiniTalk |
| 陆行鸟伙伴 | Buddy |
| 陆行鸟出租 | ChocoboTaxi |
| 陆行鸟赛跑 | RaceChocobo |
| 制作日志 | RecipeNote |
| 自定义交付 | SatisfactionSupply |
| 友好部族 | 取决于具体部族 |
| 仙人仙乐 | WeeklyPuzzle |
| 幻化柜 | MiragePrismBox |
| 幻化模板 | MiragePrismPlate |
| 狩猎通缉令 | MobHunt |
| 伊修加德复兴 | HwdDev |
| 无人岛 | MJI |
| 市场公告板 | ItemSearch |
| 宠物指南 | MinionNoteBook |
| 坐骑指南 | MountNoteBook |
| 新人频道 | BeginnerChat |
| 亲信战友 | Dawn |
| 异变/绝命战士 | VVD |

### 技术术语

| 术语 | 描述 |
|------|------|
| AccountId | 账户上所有角色共享的唯一ID，仅当前游戏会话有效 |
| Addon | 用户界面中的窗口，即 AtkUnitBase |
| Agent | 管理 Addon 的控制器，处理事件和回调 |
| Atk | FFXIV UI 使用的库名称，推测为 "Addon Toolkit" 缩写 |
| BNpc/BattleNpc | 具有战斗能力的 NPC，如敌人和宠物 |
| ContentId | 玩家角色的唯一 ID，用于本地保存角色设置 |
| ENpc/EventNpc | EventHandler 控制的 NPC，如任务发布者和商人 |
| EObj/EventObject | EventHandler 控制的可交互对象 |
| EntityId | 当前区域中实体的唯一 ID |
| Rapture | FFXIV 的代号 |

### 程序与库

| 名称 | 描述 |
|------|------|
| Dalamud | FFXIV 的插件开发框架，允许开发者编写自定义 C# 插件 |
| EXDSchema | 社区维护的 FFXIV 内部二进制 Excel 文件的架构定义仓库 |
| FFXIVClientStructs | 集中社区对游戏内存布局和函数研究的库 |
| Lumina | 从 FFXIV 专有文件格式读取游戏数据的库 |
| Lumina.Excel | 使用 EXDSchema 生成 C# 结构体以方便读取游戏 Excel 表的库 |
| XIVLauncher | FFXIV 启动器的自定义现代替代品 |
