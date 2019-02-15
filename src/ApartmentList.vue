<template>
  <div>
    <ul id="List">
      <li v-for="item in items" v-bind:key="item.id">
        <Apartment-list-item-comp :item="item"></Apartment-list-item-comp>
      </li>
    </ul>
  </div>
</template>


<script>
  import axios from 'axios';
  export default {
    name: 'ApartmentList',
    props: ['by', 'what'],
    data() {
      return {
        items: []
      }
    },
    created() {
      console.log(this.by + " " + this.what);
      axios.get('https://air-bnb-clone-994ef.firebaseio.com/apartment.json')
        .then(res => {
          console.log(res);
          const data = res.data;
          const apartments = [];
          for (let key in data){
            const apartment = data[key];
            apartment.id = key;
            console.log(this.by + " " +  this.what);
            if (apartment[this.by] === this.what){
              apartments.push(apartment)
            }
          }
          this.items = apartments;
        })
        .catch(error => console.log(error));
    }

  }



</script>
<style>
  ul{
    list-style: none;
  }
</style>
