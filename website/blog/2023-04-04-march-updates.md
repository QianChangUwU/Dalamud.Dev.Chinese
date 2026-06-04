---
title: 2023 年 3 月 Dalamud 更新
date: 2023-04-04
authors: [goat, kal]
tags: [更新]
---

以下是 3 月份 Dalamud 核心更新的摘要。这些是非破坏性变更，我们不会增加 API 等级。唯一的例外可能是客户端结构体的变更。如果您遇到任何问题或有任何反馈，请告知我们。

## 变更内容

- 由多位开发者更新客户端结构体
- Ottermandias 改进 DataShare 窗口
- Soreepeong 在覆盖导入钩子释放时快速失败
- goaaats 改进插件配置写入
- Soreepeong 将 FunctionPointerVariableHook 从 HeapAlloc 改为 VirtualAlloc

## 新增功能

- Caraxi 添加 GameConfig 服务
- goaaats 添加 GameLifeCycle 服务
- goaaats 添加插件默认值的自定义 targets 文件
- Ottermandias 添加 Uld 包装器
- goaaats 在开发者栏中显示提交计数

## Bug 修复

- goaaats 修复插件服务依赖顺序
- goaaats 修复分配依赖获取器任务时的类型混淆
- Aireil 修复安装器搜索和变更日志的 bug

感谢 kal 整理此内容。

我还想提一下，Avaflow 和 KazWolfe 现在正在帮助我维护 Dalamud，包括 PR 合并、补丁更新或 CS 更新。您可以在 Discord 上通过 `@dalamud maintainers` 找到我们。他们都已经活跃了很长时间，我相信他们能在适当的情况下做出正确的选择。这并不代表我将不再参与。我们仍在努力建立工作流程，使多人协作开发 Dalamud 变得更好、更安全，更多信息即将公布。希望我因忙碌而导致的某些瓶颈问题能够得到缓解。

谢谢，祝您四月愉快！
