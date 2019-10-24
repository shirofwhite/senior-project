<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dense dark >
      <v-toolbar-items>
        <v-btn text href="#/">Mainpage</v-btn>
        <v-btn text href="#/Repositories">Repositories</v-btn>
        <!-- <v-btn text>Prediction</v-btn> -->
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-icon>mdi-account-circle</v-icon>
      </v-toolbar-items>
   
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
