---
title: "CH1.12 - scanf() (Part 1)"
published: 2025-11-27
description: "Analyzing how compilers handle scanf() and user input in x86/x64 assembly"
image: ../cpp-operators-input/i.webp
tags: ["reverse-engineering", "assembly", "scanf", "input"]
category: "Reverse Engineering"
priority: 11
permalink: "reverse-engineering/ch1-12-scanf-part1"
draft: false
hideFromFeed: true
---

# CH1.12 - scanf() (Part 1)

## Understanding scanf()

`scanf` reads formatted input from stdin:

```c
#include <stdio.h>

int main() {
    int x;
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    return 0;
}
```

## x86/x64 Assembly

```asm
main:
    push rbp
    mov rbp, rsp
    sub rsp, 16
    
    ; scanf("%d", &x)
    lea rsi, [rbp-4]       ; Address of x (2nd arg)
    lea rdi, [rip + .Lfmt] ; "%d" format (1st arg)
    xor eax, eax           ; No vector args
    call scanf
    
    ; printf("You entered: %d\n", x)
    mov esi, [rbp-4]       ; Load x value
    lea rdi, [rip + .Lout] ; Output format
    xor eax, eax
    call printf
    
    xor eax, eax
    leave
    ret

.Lfmt:
    .asciz "%d"
.Lout:
    .asciz "You entered: %d\n"
```

### Key Points

1. **Address of variable** passed (not value) - `&x`
2. **RSI** gets the address for `scanf`'s second argument
3. **RDI** gets the format string

### Why Address?

`scanf` needs to **write** to the variable, so it needs:
- The memory address where to store the input
- Not the current value

## Multiple Inputs

```c
int a, b;
scanf("%d %d", &a, &b);
```

```asm
lea rdx, [rbp-8]       ; &b (3rd arg)
lea rsi, [rbp-4]       ; &a (2nd arg)
lea rdi, [rip + .Lfmt] ; "%d %d" (1st arg)
xor eax, eax
call scanf
```

---

**Next Chapter:** [CH1.12 - scanf() (Part 2)](/reverse-engineering/ch1-12-scanf-part2)
