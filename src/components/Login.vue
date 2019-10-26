<template>
    <div class="container" style="width:40%">
   <v-card
    class="overflow-hidden"
    color="primary lighten-1"
    dark
  >
    <v-toolbar
      flat
      color="primary"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        label="Username : "
      ></v-text-field>
      <v-text-field
        label="Password : "
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    account: {
        username: "",
        password: ""
    },
  })
}
/* eslint-enable */
</script>