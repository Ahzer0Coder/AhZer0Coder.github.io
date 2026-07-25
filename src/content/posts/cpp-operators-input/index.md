---
title: "C++ Chapter 5: Operators & Input"
published: 2026-07-11
updated: 2026-07-25
description: "C++ assignment, arithmetic, compound assignment, increment/decrement operators, and standard input with cin."
image: /assets/img/cpp-operators-input.webp
tags: ["cpp", "programming", "tutorial", "beginner", "operators", "input"]
category: "C++"
priority: 5
permalink: "cpp/operators-input"
draft: false
hideFromFeed: true
type: "course"
series: "cpp"
seriesOrder: 5
seriesTitle: "C++"
seriesDescription: "A beginner-friendly, chapter-by-chapter guide to learning C++ from scratch."
seriesImage: /assets/img/cpp-history-philosophy.webp
---

**Previous Chapter:** [Types & Variables](/cpp/types-variables)

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

**Next Chapter:** [Arrays, Pointers, References & Strings](/cpp/arrays-pointers-strings)
