<template>
  <form class="container">

    <v-text-field
      v-model="name"
      :error-messages="nameError"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      :error-messages="lastnameError"
      :counter="10"
      label="Lastname"
      required
      @input="$v.lastname.$touch()"
      @blur="$v.lastname.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailError"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'visibility_off' : 'visibility'"
      :type="show1 ? 'text' : 'password'"
      :rules="[]"
      name="input-10-1"
      label="Password"
      hint="At least 6 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn @click="handler">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>

  </form>
</template>


<script>
  import firebase from 'firebase';
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from 'axios'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      lastname:{required, maxLength: maxLength(10) },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },
    data: function() {
      return {
        show1: false,
        name: '',
        lastname: '',
        email: '',
        password: '',
        select: null,
        checkbox: false
      };
    },
    computed: {
      checkboxErrors () {
        const errors = [];
        if (!this.$v.checkbox.$dirty) return errors;
        !this.$v.checkbox.checked && errors.push('You must agree to continue!');
        return errors;
      },
      nameError () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
        !this.$v.name.required && errors.push('Name is required.');
        return errors
      },
      lastnameError () {
        const errors = [];
        if (!this.$v.lastname.$dirty) return errors;
        !this.$v.lastname.maxLength && errors.push('Lastname must be at most 10 characters long');
        !this.$v.lastname.required && errors.push('Lastname is required.');
      },
      emailError () {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push('Must be valid e-mail');
        !this.$v.email.required && errors.push('E-mail is required');
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch();
        console.log("First name: ",this.name , " ", "last name: ", this.lastname, "email: ", this.email)
      },
      clear () {
        this.$v.$reset();
        this.name = '';
        this.email = '';
        this.checkbox = false;
        this.lastname = '';
        this.password = '';
      },
      signUp: function(e) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
              window.history.go(this.$router.push("/"));
            },
            err => {
              alert(err.message);
            });
        e.preventDefault();
      },
      AddUserToDB: function () {
        let data = {
          name: this.name,
          lastname: this.lastname,
          email: this.email,

        };
        axios.post('https://air-bnb-clone-994ef.firebaseio.com/users.json', data)
          .then(res => console.log(res))
          .catch(error => console.log(error));
      },
      handler:function(){
        this.submit();
        this.AddUserToDB();
        this.signUp();
      }
    }
  }
</script>

<style>
  /*{*/
    /*color: #d9534f;*/
  /*}*/
</style>
