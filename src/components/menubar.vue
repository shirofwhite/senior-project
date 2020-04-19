<template>
    <v-app-bar color="deep-purple accent-4"  dense dark >
      <v-toolbar-items>
        <v-btn-toggle tile color="white accent-3" group >
        <v-btn text href="#/Mainpage">Mainpage</v-btn>
        <v-btn text href="#/Dashboard">Dashboard</v-btn>
        <v-btn text href="#/Repositories">Repositories</v-btn>
        </v-btn-toggle>
        <!-- <v-btn text>Prediction</v-btn> -->
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text href="#/">
        <v-icon  >mdi-account-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
   
    </v-app-bar>

</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>