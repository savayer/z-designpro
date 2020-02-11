import Vue from '../../../js/import/vue.esm.browser'

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
        }
    },
    mounted() {
        const categories = Object.keys(this.categories)
        let categoryIterator = 0
        let imageIterator = 1

        for (let i = 0; i < 25; i++) {
            if (imageIterator === 19) {
                imageIterator = 1
            }
            if (categoryIterator === 10) {
                categoryIterator = 0
            }
            this.works.push({
                id: i+1,
                name: `Test project ${i+1}`,
                image: `../../../img/works/${imageIterator}.png`,
                category: categories[categoryIterator]
            })
            categoryIterator++
            imageIterator++
        }
    }
})
