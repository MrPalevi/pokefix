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
        },
        {
            path: '/Stat',
            name: 'Stat',
            component: () =>
                import ('../views/Stat.vue')
        },
        {
            path: '/Moves',
            name: 'Moves',
            component: () =>
                import ('../views/Moves.vue')
        },
        {
            path: '/History',
            name: 'History',
            component: () =>
                import ('../views/History.vue')
        },
        {
            path: '/ListPokemon',
            name: 'ListPokemon',
            component: () =>
                import ('../components/icons/ListPokemon.vue')
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
            path: '/TEST',
            name: 'TEST',
            component: () =>
                import ('../views/TEST.vue')
        }
    ]
})

export default router