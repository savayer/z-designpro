window.addEventListener('load', () => {
    document.body.classList.remove('overflow-hidden')
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('hide')

    const cloneFewTimes = (amount) => {
        let items = {}
        const columns = document.querySelectorAll('.m-minus-top')
        columns.forEach((column, index) => {
            let localItems = []
            column.querySelectorAll('.grid_works__item').forEach(item => {
                const cloned = item.cloneNode(true)
                cloned.classList.add('delete-after-animation')
                localItems.push(cloned)                
            })
            items[index] = localItems
            localItems = []

            for (let i = 0; i < amount; i++) {                
                for (let item of items[index]) {
                    column.append(item.cloneNode(true))
                }
            }
        })
    }    

    const grid = document.querySelector('.grid_works')
    if (grid) {
        cloneFewTimes(10)
        grid.addEventListener('animationend', (e) => {
            if (e.animationName !== 'mainAnimate') return;
            console.log('done', e)
            document.querySelectorAll('.delete-after-animation').forEach(node => node.remove())
            grid.classList.remove('main-animate')
        })
        grid.classList.add('main-animate')
    }
})