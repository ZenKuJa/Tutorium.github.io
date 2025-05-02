async function loadComponent(url, targetId) {

  let hostName = window.location.href;
  if (hostName.includes("localhost")){
    console.log("localHost");
    document.head.innerHTML = document.head.innerHTML + "<base href=\"http://localhost:8000/\">"
  } else if (hostName.includes("zenkuja.github.io/TutoriumTesting.github.io")){
    console.log("GitHub");
    document.head.innerHTML = document.head.innerHTML + "<base href=\"https://zenkuja.github.io/TutoriumTesting.github.io/\">"
  }

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
    loadComponent('components/footer.html', 'footer-container');
    loadComponent('components/navbar.html' , 'navbar-container');
    loadComponent('components/header.html', 'header-container');
  });