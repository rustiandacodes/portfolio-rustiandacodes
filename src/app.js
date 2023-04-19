const menu = document.querySelector('#menu')
const navbar = document.querySelector('#navbar-mobile')

const homeLink = document.querySelector('.home')
const aboutLink = document.querySelector('.about')
const projectsLink = document.querySelector('.projects')
const contactLink = document.querySelector('.contact')
console.log('berhassil')

const toogle = () => {
  navbar.classList.toggle('show')
}

menu.addEventListener('click', () => {
  toogle()
})

homeLink.addEventListener('click', () => {
  toogle()
})
aboutLink.addEventListener('click', () => {
  toogle()
})
projectsLink.addEventListener('click', () => {
  toogle()
})
contactLink.addEventListener('click', () => {
  toogle()
})
