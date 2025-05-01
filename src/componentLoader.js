async function loadComponent(url, targetId) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.innerHTML = html;
      } else {
        console.error(`Ziel-Element mit der ID "${targetId}" nicht gefunden.`);
      }
  
    } catch (error) {
      console.error(`Konnte Komponente von ${url} nicht laden:`, error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadComponent('/TutoriumTesting.github.io/components/footer.html', 'footer-container');
    loadComponent('/TutoriumTesting.github.io/components/navbar.html' , 'navbar-container');
    loadComponent('/TutoriumTesting.github.io/components/header.html', 'header-container');
  });