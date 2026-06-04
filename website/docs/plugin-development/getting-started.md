---
sidebar_position: 1
---

# 插件开发

## 入门指南

插件允许你与游戏交互、添加功能、修改功能等。我们要求你尊重[我们的指南](/docs/plugin-publishing/restrictions)，以确保你的插件被批准进入官方插件仓库，并最大程度降低 Square Enix 采取行动的风险。

> 开始前，请查看：
> - [AI 使用政策](/docs/plugin-publishing/ai-policy)
> - [行为准则](/docs/code-of-conduct)

**我们建议你从 [`SamplePlugin` 仓库](https://github.com/goatcorp/SamplePlugin) 点击"Use this template"开始**，然后根据你的具体需求进行定制。

要分发插件，需要正确打包。这由 [Dalamud.NET.Sdk](https://github.com/goatcorp/Dalamud.NET.Sdk) 处理——详见[设置插件元数据](/docs/plugin-development/plugin-metadata)。

当插件准备好测试/发布时，应向 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库提交拉取请求。**请将测试插件放在 testing/live 文件夹中**。
