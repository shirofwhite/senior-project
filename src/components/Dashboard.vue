<template>
  <div style="width:95%; margin-left:2%;">
    <h2 style="margin-top:1%;">เขตดุสิต</h2>
    <br> <v-divider></v-divider> <br>


      <div id="map"></div>

     <!-- <v-card
    class="mt-4 mx-auto"
    max-width="400"
    max-height="300"
    style="margin-left:30%;"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="10"
      max-width="calc(100% - 36px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      >
      </v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card> -->
  </div>
</template>

<script>
/* eslint-disable */

import 'leaflet'
const L = window.L;
export default {
  data: () => ({
   labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        (200,321),
        (675,241),
        (410,346),
        (390,643),
        (310,543),
        (460,264),
        (250,542),
        (240,254),
      ],
      value2: [
        220,
        665,
        410,
        290,
        380,
        460,
        250,
        640,
      ],
  }),

  mounted(){
    const map = L.map('map').setView([13.723, 100.6019], 10.5);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //  maxZoom: 10,
        id: 'mapbox.light', accessToken: 'pk.eyJ1Ijoic2hpcm9md2hpdGUiLCJhIjoiY2sxamh4OTJwMDFmeDNpbjJkaHJ6aTN1eSJ9.igzlhRIsG4MqK0nKLOGo9w'
    }).addTo(map);
  }
};
/* eslint-enable */
</script>

<style scoped>
#map { 
  height: 550px; 
  width:650px;
  margin-right:20%;
  }
.v-sheet--offset {
    top: -24px;
    left: -10%;
    position: relative;
  }
</style>