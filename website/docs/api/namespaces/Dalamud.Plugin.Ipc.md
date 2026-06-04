---
sidebar_label: "Dalamud.Plugin.Ipc"
---

# Dalamud.Plugin.Ipc

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin.Ipc/](https://dalamud.dev/api/Dalamud.Plugin.Ipc/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### AdapterMethodMissingException​

Exception thrown if the 方法 requested in a Dalamud.插件.Ipc.IIdDataShareAdapter or a Dalamud.插件.Ipc.INameDataShareAdapter does not exist.

### AdapterTypeMismatchException​

Exception thrown if the 方法 requested in a Dalamud.插件.Ipc.IIdDataShareAdapter or a Dalamud.插件.Ipc.INameDataShareAdapter can not 处理 a specified argument 类型.

### IpcContext​

The context associated for an IPC call. Reads from ThreadLocal.

## 接口

### ICallGateProvider​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, T7, T8, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, T7, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, T4, T5, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, T4, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, T3, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, T2, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;T1, TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateProvider&lt;TRet&gt;​

The backing 接口 for the 提供者 ("server") half of an IPC channel. This 接口 is used to expose 方法 to other 插件 via RPC, as well as to allow other 插件 to subscribe to 通知 from this 插件.

### ICallGateSubscriber​

An 接口 for all IPC subscribers.

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, T7, T8, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, T7, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, T3, T4, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, T3, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, T2, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;T1, TRet&gt;​

此类辅助 inter-插件 communication

### ICallGateSubscriber&lt;TRet&gt;​

此类辅助 inter-插件 communication

### IIdDataShareAdapter​

An 接口 to provide live IPC adapters that can invoke 方法 directly using custom IDs without the runtime overhead of IPC queries.

### INameDataShareAdapter​

An 接口 to provide live IPC adapters that can invoke 方法 directly using names without the runtime overhead of IPC queries.

