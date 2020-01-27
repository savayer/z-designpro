document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('toggle_menu')
    menu.classList.add('load')

    const nav = document.querySelector('.nav')
    const navWorks = document.querySelector('.nav_works')

    const setGridMarginTop = () => {
        const grid = document.querySelector('.grid_works')
        if (grid) {
            grid.style.marginTop = navWorks.clientHeight + nav.clientHeight + 40+ 'px'
        }
    }

    setGridMarginTop()

    window.addEventListener('resize', () => {
        setGridMarginTop()
    })

    window.addEventListener('scroll', function() {    
        if (location.pathname === '/') {
            if (this.scrollY > 0) {
                navWorks.classList.add('shadow')
            } else {
                navWorks.classList.remove('shadow')
            }
        } else {            
            if (this.scrollY > 0) {
                nav.classList.add('shadow')
            } else {
                nav.classList.remove('shadow')
            }
        }
    })
})