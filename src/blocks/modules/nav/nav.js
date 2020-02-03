document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('toggle_menu')
    menu.classList.add('load')

    const navInner = document.querySelector('.nav--inner')
    const navHome = document.querySelector('.nav--home')
    const navWorks = document.querySelector('.nav_works')
    const navLang = document.querySelector('.nav__toggle_lang')
    let offset
    if (navWorks) {
        offset = navWorks.offsetTop
    }

    const setGridMarginTop = (mobile = false) => {
        const grid = document.querySelector('.grid_works')
        if (grid) {
            if (!mobile) {
                if (document.documentElement.clientWidth >= 992 && navWorks.classList.contains('fixed')) {
                    grid.style.marginTop = navWorks.clientHeight + 'px'
                }
            } else {
                grid.style.marginTop = navHome.clientHeight + navWorks.clientHeight + 'px'
            }
        }
    }

    const deleteMarginTop = () => {
        document.querySelector('.grid_works').style.marginTop = 'auto'
    }

    setGridMarginTop()

    window.addEventListener('resize', () => {
        setGridMarginTop()
    })

    window.addEventListener('scroll', function() {
        if (this.scrollY > 0) {
            if (navInner) {
                navInner.classList.add('shadow')
            }
            if (navHome) {
                navHome.classList.add('no-border')
            }
        } else {
            if (navHome) {
                navHome.classList.remove('no-border')
            }
            if (navInner) {
                navInner.classList.remove('shadow')
            }
        }

        if (document.documentElement.clientWidth >= 769) {
            if (this.scrollY >= 18 && navHome) {
                navHome.classList.add('offset_lang')
            } else {
                navHome.classList.remove('offset_lang')
            }
            if (navWorks) {            
                if (this.scrollY >= offset-12) {
                    navWorks.classList.add('fixed', 'shadow')
                    setGridMarginTop()
                } else {
                    navWorks.classList.remove('fixed', 'shadow')
                    deleteMarginTop()
                }
            }
        } else {
            if (this.scrollY > 0 && navWorks) {
                navWorks.classList.add('mobile-offset')
            } else {
                navWorks.classList.remove('mobile-offset')
            }
            setGridMarginTop(true)
        }
    })
})