# C++ Course

> "The only way to learn a new programming language is by writing programs in it"

> "In software development, learning is not a big part of the job. It is the job." — Woody Zuill

> "Programming is not about typing, it's about thinking." — Rich Hickey

---

## Chapter 1: Introduction

### A Little History of C/C++ Programming Language

**Assembly**
- Extremely simple instructions
- Requires lots of code to do simple tasks
- Can express anything your computer can do
- Hard to read, write
- Redundant, boring programming, bugs proliferation

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

### A Little History of C

Areas of Application:
- UNIX operating system
- Computer games
- Due to their power and ease of use, C was used in the programming of the special effects for Star Wars

### A Little History of C++

The C++ programming language (originally named "C with Classes") was devised by Bjarne Stroustrup, an employee from Bell Labs (AT&T). Stroustrup started working on C with Classes in 1979. (The ++ is a C language operator). The first commercial release of the C++ language was in October 1985.

### Areas of Application and Popularity

**Why C++ is so Popular?**
- There may be more than 200 billion lines of C/C++ code globally
- Performance is the defining aspect of C++. No other programming language provides the performance-critical facilities of C++
- Provide the programmer control over every aspect of performance
- Leave no room for a lower level language
- Ubiquity: C++ can run from a low-power embedded device to large-scale supercomputers
- Multi-Paradigm: Allow writing efficient code without losing high-level abstraction
- Allow writing low-level code: Drivers, kernels, assembly (asm), etc.
- Ecosystem: Many support tools such as debuggers, memory checkers, coverage, static analysis, profiling, etc.
- Maturity: C++ has a 40 years history. Many software problems have been already addressed

**Areas of Application**
- Operating systems: Windows, Android, OS X, Linux
- Compilers: LLVM, Swift compiler
- Artificial Intelligence: TensorFlow, Caffe, Microsoft Cognitive Toolkit
- Image Editing: Adobe Premier, Photoshop, Illustrator
- Web browser: Firefox, Chrome, etc. + WebAssembly
- High-Performance Computing: drug developing and testing, large scale climate models, physics simulations
- Embedded systems: IoT, network devices (e.g. GSM), automotive
- Google and Microsoft use C++ for web indexing
- Scientific Computing: CERN/NASA, SETI@home, Folding@home
- Database: MySQL, ScyllaDB
- Video Games: Unreal Engine, Unity
- Entertainment: Movie rendering, virtual reality
- Finance: electronic trading systems (Goldman, JPMorgan, Deutsche Bank)

### C++ Philosophy

**Performance**
- High-level code (clean and safe) should produce a program just as fast as low-level code (complex and difficult)

**Type Safety**
- Enforce safety at compile time: The main goal is to detect errors early
- Statically Typed Language: In C++, you must declare the type of a variable before using it
- Benefits of Type Annotations:
  1. Ease of reading the code (More readable)
  2. Improving performance and efficiency (Compiler optimizations)
  3. Create custom type systems (Define own type system)

**Key Principles**
- Programming model: compartmentalization, only addition features if they solve an actual problem, and allow full control
- Predictable runtime: no garbage collector, no dynamic type system → real-time systems
- Low resources: low memory and energy consumption → restricted hardware platforms
- Well suited for static analysis → safety critical software
- Portability → Modern C++ standards are highly portable

### Who is C++ for?

> "C++ is for people who want to use hardware very well and manage the complexity of doing that through abstraction"

> "a language like C++ is not for everybody. It is generated via sharp and effective tool for professional basically and definitely for people who aim at some kind of precision"

### C++ Weaknesses

**Why C++ is so Difficult?**
- More languages in one: Standard C/C++, Preprocessor, Object-Oriented features, Templates and Meta-Programming
- Huge set of features
- Worry about memory management
- Low-level implementation details: pointer arithmetic, structure, padding, undefined behavior, etc.
- Frustrating: compiler/runtime errors (e.g. seg. fault)

