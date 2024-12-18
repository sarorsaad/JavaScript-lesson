// Add this script to each HTML file
document.addEventListener('DOMContentLoaded', function() {
    // Create navigation bar
    const nav = document.createElement('nav');
    nav.className = 'nav-bar';
    
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';
    
    const backLink = document.createElement('a');
    backLink.href = 'index.html';
    backLink.className = 'back-home';
    backLink.innerHTML = '<i class="fas fa-chevron-left"></i> Back to Home';
    
    const pageTitle = document.createElement('h1');
    pageTitle.className = 'page-title';
    pageTitle.textContent = document.title.split('-')[0].trim();
    
    navContainer.appendChild(backLink);
    navContainer.appendChild(pageTitle);
    nav.appendChild(navContainer);
    
    // Add navigation bar as the first element in body
    document.body.insertBefore(nav, document.body.firstChild);
    
    // Add padding to body
    document.body.style.paddingTop = '0';
});
