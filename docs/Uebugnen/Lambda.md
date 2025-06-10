---
title: Lambda
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
import java.util.function.*;

public class Main {
    public static void main(String[] args) {

        /// LAMBDA EXPRESSIONS
        // AUFGABE 1: Runnable ohne Parameter, ohne Rückgabewert, eine Anweisung
            // Das Runnable sayHello soll "Hallo Welt" im Terminal ausgeben

        // AUFGABE 2: Consumer mit 1 Parameter, keine Rückgabe, eine Anweisung
            // Der Consumer printName mit Typ String soll beim Aufruf für einen String name "Name: " + name ausgeben

        // AUFGABE 3: Function mit 1 Parameter, 1 Rückgabewert, eine Anweisung
            // Die Function wordLength mit Typen <String, Integer> soll für einen übergebenen String die Länge des Strings zurückgeben
            // Gib die Länge des Strings im Terminal aus

        // AUFGABE 4: BiConsumer mit 2 Parametern, keine Rückgabe, eine Anweisung
            // Der BiConsumer printAge mit Typen <String, Integer> soll eien übergebenen Namen + Alter ausgeben

        // AUFGABE 5: BiFunction mit 2 Parametern, 1 Rückgabewert, eine Anweisung
            // Die BiFunction mit Typ <Integer, Integer, Integer> sum soll zwei Integer a und b zusammenrechnen und zurückgeben.
            // Gib das Ergebnis im Terminal aus

        // AUFGABE 6: Supplier ohne Parameter, Rückgabewert, mit einer Anweisung
            // Der Supplier getRandom mit Typ Double soll mit Math.random() eine Zufallszahl zurückgeben
            // Gib die Zahl im Terminal aus

        // AUFGABE 7: Predicate mit einer Anweisung + return + Bedingung
            // Das Predicate isShortWord mit Typ String soll zurückgeben ob ein übergebener String weniger als 5 Buchstaben hat
            // Prüfe jeweils ob "Hund" und "Elefant" weniger als 5 Buchstaben haben und gib das Ergebnis aus


        /// FUNKTIONALE INTERFACES
        // AUFGABE 1: Functional Interface ohne Parameter, keine Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface Hello in der Interfaces.java Datei mit einer Funktion execute()
            // Die Instanz sayHello2() soll eine Lambda Funktion übergeben, die Hallo Welt ausgibt
            // Rufe die Funktion mittels sayHello2.execute(); auf
        Hello sayHello2 =
        sayHello2.execute();

        // AUFGABE 2: Ein Parameter, keine Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface PrintName in der Interfaces.java Datei mit einer Funktion print()
            // Die Funktion soll ein Parameter String name haben
            // Dieser soll mit einer Lambda Funktion in der Instanz printName2 übergeben werden
            // So soll der Name in der Konsole ausgegeben werden

        // AUFGABE 3: Ein Parameter, Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface WordLength in der Interfaces.java Datei mit einer Funktion getLength()
            // Diese soll ein Parameter String word enthalten, welches mit der zugehörigen lambda übergeben werden

        // AUFGABE 4: Zwei Parameter, keine Rückgabe, eine Anweisung
            // Das funktionale Interface PrintPersonAge soll eine Funktion print mit zwei Parametern (name und age) enthalten
            // Diese sollen mit der lambda funktion ausgegeben werden

        // AUFGABE 5: Zwei Parameter, Rückgabe, eine Anweisung
            // Das Funktionale Interface Add soll eine Funktion calculate mit zwei Integer Parametern a und b enthalten
            // Die Lambda Funktion addiert beide Zahlen
            // Schreibe ein println statement, welches das Interface mit der calculate Funktion nutzt

        // AUFGABE 6: Kein Parameter, Rückgabewert, eine Anweisung
            // Das RandomNumber Interface soll eine generate() Funktion ohne Parameter enthalten
            // Die lambda FUnktion generiert eine Zufallszahl mit Math.random()
            // Gib die Zufallszahl im Terminal aus

        // AUFGABE 7: Ein Parameter, Rückgabe mit return-Anweisung + Block
            // Das Interface IsShortWord enthält eine Funktion check mit einem Parameter String word
            // Die lambda Funktion prüft ob das Wort weniger als 5 Buchstaben enthält
            // Gib im Terminal aus ob der String "Hund" und der String "Elefant" weniger als 5 Buchstaben hat



        // WEITERE AUFGABEN HIER (Übungen Steffen): https://jappuccini.github.io/java-docs/production/exercises/lambdas/
    }
}
```

## Interfaces.java file
```java
// AUFGABE 1: Hello

