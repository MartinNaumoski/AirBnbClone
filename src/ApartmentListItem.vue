<template>
  <div class="container" v-on:click="sendKey">
    <div class="row">
      <div class="col-5">
        <p style="display: none" id="id">{{item.id}}</p>
        <!--<Carousel-comp :images="img"></Carousel-comp>-->
        <img :src="img" alt=""></img>
      </div>
      <div id="apartmentDescriptionPoints" class="col-7 align-self-center">
        <div class="row">

            <h1 id="Name">{{item.title}}</h1>

        </div>
        <div class="row">
          <h4 id="shortDescription1">{{item.amenities[8]}} {{item.amenities[7]}} {{item.amenities[6]}} {{item.amenities[9]}}</h4>
        </div>
        <div class="row">
          <h4 id="shortDescription2">{{item.amenities[0]}} {{item.amenities[1]}} {{item.amenities[2]}}
            {{item.amenities[3]}} {{item.amenities[4]}} {{item.amenities[5]}}</h4>
        </div>
        <div class="row" style="margin-top: 20%">
          <div class="col-md-4">
            <h3 id="rating" v-on:load="setStars()">
              <span id="ratingNumber">{{item.grade}}</span>

            </h3>
          </div>
          <div class="col-md-8" >
            <h4 id="price">{{item.price}} $/night</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {eventBus} from './main';

  export default {
    props: ['item'],
    data () {
      return{
        img: this.item.imgUrl
      }
    },
    methods: {
      sendKey(){
        eventBus.$emit('EmitApartmantKey', this.item.id);
        console.log("pusteno " + this.item.id);
        this.$router.push('ApartmentDetail')
      }
    }
  }
</script>
<style scoped>

  .container{
    height: auto;
    margin-bottom: 10px;
    background-color:RGB(249,249,249);
  }
  .container:hover{
    border: 1px solid lightgray;
  }
  img{
    padding: auto;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  #Name{
    text-align: center;
  }
  #apartmentDescriptionPoints{
    width: 100%;
  }

  .row{
    width: 100%;
  }
  p {
    display:inline;
    overflow:hidden;
    white-space: nowrap;
  }
  #price{
    alignment: right;
    margin: auto;
    padding: auto;
  }

</style>
