<template>
    <div class="outro-cartao">
        <div class="cartao">
            <div class="carrinho">
                <div class="carrinho-cabecalho">
                    <div class="carrinho-fechar" @click="alternarCarrinhoBotao">X</div>
                    <div class="subtotal">
                        SubTotal
                    </div>
                    <div class="subtotal-texto">R$ {{ carrinhoTotalPreco }}</div>
                </div>
                <div class="carrinho-corpo">
                    <CarrinhoItem />
                </div>
                <router-link class="carrinho-footer" to="/verificar">
                    <div class="verifica">Confirmar</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CarrinhoItem from '@/components/CarrinhoItem.vue'

export default {
    name: "paginaCarrinho",
    emits: ["alternarCarrinho"],
    components: {
        CarrinhoItem
    },
    computed: {
        ...mapGetters(["carrinhoItemContar", "carrinhoTotalPreco"])
    },
    methods: {
        alternarCarrinhoBotao() {
            this.$emit("alternarCarrinho")
        }
    }
}
</script>

<style scoped>
.outro-cartao {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    align-items: top;
    width: 100%;
    height: 100%;
    top: 90px;
    z-index: 1;
}

.outro-cartao.open {
    display: none;
}

.outro-cartao .carrinho {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 15vw;
    transition: 0.5s;
    height: 50vh;
    background-color: #dedede;
    transform: translateX(-4%);
    border-radius: 10px;
    border: 0.1em solid #333;
}

.outro-cartao .carrinho .carrinho-cabecalho {
    position: relative;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    width: 100%;
    background-color: #cccccc;
    align-self: center;
    text-align: center;
    top: 0;
    border-radius: 10px;
}

.outro-cartao .carrinho .carrinho-cabecalho:before {
    content: "";
    position: fixed;
    height: 0px;
    width: 0px;
    right: 28px;
    top: -32px;
    border-width: 15px;
    border-color: transparent white transparent transparent;
    border-style: solid;
    transform: rotate(90deg);
    transform: 0.5s;
    z-index: -6;
}

.outro-cartao .carrinho .carrinho-cabecalho .carrinho-fechar {
    display: block;
    transition: 0.5s;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 1.1rem;
    font-family: "Magisho", sans-serif;
    position: relative;
    cursor: pointer;
    border-radius: 0.4em;
    width: 1vw;
    margin: 0 1em;
    align-self: center;
    text-align: center;
}

.outro-cartao .carrinho .carrinho-cabecalho .subtotal {
    position: relative;
    font-family: "Magisho", sans-serif;
    font-size: 0.8rem;
    width: 10vw;
    padding: 1em 0em;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.outro-cartao .carrinho .carrinho-cabecalho .subtotal-texto {
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    padding-left: 1em;
    letter-spacing: 0.1em;
    color: black;
    font-family: "Valverde", sans-serif;
    font-weight: 100;
}

.outro-cartao .carrinho .carrinho-corpo {
    background-color: #dedede;
    overflow: auto;
    height: 38.3vh;
}

.outro-cartao .carrinho .carrinho-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-self: center;
    border-top: 0.12em solid black;
    width: 15.1vw;
    height: 7vh;
    border-radius: 2em 2em 1em 1em;
    justify-content: center;
    background-color: #cccccc;
}

.outro-cartao .carrinho .carrinho-footer .verifica {
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
    position: fixed;
    z-index: -1;
    cursor: pointer;
    border-radius: 0.4em;
}
</style>