---
sidebar_label: "Dalamud.Game.ClientState.Conditions"
---

# Dalamud.Game.ClientState.Conditions

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.ClientState.Conditions/](https://dalamud.dev/api/Dalamud.Game.ClientState.Conditions/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 枚举

### ConditionFlag​

Possible state flags (or conditions as they're called internally) that can be set on the local client. These come from LogMessage (somewhere) and directly map to each state field managed by the client. As of 5.25, it maps to LogMessage row 7700 and onwards, which can be checked by looking at the 条件 sheet and looking at what column 2 maps to. The first 24 conditions are the local players CharacterModes.

