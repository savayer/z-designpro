const blurOnHover = (selector, cb, execute = false) => {
    let blur = execute ? 'empty' : 'light_blurred'
    if (!execute && document.documentElement.clientWidth <= 750) {
        return
    }
    const items = document.querySelectorAll(selector)
    
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover')
            blurAll()
        })

        item.addEventListener('mouseleave', function() {            
            this.classList.remove('hover')
            unBlurAll()
            if (cb) {
                cb()
            } 
        })
    })

    const blurAll = () => {
        document.querySelectorAll(selector).forEach(item => {
            if (selector === '.logos__image') {
                item.classList.add('hover_js')
            }
            if (!item.classList.contains('hover')) {
                item.classList.add(blur)
            }
        })
    }
    const unBlurAll = () => {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove(blur, 'hover_js')
        })
    }
}

blurOnHover('.services__item')
blurOnHover('.process__item', function() {
    document.querySelector('.process__wrapper').addEventListener('mouseleave', function() {
        this.closest('.process').classList.remove('loaded')
        setTimeout(() => {
            this.closest('.process').classList.add('loaded')
        }, 0)
    })    
})
blurOnHover('.post__wrapper')
blurOnHover('.logos__image', null, true)