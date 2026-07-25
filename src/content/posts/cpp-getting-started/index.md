---
title: "C++ Getting Started"
published: 2026-07-11
updated: 2026-07-25
description: "Why learn C++, how to download and set up your IDE, compiler, and debugger for C++ development."
image: /assets/img/cpp-getting-started.webp
tags: ["cpp", "programming", "tutorial", "beginner", "setup"]

priority: 2
permalink: "cpp/getting-started"
draft: false
hideFromFeed: true
type: "course"
series: "cpp"
seriesOrder: 2
seriesTitle: "C++"
seriesDescription: "A beginner-friendly, chapter-by-chapter guide to learning C++ from scratch."
seriesImage: /assets/img/cpp-history-philosophy.webp
---

**Previous Chapter:** [History & Philosophy](/cpp/history-philosophy)

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

**Next Chapter:** [Hello World & I/O](/cpp/hello-world)
