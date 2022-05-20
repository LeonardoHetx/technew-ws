function onScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll')
   } else {
      navigation.classList.remove('scroll')
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded')
}

function closeMenu() {
   document.body.classList.remove('menu-expanded')
}

ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 700
}).reveal(`
   #home, 
   #home img, 
   #home .stat, 
   #services,
   #services header,
   #services .card,
   #about,
   #about header,
   #about .content,
   #about .content img`);