<template>
  <v-card elevation="1">
  <div class="pa-4">
    <h1 class="">Product Name</h1>

		<v-row>

      <v-col>
        <v-rating
          value="3"
          color="amber"
          dense
          half-increments
          readonly
          size="12">
        </v-rating>
      </v-col>

      <v-col>
        <p> 3 </p>
      </v-col>

    </v-row>

    <v-row dense>
      <v-col>

        
      </v-col>
      <v-col>
      

      </v-col>
    </v-row>

    <h3> Our finist ben </h3>


    <ul v-for="decription in list" :key="decription"> 
      <li> {{decription}} </li> 
    </ul>
  </div>
  </v-card>
</template>

<script>
export default {
	name: 'ProductColumn',

  data: function() {
    return {
      list: [
        'Some description',
        'Sedcond Descrption about the product',
        'And more talk'
      ]
    }
  }


}
</script>

<style>

</style>