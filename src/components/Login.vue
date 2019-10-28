<template>
    <div class="container" style="width:30%">
   <v-card class="overflow-hidden" style="margin-top:30%;" color="primary lighten-1" dark >
    <v-toolbar
      flat
      color="primary"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-text-field v-model="userName" :error-messages="userNameErrors"
        label="Username : "  required  @input="$v.userName.$touch()"  @blur="$v.userName.$touch()"
      ></v-text-field>
      <v-text-field v-model="password" :error-messages="passwordErrors"
        label="Password : "  required  @input="$v.password.$touch()"  @blur="$v.password.$touch()"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="" color="primary" @click="signIn">  Sign in </v-btn>
    </v-card-actions>
    <!-- <v-snackbar absolute bottom left >
      Your profile has been updated
    </v-snackbar> -->
  </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    userName:{ required },
    password:{ required }
  },
  data: () => ({
        userName: "",
        password: ""
    
  }),

  methods: {
    signIn(){
      // console.log(this.$v.userName.required)
      this.$v.$touch()
      if (this.$v.userName.required == true && this.$v.password.required == true){
        this.$router.push('/Mainpage');
      }
    }
  },

  computed: {
    userNameErrors() {
      const errors = [];
      if (!this.$v.userName.$dirty) return errors;
      !this.$v.userName.required && errors.push("Incorrected");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Incorrected");
      return errors;
    },
  }
}
/* eslint-enable */
</script>