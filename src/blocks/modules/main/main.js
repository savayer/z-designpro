import Vue from '../../../js/import/vue.esm.browser'
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry)

new Vue({
    el: '#app',    
    data: {
        projectName: 'Test project',
        projectDescription: 'Full Branding Model',
        viewProject: false,
        works: [],
        filter: 'w-web',
        projectMedia: null,
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
        }
    },
    computed: {
        filtered() {
            return this.works.filter(work => work.category === this.filter)
        }
    },
    methods: {
        setActive(category) {
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
        popupProjectToggle(currentWork) {
            document.body.classList.toggle('overflow-hidden')
            document.querySelector('.overlay-project').classList.toggle('active')
            if (currentWork) {
                this.projectName = currentWork.name
                this.projectDescription = currentWork.description
                this.projectMedia = currentWork.images
            }

            this.viewProject = !this.viewProject
            /* const scroll = document.documentElement.scrollTop
            setTimeout(() => {
                document.documentElement.scrollTop = scroll
            }, 0) */
        },
        prevProject() {

        },
        nextProject() {

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
