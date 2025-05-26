---
title: Sort
parent: Übungen
nav_order: 4
layout: default
---

## Main Class
```java
import java.util.Arrays;
import java.util.Random;
import java.util.stream.IntStream;

public class Exercise {

    /**
     * EXERCISE 1: Selection Sort
     * Implementieren Sie die Methode `selectionSort`, die ein gegebenes `array`
     * mithilfe des Selection Sort-Algorithmus sortiert.
     *
     * Selection Sort funktioniert, indem in jedem Durchlauf das kleinste (oder größte)
     * Element aus dem unsortierten Teil des Arrays ausgewählt und an die richtige Position
     * im sortierten Teil verschoben wird.
     *
     * @param array Das Array, das sortiert werden soll.
     */
    public static void selectionSort(int[] array) {

    }

    /**
     * EXERCISE 2: Bubble Sort
     * Implementieren Sie die Methode `bubbleSort`, die ein gegebenes `array`
     * mithilfe des Bubble Sort-Algorithmus sortiert.
     *
     * Bubble Sort vergleicht benachbarte Elemente und tauscht sie, wenn sie in der
     * falschen Reihenfolge sind. Dieser Vorgang wird wiederholt, bis das Array sortiert ist.
     * Größere (oder kleinere) Elemente "blubbern" dabei an das Ende (oder den Anfang) des Arrays.
     *
     * @param array Das Array, das sortiert werden soll.
     */
    public static void bubbleSort(int[] array) {

    }


     /**
     * EXERCISE 3: Insertion Sort
     * Implementieren Sie die Methode `insertionSort`, die ein gegebenes `array`
     * mithilfe des Insertion Sort-Algorithmus sortiert.
     *
     * Insertion Sort arbeitet ähnlich wie das Sortieren eines Kartenblatts:
     * Es nimmt ein Element aus dem unsortierten Teil und fügt es an der richtigen
     * Position in den bereits sortierten Teil ein.
     *
     * @param array Das Array, das sortiert werden soll.
     */
    public static void insertionSort(int[] array) {

    }


     /**
     * EXERCISE 4: Quick Sort
     * Implementieren Sie die Methode `quickSort`, die ein gegebenes `array`
     * mithilfe des Quick Sort-Algorithmus sortiert.
     *
     * Quick Sort ist ein effizienter, vergleichsbasierter Sortieralgorithmus,
     * der das "Teile und Herrsche"-Prinzip anwendet. Es wählt ein "Pivot"-Element
     * und partitioniert das Array so, dass alle Elemente, die kleiner als das Pivot
     * sind, vor dem Pivot liegen und alle Elemente, die größer sind, danach.
     * Dies wird rekursiv auf die Sub-Arrays angewendet.
     *
     * @param array Das Array, das sortiert werden soll.
     * @param left Der linke Index des aktuellen Sortierbereichs.
     * @param right Der rechte Index des aktuellen Sortierbereichs.
     */
    public static void quickSort(int[] array, int left, int right) {

    }

     /**
     * Hilfsmethode für Quick Sort: Partitionierung
     * Diese Methode partitioniert einen Teil des Arrays um ein Pivot-Element herum.
     * Alle Elemente, die kleiner als das Pivot sind, werden vor dem Pivot platziert,
     * und alle Elemente, die größer sind, danach.
     *
     * @param array Das Array, das partitioniert werden soll.
     * @param left Der linke Index des zu partitionierenden Bereichs.
     * @param right Der rechte Index des zu partitionierenden Bereichs.
     * @return Der Index des Pivot-Elements nach der Partitionierung.
     */
    private static int partition(int[] array, int left, int right) {

    }


    /**
     * EXERCISE 5: Merge Sort
     * Implementieren Sie die Methode `mergeSort`, die ein gegebenes `array`
     * mithilfe des Merge Sort-Algorithmus sortiert.
     *
     * Merge Sort ist ein "Teile und Herrsche"-Algorithmus, der das Array
     * rekursiv in zwei Hälften teilt, diese Hälften sortiert und dann die
     * sortierten Hälften wieder zusammenführt ("merges").
     *
     * @param array Das Array, das sortiert werden soll.
     * @param left Der linke Index des aktuellen Sortierbereichs.
     * @param right Der rechte Index des aktuellen Sortierbereichs.
     */
    public static void mergeSort(int[] array, int left, int right) {
    
    }

     /**
     * Hilfsmethode für Merge Sort: Zusammenführen (Merge)
     * Diese Methode führt zwei sortierte Sub-Arrays zu einem einzigen sortierten Array zusammen.
     *
     * @param array Das ursprüngliche Array.
     * @param left Der linke Index des ersten Sub-Arrays.
     * @param middle Der rechte Index des ersten Sub-Arrays (und middle + 1 ist der linke Index des zweiten).
     * @param right Der rechte Index des zweiten Sub-Arrays.
     */
    private static void merge(int[] array, int left, int middle, int right) {

    }


    public static void main(String[] args) {
        boolean showResult = false;
        int[] array = IntStream.generate(() -> new Random().nextInt(100)).limit(50).toArray();

        //Selection Sort
        int[] selectionArray = array.clone();
        long startTime = System.nanoTime();
        selectionSort(selectionArray);
        double duration = (double) (System.nanoTime() - startTime) / 1000000;

        System.out.println("Selection Sort in " + duration + "ms.");
        if (showResult) System.out.println(" Result: " + Arrays.toString(selectionArray));


        //Bubble Sort
        int[] bubbleArray = array.clone();
        startTime = System.nanoTime();
        bubbleSort(bubbleArray);
        duration = (double) (System.nanoTime() - startTime) / 1000000;

        System.out.println("Bubble Sort in " + duration + "ms.");
        if (showResult) System.out.println(" Result: " + Arrays.toString(bubbleArray));


        // Insertion Sort
        int[] insertionArray = array.clone();
        startTime = System.nanoTime();
        insertionSort(insertionArray);
        duration = (double) (System.nanoTime() - startTime) / 1000000;

        System.out.println("Insertion Sort in " + duration + "ms.");
        if (showResult) System.out.println(" Result: " + Arrays.toString(insertionArray));


        //Quick Sort
        int[] quickArray = array.clone();
        startTime = System.nanoTime();
        quickSort(quickArray, 0, quickArray.length - 1);
        duration = (double) (System.nanoTime() - startTime) / 1000000;

        System.out.println("Quick Sort in " + duration + "ms.");
        if (showResult) System.out.println(" Result: " + Arrays.toString(quickArray));


        //Merge Sort
        int[] mergeArray = array.clone();
        startTime = System.nanoTime();
        mergeSort(mergeArray, 0, mergeArray.length - 1);
        duration = (double) (System.nanoTime() - startTime) / 1000000;

        System.out.println("Merge Sort in " + duration + "ms.");
        if (showResult) System.out.println(" Result: " + Arrays.toString(mergeArray));
    }
}
```

## Git Branch
```console
git checkout exercise/sort
```