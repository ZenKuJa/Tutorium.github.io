---
title: Exceptions
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
public class Main {
    public static void main(String[] args) {

        // Exercise 1:
        validateAge(16);

        // Exercise 2:
        validatePassword("123");

        // Exercise 3:
        processTransaction(-20, "CHF");
    }

    // EXERCISE 1:
        // Create the InvalidAgeException
        // Create the function that throws the InvalidAgeException, if the age is below 18
            // Exception message should print an error text
            // If it is valid, the age should be printed to terminal
        // Add try/catch statement to main function
    // Test with different usernames

    public static void validateAge(int age) {

    }


    // EXERCISE 2:
        // Create the InvalidPasswordException
        // Create the validatePassword function that checks a password length
            // If length is < 5 letters it should throw the exception
            // Else it should print "password set to xxx"
        // Add the function call to the same try block and add a second catch block for catching
        // the InvalidPasswordException
    // Test with different passwords

    public static void validatePassword(String password) {

    }


    // EXERCISE 3:
        // Create the InvalidTransaction function
        // Create the processTransaction function, that takes an amount and a currency
            // If the amount is negative, throw InvalidTransaction with message:
                // "Transaction amount must be positive."
            // If the currency is NOT "USD" or "EUR", the Exception message should be:
                // "Unsupported currency: " + currency
            // If amount and currency are valid, a success message should be printed to the terminal.
        // Add the function call to the try/catch block
    // Test with different amounts and currencies

    public static void processTransaction(double amount, String currency) {

    }
}
```

## InvalidAgeException Class
```java
public class InvalidAgeException {

}
```

## InvalidPasswordException Class
```java
public class InvalidPasswordException {

}
```

## InvalidTransactionException
```java
public class InvalidTransactionException {

}
```

## Git Branch
```console
git checkout exercise/exceptions
```

# Lösung Exceptions

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
  <h2>Main Class</h2>
  {% highlight java %}// Main.java
public class Main {
    public static void main(String[] args) {
        try {
            // Exercise 1: Basic Exception
            validateAge(16);

            // Exercise 2: Using custom exception
            validatePassword("123");

            // Exercise 3: Multiple custom exceptions
            processTransaction(-100, "CHF");
        } catch (InvalidAgeException e) {
            System.out.println("Age Error: " + e.getMessage());
        } catch (InvalidPasswordException e) {
            System.out.println("Username Error: " + e.getMessage());
        } catch (InvalidTransactionException e) {
            System.out.println("Transaction Error: " + e.getMessage());
        }
    }

    // Exercise 1: Throws built-in Exception
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            // Throws custom exception
            throw new InvalidAgeException("User must be 18 or older.");
        }
        System.out.println("Age is valid.");
    }

    // Exercise 2: Throws the InvalidPasswordException, if password length is below 5
    public static void validatePassword(String password) throws InvalidPasswordException {
        if (password.length() < 5) {
            throw new InvalidPasswordException("Password must be at least 5 characters long.");
        }
        System.out.println("Password is set to: " + password);
    }

    // Exercise 3: Throws custom exception with different rules
    public static void processTransaction(double amount, String currency) throws InvalidTransactionException {
        if (amount <= 0) {
            throw new InvalidTransactionException("Transaction amount must be positive.");
        }
        if (!currency.equals("USD") && !currency.equals("EUR")) {
            throw new InvalidTransactionException("Unsupported currency: " + currency);
        }
        System.out.println("Transaction processed: " + amount + " " + currency);
    }
}{% endhighlight %}
    <h2>InvalidAgeException Class</h2>
    {% highlight java %}// Exercise 1 Custom Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}{% endhighlight %}

<h2>InvalidPasswordException Class</h2>
{% highlight java %}class InvalidPasswordException extends Exception {
    public InvalidPasswordException(String message) {
        super(message);
    }
}{% endhighlight %}

<h2>InvalidTransactionException</h2>
{% highlight java %}class InvalidTransactionException extends Exception {
    public InvalidTransactionException(String message) {
        super(message);
    }
}{% endhighlight %}

<h2></h2>
{% highlight java %}{% endhighlight %}

</div>
</details>