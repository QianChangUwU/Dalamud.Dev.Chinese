---
sidebar_position: 7
---

## SeString

游戏使用自定义的空终止字符串实现，允许字符串携带二进制负载。

> 本指南使用最新的 C# 实现：Lumina 的 `ReadOnlySeString` 或 `ReadOnlySeStringSpan` 以及 `SeStringBuilder`。
> 旧的 `Lumina.Text.SeString` 类不应再使用。

### 负载（Payloads）

每个负载结构如下：
- 起始字节 (`0x02`)
- 宏代码（1 字节）
- 宏长度（整数表达式）
- 宏特定的表达式
- 结束字节 (`0x03`)

**粗体文本示例：**

宏字符串 `<bold(1)>` 启用粗体，`<bold(0)>` 禁用粗体。

编程方式（三种方式）：

**方式 1：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .BeginMacro(MacroCode.Bold)
    .AppendIntExpression(1)
  .EndMacro()
  .Append("Player Name")
  .BeginMacro(MacroCode.Bold)
    .AppendIntExpression(0)
  .EndMacro()
  .Append("!")
  .ToReadOnlySeString();
```

**方式 2：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .AppendSetBold(true)
  .Append("Player Name")
  .AppendSetBold(false)
  .Append("!")
  .ToReadOnlySeString();
```

**方式 3：**
```csharp
var example = new SeStringBuilder()
  .Append("Welcome ")
  .AppendBold("Player Name")
  .Append("!")
  .ToReadOnlySeString();
```

### 表达式类型

#### 整数表达式
- 首字节在 `> 0x00` 且 `< 0xD0` 之间：值 = 字节 - 1
- 首字节在 `>= 0xF0` 且 `<= 0xFE` 之间：变长编码

#### 占位符表达式
- `0xD8`-`0xDF`: 时间相关（毫秒、秒、分、时、日、周、月、年）
- `0xEC`: 堆栈颜色

#### 二进制表达式（比较运算符）
- `0xE0`: `>=`
- `0xE1`: `>`
- `0xE2`: `<=`
- `0xE3`: `<`
- `0xE4`: `==`
- `0xE5`: `!=`

#### 参数表达式
- `0xE8`: 本地数字参数 (lnum#)
- `0xE9`: 全局数字参数 (gnum#)
- `0xEA`: 本地字符串参数 (lstr#)
- `0xEB`: 全局字符串参数 (gstr#)

**已知的全局参数示例：**
- 索引 1: 玩家名称（字符串）
- 索引 4: 玩家性别（整数）
- 索引 11: 艾欧泽亚时间-小时（整数）
- 索引 12: 艾欧泽亚时间-分钟（整数）
- 索引 68: 玩家职业ID（整数）
- 索引 69: 玩家等级（整数）
- 索引 93: 区域类型ID（整数）

#### 字符串表达式
类型字节为 `0xFF`，后跟整数表达式（长度）和嵌套的 SeString。

### 宏列表

| 代码 | 名称 | 描述 |
|------|------|------|
| 0x06 | SetResetTime | 设置重置时间到上下文时间存储 |
| 0x07 | SetTime | 设置指定时间到上下文时间存储 |
| 0x08 | If | 测试表达式并使用相应子表达式 |
| 0x09 | Switch | 多路分支选择 |
| 0x0A | PcName | 添加角色名称 |
| 0x0B | IfPcGender | 测试角色性别 |
| 0x0C | IfPcName | 测试角色名称 |
| 0x0D | Josa | 韩语助词 |
| 0x0E | Josaro | 韩语助词（ro） |
| 0x0F | IfSelf | 测试是否为本地玩家 |
| 0x10 | NewLine | 换行 |
| 0x11 | Wait | 等待指定时长 |
| 0x12 | Icon | 添加图标 |
| 0x13 | Color | 设置文本前景色 |
| 0x14 | EdgeColor | 设置文本边框色 |
| 0x15 | ShadowColor | 设置文本阴影色 |
| 0x16 | SoftHyphen | 软连字符 |
| 0x17 | Key | 用途未知 |
| 0x18 | Scale | 用途未知 |
| 0x19 | Bold | 设置粗体 |
| 0x1A | Italic | 设置斜体 |
| 0x1B | Edge | 用途未知 |
| 0x1C | Shadow | 用途未知 |
| 0x1D | NonBreakingSpace | 不间断空格 |
| 0x1E | Icon2 | 动态图标（根据手柄配置重映射） |
| 0x1F | Hyphen | 连字符 |
| 0x20 | Num | 十进制整数 |
| 0x21 | Hex | 十六进制整数 |
| 0x22 | Kilo | 千分位格式 |
| 0x23 | Byte | 可读字节格式 |
| 0x24 | Sec | 零填充两位数字 |
| 0x25 | Time | 用途未知 |
| 0x26 | Float | 浮点数 |
| 0x27 | Link | 链接区域 |
| 0x28 | Sheet | 从数据表读取列 |
| 0x29 | String | 按原样添加字符串 |
| 0x2A | Caps | 全大写字符串 |
| 0x2B | Head | 首字母大写 |
| 0x2C | Split | 分割字符串 |
| 0x2D | HeadAll | 所有单词首字母大写 |
| 0x2E | Fixed | 用途未知 |
| 0x2F | Lower | 全小写转换 |
| 0x30 | JaNoun | 日语名词（自动添加适当的助词标记） |
| 0x31 | EnNoun | 英语名词 |
| 0x32 | DeNoun | 德语名词 |
| 0x33 | FrNoun | 法语名词 |
| 0x34 | ChNoun | 中文名词 |
| 0x40 | LowerHead | 首字母小写 |
| 0x41 | SheetSub | 从子数据表读取列 |
| 0x42 | SwitchPlatform | 根据平台切换内容 |
| 0x48 | ColorType | 带类型的颜色设置 |
| 0x49 | EdgeColorType | 带类型的边框颜色 |
| 0x4A | Ruby | 添加注音（振假名） |
| 0x50 | Digit | 数字格式 |
| 0x51 | Ordinal | 序数格式 |
| 0x60 | Sound | 播放音效 |
| 0x61 | LevelPos | 等级位置 |
