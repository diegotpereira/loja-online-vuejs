<template>
    <div class="outro-cartao" v-for="item in carrinho" :key="item.produto.id">
        <router-link class="carrinho-item" :to="{ produtoDetalhes, params: { genero: item.produto.genero, id: item.produto.id }, }">
            <img :src="item.produto.src" alt="">
            <div class="detalhes">
                <h3>{{ item.produto.titulo }}</h3>
                <div class="produtoDetalhes">
                    <p class="tamanho">{{ item.tamanho }}</p>
                    <span class="quantidade">{{ item.quantidade }}</span>
                </div>
                <span class="preco">{{ item.quantidadePreco }}</span>
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