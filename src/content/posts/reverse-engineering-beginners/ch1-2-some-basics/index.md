---
title: "CH1.2 - Some Basics"
published: 2025-10-07
description: "Covering the fundamental concepts needed before diving deep into reverse engineering"
image: ../cpp-hello-world/1_j6R3KWVJB_Bx54F5Gy24nA.png
tags: ["reverse-engineering", "assembly", "fundamentals", "beginner"]
category: "Reverse Engineering"
priority: 2
permalink: "reverse-engineering/ch1-2-some-basics"
draft: false
hideFromFeed: true
---

# CH1.2 - Some Basics

## Fundamental Concepts

Before diving into reverse engineering, you need to understand some basic concepts about how computers work at the lowest level.

### Registers

Registers are small, fast storage locations inside the CPU:

- **RAX**: Accumulator (return values)
- **RBX**: Base register
- **RCX**: Counter
- **RDX**: Data register
- **RSI/RDI**: Source/Destination index
- **RSP**: Stack pointer
- **RBP**: Base pointer
- **R8-R15**: General purpose (64-bit)

### Memory Addressing

Memory is addressed linearly:

```
[base + index*scale + displacement]
```

Example:
- `[rbp-4]` - local variable at offset -4 from base pointer
- `[rax + rcx*4]` - array access with scale factor

### Stack Operations

The stack grows downward in memory:

```asm
push rax    ; Decrement RSP, store value
pop rax     ; Load value, increment RSP
```

---

**Next Chapter:** [CH1.3 & CH1.4 - Empty Function & Returning Values](/reverse-engineering/ch1-3-4-empty-function)
