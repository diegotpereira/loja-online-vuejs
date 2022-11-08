import { createStore } from "vuex";

const removerAcentos = (string) => {
    const mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,

    }

    for(let letra in mapaAcentosHex) {

        var expReg = mapaAcentosHex[letra]
        string = string.replace(expReg, letra)
    }

    return string
}

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
                genero: "mulher",
                id: 2
            },
            {
                titulo: "Royal Gold Gown",
                src: require("@/assets/img/women/3.jpeg"),
                preco: 859.99,
                descricao:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Blue",
                marca: "Luisa Beccaria",
                genero: "mulher",
                id: 3,
            },
            {
                titulo: "Fine Ripped Shirt",
                src: require("@/assets/img/women/4.jpeg"),
                preco: 1319.99,
                descricao:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Black",
                marca: "Maison Margiela",
                genero: "mulher",
                id: 4,
            },
            {
                titulo: "Renaissance Dress",
                src: require("@/assets/img/women/5.jpeg"),
                preco: 2899.99,
                descricao:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "White",
                marca: "Simone Rocha",
                genero: "mulher",
                id: 5,
            },
            {
                titulo: "Black Buttoned Overcoat",
                src: require("@/assets/img/women/6.jpeg"),
                preco: 659.99,
                descricao:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Black",
                marca: "Yohji Yamamoto",
                genero: "mulher",
                id: 6,
            },
            {
                titulo: "Black Layered Top",
                src: require("@/assets/img/women/7.jpeg"),
                preco: 779.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Black",
                marca: "Anne Sofie Madsen",
                genero: "mulher",
                id: 7,
            },
            {
                titulo: "White Bracelet Sneakers",
                src: require("@/assets/img/women/8.jpeg"),
                preco: 579.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                cor: "White",
                marca: "Comme De Garcons",
                genero: "mulher",
                id: 8,
            },
            {
                titulo: "Gold and Black Heels",
                src: require("@/assets/img/women/9.jpeg"),
                preco: 739.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                cor: "Gold",
                marca: "Dolce & Gabbana",
                genero: "mulher",
                id: 9,
            },
    
            {
                titulo: "Gold and Pink Floral Heels",
                src: require("@/assets/img/women/10.jpeg"),
                preco: 1239.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                cor: "Gold",
                marca: "Dolce & Gabbana",
                genero: "mulher",
                id: 10,
            },
            {
                titulo: "Stitched Mouse Top",
                src: require("@/assets/img/women/11.jpeg"),
                preco: 669.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "White",
                marca: "Dolce & Gabbana",
                genero: "mulher",
                id: 11,
            },
            {
                titulo: "Black Emblem Bag",
                src: require("@/assets/img/women/12.jpeg"),
                preco: 279.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Black",
                marca: "Jean Paul Gaultier",
                genero: "mulher",
                id: 12,
            },
            {
                titulo: "Glitter Skull Bag",
                src: require("@/assets/img/women/13.jpeg"),
                preco: 339.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Blue",
                marca: "Manish Arora",
                genero: "mulher",
                id: 13,
            },
            {
                titulo: "Portrait Bag",
                src: require("@/assets/img/women/14.jpeg"),
                preco: 489.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Gold",
                marca: "Moschino",
                genero: "mulher",
                id: 14,
            },
            {
                titulo: "Gold Bow Heels",
                src: require("@/assets/img/women/15.jpeg"),
                preco: 1239.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                cor: "Gold",
                marca: "Versace",
                genero: "mulher",
                id: 15,
            },
            {
                titulo: "Black Lace Dress",
                src: require("@/assets/img/women/16.jpeg"),
                preco: 2579.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Black",
                marca: "Valentino",
                genero: "mulher",
                id: 16,
            },
            {
                titulo: "Aged Snake Bag",
                src: require("@/assets/img/women/17.jpeg"),
                preco: 899.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Gold",
                marca: "Valentino",
                genero: "mulher",
                id: 17,
            },
            {
                titulo: "Transparent Stitched Dress",
                src: require("@/assets/img/women/18.jpeg"),
                preco: 1529.99,
                descricao:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Gold",
                marca: "Valentino",
                genero: "mulher",
                id: 18,
            },
        ],
        homem: [
            {
                titulo: "Butterfly Suit",
                src: require("@/assets/img/men/1.jpeg"),
                preco: 979.99,
                descricao: "moda masculina",
                tipo: "TOp",
                cor: "Preto",
                marca: "Alexander McQueen",
                genero: "homem",
                id: 19
            },
            {
                titulo: "Balenciaga Boots",
                src: require("@/assets/img/men/2.jpeg"),
                preco: 779.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                color: "Black",
                marca: "Balenciaga",
                genero: "homem",
                id: 20,
              },
              {
                titulo: "Burberry Jacket",
                src: require("@/assets/img/men/3.jpeg"),
                preco: 779.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Brown",
                marca: "Burberry",
                genero: "homem",
                id: 21,
              },
              {
                titulo: "Gold Leaf Jacket",
                src: require("@/assets/img/men/4.jpeg"),
                preco: 3779.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Gold",
                marca: "Dolce & Gabbana",
                genero: "homem",
                id: 22,
              },
              {
                titulo: "Snake Coat",
                src: require("@/assets/img/men/5.jpeg"),
                preco: 3779.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Blue",
                marca: "Dries Van Noten",
                genero: "homem",
                id: 23,
              },
              {
                titulo: "Bee Pin",
                src: require("@/assets/img/men/6.jpeg"),
                preco: 279.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Gold",
                marca: "Gucci",
                genero: "homem",
                id: 24,
              },
              {
                titulo: "React Shoes",
                src: require("@/assets/img/men/7.jpeg"),
                preco: 349.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Shoes",
                cor: "Red",
                marca: "Nike",
                genero: "homem",
                id: 25,
              },
              {
                titulo: "Brown costume",
                src: require("@/assets/img/men/8.jpeg"),
                preco: 234.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Brown",
                marca: "Nordstorm",
                genero: "homem",
                id: 26,
              },
              {
                titulo: "Archive Redux",
                src: require("@/assets/img/men/9.jpeg"),
                preco: 93.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Brown",
                marca: "Raf Simons",
                genero: "homem",
                id: 27,
              },
              {
                titulo: "Red Girl Shirt",
                src: require("@/assets/img/men/10.jpeg"),
                preco: 1349.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Red",
                marca: "Raf Simons",
                genero: "homem",
                id: 28,
              },
              {
                titulo: "RS Pink Jacket",
                src: require("@/assets/img/men/11.jpeg"),
                preco: 1149.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Red",
                marca: "Raf Simons",
                genero: "homem",
                id: 29,
              },
              {
                titulo: "Playing Card Pants",
                src: require("@/assets/img/men/12.jpeg"),
                preco: 949.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Bottom",
                cor: "Black",
                marca: "Undercover",
                genero: "homem",
                id: 30,
              },
              {
                titulo: "Castle Backpack",
                src: require("@/assets/img/men/13.jpeg"),
                preco: 699.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Accessories",
                cor: "Grey",
                marca: "Undercover",
                genero: "homem",
                id: 31,
              },
              {
                titulo: "Black Portrait Jacket",
                src: require("@/assets/img/men/14.jpeg"),
                preco: 1299.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Black",
                marca: "Undercover",
                genero: "homem",
                id: 32,
              },
              {
                titulo: "Red Portrait Girl",
                src: require("@/assets/img/men/15.jpeg"),
                preco: 699.99,
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
                tipo: "Top",
                cor: "Red",
                marca: "Yohji Yamamoto",
                genero: "homem",
                id: 33,
              },
        ],
        produto: {},
        produtosFiltrados: null,
        buscarPorPalavra: null
    },

    getters: {

        buscarMulher: (state) => state.mulher,
        
        buscarHomem: (state) => state.homem,
        
        buscarProdutoPorIdHomem: (state) => (id) => 
           state.homem.find((homem) => homem.id === parseInt(id)),

        buscarProdutoPorIdMulher: (state) => (id) => 
           state.mulher.find((mulher) => mulher.id === parseInt(id)),

        buscarProdutosFiltrados: (state) => state.produtosFiltrados,
        
        todosProdutos: (state) => state.mulher.concat(state.homem),

        getBuscarPorPalavra: (state) => state.buscarPorPalavra

           
    },

    mutations: {
        PRODUTOS_FILTRADOS(state, palavra) {
            if (!palavra || palavra === "{}") {
                state.buscarPorPalavra = null
                state.produtosFiltrados = null

            } else {
                state.buscarPorPalavra = palavra
                palavra = removerAcentos(palavra.trim().toLowerCase())
                state.produtosFiltrados = state.mulher
                   .concat(state.homem)
                   .filter((produto) => {

                    return (
                        produto.titulo.toLowerCase().includes(palavra) ||
                        produto.marca.toLowerCase().includes(palavra) ||
                        produto.cor.toLowerCase().includes(palavra) ||
                        produto.tipo.toLowerCase().includes(palavra)
                    )
                   })
            }
        }
    },

    actions: {

        filtrarProdutos({ commit }, palavra) {
            commit("PRODUTOS_FILTRADOS", palavra)
        }
    },

    modules: {}
    
})