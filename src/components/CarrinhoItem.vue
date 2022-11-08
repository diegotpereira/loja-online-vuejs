<template>
    <div class="outro-cartao">
        <router-link class="carrinho-item">
            <img src="" alt="">
            <div class="detalhes">
                <h3></h3>
                <div class="produtoDetalhes">
                    <p class="tamanho"></p>
                    <span class="quantidade"></span>
                </div>
                <span class="preco"></span>
            </div>
            <div class="cancelar">
                <i class="uil uil-times"></i>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    computed: {
        carrinho() {

            return this.$store.state.carrinho
        }
    },
    methods: {
        
    }
}
</script>