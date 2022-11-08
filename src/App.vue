<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
  <NavbarPagina @toggle="abrirCarrinho" />
  <Carrinho :class="{ open: !abrirCarrinho }" @alternarCarrinho="alternarCarrinho" />

  <router-view :class="{ opacity: abrirCarrinho }"/>

</template>

<script>
import NavbarPagina from '@/components/Navbar.vue'
import Carrinho from '@/components/NavCarrinho.vue'

export default {
  data() {
    return {
      abrirCarrinho: false
    }
  },
  components: {
    NavbarPagina,
    Carrinho
  },
  methods: {
    alternarCarrinho() {
      this.abrirCarrinho = !this.abrirCarrinho
    }
  }
  
}
</script>