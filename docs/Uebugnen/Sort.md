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

## Lösung Sort

<details>
    <summary>
        Lösung
    </summary>
<div class="my-code-container">
    <h2>Solution Class</h2>
    {% highlight java %}import java.util.Arrays;
import java.util.Random;
import java.util.stream.IntStream;

public class Solution {


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
        int arrayLength = array.length;

        // loop over each value of the array
        for (int currentPosition = 0; currentPosition < arrayLength - 1; currentPosition++) {
            int minimumIndex = currentPosition;

            // Find the smallest element in the unsorted portion by looping over the remaining array
            // unsorted partition = part of the array that comes after currentIndex
            for (int index = currentPosition + 1; index < arrayLength; index++) {
                if (array[index] < array[minimumIndex]) {
                    // if a value lower than the one at currentIndex is found
                    // set minimumIndex to index of lower value
                    minimumIndex = index;
                }
            }

            // Swap the found new minimum element with the currentIndex element
            // by temporary storing minimum element in a new variable
            // and swapping the elements then
            int temporary = array[minimumIndex];
            array[minimumIndex] = array[currentPosition];
            array[currentPosition] = temporary;
        }
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
        int arrayLength = array.length;

        // has n passes over the complete array (minus the sorted parts)
        // In each pass the greatest, then second greatest, third greatest etc elements is found

        // Outer loop to control the number of passes
        for (int pass = 0; pass < arrayLength - 1; pass++) {
            // Inner loop for each pass
            for (int index = 0; index < arrayLength - pass - 1; index++) {
                // Each element at index is compared to element at next index
                // and swapped if it is greater
                // high values at the beginning of the array are pushed to the end
                // lower values stay where they are
                if (array[index] > array[index + 1]) {
                    int temporary = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = temporary;
                }
            }
            // After each pass, the next largest element is set to its correct position
        }
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
        int arrayLength = array.length;

        // Start from the second element (index 1)
        for (int index = 1; index < arrayLength; index++) {
            // currentValue is the element we want to place at the correct position in the sorted part
            int currentValue = array[index];

            // compare it with the element before currentValue
            int position = index;

            // Second loop:
            // Shift elements of the sorted part of the array that are greater than currentValue
            // one position to the right to make room for currentValue
            while (position > 0 && array[position - 1] > currentValue) {
                array[position] = array[position - 1]; // Move the larger element one position to the right
                // Move position index to the previous position
                // where correct placed currentValue will be inserted
                position--;
            }

            // Place currentValue at its correct position so that elements before it are sorted
            array[position] = currentValue;
        }
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
        // Only proceed if there are at least two elements to sort
        if (left < right) {
            // Partition the array: place one element ('pivot element') in its correct position
            // All elements smaller than pivot are moved to its left
            // All elements greater are moved to its right
            int partitionIndex = partition(array, left, right);

            // Recursively apply quicksort to the left partition (elements before pivot)
            quickSort(array, left, partitionIndex - 1);

            // Recursively apply quicksort to the right partition (elements after pivot)
            quickSort(array, partitionIndex + 1, right);
        }
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
        // Choose the last element as the pivot (convenience)
        int pivot = array[right];

        // i is the index of the smaller element
        // it starts one position before the 'left' index
        // initially setting i to -1 (aso left is 0 at the beginning)
        int i = left - 1;

        // j goes from left to right-1 (one before pivot)
        for (int j = left; j < right; j++) {
            // If current element is smaller than pivot
            if (array[j] < pivot) {
                i++; // Move i to the right, to make room for a smaller element

                // Swap array[i] and array[j] (smaller element)
                // so that smaller elements stay on the left
                int temporary = array[i];
                array[i] = array[j];
                array[j] = temporary;
            }
        }

        // After the loop, place the pivot after the last smaller element
        // So that pivot is at its correct sorted position
        // and all smaller values are on the left side, greater values on the right
        int temporary = array[i + 1];
        array[i + 1] = array[right];
        array[right] = temporary;

        // Return the index where the pivot is placed
        return i + 1;
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
        // Check if there are at least two elements to sort in array
        if (left < right) {
            // Find the middle index to divide the array into two halves
            int middle = (left + right) / 2;

            // Recursively sort the first half
            // Each recursive call runs itself again until there is only one element in first half
            // then starts with the recursive returns and continues to recurse calls of second half
            mergeSort(array, left, middle);

            // Recursively sort the second half
            mergeSort(array, middle + 1, right);

            // Merge the two sorted halves
            // Is only called when array is split in all recursive parts
                // means: Array is split in many recursive sub-parts
                    // containing a left and a right value
            // merge function then recursively merges the small parts into greater parts
            // until the whole array is sorted
            merge(array, left, middle, right);
        }
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
        // Find lengths of the two subarrays to be merged
        // in first call this will just be one value per subarray
        int leftArrayLength = middle - left + 1;
        int rightArrayLength = right - middle;

        // Create temporary arrays to hold the elements of the two halves
        int[] leftArray = new int[leftArrayLength];
        int[] rightArray = new int[rightArrayLength];

        // Copy the data into the temporary arrays
        for (int i = 0; i < leftArrayLength; ++i)
            leftArray[i] = array[left + i];
        for (int j = 0; j < rightArrayLength; ++j)
            rightArray[j] = array[middle + 1 + j];

        // Initial indexes of first and second subarrays
        int i = 0;
        int j = 0;

        // Initial index of the merged subarray
        int k = left;

        // Compare elements from leftArray and rightArray
        // and copy the smaller one into the original array
        while (i < leftArrayLength && j < rightArrayLength) {
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }

        // Copy any remaining elements from leftArray
        // (RightArray is already copied if exhausted)
        while (i < leftArrayLength) {
            array[k] = leftArray[i];
            i++;
            k++;
        }

        // Copy any remaining elements from rightArray
        while (j < rightArrayLength) {
            array[k] = rightArray[j];
            j++;
            k++;
        }
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