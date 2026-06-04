---
sidebar_label: "Dalamud.Game.ClientState.Conditions"
---

# Dalamud.Game.ClientState.Conditions

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.ClientState.Conditions/](https://dalamud.dev/api/Dalamud.Game.ClientState.Conditions/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 枚举

### ConditionFlag​

可以在本地客户端上设置的可能状态标志（或称为内部条件）。这些来自 LogMessage（某处），并直接映射到客户端管理的每个状态字段。从 5.25 开始，它映射到 LogMessage 行 7700 及之后的行，可以通过查看 Condition 表并查看第 2 列映射到的内容来检查。前 24 个条件是本地玩家的 CharacterModes。

