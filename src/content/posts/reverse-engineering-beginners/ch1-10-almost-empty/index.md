---
title: "CH1.10 - Almost Empty Function"
published: 2025-11-11
description: "Examining what compilers generate for almost-empty functions and the subtle differences from truly empty ones"
image: ../cpp-history-philosophy/i (3).webp
tags: ["reverse-engineering", "assembly", "optimization", "functions"]
category: "Reverse Engineering"
priority: 8
permalink: "reverse-engineering/ch1-10-almost-empty"
draft: false
hideFromFeed: true
---

# CH1.10 - Almost Empty Function

## Almost Empty Functions

What's the difference between these functions?

```c
void empty() { }
void almost_empty() { int x; }
void with_arg(int a) { }
```

### Compiler Output Comparison

**Empty function:**
```asm
empty:
    push rbp
    mov rbp, rsp
    pop rbp
    ret
```

**Almost empty (unused variable):**
```asm
almost_empty:
    push rbp
    mov rbp, rsp
    mov DWORD PTR [rbp-4], 0   ; x = 0
    nop
    pop rbp
    ret
```

**With unused argument:**
```asm
with_arg:
    push rbp
    mov rbp, rsp
    mov DWORD PTR [rbp-4], edi  ; Store argument
    nop
    pop rbp
    ret
```

### Why Store Unused Values?

The `-O0` (no optimization) level preserves all variables for debugging. With `-O2`:

```asm
almost_empty:
    ret            ; Nothing generated!

with_arg:
    ret            ; Argument ignored
```

## Key Takeaways

1. **Debug builds** generate code for all variables, even unused
2. **Release builds** optimize away unused code
3. **NOP instructions** serve as padding or breakpoints
4. Compiler behavior varies with optimization levels

---

**Next Chapter:** [CH1.11 - printf() With Several Arguments (Part 1)](/reverse-engineering/ch1-11-printf-part1)
