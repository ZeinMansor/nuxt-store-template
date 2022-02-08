<template>
  
  <div>
    <v-container class="d-flex ma-auto mt-2">
      
      <!-- Use this color to add a texture to the background   -->
      <!-- color="grey lighten-5" -->
    <v-sheet
      class="pa-12 mx-auto rounded-circle"
      height="1300"
      width="1400">
      
      <v-row class="" justify-space-between>
        <v-col justify-center> 
         <v-card elevation="12">
            <v-sheet
            color="grey lighten-5"
            class="pa-3"
            width="600"
            >
           
            <v-skeleton-loader
              class="mx-auto radius"
              max-width="600"
              width="600"
              height="800"
              type="card"
            >
              <!-- Images Here DOWN-->

              <!-- Images Here UP -->

              <v-img 
                max-height="600" 
                height="500" 
                class="ma-3"
                width="550"
                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></v-img>

              <v-card-title>
                Hello
              </v-card-title>
            </v-skeleton-loader>

          </v-sheet>
         </v-card>
        </v-col>

        <v-col justify-center>
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