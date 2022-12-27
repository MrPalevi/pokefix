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
        },
        {
            path: '/History',
            name: 'History',
            component: () =>
                import ('../views/History.vue')
        },
        {
            path: '/TangkapPoke',
            name: 'TangkapPoke',
            component: () =>
                import ('../views/TangkapPoke.vue')
        },
        {
            path: '/LoadingTrow',
            name: 'LoadingTrow',
            component: () =>
                import ('../views/LoadingTrow.vue')
        },
        {
            path: '/TEST/:id',
            name: 'TEST',
            component: () =>
                import ('../views/TEST.vue')
        }
    ]
})

export default router