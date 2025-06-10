---
title: File Operations
parent: Übungen
nav_order: 4
layout: default
---

# Übung File Operations

## FileExercises Class
```java
package src;

import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileExercises {

    // Exercise 1 (Easy)
    // Create a new text file called "data.txt" and write "Hello, Data Science!" into it.
    public static void createFile() throws IOException {

    }

    // Exercise 2 (Easy)
    // Read the contents of "data.txt" and print them to the console.
    public static void readFile() throws IOException {

    }

    // Exercise 3 (Medium)
    // List all .txt files in the current directory.
    public static void listTextFiles() {

    }

    // Exercise 4 (Medium)
    // Count the number of lines in a file using java.nio.file.Files.
    public static void countLines(String fileName) throws IOException {

    }

    // Exercise 5 (Medium)
    // Copy the contents of "data.txt" to "copy.txt" using java.nio.file.Files.
    public static void copyFile() throws IOException {

    }

    // Exercise 6 (Hard)
    // Given the file "people.txt" with comma-separated values like "Alice,24" create Person objects
    // and store them in a list. Print all people older than 21.
    // The Person class is found in Person.java
    public static void filterPeople() throws IOException {

    }

    // Exercise 7 (Hard)
    // Analyze a file of numbers (one per line) and output basic statistics:
    // mean, min, max. Use java.nio.file.Files to read the file.
    public static void analyzeNumbers(String fileName) throws IOException {

    }

    public static void main(String[] args) throws IOException {
        // UNCOMMENT ANY METHOD TO TEST IT:

        // createFile();
        // readFile();
        // listTextFiles();
        // countLines("persons.txt");
        // copyFile();
        // filterPeople();
        // analyzeNumbers("numbers.txt");
    }
}
```

## Person Class
```java
package src;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String toString() {
        return name + " (" + age + ")";
    }
}
```

## NUmbers txt
```markdown
10.5
23.7
15.0
8.3
19.9
30.2
12.6
25.4
17.1
21.0
```

## Person txt
```markdown
Alice,24
Bob,19
Charlie,22
Diana,21
Ethan,30
Fiona,18
George,25
Hannah,20
```


## Git Branch
```console
git checkout exercise/file-operations
```

## Lösung File Operatins

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>FileSolutions Class</h2>
    {% highlight java %}package src;

import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileSolutions {

    // Exercise 1 (Easy)
    // Create a new text file called "data.txt" and write "Hello, Data Science!" into it.
    public static void createFile() throws IOException {
        FileWriter writer = new FileWriter("data.txt");
        writer.write("Hello, Data Science!");
        writer.close();
    }

    // Exercise 2 (Easy)
    // Read the contents of "data.txt" and print them to the console.
    public static void readFile() throws IOException {
        FileReader reader = new FileReader("data.txt");
        int character;
        while ((character = reader.read()) != -1) {
            System.out.print((char) character);
        }
        reader.close();
    }

    // Exercise 3 (Medium)
    // List all .txt files in the current directory.
    public static void listTextFiles() {
        File dir = new File(".");
        File[] files = dir.listFiles((d, name) -> name.endsWith(".txt"));
        if (files != null) {
            for (File file : files) {
                System.out.println(file.getName());
            }
        }
    }

    // Exercise 4 (Medium)
    // Count the number of lines in a file using java.nio.file.Files.
    public static void countLines(String fileName) throws IOException {
        Path path = Path.of(fileName);
        long lineCount = Files.lines(path).count();
        System.out.println("Number of lines: " + lineCount);
    }

    // Exercise 5 (Medium)
    // Copy the contents of "data.txt" to "copy.txt" using java.nio.file.Files.
    public static void copyFile() throws IOException {
        Path source = Path.of("data.txt");
        Path target = Path.of("copy.txt");
        Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
    }

    // Exercise 6 (Hard)
        // Given the file "people.txt" with comma-separated values like "Alice,24" create Person objects
        // and store them in a list. Print people older than 21.
        // The Person class is found in Person.java
    public static void filterPeople() throws IOException {
        List<String> lines = Files.readAllLines(Path.of("people.txt"));
        List<PersonSolution> people = new ArrayList<>();

        for (String line : lines) {
            String[] parts = line.split(",");
            if (parts.length == 2) {
                String name = parts[0];
                int age = Integer.parseInt(parts[1]);
                people.add(new PersonSolution(name, age));
            }
        }

        for (PersonSolution p : people) {
            if (p.getAge() > 21) {
                System.out.println(p);
            }
        }
    }

    // Exercise 7 (Hard)
    // Analyze a file of numbers (one per line) and output basic statistics:
    // mean, min, max. Use java.nio.file.Files to read the file.
    public static void analyzeNumbers(String fileName) throws IOException {
        List<String> lines = Files.readAllLines(Path.of(fileName));
        List<Double> numbers = new ArrayList<>();

        for (String line : lines) {
            numbers.add(Double.parseDouble(line));
        }

        double sum = 0;
        double min = Double.MAX_VALUE;
        double max = Double.MIN_VALUE;

        for (double num : numbers) {
            sum += num;
            if (num < min) min = num;
            if (num > max) max = num;
        }

        double mean = sum / numbers.size();

        System.out.println("Mean: " + mean);
        System.out.println("Min: " + min);
        System.out.println("Max: " + max);
    }

    public static void main(String[] args) throws IOException {
        // UNCOMMENT ANY METHOD TO TEST IT:

        // createFile();
        // readFile();
        // listTextFiles();
        // countLines("data.txt");
        // copyFile();
        // filterPeople();
        // analyzeNumbers("numbers.txt");
    }
}{% endhighlight %}

    <h2>PersonSolution Class</h2>
    {% highlight java %}package src;

public class PersonSolution {
    private String name;
    private int age;

    public PersonSolution(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String toString() {
        return name + " (" + age + ")";
    }
}{% endhighlight %}

</div>
</details>
