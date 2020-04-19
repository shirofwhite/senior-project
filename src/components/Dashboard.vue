<template>
<div>
  <menubar/>
  <br>
  <v-card flat style="margin-top:2%">
  
    <v-row>
      <v-col cols="8" md="3">
        <v-card >
          <!-- <canvas id="barChart3"></canvas> -->
        </v-card>
      </v-col>
      <v-col cols="8" md="3">
        <v-card >
          <!-- <canvas id="myCharts"></canvas> -->
        </v-card>
      </v-col>
      <v-col cols="8" md="3">
        <v-card >
          <!-- <canvas id="barCharts"></canvas> -->
        </v-card>
      </v-col>
      <v-col cols="8" md="3">
        <v-card >
          <!-- <canvas id="barCharts2"></canvas> -->
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" md="6">
        <!-- <v-row> -->
          <!-- <v-col cols="8" md="6"> -->
            <v-card  dark><br>
              <div style="margin-top:2%"  class="font-weight-light text-uppercase text-center header">most price:</div><br>
              <div style="margin-top:2%"  class="font-weight-bold orange--text text-uppercase text-center display-1">Economy</div><br>
            </v-card>
          <!-- </v-col> -->
        <!-- </v-row> -->
        <!-- <v-row> -->
          <!-- <v-col cols="8" md="6"> -->
           <v-card ><br>
              <div style="margin-top:2%"><p class="font-weight-light text-uppercase text-center header">Economy</p></div><br>
            </v-card>
          <!-- </v-col> -->
        <!-- </v-row> -->
      <v-row>
        <v-col cols="3" md="6">
          <v-card >
          <canvas id="barCharts2"></canvas>
        </v-card> 
        </v-col> 
        <v-col cols="3" md="6">
          <v-card >
          <canvas id="barChart3"></canvas>
        </v-card>
        </v-col> 
      </v-row> 
      <v-row>
         <v-col cols="8" md="6">
        <v-card >
          <canvas id="myCharts"></canvas>
        </v-card>
      </v-col>
      <v-col cols="8" md="6">
        <v-card >
          <canvas id="barCharts"></canvas>
        </v-card>
      </v-col>  
      </v-row>      
      </v-col>
      <v-col cols="8" md="6">
        <v-card>
            <v-card-title>
              Nutrition
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
            </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8" md="3">
            <v-card ><br>
              <div style="margin-top:2%"><p class="font-weight-light text-uppercase text-center display-1">Economy</p></div><br>
            </v-card>
      </v-col>
      <v-col cols="8" md="3">
            <v-card ><br>
              <div style="margin-top:2%"><p class="font-weight-light text-uppercase text-center display-1">Economy</p></div><br>
            </v-card>
      </v-col>
      <v-col cols="8" md="3">
            <v-card ><br>
              <div style="margin-top:2%"><p class="font-weight-light text-uppercase text-center display-1">Economy</p></div><br>
            </v-card>
      </v-col>
      <v-col cols="8" md="3">
            <v-card ><br>
              <div style="margin-top:2%"><p class="font-weight-light text-uppercase text-center display-1">Economy</p></div><br>
            </v-card>
      </v-col>
    </v-row>
    <br>
  </v-card>  
 
</div>
</template>

<script>
/* eslint-disable */

import "leaflet";
import menubar from '@/components/menubar'
import axios from 'axios'

export default {
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ]
      }
  },

   components: {
      menubar,
  },

  mounted() {

    var ct = document.getElementById("barChart3").getContext("2d");
    var barCharts3 = new Chart(ct, {
      type: "bar",
      data: {
        labels: ["ห้องมุม", "ห้องกลาง", "ห้องริม"],
        datasets: [
          {
            label: "จำนวนอสังหาริมทรัพย์",
            // data: [12, 19, 3, 5, 2, 3],
            data: [11, 35, 9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
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
        }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
        }]
    }
      }
    });

    var ctx = document.getElementById("myCharts").getContext("2d");
    var myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [56, 35, 12, 4],
            backgroundColor: ["#FB635D", "#FBF383", "#64FFDA", "#039BE5"]
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["1 Bed/ 1 Bath", "2 Bed/ 1 Bath", "2 Bed/ 2 Bath", "อื่นๆ"]
      },
      options: {}
    });

    var ctx = document.getElementById("barCharts");
    var barCharts = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Economy", "High Class", "Luxury", "Ultimate"],
        datasets: [
          {
            label: "จำนวนอสังหาริมทรัพย์",
            data: [11, 17, 9, 5],
            // data: [11, 12, 3, 4, 3, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
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
        }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
        }]
    }
      }
    });

    var ctx = document.getElementById("barCharts2");
    var barCharts2 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["ติดอาคาร", "เปิดโล่ง", "สวนสาธารณะ", "สระว่ายน้ำ", "แม่น้ำ"],
        datasets: [
          {
            label: "จำนวนอสังหาริมทรัพย์",
            // data: [12, 19, 3, 5, 2, 3],
            data: [21, 15, 9, 11, 4],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
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
        }],
        yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
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