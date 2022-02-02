<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data: () => ({ drawer: null }),
}
</script>