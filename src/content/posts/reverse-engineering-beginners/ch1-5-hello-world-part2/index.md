---
title: "CH1.5 - Hello, World! (Part 2)"
published: 2025-10-22
description: "Deep dive into the classic Hello World program and what the compiler generates behind the scenes"
image: ../cpp-operators-input/i.webp
tags: ["reverse-engineering", "assembly", "hello-world", "optimization"]
category: "Reverse Engineering"
priority: 5
permalink: "reverse-engineering/ch1-5-hello-world-part2"
draft: false
hideFromFeed: true
---

# CH1.5 - Hello, World! (Part 2)

## Deep Dive into Hello World

In Part 2, we'll explore what happens with different optimization levels and calling conventions.

### Without Optimization (gcc -O0)

```asm
main:
    push rbp
    mov rbp, rsp
    sub rsp, 16
    lea rax, [rip + .Lstr]
    mov QWORD PTR [rbp-8], rax
    mov rax, QWORD PTR [rbp-8]
    mov rdi, rax
    mov eax, 0
    call printf
    mov eax, 0
    leave
    ret
```

### With Optimization (gcc -O2)

```asm
main:
    lea rdi, [rip + .Lstr]
    xor eax, eax
    jmp printf
```

### What Changed?

With optimization:

- **No stack frame** - Function prologue/epilogue removed
- **Tail call optimization** - `jmp printf` instead of `call`
- **Fewer instructions** - 3 vs 10+ instructions

### Calling Conventions

Different systems use different conventions:

| System | First Arg | Second Arg | Return |
|--------|-----------|------------|--------|
| System V (Linux) | RDI | RSI | RAX |
| Windows x64 | RCX | RDX | RAX |

---

**Next Chapter:** [CH1.6 - CH1.8 - Function Prologue and Epilogue](/reverse-engineering/ch1-6-8-function-prologue)
