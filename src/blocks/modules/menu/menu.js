const $toggleMenu = document.querySelector('#toggle_menu')
const $menuWrapper = document.querySelector('.menu_wrapper')
const $closeMenu = document.querySelector('.menu_wrapper__close')

const toggleMenu = () => {
    $menuWrapper.classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
    document.querySelector('.wrapper').classList.toggle('blurred');
}

$toggleMenu.addEventListener('click', e => {
    toggleMenu()
})

$closeMenu.addEventListener('click', e => {
    toggleMenu()
})