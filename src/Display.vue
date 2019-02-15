<template>
  <div >
    <div>
      <h2>Your choice</h2>
      <a href="#" class="list-group-item bg-light ">{{people}} guests</a>
      <a href="#" class="list-group-item bg-light">From {{fromDate}} to {{toDate}}</a>
      <a href="#" class="list-group-item bg-light">Location: {{location}}</a>
    </div>
    <hr>

    <div class="container-fluid">
      <div class="row" >
        <div class="col-12">
          <Apartment-list :by="by" :what="what"></Apartment-list>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Display',
    data(){
      return{
        by: "city",
        what: this.location
      }
    },
    //Ovde se precekvet
    props:['people','location','fromDate','toDate'],
  }
</script>
<style>
div a{
  display: inline;
}
</style>
