window.addEventListener('load', () => {
    document.querySelector('.hidden').style.display = 'block';

    document.body.classList.remove('overflow-hidden')
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('hide')    

    const grid = document.querySelector('.grid_works')    
    if (grid) {        
        if (!localStorage.getItem('animated')) {
            const masonry = grid.firstElementChild
            const clone = masonry.cloneNode(true)
            clone.classList.add('delete-after-animation')
            grid.insertAdjacentElement('afterbegin', clone)        
            grid.insertAdjacentElement('afterbegin', clone.cloneNode(true))        
            grid.insertAdjacentElement('afterbegin', clone.cloneNode(true))
            grid.insertAdjacentElement('afterbegin', clone.cloneNode(true))
            grid.insertAdjacentElement('afterbegin', clone.cloneNode(true))
    
            grid.addEventListener('animationend', (e) => {
                if (e.animationName !== 'mainAnimate') return;
                //console.log('done', e)
                document.querySelectorAll('.delete-after-animation').forEach(node => node.remove())
                grid.classList.remove('main-animate')
                localStorage.setItem('animated', true)
            })
            grid.classList.add('main-animate')
        } else {        
            grid.classList.add('animate-items')
            setTimeout(() => {
                grid.classList.remove('animate-items')
            }, 300)
        }
    }
})