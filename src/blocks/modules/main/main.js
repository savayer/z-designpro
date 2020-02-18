import Vue from '../../../js/import/vue.esm.browser.min'
import VueMasonry from 'vue-masonry-css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    lazyComponent: true,
    loading: '../../../img/loading.gif'
});
Vue.use(VueMasonry)

if (document.documentElement.clientWidth > 500) {
    const app = new Vue({
        el: '#app',
        data: {
            projectName: 'Test project',
            projectDescription: 'Full Branding Model',
            viewProject: false,
            works: [],
            filter: 'w-web',
            projectMedia: null,
            projectMediaAll: [],
            hiddenBody: false,
            handleScroll: null,
            categories: {
                'w-web': 'Web',
                'w-saas': 'Ui/Ux, Saas',
                'w-mobile': 'Mobile',
                'w-wireframes': 'Wireframes',
                'w-logo': 'Logo',
                'w-tablet': 'Tablet Apps',
                'w-print': 'Print',
                'w-branding': 'Branding',
                'w-presentations': 'Presentations',
            },
            currentIndexWork: null,
            disabledPrevArrow: false,
            disabledNextArrow: false,
        },
        computed: {
            filtered() {
                return this.works.filter(work => work.category === this.filter)
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
                this.disabledPrevArrow = !this.filtered[this.currentIndexWork - 1] ? true : false
                this.disabledNextArrow = !this.filtered[this.currentIndexWork + 1] ? true : false
            },
            switchToChosenWork() {
                this.projectMedia = null
                this.checkDisabledArrows()
                const currentWork = this.filtered[this.currentIndexWork]
                if (currentWork) {
                    this.projectName = currentWork.name
                    this.projectDescription = currentWork.description
                    this.hiddenBody = true
                    setTimeout(() => {
                        this.projectMedia = currentWork.media
                        this.hiddenBody = false
                    }, 100)
                    setTimeout(() => {
                        document.querySelector('.work').scrollTop = 0
                    }, 0)
                } else {
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
            },
            prevProject() {
                if (this.disabledPrevArrow) return;
                this.currentIndexWork--
                this.switchToChosenWork()
            },
            nextProject() {
                if (this.disabledNextArrow) return;
                this.currentIndexWork++
                this.switchToChosenWork()
            }
        },
        mounted() {
            const categories = Object.keys(this.categories)
            let categoryIterator = 0
            let imageIterator = 1

            for (let i = 0; i < 130; i++) {
                if (imageIterator === 19) {
                    imageIterator = 1
                }
                if (categoryIterator === 10) {
                    categoryIterator = 0
                }
                const url = `../../../img/works/${imageIterator}.png`
                this.preloadImage(url)

                this.works.push({
                    id: i + 1,
                    name: `Test project ${i + 1}`,
                    description: '',
                    slug: `test-project-${i + 1}`,
                    image: url,
                    category: categories[categoryIterator],
                    media: null
                })
                categoryIterator++
                imageIterator++
            }
            this.works[10].media = [
                '../../../img/works_view/2.png',
                '../../../img/works_view/3.png',
                '../../../img/works_view/4.png',
                '../../../img/works_view/5.png',
            ]
            this.works[20].media = [
                '../../../img/works_view/6.png',
                '../../../img/works_view/7.png',
                '../../../img/works_view/8.png',
                '../../../img/works_view/9.png',
                '../../../img/works_view/10.png',
            ]
            this.works[20].name = 'Galim project'
            this.works[20].slug = 'galim-project'
            this.works[20].description = 'Full branding model'
            this.works[0].media = [
                '../../../img/works_view/1.png',
                {
                    type: 'video',
                    src: 'https://www.youtube.com/embed/DyDfgMOUjCI'
                }
            ]
        }
    })
}

if (document.documentElement.clientWidth <= 500) {
    document.querySelector('.work__header').classList.remove('work__header--desk_view')
    const app = new Vue({
        el: '#app',
        data: {
            projectName: 'Test project',
            projectDescription: 'Full Branding Model',
            viewProject: false,
            works: [],
            filter: 'w-web',
            projectMedia: null,
            projectMediaAll: [],
            hiddenBody: false,
            categories: {
                'w-web': 'Web',
                'w-saas': 'Ui/Ux, Saas',
                'w-mobile': 'Mobile',
                'w-wireframes': 'Wireframes',
                'w-logo': 'Logo',
                'w-tablet': 'Tablet Apps',
                'w-print': 'Print',
                'w-branding': 'Branding',
                'w-presentations': 'Presentations',
            },
            currentIndexWork: null,
            disabledPrevArrow: false,
            disabledNextArrow: false,
            currentIndex: 0
        },
        computed: {
            filtered() {
                return this.works.filter(work => work.category === this.filter)
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
            loadWorks() {
                const index = this.currentIndex
                this.projectName = this.filtered[index].name
                this.projectDescription = this.filtered[index].description
                this.projectMediaAll = []
                
                this.filtered.forEach(work => {
                    const mediaInfo = {
                        name: work.name,
                        description: work.description,
                        media: work.media
                    }
                    this.projectMediaAll.push(mediaInfo)
                })
                window.history.pushState(null, null, '#projects')
                window.dispatchEvent(new Event('popstate'))
                setTimeout(() => {
                    document.querySelector('.work').scrollTop = document.querySelector('.work__body').children[index].offsetTop - 87
                    this.scroll()
                }, 0)
            },
            scroll() {
                const projects = document.querySelectorAll('.work__project')
                document.querySelector('.work').onscroll = e => {
                    let currentScroll = e.target.scrollTop

                    for (let p of projects) {
                        if (p.offsetTop - 87 <= currentScroll) {
                            this.projectName = p.dataset.name
                            this.projectDescription = p.dataset.description
                        }
                    }
                }
            },
            popupProjectToggle(index) {
                this.currentIndex = index
                if (this.filter === 'w-logo') return false
                this.loadWorks()
                document.querySelector('.overlay-project').classList.toggle('active')
                this.viewProject = !this.viewProject
            }
        },
        created() {
            window.onpopstate = e => {
                if (this.viewProject && e.isTrusted) {
                    document.querySelector('.overlay-project').classList.remove('active')
                    this.viewProject = false
                }
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
                    id: i + 1,
                    name: `Test project ${i + 1}`,
                    description: '',
                    slug: `test-project-${i + 1}`,
                    image: url,
                    category: categories[categoryIterator],
                    images: null
                })
                categoryIterator++
                imageIterator++
            }
            this.works[10].media = [
                '../../../img/works_view/2.png',
                '../../../img/works_view/3.png',
                '../../../img/works_view/4.png',
                '../../../img/works_view/5.png',
            ]
            this.works[20].media = [
                '../../../img/works_view/6.png',
                '../../../img/works_view/7.png',
                '../../../img/works_view/8.png',
                '../../../img/works_view/9.png',
                '../../../img/works_view/10.png',
            ]
            this.works[20].name = 'Galim project'
            this.works[20].slug = 'galim-project'
            this.works[20].description = 'Full branding model'
            this.works[0].media = [
                '../../../img/works_view/1.png',
                {
                    type: 'video',
                    src: 'https://www.youtube.com/embed/DyDfgMOUjCI'
                }
            ]
        }
    })
}
