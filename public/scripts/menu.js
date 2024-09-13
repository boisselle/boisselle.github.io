console.log('menu.js loaded');
document.addEventListener('astro:page-load', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
  
    if (hamburger) {
      console.log('Hamburger element found');
      hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
        
        console.log('Active class:', hamburger.classList.contains('active'));
        
        const expanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', expanded);
      });
    } else {
      console.log('Hamburger element not found');
    }
  });