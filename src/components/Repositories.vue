<template>
  <div>
     <menubar/>

    <v-data-table :headers="headers" :search="search" :items="information" class="elevation-1" >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Repositories</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

        <v-spacer></v-spacer>

      </v-toolbar>
    </template>

    <template v-slot:item.predictedprice="{ item }">
      <v-chip :color="getColor(item.predictedprice)" dark v-if="item.predictedprice === 3">Ultimate</v-chip>
      <v-chip :color="getColor(item.predictedprice)" dark v-if="item.predictedprice === 2">Luxury</v-chip>
      <v-chip :color="getColor(item.predictedprice)" dark v-if="item.predictedprice === 1">High</v-chip>
      <v-chip :color="getColor(item.predictedprice)" dark v-if="item.predictedprice === 0">Economy</v-chip>
    </template>
    
    <template v-slot:item.marketprice="{ item }">
      <v-chip :color="getColor(item.marketprice)" dark v-if="item.marketprice === 3">Ultimate</v-chip>
      <v-chip :color="getColor(item.marketprice)" dark v-if="item.marketprice === 2">Luxury</v-chip>
      <v-chip :color="getColor(item.marketprice)" dark v-if="item.marketprice === 1">High</v-chip>
      <v-chip :color="getColor(item.marketprice)" dark v-if="item.marketprice === 0">Economy</v-chip>
    </template>

    <template v-slot:item.report="{ item }">
      <v-btn depressed small color="success"  @click="report(item)">Report</v-btn>
    </template>

    <template v-slot:item.action="{ item }">
        <v-icon medium class="mr-2" @click="infoItem(item)" color="primary"> mdi-note </v-icon>
        <!-- <v-icon medium class="mr-2" @click="deleteItem(item)" color="error"> mdi-delete </v-icon> -->
    </template>
    
    <template v-slot:no-data>
    </template>
  </v-data-table>
  </div>
</template>

