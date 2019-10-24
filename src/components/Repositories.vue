<template>
    <v-data-table :headers="headers" :search="search" :items="information" sort-by="date" class="elevation-1" >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Repositories</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

        <v-spacer></v-spacer>
        <!-- <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
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
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-toolbar>
    </template>
    
    <template v-slot:item.report="{ items }">
      <v-btn depressed small color="primary">Report</v-btn>
    </template>

    <template v-slot:item.action="{ item }">
      <router-link to="/Information">
      <v-icon medium > mdi-note </v-icon>
      </router-link>
      <!-- ต้องมาปรับแก้ใช้ แบบ axios เพื่อส่งค่าไปบอกว่าเป็นโปรเจ็คไหนทีหลัง -->
      <router-link to="/Editinfo">
      <v-icon medium class="mr-2" @click="editItem(item)"> mdi-pen </v-icon>
      </router-link>
      <v-icon medium @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    data () {
      return {
        search: '',
        dialog: false,
        headers: [
          {
            text: 'Project',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Staff',
            align: 'left',
            sortable: false,
            value: 'owner',
          },
          { text: 'Sending Date', value: 'date' },
          { text: 'Predicted Price', value: 'price' },
          { text: 'Report', value: 'report', sortable: false },
          { text: 'Action', value: 'action', sortable: false },
        ],
        information: [],
    editedIndex: -1,
    editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      }
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.information = [
          {
            name: 'project01',
            owner: 'Alice',
            date: '01/01/19',
            price: 12500000
          },
          {
            name: 'project02',
            owner: 'Bob',
            date: '01/01/19',
            price: 25000000
          },
          {
            name: 'project03',
            owner: 'Bob',
            date: '02/01/19',
            price: 40000000
          },
          {
            name: 'project04',
            owner: 'Katy',
            date: '02/01/19',
            price: 35000000
          },
          {
            name: 'project05',
            owner: 'Katy',
            date: '05/01/19',
            price: 1050000
          },
          {
            name: 'project06',
            owner: 'Blair',
            date: '06/01/19',
            price: 25400000
          },
          {
            name: 'project07',
            owner: 'Alice',
            date: '08/01/19',
            price: 3575000         },
          {
            name: 'project08',
            owner: 'Alice',
            date: '08/01/19',
            price: 87000000
          },
          {
            name: 'project09',
            owner: 'Blair',
            date: '09/01/19',
            price: 51000000
          },
          {
            name: 'project10',
            owner: 'Blair',
            date: '09/01/19',
            price: 65000000         },
        ]},

      editItem (item) {
        this.editedIndex = this.information.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        
        // ดึงค่าจากแถวนั้นๆที่กด
        console.log(Object.assign({}, item));
        // ดึงชื่อโปรเจค
        console.log(Object.assign({}, item).name);
       },

      deleteItem (item) {
        const index = this.information.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.information.splice(index, 1)
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
}
</script>