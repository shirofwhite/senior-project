<template>
  <div>
     <menubar/>

    <v-data-table :headers="headers" :search="search" :items="information" sort-by="date" class="elevation-1" >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Repositories</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <!-- <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New</v-btn>
          </template> -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <!-- <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </!--> 

            <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
    <template v-slot:item.price="{ item }">
      <v-chip :color="getColor(item.price)" dark v-if="item.price === 3">Ultimate</v-chip>
      <v-chip :color="getColor(item.price)" dark v-if="item.price === 2">Luxury</v-chip>
      <v-chip :color="getColor(item.price)" dark v-if="item.price === 1">High</v-chip>
      <v-chip :color="getColor(item.price)" dark v-if="item.price === 0">Economy</v-chip>
    </template>

    <!-- <template v-slot:item.approved="{ active,toggle }">
      <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox> -->
      <!-- <v-btn depressed small color="success" >Approved</v-btn> -->
    <!-- </template> -->

    <template v-slot:item.report="{ item }">
      <v-btn depressed small color="success"  @click="report(item)">Report</v-btn>
    </template>

    <template v-slot:item.action="{ item }">
       <!-- <router-link :to="{ path: '/Information/' + Object.assign({}, item).name}" > -->
        <v-icon medium class="mr-2" @click="infoItem(item)" color="primary"> mdi-note </v-icon>
       <!-- </router-link> -->
        <!-- <v-icon medium class="mr-2" @click="editItem(item)" > mdi-pen </v-icon> -->
        <v-icon medium class="mr-2" @click="deleteItem(item)" color="error"> mdi-delete </v-icon>
    </template>
    
    <template v-slot:no-data>
      <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
    </template>
  </v-data-table>
  </div>
</template>

<script>
/* eslint-disable */
import menubar from '@/components/menubar'
import axios from "axios";

export default {
   components: {
      menubar,
  },
    data () {
      return {
        search: '',
        dialog: false,
        headers: [
          { text: 'Project', align: 'left', value: 'name' },
          { text: 'Staff', align: 'left', value: 'owner' },
          { text: 'Inspection Date', value: 'date' },
          { text: 'Predicted Price', value: 'price', sortable: false },
          // { text: 'Approved', value: 'approved', sortable: false },
          { text: 'Report', value: 'report', sortable: false },
          { text: 'Action', value: 'action', sortable: false },
        ],
        information: [],
        
    // editedIndex: -1,
    // editedItem: {
      //   name: '',
      //   calories: 0,
      //   fat: 0,
      //   carbs: 0,
      //   protein: 0,
      // },
      // defaultItem: {
      //   name: '',
      //   calories: 0,
      //   fat: 0,
      //   carbs: 0,
      //   protein: 0,
      // },
      }
    },

    computed: {
      formTitle (val) {
        return 'Report'
      },
    },

    watch: {
      dialog (val) {
        val 
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        var url = "http://localhost:3000/repositories/getAllData";
      axios
        .get(url)
        .then(response => {
          console.log(response.data.rows[0]);
          console.log(response.data.rows[0].inspectiondate)

          if (response.data.rows.predictedPrice === 3) response.data.rows.predictedPrice = 'Ultimate'
          else if (response.data.rows.predictedPrice === 2) response.data.rows.predictedPrice = 'Luxury'
          else if (response.data.rows.predictedPrice === 1) response.data.rows.predictedPrice = 'High'
          else if (response.data.rows.predictedPrice === 0) response.data.rows.predictedPrice = 'Economy'

          response.data.rows.forEach(inf =>

          this.information.push({
            name: inf.projectName,
            owner: inf.staffName,
            date: inf.inspectiondate,
            price: inf.predictedPrice
          }))
        })
        .catch(error => {
          console.log("NOOO");
        });
      },

      getColor (price) {
        if (price === 3) return '#BD0026'
        else if (price === 2) return '#FC4E2A'
        else if (price === 1) return '#FD8D3C'
        else if (price === 0) return '#FBC02D'
      },


      // editItem (item) {
      //   console.log(item)
      //   console.log(Object.assign({}, item));
      //   this.$router.push('/Editinfo/'+ Object.assign({}, item).name);
      //       console.log(Object.assign({}, item).name)
        // console.log(this.project.project01);
        // axios
        // .get("http://localhost:8080/#/Editinfo/" + Object.assign({}, item).name)
        // .then(response => {
        //   // console.log(response.data);
        //   // this.Users = response.data;
        // })
        // .catch(error => {
        //   console.log(error);
        // });
        // this.editedIndex = this.information.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        // this.dialog = true
        
        // // ดึงค่าจากแถวนั้นๆที่กด
        // console.log(Object.assign({}, item));
        // // ดึงชื่อโปรเจค
        // console.log(Object.assign({}, item).name);
      //  },

      deleteItem (item) {
        const index = this.information.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.information.splice(index, 1)
      },
      infoItem (item) {
            this.$router.push('/Information/' + Object.assign({}, item).name);
            console.log(Object.assign({}, item).name)
             
      },
      report(item) {
        console.log(item)
        console.log(Object.assign({}, item).name);
        this.dialog = true
      },

    //   close () {
    //     this.dialog = false
    //     setTimeout(() => {
    //       this.editedItem = Object.assign({}, this.defaultItem)
    //       this.editedIndex = -1
    //     }, 300)
    //   },

    //   save () {
    //     if (this.editedIndex > -1) {
    //       Object.assign(this.information[this.editedIndex], this.editedItem)
    //     } else {
    //       this.desserts.push(this.editedItem)
    //     }
    //     this.close()
    //   },
    }
    /* eslint-enable */ 
}
</script>