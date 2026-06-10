---
title: "Object-Oriented Programming (OOP)"
published: 2024-06-10
description: "Core concepts and principles of Object-Oriented Programming"
tags: ["programming", "oop", "object-oriented", "paradigm"]
category: "Programming Concepts"
draft: false
---

# Object-Oriented Programming (OOP)

Object-Oriented Programming is a programming paradigm based on the concept of "objects", which can contain data (attributes) and code (methods).

## Four Pillars of OOP

### 1. Encapsulation
Bundling data and methods that operate on that data within a single unit (class).

```java
public class BankAccount {
    private double balance;  // Encapsulated data
    
    public void deposit(double amount) {
        balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}
```

### 2. Inheritance
Creating new classes based on existing ones.

```java
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}
```

### 3. Polymorphism
Objects of different types can be treated as objects of a common base type.

```java
Animal myDog = new Dog();
Animal myCat = new Cat();
myDog.makeSound();  // "Woof!"
myCat.makeSound();  // "Meow!"
```

### 4. Abstraction
Hiding complex implementation details and showing only essential features.

```java
abstract class Shape {
    abstract double area();  // Abstract method
}

class Circle extends Shape {
    double radius;
    double area() { return Math.PI * radius * radius; }
}
```

## Benefits

- **Modularity** - Code organized into reusable classes
- **Reusability** - Inheritance promotes code reuse
- **Flexibility** - Polymorphism enables flexible designs
- **Maintainability** - Encapsulation protects internal state

## When to Use OOP

- Large applications with complex relationships
- Teams working on different modules
- Projects requiring frequent updates
- GUI applications, games, simulations

## Conclusion

OOP provides powerful tools for modeling real-world problems and building scalable software systems.