---
title: Event-Logger  
parent: Text Aufgaben
nav_order: 4
layout: default
---

# Event-Logger mit flexibler Protokollierung und Fehlermeldungen

## Kundenanforderung

Für unsere neue Anwendung benötigen wir einen Event-Logger. Dieser Logger soll Systemereignisse protokollieren können. Im Fehlerfall sollen spezifische Ausnahmen (Exceptions) geworfen und behandelt werden, um die Anwendung stabil zu halten. Weiterhin ist es uns wichtig, dass der Logger nicht nur einfache Textnachrichten, sondern auch komplexere Objekte protokollieren kann und dabei eine gewisse Performance aufweist.

<details>
    <summary>
        Diese Themengebiete solltet ihr verwenden
    </summary>
    <ul>
        <li>Exception Types/ Exception Handling: Für die Fehlerbehandlung und das Werfen spezifischer Ausnahmen.</li>
        <li>File Streams/ File Buffering: Zum effizienten Schreiben der Protokolldaten in eine Datei.</li>
        <li>Optional: Zur Vermeidung von NullPointerExceptions, wenn beispielsweise keine Daten zum Loggen vorliegen.</li>
    </ul>
</details>