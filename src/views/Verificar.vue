<template>
    <div class="buscar-pagina">
        <div class="gradiente-secao">
            <h1 class="buscar-titulo">Confirmar</h1>
        </div>
        <img src="@/assets/img/heroSearch.jpg" class="hero-imagem" />
        <div class="secao">

            <div class="cartao-secao">

                <div class="outro-cartao" v-for="item in buscarCarrinho" :key="item.produto.id">

                    <router-link class="cartao" :to="{ name: 'ProdutoDetalhes', params: { genero: item.produto.genero, id: item.produto.id}, }">
                        <img src="" alt="" class="cartao-imagem">
                        <div class="cartao-texto">
                            <p class="item-marca">{{ item.produto.marca }}</p>
                            <p class="item-titulo">{{ item.produto.titulo }}</p>
                            <p class="item-quantidade">{{ item.quantidade }}</p>
                            <div class="item-tamanho-texto">
                                Tamanho
                                <p class="item-tamanho">{{ item.tamanho }}</p>
                            </div>
                            <p class="item-preco">R$ {{ item.quantidadePreco }}</p>
                        </div>
                    </router-link>
                    <div class="cancelar">
                        <i class="uil uil-trash-alt"></i>
                    </div>
                </div>
            </div>
            <div class="verificar-cartao">
                <div class="cabecalho-verificar">
                    <p class="verificar-titulo"></p>
                </div>
                <div class="corpo-verificar">
                    <p class="texto-caixa"></p>
                    <p class="texto-caixa"></p>
                    <p class="texto-caixa"></p>
                </div>
                <div class="footer-verificar">
                    <div class="verificar">Confirmar</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'paginaVerificar',
    data() {
        return {
            pedido: false 
        }
    },
    computed: {
        ...mapGetters([

            "buscarCarrinho"

        ])
    },
    methods: {

    }
}
</script>
<style scoped>
.buscar-pagina {
    position: absolute;
    top: 0;
    z-index: -1;
    background-color: black;
    height: 100%;
}

.gradiente-secao {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 26em;
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
    text-align: center;
    justify-content: center;
    align-items: center;
}

.buscar-titulo {
    position: absolute;
    align-self: center;
    text-align: center;
    letter-spacing: 0.3em;
    font-family: light;
    font-weight: 100;
    text-indent: 0.3em;
    font-size: 3rem;
    text-transform: uppercase;
    font-family: "Magisho", sans-serif;
}

.hero-imagem {
    position: relative;
    width: 100vw;
    height: 26em;
    top: 0;
    object-fit: cover;
    display: block;
    z-index: -2;
    object-position: center;
    animation: fade-in 0.5s forwards;
}

.secao {
    display: flex;
    flex-direction: row;
    background-color: black;
    justify-content: center;
    width: 100vw;
    position: relative;
}

.cartao-secao .outro-cartao {
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.6s;
    cursor: pointer;
    overflow: hidden;
}

.cartao-secao .outro-cartao:first-child {
    border-top: 2px solid rgb(40, 40, 40);
}

.cartao-secao .outro-cartao .cartao {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 50vw;
    height: 14vh;
    background: rgb(7, 7, 7);
    cursor: pointer;
    border: none;
    border-bottom: inherit;
    overflow: hidden;
    transition: transform 0.6s;
    justify-content: flex-end;
    align-items: center;
    background-color: rgb(0, 0, 0);
    text-decoration: none;
    padding: 2em 0em;
    border-bottom: 2px solid rgb(40, 40, 40);
}

.outro-cartao:hover {
    transform: translateX(-0.6%);
}
</style>