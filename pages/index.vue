<template>

  <v-app id="inspire">
    <HomePageBanner />
    <BreadNavigation />

    <ProductSwiper :products="featuredProducts" />
    
    <Footer />
  </v-app>
</template>

<script>
import HomePageBanner from '../components/HomePageBanner.vue';
import BreadNavigation from '../components/BreadNavigation.vue' ;
import Footer from '../components/Footer.vue';
import ProductSwiper from '../components/ProductSwiper.vue';

import { mapState } from 'vuex';
export default {
  layout: 'HomeLayout',
  name: 'IndexPage',

  components: {
    HomePageBanner,
    BreadNavigation,
    Footer,
    ProductSwiper,
  },

  data: () => ({
    drawer: null
  }),

  computed: {
    ...mapState({
      featuredProducts: state => state.products.featuredProducts
    })
  },

  async created() {
    await this.$store.dispatch('products/getFeaturedProducts');
  }
}
</script>

<style lang="scss" scoped>

</style>
