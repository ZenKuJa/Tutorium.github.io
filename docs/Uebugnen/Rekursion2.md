---
title: Rekursion 2
parent: Übungen
nav_order: 4
layout: default
---

## Recursion2Exercises Class
```java
package src;

public class Recursion2Exercises {

    // 1. Factorial (Easy)
    // Calculate the factorial of a number n with recusrion and return it.
    // Formula: factorial(n) = n * factorial(n - 1), with factorial(0) = 1
    public static int factorial(int n) {

    }

    // 2. Fibonacci (Easy)
    // Compute the nth Fibonacci number recursively
    // Formula: fib(n) = fib(n - 1) + fib(n - 2), with fib(0) = 0 and fib(1) = 1
    public static int fibonacci(int n) {

    }

    // 3. Sum of Digits (Medium)
    // Given an integer n, return the sum of its digits recursively
    // Formula: sumDigits(123) = 1 + 2 + 3 = 6
    public static int sumDigits(int n) {

    }

    // 4. Power (Medium)
    // Compute base^exp using recursion.
    // Formula: power(2, 3) = 2 * power(2, 2) = 8
    public static int power(int base, int exp) {

    }

    // 5. Palindrome Check (Medium-Hard)
    // Check if a string is a palindrome (read the same forward and backward, like 'anna') using recursion.
    public static boolean isPalindrome(String s) {

    }

    // 6. Recursive Binary Search (Hard)
    // Perform binary search on a sorted array.
    public static boolean binarySearch(int[] arr, int target, int left, int right) {

    }


    // Main method to test exercises
    public static void main(String[] args) {

        // Uncomment the print statements to test the functions

        //System.out.println("Factorial(5): " + factorial(5));
        //System.out.println("Fibonacci(6): " + fibonacci(6));
        //System.out.println("Sum of Digits(1234): " + sumDigits(1234));
        //System.out.println("Power(2, 4): " + power(2, 4));
        //System.out.println("Is Palindrome 'racecar': " + isPalindrome("racecar"));

        //int[] sortedArr = {1, 3, 5, 7, 9, 11};
        //System.out.println("Binary Search 7: " + binarySearch(sortedArr, 7, 0, sortedArr.length - 1));
    }
}
```

## Git Branch
```console
git checkout exercise/recursion2
```



## Lösung Rekursion2

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>Recursion2Solutions Class</h2>
    {% highlight java %}package src;

public class Recursion2Solutions {

    // 1. Factorial (Easy)
    // Calculate the factorial of a number n with recusrion and return it.
    // Formula: factorial(n) = n * factorial(n - 1), with factorial(0) = 1
    public static int factorial(int n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }

    // 2. Fibonacci (Easy)
    // Compute the nth Fibonacci number recursively
    // Formula: fib(n) = fib(n - 1) + fib(n - 2), with fib(0) = 0 and fib(1) = 1
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // 3. Sum of Digits (Medium)
    // Given an integer n, return the sum of its digits recursively
    // Formula: sumDigits(123) = 1 + 2 + 3 = 6
    public static int sumDigits(int n) {
        if (n == 0) return 0;
        return n % 10 + sumDigits(n / 10);
    }

    // 4. Power (Medium)
    // Compute base^exp using recursion.
    // Formula: power(2, 3) = 2 * power(2, 2) = 8
    public static int power(int base, int exp) {
        if (exp == 0) return 1;
        return base * power(base, exp - 1);
    }

    // 5. Palindrome Check (Medium-Hard)
    // Check if a string is a palindrome (read the same forward and backward, like 'anna') using recursion.
    public static boolean isPalindrome(String s) {
        if (s.length() <= 1) return true;
        if (s.charAt(0) != s.charAt(s.length() - 1)) return false;
        return isPalindrome(s.substring(1, s.length() - 1));
    }

    // 6. Recursive Binary Search (Hard)
    // Perform binary search on a sorted array.
    public static boolean binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) return false;
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return true;
        else if (target < arr[mid]) return binarySearch(arr, target, left, mid - 1);
        else return binarySearch(arr, target, mid + 1, right);
    }


    // Main method to test exercises
    public static void main(String[] args) {
        System.out.println("Factorial(5): " + factorial(5));
        System.out.println("Fibonacci(6): " + fibonacci(6));
        System.out.println("Sum of Digits(1234): " + sumDigits(1234));
        System.out.println("Power(2, 4): " + power(2, 4));
        System.out.println("Is Palindrome 'racecar': " + isPalindrome("racecar"));

        int[] sortedArr = {1, 3, 5, 7, 9, 11};
        System.out.println("Binary Search 7: " + binarySearch(sortedArr, 7, 0, sortedArr.length - 1));
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