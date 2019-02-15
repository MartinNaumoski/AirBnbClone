import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Search from './Search';
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import Display from './Display';
import SignUp from './SignUp';
import Vuelidate from 'vuelidate';
import LogIn from './LogIn';
import Footer from './Footer';
import Carousel from './Carousel';
import ApartmentList from './ApartmentList'
import ApartmentListItem from './ApartmentListItem'
import ApartmentDetail from './ApartmentDetail'
import AddApartment from './AddApartment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueResource from 'vue-resource'
import MyAccount from './MyAccount'
import firebase from 'firebase/app'

let config = {
  apiKey: "AIzaSyBKR8pLVoFLgXrX6tqxKnrD0F9KpG94OUQ",
  authDomain: "airbnb-e0b24.firebaseapp.com",
  databaseURL: "https://airbnb-e0b24.firebaseio.com",
  projectId: "airbnb-e0b24",
  storageBucket: "airbnb-e0b24.appspot.com",
  messagingSenderId: "1001310340054"
};

firebase.initializeApp(config);

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
});



library.add(faUserSecret);

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueResource);

let routes = [
  {
    path: '/',
    name:'Home',
    component: Search,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/AddApartment',
    name:'AddApartment',
    component: AddApartment,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/MyAccount',
    name:'MyAccount',
    component: MyAccount,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/SearchDetails',
    name: 'Display',
    component: Display,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ApartmentDetail',
    name: 'ApartmentDetail',
    component: ApartmentDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component: SignUp,
    meta: {
      requiresGuest: true
    }
  },
  {
    path:'/LogIn',
    name:'LogIn',
    component: LogIn,
    meta: {
      requiresGuest: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.component('Apartment-list',ApartmentList);
Vue.component('Apartment-list-item-comp',ApartmentListItem);
Vue.component('Carousel-comp',Carousel);
Vue.component('Footer-comp',Footer);
Vue.component('LogIn-comp',LogIn);
Vue.component('SignUp-comp',SignUp);
Vue.component('Display-comp',Display);
Vue.component('search-comp',Search);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('my-account-comp', MyAccount);
Vue.component('add-apartment', AddApartment);
Vue.component('apartment-detail-comp', ApartmentDetail);


export const eventBus = new Vue();


// // Header Guards (Code for AUTHENTICATION)

routes.beforeEach((to, from, next) => {
        // Check for requiredAuth guard
        if(to.matched.some(record => record.meta.requiresAuth)) {
          // Check if NOT logged in
          if(!firebase.auth().currentUser) {
            // Go to login
            next({
              path: '/LogIn',
              query: {
                redirect: to.fullPath
              }
            });
    }
    else {
      // Proceed to route
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if(firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }
    else {
      // Proceed to route
      next();
    }
  }
  else {
    // Proceed to route
    next();
  }
});

export default {
  routes,
  // firestoreApp
  //db
}
