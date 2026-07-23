---
title: "Introduction to C++"
published: 2026-07-11
updated: 2026-07-24
description: "A comprehensive introduction to C++ programming language - history, philosophy, features, types, operators, arrays, and getting started guide."
image: ./maxresdefault.jpg
tags: ["cpp", "programming", "tutorial", "beginner"]
category: "C++"
priority: 1
permalink: "cpp/introduction-to-cpp"
draft: false
---

> _"The only way to learn a new programming language is by writing programs in it."_

> _"In software development, learning is not a big part of the job. It is the job."_ — Woody Zuill

> _"Programming is not about typing, it's about thinking."_ — Rich Hickey

![C++ Introduction](./images/Pasted%20image%2020260711141748.png)

## Introduction

### A Little History of C/C++ Programming Language

#### Assembly

- Extremely simple instructions
- Requires lots of code to do simple tasks
- Can express anything your computer can do
- Hard to read, write
- ...redundant, boring programming, bugs proliferation

```asm
main:
.Lfunc_begin0:
    push rbp
.Lcfi0:
.Lcfi1:
    mov rbp, rsp
.Lcfi2:
    sub rsp, 16
    movabs rdi, offset .L.str
.Ltmp0:
    mov al, 0
    call printf
    xor ecx, ecx
    mov dword ptr [rbp - 4], eax
    mov eax, ecx
    add rsp, 16
    pop rbp
    ret
.Ltmp1:
.Lfunc_end0:

.L.str:
    .asciz "Hello World\n"
```

This is the same code in C:

```c
#include "stdio.h"

int main() {
    printf("Hello World\n");
}
```

#### A Little History of C

Areas of Application:

- UNIX operating system
- Computer games
- Due to their power and ease of use, C was used in the programming of the special effects for Star Wars

#### A Little History of C++

The **C++** programming language (originally named "C with Classes") was devised by **Bjarne Stroustrup** — also an employee from Bell Labs (AT&T). Stroustrup started working on C with Classes in **1979**. (The `++` is a C language operator.) The first commercial release of the C++ language was in **October 1985**.

![C++ History](./images/Pasted%20image%2020260711151436.png)

### Areas of Application and Popularity

![Areas of Application](./images/Pasted%20image%2020260711151621.png)

![Popularity](./images/Pasted%20image%2020260711151641.png)

#### Why C++ is so Popular?

There may be more than **200 billion lines** of C/C++ code globally.

- **Performance** is the defining aspect of C++. No other programming language provides the performance-critical facilities of C++
- Provide the programmer control over every aspect of performance
- Leave no room for a lower level language
- **Ubiquity**. C++ can run from a low-power embedded device to large-scale supercomputers
- **Multi-Paradigm**. Allow writing efficient code without losing high-level abstraction
- Allow writing low-level code. Drivers, kernels, assembly (asm), etc.
- **Ecosystem**. Many support tools such as debuggers, memory checkers, coverage, static analysis, profiling, etc.
- **Maturity**. C++ has a 40 years history. Many software problems have been already addressed and developing practices have been investigated

#### Areas of Application

- **Operating systems**: Windows, Android, OS X, Linux
- **Compilers**: LLVM, Swift compiler
- **Artificial Intelligence**: TensorFlow, Caffe, Microsoft Cognitive Toolkit
- **Image Editing**: Adobe Premier, Photoshop, Illustrator
- **Web browser**: Firefox, Chrome, etc. + WebAssembly
- **High-Performance Computing**: drug developing and testing, large scale climate models, physics simulations
- **Embedded systems**: IoT, network devices (e.g. GSM), automotive
- Google and Microsoft use C++ for web indexing
- **Scientific Computing**: CERN/NASA, SETI@home, Folding@home
- **Database**: MySQL, ScyllaDB
- **Video Games**: Unreal Engine, Unity
- **Entertainment**: Movie rendering (see Interstellar black hole rendering), virtual reality
- **Finance**: electronic trading systems (Goldman, JPMorgan, Deutsche Bank) ... and many more

