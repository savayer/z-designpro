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
    
        const navWorksSection = document.querySelector('.nav_works')
        navWorksSection.addEventListener('click', function (e) {
            if (!matchesSelector(e.target, 'li.nav_works__item')) {
                return
            }
            removeActive()
            e.target.classList.add('active-work')
    
            let filterValue = e.target.getAttribute('data-filter')
            iso.arrange({ filter: filterValue })
            
                grid.classList.add('animate-items')
            
            setTimeout(() => {
                grid.classList.remove('animate-items')
            }, 300)
        });
    })
}

window.addEventListener('load', () => {
    document.querySelector('.footer').classList.remove('none')
})