import Vue from '../../../js/import/vue.esm.browser'
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry)

new Vue({
    el: '#app',    
    data: {
        projectName: 'Test project',
        projectDescription: 'Full Branding Model',
        showGoToSite: true,
        viewProject: false,
        works: [],
        filter: 'w-web',
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
                image: url,
                category: categories[categoryIterator]
            })            
            categoryIterator++
            imageIterator++
        }
    }
})