![Applications](./images/Pasted%20image%2020260711155847.png)

#### An Important Example... (AI Evolution)

![AI Evolution](./images/Pasted%20image%2020260711155924.png)

#### Performance

![Performance](./images/Pasted%20image%2020260711155948.png)

#### Memory Usage

![Memory Usage](./images/Pasted%20image%2020260711160030.png)

#### Energy Efficiency

![Energy Efficiency](./images/Pasted%20image%2020260711160148.png)

#### CO2 Production

![CO2 Production](./images/Pasted%20image%2020260711160240.png)

### C++ Philosophy

#### C++ Philosophy - Performance

- High-level code (clean and safe) should produce a program just as fast as low-level code (complex and difficult).

#### C++ Philosophy - Type Safety

- **Enforce safety at compile time:**
  The main goal here is to detect errors early. In C++, the compiler strictly checks your code to make sure you're not performing illogical operations (such as trying to combine text with a number). Detecting these errors before launching the program (Compile time) prevents it from crashing suddenly while the client is using it (Run time), which is crucial for major commercial programs.

- **Statically Typed Language:**
  In C++, you must declare the type of a variable (eg int, string) before using it. Once the type is selected, it cannot be changed. This strict system is what gives the compiler the ability to verify security.

- **Benefits of Type Annotations:**
  1. **Ease of reading the code (More readable):** When another programmer looks at the code and finds the data types clearly defined, he immediately understands the purpose of each variable or function, which makes the code a documentation for itself
  2. **Improving performance and efficiency (Compiler optimizations):** Since the compiler precisely knows the type and space of each statement in memory, he can optimize the source code so that it runs at the maximum possible speed and without any additional consumption of device resources during operation (unlike dynamic languages that waste part of the time to identify the type of the variable during operation).
  3. **Create custom type systems (Define own type system):** The C++ language is not limited to basic types (numbers, texts), but rather gives the programmer the power and freedom to invent completely new and complex data types (such as object classes) that suit the idea of his program, while applying the same strict security rules to them.

- **Programming model:** compartmentalization, only addition features if they solve an actual problem, and allow full control
- **Predictable runtime** (under constraints): no garbage collector, no dynamic type system → real-time systems
- **Low resources:** low memory and energy consumption → restricted hardware platforms
- **Well suited for static analysis** → safety critical software
- **Portability** → Modern C++ standards are highly portable

### Who is C++ for?

> _"C++ is for people who want to use hardware very well and manage the complexity of doing that through abstraction"_

> _"A language like C++ is not for everybody. It is generated via sharp and effective tool for professional basically and definitely for people who aim at some kind of precision"_

### C++ Weaknesses

#### Why C++ is so Difficult?

And why teaching C++ as first programming language is a bad idea? C++ is the hardest language from students to master:

- **More languages in one**
  - Standard C/C++ programming
  - Preprocessor
  - Object-Oriented features
  - Templates and Meta-Programming
- **Huge set of features**
- **Worry about memory management**
- **Low-level implementation details:** pointer arithmetic, structure, padding, undefined behavior, etc.
- **Frustrating:** compiler/runtime errors (e.g. seg. fault)

:::note[Quotes]
_"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off"_ — **Bjarne Stroustrup**, Creator of the C++ language

_"The problem with using C++...is that there's already a strong tendency in the language to require you to know everything before you can do anything"_ — **Larry Wall**, Creator of the Perl language

_"Despite having 20 years of experience with C++, when I compile a non-trivial chunk of code for the first time without any error or warning, I am suspicious. It is not, usually, a good sign"_ — **Daniel Lemire**, Prof. at the University of Quebec
:::

:::important[Advanced Resources]
These are advanced resources for solving C++ problems after you finish the course:

