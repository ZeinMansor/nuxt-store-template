<template>
    <v-main>
      <ProductMain />
    </v-main>
</template>

<script>

import ProductMain from '../components/ProductMain.vue'

export default {
  components: {
    ProductMain,
  },
  layout: 'ProductLayout',
  name: 'ProductPage'
}
</script>

<style>

</style>