---
sidebar_label: "Dalamud.Plugin.Ipc.Exceptions"
---

# Dalamud.Plugin.Ipc.Exceptions

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin.Ipc.Exceptions/](https://dalamud.dev/api/Dalamud.Plugin.Ipc.Exceptions/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### DataCacheCreationError​

当为数据缓存提供 null 值或未实现预期类型时，抛出此异常。

### DataCacheTypeMismatchError​

当以错误类型访问数据缓存时，抛出此异常。

### DataCacheValueNullError​

当为数据缓存提供 null 值或未实现预期类型时，抛出此异常。

### IpcError​

当遇到 IPC 错误时，抛出此异常。

### IpcLengthMismatchError​

当调用 IPC 方法时，如果类型数量与之前注册的不匹配，则抛出此异常。

### IpcNotReadyError​

当调用 IPC 方法时，如果尚未注册任何操作或函数，则抛出此异常。

### IpcTypeMismatchError​

当检查出 IPC 方法时，如果类型与之前注册的不匹配，则抛出此异常。

### IpcValueNullError​

当将 null 值传递给需要值类型的 IPC 时，抛出此异常。

