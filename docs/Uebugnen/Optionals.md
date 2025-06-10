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

## Lösung Optionals

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>Main Class</h2>
    {% highlight java %}import java.util.Optional;

public class Main {
    public static void main(String[] args) {

        // EXERCISE 1:
        // Test with a nullable value
        printUsername(null);
        printUsername("Tom");

        // EXERCISE 2:
        // Use Optional.of with a non-null value
        getLength("Hello");
        // getLength(null); // Uncomment to test what happens with null in Optional.of (it throws)

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
        Optional<String> optionalUsername = Optional.ofNullable(username);
        if (optionalUsername.isPresent()) {
            System.out.println("Username: " + optionalUsername.get());
        } else {
            System.out.println("No username provided");
        }
    }

    // EXERCISE 2:
    // Create a function getLength that takes a non-null String
    // Use Optional.of to wrap it (note: this will throw an exception if null)
    // If present, print the length of the string
    // Use ifPresent to check
    public static void getLength(String value) {
        Optional<String> optionalValue = Optional.of(value); // throws if null
        optionalValue.ifPresent(v -> System.out.println("Length: " + v.length()));
    }

    // EXERCISE 3:
    // Create a function printEmail that takes an Optional<String>
    // Use ifPresentOrElse to either:
    // - Print "Email: xxx" if value is present
    // - Or print "No email found" if value is empty
    public static void printEmail(Optional<String> optionalEmail) {
        optionalEmail.ifPresentOrElse(
                email -> System.out.println("Email: " + email),
                () -> System.out.println("No email found")
        );
    }
}{% endhighlight %}
</div>
</details>

## Lösung Optionals

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>FileSolutions Class</h2>
    {% highlight java %}{% endhighlight %}
</div>
</details>

