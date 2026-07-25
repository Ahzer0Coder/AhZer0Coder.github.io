---
title: "CH1.3 & CH1.4 - Empty Function & Returning Values"
published: 2025-10-11
description: "Exploring what compilers generate for empty functions and how return values are handled in assembly"
image: ../cpp-types-variables/1_qU1SdZQBfxNeHLVFNlz9Og.jpg
tags: ["reverse-engineering", "assembly", "functions", "return-values"]
category: "Reverse Engineering"
priority: 3
permalink: "reverse-engineering/ch1-3-4-empty-function"
draft: false
hideFromFeed: true
---

# CH1.3 & CH1.4 - Empty Function & Returning Values

## Empty Functions

What happens when you compile an empty function?

```c
void empty_function() {
    // Nothing here
}
```

The compiler still generates:

```asm
empty_function:
    push rbp
    mov rbp, rsp
    pop rbp
    ret
```

### Why the Extra Instructions?

These are part of the **function prologue** and **epilogue**:

- `push rbp` - Save the old base pointer
- `mov rbp, rsp` - Set up new base pointer
- `pop rbp` - Restore old base pointer
- `ret` - Return to caller

## Return Values

In x86/x64, return values go in the **RAX** register:

```c
int get_value() {
    return 42;
}
```

Compiles to:

```asm
get_value:
    push rbp
    mov rbp, rsp
    mov eax, 42    ; Return value in EAX
    pop rbp
    ret
```

### Return Value Conventions

| Type | Register |
|------|----------|
| int, long | RAX |
| pointer | RAX |
| struct (small) | RAX (or RAX+RDX) |
| float/double | XMM0 |

---

**Next Chapter:** [CH1.5 - Hello, World! (Part 1)](/reverse-engineering/ch1-5-hello-world-part1)
