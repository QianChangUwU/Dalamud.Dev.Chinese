---
sidebar_position: 8
---

## 插件技术考量

### 窗口 API
对于常规窗口（如设置和工具窗口），应使用 [Dalamud Windowing API](https://dalamud.dev/api/Dalamud.Interface.Windowing/)。

### 数据处理
强烈推荐使用 [Lumina](https://github.com/NotAdam/Lumina) 而非 XIVAPI。Lumina 使用本地游戏文件，始终最新且准确。

### 性能约束
应尽量减少对游戏性能的影响。可以通过开发者菜单（`/xldev`）中的"Plugin Statistics"窗口来调试性能问题。

### 后端服务器通信

插件可以与维护者运行的后端服务通信，但需满足以下要求：

- 发送最少量的必要数据
- 非必要数据收集需用户明确选择加入
- 使用伪随机标识符（或不用标识符）
- 必须使用加密通信（HTTPS/TLS）
- 必须通过 DNS 主机名而非 IP 地址连接
