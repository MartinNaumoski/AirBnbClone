<template>
  <div class="row container custom" >
    <div class="col-6">
      <v-layout>
        <v-flex>
          <v-menu
            ref="menu"
            :close-on-content-click="false"
            v-model="menu"
            :nudge-right="-350"
            :nudge-top="100"
            :return-value.sync="dates"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px">
            <v-combobox
              slot="activator"
              v-model="dates"
              multiple
              chips
              small-chips
              label="Choose dates"
              prepend-icon="event"
              readonly>
            </v-combobox>
            <v-date-picker v-model="dates" multiple no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-8">
          <span id="checkLocationInput"></span>
          <input type="text" class="form-control" placeholder="Anywhere" v-model="where" aria-describedby="basic-addon1" @keyup="checkLicationInput()">
        </div>
        <div class="col-4">
            <router-link :to="{name:'Display'}">
              <button type="button" id="searchBtn" class="btn btn-danger" @click="callEvent()" :disabled=checkCredencials()>
                Search
              </button>
            </router-link>

        </div>
      </div>
      <br>
      <label>How many people:</label>
      <select v-model="people" class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>


  </div>
</template>

<script>
  import {eventBus} from './main';
  export default {
    data:function () {
     return{
       dates: [],
       menu: false,
       people:0,
       where:'',
       activeDisplay: false,
       searchActive:true
     }
   },
    methods:{
      //proverka da buttonot dali da e otkklucen
      checkCredencials(){
        if(this.people >0 && this.where !==''){
          return false;
        }
        else{
          return true;
        }
      },
      checkLicationInput(){
        let reg = '[a-zA-z|\s]';
        let tmp = document.getElementById("checkLocationInput");
        tmp.style.color="red"
          if(!this.where.match(reg)){
            tmp.innerText ="Only letters and spaces are allowed !!!";
          }
          else{
            tmp.innerText ="";
          }
      },

      //pustanje podatoci nakaj tatkoto (App)
       callEvent(){
        eventBus.$emit('EmitPeople',this.people);
        eventBus.$emit('EmitLocation',this.where);
        eventBus.$emit('EmitFromDate',this.dates[0]);
        eventBus.$emit('EmitToDate',this.dates[0])
       },


    }
  }
</script>
<style>
  .custom{
   margin-left: auto;
   margin-right: auto;
  }
</style>
