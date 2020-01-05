const $toggleMenu = document.querySelector('#toggle_menu')
const $menuWrapper = document.querySelector('.nav__menu_wrapper')
const $closeMenu = document.querySelector('.nav__menu_close')

const toggleMenu = () => {
    $menuWrapper.classList.toggle('active')
}

$toggleMenu.addEventListener('click', e => {
    toggleMenu()
})

$closeMenu.addEventListener('click', e => {
    toggleMenu()
})