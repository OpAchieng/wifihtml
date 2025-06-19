// script.js

// Load the navbar dynamically from navbar.html
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading the navbar:', error);
  });
