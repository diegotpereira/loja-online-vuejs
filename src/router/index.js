import { createRouter, createWebHistory } from "vue-router";
import paginaPrincipal from '../views/Principal.vue'
import Mulher from '../views/Mulher.vue'
import Homem from '../views/Homem.vue'
import ProdutoDetalhes from '../views/ProdutoDetalhes.vue'
import Buscar from '../views/Buscar.vue'
import Verificar from '../views/Verificar.vue'

const routes = [

    {
        path: '/',
        name: "paginaPrincipal",
        component: paginaPrincipal
    },
    {
        path: '/mulher',
        name: "Mulher",
        component: Mulher,
        props: true
    },
    {
        path: '/homem',
        name: "Homem",
        component: Homem,
        props: true
    },
    {
        path: '/loja/:genero/:id',
        name: 'ProdutoDetalhes',
        component: ProdutoDetalhes,
        props: true
    },
    {
        path: '/buscar',
        name: 'Buscar',
        component: Buscar,
        props: true
    },
    {
        path: '/verificar',
        name: 'Verificar',
        component: Verificar,
        props: true
    }
]

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;