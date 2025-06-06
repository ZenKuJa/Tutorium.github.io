---
title: Stream
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
package src;

import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class Main {
    public static void main(String[] args) {

        List<Student> students = List.of(
                new Student("Anna", 22, "female", 1.3, "Computer Science"),
                new Student("Ben", 24, "male", 2.0, "Mathematics"),
                new Student("Carla", 21, "female", 2.5, "Physics"),
                new Student("David", 23, "male", 1.7, "Engineering"),
                new Student("Ella", 20, "female", 1.0, "Computer Science"),
                new Student("Finn", 25, "male", 3.2, "History"),
                new Student("Greta", 22, "female", 1.9, "Biology")
        );

        // Aufgabe 1: Alle Studierenden ausgeben.
            // Schreibe eine Stream-Operation, die alle Studierenden in der Konsole ausgibt.

        // Aufgabe 2: Nur weibliche Studierende filtern.
            // Filtere die Liste so, dass nur weibliche Studierende ausgegeben werden.

        // Aufgabe 3: Studierende mit Note < 2.0 anzeigen.
            // Zeige alle Studierenden mit einer Note besser als 2.0 an.

        // Aufgabe 4: Nur Namen der Studierenden extrahieren (map).
            // Verwende map, um eine Liste mit allen Namen der Studierenden zu erzeugen.

        // Aufgabe 5: Anzahl aller Studierenden zählen.
            // Gib die Gesamtzahl der Studierenden zurück.

        // Aufgabe 6: Alphabetisch nach Name sortieren.
            // Sortiere die Studierenden nach Namen in alphabetischer Reihenfolge.

        // Aufgabe 7: Erste 3 Studierende ausgeben (limit).
            // Gib nur die ersten drei Studierenden der Liste aus.

        // Aufgabe 8: Gibt es Studierende mit Note 1.0? (anyMatch).
            // Prüfe, ob mindestens ein Studierender die Note 1.0 hat.

        // Aufgabe 9: Sind alle Studierenden älter als 18? (allMatch).
            // Prüfe, ob alle Studierenden älter als 18 Jahre sind.

        // Aufgabe 10: Kein Studierender mit Note > 4.0? (noneMatch).
            // Überprüfe, ob kein Studierender eine schlechtere Note als 4.0 hat.

        // Aufgabe 11: Durchschnittsnote aller Studierenden berechnen.
            // Berechne die Durchschnittsnote aller Studierenden.

        // Aufgabe 12: Studierenden mit bester Note finden (min).
            // Finde den Studierenden mit der besten (niedrigsten) Note.

        // Aufgabe 13: Studierenden mit schlechtester Note finden (max).
            // Finde den Studierenden mit der schlechtesten (höchsten) Note.

        // Aufgabe 14: Studierende nach Studienfach gruppieren.
            // Gruppiere die Studierenden nach ihrem Studienfach.

        // Aufgabe 15: Anzahl pro Studienfach zählen.
            // Zähle, wie viele Studierende es pro Studienfach gibt.

        // Aufgabe 16: Alle Namen zu einer Zeichenkette (joining).
            // Erstelle eine einzige Zeichenkette mit allen Namen, getrennt durch Kommas.

        // Aufgabe 17: Nach Alter sortieren, aber rückwärts.
            // Sortiere die Studierenden absteigend nach Alter.

        // Aufgabe 18: "Computer Science"-Studierende -> Namen sammeln.
            // Sammle die Namen aller Studierenden im Fach "Computer Science".

        // Aufgabe 19: Weibliche Studierende alphabetisch sortieren.
            // Sortiere alle weiblichen Studierenden alphabetisch nach Name.

        // Aufgabe 20: Noten aufrunden und ausgeben.
            // Runde alle Noten auf ganze Zahlen und gib sie aus.

        // Aufgabe 21: Bester Schnitt pro Studiengang.
            // Finde für jedes Studienfach den Studierenden mit der besten Note.

        // Aufgabe 22: Durchschnittsnote pro Studiengang.
            // Berechne die Durchschnittsnote für jedes Studienfach.

        // Aufgabe 23: Studierende nach Geschlecht gruppieren.
            // Gruppiere die Studierenden nach Geschlecht und zähle sie.

        // Aufgabe 24: Ältester pro Studienfach.
            // Finde den ältesten Studierenden in jedem Studienfach.

        // Aufgabe 25: Zweitbeste Note ermitteln.
            // Ermittle die zweitbeste (zweitniedrigste) Note unter allen Studierenden.

        // Aufgabe 26: Männliche mit Note < 2.0, sortiert.
            // Gib alle männlichen Studierenden mit Note < 2.0 sortiert nach Note aus.

        // Aufgabe 27: Durchschnittsalter für Note < 2.0.
            // Berechne das Durchschnittsalter aller Studierenden mit einer Note < 2.0.

        // Aufgabe 28: Map<Name, Note>.
            // Sammle die Studierenden in einer Map, wobei der Name der Schlüssel ist und die Note der Wert.

        // Aufgabe 29: In zwei Listen: unter/über Durchschnitt.
            // Teile die Studierenden in zwei Gruppen: unter und über dem Durchschnitt.

        // Aufgabe 30: Top 3 Noten extrahieren.
            // Extrahiere die drei besten Noten (kleinsten Werte) und speichere sie in einer Liste.



        // WEITERE AUFGABEN HIER:
            // Klausur Steffen 2023: https://jappuccini.github.io/java-docs/production/additional-material/steffen/java-2/exam-preparation/2023
            // Klausur Steffen 2024: https://jappuccini.github.io/java-docs/production/additional-material/steffen/java-2/exam-preparation/2024
            // Übungsaufgaben Steffen: https://jappuccini.github.io/java-docs/production/exercises/java-stream-api/
    }
}

```

## Student Class
```java
package src;

public class Student {
    private String name;
    private int age;
    private String gender;
    private double grade;
    private String major;

    public Student(String name, int age, String gender, double grade, String major) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.grade = grade;
        this.major = major;
    }

    // Getter
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getGender() { return gender; }
    public double getGrade() { return grade; }
    public String getMajor() { return major; }

    @Override
    public String toString() {
        return name + " (" + age + ", " + gender + ") - " + major + ", Grade: " + grade;
    }
}

```

## Git Branch
```console
git checkout exercise/stream
```