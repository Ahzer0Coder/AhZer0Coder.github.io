---
title: "Introduction to C++"
published: 2026-07-11
description: "A comprehensive introduction to C++ programming language - history, philosophy, features, and getting started guide."
tags: ["cpp", "programming", "tutorial", "beginner"]
category: "C++"
draft: false
---

> *"The only way to learn a new programming language is by writing programs in it."*

> *"In software development, learning is not a big part of the job. It is the job."* — Woody Zuill

> *"Programming is not about typing, it's about thinking."* — Rich Hickey

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

> *"C++ is for people who want to use hardware very well and manage the complexity of doing that through abstraction"*

> *"A language like C++ is not for everybody. It is generated via sharp and effective tool for professional basically and definitely for people who aim at some kind of precision"*

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
*"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off"* — **Bjarne Stroustrup**, Creator of the C++ language

*"The problem with using C++...is that there's already a strong tendency in the language to require you to know everything before you can do anything"* — **Larry Wall**, Creator of the Perl language

*"Despite having 20 years of experience with C++, when I compile a non-trivial chunk of code for the first time without any error or warning, I am suspicious. It is not, usually, a good sign"* — **Daniel Lemire**, Prof. at the University of Quebec
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

| Symbol | Name | Informal Name |
|--------|------|---------------|
| `{}` | Braces | Curly brackets |
| `[]` | Brackets | Square brackets |
| `()` | Parenthesis | Round brackets |
| `<>` | Angle brackets | — |

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
