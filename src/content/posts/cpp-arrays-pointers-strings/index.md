---
title: "C++ Chapter 6: Arrays, Pointers, References & Strings"
published: 2026-07-11
updated: 2026-07-25
description: "C++ arrays, pointers, null pointers, dereferencing, references, and introduction to std::string."
image: ../introduction-to-cpp/images/Pasted%20image%2020260711155924.png
tags: ["cpp", "programming", "tutorial", "beginner", "arrays", "pointers", "strings"]
category: "C++"
priority: 6
permalink: "cpp/arrays-pointers-strings"
draft: false
---

**Previous Chapter:** [Operators & Input](/cpp/operators-input)

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

Objects reside in memory. And so far, we have learned how to access and manipulate objects through variables. Another way to access an object in memory is through pointers. Each object in memory has its type and an address. This allows us to access the object through a pointer. So, pointers are types that can hold the address of a particular object. For illustrative purposes only, we will declare an unutilized pointer that can point to an int object:

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

- `int* p` (declare reason): Here you are asking to create a new variable with a new name `p`. The presence of the asterisk `*` immediately after `int` is what tells the computer that this variable is not a regular variable for storing numbers, but rather a pointer. This is an operator intended exclusively to hold the "memory address" of another variable of type `int` (integer).

- `=` (assignment operator): It simply means "take the value on the right side, and store it inside the variable on the left (`p`)".

- `&x` (address-of operator): The `&` sign is called (address operator). When you put it before any variable (such as `x`), it means: "You do not need the value stored inside `x` (which is 123, for example), but rather the address of the room in which `x` resides in memory (RAM)."

### Null Pointer

```cpp
int main()
{
    int* p = nullptr;
}
```

- Problem: In C++, when you create a new pointer without giving it a specific address, it may point randomly to any unknown location in memory. This is dangerous and may cause the program to crash.
- Solution: If you want to create a pointer, but you have not yet decided which variable it will point to, you must explicitly tell the computer that this pointer does not currently point to anything. We do this using the `nullptr` keyword.
- **Important:** The pointer type must always match the variable type.

### Dereferencing

To print out the value of the dereferenced pointer, we can use the `*` operator. We can also change the value through the pointer:

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

## References

Another (somewhat) similar concept is a reference type. A reference type is an alias to an existing object in memory. References must be initialized. We describe a reference type as type_name followed by an ampersand `&`. Example:

```cpp
int main()
{
    int x = 20;
    int& y = x;
}
```

Now we have two different names that refer to the same int object in memory. If we assign a different value to either one of them, they both change as we have one object in memory, but we are using two different names:

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

- `&` is used for creating references and to find the address in RAM.

---

## Introduction to Strings

We mentioned printing out a string literal such as `"Hello World."` to standard output via:

```cpp
std::cout << "Hello World.";
```

We can store these literals inside `std::string` type. C++ standard library offers a compound type called string or rather `std::string` as it is part of the `std` namespace. We use it for storing and manipulating strings.

### Defining a String

To use the `std::string` type, we need to include the `<string>` header in our program. To print output we need to include the `<iostream>` header:

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

We can add a string literal to our string using the compound operator `+=`:

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

We can add a character to our string using the `+=` operator:

```cpp
#include <string>
#include <iostream>

int main()
{
    std::string s = "hello";
    char c = '!';
    s += c;
    std::cout << s;
}
```

We can add another string to our string using the `+` operator. We say we concatenate the strings:

```cpp
#include <string>
#include <iostream>

int main()
{
    std::string s1 = "hello ";
    std::string s2 = "world";
    std::string s3 = s1 + s2;
    std::cout << s3;
}
```

### Accessing Characters

Individual characters of a string can be accessed through a subscript operator `[]` or via a member function `.at(index)`. The index starts at 0:

```cpp
#include <string>
#include <iostream>

int main()
{
    std::string s = "hello world";
    char c1 = s[0];
    char c2 = s.at(0);
    char c3 = s[6];
    char c4 = s.at(6);
    std::cout << c1 << '\n' << c2 << '\n' << c3 << '\n' << c4;
    std::cout << '\n' << s;
}

/*
 the output:
    h
    h
    w
    w
    hello world
*/
```

### Comparing Strings

Comparing a string to another string is done using the equality operator `==`:

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string s1 = "hello";
    std::string s2 = "world";
    if (s1 == s2)
    {
        std::cout << "the strings are equal";
    }
    else
    {
        std::cout << "the strings are not equal";
    }
}
```

### String Input

Preferred way of accepting a string from the standard input is via the `std::getline` function which takes `std::cin` and our string as parameters:

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

#### Difference between `std::cin >>` and `std::getline`

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string me;
    std::cout << "please enter string: " << '\n';
    std::cin >> me;
    std::cout << "what you entered: " << me;
}
```

| Feature | `std::cin >>` | `std::getline` |
| --- | --- | --- |
| Reads spaces | Stops at first space | Reads spaces as part of the text |
| Scope | Single word | Full line |
| Common use | Reading numbers and single words | Reading full names and sentences |
