---
sidebar_label: "Dalamud.Plugin.Ipc"
---

# Dalamud.Plugin.Ipc

> 🌐 本页是 [dalamud.dev/api/Dalamud.Plugin.Ipc/](https://dalamud.dev/api/Dalamud.Plugin.Ipc/) 的中文翻译。
> 类型/方法名称保留英文原文，仅翻译说明文字。

## 类

### AdapterMethodMissingException​

如果在Dalamud.Plugin.Ipc.IIdDataShareAdapter或Dalamud.Plugin.Ipc.INameDataShareAdapter中请求的方法不存在，则抛出异常。

### AdapterTypeMismatchException​

如果在Dalamud.Plugin.Ipc.IIdDataShareAdapter或Dalamud.Plugin.Ipc.INameDataShareAdapter中请求的方法无法处理指定的参数类型，则抛出异常。

### IpcContext​

与IPC调用相关的上下文。从ThreadLocal读取。

## 接口

### ICallGateProvider​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, T7, T8, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, T7, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, T4, T5, T6, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, T4, T5, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, T4, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, T3, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, T2, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;T1, TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateProvider&lt;TRet&gt;​

IPC通道的提供者（“服务器”）部分的支持接口。此接口用于通过RPC向其他插件公开方法，并允许其他插件订阅来自此插件的通知。

### ICallGateSubscriber​

所有IPC订阅者的接口。

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, T7, T8, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, T7, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, T6, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, T3, T4, T5, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, T3, T4, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, T3, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, T2, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;T1, TRet&gt;​

此类促进插件之间的通信。

### ICallGateSubscriber&lt;TRet&gt;​

此类促进插件之间的通信。

### IIdDataShareAdapter​

提供实时IPC适配器的接口，可以直接使用自定义ID调用方法，而无需IPC查询的运行时开销。

### INameDataShareAdapter​

提供实时IPC适配器的接口，可以直接使用名称调用方法，而无需IPC查询的运行时开销。

