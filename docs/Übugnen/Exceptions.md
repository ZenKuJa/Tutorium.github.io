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