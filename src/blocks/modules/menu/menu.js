const $toggleMenu = document.querySelector('#toggle_menu')
const $menuWrapper = document.querySelector('.menu_wrapper')
const $closeMenu = document.querySelector('.menu_wrapper__close')
let svg

if ($closeMenu) {
    svg = $closeMenu.querySelector('svg')
}

const toggleMenu = () => {
    $menuWrapper.classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
    document.querySelector('.wrapper').classList.toggle('blurred');
}

$toggleMenu.addEventListener('click', e => {
    toggleMenu()
    setTimeout(() => {
        svg.classList.add('animate')
        setTimeout(() => {
            svg.classList.remove('animate')
        }, 600)
    }, 500)
})

$closeMenu.addEventListener('click', e => {
    toggleMenu()
})