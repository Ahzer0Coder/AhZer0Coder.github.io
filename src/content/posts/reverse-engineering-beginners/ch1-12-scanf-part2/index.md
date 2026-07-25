---
title: "CH1.12 - scanf() (Part 2)"
published: 2025-11-28
description: "Continuing the analysis of scanf() covering ARM and MIPS implementations and pointer handling in assembly"
image: ../cpp-getting-started/i (2).webp
tags: ["reverse-engineering", "assembly", "scanf", "pointers", "arm"]
category: "Reverse Engineering"
priority: 12
permalink: "reverse-engineering/ch1-12-scanf-part2"
draft: false
hideFromFeed: true
---

# CH1.12 - scanf() (Part 2)

## ARM Implementation

```c
scanf("%d", &x);
```

```asm
@ ARM Assembly
sub sp, sp, #16
ldr r0, =.Lfmt     @ "%d"
add r1, sp, #8      @ &x (address on stack)
bl scanf
```

### ARM Notes

- Uses **R0** for first argument (format string)
- Uses **R1** for second argument (address)
- Stack pointer manipulation for local variables

## MIPS Implementation

```mips
# MIPS Assembly
addi $sp, $sp, -16
la $a0, .Lfmt       # "%d"
addi $a1, $sp, 8    # &x
jal scanf
```

### MIPS Notes

- **$a0** holds format string
- **$a1** holds address for storing input
- Stack-relative addressing for local variables

## String Input

```c
char name[50];
scanf("%49s", name);
```

```asm
; x86-64
lea rsi, [rbp-50]       ; Buffer address (name)
lea rdi, [rip + .Lfmt]  ; "%49s"
xor eax, eax
call scanf
```

### Why Strings Are Different

- **Array name** decays to pointer (no `&` needed)
- **Buffer overflow risk** - format specifier limits input size

## Common scanf Formats

| Format | Reads | Assembly Note |
|--------|-------|---------------|
| `%d` | int | Needs `&variable` |
| `%s` | string | Array decays to pointer |
| `%f` | float | Uses XMM register |
| `%c` | char | Single character |

## Security Considerations

`scanf` is vulnerable to buffer overflows. Modern alternatives:

- `fgets()` - safer for strings
- `sscanf()` - safer parsing
- C++ `std::cin` - type-safe

---

**End of Chapter 1**
