<template>
  <div class="container">
    <div class="row">
      <button class="btn btn-default" style="background-color: #d9534f; margin-left: 2%; color: whitesmoke" v-on:click="AddApartment">Add Apartment</button>
    </div>
    <div class="row" style="padding-top: 5%; border-bottom: 1px solid #d9534f" >
      <h2>My Apartments</h2>
    </div>
    <div class="row">
      <Apartment-list style="width: 100%" :by="by" :what="what" ></Apartment-list>
    </div>

  </div>
</template>
<style>

</style>
<script>
  import firebase from 'firebase';
  export default {
    data(){
      return{
        by: "user",
        what: firebase.auth().currentUser.email
      }
    },
    methods:{
      AddApartment: function () {
        this.$router.push("/AddApartment")
      },

    }
  }
</script>
