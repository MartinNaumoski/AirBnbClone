
<template>
  <v-carousel
    height=300
    interval=4500

  >
      <v-carousel-item class="h"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>

  </v-carousel>
</template>
<script>
  export default {
    props:['images'],
    data () {
      return{
        items: this.images
      }
    }
  }
</script>
<style>
  h{
   height: 70px;
  }
</style>
