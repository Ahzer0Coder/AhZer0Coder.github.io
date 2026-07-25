---
title: "CH1.11 - printf() With Several Arguments (Part 1)"
published: 2025-11-21
description: "Analyzing how compilers handle printf() with multiple arguments and how they are passed in x86/x64 assembly"
image: ../cpp-hello-world/1_j6R3KWVJB_Bx54F5Gy24nA.png
tags: ["reverse-engineering", "assembly", "printf", "variadic-functions"]
category: "Reverse Engineering"
priority: 9
permalink: "reverse-engineering/ch1-11-printf-part1"
draft: false
hideFromFeed: true
---

# CH1.11 - printf() With Several Arguments (Part 1)

## Printf with Multiple Arguments

Let's examine how `printf` handles multiple arguments:

```c
#include <stdio.h>

int main() {
    printf("Name: %s, Age: %d\n", "Alice", 25);
    return 0;
}
```

## x86/x64 Assembly Output

```asm
main:
    push rbp
    mov rbp, rsp
    sub rsp, 16
    
    ; Load arguments for printf
    lea rdi, [rip + .Lfmt]      ; Format string
    lea rsi, [rip + .Lname]     ; "Alice"
    mov edx, 25                 ; Age
    
    ; Set AL = 0 (no floating point args)
    mov al, 0
    call printf
    
    xor eax, eax
    leave
    ret

.Lfmt:
    .asciz "Name: %s, Age: %d\n"
.Lname:
    .asciz "Alice"
```

### Argument Passing (System V AMD64)

| Argument | Register |
|----------|----------|
| 1st (format) | RDI |
| 2nd (name) | RSI |
| 3rd (age) | RDX |
| Vector args | XMM0-XMM7 |
| AL | Count of vector args |

### Why AL Matters

For variadic functions like `printf`, `AL` tells the function how many vector registers contain arguments. This is part of the calling convention.

## Multiple Arguments Example

```c
printf("A=%d, B=%d, C=%d, D=%d\n", 1, 2, 3, 4);
```

```asm
lea rdi, [rip + .Lfmt]
mov esi, 1          ; A
mov edx, 2          ; B
mov ecx, 3          ; C
mov r8d, 4          ; D
mov al, 0
call printf
```

### Register Order (Linux)

RDI → RSI → RDX → RCX → R8 → R9 → Stack

---

**Next Chapter:** [CH1.11 - printf() With Several Arguments (Part 2)](/reverse-engineering/ch1-11-printf-part2)
