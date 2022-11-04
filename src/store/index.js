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
                genero: "Feminino",
                id: 1
            }
        ]
    }
})