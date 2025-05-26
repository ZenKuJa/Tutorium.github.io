---
title: Search
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
public class Exercise {

     /**
     * EXERCISE 1: Lineare Suche
     * Implementieren Sie die Methode `linearSearch`, die ein gegebenes `number`
     * in einem Array `array` mittels linearer Suche findet.
     *
     * Bei der linearen Suche wird jedes Element des Arrays der Reihe nach überprüft,
     * bis das gesuchte Element gefunden wird oder das Ende des Arrays erreicht ist.
     *
     * @param array Das Array, in dem gesucht werden soll.
     * @param number Die zu suchende Zahl.
     * @return Der Index der gefundenen Zahl im Array, oder -1, wenn die Zahl nicht gefunden wurde.
     */
    static int linearSearch(int[] array, int number) {

        return -1;

    }

     /**
     * EXERCISE 2: Binäre Suche
     * Implementieren Sie die Methode `binarySearch`, die ein gegebenes `number`
     * in einem **sortierten** Array `array` mittels binärer Suche findet.
     *
     * Die binäre Suche teilt das Suchintervall bei jedem Schritt in zwei Hälften.
     * Sie setzt voraus, dass das Array sortiert ist.
     *
     * @param array Das **sortierte** Array, in dem gesucht werden soll.
     * @param left Der linke Index des aktuellen Suchintervalls.
     * @param right Der rechte Index des aktuellen Suchintervalls.
     * @param number Die zu suchende Zahl.
     * @return Der Index der gefundenen Zahl im Array, oder -1, wenn die Zahl nicht gefunden wurde.
     */
    static int binarySearch(int[] array, int left, int right, int number) {
       
        return -1;
    }


    /**
     * EXERCISE 3: Interpolationssuche
     * Implementieren Sie die Methode `interpolationSearch`, die ein gegebenes `number`
     * in einem **gleichmäßig verteilten und sortierten** Array `array` mittels Interpolationssuche findet.
     *
     * Die Interpolationssuche ist eine Verbesserung der binären Suche für Arrays,
     * deren Elemente gleichmäßig verteilt sind. Sie schätzt die Position des gesuchten
     * Elements basierend auf den Werten an den Endpunkten des aktuellen Suchintervalls.
     *
     * @param array Das **sortierte und gleichmäßig verteilte** Array, in dem gesucht werden soll.
     * @param low Der untere Index des aktuellen Suchintervalls.
     * @param high Der obere Index des aktuellen Suchintervalls.
     * @param number Die zu suchende Zahl.
     * @return Der Index der gefundenen Zahl im Array, oder -1, wenn die Zahl nicht gefunden wurde.
     */
    public static int interpolationSearch(int[] array, int low, int high, int number) {
        
        return -1;
    }

    public static void main(String[] args) {

        int[] array = { 3, 4, 1, 7, 5, 11, 8 };
        int[] arraySorted = { 1, 3, 4, 5, 7, 8, 11 };

        int number = 4;


        // Exercise 1:
        // LINEAR SEARCH
        int indexLinear = linearSearch(array, number);

        if (indexLinear == -1)
            System.out.println("Element is not present in the array");
        else
            System.out.println("Element '" + number + "' found at index: " + indexLinear + " using linear search");


        // Exercise 2:
        // BINARY SEARCH
        int indexBinary = binarySearch(arraySorted, 0, arraySorted.length - 1, number);

        if (indexBinary == -1)
            System.out.println("Element is not present in the array");
        else
            System.out.println("Element '" + number + "' found at index: " + indexBinary + " using binary search");



        // Exercise 3:
        // INTERPOLATION SEARCH
        int indexInterpolation = interpolationSearch(arraySorted, 0, arraySorted.length - 1, number);

        if (indexInterpolation == -1)
            System.out.println("Element is not present in the array");
        else
            System.out.println("Element '" + number + "' found at index: " + indexInterpolation + " using interpolation search");
    }
}
```

## Git Branch
```console
git checkout exercise/search
```