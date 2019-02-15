<template>
  <div>
    <Header  class="mb-4"></Header>
    <router-view @EmitPeople="people=$emit" :people="people"
                 @EmitLocation="location=$emit" :location="location"
                 @EmitFromData="fromDate=$emit" :fromDate="fromDate"
                 @EmitToDate="toDate=$emit" :toDate="toDate"
                 @apartmentKey="apartmentKey=$emit" :apartmentKey="apartmentKey"
    ></router-view>
    <Footer-comp></Footer-comp>
  </div>
</template>

<script>
  import Header from './Header'
  import {eventBus} from './main';
  import Display from './main';
export default {
  components: {
    Header:Header,
    Display:Display
    },
  data:function () {
    return{
      people:0,
      location:'',
      fromDate:0,
      toDate:0,
      apartmentKey: ''
    }
  },
  //Pustanje podatoci nakaj deteto vo props tamu se precektvet
  created(){
    eventBus.$on('EmitPeople',(people)=>{
      this.people=people;
    }),
    eventBus.$on('EmitLocation',(location)=>{
      this.location=location;
    }),
    eventBus.$on('EmitFromDate',(fromDate)=>{
      this.fromDate=fromDate;
    }),
    eventBus.$on('EmitToDate',(toDate)=>{
      this.toDate=toDate;
    }),
      eventBus.$on('EmitApartmantKey',(apartmentKey)=>{
        this.apartmentKey = apartmentKey;
      })
  },
  methods:{

  }




}

</script>

<style>
  body{
    background-image: url("assets/brgd.jpg");
    background-repeat: repeat-y;
    background-size:  100% ;
  }

</style>
