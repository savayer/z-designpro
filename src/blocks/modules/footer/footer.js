import $ from 'jquery'

window.addEventListener('load', () => {
    const footer = document.querySelector('.footer')
    footer.classList.remove('none')
})

$('.footer__go_up a').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 800)
})