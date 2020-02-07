import AOS from 'aos'

if (document.documentElement.clientWidth <= 900) {
    document.querySelectorAll('.process__item').forEach(item => {
        item.setAttribute('data-aos','fade-up-mini')
    })
    AOS.init()
}