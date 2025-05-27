---
title: Generics
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
public class Main {
    public static void main(String[] args) {

        // EXERCISE 1:
        // Use printArray with different data types
        printArray(new Integer[]{1, 2, 3});
        printArray(new String[]{"A", "B", "C"});

        // EXERCISE 2:
        // Create a generic class Pair and instantiate it with different types
        Pair<String, Integer> studentAge = new Pair<>("Alice", 21);
        studentAge.printPair();

        Pair<Double, Boolean> data = new Pair<>(99.5, true);
        data.printPair();

        // EXERCISE 3:
            // Use compareValues method to compare two values
            // Can compare Integers, Doubles, Strings...
        System.out.println(compareValues(10, 10));        // should print true
        System.out.println(compareValues(5.5, 7.5));        // false
        System.out.println(compareValues("abc", "abc"));  // true
    }

    // EXERCISE 1:
    // Create a generic method called printArray that accepts an array of any type
    // Loop through the array and print each element
    // Call the method from main with different array types

    public static void printArray() {

    }

    // EXERCISE 2:
    // Create a generic class Pair with two type parameters T and U
    // Add two private attributes of types T and U, called "key" and "value"
    // Constructor should initialize these attributes
    // Add a method printPair to the Pair class that prints it's key and value
    // Initialize two Pairs with different attribute types (e.g. String, Integer, Double...)
    // Print its values using the printPair function on each pair




    // EXERCISE 3:
    // Create a generic method compareValues that checks if two values are equal
    // It should accept two parameters of the same generic type (T a, T b)
    // Function should extend Comparable (T extends Comparable<T>) so generic values can be compared
    // Return true if values are equal, otherwise false
    // The function now should be able to compare two values of the same generic type for different types

    public static boolean compareValues() {

    }
}
```

## Pair Class
```java
public class Pair {

}
```

## Git Branch
```console
git checkout exercise/generics
```