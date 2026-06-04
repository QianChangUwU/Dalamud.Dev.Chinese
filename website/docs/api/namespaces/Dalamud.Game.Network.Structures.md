---
sidebar_label: "Dalamud.Game.Network.Structures"
---

# Dalamud.Game.Network.Structures

> 🌐 本页是 [dalamud.dev/api/Dalamud.Game.Network.Structures/](https://dalamud.dev/api/Dalamud.Game.Network.Structures/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### MarketBoardCurrentOfferings​

此类表示来自游戏网络数据包的当前市场板提供。

### MarketBoardCurrentOfferings.MarketBoardItemListing​

此类表示来自 Dalamud.Game.Network.Structures.MarketBoardCurrentOfferings 网络数据包的单个物品的当前市场板提供。

### MarketBoardCurrentOfferings.MarketBoardItemListing.ItemMateria​

这表示插入到 Dalamud.Game.Network.Structures.MarketBoardCurrentOfferings.MarketBoardItemListing 的 materia。

### MarketBoardHistory​

此类表示来自游戏网络数据包的市场板历史。

### MarketBoardHistory.MarketBoardHistoryListing​

此类表示来自 Dalamud.Game.Network.Structures.MarketBoardHistory 网络数据包的单个物品的市场板历史。

### MarketBoardPurchase​

表示市场板购买信息。此消息在市场板上进行购买时从服务器接收。

### MarketBoardPurchaseHandler​

表示市场板购买信息。此消息在市场板上进行购买时从客户端发送。

### MarketTaxRates​

此类表示 "结果对话框" 数据包。这也用于例如减免结果，但我们只关心税率。我们可以通过检查 "类别" 字段来做到这一点。

## 接口

### IItemMateria​

表示插入到 Dalamud.Game.Network.Structures.IMarketBoardItemListing 的 materia 的接口。

### IMarketBoardCurrentOfferings​

表示当前市场板提供的接口。

### IMarketBoardHistory​

表示来自游戏的市场板历史的接口。

### IMarketBoardHistoryListing​

表示来自 Dalamud.Game.Network.Structures.IMarketBoardHistory 的单个物品的市场板历史的接口。

### IMarketBoardItemListing​

表示来自 Dalamud.Game.Network.Structures.IMarketBoardCurrentOfferings 的单个物品的当前市场板提供的接口。

### IMarketBoardPurchase​

表示市场板购买信息的接口。此消息在市场板上进行购买时从服务器接收。

### IMarketBoardPurchaseHandler​

表示市场板购买信息的接口。此消息在市场板上进行购买时从客户端发送。

### IMarketTaxRates​

表示客户端在与保管人互动时接收到的税率的接口。

