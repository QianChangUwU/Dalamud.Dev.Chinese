---
sidebar_position: 3
---

## 设置插件元数据

你需要编写一个*插件清单*来配置插件在安装程序中的显示方式：名称、描述、图标、更新日志等。这是一个 JSON 或 YAML 文件，以插件内部名称命名。

> 使用 YAML 清单时，应将 CamelCase 键替换为 snake_case。例如，JSON 中的 `RepoUrl` 在 YAML 中为 `repo_url`。

### 示例 YAML 清单

```yaml
name: Test Plugin
author: You
punchline: Does nothing!
description: |-
  This is a test plugin - this first line is a summary.
  Down here is a more detailed explanation of what the plugin
  does, manually wrapped to make sure it stays visible in the
  installer.
repo_url: https://example.com
```

### 可用清单键

**必需键：**
- `Name`
- `Author`
- `Description`
- `Punchline`

**可选键：**
- `ApplicableVersion`
- `RepoUrl`
- `Tags`
- `CategoryTags`
- `LoadRequiredState`
- `LoadSync`
- `CanUnloadAsync`
- `LoadPriority`
- `ImageUrls`
- `IconUrl`
- `Changelog`
- `AcceptsFeedback`
- `FeedbackMessage`

**由 DalamudPackager 自动填充（请勿手动设置）：**
- `AssemblyVersion`
- `InternalName`
- `DalamudApiLevel`

### 更新日志

你可以通过三种方式设置插件更新日志：

1. 在 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库的 `manifest.toml` 中包含 `changelog` 字段
2. 在拉取请求描述中编写文本
3. 在插件清单中包含 `Changelog` 键

> 如果你希望更新日志在插件安装程序中可见，必须将其包含在 `manifest.toml` 或插件清单中。
