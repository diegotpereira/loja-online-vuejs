<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
  <NavbarPagina />

  <router-view />

</template>

<script>
import NavbarPagina from '@/components/Navbar.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    NavbarPagina
  }
  
}
</script>