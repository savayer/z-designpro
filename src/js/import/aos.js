import AOS from 'aos'

AOS.init({
    disable: () => document.documentElement.clientWidth > 900
})