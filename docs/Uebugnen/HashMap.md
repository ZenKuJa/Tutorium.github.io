---
title: Hash Maps
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

        // EXERCISE 1:
            // Create and populate a HashMap (create function below main)
        HashMap<String, Integer> ages = createAgeMap();
        System.out.println("Ages: " + ages);

        // EXERCISE 2:
            // Retrieve and update value (create function below main)
        printAge(ages, "Alice");
        updateAge(ages, "Alice", 30);
        printAge(ages, "Alice");

        // EXERCISE 3:
            // Iterate through all entrie (create function below main)
        printAllAges(ages);
    }

    // EXERCISE 1:
        // Create a function that returns a HashMap<String, Integer>
        // Add a few people and their ages
        // Return the HashMap

    public static HashMap<String, Integer> createAgeMap() {

        return map;
    }

    // EXERCISE 2:
        // Create a function printAge that takes a map and a name as input parameters
        // If the name exists, print "Name is xx years old"
        // If not, print "Name not found"

    // Also in EXERCISE 2:
        // Create a function updateAge that updates a name's age
        // If the name exists, update and print "Updated age for name"
        // If not, print "Cannot update. Name not found."


    // EXERCISE 3:
        // Create a function that prints all name-age pairs in the map
        // Use a for-each loop with entrySet()

}
```

## Git Branch
```console
git checkout exercise/hashmap
```