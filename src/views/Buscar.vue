<template>
    <div class="buscar-pagina">
        <div class="gradiente-secao">
            <h1 class="buscar-titulo">Pesquisar...</h1>
        </div>
        <img src="" alt="" class="hero-imagem">
        <div class="buscar-container">
            <input type="text" class="buscarEntrada" v-model="buscarPorPalavra" placeholder="Pesquisar..."/>
            <p class="buscar-resultado"> "{{ buscarPorPalavra }}" - ({{ produtosFiltrados.length }})</p>
        </div>
        <div class="cartao-secao">
            <div class="outro-cartao" v-for="p in produtosFiltrados" :key="p.id">
                <router-link :to="{ name: 'ProdutoDetalhes', params: { genero: p.genero, id: p.id },}" class="cartao">
                    <img class="cartao-imagem" :src="p.src" alt="" />
                    <div class="cartao-texto">
                        <p class="item-marca">{{ p.marca }}</p>
                        <p class="item-titulo">{{ p.titulo }}</p>
                        <p class="item-cor">{{ p.cor }}</p>
                        <p class="item-descricao">{{ p.descricao }}</p>
                        <p class="item-preco">{{ p.preco }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "paginaBuscar",
    props: ["produto"],
    data() {
        return {
            
        }
    },
    computed: {
        produtosFiltrados() {
            try {
                let a = 
                    this.$store.getters.buscarProdutosFiltrados ||
                    this.$store.getters.todosProdutos;

                console.log(a);

                return a;

            } catch (e) {
                console.log(e);
            }

            // return true
        },
        buscarPorPalavra: {
            get() {

                return this.$store.state.buscarPorPalavra
            },
            set(valor) {
                this.$store.dispatch("filtrarProdutos", valor)
            }
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

.bsucar-titulo {
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

.buscar-container {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
}

.buscar-container .buscarEntrada {
    position: relative;
    display: flex;
    justify-content: left;
    outline: none;
    border: none;
    font-weight: 500;
    width: 13vw;
    height: 3vh;
    transition: 0.8s;
    background: transparent;
    font-family: "Magisho", sans-serif;
    text-indent: 0.4em;
    font-size: 18px;
    border: 1px solid rgb(90, 90, 90);
    border-radius: 0.4em;
    background-color: rgb(21, 21, 21);
    color: rgb(90, 90, 90);
}

.buscar-container .buscar-resultado {
    position: relative;
    display: flex;
    color: white;
    justify-content: right;
    width: 30vw;
    margin: 0;
    font-size: 1.2em;
    color: rgb(251, 251, 251);
    font-family: "Valverde", sans-serif;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px black;
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

.cartao-secao {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 100%;
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

.cartao-secao .outro-cartao .cartao{
    display: flex;
    flex-direction: row;
    position: relative;
    width: 50vw;
    height: 20em;
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
    transform: translateX(-0.6em);
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
    width: 30vw;
    height: 40vh;
    min-width: 13vw;
    padding: 4em 0em;
}

.outro-cartao:hover > .cartao > .cartao-imagem {
    transform: scale(1.1);
}

.cartao-botao:hover > .cartao-imagem {
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

.cartao-texto > .item-cor {
    margin: 0;
    font-size: 0.9em;
    color: rgb(255, 255, 255);
    font-family: "Valverde", sans-serif;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px black;
}

.cartao-texto > .item-descricao {
    font-size: 0.8rem;
    color: rgb(214, 214, 214);
}

.cartao-texto > .item-preco {
    display: flex;
    justify-content: left;
    margin-top: 2em;
    font-size: 1rem;
    letter-spacing: 0.2em;
    color: white;
    font-family: "Valverde", sans-serif;
    font-weight: 100;
}
</style>