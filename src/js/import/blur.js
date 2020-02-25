const blurOnHover = (selector, cb, execute = false) => {
    let blur = execute ? 'empty' : 'light_blurred'
    if (!execute && document.documentElement.clientWidth <= 750) {
        return
    }
    const items = document.querySelectorAll(selector)
    for (let i = 0; i < items.length-1; i++) {
        items[i].addEventListener('mouseenter', function() {
            this.classList.add('hover')
            blurAll()
        })

        items[i].addEventListener('mouseleave', function() {            
            this.classList.remove('hover')
            unBlurAll()
            if (cb) {
                cb()
            } 
        })
    }

    const blurAll = () => {
        const items = document.querySelectorAll(selector)
        for (let i = 0; i < items.length-1; i++) {
            if (selector === '.logos__image') {
                items[i].classList.add('hover_js')
            }
            if (!items[i].classList.contains('hover')) {
                items[i].classList.add(blur)
            }
        }
    }
    const unBlurAll = () => {
        const items = document.querySelectorAll(selector)
        for (let i = 0; i < items.length-1; i++) {
            items[i].classList.remove(blur, 'hover_js')
        }
    }
}

blurOnHover('.process__item', function() {
    document.querySelector('.process__wrapper').addEventListener('mouseleave', function() {
        this.closest('.process').classList.remove('loaded')
        setTimeout(() => {
            this.closest('.process').classList.add('loaded')
        }, 0)
    })    
})
blurOnHover('.logos__image', null, true)