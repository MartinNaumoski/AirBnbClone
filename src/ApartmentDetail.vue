<template>
  <div>
    <div class="mr-4  ml-4">
      <button @click="goBack()" class="btn btn-danger mb-4"> Back </button>
      <div class="row" style="width: 100%; background-color: whitesmoke">
        <img :src="det.imgUrl" alt="" id="image"></img>
      </div>

      <hr>
      <div>
        <div class="card">
          <div class="card-header">
            <h2>Premium apartmant</h2>
          </div>
          <div class="card-body">
            <p class="card-text">{{det.description}}</p>
            <br><br>
            <ul>
              <li> <img src="./assets/people.png.png" style="width: 20px"> {{det.capacity}} guests </li>
              <li> <img src="./assets/rooms.jpg.jpg" style="width: 20px;">  {{det.amenities[0]}} {{det.amenities[1]}}
                {{det.amenities[2]}} {{det.amenities[3]}} {{det.amenities[4]}} {{det.amenities[5]}} {{det.amenities[6]}}
                {{det.amenities[7]}} {{det.amenities[8]}} {{det.amenities[9]}}</li>
              <li>  <img src="./assets/price.jpg.jpg" style="width: 20px;"> {{det.price}} $ per night</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {router}  from './main'
  import axios from 'axios';
  // import {eventBus} from './main';
  export default {
    props:['apartmentKey'],
    data(){
      return{
        det: '',
      }
    },
    created() {
        console.log('primeno ' + this.apartmentKey);
        axios.get('https://air-bnb-clone-994ef.firebaseio.com/apartment.json')
          .then(res => {
            console.log(res.data);
            let data = res.data;
            for (let key in res.data){
              console.log(key);
              if (key === this.apartmentKey){
                this.det = res.data[key];
                console.log("Toj so trebit:" + this.det)
              }
            }
            console.log("Toj so trebit:" + this.det)
          })
          .catch(error => console.log(error));
    },
    methods:{
      goBack(){
        this.$router.back();
      }
    }

  }
</script>
<style>
  #image{
   width: 70%;
    height: 450px;
    alignment: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
