<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
  <NavbarPagina @alternar="alternarCarrinho" />
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

<style>
@font-face {
  font-family: ITC Cheltenham Std;
  src: url(./fonts/CheltenhamStd.otf);
}

@font-face {
  font-family: Clab Personal Use;
  src: url(./fonts/ClabPersonalUse.otf);
}

@font-face {
  font-family: Magisho;
  src: url(./fonts/Magisho.otf);
}

@font-face {
  font-family: Hjet;
  src: url(./fonts/Hjet.otf);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
}

.opacity {
  opacity: 0.8;
}

html,
body,
p,
h1, 
h3 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>