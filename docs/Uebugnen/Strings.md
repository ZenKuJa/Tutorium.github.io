---
title: Strings
parent: Übungen
nav_order: 4
layout: default
---

## Strings Class
```java
package src;

public class StringExercises {

    // Exercise 1 (Easy)
    // Use StringBuilder to concatenate strings in a loop.
    // Build a comma-separated list: "1,2,3,...,10" using a StringBuilder and a for loop
    // Print the list using the toString method
    public static void buildCommaSeparatedList() {

    }

    // Exercise 2 (Easy)
    // Reverse a string using StringBuilder's built-in reverse() method.
    public static void reverseString(String input) {

    }

    // Exercise 3 (Medium)
    // Use StringBuffer to insert a word at a specific position.
    // Start with: "Data is fun", insert "Science " so that the output is "Data Science is fun"
    public static void insertWord() {

    }


    // Exercise 4 (Hard)
    // Clean a comma seperated line using StringBuilder: remove extra spaces and ensure single commas
    // Input: "  Alice , 24 , Data Science  "
    // Output: "Alice,24,Data Science"
    public static void cleanCSVLine(String line) {

    }


    // Exercise 5
    // Check if a given string is a palindrome (same forward and backward)
    public static void checkPalindrome(String word) {

    }


    // Exercise 6
    // Capitalize first letter of each word in a String
    public static void capitalizeWords(String sentence) {

    }


    // Exercise 7:
    // Replace all digits in a string with '#' using StringBuffer
    public static void maskDigits(String input) {

    }


    // Exercise 8:
    // Remove vowels (a, e, i, o, u) from a String
    public static void removeVowels(String text) {

    }


    public static void main(String[] args) {
        // UNCOMMENT TO TEST FUNCTIONS

        //buildCommaSeparatedList();
        //reverseString("Machine Learning");
        //insertWord();
        //cleanCSVLine("  Alice , 24 , Data Science  ");
        //checkPalindrome("ANNA");
        //checkPalindrome("PETER");
        //capitalizeWords("machine learning");
        //maskDigits("Angela Merkel is 70 years old");
        //removeVowels("machine learning");
    }
}
```

## Git Branch
```console
git checkout exercise/strings
```