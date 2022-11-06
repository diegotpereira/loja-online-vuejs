<template>
    <div class="loja-pagina">
        <div class="gradiente-secao">
            <h1 class="loja-titulo">{{ categoria }}</h1>
        </div>
        <img class="hero-imagem" :src="require(`@/assets/img/${imagem}`)" />
        <div class="loja-secao">
            <div class="outro-cartao" v-for="p in produto" :key="p.id">
                <router-link :to="{}" class="cartao">
                    <img src="" alt="" class="cartao-imagem">
                    <div class="cartao-botao">
                        <div class="cartao-texto">
                            <p class="item titulo">{{ p.titulo }}</p>
                            <p class="item-marca">{{ p.marca }}</p>
                            <p class="item-descricao">{{ p.descricao }}</p>
                        </div>
                    </div>
                </router-link>
                <div class="cartao-debaixo">
                    <p class="item-preco">R$ {{ p.preco }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "paginaLoja",
    data() {
        return {
            
        }
    },
    props: ['produto', 'imagem', 'categoria']
}
</script>
<style scoped>

.loja-pagina {
    position: absolute;
    top: 0;
    z-index: -1;
}

.gradiente-secao {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 46em;
    background-image: linear-gradient(transparent, rgb(0, 0, 0));
    text-align: center;
    justify-content: center;
    align-content: center;
}

.hero-imagem {
    position: relative;
    width: 100vw;
    height: 46em;
    object-fit: cover;
    display: block;
    z-index: -2;
    object-position: center;
    animation: fade-in 0.5s forwards;
}

.loja-secao {
    display: grid;
    grid-template-columns: repeat(auto-fill, 20em);
    grid-gap: 0.4em;
    justify-content: center;
    height: fit-content;
    width: 100vw;
    padding: 0.5em 0em 5em 0em;
    background-color: rgba(0, 0, 0);
}

.outro-cartao {
    position: relative;
    transition: transform 0.6s;
    cursor: pointer;
    border: 0px solid rgba(56, 56, 56, 0);
    overflow: hidden;
    width: 20em;
}

.cartao {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20em;
    height: 26em;
    background: rgb(7, 7, 7);
    cursor: pointer;
    border: none;
    border-bottom: inherit;
    overflow: hidden;
    transition: transform 0.6s;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(0, 0, 0);
    text-decoration: none;

}

.outro-cartao:hover {
    transform: translateY(-0.5em);
}

.outro-cartao > .cartao > .cartao-bottom {
    opacity: 1;
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
}

.outro-cartao:hover > .cartao > .cartao-imagem {
    transform: scale(1.1);
}

.cartao-botao {
   display: flex;
   flex-direction: column;
justify-self: center;
position: relative;
background: rgb(0, 0, 0);
bottom: 0;
left: 0;
margin: 0;
width: 20em;
height: 11em;
z-index: 1;
opacity: 0;
transition: opacity 1s;
justify-content: center;
}

.cartao-texto {
padding: 1em 2em 1em 2em;
font-size: 1rem;
word-wrap: break-word;
text-align: left;
align-self: center;
}

.cartao-texto > .item-titulo {
font-size: 1.1rem;
font-weight: 800;
padding-bottom: 0.1em;
color: rgb(214, 214, 214);

}

.cartao-texto > .item-marca {
font-size: 0.9rem;
padding-bottom: 0.7em;
color: rgb(214, 214, 214);
}

.cartao-texto > item-descricao {
font-size: 0.7rem;
color: rgb(214, 214, 214);
}

.cartao-debaixo {
padding: 0.5em 6.55em;
display: flex;
justify-content: center;
font-size: 0.8rem;
width: 12em;
background-color: rgb(0, 0, 0);
border: none;
border-top: none;
transition: background-color 0.5s, all 1s;
color: white;
}

.outro-cartao:hover > .cartao-debaixo {
background-color: rgb(204, 204, 204);
color: black;
border-bottom-right-radius: 2em;
border-bottom-left-radius: 2em;
}

.cartao-debaixo > .item-preco {
display: flex;
font-size: 0.8rem;
padding-bottom: 0.1em;
opacity: 0.8;
margin-left: 0.5em;
}

</style>