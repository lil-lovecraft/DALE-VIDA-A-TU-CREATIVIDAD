const hamburguer = document.querySelector('.menuToggle')
const menu = document.querySelector('.menuToggle')
const navegation = document.querySelector('.navegation')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("active")
    navegation.classList.toggle("active")
})


const menuLinks = document.querySelectorAll('.navegation a[href^="#"]')

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        menu.classList.remove("navegation")
 })
})