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

## Lösung Strings

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>StringSolutions Class</h2>
    {% highlight java %}package src;

public class StringSolutions {

    // Exercise 1 (Easy)
    // Use StringBuilder to concatenate strings in a loop.
    // Build a comma-separated list: "1,2,3,...,10"
    public static void buildCommaSeparatedList() {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= 10; i++) {
            sb.append(i);
            if (i < 10) {
                sb.append(",");
            }
        }
        System.out.println("Comma-separated list: " + sb.toString());
    }

    // Exercise 2 (Easy)
    // Reverse a string using StringBuilder's built-in reverse() method.
    public static void reverseString(String input) {
        StringBuilder sb = new StringBuilder(input);
        sb.reverse();
        System.out.println("Reversed: " + sb);
    }

    // Exercise 3 (Medium)
    // Use StringBuffer to insert a word at a specific position.
    // Start with: "Data is fun", insert "Science" after "Data"
    public static void insertWord() {
        StringBuffer sb = new StringBuffer("Data is fun");
        int insertPos = sb.indexOf("is");
        sb.insert(insertPos, "Science ");
        System.out.println("Modified: " + sb.toString());
    }


    // Exercise 4 (Hard)
    // Clean a CSV line using StringBuilder: remove extra spaces and ensure single commas
    // Input: "  Alice , 24 , Data Science  "
    // Output: "Alice,24,Data Science"
    public static void cleanCSVLine(String line) {
        String[] parts = line.trim().split(",");
        StringBuilder cleaned = new StringBuilder();
        for (int i = 0; i < parts.length; i++) {
            cleaned.append(parts[i].trim());
            if (i < parts.length - 1) {
                cleaned.append(",");
            }
        }
        System.out.println("Cleaned CSV: " + cleaned.toString());
    }


    // Exercise 5
    // Check if a given string is a palindrome (same forward and backward)
    public static void checkPalindrome(String word) {
        StringBuilder reversed = new StringBuilder(word).reverse();
        if (word.equals(reversed.toString())) {
            System.out.println(word + " is a palindrome.");
        } else {
            System.out.println(word + " is not a palindrome.");
        }
    }


    // Exercise 6
    // Capitalize first letter of each word in a String
    public static void capitalizeWords(String sentence) {
        String[] words = sentence.split(" ");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            if (!word.isEmpty()) {
                result.append(Character.toUpperCase(word.charAt(0)))
                        .append(word.substring(1).toLowerCase()).append(" ");
            }
        }

        System.out.println("Capitalized: " + result.toString().trim());
    }


    // Exercise 7:
    // Replace all digits in a string with '#' using StringBuffer
    public static void maskDigits(String input) {
        StringBuffer sb = new StringBuffer(input);
        for (int i = 0; i < sb.length(); i++) {
            if (Character.isDigit(sb.charAt(i))) {
                sb.setCharAt(i, '#');
            }
        }
        System.out.println("Masked: " + sb.toString());
    }


    // Exercise 8:
    // Remove vowels (a, e, i, o, u) from a String
    public static void removeVowels(String paragraph) {
        StringBuilder sb = new StringBuilder(paragraph);
        for (int i = sb.length() - 1; i >= 0; i--) {
            char c = Character.toLowerCase(sb.charAt(i));
            if ("aeiou".indexOf(c) != -1) {
                sb.deleteCharAt(i);
            }
        }
        System.out.println("Without vowels: " + sb.toString());
    }



    public static void main(String[] args) {

        // UNCOMMENT FUNCTIONS TO TEST:

        buildCommaSeparatedList();
        reverseString("Machine Learning");
        insertWord();
        cleanCSVLine("  Alice , 24 , Data Science  ");
        checkPalindrome("ANNA");
        checkPalindrome("PETER");
        capitalizeWords("machine learning");
        maskDigits("Angela Merkel is 70 years old");
        removeVowels("Machine Learning");
    }
}{% endhighlight %}
</div>
</details>
