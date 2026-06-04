---
sidebar_position: 5
---

## 发布到自定义仓库

### 仓库 URL

指向特定格式 JSON 文件的 URL，包含存储条目的数组。

```json
[
  {
    "Author": "A Plugin Developer",
    "Name": "A Custom Plugin",
    "InternalName": "ACustomPlugin",
    "AssemblyVersion": "1.0.0.0",
    "DalamudApiLevel": 10,
    "Punchline": "A short blurb",
    "DownloadLinkInstall": "https://example.com/path/to/output.zip",
    "DownloadLinkUpdate": "https://example.com/path/to/release/output.zip",
    "LastUpdate": "1701231234"
  }
]
```

### 存储条目键

额外支持：
- `IsHide`：隐藏插件
- `DownloadCount`：下载计数
- `DownloadLinkInstall`：安装下载链接
- `DownloadLinkUpdate`：更新下载链接
- `ImageUrls`：预览图片数组
- `IconUrl`：图标 URL

### 测试键

- `IsTestingExclusive`：仅测试用户可见
- `TestingAssemblyVersion`：测试版本
- `TestingChangelog`：测试更新日志
- `TestingDalamudApiLevel`：测试目标的 API 级别
- `DownloadLinkTesting`：测试版本下载链接