// AUFGABE 2: PrintName

// AUFGABE 3: WordLength

// AUFGABE 4: PrintPersonAge

// AUFGABE 5: Add

// AUFGABE 6: RandomNumber

// AUFGABE 7: IsShortWord
```

## Git Branch
```console
git checkout exercise/lambda
```

## Lösung Lambdas

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>MainSolution Class</h2>
    {% highlight java %}package src;

import java.util.function.*;

public class MainSolution {
    public static void main(String[] args) {

        /// LAMBDA EXPRESSIONS
        // AUFGABE 1: Runnable ohne Parameter, ohne Rückgabewert, eine Anweisung
            // Das Runnable sayHello soll "Hallo Welt" im Terminal ausgeben
        Runnable sayHello = () -> System.out.println("Hallo Welt!");
        sayHello.run();

        // AUFGABE 2: Consumer mit 1 Parameter, keine Rückgabe, eine Anweisung
            // Der Consumer printName mit Typ String soll beim Aufruf für einen String name "Name: " + name ausgeben
        Consumer<String> printName = name -> System.out.println("Name: " + name);
        printName.accept("Anna");

        // AUFGABE 3: Function mit 1 Parameter, 1 Rückgabewert, eine Anweisung
            // Die Function wordLength mit Typen <String, Integer> soll für einen übergebenen String die Länge des Strings ausgeben
        Function<String, Integer> wordLength = word -> word.length();
        System.out.println("Länge: " + wordLength.apply("Lambda"));

        // AUFGABE 4: BiConsumer mit 2 Parametern, keine Rückgabe, eine Anweisung
            // Der BiConsumer printAge mit Typen <String, Integer> soll eien übergebenen Namen + Alter ausgeben
        BiConsumer<String, Integer> printAge = (name, age) -> System.out.println(name + " ist " + age + " Jahre alt.");
        printAge.accept("Lukas", 29);

        // AUFGABE 5: BiFunction mit 2 Parametern, 1 Rückgabewert, eine Anweisung
            // Die BiFunction mit Typ <Integer, Integer, Integer> sum soll zwei Integer a und b zusammenrechnen und zurückgeben.
        BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;
        System.out.println("Summe: " + sum.apply(10, 5));

        // AUFGABE 6: Supplier ohne Parameter, Rückgabewert, mit einer Anweisung
            // Der Supplier getRandom mit Typ Double soll mit Math.random() eine Zufallszahl zurückgeben
        Supplier<Double> getRandom = () -> Math.random();
        System.out.println("Zufallszahl: " + getRandom.get());

        // AUFGABE 7: Predicate mit einer Anweisung + return + Bedingung
            // Das Predicate isShortWord mit Typ String soll zurückgeben ob ein übergebener String weniger als 5 Buchstaben hat
        Predicate<String> isShortWord = word -> {
            return word.length() < 5;
        };
        System.out.println("Ist kurz? 'Hund' -> " + isShortWord.test("Hund"));
        System.out.println("Ist kurz? 'Elefant' -> " + isShortWord.test("Elefant"));


        /// FUNKTIONALE INTERFACES
        // AUFGABE 1: Functional Interface ohne Parameter, keine Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface Hello in der Interfaces.java Datei mit einer Funktion execute()
            // Die Instanz sayHello2() soll eine Lambda Funktion übergeben, die Hallo Welt ausgibt
            // Rufe die Funktion mittels sayHello2.execute(); auf
        HelloSolution sayHello2 = () -> System.out.println("Hallo Welt!");
        sayHello2.execute();

        // AUFGABE 2: Ein Parameter, keine Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface PrintName in der Interfaces.java Datei mit einer Funktion print()
            // Die Funktion soll ein Parameter String name haben
            // Dieser soll mit einer Lambda Funktion in der Instanz printName2 übergeben werden
            // So soll der Name in der Konsole ausgegeben werden
        PrintNameSolution printName2 = name -> System.out.println("Name: " + name);
        printName2.print("Anna");

        // AUFGABE 3: Ein Parameter, Rückgabe, eine Anweisung
            // Erstelle das funktionale Interface WordLength in der Interfaces.java Datei mit einer Funktion getLength()
            // Diese soll ein Parameter String word enthalten, welches mit der zugehörigen lambda übergeben werden
        WordLengthSolution wordLength2 = word -> word.length();
        System.out.println("Länge: " + wordLength2.getLength("Lambda"));

        // AUFGABE 4: Zwei Parameter, keine Rückgabe, eine Anweisung
            // Das funktionale Interface PrintPersonAge soll eine Funktion print mit zwei Parametern (name und age) enthalten
            // Diese sollen mit der lambda funktion ausgegeben werden
        PrintPersonAgeSolution printAge2 = (name, age) -> System.out.println(name + " ist " + age + " Jahre alt.");
        printAge2.print("Lukas", 29);

        // AUFGABE 5: Zwei Parameter, Rückgabe, eine Anweisung
            // Das Funktionale Interface Add soll eine Funktion calculate mit zwei Integer Parametern a und b enthalten
            // Die Lambda Funktion addiert beide Zahlen
            // Schreibe ein println statement, welches das Interface mit der calculate Funktion nutzt
        AddSolution add = (a, b) -> a + b;
        System.out.println("Summe: " + add.calculate(10, 5));

        // AUFGABE 6: Kein Parameter, Rückgabewert, eine Anweisung
            // Das RandomNumber Interface soll eine generate() Funktion ohne Parameter enthalten
            // Die lambda FUnktion generiert eine Zufallszahl mit Math.random()
            // Gib die Zufallszahl im Terminal aus
        RandomNumberSolution generator = () -> Math.random();
        System.out.println("Zufallszahl: " + generator.generate());

        // AUFGABE 7: Ein Parameter, Rückgabe mit return-Anweisung + Block
            // Das Interface IsShortWord enthält eine Funktion check mit einem Parameter String word
            // Die lambda Funktion prüft ob das Wort weniger als 5 Buchstaben enthält
            // Gib im Terminal aus ob der String "Hund" und der String "Elefant" weniger als 5 Buchstaben hat
        IsShortWordSolution isShort = word -> {
            return word.length() < 5;
        };
        System.out.println("Ist kurz? 'Hund' -> " + isShort.check("Hund"));
        System.out.println("Ist kurz? 'Elefant' -> " + isShort.check("Elefant"));
    }
}{% endhighlight %}
    <h2>Interfaces</h2>
    {% highlight java %}package src;

// AUFGABE 1: Hello
@FunctionalInterface
interface HelloSolution {
    void execute();
}

// AUFGABE 2
@FunctionalInterface
interface PrintNameSolution {
    void print(String name);
}

// AUFGABE 3
@FunctionalInterface
interface WordLengthSolution {
    int getLength(String word);
}

// AUFGABE 4
@FunctionalInterface
interface PrintPersonAgeSolution {
    void print(String name, int age);
}

// AUFGABE 5
@FunctionalInterface
interface AddSolution {
    int calculate(int a, int b);
}

// AUFGABE 6
@FunctionalInterface
interface RandomNumberSolution {
    double generate();
}

// AUFGABE 7
@FunctionalInterface
interface IsShortWordSolution {
    boolean check(String word);
}{% endhighlight %}
</div>
</details>
