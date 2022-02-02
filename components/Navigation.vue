<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <!-- <v-btn color="#b4deee" text to="/" nuxt>Home</v-btn> -->
        <NuxtLink class="nav-link" to="/"><v-icon>mdi-home</v-icon> Home</NuxtLink>

        <NuxtLink class="nav-link" to="/"><v-icon>mdi-store</v-icon> Shop</NuxtLink>

        <NuxtLink class="nav-link" to="/"><v-icon>mdi-info</v-icon> About</NuxtLink>

        <NuxtLink class="nav-link" to="/"><v-icon>mdi-home</v-icon> Contact</NuxtLink>
      </div>
      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
.nav-link {
  color: black;
  margin-right: 12px;
  text-decoration: none;

  &hover {
    cursor: pointer;
    border-bottom: black;
  }
}
</style>