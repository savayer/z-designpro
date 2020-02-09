import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

const grid = document.querySelector('.grid_works')
if (grid) {
    imagesLoaded(grid, () => {
        const iso = new Isotope(grid, {
            itemSelector: '.grid_works__item',
            layoutMode: 'masonry',
            filter: '.w-web',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        })

        //iso.insert(document.querySelectorAll('.hidden .grid_works__item'))
        grid.classList.add('main-animate')

        const matchesSelector = (el, selector) => {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };
            return f.call(el, selector);
        }
    
        const removeActive = () => {
            document.querySelectorAll('.nav_works__item').forEach(item => {
                item.classList.remove('active-work')
            })
        }

        const setZIndex = (collection, remove = false) => {
            collection.forEach(item => {
                remove ? item.classList.remove('big-z-index') : item.classList.add('big-z-index')
            })
        }

        const animateItemsByChangeCategory = () => {
            grid.classList.add('animate-items')
            setTimeout(() => {
                grid.classList.remove('animate-items')
            }, 300)
        }
    
        const navWorksSection = document.querySelector('.nav_works')
        let filteredElements = null

        navWorksSection.addEventListener('click', function (e) {
            if (!matchesSelector(e.target, 'li.nav_works__item')) {
                return
            }
            removeActive()
            e.target.classList.add('active-work')
    
            const filterValue = e.target.getAttribute('data-filter')
            iso.arrange({ filter: filterValue })

            if (filteredElements) {
                setZIndex(filteredElements, true)
            }
            filteredElements = iso.getFilteredItemElements()
            setZIndex(filteredElements)

            animateItemsByChangeCategory()
        });
    })
}

window.addEventListener('load', () => {
    document.querySelector('.footer').classList.remove('none')
})