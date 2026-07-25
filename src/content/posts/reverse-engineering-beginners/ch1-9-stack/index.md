---
title: "CH1.9 - Stack"
published: 2025-10-31
description: "Understanding how the stack works in x86/x64 assembly and how compilers use it for local variables and function calls"
image: ../cpp-getting-started/i (2).webp
tags: ["reverse-engineering", "assembly", "stack", "memory"]
category: "Reverse Engineering"
priority: 7
permalink: "reverse-engineering/ch1-9-stack"
draft: false
hideFromFeed: true
---

# CH1.9 - Stack

## How the Stack Works

The stack is a LIFO (Last In, First Out) data structure used for:

- Local variables
- Function arguments
- Return addresses
- Saved registers

### Stack Growth

The stack grows **downward** in memory (from high to low addresses):

```asm
push rax     ; RSP = RSP - 8, then store
pop rax      ; Load, then RSP = RSP + 8
```

### Stack Pointer (RSP)

RSP always points to the **top of the stack** (last pushed item):

```
Before push:        After push rax:
                    
RSP → ┌────────┐   RSP → ┌────────┐
      │  old   │         │  rax   │ ← NEW
      │  data  │         ├────────┤
      └────────┘         │  old   │
                         │  data  │
                         └────────┘
```

## Local Variables

Local variables are allocated by subtracting from RSP:

```c
void func() {
    int a = 10;    // [RBP-4]
    int b = 20;    // [RBP-8]
    char c;        // [RBP-9]
}
```

### Access Pattern

```asm
func:
    push rbp
    mov rbp, rsp
    sub rsp, 16          ; Align to 16 bytes
    
    mov DWORD PTR [rbp-4], 10    ; a = 10
    mov DWORD PTR [rbp-8], 20    ; b = 20
    mov BYTE PTR [rbp-9], 0      ; c = 0
```

## Stack Alignment

The stack must be **16-byte aligned** before `call`:

```asm
sub rsp, 16      ; Align stack (16 bytes)
call printf
add rsp, 16      ; Restore stack
```

Misalignment causes crashes or performance penalties.

---

**Next Chapter:** [CH1.10 - Almost Empty Function](/reverse-engineering/ch1-10-almost-empty)
