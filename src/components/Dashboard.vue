<template>
<div>
  <menubar/>
  <v-tabs background-color="grey lighten-3" color="deep-purple accent-4" left>
    <v-tab> Dashboard </v-tab>
    </v-tabs>
  <v-card flat>
    <br>
    <v-row>
      <v-col cols="8" md="6">
            <v-card  dark><br>
              <div style="margin-bottom:2%"  class="font-weight-light text-uppercase text-center header">most price:</div><br>
              <div style="margin-top:2%"  class="font-weight-bold yellow--text text-uppercase text-center display-1" v-if="mprice == 'economy'">{{mprice}}</div>
              <div style="margin-top:2%"  class="font-weight-bold amber--text text-uppercase text-center display-1" v-if="mprice == 'high'">{{mprice}}</div>
              <div style="margin-top:2%"  class="font-weight-bold orange--text text-uppercase text-center display-1" v-if="mprice == 'luxury'">{{mprice}}</div>
              <div style="margin-top:2%"  class="font-weight-bold deep-orange--text text-uppercase text-center display-1" v-if="mprice == 'ultimate'">{{mprice}}</div>
              <br>
            </v-card>
      <v-row>
        <v-col cols="3" md="6">
          <v-card >
          <canvas id="barCharts2" width="300" height="175"></canvas><br>
        </v-card> 
        </v-col> 
        <v-col cols="3" md="6">
          <v-card >
          <canvas id="barChart3" width="300" height="175"></canvas><br>
        </v-card>
        </v-col> 
      </v-row> 
      <v-row>
         <v-col cols="8" md="6">
        <v-card >
          <canvas id="myCharts" width="300" height="175"></canvas><br>
        </v-card>
      </v-col>
      <v-col cols="8" md="6">
        <v-card >
          <canvas id="barCharts" width="300" height="175"></canvas><br>
        </v-card>
      </v-col>  
      </v-row>      
      </v-col>
      <v-col cols="8" md="6">
        <v-card>
            <v-card-title>
              <div class=" gray--text font-weight-medium headline">เขต/อำเภอ</div>
              <v-spacer></v-spacer>
              <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> -->
            </v-card-title>
            <v-data-table :headers="headers" :items="information" sort-by="sumproject" :sort-desc="[true]" multi-sort :search="search" :page.sync="page"
              :items-per-page="itemsPerPage"  hide-default-footer  class="elevation-1" @page-count="pageCount = $event">
                <!-- <template v-slot:item.economy="{ item }">
                  <v-chip :color="getColor(item.economy)" dark >{{item.economy}}</v-chip>
                </template> -->
                <template v-slot:item.action="{ item }">
                  <v-icon medium class="mr-2" @click="infoItem(item)" color="primary"> mdi-home-search </v-icon>
                </template>
              </v-data-table>
              <div class="text-center pt-3 pb-3 " style="margin-top:1.5%;">
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
              </div>
            </v-card>
      </v-col>
    </v-row>

    <!-- <v-row>
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
    </v-row> -->
    <br>
  </v-card>  
 
</div>
</template>

<script>
/* eslint-disable */

import "leaflet";
import menubar from '@/components/menubar'
import axios from 'axios'
import local from '../config-localhost'

