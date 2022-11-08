<template>
    <div class="outro-cartao">
        <div class="cartao">
            <div class="carrinho">
                <div class="carrinho-cabecalho">
                    <div class="carrinho-fechar"></div>
                    <div class="subtotal">

                    </div>
                    <div class="subtotal-texto"></div>
                </div>
            </div>
            <div class="carrinho-corpo">
                <CarrinhoItem />
            </div>
            <router-link class="carrinho-footer">
                <div class="confirma">Confirmar</div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CarrinhoItem from '@/components/CarrinhoItem.vue'

export default {
    name: "paginaCarrinho",
    components: {
        CarrinhoItem
    },
    computed: {
        ...mapGetters(["carrinhoItemContar", "carrinhoTotalPreco"])
    }
}
</script>