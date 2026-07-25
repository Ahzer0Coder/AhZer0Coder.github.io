---
title: "CH1.5 - Hello, World! (Part 1)"
published: 2025-10-23
description: "Analyzing the classic Hello World program and understanding what the compiler generates in x86/x64 assembly"
image: ../cpp-operators-input/i.webp
tags: ["reverse-engineering", "assembly", "hello-world", "printf"]
category: "Reverse Engineering"
priority: 4
permalink: "reverse-engineering/ch1-5-hello-world-part1"
draft: false
hideFromFeed: true
---

# CH1.5 - Hello, World! (Part 1)

## The Classic Hello World

Let's analyze what happens when we compile the simplest C program:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Compiler Output

```asm
main:
    push rbp
    mov rbp, rsp
    lea rdi, [rip + .Lstr]
    mov al, 0
    call printf
    xor eax, eax
    pop rbp
    ret

.Lstr:
    .asciz "Hello, World!\n"
```

### Line-by-Line Analysis

1. `push rbp` - Save base pointer
2. `mov rbp, rsp` - Set up stack frame
3. `lea rdi, [.Lstr]` - Load address of string into first argument
4. `mov al, 0` - No floating-point arguments
5. `call printf` - Call the function
6. `xor eax, eax` - Set return value to 0

### Key Observations

- String literals are stored in `.rodata` (read-only data)
- First argument goes in **RDI** (System V AMD64 ABI)
- `AL` indicates number of vector registers used
- Return value 0 via `xor eax, eax` (optimized form)

---

**Next Chapter:** [CH1.5 - Hello, World! (Part 2)](/reverse-engineering/ch1-5-hello-world-part2)
