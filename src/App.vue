<template>
  <v-app>
    <!-- <v-app-bar color="deep-purple accent-4"  dense dark >
      <v-toolbar-items>
        <v-btn-toggle
          tile
          color="white accent-3"
          group
        >
        <v-btn text href="#/Mainpage">Mainpage</v-btn>
        <v-btn text href="#/Repositories">Repositories</v-btn>
        </v-btn-toggle>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-icon>mdi-account-circle</v-icon>
      </v-toolbar-items>
   
    </v-app-bar> -->

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
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
