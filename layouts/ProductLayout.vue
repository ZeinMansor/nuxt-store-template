<template>
  <client-only>
    <v-app>
      <v-main class="pa-0">
        <Navigation />
        <Nuxt />
      </v-main>
    </v-app>
  </client-only>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import ProductMain from '../components/ProductMain.vue'

export default {
  components: {
    Navigation,
    ProductMain,
  }
}
</script>

<style>

</style>