<script>
/* eslint-disable */
import menubar from '@/components/menubar'
import axios from "axios"
import XLSX from 'xlsx'
import local from '../config-localhost'

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
          { text: 'Predicted Price', value: 'predictedprice', sortable: false },
          { text: 'Market Price', value: 'marketprice', sortable: false },
          // { text: 'Approved', value: 'approved', sortable: false },
          { text: 'Report', value: 'report', sortable: false },
          { text: 'Action', value: 'action', sortable: false },
        ],
        information: [],
        json:[],
        staffname: '',
        roomcat: '',
        gps: '',
        buildingname: '',
        floor: '',
        subdistrictname: '',
        districtname: '',
        province: '',
        projectname: '',
        inspectiondate: '',
        nearestbts: '',
        distancebts: '',
        buildingfloors: '',
        camfee: '',
        roomtype: '',
        buildingage: '',
        buildcondition: '',
        roomposition:'',
        roomview: '',
        pricebygov: '',
        buildcontrolact: '',
        units: '',
        arearoom: '',
        lobby: '',
        lift: '',
        swimmingpool: '',
        fitness: '',
        suana: '',
        jacuzzi: '',
        steam: '',
        library: '',
        garden: '',
        kidplay: '',
        parklot: '',
        automateparklot: '',
        golfcourse: '',
        movieroom: '',
        shop: '',
        maintanancecondition: '',
        fireinsurance: '',
        materialdesign: '',
        marketprice: '',
        marketpricesqm: '',
        facility: '',

      }
    },

    // computed: {
    //   formTitle (val) {
    //     return 'Report'
    //   },
    // },

    // watch: {
    //   dialog (val) {
    //     val 
    //   },
    // },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        var url = local.ip + ":" + local.port + "/repositories/getAllData";
      axios
        .get(url)
        .then(response => {
          console.log(response.data.rows[0]);
          console.log(response.data.rows[0].inspectiondate)

          if (response.data.rows.marketPriceClass === 3) response.data.rows.marketPriceClass = 'Ultimate'
          else if (response.data.rows.marketPriceClass === 2) response.data.rows.marketPriceClass = 'Luxury'
          else if (response.data.rows.marketPriceClass === 1) response.data.rows.marketPriceClass = 'High'
          else if (response.data.rows.marketPriceClass === 0) response.data.rows.marketPriceClass = 'Economy'

          if (response.data.rows.predictedPrice === 3) response.data.rows.predictedPrice = 'Ultimate'
          else if (response.data.rows.predictedPrice === 2) response.data.rows.predictedPrice = 'Luxury'
          else if (response.data.rows.predictedPrice === 1) response.data.rows.predictedPrice = 'High'
          else if (response.data.rows.predictedPrice === 0) response.data.rows.predictedPrice = 'Economy'

          response.data.rows.forEach(inf =>

          this.information.push({
            name: inf.projectName.split(".")[0],
            owner: inf.staffName,
            date: inf.inspectiondate,
            predictedprice: inf.predictedPrice,
            marketprice: inf.marketPriceClass
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

      // deleteItem (item) {
      //   // const index = this.information.indexOf(item)
      //   // confirm('Are you sure you want to delete this item?') && this.information.splice(index, 1)
      //   // var url = local.ip + ":" + local.port + "/repositories/delete/'" +  Object.assign({}, item).name + ".xlsx'";
      //   var url = local.ip + ":" + local.port +'/information/m/newdata/add'
      //   axios
      //     .post(url)
      //     .then(response => {
      //       console.log(response.data);
      //     })
      //       .catch(error => {
      //     console.log("NOOO");
      //   });       
      // },   

      infoItem (item) {
            this.$router.push('/Information/' + Object.assign({}, item).name + ".xlsx");
            console.log(Object.assign({}, item).name)
             
      },
      report(item) {
        console.log(item)
        console.log(Object.assign({}, item).name);

        var url = local.ip + ":" + local.port + "/information/getSomeData/'" +  Object.assign({}, item).name + ".xlsx'";
        axios
          .get(url)
          .then(response => {
            console.log(response.data);
            this.staffname = response.data.rows[0].staffName
            this.roomcat = response.data.rows[0].roomCategory
            this.gps = response.data.rows[0].latitude + " , " + response.data.rows[0].longtitude 
            this.buildingname = response.data.rows[0].buildingName
            this.floor = response.data.rows[0].floor
            this.subdistrictname = response.data.rows[0].subdistrictName
            this.districtname = response.data.rows[0].districtName
            this.province = response.data.rows[0].province
            this.projectname = response.data.rows[0].projectName
            this.inspectiondate = response.data.rows[0].inspectiondate
            this.nearestbts = response.data.rows[0].nearestBTS
            this.distancebts = response.data.rows[0].distanceFromBTS
            this.buildingfloors = response.data.rows[0].buildingFloor
            this.camfee = response.data.rows[0].camFee
            // this.roomtype = response.data.rows[0].roomType
            var rt  = response.data.rows[0].roomType
              if(rt == 1){ this.roomtype = '1 ห้องนอน'}
              if(rt == 2){ this.roomtype = '2 ห้องนอน'}
              if(rt == 3){ this.roomtype = '3 ห้องนอน'}
              if(rt == 4){ this.roomtype = 'Duplex'}
              if(rt == 5){ this.roomtype = 'Penthouse'}
            this.buildingage = response.data.rows[0].buildingAge
            // this.buildcondition = response.data.rows[0].buildingCondition
            var bs = response.data.rows[0].buildingCondition
              if(bs == 1){ this.buildcondition = 'ควรปรับปรุง'}
              if(bs == 2){ this.buildcondition = 'พอใช้'}
              if(bs == 3){ this.buildcondition = 'ดี'}
              if(bs == 4){ this.buildcondition = 'ดีเยี่ยม'}
            // this.roomposition = response.data.rows[0].roomPosition
            var rl = response.data.rows[0].roomPosition
              if(rl == 0){ this.roomposition = 'ห้องกลาง'}
              if(rl == 1){ this.roomposition = 'ห้องริม'}
              if(rl == 2){ this.roomposition = 'ห้องมุม'}
            // this.roomview = response.data.rows[0].roomView
            var rv = response.data.rows[0].roomView
              if(rv == 0){ this.roomview = 'วิวเมือง/เปิดโล่ง'}
              if(rv == 1){ this.roomview = 'วิวติดอาคาร/ทางด่วน'}
              if(rv == 2){ this.roomview = 'วิวสวน'}
              if(rv == 3){ this.roomview = 'วิวสระว่ายน้ำ'}
              if(rv == 4){ this.roomview = 'วิวแม่น้ำ'}
            this.pricebygov = response.data.rows[0].pricebyGov
            // this.buildcontrolact = response.data.rows[0].buildingControlAct
            var pl = response.data.rows[0].buildingControlAct
              if(pl == 1){ this.buildcontrolact = 'สีแดง (พาณิชยกรรม)'}
              if(pl == 2){ this.buildcontrolact = 'สีเหลือง (ที่อยู่อาศัยหนาแน่นน้อย)'}
              if(pl == 3){ this.buildcontrolact = 'สีส้ม (ที่อยู่อาศัยหนาแน่นปานกลาง)'}
              if(pl == 4){ this.buildcontrolact = 'สีน้ำตาล (ที่อยู่อาศัยหนาแน่นมาก)'}
            this.units = response.data.rows[0].units
            this.arearoom = response.data.rows[0].areaRoom
            this.lobby = response.data.rows[0].lobby
            this.lift = response.data.rows[0].lift
            this.swimmingpool = response.data.rows[0].swimmingPool
            this.fitness = response.data.rows[0].fitness
            this.suana = response.data.rows[0].suana
            this.jacuzzi = response.data.rows[0].jacuzzi
            this.steam = response.data.rows[0].steam
            this.library = response.data.rows[0].library
            this.garden = response.data.rows[0].garden
            this.kidplay = response.data.rows[0].kidplay
            this.parklot = response.data.rows[0].parklot
            this.automateparklot = response.data.rows[0].automateParklot
            this.golfcourse = response.data.rows[0].golfCourse
            this.movieroom = response.data.rows[0].movieRoom
            this.shop = response.data.rows[0].shop
            // this.maintanancecondition = response.data.rows[0].maintananceCondition
            var mt = response.data.rows[0].maintananceCondition
              if(mt == 0) { this.maintanancecondition = 'แย่'}
              if(mt == 1) { this.maintanancecondition = 'ปานกลาง'}
              if(mt == 2) { this.maintanancecondition = 'ดี'}
            this.fireinsurance = response.data.rows[0].fireInsurance
            // this.materialdesign = response.data.rows[0].materialDesign
            var md = response.data.rows[0].materialDesign
              if(md == 1){ this.materialdesign = 'ควรปรับปรุง'}
              if(md == 2){ this.materialdesign = 'พอใช้'}
              if(md == 3){ this.materialdesign = 'ดี'}
              if(md == 4){ this.materialdesign = 'ดีเยี่ยม'}
            this.marketprice = response.data.rows[0].marketPrice
            this.marketpricesqm = response.data.rows[0].marketPriceSQM

            this.projectname =  this.projectname.split(".")[0]
            if(this.nearestbts == null) { this.nearestbts = 'ไม่มี'}
            if(this.distancebts == null) { this.distancebts = '-'}
            if (this.lobby == 1) { this.facility = 'ล็อบบี้'}
            if (this.lift == 1) { this.facility = this.facility +', '+ 'ลิฟต์'}
            if (this.swimmingpool == 1) { this.facility = this.facility +', '+ 'สระว่ายน้ำ'}
            if (this.fitness == 1) { this.facility = this.facility +', '+ 'ฟิตเนส'}
            if (this.suana == 1) { this.facility = this.facility +', '+ 'ซาวน่า'}
            if (this.jacuzzi == 1) { this.facility = this.facility +', '+ 'จากุชชี'}
            if (this.steam == 1) { this.facility = this.facility +', '+ 'อบไอน้ำ'}
            if (this.library == 1) { this.facility = this.facility +', '+ 'ห้องสมุด'}
            if (this.garden == 1) { this.facility = this.facility +', '+ 'สวน'}
            if (this.kidplay == 1) { this.facility = this.facility +', '+ 'สนามเด็กเล่น'}
            if (this.parklot == 1) { this.facility = this.facility +', '+ 'ที่จอดรถ'}
            if (this.automateparklot == 1) { this.facility = this.facility +', '+ 'ที่จอดรถอัตโนมัติ'}
            if (this.golfcourse == 1) { this.facility = this.facility +', '+ 'สนามกอล์ฟ'}
            if (this.movieroom == 1) { this.facility = this.facility +', '+ 'โรงภาพยนตร์'}
            if (this.shop == 1) { this.facility = this.facility +', '+ 'ร้านค้า'}
            if (this.fireinsurance == '') { this.fireinsurance = '-'}
            
            this.roomcat = this.roomcat + " เนื้อที่ " + this.arearoom + " ตรม. รูปแบบห้องชุด " + this.roomtype
            this.buildingname = "อาคารชุด" + this.buildingname + " ชั้น " + this.floor + " แขวง" + this.subdistrictname +
              " " + this.districtname + " " + this.province
            this.buildingfloors = this.buildingfloors + " ชั้น"
            this.buildingage = this.buildingage + " ปี"
            this.units = this.units + " ยูนิต"
            this.gps = "GPS.- " + this.gps
            this.distancebts = this.distancebts + " เมตร"
            this.camfee = this.camfee +" .-บาท/ตรม./เดือน"
            // this.pricebygov = this.pricebygov  + " .-บาท"
            this.marketprice = this.marketprice  + " .-บาท"
            this.marketpricesqm = this.marketpricesqm  + " .-บาท/ตรม."
            this.fireinsurance = this.fireinsurance  + " .-บาท/ตรม."
            this.json = [
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "", "" : ""
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "รายงานเลขที่ ", "" : this.projectname
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "", "" : ""
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "วันที่ส่งรายงาน", ""  : this.inspectiondate
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ประเภททรัพย์สิน", ""  : this.roomcat
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ที่ตั้งทรัพย์สิน", ""  : this.buildingname
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "อาคารชุดสูง", ""  : this.buildingfloors
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "อายุอาคาร", ""  : this.buildingage
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "จำนวนห้องชุดรวม", ""  : this.units
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "พิกัดตำแหน่งที่ตั้ง", ""  : this.gps
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ห่างจากสถานีรถไฟฟ้า", ""  : this.nearestbts
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ประมาณ", ""  : this.distancebts
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ข้อบังคับกฎหมายผังเมือง", ""  : this.buildcontrolact
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "สิ่งอำนวยความสะดวกภายในโครงการ", ""  : this.facility
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "วัสดุ / รูปแบบ", ""  : this.materialdesign
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "สภาพการดูแลรักษา", ""  : this.maintanancecondition
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "อัตราค่าส่วนกลาง (CAM FEE)", ""  : this.camfee
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ผู้ประเมิน",  ""  : this.staffname
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "สภาพอาคาร", ""  : this.buildcondition
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ตำแหน่งที่ตั้งห้องชุด", ""  : this.roomposition
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ทัศนียภาพ / วิว", ""  : this.roomview
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "วันที่สำรวจและประเมิน", ""  : this.inspectiondate
              },
              // {
              //   "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "ราคาประเมินราชการ (ห้องชุด)", ""  : this.pricebygov
              // },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "มูลค่าตลาด (Market Value)", ""  : this.marketprice
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "มูลค่าตลาด (บาท/ตรม.)", ""  : this.marketpricesqm
              },
              {
                "รายงานสรุปข้อมูลการประเมินราคาอสังหาริมทรัพย์" : "มูลค่าประกันอัคคีภัย (RCN)", ""  : this.fireinsurance
              },

            ]

            const dataWS = XLSX.utils.json_to_sheet(this.json)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, dataWS)
            XLSX.writeFile(wb,Object.assign({}, item).name + '.xlsx')
            })
        .catch(error => {
          console.log("NOOO");
        });       
      },   
    }

    /* eslint-enable */ 
}
</script>