- [P1881R1 - C++ Safety Concerns](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p1881r1.html)
- [P2137R0 - Directions for ISO C++](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p2137r0.html)
- [Carbon Language](https://github.com/carbon-language/carbon-lang)
- [Circle Language](https://www.circle-lang.org/site/index.html)
- [CppFront - Herb Sutter's C++ Syntax Frontend](https://github.com/hsutter/cppfront)
- [CppFront Talk](https://www.youtube.com/watch?v=gG4BJ23BFBE)
- [The Case for Memory Safe Roadmaps - CISA](https://www.cisa.gov/sites/default/files/2023-12/The-Case-for-Memory-Safe-Roadmaps-508c.pdf)
  :::

#### Why Switching to a New Language is Hard?

- **No perfect language.** There are always newer 'shining' languages
- **Alignment.** Force all developers to switch to the new language
- **Interoperability.** Hundreds of billion lines of existing code. Must interoperate with C and C++ code imposing serious design constraints
- **Ecosystem.** Lack of tools and libraries developed in the last four decades
- **Time and Cost.** Converting a codebase of 10 million lines: 500 developers, 5 years, $1,400,000,000

![Switching Languages](./images/Pasted%20image%2020260711174136.png)

### The Course

**The primary goal of the course is to drive who has previous experience with C/C++ and object-oriented programming to a proficiency level of C++ programming.**

- **Proficiency:** know what you are doing and the related implications
- **Understand** what problems/issues address a given language feature
- **Learn engineering practices** (e.g. code conventions, tools) and hardware/software techniques (e.g. semantic, optimizations) that are not strictly related to C++

**What the course is:**

- A practical course, prefer examples to long descriptions
- A "quite" advanced C++ programming language course

**What the course is not:**

- A theoretical course on programming
- A high-level concept description

![Course Overview](./images/Screenshot%202026-07-11%20174331.png)

### Books and References

![Books and References](./images/Pasted%20image%2020260711202010.png)

##### Unofficial C++ Reference:

- [cppreference.com](https://en.cppreference.com/)
- [C++ Draft Standard](https://eel.is/c++draft/)

##### Tutorials

- [LearnCpp.com](https://www.learncpp.com/)
- [C++ Programming - Wikibooks](https://en.wikibooks.org/wiki/C%2B%2B_Programming)
- [C++ Programming - NTU](https://www3.ntu.edu.sg/home/ehchua/programming/index.html)

##### Other Resources:

- [Stack Overflow - C++](https://stackoverflow.com/questions/tagged/c%2b%2b)

##### News:

- [isocpp.org](https://isocpp.org/)
- [Reddit r/cpp](https://www.reddit.com/r/cpp/)
- [LibHunt](https://www.libhunt.com/)
- [ACCU Overload](https://accu.org/journals/nonmembers/overload_issue_members/)

##### Coding Exercises:

- [LeetCode](https://leetcode.com/problemset/algorithms/)
- [Kattis](https://open.kattis.com/)

##### Main Conferences:

- [CppCon](https://cppcon.org/)
- [CppCon GitHub](https://github.com/CppCon)
- [CppNow](https://cppnow.org/)
- [CppNorth Slides](https://github.com/CppNorth/CppNorth_Slides)
- [ACCU](https://accu.org/)
- [Conferences Worldwide](https://isocpp.org/wiki/faq/conferences-worldwide)

##### Parenthesis and Brackets

| Symbol | Name           | Informal Name   |
| ------ | -------------- | --------------- |
| `{}`   | Braces         | Curly brackets  |
| `[]`   | Brackets       | Square brackets |
| `()`   | Parenthesis    | Round brackets  |
| `<>`   | Angle brackets | —               |

### What Editor/ IDE/Compiler Should I Use?

#### 1. What Compiler Should I Use?

Most popular compilers:

- **Microsoft Visual Code (MSVC)** is the compiler offered by Microsoft
- **The GNU Compiler Collection (GCC)** contains the most popular C++ Linux compiler
- **Clang** is a C++ compiler based on LLVM Infrastructure available for Linux/Windows/Apple (default) platforms

:::tip[Suggested compiler on Linux for beginner: Clang]

- Comparable performance with GCC/MSVC and low memory usage
- Expressive diagnostics (examples and propose corrections)
- Strict C++ compliance. GCC/MSVC compatibility (inverse direction is not ensured)
- Includes very useful tools: memory sanitizer, static code analyzer, automatic formatting, linter, etc.
  :::

#### 2. Install the Compiler on Linux?

gcc/g++ is the default C/C++ compiler on most Linux distributions. If necessary, it can be updated manually. Follow the instructions below to update it on Ubuntu/Debian (v14):

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt update
sudo apt install gcc-14 g++-14
gcc-14 --version
```

Install the last clang/clang++ (v21):

```bash
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh 21
clang++ --version
```

#### 3. Install the Compiler on Windows?

- **Direct Installer:** Visual Studio Community 2026
- **Clang on Windows:**
  - Windows Subsystem for Linux (WSL)

    ```powershell
    Windows Powershell → wsl –install -d Ubuntu-24.04
    Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -All -NoRestart
    ```

    Enable virtualization support in UEFI/BIOS: `Intel Virtualization Technology (VT-x) (Intel) or SVM Mode (AMD)`

  - Clang + MSVC Build Tools: Download Build Tools per Visual Studio → `Install Desktop development with C++`

#### Popular C++ IDEs

- [Microsoft Visual Studio](https://visualstudio.microsoft.com/it/)
- [CLion](https://www.jetbrains.com/clion/)
- [Qt Creator](https://www.qt.io/development/tools/qt-creator-ide)
- [Xcode](https://developer.apple.com/xcode/)
- [Cevelop](https://www.cevelop.com)

#### Standalone GUI-based Coding Editors

- [Visual Studio Code](https://code.visualstudio.com/)
- [Cursor](https://cursor.com/) — AI-powered code editor based on VS Code
- [Void Editor](https://voideditor.com/) — Open-source Cursor alternative
- [Windsurf](https://devin.ai/desktop) — AI-powered editor
- [Sublime Text](https://www.sublimetext.com/)
- [Lapce](https://lap.dev/lapce/) — Modern, open-source, written in Rust
- [Zed](https://zed.dev/) — High-performance, built in Rust

#### Standalone Text-based Coding Editors

- [Vim](https://www.vim.org/)
- [Emacs](https://www.gnu.org/software/emacs/)
- [NeoVim](https://neovim.io/)
- [Helix](https://helix-editor.com/)

### How to Compile?

Compile C++11, C++14, C++17, C++20, C++23, C++26 programs:

```bash
g++ -o program              # compiler default standard version
g++ -std=c++14 program.cpp -o program
g++ -std=c++<version> program.cpp -o program
make program.cpp            # a Makefile is not even needed
```

:::note[Backward Compatibility]
Any C++ standard is backward compatible. For example, a code compiled with C++17 still works with C++20. C++ is built on top of C and it supports backward compatibility in simple cases. However, there are several exceptions. The most common cases are C++ keywords (`new`, `template`, `class`, `typename`, etc.) that cannot be used for symbol naming.
:::

It is a good practice to add warning flags and sanitizers, especially for beginners, to catch potential problems in the code.

**gcc/clang options:**

```bash
g++ -Wall -Wextra -fsanitize=address,undefined -fanalyze program.cpp -o program
```

**Microsoft Compiler options:**

```bash
cl /W4 /fsanitize=address /analyze program.cpp
```

---

## Why C++ and Download IDE

### Why?

1. **Reverse Engineering:** C++ is a fundamental language for understanding and analyzing executable files (Binaries), and dealing deeply with advanced analysis tools like IDA Pro, x64dbg, and Ghidra.
2. **Game Development:** The most powerful game engines (like Unreal Engine) are written in it for complex graphics processing at high speed.
3. **Operating Systems:** Large parts of operating systems like Windows, macOS, and Linux are built with it.
4. **Heavy Desktop Applications:** Like design and editing software (Photoshop, Premiere).
5. **Web Browsers:** Popular browser engines like Google Chrome and Safari rely on it.
6. **Embedded Systems and Databases.**

### IDEs

1. VS Code
2. VS Community
3. CLion
4. Code::Blocks

---

## How to Download Compiler and Debugger to VS Code and Use C++

### 1. Install in VS Code C/C++

To use that we should download:

- C++ compiler pre-installed
- C++ debugger pre-installed

### 2. How?

1. **Download MSYS2**
2. Open **clang64** and write:
   ```bash
   pacman -Syu
   ```
3. Open **MSYS2** and write:
   ```bash
   pacman -Su
   ```
4. Open **mingw64** and write:
   ```bash
   pacman -Ss gcc          # shows available compilers
   pacman -S mingw-w64-x86_64-gcc
   ```
5. Download the debugger:
   ```bash
   pacman -Ss gdb
   pacman -S mingw-w64-x86_64-gdb
   ```
6. **Check the version:**
   ```bash
   gcc --version
   g++ --version
   gdb --version
   ```

### 3. Add the Path

Add the download path to **Edit the system environment variables** → double click on **Path** → click **New** → add the path.

---

## First Program

Let us create a blank text file using the text editor or C++ IDE of our choice and name it `source.cpp`. First, let us create an empty C++ program that does nothing:

```cpp
int main()
{
}
```

This simple program does nothing, it has no parameters listed inside parentheses, and there are no statements inside the function body. It is essential to understand that this is the main program signature. There is also another main function signature accepting two different parameters used for manipulating the command line arguments. For now, we will only use the first form.

---

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

## Operators

### Assignment Operator

The assignment operator `=` assigns a value to a variable/object:

```cpp
int main() {
    int myint = 20;       // define an integer variable myint
    int x = 120;          // define an integer variable x
    x = myint;            // assign a value of x to it

    double mydouble = 2.39;  // define a double variable mydouble
    char mychar = 's';       // define a char variable mychar
    mychar = 'c';            // assign a new value to mychar
}
```

### Arithmetic Operators

We can do arithmetic operations using arithmetic operators:

```cpp
+   // addition
-   // subtraction
*   // multiplication
/   // division
%   // modulo
```

```cpp
#include <iostream>

int main() {
    int x = 123;
    int y = 456;
    int z = x + y;  // addition
    z = x - y;      // subtraction
    z = x * y;      // multiplication
    z = x / y;      // division

    std::cout << " the value of z is: " << z << '\n';
}
```

The integer division, in our example, results in a value of 0. It is because the result of the integer division where both operands are integers is truncated towards zeros. In the expression `x / y`, `x` and `y` are operands and `/` is the operator. If we want a floating-point result, we need to use the type `double` and make sure at least one of the division operands is also of type `double`:

```cpp
#include <iostream>

int main() {
    int x = 123;
    double y = 456;
    double z = x / y;
    std::cout << " the value z is: " << z << '\n';
}
```

### Compound Assignment Operators

Compound assignment operators allow us to perform an arithmetic operation and assign a result with one operator:

```cpp
+=   // compound addition
-=   // compound subtraction
*=   // compound multiplication
/=   // compound division
%=   // compound modulo
```

```cpp
#include <iostream>

int main() {
    int x = 123;
    x += 10;   // the same as x = x + 10
    x -= 20;   // the same as x = x - 20
    x *= 5;    // the same as x = x * 5
    x /= 3;    // the same as x = x / 3
    x %= 2;    // the same as x = x % 2
    std::cout << " the value x is: " << x << '\n';
}
```

### Increment/Decrement Operators

Increment/decrement operators increment/decrement the value of the object:

```cpp
++x   // pre-increment operator
x++   // post-increment operator
--x   // pre-decrement operator
x--   // post-decrement operator
```

```cpp
#include <iostream>

int main() {
    int x = 123;
    x++;
    ++x;
    --x;
    x--;

    std::cout << " the value x: " << x;
}
```

Both pre-increment and post-increment operators add 1 to the value of our object, and both pre-decrement and post-decrement operators subtract one from the value of our object. The difference between the two, apart from the implementation mechanism (very broadly speaking), is that with the pre-increment operator, a value of 1 is added first. Then the object is evaluated/accessed in expression. With the post-increment, the object is evaluated/accessed first, and after that, the value of 1 is added. To the next statement that follows, it does not make a difference. The value of the object is the same, no matter what version of the operator was used. The only difference is the timing in the expression where it is used.

---

## Standard Input

`std::cin` is the standard input stream, and it uses the `>>` operator to extract what has been read into our variable. The `std::cin >> x;` statement means: read from a standard input into the `x` variable. The `cin` object resides inside the `std` namespace. So, `std::cout <<` is used for outputting data (to a screen) and `std::cin >>` is used for inputting data (from the keyboard).

```cpp
#include <iostream>

int main() {
    std::cout << "Enter a number: ";
    int x = 0;
    std::cin >> x;
    std::cout << "You entered: " << x << '\n';
}
```

You can enter more input in the same line:

```cpp
#include <iostream>

int main() {
    std::cout << "Please enter two numbers: ";
    int x = 0;
    int y = 0;
    std::cin >> x >> y;
    std::cout << "Number 1: " << x << ", Number 2: " << y << '\n';
}
```

You can enter different types of data in the same line:

```cpp
#include <iostream>

int main() {
    std::cout << "Please enter an integer, a double, and a char: ";
    int x = 0;
    double y = 0;
    char z = 0;
    std::cin >> x >> y >> z;
    std::cout << "You entered: " << x << ", " << y << ", " << z << '\n';
}
```

### Two Inputs

```cpp
#include <iostream>

int main() {
    std::cout << "Please enter two numbers: ";
    int x = 0;
    int y = 0;
    std::cin >> x >> y;
    std::cout << "Number 1: " << x << ", Number 2: " << y << '\n';
}
```

### Multiple Inputs

```cpp
#include <iostream>

int main() {
    std::cout << "Please enter an integer, a double, and a char: ";
    int x = 0;
    double y = 0;
    char z = 0;
    std::cin >> x >> y >> z;
    std::cout << "You entered: " << x << ", " << y << ", " << z << '\n';
}
```

### Inputs and Arithmetic Operations

```cpp
#include <iostream>

int main() {
    std::cout << "Please enter two numbers: ";
    int x;
    int y;
    std::cin >> x >> y;
    int z = x + y;
    std::cout << "The sum is: " << z << '\n';
}
```

### Post-Increment and Compound Assignment

Write a program that defines an `int` variable called `x` with a value of 123, post-increments that value in the next statement, and adds the value of 20 in the following statement using the compound assignment operator:

```cpp
#include <iostream>

int main() {
    int x = 123;
    x++;
    x += 20;
    std::cout << "The value of x is: " << x << '\n';
}
```

### Integral and Floating-point Division

Write a program that divides 9 by 2 and assigns the result to an `int` and a `double` variable. Then modify one of the operands to be of type `double` and observe the different outcomes:

```cpp
#include <iostream>

int main() {
    int x = 9 / 2;
    std::cout << "Integer result: " << x << '\n';

    double d = 9 / 2;
    std::cout << "Double result (both ints): " << d << '\n';

    double z = 9.0 / 2;
    std::cout << "Double result (one double): " << z << '\n';
}
```

---

## Arrays

Arrays are sequences of objects of the **same type**. We can declare an array of type `char` as follows:

```cpp
#include <iostream>

int main() {
    char arr[5];
    int arr2[6];
}
```

To initialize an array, we can use the initialization list `{}`:

```cpp
int main() {
    int arr[5] = {2, 5, 3, 6, 9};
}
```

We can access individual array elements through the subscript `[]` operator and an index. The first array element has an **index of 0**:

```cpp
int main() {
    int arr[4] = {1, 2, 3, 5};
    arr[0] = 100;  // change the value of the first array element
}
```

### Index

Index of array starts from 0:

```cpp
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    // index = {0, 1, 2, 3, 4}  This is the index arrangement
    arr[4] = 100;  // we change the last element (5) to 100
}
```

:::tip[Modern C++]
In modern C++, you should prefer `std::array` and `std::vector` containers over raw arrays. More on this in later chapters.
:::

---

## Pointers

*(This section is continued from the content above — more details on pointers coming in later chapters.)*
