<template>
    <div v-if="produto" class="produto">
        <div class="gradiente-secao"></div>
        <img :src="produto.src" alt="" class="voltar-imagem" />
        <div class="container">
            <div class="detalhes">
                <p class="marca">{{ produto.marca }}</p>
                <h1 class="titulo">{{ produto.titulo }}</h1>
                <p class="preco">{{ produto.preco }}</p>
                <p class="descricao">{{ produto.descricao }}</p>
                <form action="" class="carrinho">
                    <select name="" id="" class="selecionar">
                        <option value="Tamanho" disabled>Tamanho</option>
                        <option value="pp">PP</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XG">XG</option>
                    </select>
                    <button class="carrinho-botao" @click.prevent="addNoCarrinho()"> 
                        Adicionar ao Carrinho
                    </button>
                </form>
            </div>
            <i class="uil uil-arrow-left"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "paginaProdutoDetalhes",
    data() {
        return {
            tamanho: "Tamanho",
            produto: []
        }
    },
    props: ["genero", "id"],
    mounted() {

        if (this.genero == "mulher") {
            this.produto = this.$store.getters.buscarProdutoPorIdMulher(this.id)
        } else {
            this.produto = this.$store.getters.buscarProdutoPorIdHomem(this.id);
        }
    },
    methods: {
        addNoCarrinho() {
            if (this.tamanho != "Tamanho") {
                this.$store.dispatch("addProdutoNoCarrinho", {
                    produto: this.produto,
                    quantidade: 1,
                    quantidadePreco: this.produto.preco,
                    tamanho: this.tamanho
                })
            } else {
                this.error = true
            }
        }
    }
}
</script>

<style scoped>
@import url("http://fonts.cdnfonts.com/css/valverde");
option:first-child {
    display: none;
}
.produto {
    display: flex;
    position: fixed;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: black;
    right: 0;
    bottom: 0;
    z-index: -5;
}

.gradiente-secao {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 40%;
    height: 100%;
    background-image: linear-gradient(to right, transparent, black 80%);
    z-index: -1;
    text-align: center;
    align-items: center;
    justify-content: top;
    left: 0;
}

.voltar-imagem {
    position: fixed;
    width: 40%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: -2;
    left: 0;
    object-position: top;
    animation: fade in 0.5s forwards;
    user-select: none;
    -moz-user-select: none;
}

.container {
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: center;
    width: auto;
    align-self: center;
}

.container > img {
    font-size: 2em;
    height: 32px;
    margin-left: 2em;
    cursor: pointer;
}

.detalhes {
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    width: auto;
}

.detalhes .marca {
    margin: 0;
    font-size: 1.2rem;
    text-indent: 0.6em;
    color: rgb(196, 196, 196);
    font-family: "Valverde", sans-serif;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px black;
}

.detalhes .titulo {
    align-self: left;
    letter-spacing: 0.2em;
    font-weight: 100;
    text-indent: 0.3em;
    width: auto;
    margin: 0;
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
    font-family: "Magisho", sans-serif;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.0);
}

.detalhes .preco {
    margin: 0;
    font-size: 1.2rem;
    letter-spacing: 0.2em;
    text-indent: 00.5em;
    color: rgb(219, 219, 219);
    font-family: "Valverde", sans-serif;
    text-shadow: 1px 1px 2px black;
}

.detalhes .descricao {
    font-size: 1rem;
    width: 30em;
    word-wrap: break-word;
    text-align: left;
    padding-bottom: 2em;
    border-bottom: 1px solid white;
    text-shadow: 1px 1px 2px black;
    font-family: "Magisho", sans-serif;
}

.detalhes .selecionar {
    display: block;
    transition: 0.5s;
    background-color: black;
    color: rgb(255, 255, 255);
    align-self: center;
    font-size: 1.2rem;
    padding: 0.4em 0;
    margin: 0.2em;
    margin-top: 0.2em;
    font-family: "Magisho", sans-serif;
    width: 12vw;
    height: 2.3em;
    position: relative;
    cursor: pointer;
    border-radius: 0.4em;
    text-transform: uppercase;
    border: 0.2em solid rgb(255, 255, 255);
}

.detalhes .carrinho-botao {
    display: block;
    transition: 0.5s;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    align-self: center;
    font-size: 1.2rem;
    padding: 0.4em 0;
    margin: 0.2em;
    margin-top: 0.2em;
    font-family: "Magisho", sans-serif;
    width: 12vw;
    height: 3.3em;
    position: relative;
    cursor: pointer;
    border-radius: 0.4em;
    text-transform: uppercase;
    border: 0.2em solid rgb(255, 255, 255);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

@media only screen and(max-width: 600px) {

    .detalhes.descricao,
    .detalhes.titulo,
    .detalhes.preco,
    .detalhes.marca {
        justify-content: center;
        align-self: center;
        text-align: center;
        text-indent: 0;
    }
    .detalhes.marca {
        text-indent: -10px;
    }

    .detalhes .selecionar {
        width: 20vh;
    }
}
</style>