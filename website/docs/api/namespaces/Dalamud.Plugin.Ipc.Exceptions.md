---
sidebar_label: "Dalamud.Plugin.Ipc.Exceptions"
---

# Dalamud.Plugin.Ipc.Exceptions

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin.Ipc.Exceptions/](https://dalamud.dev/api/Dalamud.Plugin.Ipc.Exceptions/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### DataCacheCreationError​

This exception is thrown when a null value is provided for a 数据 cache or it does not implement the expected 类型.

### DataCacheTypeMismatchError​

This exception is thrown when a 数据 cache is accessed with the wrong 类型.

### DataCacheValueNullError​

This exception is thrown when a null value is provided for a 数据 cache or it does not implement the expected 类型.

### IpcError​

This exception is thrown when an IPC errors are encountered.

### IpcLengthMismatchError​

This exception is thrown when an IPC 方法 is invoked and the number of 类型 does not match what was previously registered.

### IpcNotReadyError​

This exception is thrown when an IPC 方法 is invoked, but no actions or funcs have been registered yet.

### IpcTypeMismatchError​

This exception is thrown when an IPC 方法 is checked out, but the 类型 does not match what was previously registered.

### IpcValueNullError​

This exception is thrown when a null value is passed to an IPC requiring a value 类型.

