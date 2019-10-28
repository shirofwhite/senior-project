<template>
<div>
   <menubar/>

  <div style="width:95%; margin-left:2%;">
    <div class="headline font-weight grey--text" style="margin-top:1%;">เขตดุสิต</div>
    <v-divider></v-divider>
    <br />

    <v-row>
      <!-- <v-row> -->
        <!-- <div class="d-flex-column pa-2" outlined tile> -->
          <v-col md="5">
            <div id="map"></div>
          </v-col>
          <!-- <v-row md="6">
            <v-card class="mx-auto mt-4" max-width="320px" height="230px">
              <v-card-text class="pt-1">
                <div class="subheading font-weight-light grey--text">graph</div>
                <v-divider class="my-2"></v-divider>
              </v-card-text>

              <canvas id="myCharts"></canvas>
            </v-card>
          </v-row> -->
        <!-- </div> -->
      <!-- </v-row> -->
      <!-- </div> -->
      <!-- <v-divider class="mx-2"  vertical></v-divider> -->

      <div class="d-flex-column pa-2" outlined tile>
        <v-row>
          <div class="d-inline-flex pa-2"  outlined tile>
            <!-- <v-divider class="ml-12"  vertical></v-divider> -->

            <v-col md="7">
                 <v-card class="mx-auto" max-width="350px" height="240px">
                <v-card-text class="pt-1">
                  <div class="subheading font-weight-light grey--text">barCHART2</div>
                  <v-divider class="my-2"></v-divider>
                </v-card-text>

                <canvas id="barCharts2"></canvas>
              </v-card>
            </v-col>

            <v-col md="7">
              <v-card class="mx-auto" max-width="350px" height="240px">
                <v-card-text class="pt-1">
                  <div class="subheading font-weight-light grey--text">barCHART</div>
                  <v-divider class="my-2"></v-divider>
                </v-card-text>

                <canvas id="barCharts"></canvas>
              </v-card>
            </v-col>
          </div>
        </v-row>

        <v-row>
          <!-- <div class="d-inline-flex pa-2" outlined tile> -->
          <!-- <v-divider class="ml-12 mr-5"  vertical></v-divider> -->

          <v-col md="5">
            <v-card class="mx-auto" max-width="350px" height="250px">
              <v-card-text class="pt-1">
                <div class="subheading font-weight-light grey--text">lineGRAPH</div>
                <v-divider class="my-2"></v-divider>
              </v-card-text>
              <canvas id="lineChart" height="180"></canvas>
            </v-card>
          </v-col>

          <v-col md="6">
        <v-card class="mx-auto" max-width="320px" height="230px">
          <v-card-text class="pt-1" >
          <div class="subheading font-weight-light grey--text">graph</div>
          <v-divider class="my-2"></v-divider>
          </v-card-text>

          <canvas id="myCharts"></canvas>

        </v-card>
          </v-col>
          <!-- </div> -->
        </v-row>
      </div>
    </v-row>
  </div>
</div>
</template>

<script>
/* eslint-disable */

import "leaflet";
import menubar from '@/components/menubar'

const L = window.L;
export default {
  data: () => ({}),

   components: {
      menubar,
  },

  mounted() {
    const map = L.map("map").setView([13.723, 100.6019], 10.5);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //  maxZoom: 10,
        id: "mapbox.light",
        accessToken:
          "pk.eyJ1Ijoic2hpcm9md2hpdGUiLCJhIjoiY2sxamh4OTJwMDFmeDNpbjJkaHJ6aTN1eSJ9.igzlhRIsG4MqK0nKLOGo9w"
      }
    ).addTo(map);

    var geojson = {
      type: "FeatureCollection",
      crs: {
        type: "name",
        properties: {
          name: "เขตurn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      features: [
        {
          type: "GeometryCollection",
          properties: {
            id: 3,
            Name: "เขตดุสิต",
            value: 0
          },
          geometries: [
            {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [100.499179799999993, 13.772757],
                    [100.500329699999995, 13.772217899999999],
                    [100.501158899999993, 13.771833300000001],
                    [100.501282500000002, 13.771775999999999],
                    [100.501848899999999, 13.771359199999999],
                    [100.503642799999994, 13.769950400000001],
                    [100.504758600000002, 13.768716599999999],
                    [100.506380800000002, 13.766882600000001],
                    [100.506870000000006, 13.766340700000001],
                    [100.508938599999993, 13.7641315],
                    [100.509230400000007, 13.763773],
                    [100.509580999999997, 13.7635056],
                    [100.509838000000002, 13.7633718],
                    [100.510181900000006, 13.763026],
                    [100.513125900000006, 13.760108199999999],
                    [100.515417600000006, 13.7579072],
                    [100.516112800000002, 13.757156999999999],
                    [100.516687899999994, 13.7562982],
                    [100.517229900000004, 13.7550136],
                    [100.517459799999997, 13.7531835],
                    [100.519029000000003, 13.7527293],
                    [100.527749600000007, 13.7743217],
                    [100.537468700000005, 13.7978571],
                    [100.537156199999998, 13.7979103],
                    [100.533294100000006, 13.7998054],
                    [100.5324296, 13.7982704],
                    [100.531650499999998, 13.7983849],
                    [100.530715000000001, 13.7984516],
                    [100.529127000000003, 13.7988599],
                    [100.528251600000004, 13.7988933],
                    [100.526960700000004, 13.7986489],
                    [100.525754000000006, 13.7992934],
                    [100.525093100000007, 13.7992601],
                    [100.523874300000003, 13.7996768],
                    [100.522805599999998, 13.7998593],
                    [100.522312200000002, 13.799943499999999],
                    [100.5209045, 13.799976900000001],
                    [100.520071999999999, 13.800026900000001],
                    [100.519325199999997, 13.8002103],
                    [100.518333200000001, 13.8002515],
                    [100.516465100000005, 13.800329],
                    [100.514856600000002, 13.7965295],
                    [100.512118599999994, 13.7929081],
                    [100.508989400000004, 13.7897678],
                    [100.505959399999995, 13.786623199999999],
                    [100.505573299999995, 13.7862223],
                    [100.505291, 13.7857904],
                    [100.502991699999995, 13.7822715],
                    [100.5014532, 13.779029700000001],
                    [100.501042100000006, 13.7778373],
                    [100.499497500000004, 13.7733566],
                    [100.499179799999993, 13.772757]
                  ]
                ]
              ]
            }
          ]
        }
      ]
    };

    geojson = L.geoJson(geojson).addTo(map);

    var ct = document.getElementById("lineChart").getContext("2d");
    var linechart = new Chart(ct, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: "Prime and Fibonacci",
                borderColor: "#FFA6A6",
                data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
                fill: false
            },
            {
                label: "My Second dataset",
                borderColor:  "#8393FC",
                data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                fill: false
            }
        ]
      },

      // Configuration options go here
      options: {}
    });

    var ctx = document.getElementById("myCharts").getContext("2d");
    var myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["#FB635D", "#FBF383", "#36a2eb"]
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Red", "Yellow", "Blue"]
      },
      options: {}
    });
    var ctx = document.getElementById("barCharts");
    var barCharts = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            // data: [11, 12, 3, 4, 3, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
         scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
      }
    });

    var ctx = document.getElementById("barCharts2");
    var barCharts2 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            // data: [12, 19, 3, 5, 2, 3],
            data: [11, 12, 18, 4, 3, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
         scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
      }
    });

  }
};
/* eslint-enable */
</script>

<style scoped>
#map {
  height: 550px;
  width: 550px;
}
.v-sheet--offset {
  top: -24px;
  left: -10%;
  position: relative;
}
</style>