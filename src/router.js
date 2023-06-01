import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import WinesIndex from './pages/WinesIndex.vue';
import SingleWine from './pages/SingleWine.vue';


const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: '/wines',
            name: 'wines',
            component: WinesIndex,
        },

        {
            path: '/wines/:id',
            name: 'singleWine',
            component: SingleWine,
        },

    ],

});

export { router };