<template>
  <div>
    <HomeHeader />
    <Nuxt />
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'

export default {
  components: {
    HomeHeader,
  },
  data: () => ({ drawer: null }),
}
</script>