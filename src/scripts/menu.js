// document.querySelector('.hamburger').addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('expanded');
//   });
// document.addEventListener('astro:page-load', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('nav ul');
  
//     hamburger.addEventListener('click', () => {
//       hamburger.classList.toggle('active');
//       navMenu.classList.toggle('show');
//     });
//   });
// document.addEventListener('astro:page-load', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('nav ul');
  
//     hamburger.addEventListener('click', () => {
//       hamburger.classList.toggle('active');
//       navMenu.classList.toggle('show');
      
//       // Toggle aria-expanded attribute
//       const expanded = hamburger.classList.contains('active');
//       hamburger.setAttribute('aria-expanded', expanded);
//     });
//   });
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