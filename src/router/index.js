import { createRouter, createWebHistory } from "vue-router";
import paginaPrincipal from '../views/Principal.vue'
import Mulher from '../views/Mulher.vue'

const routes = [

    {
        path: '/',
        name: "paginaPrincipal",
        component: paginaPrincipal
    },
    {
        path: '/mulher',
        name: "Mulher",
        component: Mulher
    }
]

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;