<template>
  
  <div>
    <v-container class="d-flex ma-auto mt-2">
    
    <v-sheet
      class="pa-12 mx-auto"
      color="grey lighten-5"
      height="1300"
      width="1400">
      
      <v-row class="" justify-space-between>
        <v-col>
          <v-sheet
            color="grey lighten-5"
            class="pa-3"
            width="600"
            >
           
            <v-skeleton-loader
              class="mx-auto"
              max-width="600"
              width="600"
              height="450"
              type="card"
            >
              <!-- Images Here DOWN-->

              <!-- Images Here UP -->
            </v-skeleton-loader>

          </v-sheet>
        </v-col>

        <v-col>
          <ProductColumn />
        </v-col>
      </v-row>
    
    </v-sheet>  
  </v-container>
  </div>

</template>
<script>

import ProductColumn from './ProductColumn.vue';

export default {
  components: {
    ProductColumn,
  }
}
</script>

<style>

</style>