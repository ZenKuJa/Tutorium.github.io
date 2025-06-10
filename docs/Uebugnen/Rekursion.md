---
title: Rekursion 1
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
public class Main {
    public static void main(String[] args) {

        // Exercise 1:
        factorial(16);

        // Exercise 2:
        fibonacci(10);

        // Exercise 3:
        istPalindrom("Reliefpfeiler");
    }

    /** EXERCISE 1: Fakultaet
     * Schreiben Sie eine rekursive Java-Methode namens `fakultaet`, die die Fakultät
     * einer gegebenen nicht-negativen ganzen Zahl `n` berechnet.
     *
     * Hinweis: Die Fakultät von `n` (geschrieben als n!) ist das Produkt aller
     * positiven ganzen Zahlen kleiner oder gleich `n`. Zum Beispiel ist 5! = 5 * 4 * 3 * 2 * 1 = 120.
     * Die Fakultät von 0 ist per Definition 1.
      */
    public static int factorial(int num) {

        return 0;
    }

    /**
     * EXERCISE 2: Fibonacci-Folge
     * Schreiben Sie eine rekursive Java-Methode namens `fibonacci`, die das n-te
     * Element der Fibonacci-Folge berechnet.
     *
     * Hinweis: Die Fibonacci-Folge beginnt mit 0 und 1, und jedes nachfolgende
     * Element ist die Summe der beiden vorhergehenden. Die Folge beginnt also so:
     * 0, 1, 1, 2, 3, 5, 8, 13, ...
     *
     * Rekursionsbasis: Was sind die ersten beiden Elemente der Folge, die Sie direkt zurückgeben können?
     * Rekursiver Schritt: Wie können Sie das n-te Fibonacci-Element mithilfe der vorherigen Elemente berechnen?
     */

    public static int fibonacci(int num) {

        return 0;
    }

    /**
     * EXERCISE 3: Palindrom-Prüfung
     * Schreiben Sie eine rekursive Java-Methode namens `istPalindrom`, die überprüft,
     * ob eine gegebene Zeichenkette ein Palindrom ist oder nicht. Ein Palindrom ist
     * eine Zeichenkette, die vorwärts und rückwärts gelesen gleich ist (z.B. "racecar", "level").
     *
     * Hinweis: Achten Sie darauf, Groß- und Kleinschreibung zu ignorieren und eventuelle
     * Leerzeichen oder Satzzeichen zu entfernen, bevor Sie die Palindrom-Prüfung durchführen
     * (optional, aber macht die Aufgabe interessanter). Konzentrieren Sie sich aber zunächst
     * auf die reine Rekursion der Zeichenkette selbst.
     *Main
     * Rekursionsbasis: Wann ist eine Zeichenkette definitiv ein Palindrom oder definitiv keins?
     * Rekursiver Schritt: Wie können Sie die Palindrom-Eigenschaft einer Zeichenkette auf die
     * Palindrom-Eigenschaft einer kleineren Zeichenkette reduzieren?
     */

    public static boolean istPalindrom(String text) {

        return false;
    }
}
```

## Git Branchie Palindrom-Eigenschaft einer Zeichenkette auf die
     * Palindrom-Eigenschaft einer kleinere
```console
git checkout exercise/recursion
```

## Lösung Rekursion 1

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>Main Class</h2>
    {% highlight java %}public class Main {
    public static void main(String[] args) {

        // Exercise 1:
        System.out.println(factorial(5));

        // Exercise 2:
        System.out.println(fibonacci(10));

        // Exercise 3:
        System.out.println(isPalindrom("Reliefpfeiler!"));
        System.out.println(isPalindrom("Theodor!"));
    }

    /** EXERCISE 1: Fakultaet
     * Schreiben Sie eine rekursive Java-Methode namens `factorial`, die die Fakultät
     * einer gegebenen nicht-negativen ganzen Zahl `n` berechnet.
     *
     * Hinweis: Die Fakultät von `n` (geschrieben als n!) ist das Produkt aller
     * positiven ganzen Zahlen kleiner oder gleich `n`. Zum Beispiel ist 5! = 5 * 4 * 3 * 2 * 1 = 120.
     * Die Fakultät von 0 ist per Definition 1.
      */
    public static int factorial(int num) {

        if (num <= 0) return 1;

        int factorialNum = num * factorial(num-1);

        return factorialNum;
    }

    /**
     * EXERCISE 2: Fibonacci-Folge
     * Schreiben Sie eine rekursive Java-Methode namens `fibonacci`, die das n-te
     * Element der Fibonacci-Folge berechnet.
     *
     * Hinweis: Die Fibonacci-Folge beginnt mit 0 und 1, und jedes nachfolgende
     * Element ist die Summe der beiden vorhergehenden. Die Folge beginnt also so:
     * 0, 1, 1, 2, 3, 5, 8, 13, ...
     *
     * Rekursionsbasis: Was sind die ersten beiden Elemente der Folge, die Sie direkt zurückgeben können?
     * Rekursiver Schritt: Wie können Sie das n-te Fibonacci-Element mithilfe der vorherigen Elemente berechnen?
     */

    public static int fibonacci(int num) {

        if (num <= 0) return 0;
        if (num == 1) return 1;

        int fibonacciNum = fibonacci(num-1) + fibonacci(num - 2);

        return fibonacciNum;
    }

    /**
     * EXERCISE 3: Palindrom-Prüfung
     * Schreiben Sie eine rekursive Java-Methode namens `isPalindrom`, die überprüft,
     * ob eine gegebene Zeichenkette ein Palindrom ist oder nicht. Ein Palindrom ist
     * eine Zeichenkette, die vorwärts und rückwärts gelesen gleich ist (z.B. "racecar", "level").
     *
     * Hinweis: Achten Sie darauf, Groß- und Kleinschreibung zu ignorieren und eventuelle
     * Leerzeichen oder Satzzeichen zu entfernen, bevor Sie die Palindrom-Prüfung durchführen
     * (optional, aber macht die Aufgabe interessanter). Konzentrieren Sie sich aber zunächst
     * auf die reine Rekursion der Zeichenkette selbst.
     *
     * Rekursionsbasis: Wann ist eine Zeichenkette definitiv ein Palindrom oder definitiv keins?
     * Rekursiver Schritt: Wie können Sie die Palindrom-Eigenschaft einer Zeichenkette auf die
     * Palindrom-Eigenschaft einer kleineren Zeichenkette reduzieren?
     */

    public static boolean isPalindrom(String text) {

        text = text.replaceAll("[.,!?;:()\\\\[\\\\]{}\\\\\\\\-\\\\-—\\\"„“»«'’]", "");
        text = text.trim();
        text = text.toLowerCase();

        if (text.length() <= 1) return true;
        if (text.charAt(0) == text.charAt(text.length()-1)){
            return isPalindrom(text.substring(1, text.length()-1));
        } else {
            return false;
        }
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

