const $toggleMenu = document.querySelector('[data-modal="contact"]')
const $contactWrapper = document.querySelector('#contact')
const $closeMenu = document.querySelector('.contact__close')

$toggleMenu.addEventListener('click', e => {
    e.preventDefault()
    $contactWrapper.classList.toggle('active')
})

$closeMenu.addEventListener('click', e => {
    e.preventDefault()
    $contactWrapper.classList.toggle('active')
})