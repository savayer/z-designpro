import Vue from '../../../js/import/vue.esm.browser.min'
import VueMasonry from 'vue-masonry-css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueMasonry)
Vue.use(VueLazyload)

const app = new Vue({
    el: '#app',    
    data: {
        projectName: 'Test project',
        projectDescription: 'Full Branding Model',
        viewProject: false,
        works: [],
        filter: 'w-web',
        projectMedia: null,
        hiddenBody: false,
        categories: {
            'w-web': 'Web',
            'w-saas': 'Ui/Ux, Saas',
            'w-mobile': 'Mobile',
            'w-wireframes': 'Wireframes',
            'w-logo': 'Logo',
            'w-tablet': 'Apps',
            'w-print': 'Print',
            'w-branding': 'Branding',
            'w-presentations': 'Presentations',
        },
        currentIndexWork: null,
        disabledPrevArrow: false,
        disabledNextArrow: false,
        route: ''
    },
    computed: {
        filtered() {
            return this.works.filter(work => work.category === this.filter)
        }
    },
    watch: {
        route(hash) {
            this.currentIndexWork = this.filtered.findIndex(project => project.slug === hash.slice(1))
        }
    },
    methods: {
        setActiveCategory(category) {
            this.filter = category
            const grid = document.querySelector('.grid_works')
            grid.classList.add('animate-items')
            setTimeout(() => {
                grid.classList.remove('animate-items')
            }, 300)
        },
        preloadImage(url) {
            const img = new Image()
            img.src = url
        },
        checkDisabledArrows() {
            this.disabledPrevArrow = !this.filtered[this.currentIndexWork-1] ? true : false
            this.disabledNextArrow = !this.filtered[this.currentIndexWork+1] ? true : false
        },
        switchToChosenWork() {
            this.checkDisabledArrows()
            const currentWork = this.filtered[this.currentIndexWork]
            if (currentWork) {
                this.projectName = currentWork.name
                this.projectDescription = currentWork.description                
                this.hiddenBody = true
                setTimeout(() => {
                    this.projectMedia = currentWork.images
                    this.hiddenBody = false
                }, 100)
                setTimeout(() => {
                    window.history.pushState(null, null, '#'+currentWork.slug)
                    window.dispatchEvent(new Event('popstate'))
                    document.querySelector('.work').scrollTop = 0
                }, 0)
            } else {
                window.history.pushState(null, null, '#')
                window.dispatchEvent(new Event('popstate'))
                this.projectMedia = null
            }
        },
        popupProjectToggle(index) {
            this.currentIndexWork = index
            this.switchToChosenWork()
            document.body.classList.toggle('overflow-hidden')
            document.querySelector('.overlay-project').classList.toggle('active')
            document.querySelector('.svg_arrow__chevron--right').classList.add('shaking-to-right')
            this.viewProject = !this.viewProject
            /* const scroll = document.documentElement.scrollTop
            setTimeout(() => {
                document.documentElement.scrollTop = scroll
            }, 0) */
        },
        prevProject() {
            if (this.disabledPrevArrow) return;
            this.projectMedia = null
            this.currentIndexWork--
            this.switchToChosenWork(this.currentIndexWork)
        },
        nextProject() {
            if (this.disabledNextArrow) return;
            this.projectMedia = null
            this.currentIndexWork++
            this.switchToChosenWork(this.currentIndexWork)
        }
    },
    mounted() {
        const categories = Object.keys(this.categories)
        let categoryIterator = 0
        let imageIterator = 1

        for (let i = 0; i < 100; i++) {
            if (imageIterator === 19) {
                imageIterator = 1
            }
            if (categoryIterator === 10) {
                categoryIterator = 0
            }
            const url = `../../../img/works/${imageIterator}.png`
            this.preloadImage(url)

            this.works.push({
                id: i+1,
                name: `Test project ${i+1}`,
                description: '',
                slug: `test-project-${i+1}`,
                image: url,
                category: categories[categoryIterator],
                images: null
            })
            categoryIterator++
            imageIterator++
        }
        this.works[10].images = [
            '../../../img/works_view/2.png',
            '../../../img/works_view/3.png',
            '../../../img/works_view/4.png',
            '../../../img/works_view/5.png',
        ]
        this.works[20].images = [
            '../../../img/works_view/6.png',
            '../../../img/works_view/7.png',
            '../../../img/works_view/8.png',
            '../../../img/works_view/9.png',
            '../../../img/works_view/10.png',
        ]
        this.works[0].images = [
            '../../../img/works_view/1.png',
        ]
    }
})

window.onpopstate = function(event) {
    app.route = document.location.hash
    //console.log(document.location.hash)
    /* if (!document.location.hash) {
        document.location.reload()
    } */
};