export default {
  data: ()  => ({
        page: 1,
        pageCount: 10,
        itemsPerPage: 10,
        search: '',
        headers: [
          {
            text: 'เขต/อำเภอ',
            align: 'start',
            sortable: false,
            value: 'district',
          },
          { text: 'Economy', value: 'economy' },
          { text: 'High', value: 'high' },
          { text: 'Luxury', value: 'luxury' },
          { text: 'Ultimate', value: 'ultimate' },
          { text: 'รวมทั้งหมด', value: 'sumproject' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        information: [],
        mprice:'',
        class_economy:'',
        class_high: '',
        class_luxury: '',
        class_ultimate:''
      }
  ),

   components: {
      menubar,
  },
  methods:{
      infoItem (item) {
          if(Object.assign({}, item).sumproject != 0){
            this.$router.push('/Dashboard/' + Object.assign({}, item).district);
          }
            console.log(Object.assign({}, item).district)
             
      },
   
  },
  computed: {

  },

  mounted() {
  // mode price
  var url5 = local.ip + ":" + local.port + "/dashboard/getDashMostPrice";
      axios
        .get(url5)
        .then(response => {
          console.log(response.data.rows[0].mprice);
          this.mprice = response.data.rows[0].mprice
         })
        .catch(error => {
          console.log("NOOO");
      });

  // district table
    var url = local.ip + ":" + local.port + "/dashboard/getDashDist";
      axios
        .get(url)
        .then(response => {
          console.log(response.data.rows.length);

          // for(i = 0 ; i < response.data.rows.length; i++){
          //       console.log(response.data.rows[i]);
          // }
          response.data.rows.forEach(inf =>
          this.information.push({
            district: inf.districtName,
            economy: inf.eco,
            high: inf.high,
            luxury: inf.lux,
            ultimate: inf.ulti,
            sumproject: inf.sumprice
          }))
          })
        .catch(error => {
          console.log("NOOO");
      });

  // roomPosition
    var url2 = local.ip + ":" + local.port + "/dashboard/getDashPos";
      axios
        .get(url2)
        .then(response => {
          console.log(response.data.rows[0]);

          var ct = document.getElementById("barChart3").getContext("2d");
          var barCharts3 = new Chart(ct, {
            type: "bar",
            data: {
              labels: ["ห้องมุม", "ห้องกลาง", "ห้องริม"],
              datasets: [
                {
                  label: "จำนวนอสังหาริมทรัพย์",
                  data: [response.data.rows[0].corner, response.data.rows[0].middle, response.data.rows[0].edge],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
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
              title: {
                display: true,
                text: 'ตำแหน่งห้อง'
              },
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
        })
        .catch(error => {
          console.log("NOOO");
      });
      
  // roomPosition
    var url4 = local.ip + ":" + local.port + "/dashboard/getDashType";
      axios
        .get(url4)
        .then(response => {
          console.log(response.data.rows[0]);

    var ctx = document.getElementById("myCharts").getContext("2d");
    var myDoughnutChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [response.data.rows[0].studio, response.data.rows[0].twobed, response.data.rows[0].threebed, response.data.rows[0].extra],
            backgroundColor: ["#FB635D", "#FBF383", "#64FFDA", "#039BE5"]
          }
        ],

        labels: ["1 Bed", "2 Bed", "3 Bed", "อื่นๆ"]
      },
      options: {
        title: {
          display: true,
            text: 'รูปแบบห้องชุด'
        },
      }
    });
    })
        .catch(error => {
          console.log("NOOO");
      });

  // predictedPrice
    var url4 = local.ip + ":" + local.port + "/dashboard/getDashPrice";
      axios
        .get(url4)
        .then(response => {
          console.log(response.data.rows[0]);
          this.class_economy = response.data.rows[0].ec
          this.class_high = response.data.rows[0].hi
          this.class_luxury = response.data.rows[0].lu
          this.class_ultimate = response.data.rows[0].ul
   
          var ctx = document.getElementById("barCharts");
          var barCharts = new Chart(ctx, {
            type: "horizontalBar",
            data: {
              labels: ["Economy", "High", "Luxury", "Ultimate"],
              datasets: [
                {
                  label: "จำนวนอสังหาริมทรัพย์",
                  data: [response.data.rows[0].ec, response.data.rows[0].hi, response.data.rows[0].lu, response.data.rows[0].ul],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)"
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
              title: {
                display: true,
                text: 'ช่วงราคาอสังหาริมทรัพย์'
              },
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
        })
        .catch(error => {
          console.log("NOOO");
      });

  // roomView
    var url3 = local.ip + ":" + local.port + "/dashboard/getDashView";
      axios
        .get(url3)
        .then(response => {
          console.log(response.data.rows[0]);

          var ctx = document.getElementById("barCharts2");
          var barCharts2 = new Chart(ctx, {
            type: "pie",
            data: {
              // labels: ["ติดอาคาร", "เปิดโล่ง", "สวนสาธารณะ", "สระว่ายน้ำ", "แม่น้ำ"],
              datasets: [
                {
                  // label: "จำนวนอสังหาริมทรัพย์",
                  data: [response.data.rows[0].building, response.data.rows[0].city, response.data.rows[0].park, response.data.rows[0].pools, response.data.rows[0].river],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                  ],
                  // borderColor: [
                  //   "rgba(255,99,132,1)",
                  //   "rgba(54, 162, 235, 1)",
                  //   "rgba(255, 206, 86, 1)",
                  //   "rgba(75, 192, 192, 1)",
                  //   "rgba(153, 102, 255, 1)"
                  // ],
                  // borderWidth: 1
                }
              ],
              labels: ["ติดอาคาร", "เปิดโล่ง", "สวน", "สระว่ายน้ำ", "แม่น้ำ"],
            },
            options: {
              title: {
                display: true,
                text: 'วิว/ทัศนียภาพ'
              },
              // scales: {
              //   xAxes: [{
              //     gridLines: {
              //       offsetGridLines: true
              //     }
              //   }],
              //   yAxes: [{
              //     ticks: {
              //       beginAtZero: true,
              //     },
              //   }]
              // }
            }
          });
        })
        .catch(error => {
          console.log("NOOO");
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