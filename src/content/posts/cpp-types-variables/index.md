---
title: "C++ Types & Variables"
published: 2026-07-11
updated: 2026-07-25
description: "Fundamental C++ types (bool, char, int, double, void), type modifiers, and variable declaration, definition, and initialization."
image: /assets/img/cpp-types-variables.jpg
tags: ["cpp", "programming", "tutorial", "beginner", "types", "variables"]

priority: 4
permalink: "cpp/types-variables"
draft: false
hideFromFeed: true
type: "course"
series: "cpp"
seriesOrder: 4
seriesTitle: "C++"
seriesDescription: "A beginner-friendly, chapter-by-chapter guide to learning C++ from scratch."
seriesImage: /assets/img/cpp-history-philosophy.webp
---

**Previous Chapter:** [Hello World & I/O](/cpp/hello-world)

## Types

### Fundamental Types

C++ has some built-in types. We often refer to them as fundamental types. A declaration is a statement that introduces a name into a current scope.

#### Boolean

Let us declare a variable `b` of type `bool`. This type holds values of `true` and `false`:

```cpp
int main() {
    bool b; // this has no value, default value is false == 0
}
```

How to add value:

```cpp
int main() {
    bool b = true; // or
    bool A {false};
}
```

:::important[Rule]
These examples declare a (local) variable `b` of type `bool` and initialize it to a value of `true`.

Our variable now holds a value of `true`.

All local variables must always be given an initial value once they are created (never leave them empty).

If you try to read or use a variable that has not been given an initial value (uninitialized), this will lead to a serious problem called **undefined behavior (UB)**. This means that the program will lose control and may behave completely randomly (e.g., print fake values, operate unpredictably, or crash and stop working).

More on this in the following chapters.
:::

#### Character

Is used to represent a single character. The size is 1 byte:

```cpp
int main() {
    char c = 'a';
}
```

To print:

```cpp
#include <iostream>

int main() {
    char c = 'a';
    std::cout << "the value of variable c is: " << c;
}
```

Once declared and initialized, we can access our variable and change its value:

```cpp
#include <iostream>

int main() {
    char c = 'a';
    std::cout << "the value of variable c is: " << c;
    c = 'b';
    std::cout << " the value of variable c is: " << c;
}
```

The size of the char type in memory is usually one byte. We obtain the size of the type through the `sizeof` operator:

```cpp
#include <iostream>

int main() {
    std::cout << "the size for char is: " << sizeof(char) << " byte(s)";
}
```

There are other character types such as `wchar_t` for holding characters of Unicode character set, `char16_t` for holding UTF-16 character sets, but for now, let us stick to the type `char`. A character literal is a character enclosed in single quotes. Example: `'a'`, `'A'`, `'z'`, `'X'`, `'0'` etc. Every character is represented by an integer number in the character set. That is why we can assign both numeric literals (up to a certain number) and character literals to our char variable:

```cpp
int main() {
    char c = 'a';
    // is the same as if we had
    // char c = 97;
}
```

The `'a'` character in ASCII table is represented with the number `97`.

#### Integer

Fundamental type is `int` called integer type. We use it to store integral values (whole numbers), both negative and positive:

```cpp
#include <iostream>

int main() {
    int x = 123;
    int c = -123;
    std::cout << "the value x is: " << x << '\n' << "the value c is: " << c;
}
```

The size of `int` is usually 4 bytes. We can also initialize the variable with another variable. It will receive a copy of its value. We still have two separate objects in memory:

```cpp
#include <iostream>

int main() {
    int x = 123;
    int y = x;
    std::cout << "The value of x is: " << x << " ,the value of y is: " << y;
    // x is 123
    // y is 123
    x = 456;
    std::cout << "The value of x is: " << x << " ,the value of y is: " << y;
    // x is now 456
    // y is still 123
}
```

Programming languages (like C and C++) allow you to write numerical values in three different number systems, and the compiler understands them based on the prefix you write before the number:

- **Decimal:** Regular numbers from 0 to 9. You write the number directly without any additions.
- **Octal:** Numbers from 0 to 7. To tell the compiler that the number is octal, you must place a zero (`0`) before it.
- **Hexadecimal:** Numbers from 0 to 9 and letters from A to F. For the compiler to understand it, you must place `0x` before it.

```cpp
int main() {
    int x = 10;     // decimal literal
    int y = 012;    // octal literal
    int z = 0xA;    // hexadecimal literal
}
```

All these variables have been initialized to a value of 10 represented by different integer literals. For the most part, we will be using decimal literals. There are other integer types such as `int64_t` and others, but we will stick to `int` for now.

#### Floating-Point

There are three floating-point types in C++: `float`, `double`, `long double`, but we will stick to type `double` (double-precision). We use it for storing floating-point values / real numbers:

```cpp
#include <iostream>

int main() {
    double x = 2.56;
    std::cout << " the value x is: " << x;
}
```

#### Type void

Type `void` is a type with no values. Well, what is the purpose of such type if we can not create objects of that type? Good question. While we can not have objects of type `void`, we can have functions of type `void`. Functions that do not return a value. We can also have a void pointer type marked with `void*`. More on this in later chapters when we discuss pointers and functions.

### Type Modifiers

Types can have modifiers. Some of the modifiers are `signed` and `unsigned`. The `signed` (the default if omitted) means the type can hold both positive and negative values, and `unsigned` means the type has unsigned representation. Other modifiers are for the size: `short` — type will have the width of at least 16 bits, and `long` — type will have the width of at least 32 bits. Furthermore, we can now combine these modifiers.

```cpp
#include <iostream>

int main() {
    unsigned long int x = 4294967295;
    std::cout << "The value of an unsigned long integer variable is: " << x;
}
```

---

## Variable Declaration, Definition, and Initialization

```cpp
#include <iostream>

int main() {
    char c = 'h';
    int x = 5;
    double d = 5.2;
}
```

```cpp
int main() {
    int d, e, f;
}
```

```cpp
int main() {
    int x = 50;
    int y = {30};
    int z {20};
}
```

A variable definition is setting a value in memory for a name. The definition is making sure we can access and use the name in our program. Roughly speaking, it is a declaration followed by an initialization (for variables) followed by a semicolon. The definition is also a declaration.

### Declaration

Write a program that declares variables inside the main function. Since we do not use any input or output, we do not need to include the `<iostream>` header:

```cpp
int main() {
    int x;
    double y;
    char z;
}
```

### Definition

Write a program that defines three variables inside the main function. The variables are of `char`, `int`, and type `double`. The names of the variables are arbitrary. The initializers are arbitrary.

```cpp
int main() {
    int x = 20;
    double y = 2.36;
    char z = 'c';
}
```

### Initialization

Write a program that defines three variables inside the main function. The variables are of `char`, `int`, and type `double`. The names of the variables are arbitrary. The initializers are arbitrary. The initialization is performed using the initializer list. Print the values afterward.

```cpp
#include <iostream>

int main() {
    char mychar {'c'};
    int myint {225};
    double mydouble {2.369};
    std::cout << " the value char is: " << mychar << '\n';
    std::cout << " the value int is:  " << myint << '\n';
    std::cout << " the value double is: " << mydouble;
}
```

---

**Next Chapter:** [Operators & Input](/cpp/operators-input)
