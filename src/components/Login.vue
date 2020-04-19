<template>
    <div class="container" style="width:30%">
   <!-- <v-card class="overflow-hidden" style="margin-top:30%;" color="primary lighten-1" dark >
    <v-toolbar
      flat
      color="primary"
    > -->
     <v-card>
    <v-card-title class="headline font-weight-regular teal lighten-1 white--text" style="margin-top:30%;">Log In</v-card-title>
    <!-- <v-card-text> -->
      <!-- <v-icon>mdi-account</v-icon> -->
      <!-- <v-toolbar-title class="font-weight-light" >Login</v-toolbar-title> -->
      <v-spacer></v-spacer>
    <!-- </v-toolbar> -->
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
      <v-btn class="font-weight-regular teal lighten-1 white--text"  @click="signIn">  Sign in </v-btn>
    </v-card-actions>
    <!-- <v-snackbar absolute bottom left >
      Your profile has been updated
    </v-snackbar> -->
  </v-card>
   <v-dialog v-model="dialog" max-width="375px">
          <!-- <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New</v-btn>
          </template> -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            </v-card-actions>
          </v-card>
   </v-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  mixins: [validationMixin],

  validations: {
    userName:{ required },
    password:{ required }
  },
  data: () => ({
        userName: "",
        password: "",
        dialog: false,
    
  }),


  methods: {
    signIn(){
      // console.log(this.$v.userName.required)
      this.$v.$touch()
      var url = "http://localhost:3000/auth/'" + this.userName + "'/'" + this.password + "'";
      axios
        .get(url)
        .then(response => {
          console.log(response.data.rows[0]);
          let username = response.data.rows[0].userID
          let pass = response.data.rows[0].passWord
          if (this.$v.userName.required == true && this.$v.password.required == true ){
          if(this.userName == username && this.password == pass && response.data.rows[0].staffType == 1){
            console.log("SUCCESS");
            this.$router.push('/Mainpage');
          }
          else{
            this.dialog = true
          }
      
        }
        })
        .catch(error => {
          console.log("NOOO");
          this.dialog = true
        });
    },
      close () {
        this.dialog = false
      },
  },

    watch: {
      dialog (val) {
        val 
      },
    },
  computed: {
    formTitle (val) {
        return 'Incorrected Account'
      },
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