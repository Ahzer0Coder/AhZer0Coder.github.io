---
title: "C++ Chapter 3: Hello World & I/O"
published: 2026-07-11
updated: 2026-07-25
description: "Your first C++ program, understanding I/O streams, comments, and the cout output stream."
tags: ["cpp", "programming", "tutorial", "beginner", "hello-world"]
category: "C++"
priority: 3
permalink: "cpp/hello-world"
draft: false
---

**Previous Chapter:** [Getting Started](/cpp/getting-started)

## Hello World with C++

The previous example can be written with the global `std` namespace:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!\n";
}
```

:::note
For sake of space and for improving the readability, we intentionally omit the `std` namespace in most slides.
:::

### C vs C++ Comparison

:::tip[C code]

```c
#include <stdio.h>

int main() {
    int a = 4;
    double b = 3.0;
    char c[] = "hello";
    printf("%d %f %s\n", a, b, c);
}
```

:::

:::tip[C++ code]

```cpp
#include <iostream>

int main() {
    int a = 4;
    double b = 3.0;
    char c[] = "hello";
    std::cout << a << " " << b << " " << c << "\n";
}
```

:::

---

## I/O Stream (Why should we prefer I/O stream?)

### Type Safe

- In the `printf` function (legacy): The function does not know what type of variable it wants to print automatically. You must activate them with the variable type during the program (dynamically) using custom symbols such as `%d` for integers or `%s` for strings.

- In C++ functions (such as `cout`): The compiler knows the type of the variable in advance (static) while writing the code. You don't need to tell it what type of data it is, it will automatically detect it and print it for sure.

### Less Error Prone

With I/O Stream, there are no redundant `%` tokens that have to be consistent with the actual objects passed to I/O stream. Removing redundancy removes a class of errors.

### Extensible

The C++ I/O Stream mechanism allows new user-defined types to be passed to I/O stream without breaking existing code.

### Comparable Performance

If used correctly, may be faster than C I/O (`printf`, `scanf`, etc.).

---

## Comment

- Single line comments in C++ start with double slashes `//` and the compiler ignores them. We use them to comment or document the code or use them as notes:
- Multi-line comments use `/* */`

```cpp
int main() {
    // this is a comment

    /* This is a
       multi-line comment */
}
```

---

## Hello World with C++

Now we are ready to get the first glimpse at our "Hello World" example. The following program is the simplest "Hello World" example. It prints out `Hello World` in the console window:

```cpp
#include <iostream>
int main() {
    std::cout << "hello world";
}
```

:::note[Explanation]
The `#include <iostream>` statement includes the iostream header into our source file via the `#include` directive. The iostream header is part of the standard library. We need its inclusion to use the `std::cout` object, also known as a standard-output stream. The `<<` operator inserts our "Hello World" string literal into that output stream. String literal is enclosed in double quotes `""`. The `;` marks the end of the statement. Statements are pieces of the C++ program that get executed. Statements end with a semicolon `;` in C++. The `std` is the standard-library namespace and `::` is the scope resolution operator. Object `cout` is inside the `std` namespace, and to access it, we need to prepend the call with `std::`.

Believe it or not, the detailed analysis and explanation of this example is 15 pages long. We can go into it right now, but we will be no wiser at this point as we first need to know what headers, streams, objects, operators, and string literals are. Do not worry. We will get there.
:::

We can output multiple string literals by separating them with multiple `<<` operators:

```cpp
#include <iostream>

int main() {
    std::cout << "first output " << " second output ";
}
```

To output on a new line, we need to output a new-line character `\n` literal:

```cpp
#include <iostream>

int main() {
    std::cout << "first line " << '\n' << "second line";
}
```

Or:

```cpp
#include <iostream>

int main() {
    std::cout << "first line \n second line";
}
```

---

**Next Chapter:** [Types & Variables](/cpp/types-variables)
