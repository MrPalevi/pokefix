import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/DetailView',
            name: 'DetailView',
            component: () =>
                import ('../views/DetailView.vue')
        },
        {
            path: '/CatchView',
            name: 'CatchVew',
            component: () =>
                import ('../views/CatchView.vue')
        },
        {
            path: '/App',
            name: 'App',
            component: () =>
                import ('/src/App.vue')
        }
    ]
})

export default router