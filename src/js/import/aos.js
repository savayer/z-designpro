import AOS from 'aos'

if (document.documentElement.clientWidth <= 900) {
    if (document.querySelector('.process__item')) {
        document.querySelectorAll('.process__item').forEach(item => {
            item.setAttribute('data-aos','fade-up-mini')
        })
        AOS.init()
    }
}

if (document.documentElement.clientWidth <= 750) {
    if (document.querySelector('.services__item')) {
        document.querySelectorAll('.services__item').forEach(item => {
            item.setAttribute('data-aos','fade-up-mini')
        })
        AOS.init()
    }
}