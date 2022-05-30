window.addEventListener('scroll', backToTop)

function backToTop() {
  if (scrollY > 250) {
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
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