> "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off" — Bjarne Stroustrup

---

## Chapter 2: Why C++ and Download IDE

### Why C++?
1. **Reverse Engineering:** C++ is fundamental for understanding and analyzing executable files (Binaries), and dealing with advanced analysis tools like IDA Pro, x64dbg, and Ghidra
2. **Game Development:** The most powerful game engines (like Unreal Engine) are written in it
3. **Operating Systems:** Large parts of Windows, macOS, and Linux are built with it
4. **Heavy Desktop Applications:** Like Photoshop, Premiere
5. **Web Browsers:** Popular browser engines like Chrome and Safari rely on it
6. **Embedded Systems and Databases**

### IDE Options
1. VS Code
2. VS Community
3. CLion
4. Code::Blocks

---

## Chapter 3: How to Download Compiler and Debugger for VSCode

1. Install in VSCode C/C++ extension
   - C++ compiler pre-installed
   - C++ debugger pre-installed

2. How?
   - Download MSYS2
   - Open clang64, write: `pacman -Syu`
   - Open msys2, write: `pacman -Su`
   - Open mingw64, write: `pacman -Ss gcc` (shows compilers), then: `pacman -S mingw-w64-x86_64-gcc`
   - Download debugger: `pacman -Ss gdb` then: `pacman -S mingw-w64-x86_64-gdb`
   - Check versions:
     - `gcc --version`
     - `g++ --version`
     - `gdb --version`

3. Add the path to Edit the system environment variables

---

## Chapter 4: First Program

Let us create a blank text file using the text editor or C++ IDE of our choice and name it `source.cpp`:

```cpp
int main()
{

}
```

This simple program does nothing, it has no parameters listed inside parentheses, and there are no statements inside the function body.

### I/O Stream (Why should we prefer I/O stream?)

**Type safe:**
- In `printf` (legacy): The function does not know what type of variable it wants to print automatically. You must activate them with the variable type using custom symbols such as `%d` for integers or `%s` for strings
- In C++ functions (such as `cout`): The compiler knows the type of the variable in advance (static) while writing the code

**Less error-prone:**
- With I/O Stream, there are no redundant % tokens that have to be consistent with the actual objects passed to I/O stream

**Extensible:**
- The C++ I/O Stream mechanism allows new user-defined types to be passed to I/O stream without breaking existing code

**Comparable performance:**
- If used correctly may be faster than C I/O (printf, scanf, etc.)

---

## Chapter 5: Comments

Single line comments in C++ start with double slashes `//` and the compiler ignores them:

```cpp
int main()
{
    // this is a comment

    /* This is a
       multi-line comment */
}
```

---

## Chapter 6: Hello World with C++

```cpp
#include <iostream>

int main()
{
    std::cout << "hello world";
}
```

**Explanation:** The `#include <iostream>` statement includes the iostream header into our source file via the `#include` directive. The iostream header is part of the standard library. We need its inclusion to use the `std::cout` object, also known as a standard-output stream. The `<<` operator inserts our Hello World string literal into that output stream.

Using the global `std` namespace:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!\n";
}
```

Output multiple string literals:

```cpp
#include <iostream>

int main()
{
    std::cout << "first output " << " second output ";
}
```

Output on a new line:

```cpp
#include <iostream>

int main()
{
    std::cout << "first line " << '\n' << "second line";
}
```

---

## Chapter 7: Types

### Fundamental Types

C++ has some built-in types. We often refer to them as fundamental types. A declaration is a statement that introduces a name into a current scope.

#### Boolean

```cpp
int main()
{
    bool b;              // default value false == 0
    bool b = true;       // or
    bool A {false};
}
```

**Important:** All local variables must always be given an initial value once they are created. If you try to read or use a variable that has not been given an initial value (uninitialized), this will lead to "undefined behavior" (UB).

#### Character

Used to represent a single character, size is 1 byte:

```cpp
int main()
{
    char c = 'a';
}
```

To print:

```cpp
#include <iostream>

