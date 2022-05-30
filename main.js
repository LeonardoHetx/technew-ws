window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()
   activateMenuAtCurrentSection(home)
}

function activateMenuAtCurrentSection(section){
   const targetLine = scrollY + innerHeight / 2
   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight

   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
   console.log(sectionTopReachOrPassedTargetLine)
   console.log(targetLine)
   console.log(sectionTop)

   const sectionEndsAt = sectionTop + sectionHeight
   console.log(sectionEndsAt)
}

function showNavOnScroll(){
   if (scrollY > 0) {
      navigation.classList.add('scroll')
   } else {
      navigation.classList.remove('scroll')
   }
}

function showBackToTopButtonOnScroll(){
   if (scrollY > 1400) {
      backToTopButton.classList.add('show')
   } else {
      backToTopButton.classList.remove('show')
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