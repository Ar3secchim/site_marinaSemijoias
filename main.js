window.addEventListener('scroll', backToTop)

function onScroll(){
  navOnScroll();
  backToTop();
}

function navOnScroll(){
  if (scrollY > 0) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
}

function backToTop() {
  if (scrollY > 250) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin:'top',
  distance: '50px',
  duration:800,
}).reveal(`#home,
  #home img, 
  #home .stats,
  #services header,
  #services .services-section,
  #about header,
  #about .content,
  #contact header
`)