import { createStore } from "vuex";

export default createStore({

    state: {

        mulher: [
            {

                titulo: "Vestido de cobra preta",
                src: require("@/assets/img/women/1.jpeg"),
                preco: 1849.99,
                descricao: "moda feminina",
                tipo: "Top",
                cor: "Preto",
                marca: "Gucci",
                genero: "mulher",
                id: 1
            },
            {
                titulo: "Casaco de Seda Esfarrapado",
                src: require("@/assets/img/women/2.jpeg"),
                preco: 1379.99,
                descricao: "moda feminina",
                tipo: "Top", 
                cor: "Cinza",
                marca: "Maison Margiela",
                genero: "mulher"
            }
        ],
        produto: {}
    },

    getters: {

        buscarMulher: (state) => state.mulher
    }

    
})