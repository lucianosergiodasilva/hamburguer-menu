const menuBurger = document.getElementById('menuBurger')
const menuPrincipal = document.querySelector('.menuPrincipal')
const iconMenu = document.querySelector('#menuBurger .iconMenu')

iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('fa-bars')
    iconMenu.classList.toggle('fa-xmark')
    menuBurger.classList.toggle('ativo')
})

document.addEventListener('click', function (e) {
    if(e.target.className === ''){
        iconMenu.classList.add('fa-bars')
        iconMenu.classList.remove('fa-xmark')
        menuBurger.classList.remove('ativo')
    }
})