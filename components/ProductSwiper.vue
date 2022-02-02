<template>
  <v-sheet
    class="my-2 mx-auto"
    elevation="8"
    max-width="900px"
    width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="product in products"
        :key="product.id"
        v-slot="{ toggle }"
      >
      
        <v-card
          class="ma-2"
          height="350"
          width="245"
          @click="toggle"
          elevation="2"
        > 
          <v-sheet color="grey lighten-4">

          <v-skeleton-loader
            max-width="245"
            height="160"
            type="image">
          <v-img 
          max-height="250" 
          height="169" 
          class="ma-0"
          width="245"
          :src="product.thumbnail"></v-img>
          
          </v-skeleton-loader>
          </v-sheet>
        
          <v-card-title class="my-0">{{ product.name }}</v-card-title>

          <v-card-text class="mx-0">
            <v-row align="center" class="mx-0">
              <v-rating
                :value="product.ratting"
                color="amber"
                dense
                half-increments
                readonly
                size="12">
              </v-rating>
                <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
          
          <div class="mt-3  text-subtitle-1">$ • From {{ product.brand }}</div>         

          </v-card-text>
          <v-row align="center" class=" mx-0">
            
            <v-col class="mx-0 px-0">
              <v-card-title >Price: </v-card-title>
            </v-col>
            
            <v-col class="mx-0 px-0"> 
              <v-row>
                <v-col>
                  <v-card-text>
                    <div :class="`${ product.isSale ? 'text-decoration-line-through' : '' }`" width="100%" color="black">  {{ product.price }}  </div>
                  </v-card-text>
                </v-col>

                <v-col :v-if="product.isSale">
                  <v-card-text>
                    <div width="100%" color="black">{{ product.salePrice }}</div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    name: "ProductSwiper",
    props: {
      products: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      model: null,
    }),

    created() {
      console.log(this.products)
    }
  }
</script>