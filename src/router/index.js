import { createRouter, createWebHistory } from "vue-router";
import PaginaPrincipal from '../views/Principal.vue'

const routes = [

    {
        path: '/',
        name: "principal",
        component: PaginaPrincipal
        
    }
]

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;