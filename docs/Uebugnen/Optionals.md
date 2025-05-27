---
title: Optionals
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
import java.util.Optional;

public class Main {
    public static void main(String[] args) {

        // EXERCISE 1:
        // Test with a null value
        printUsername(null);
        printUsername("Tom");

        // EXERCISE 2:
        // Use Optional.of with a non-null value
        getLength("Hello");
        getLength(null); // Should raise NullPointerException

        // EXERCISE 3:
        // Test with present and empty optionals
        printEmail(Optional.of("user@example.com"));
        printEmail(Optional.empty());
    }

    // EXERCISE 1:
    // Create a function printUsername that takes a String (can be null)
    // Use Optional.ofNullable to wrap it
    // If present, print "Username: xxx", otherwise print "No username provided"
    public static void printUsername(String username) {

    }

    // EXERCISE 2:
    // Create a function getLength that takes a non-null String
    // Use Optional.of to wrap it (note: this will throw an exception if null)
    // If present, print the length of the string
    // Use ifPresent to check
    public static void getLength(String value) {

    }

    // EXERCISE 3:
    // Create a function printEmail that takes an Optional<String> optionalEmail as parameter
    // Use ifPresentOrElse to either:
    // - Print "Email: xxx" if value is present
    // - Or print "No email found" if value is empty
    public static void printEmail() {
    }
}
```

## Git Branch
```console
git checkout exercise/optionals
```