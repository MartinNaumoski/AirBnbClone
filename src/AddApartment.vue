<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <label for="title">Title: </label>
      </div>
      <div class="col-md-10">
        <input type="text" id="title" name="title">
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="description">Description: </label>
      </div>
      <div class="col-md-10">
        <textarea id="description" name="description" ></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label>Amenities</label>
      </div>
      <div class="col-md-10">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6">
              <label for="bedroom">Bedroom: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="bedroom" name="bedroom" size="4" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="bathroom">Bathroom: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="bathroom" name="bathroom" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="kitchen">Kitchen: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="kitchen" name="kitchen" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="living_room">Living room: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="living_room" name="living_room" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="dining_room">Dining room: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="dining_room" name="dining_room" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="balcony">Balcony: </label>
            </div>
            <div class="col-md-4">
              <input type="number" id="balcony" name="balcony" >
            </div>
          </div>
        </div>

        <div class="col-md-4">

          <div class="row">
            <div class="col-md-6">
              <label for="wifi">Wifi: </label>
            </div>
            <div class="col-md-4">
              <input type="checkbox" id="wifi" class="checkbox_my">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="parking">Parking: </label>
            </div>
            <div class="col-md-4">
              <input type="checkbox" id="parking" class="checkbox_my">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="breakfast">Breakfast: </label>
            </div>
            <div class="col-md-4">
              <input type="checkbox" id="breakfast" class="checkbox_my">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="garden">Garden: </label>
            </div>
            <div class="col-md-4">
              <input type="checkbox" id="garden" class="checkbox_my">
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="capacity">Capacity: </label>
      </div>
      <div class="col-md-10">
        <input type="number" id="capacity" name="capacity">
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="price">Price: </label>
      </div>
      <div class="col-md-10">
        <input type="number" id="price" name="price">
        <span>(enter the price in usd)</span>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="city">City: </label>
      </div>
      <div class="col-md-10">
        <input type="text" id="city" name="city">
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="country">Country: </label>
      </div>
      <div class="col-md-10">
        <input type="text" id="country" name="country">
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label for="address">Address: </label>
      </div>
      <div class="col-md-10">
        <input type="text" id="address" name="address">
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label>ImageUrl: </label>
      </div>
      <div class="col-md-10">
         <input type="text" id="imgUrl">
          <!--<v-btn raised @click="onPickFile">Upload Image</v-btn>-->
          <!--<input type="file" ref="fileInput" style="display: none" accept="image/*" @change="onFilePicked">-->

      </div>
    </div>
    <!--<div class="row">-->
      <!--<img :src="imageUrl" height="150"></img>-->
    <!--</div>-->

    <div class="row">
      <button class="btn btn-default" style="background-color: #d9534f; color: whitesmoke; margin-bottom: 50px;" v-on:click="AddApartmetToDB">Add Apartment</button>
    </div>
  </div>
</template>
<style>
  label{
    color: #d9534f;
    font-size: large;
  }
  input{
    border-bottom: 1px solid #d9534f;
    width: 100%;
    height: 100%;
    color: #d9534f;
    font-size: large;
    display: inline-block;
  }
  input[type="number"]{
    width: 75px;
  }
  textarea{
    width: 100%;
    height: 100px;
    border: 1px solid #d9534f;
    margin-top: 5px;
    font-size: large;
  }
  .checkbox_my{
    width: 60%;
    height: 60%;
    margin-top: 5%;

  ;
  }
</style>
<script>
  import axios from 'axios'
  import firebase from 'firebase';

  export default {
    data() {
      return {
        list: [],
        imageUrl: '',
        image: null
      }
    },
    methods:
      {
      addToAmenities: () => {
        let Amenities = [];
        let bedroom = document.getElementById('bedroom').value;
        let bathroom = document.getElementById('bathroom').value;
        let kitchen = document.getElementById('kitchen').value;
        let living_room = document.getElementById('living_room').value;
        let dining_room = document.getElementById('dining_room').value;
        let balcony = document.getElementById('balcony').value;
        let wifi = document.getElementById('wifi').checked;
        let parking = document.getElementById('wifi').checked;
        let breakfast = document.getElementById('wifi').checked;
        let garden = document.getElementById('wifi').checked;
        if (parseInt(bedroom) > 0) {
          Amenities.push(bedroom + ' bedroom/s')
        } else {
          Amenities.push("");
        }

        if (parseInt(bathroom) > 0) {
          Amenities.push(bathroom + ' bathroom/s')
        } else {
          Amenities.push("");
        }

        if (parseInt(kitchen) > 0) {
          Amenities.push(kitchen + ' kitchen/s')
        } else {
          Amenities.push("");
        }

        if (parseInt(living_room) > 0) {
          Amenities.push(living_room + ' living room/s')
        } else {
          Amenities.push("");
        }

        if (parseInt(dining_room) > 0) {
          Amenities.push(dining_room + ' dining room/s')
        } else {
          Amenities.push("");
        }

        if (parseInt(balcony) > 0) {
          Amenities.push(balcony + ' balcony/ies')
        } else {
          Amenities.push("");
        }

        if (wifi) {
          Amenities.push('Wifi')
        } else {
          Amenities.push("");
        }

        if (parking) {
          Amenities.push('Parking')
        } else {
          Amenities.push("");
        }

        if (breakfast) {
          Amenities.push('Breakfast')
        } else {
          Amenities.push("");
        }

        if (garden) {
          Amenities.push('Garden')
        } else {
          Amenities.push("");
        }

        return Amenities;
      },
      AddApartmetToDB: function () {
        let user_email = firebase.auth().currentUser.email;
        let amenities = this.addToAmenities();
        let data = {
          imgUrl: document.getElementById('imgUrl').value,
          title: document.getElementById('title').value,
          description: document.getElementById('description').value,
          capacity: document.getElementById('capacity').value,
          price: document.getElementById('price').value,
          city: document.getElementById('city').value,
          country: document.getElementById('country').value,
          address: document.getElementById('address').value,
          amenities: amenities,
          user: user_email,
        };
        axios.post('https://air-bnb-clone-994ef.firebaseio.com/apartment.json', data)
          .then(res => console.log(res))
          .catch(error => console.log(error));

        window.history.go(this.$router.push('/MyAccount'))
      }
      // onPickFile(){
      //   this.$refs.fileInput.click();
      // },
      // onFilePicked(event){
      //   const files = event.target.files;
      //   let fileName = files[0]. name;
      //   if (fileName.lastIndexOf('.') <= 0){
      //     return alert('Please add a valid file!')
      //   }
      //   const fileReader = new FileReader();
      //   fileReader.addEventListener('load', () =>{
      //     this.imageUrl = fileReader.result
      //   });
      //   fileReader.readAsDataURL(event.target.files[0]);
      //   this.image = files[0]
      // }
    }
  }
</script>
