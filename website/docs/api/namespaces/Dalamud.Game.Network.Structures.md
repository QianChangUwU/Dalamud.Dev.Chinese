---
sidebar_label: "Dalamud.Game.Network.Structures"
---

# Dalamud.Game.Network.Structures

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Network.Structures/](https://dalamud.dev/api/Dalamud.Game.Network.Structures/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### MarketBoardCurrentOfferings​

此类表示 the current market board offerings from a game 网络 数据包

### MarketBoardCurrentOfferings.MarketBoardItemListing​

此类表示 the current market board offering of a single item from the Dalamud.Game.网络.Structures.MarketBoardCurrentOfferings 网络 数据包

### MarketBoardCurrentOfferings.MarketBoardItemListing.ItemMateria​

This represents the materia slotted to an Dalamud.Game.网络.Structures.MarketBoardCurrentOfferings.MarketBoardItemListing.

### MarketBoardHistory​

此类表示 the market board history from a game 网络 数据包

### MarketBoardHistory.MarketBoardHistoryListing​

此类表示 the market board history of a single item from the Dalamud.Game.网络.Structures.MarketBoardHistory 网络 数据包

### MarketBoardPurchase​

表示 market board purchase information This message is received from the server when a purchase is made at a market board

### MarketBoardPurchaseHandler​

表示 market board purchase information This message is sent from the client when a purchase is made at a market board

### MarketTaxRates​

此类表示 the "Result Dialog" 数据包 This is also used e.g for reduction results but we only care about tax rates We can do that by checking the "Category" field

## 接口

### IItemMateria​

An 接口 that represents the materia slotted to an Dalamud.Game.网络.Structures.IMarketBoardItemListing.

### IMarketBoardCurrentOfferings​

An 接口 that represents the current market board offerings.

### IMarketBoardHistory​

An 接口 that represents the market board history from the game.

### IMarketBoardHistoryListing​

An 接口 that represents the market board history of a single item from Dalamud.Game.网络.Structures.IMarketBoardHistory.

### IMarketBoardItemListing​

An 接口 that represents the current market board offering of a single item from the Dalamud.Game.网络.Structures.IMarketBoardCurrentOfferings.

### IMarketBoardPurchase​

An 接口 that represents market board purchase information. This message is received from the server when a purchase is made at a market board.

### IMarketBoardPurchaseHandler​

An 接口 that represents market board purchase information. This message is sent from the client when a purchase is made at a market board.

### IMarketTaxRates​

An 接口 that represents the tax rates received by the client when interacting with a retainer vocate.

