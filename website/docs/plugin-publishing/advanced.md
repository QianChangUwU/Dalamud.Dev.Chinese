---
sidebar_position: 2
---

## 高级插件发布

### 全局禁用插件

通过 `bannedPlugin.json` 文件可以实现，该文件位于 [DalamudAssets](https://github.com/goatcorp/DalamudAssets) 仓库。

```json
{
  "Name": "插件内部名称",
  "AssemblyVersion": "要禁用的版本",
  "Reason": "显示给用户的原因（可选）"
}
```
