<template>
    <Loja :produto="buscarMulher" :imagem="imgMulher"/>
</template>
<script>
import Loja from '../components/Loja.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'paginaMulher',
    data() {
        return {
            imgMulher: "heroWomen.jpg"
        }
    },
    components: {
        Loja
    },
    computed: {
        ...mapGetters(['buscarMulher'])
    }
}
</script>