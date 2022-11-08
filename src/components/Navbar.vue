<template>
    <div class="navbar" :class="{ alterar_cor : posicaoScroll > 200 }">
        <a href="" class="esquerda">
            <img src="@/assets/Github.png" alt="">
            <p>DTP Software</p>
        </a>
        <div class="centro">
            <div class="logo">Marca</div>
            <div class="navlink">
                <router-link class="nav-page" to="/">Principal</router-link>
                <router-link class="nav-page" to="/mulher">Mulher</router-link>
                <router-link class="nav-page" to="/homem">Homem</router-link>
                <router-link class="nav-page" to="/">Sobre</router-link>
            </div>
        </div>
        <div class="direita">
            <div class="buscar">
                <router-link class="buscarCaixa" to="/buscar">
                   <i class="uil uil-search search-icon"></i>
                </router-link>
            </div>
            <div class="carrinho">
                <i class="uil uil-shopping-bag" @click="alternarCarrinho"></i>
                <span class="notificacao-contar">{{ carrinhoItemContar }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "NavbarPagina",
    emits: ["alternar"],
    data() {
        return {
            posicaoScroll: null
        }
    },
    computed: {
        ...mapGetters(["carrrinhoItemContar"])
    },
    methods: {
        alternarCarrinho() {
            this.$emit("alternar")
        },

        atualizarScroll() {
            this.posicaoScroll = window.scrollY
        }
    },
    mounted() {
        window.addEventListener("scroll", this.atualizarScroll)
    }
}
</script>


<style scoped>

.notificacao-contar {
    position: absolute;
    top: -2px;
    left: 32px;
    background-color: rgba(212, 19, 13, 1);
    color: #fff;
    border-radius: 1em;
    padding: 0.3em 0.6em;
    font-family: "Valverde", sans-serif;
    font-size: 0.7em;
}

.navbar {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: transparent;
    width: 100%;
    height: 6em;
    top: 0;
    left: 0;
    position: fixed;
    margin: 0;
    padding: 0;
    transition: 0.3s all linear;
    z-index: 1;
}

.navbar .alterar_cor {
    background-color: black;
}

.navbar:hover {
    background-color: black;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.navbar .esquerda {
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: left;
    text-shadow: 1px 1px 2px black;
    text-decoration: none;
}

.navbar .esquerda img {
    display: flex;
    margin-left: 3em;
    width: 1.1em;
    margin-right: 0.4em;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
}

.navbar .esquerda p {
    font-family: "Magisho", sans-serif;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
}

.navbar .centro {
    display: grid;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 2px black;
}

.navbar .centro .logo {
    display: flex;
    color: #f8f8f8;
    font-size: 30px;
    font-family: "Hjet", sans-serif;
    text-decoration: none;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0em 0.6em;
    font-size: 3em;
    letter-spacing: 0.1em;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently*/
}

.navbar .centro .navlink {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: "Magisho", sans-serif;
    text-indent: 0.4em;
    margin-top: -1em;
    text-decoration: none;
    letter-spacing: 0.2em;
}

.navbar .centro .navlink .nav-page {
    text-decoration: none;
    color: #fff;
    font-size: 0.8rem;
    padding: 0em 0.4em;
}

.navbar .direita {
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: right;
    padding-right: 2em;
}

.navbar .direita .buscarCaixa {
    height: 1em;
    display: flex;
    cursor: pointer;
    padding: 1em 1em;
    background: #fff;
    border-radius: 5em;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    position: relative; 
}

.navbar .direita .buscarCaixa .search-icon {
    color: black;
    font-size: 18px;
    padding-right: 0.1em;
}

.navbar .direita .carrinho {
    height: 1em;
    display: flex;
    cursor: pointer;
    padding: 0.86em 0.86em;
    margin-left: 0.2em;
    background: #fff;
    border-radius: 5em;
    align-items: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    position: relative;
    color: black;
    font-size: 18px;
}

.nav-page {
    padding: 0 1.3em 0 1.3em;
    position: relative;
    transition: 1s;
}

.nav-page::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0.7em);
    content: "";
    position: absolute;
    display: block;
    background-color: white;
    border-radius: 100%;
    width: 0.3em;
    height: 0.3em;
    text-align: center;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.5s;
}

.nav-page:hover::after {
    opacity: 100%;
}


@media only screen and (max-width: 600px) {
    .navbar {
        display: flex;
        justify-content: center;
    }

    .navbar .centro {
        transform: translateX(4%)
    }

    .navbar .esquerda {
        display: none;
    }

    .navbar .direita {
        display: flex;
        justify-content: right;
        padding: 0;
        margin-left: 1em;
    }

    .navbar .direita .buscar {
        display: none;
    }

    .navbar .direita .carrinho {
        justify-content: right;
    }
}
</style>