int main()
{
    char c = 'a';
    std::cout << "the value of variable c is: " << c;
}
```

The size of the char type in memory is usually one byte:

```cpp
#include <iostream>

int main()
{
    std::cout << " the size for char is: " << sizeof(char) << " byte(s)";
}
```

The `'a'` character in ASCII table is represented with the number `97`.

#### Integer

Fundamental type called integer type. We use it to store integral values (whole numbers), both negative and positive:

```cpp
#include <iostream>

int main()
{
    int x = 123;
    int c = -123;
    std::cout << "the value x is: " << x << '\n' << "the value c is: " << c;
}
```

The size of int is usually 4 bytes.

Number systems:
- **Decimal:** Regular numbers from 0 to 9
- **Octal:** Numbers from 0 to 7, prefix `0`
- **Hexadecimal:** Numbers from 0 to 9 and letters A to F, prefix `0x`

```cpp
int main()
{
    int x = 10;     // decimal literal
    int y = 012;    // octal literal
    int z = 0xA;    // hexadecimal literal
}
```

#### Floating-Point

Three floating-point types: `float`, `double`, `long double`. We use `double` (double-precision):

```cpp
#include <iostream>

int main()
{
    double x = 2.56;
    std::cout << " the value x is: " << x;
}
```

#### Type void

Type void is a type with no values. We can have functions of type void (functions that do not return a value). We can also have a void pointer type marked with `void*`.

### Type Modifiers

Types can have modifiers: `signed`, `unsigned`, `short`, `long`:

```cpp
#include <iostream>

int main()
{
    unsigned long int x = 4294967295;
    std::cout << "The value of an unsigned long integer variable is: " << x;
}
```

---

## Chapter 8: Variable Declaration, Definition, and Initialization

```cpp
#include <iostream>

int main()
{
    char c = 'h';
    int x = 5;
    double d = 5.2;
}
```

#### Declaration

```cpp
int main()
{
    int x;
    double y;
    char z;
}
```

#### Definition

```cpp
int main()
{
    int x = 20;
    double y = 2.36;
    char z = 'c';
}
```

#### Initialization

```cpp
#include <iostream>

int main()
{
    char mychar {'c'};
    int myint {225};
    double mydouble {2.369};
    std::cout << " the value char is: " << mychar << '\n';
    std::cout << " the value int is:  " << myint << '\n';
    std::cout << " the value double is: " << mydouble;
}
```

---

## Chapter 9: Operators

### Assignment Operator

```cpp
int main()
{
    int myint = 20;
    int x = 120;
    x = myint;

    double mydouble = 2.39;
    char mychar = 's';
    mychar = 'c';
}
```

### Arithmetic Operators

```cpp
+ // addition
- // subtraction
* // multiplication
/ // division
% // modulo
```

```cpp
#include <iostream>

int main()
{
    int x = 123;
    int y = 456;
    int z = x + y;  // addition
    z = x - y;      // subtraction
    z = x * y;      // multiplication
    z = x / y;      // division
    std::cout << " the value of z is: " << z << '\n';
}
```

### Compound Assignment Operators

```cpp
+= // compound addition
-= // compound subtraction
*= // compound multiplication
/= // compound division
%= // compound modulo
```

```cpp
#include <iostream>

int main()
{
    int x = 123;
    x += 10;   // x = x + 10
    x -= 20;   // x = x - 20
    x *= 5;    // x = x * 5
    x /= 3;    // x = x / 3
    x %= 2;    // x = x % 2
    std::cout << " the value x is: " << x << '\n';
}
```

### Increment/Decrement Operators

```cpp
++x // pre-increment
x++ // post-increment
--x // pre-decrement
x-- // post-decrement
```

```cpp
#include <iostream>

