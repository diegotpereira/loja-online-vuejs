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
                        <img :src="item.produto.src" class="cartao-imagem">
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
                        <i class="uil uil-trash-alt" @click.prevent="removerProdutoDoCarrinho(item.produto)"></i>
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
            "buscarCarrinho",
            "carrinhoTotalPreco",
            "carrinhoVerificarPreco",
            "buscarTaxa",
            "buscarEntrega"

        ])
    },
    methods: {
        removerProdutoDoCarrinho(produto) {
            this.$store.dispatch("removerProdutoDoCarrinho", produto)
        }
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
    align-content: center;
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
    color: #fff;
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

.verificar-cartao {
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: fit-content;
    background-color: rgb(240, 240, 240);
    border-radius: 1em;
    align-items: center;
    position: inherit;
    margin: 1em 2em;
    border: 4px solid #333;
}

.verificar-cartao .cabecalho-verificar {
    position: relative;
    top: 0;
    width: 100%;
    display: flex;
    align-self: center;
    width: 15vw;
    height: fit-content;
    border-radius: 1em 1em 1em 1em;
    justify-content: center;
    border-bottom: 1px solid black;
    background-color: #d4d4d4;
}

.verificar-cartao .cabecalho-verificar .verificar-titulo {
    position: relative;
    font-family: "Magisho", sans-serif;
    font-size: 1.3em;
    width: 10vw;
    height: fit-content;
    margin: 0.8em 0;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.verificar-cartao .corpo-verificar {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
    height: fit-content;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.verificar-cartao .corpo-verificar .texto-caixa {
    position: relative;
    font-family: "Magisho", sans-serif;
    font-size: 0.9rem;
    width: 14vw;
    height: fit-content;
    padding: 0.8em 0em;
    margin: 0;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.verificar-cartao .corpo-verificar .texto-total {
    position: relative;
    font-family: "Magisho", sans-serif;
    font-size: 1.2rem;
    padding: 2em 0em;
    margin: 0;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.verificar-cartao .footer-verificar {
    position: relative;
    bottom: 0;
    display: flex;
    align-self: center;
    width: 15vw;
    height: 7vh;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    border-radius: 2em 2em 1em 1em;
    justify-content: center;
    border-top: 1px solid black;
    background-color: #eaeaea;
}

.verificar-cartao .footer-verificar .verificar {
    margin-bottom: 0.2em;
    display: block;
    transition: 0.5s;
    border: none;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 0.8em 2em;
    align-self: center;
    text-align: center;
    bottom: 0;
    font-size: 1rem;
    font-family: "Magisho", sans-serif;
    width: 10vw;
    position: absolute;
    cursor: pointer;
    border-radius: 0.4em;
    margin-bottom: 0.5em;
}

.cartao-secao {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 52vw;
    padding: 0.5em 0em 5em 0em;
    background-color: rgba(0, 0, 0);
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

.cartao-imagem {
    position: absolute;
    width: inherit;
    height: inherit;
    object-fit: cover;
    display: block;
    object-position: top;
    transition: transform 0.6s;
    filter: brightness(80%);
    position: relative;
    width: 15vw;
    height: 20vh;
    min-width: 5vw;
    padding: 4em 0em;
}

.outro-cartao:hover > .cartao > .cartao-imagem {
    transform: scale(1.1);
}

.cartao-texto {
    display: flex;
    flex-direction: column;
    padding: 1em 2em 1em 2em;
    font-size: 1rem;
    word-wrap: break-word;
    text-align: left;
    align-self: right;
    color: white;
    width: 50vw;
}

.cartao-texto > .item-titulo {
    font-size: 1.1rem;
    font-weight: 800;
    color: rgb(214, 214, 214);
    margin: 0;
    margin-bottom: 1em;
}

.cartao-texto > .item-marca {
    margin: 0;
    font-size: 0.9em;
    color: rgb(180, 180, 180);
    font-family: "Valverde", sans-serif;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px black;
}

.cartao-texto > .item-quantidade {
    margin: 0;
    font-size: 0.9em;
    color: rgb(255, 255, 255);
    font-family: "Valverde", sans-serif;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px black;
}

.cartao-texto > .item-tamanho-texto {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    font-size: 0.9rem;
    color: rgb(179, 179, 179);
    font-family: "Valverde", sans-serif;
}

.cartao-texto .item-tamanho-texto .item-tamanho {
  font-size: 0.9rem;
  color: rgb(179, 179, 179);
  font-family: "Valverde", sans-serif;
  text-transform: uppercase;
}

.cartao-texto > .item-preco {
    display: flex;
    justify-content: right;
    margin-top: 2em;
    font-size: 1rem;
    letter-spacing: 0.2em;
    color: white;
    font-family: "Valverde", sans-serif;
    font-weight: 100;
}

.cancelar {
    transform: translateY(70%) translateX(-70%);
    position: absolute;
    right: 0;
    z-index: 3;
    font-size: 1.3em;
}

.cancelar .uil {
    display: flex;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    color: rgb(194, 194, 194);
}


.cancelar .uil:hover {
    color: #fff;
}
</style>
