const blurOnHover = (selector, hideOnMobile = false, cb) => {
    if (document.documentElement.clientWidth <= 750 && hideOnMobile) {
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
                item.classList.add('light_blurred')
            }
        })
    }
    const unBlurAll = () => {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove('light_blurred', 'hover_js')
        })
    }
}

blurOnHover('.services__item', true)
blurOnHover('.process__item', true, function() {
    document.querySelector('.process__wrapper').addEventListener('mouseleave', function() {
        this.closest('.process').classList.remove('loaded')
        setTimeout(() => {
            this.closest('.process').classList.add('loaded')
        }, 0)
    })    
})
blurOnHover('.post__wrapper', true)
blurOnHover('.logos__image')