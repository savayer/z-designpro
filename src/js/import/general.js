const blurOnHover = selector => {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover')
            blurAll()
        })

        item.addEventListener('mouseleave', function() {            
            this.classList.remove('hover')
            unBlurAll()
        })
    })

    const blurAll = () => {
        document.querySelectorAll(selector).forEach(item => {
            if (!item.classList.contains('hover')) {
                item.classList.add('light_blurred')
            }
        })
    }
    const unBlurAll = () => {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove('light_blurred')
        })
    }
}

blurOnHover('.services__item')
blurOnHover('.process__item')