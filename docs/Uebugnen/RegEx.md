---
title: RegEx
parent: Übungen
nav_order: 4
layout: default
---

## RegexExercises Class
```java
package src;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExercises {

    // EXERCISE 1:
        // isAlphanumeric should print and return a boolean that checks if a String s contains
        // only letters and digits
    public static void isAlphanumeric(String s) {
        String regex = "";
        boolean isMatch = s.matches(regex);
        if (isMatch) {
            System.out.println(s + " is alphanumeric");
        } else {
            System.out.println(s + " is not alphanumeric");
        }
    }


    // EXERCISE 2:
        // This function should check if a String is a valid email
        // e.g. name@provider.topleveldomain
    public static void isEmail(String email) {
        String regex = "";
        boolean isEmail = email.matches(regex);
        if (isEmail) {
            System.out.println(email + " is a valid email address");
        } else {
            System.out.println(email + " is not a valid email address");
        }
    }


    // EXERCISE 3:
        // Validate a password with the following rules:
            // - At least 8 characters
            // - Contains at least one digit
            // - Contains at least one lowercase letter
            // - Contains at least one uppercase letter
            // - Contains at least one special character
            // - Does not contain whitespace
    public static void isValidPassword(String password) {
        String regex = "";
        boolean isValid = password.matches(regex);
        if (isValid) {
            System.out.println(password + " is a valid password");
        } else {
            System.out.println(password + " is not a valid password");
        }
    }


    // EXERCISE 6:
        // This function should check if an ip address is valid IPv4
        // The regex should match four groups of 1 to 3 digits separated by dots.
        // e.g. 192.168.14.3
    public static void isValidIPAddress(String ip) {
        String regex = "";
        boolean isValidIP = ip.matches(regex);
        if (isValidIP) {
            System.out.println(ip + " is a valid IPv4 address");
        } else {
            System.out.println(ip + " is not a valid IPv4 address");
        }
    }


    // EXERCISE 8:
        // This function should check if a String is a Hex-Code
        // The regex should match strings starting with '#' followed by exactly 6 hexadecimal digits (A-F)
        // The letters can be written lower or upper cased
    public static void isHexCode(String hexCode) {
        String regex = "";
        boolean isValidHexCode = hexCode.matches(regex);
        if (isValidHexCode) {
            System.out.println(hexCode + " is a valid hex code");
        } else {
            System.out.println(hexCode + " is not a valid hex code");
        }
    }


    // EXERCISE 10:
        // This function should check if a time String is in 24-hour time format with ':' seperator (e.g. 17:45)
    public static void isValidTimePattern(String time) {
        String regex = "";
        boolean isValidTimePattern = time.matches(regex);
        if (isValidTimePattern) {
            System.out.println(time + " is a valid time pattern");
        } else {
            System.out.println(time + " is not a valid time pattern");
        }
    }



    public static void main(String[] args) {

        // Exercise 1: Validate if a string contains only alphanumeric characters.
            // Create the function isAlphanumeric and check if the strings are alphanumeric
        String string1 = "Java123";
        String string2 = "#Java-123";
        System.out.println("EXERCISE 1:");
        isAlphanumeric(string1);
        isAlphanumeric(string2);


        // Exercise 2: Check if a string is a valid email address.
            // Create the function isEmail and check if the email adresses are valid
        String email1 = "example@test.com";
        String email2 = "exampletest.com";
        System.out.println("EXERCISE 2:");
        isEmail(email1);
        isEmail(email2);


        // Exercise 3: Validate a password with the following rules:
            // Create the function isValidPassword
        String password1 = "StrongPass1!";
        String password2 = "WeakPassword";
        System.out.println("EXERCISE 3:");
        isValidPassword(password1);
        isValidPassword(password2);


        // Exercise 4: Extract all hashtags from a given string.
            // The regex should find all words starting with '#' followed by alphanumeric characters.
            // Create a Pattern and a Matcher and compile and match a regex to extract the hashtags from the tweet
            // Uncomment the code to run
        String tweet = "Loving the #Java and #Regex exercises!";
            // Create Pattern and Matcher here
        System.out.print("Exercise 4: ");
        //while (hashtagMatcher.find()) {
        //    System.out.print(hashtagMatcher.group() + " ");
        //}
        //System.out.println();


        // Exercise 5: Replace all dates in the format DD/MM/YYYY with YYYY-MM-DD.
        // Use regex groups to rearrange the date components
            // Add the regex and replacement to the replaceAll function
        String textWithDates = "Today's date is 04/06/2025.";
        String reformattedDates = textWithDates.replaceAll("", "");
        System.out.println("Exercise 5: " + reformattedDates);


        // Exercise 6: Validate if a string is a valid IPv4 address.
        // The regex should match four groups of 1 to 3 digits separated by dots.
        String ipv4 = "192.168.1.1";
        String ipv6 = "2001:db8::8a2e:370:7334";
        System.out.println("Exercise 6:");
        isValidIPAddress(ipv4);
        isValidIPAddress(ipv6);


        // Exercise 7: Extract all words that start and end with the same letter.
            // The regex should use backreferences to ensure the first and last letters match.
            // Create a Pattern and a Matcher and add the correct regex
            // Uncomment the code to run
        String sentence = "Anna went to see civic and level races.";
            // Create Pattern and Matcher here
        System.out.print("Exercise 7: ");
        //while (sameLetterMatcher.find()) {
        //    System.out.print(sameLetterMatcher.group() + " ");
        //}
        //System.out.println();


        // Exercise 8: Check if a string is a valid hexadecimal color code.
            // Create the function isHexCode
        String colorCode1 = "#1A2B3C";
        String colorCode2 = "1A2B3C";
        System.out.println("Exercise 8:");
        isHexCode(colorCode1);
        isHexCode(colorCode2);


        // Exercise 9: Split a string into sentences based on punctuation marks.
            // The regex should split the text at '.', '!', or '?' followed by a space or end of string.
            // Create the regex
        String text = "Hello world! How are you doing? This is a test.";
        String[] sentences = text.split("");
        System.out.println("Exercise 9:");
        for (String s : sentences) {
            System.out.println(s);
        }


        // Exercise 10: Validate if a string is a valid time in 24-hour format HH:MM.
            // Create the function isValidTimePattern
        String time1 = "23:45";
        String time2 = "25:77";
        String time3 = "19/17";
        System.out.println("Exercise 10:");
        isValidTimePattern(time1);
        isValidTimePattern(time2);
        isValidTimePattern(time3);
    }
}
```

## Git Branch
```console
git checkout exercise/regex
```