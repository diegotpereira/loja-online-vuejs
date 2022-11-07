import { createRouter, createWebHistory } from "vue-router";
import paginaPrincipal from '../views/Principal.vue'
import Mulher from '../views/Mulher.vue'
import Homem from '../views/Homem.vue'

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
    },
    {
        path: '/homem',
        name: "Homem",
        component: Homem
    }
]

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;