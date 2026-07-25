---
title: "CH1.11 - printf() With Several Arguments (Part 2)"
published: 2025-11-22
description: "Continuing the analysis of printf() with multiple arguments, covering ARM and MIPS calling conventions"
image: ../cpp-types-variables/1_qU1SdZQBfxNeHLVFNlz9Og.jpg
tags: ["reverse-engineering", "assembly", "printf", "arm", "mips"]
category: "Reverse Engineering"
priority: 10
permalink: "reverse-engineering/ch1-11-printf-part2"
draft: false
hideFromFeed: true
---

# CH1.11 - printf() With Several Arguments (Part 2)

## ARM and MIPS Calling Conventions

Different architectures handle arguments differently.

### ARM (AAPCS)

```c
printf("X=%d, Y=%d\n", x, y);
```

```asm
@ ARM Assembly
ldr r0, =.Lfmt    @ Format string (1st arg)
mov r1, #10        @ X value (2nd arg)
mov r2, #20        @ Y value (3rd arg)
bl printf
```

**ARM register order:** R0 → R1 → R2 → R3 → Stack

### MIPS

```mips
# MIPS Assembly
la $a0, .Lfmt     # Format string
li $a1, 10         # X value
li $a2, 20         # Y value
jal printf
```

**MIPS register order:** $a0 → $a1 → $a2 → $a3 → Stack

## Comparison Table

| Architecture | Arg 1 | Arg 2 | Arg 3 | Arg 4 | Return |
|--------------|-------|-------|-------|-------|--------|
| x86-64 (Linux) | RDI | RSI | RDX | RCX | RAX |
| x86-64 (Windows) | RCX | RDX | R8 | R9 | RAX |
| ARM | R0 | R1 | R2 | R3 | R0 |
| MIPS | $a0 | $a1 | $a2 | $a3 | $v0 |

## Floating Point Arguments

For floating-point values, dedicated registers are used:

```c
printf("Float: %f\n", 3.14);
```

```asm
; x86-64
lea rdi, [rip + .Lfmt]
movsd xmm0, [rip + .Lval]    ; Double in XMM0
mov al, 1                     ; 1 vector register used
call printf
```

---

**Next Chapter:** [CH1.12 - scanf() (Part 1)](/reverse-engineering/ch1-12-scanf-part1)
