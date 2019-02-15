<template>
  <div>
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li>
            <router-link :to="{name:'Home'}">
              <img src="./assets/airbnblogo.png" style="width: 100px">
            </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ul id="nav">
            <li v-if="isLoggedIn" id="userEmail"><span id="curentUser" class="black-text" v-on:click="myAccount">{{currentUser}}</span></li>
            <li v-if="!isLoggedIn">
              <router-link :to="{name:'LogIn'}">
                <button style="background-color: white" class="btn btn-default"> Log in</button>
              </router-link>
            </li>
            <li v-if="isLoggedIn">
              <router-link :to="{name:'LogIn'}">
                <button v-on:click="logOut" style="background-color: white" class="btn btn-default">Logout</button>
              </router-link>
            </li>
            <li v-if="!isLoggedIn">
              <router-link :to="{name:'SignUp'}">
                <button  class="btn btn-danger ml-2"> Sign up</button>
              </router-link>
            </li>
          </ul>
        </form>
      </div>
    </nav>

  </div>
</template>



<script>

  import firebase from 'firebase';

  export default {
    name: 'header',
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    created() {
      if(firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    },
    methods: {
      logOut: function() {
        firebase.auth().signOut().then(() => {
          // The code bellow reload and rerender
          window.history.go(this.$router.push("/"));
        });
      },
      myAccount: function () {
        this.$router.push('/MyAccount')
      }
    }
  }

  

</script>



<style>

  #nav{
    list-style-type: none;
    padding-top: 10px;
  }
  #nav li{
    float: left;
  }
  #userEmail {
    margin-top: 5px;
    padding-right: 10px;
  }
  #curentUser:hover {
    cursor: pointer;
  }


</style>
