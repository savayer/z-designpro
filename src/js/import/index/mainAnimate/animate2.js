window.addEventListener('load', () => {
    document.body.classList.remove('overflow-hidden')
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('hide')
    setTimeout(() => {
        preloader.classList.add('none')
    }, 600)

    const start = new Date()
    const columns = document.querySelectorAll('.m-minus-top')
    const grid = document.querySelector('.grid_works')
    let pos = 0

    let rowNumber = [0,0,0]
    function animate() {
        const now = new Date()
        grid.style.transform = `translateY(${pos}px)`
        pos -= 100

        columns.forEach((column, index) => {        
            const items = column.querySelectorAll('.grid_works__item')
            const rows = items.length
            if (rows-1 < rowNumber[index]) rowNumber[index] = 0
            let item = items[rowNumber[index]]
            const heightItem = 400//item.clientHeight + parseInt(getComputedStyle(item).marginBottom)

            if (Math.abs(pos) % heightItem === 0) {
                const clone = item.cloneNode(true)
                column.appendChild(clone)
                //column.removeChild(item)
            }
        })
        rowNumber[0]++
        rowNumber[1]++
        rowNumber[2]++
        if (now - start < 5000) {
            requestAnimationFrame(animate);
        }
    }

    animate()
})