int main()
{
    int x = 123;
    x++;
    ++x;
    --x;
    x--;
    std::cout << " the value x: " << x;
}
```

With pre-increment, a value of 1 is added first, then the object is evaluated. With post-increment, the object is evaluated first, then the value of 1 is added.

---

## Chapter 10: Standard Input

The `std::cin` is the standard input stream, and it uses the `>>` operator to extract what has been read into our variable:

```cpp
#include <iostream>

int main()
{
    std::cout << "Enter a number: ";
    int x = 0;
    std::cin >> x;
    std::cout << "You entered: " << x << '\n';
}
```

Multiple inputs:

```cpp
#include <iostream>

int main()
{
    std::cout << "Please enter two numbers: ";
    int x = 0;
    int y = 0;
    std::cin >> x >> y;
    std::cout << "Number 1: " << x << ", Number 2: " << y << '\n';
}
```

---

## Chapter 11: Arrays

Arrays are sequences of objects of the **same type**:

```cpp
#include <iostream>

int main()
{
    char arr[5];
    int arr2[6];
}
```

Initialize with the initialization list `{}`:

```cpp
int main()
{
    int arr[5] = {2, 5, 3, 6, 9};
}
```

Access elements through the subscript `[]` operator (index starts at 0):

```cpp
int main()
{
    int arr[4] = {1, 2, 3, 5};
    arr[0] = 100;  // change the first element
}
```

In modern C++, prefer `std::array` and `std::vector` over raw arrays.

---

## Chapter 12: Pointers

Objects reside in memory. Pointers are types that can hold the address of a particular object:

```cpp
int main()
{
    int* p;
}
```

```cpp
#include <iostream>

int main()
{
    int x = 123;
    int* p = &x;
    std::cout << "the value of x is: " << x << " the Place in RAM is: " << p;
}
```

- `int* p`: Creates a pointer variable
- `&x`: Address-of operator — gives the memory address of `x`

### Null Pointer

```cpp
int main()
{
    int* p = nullptr;
}
```

When you create a pointer without giving it a specific address, use `nullptr` to indicate it doesn't point to anything.

### Dereferencing

```cpp
#include <iostream>

int main()
{
    int x = 123;
    int* p = &x;
    std::cout << " the value x is: " << *p << " the place in RAM: " << p;
    *p = 147;
    std::cout << " the value x from x is: " << x << " the value x from *p is: " << *p;
}
```

---

## Chapter 13: References

A reference type is an alias to an existing object in memory. References must be initialized:

```cpp
int main()
{
    int x = 20;
    int& y = x;
}
```

```cpp
#include <iostream>

int main()
{
    int x = 20;
    int& y = x;
    x = 30;
    std::cout << " the value x is: " << x << " the value y is: " << y;
    y = 50;
    std::cout << " the value x is: " << x << " the value y is: " << y;
}
```

`&` is used for creating references and to find the address in RAM.

---

## Chapter 14: Introduction to Strings

C++ standard library offers `std::string` as part of the `std` namespace.

### Defining a String

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s = "hello world";
    std::cout << s;
}
```

### Concatenating Strings

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s = "hello";
    s += " world";
    std::cout << s;
}
```

### Accessing Characters

```cpp
#include <string>
#include <iostream>

int main()
{
    std::string s = "hello world";
    char c1 = s[0];
    char c2 = s.at(0);
    std::cout << c1 << '\n' << c2;
}
```

### Comparing Strings

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s1 = "hello";
    std::string s2 = "world";
    if (s1 == s2)
        std::cout << "the strings are equal";
    else
        std::cout << "the strings are not equal";
}
```

### String Input

Preferred way using `std::getline`:

```cpp
#include <string>
#include <iostream>

int main()
{
    std::string s;
    std::cout << "please enter string: ";
    std::getline(std::cin, s);
    std::cout << "what you entered: " << s;
}
```

| Feature | `std::cin >>` | `std::getline` |
|---------|--------------|----------------|
| Reads spaces | Stops at first space | Reads spaces as part of the text |
| Scope | Single word | Full line |
| Common use | Reading numbers and single words | Reading full names and sentences |
