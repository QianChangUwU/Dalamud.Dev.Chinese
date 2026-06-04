---
sidebar_position: 4
---

## 与游戏交互

几乎所有的插件最终都会以某种方式与游戏本身交互。开发者通常建议按以下优先级进行游戏交互：

1. **尽可能使用 Dalamud 提供的 API**。这些通常是与游戏交互的最安全方式，提供稳定的 API，在 API 升级之外不会变化。
2. 如果 Dalamud API 未暴露所需行为，开发者可以使用 **Client Structs 项目**。它随 Dalamud 一起提供，有效地允许插件将游戏用作库。
3. 如果 Client Structs 项目也未暴露所需行为，Dalamud 提供**逃生通道**，允许使用原始内存和原始函数。

大多数插件将稳定地停留在第 1 和第 2 阶段，第 3 阶段用于尚未被完全逆向工程的新概念。

### 扩展游戏事件

#### 轮询（Polling）

最简单的方法是在每帧检查变化：

```csharp
public class HealthWatcher : IDisposable {
    private uint _lastHealth;
    public HealthWatcher() {
        Plugin.Framework.Update += this.OnFrameworkTick;
    }
    public void Dispose() {
        Plugin.Framework.Update -= this.OnFrameworkTick;
    }
    private void OnFrameworkTick(IFramework framework) {
        var player = Plugin.ObjectTable.LocalPlayer;
        if (player == null) return;
        var currentHealth = player.CurrentHp;
        if (currentHealth == this._lastHealth) return;
        this._lastHealth = currentHealth;
        Plugin.PluginLog.Information("玩家血量已更新为 {health}.", currentHealth);
    }
}
```

#### 钩子函数（Hooking）

当某些事件发生频率较低或没有好的轮询方式时，可以设置"钩子"。

> **警告**：钩子是**高度侵入性**的操作！如果钩子内的代码抛出异常，很可能导致游戏崩溃。

使用 Client Structs 的示例：

```csharp
using SetSavePendingDelegate = RaptureMacroModule.Delegates.SetSavePendingFlag;

public unsafe class MyHook : IDisposable {
    private readonly Hook<SetSavePendingDelegate> _macroSaveHook;

    public MyHook() {
        this._macroSaveHook = Plugin.GameInteropProvider.HookFromAddress<SetSavePendingDelegate>(
            RaptureMacroModule.MemberFunctionPointers.SetSavePendingFlag,
            this.SetSavePendingDetour
        );
        this._macroSaveHook.Enable();
    }

    public void Dispose() {
        this._macroSaveHook.Dispose();
    }

    private void SetSavePendingDetour(RaptureMacroModule* self, bool needsSave, uint set) {
        try {
            Plugin.PluginLog.Information("发生了宏保存！");
        } catch (Exception ex) {
            Plugin.PluginLog.Error(ex, "处理宏保存事件时出错。");
        }
        this._macroSaveHook.Original(self, needsSave, set);
    }
}
```

使用签名（Signature）的示例：

```csharp
public unsafe class MySiggedHook : IDisposable {
    private delegate void SetSavePendingDelegate(RaptureMacroModule* self, bool needsSave, uint set);

    [Signature("45 85 C0 75 04 88 51 3D", DetourName = nameof(SetSavePendingDetour))]
    private Hook<SetSavePendingDelegate>? _macroSaveHook;

    public MySiggedHook() {
        Plugin.GameInteropProvider.InitializeFromAttributes(this);
        this._macroSaveHook?.Enable();
    }

    public void Dispose() {
        this._macroSaveHook?.Dispose();
    }

    private void SetSavePendingDetour(RaptureMacroModule* self, bool needsSave, uint set) {
        try {
            Plugin.PluginLog.Information("发生了宏保存！");
        } catch (Exception ex) {
            Plugin.PluginLog.Error(ex, "处理宏保存事件时出错。");
        }
        this._macroSaveHook!.Original(self, needsSave, set);
    }
}
```

### 调用游戏代码

有时你需要让游戏本身执行某些操作，即将游戏代码用作库。

使用 Client Structs 的示例：

```csharp
public unsafe bool IsPlayerMentor() {
    var playerStatePtr = PlayerState.Instance();
    return playerStatePtr->IsMentor();
}
```

#### 创建自定义委托

当 Client Structs 中没有所需方法时：

```csharp
public class GameFunctions {
    private delegate byte IsQuestCompletedDelegate(ushort questId);

    [Signature("E8 ?? ?? ?? ?? 41 88 84 2C")]
    private readonly IsQuestCompletedDelegate? _isQuestCompleted = null;

    public GameFunctions() {
        Plugin.GameInteropProvider.InitializeFromAttributes(this);
    }

    public bool IsQuestCompleted(ushort questId) {
        if (this._isQuestCompleted == null)
            throw new InvalidOperationException("未找到 IsQuestCompleted 签名！");
        return this._isQuestCompleted(questId) > 0;
    }
}
```

#### 使用函数指针的更简洁方式

```csharp
[Signature("E8 ?? ?? ?? ?? 41 88 84 2C")]
private readonly delegate* unmanaged<ushort, byte> _isQuestCompletedDelegate;
```

#### 使用 SigScanner

```csharp
public class SomeSigWrapper {
    private readonly delegate* unmanaged<ushort, byte> _isQuestCompletedDelegate;

    public SomeSigWrapper() {
        var fptr = Plugin.SigScanner.ScanText("E8 ?? ?? ?? ?? 41 88 84 2C");
        this._isQuestCompletedDelegate = (delegate* unmanaged<ushort, byte>) fptr;
    }
}
```
