<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide) in slides2"
      :key="slide.id"
		  :src="slide.img"
    >
    
    <v-row
      class="fill-height"
      align="center"
      justify="center">

      <div class="text-h2">
        {{ slide.text }} Slide
      </div>
    </v-row>
    
		</v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
				slides2: [
					{
						id: 1,
						text: "Slide 1 text",
						img: "https://media.istockphoto.com/photos/pen-and-ink-picture-id185072532?b=1&k=20&m=185072532&s=170667a&w=0&h=ga__eKz9bbDR3pCkJFWNbTdaCayzlq3htg4OPLqMqGU="
					},
					{
						id: 2,
						text: "Slide 2 text",
						img: "https://images.unsplash.com/photo-1583162557635-53d9931332c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5rJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
					},
					{
						id: 3,
						text: "Slide 3 text",
						img: "https://images.unsplash.com/photo-1478641300939-0ec5188d3802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluayUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
					},
					{
						id: 4,
						text: "Slide 4 text",
						img: "https://images.unsplash.com/photo-1577902425101-b27363a6ad35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5rJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
					},
				]
      }
    },
		async created() {

		}
  }
</script>

<style>

</style>