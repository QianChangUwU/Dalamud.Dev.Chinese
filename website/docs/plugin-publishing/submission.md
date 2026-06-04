---
sidebar_position: 7
---

## 提交流程

### D17 工作流

Dalamud 的插件工作流由 [Plogon](https://github.com/goatcorp/Plogon) 系统管理。

两个轨道：
- **stable（稳定）**：面向公众的构建版本
- **testing（测试）**：实验性或新版本

### 提交插件

向 [DalamudPluginsD17](https://github.com/goatcorp/DalamudPluginsD17) 仓库提交拉取请求。

目录结构：

```
MyPluginName/
├── manifest.toml
└── images/
    ├── icon.png
    ├── image1.png [可选]
    ├── image2.png [可选]
    └── image3.png [可选]
```

`manifest.toml` 示例：

```toml
[plugin]
repository = "https://github.com/goatcorp/SamplePlugin.git"
commit = "765d9bb434ac99a27e9a3f2ba0a555b55fe6269d"
owners = ["goaaats"]
project_path = "SamplePlugin"
changelog = "Added Herobrine"
```

图标要求：1:1 宽高比，64x64 到 512x512 像素之间。
