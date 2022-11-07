<template>
    <Loja :produto="buscarHomem" :imagem="heroHomem" :categoria="categoria" />
</template>
<script>
import Loja from '../components/Loja.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'paginaHomem',
    data() {
        return {
            heroHomem: 'heroMen.jpg',
            categoria: "Homem"
        }
    },
    components: {
        Loja
    },
    computed: {
        ...mapGetters(['buscarHomem'])
    }
}
</script>