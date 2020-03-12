document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('toggle_menu')
    menu.classList.add('load')

    menu.addEventListener('mouseover', e => {
        menu.classList.add('mouseover')
        menu.classList.remove('mouseout')
    })

    menu.addEventListener('mouseout', e => {
        menu.classList.add('mouseout')
        menu.classList.remove('mouseover')
    })

    const navInner = document.querySelector('.nav--inner')
    const navHome = document.querySelector('.nav--home')
    const navWorks = document.querySelector('.nav_works')
    const navLang = document.querySelector('.nav__toggle_lang')
    let offset
    if (navWorks) {
        offset = navWorks.offsetTop
        if (!offset) offset = 135
    }

    const setGridMarginTop = (mobile = false) => {
        const grid = document.querySelector('.grid_works')
        if (grid) {
            if (!mobile) {
                if (document.documentElement.clientWidth >= 992 && navWorks.classList.contains('fixed')) {
                    grid.style.marginTop = navWorks.clientHeight + 'px'
                }
            } else {
                grid.style.marginTop = navHome.clientHeight + navWorks.clientHeight + 13 + 'px'
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
            if (navHome) {
                if (this.scrollY >= 18) {
                    navHome.classList.add('offset_lang')
                } else {
                    navHome.classList.remove('offset_lang')
                }                
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
            if (navWorks) {
                if (this.scrollY > 0) {
                    navWorks.classList.add('mobile-offset')
                } else {
                    navWorks.classList.remove('mobile-offset')
                }
            }
            setGridMarginTop(true)
        }
    })
})