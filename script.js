async function loadComponent(url, targetId) {
    try {
      // 1. Versuche, die HTML-Datei von der angegebenen URL abzurufen
      const response = await fetch(url);
  
      // 2. Überprüfe, ob das Abrufen erfolgreich war (Statuscode 200 bedeutet "OK")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // 3. Lese den Inhalt der Antwort als Text (das wird unser HTML sein)
      const html = await response.text();
  
      // 4. Finde das HTML-Element in unserer Hauptseite mit der angegebenen ID
      const targetElement = document.getElementById(targetId);
  
      // 5. Füge den abgerufenen HTML-Inhalt in dieses Element ein
      if (targetElement) {
        targetElement.innerHTML = html;
      } else {
        console.error(`Ziel-Element mit der ID "${targetId}" nicht gefunden.`);
      }
  
    } catch (error) {
      // Wenn beim Abrufen oder Verarbeiten ein Fehler aufgetreten ist, gib eine Fehlermeldung aus
      console.error(`Konnte Komponente von ${url} nicht laden:`, error);
    }
  }
  
  // Warten, bis das gesamte HTML-Dokument geladen und bereit ist
  document.addEventListener('DOMContentLoaded', () => {
    // Rufe die loadComponent-Funktion für jede deiner Komponenten auf
    loadComponent('footer.html', 'footer-container');
  });