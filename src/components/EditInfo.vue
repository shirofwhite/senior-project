<template>
  <div class="container" style="width:75%">
    <v-card >
      <v-content >
    <v-responsive :aspect-ratio="16/9">
    <form class="fluid form" style="margin:2%">
      <h1>Project01</h1>
      <br><br><br>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="typeRealEstate" label="ประเภททรัพย์สิน" required @input="$v.typeRealEstate.$touch()" @blur="$v.typeRealEstate.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field  v-model="gps" label="GPS.-"  required  @input="$v.gps.$touch()"  @blur="$v.gps.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="2">
            <v-text-field  v-model="roomNo" label="ห้องชุดเลขที่"  required  @input="$v.roomNo.$touch()"  @blur="$v.roomNo.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">    
            <v-text-field  v-model="buildingNo" label="อาคารชุด"  required  @input="$v.buildingNo.$touch()"  @blur="$v.buildingNo.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="1">       
            <v-text-field  v-model="roomFloors" label="ชั้น"  required  @input="$v.roomFloors.$touch()"  @blur="$v.roomFloors.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9" md="2">
            <v-text-field  v-model="bypath" label="ซอย"  required  @input="$v.bypath.$touch()"  @blur="$v.bypath.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">
            <v-text-field  v-model="street" label="ถนน"  required  @input="$v.street.$touch()"  @blur="$v.street.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">    
            <v-text-field  v-model="subDistrict" label="(แขวง/ตำบล)"  required  @input="$v.subDistrict.$touch()"  @blur="$v.subDistrict.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">    
            <v-text-field  v-model="district" label="(เขต/อำเภอ)"  required  @input="$v.district.$touch()"  @blur="$v.district.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="3">    
            <v-text-field  v-model="province" label="(กรุงเทพมหานคร/จังหวัด)"  required  @input="$v.province.$touch()"  @blur="$v.province.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="18" md="4">
            <v-text-field  v-model="customerName" label="ลูกค้าราย:"  required  @input="$v.customerName.$touch()"  @blur="$v.customerName.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">    
            <v-text-field  v-model="sendDate" label="วันที่ส่งรายงาน"  required  @input="$v.sendDate.$touch()"  @blur="$v.sendDate.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">    
            <v-text-field  v-model="discoverDate" label="วันที่สำรวจและประเมิน"  required  @input="$v.discoverDate.$touch()"  @blur="$v.discoverDate.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">   
          <v-text-field  v-model="BTS" label="ห่างจากสถานีรถไฟฟ้า"  required  @input="$v.BTS.$touch()"  @blur="$v.BTS.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">  
          <v-text-field  v-model="distanceBTS" label="ประมาณ"  required  @input="$v.distanceBTS.$touch()"  @blur="$v.distanceBTS.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="2">
          <v-text-field  v-model="buildingFloors" label="อาคารชุด(สูง)"  required  @input="$v.buildingFloors.$touch()"  @blur="$v.buildingFloors.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
          <v-text-field  v-model="facilities" label="สิ่งอำนวยความสะดวกภายในโครงการ"  required  @input="$v.facilities.$touch()"  @blur="$v.facilities.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field  v-model="camFee" label="อัตราค่าส่วนกลาง (CAM FEE) [บาท/ตรม.เดือน]"  required  @input="$v.camFee.$touch()"  @blur="$v.camFee.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-select v-model="staff" :items="staffName" label="ผู้ประเมิน"  required  @change="$v.staff.$touch()"  @blur="$v.staff.$touch()"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="excutiveStaff" :items="excutiveStaffName" label="ผู้ตรวจสอบรายงาน"  required  @change="$v.excutiveStaff.$touch()"  @blur="$v.excutiveStaff.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
          <v-text-field  v-model="publicUtility" label="สาธารณูปโภคที่ให้บริการทรัพย์สิน"  required  @input="$v.publicUtility.$touch()"  @blur="$v.publicUtility.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="communication" :items="commuType" label="การคมนาคม"  required  @change="$v.communication.$touch()"  @blur="$v.communication.$touch()"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="communicationCondition" :items="commuCondition" label="หมายเหตุ"  required  @change="$v.communicationCondition.$touch()"  @blur="$v.communicationCondition.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9" md="2">
          <v-select v-model="roomType" :items="roomtype" label="รูปแบบห้องชุด"  required  @change="$v.roomType.$touch()"  @blur="$v.roomType.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-text-field  v-model="buildingAge" label="อายุอาคาร (ปี)"  required  @input="$v.buildingAge.$touch()"  @blur="$v.buildingAge.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="buildingStatus" :items="buildingstatus" label="สภาพอาคาร"  required  @change="$v.buildingStatus.$touch()"  @blur="$v.buildingStatus.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="roomLocation" :items="roomlocation" label="ตำแหน่งที่ตั้งห้องชุด"  required  @change="$v.roomLocation.$touch()"  @blur="$v.roomLocation.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="roomView" :items="roomview" label="ทัศนียภาพ / วิว"  required  @change="$v.roomView.$touch()"  @blur="$v.roomView.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="affairPrice" label="ราคาประเมินราชการ (ห้องชุด)"  required  @input="$v.affairPrice.$touch()"  @blur="$v.affairPrice.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="planRules" :items="rules" label="ข้อบังคับกฎหมายผังเมือง"  required  @change="$v.planRules.$touch()"  @blur="$v.planRules.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="totalUnit" label="ยูนิตทั้งหมด"  required  @input="$v.totalUnit.$touch()"  @blur="$v.totalUnit.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="roomArea" label="พื้นที่ทั้งหมด (ตร.ม.)"  required  @input="$v.roomArea.$touch()"  @blur="$v.roomArea.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="indoorArea" label="พื้นที่ภายในห้องพัก"  required  @input="$v.indoorArea.$touch()"  @blur="$v.indoorArea.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="indoorAreaPrice" label="ราคา (พื้นที่ภายในห้องพัก)"  required  @input="$v.indoorAreaPrice.$touch()"  @blur="$v.indoorAreaPrice.$touch()"></v-text-field> 
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col cols="12" md="3">    
          <v-text-field  v-model="airBalcony" label="ระเบียงที่วางแอร์"  required  @input="$v.airBalcony.$touch()"  @blur="$v.airBalcony.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">    
          <v-text-field  v-model="airBalconyPrice" label="ราคา(ระเบียงที่วางแอร์)"  required  @input="$v.airBalconyPrice.$touch()"  @blur="$v.airBalconyPrice.$touch()"></v-text-field>
        </v-col>
      </v-row> -->

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="privateCarpark" label="ที่จอดรถส่วนตัว"  required  @input="$v.privateCarpark.$touch()"  @blur="$v.privateCarpark.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="privateCarparkPrice" label="ราคา (ที่จอดรถส่วนตัว)"  required  @input="$v.privateCarparkPrice.$touch()"  @blur="$v.privateCarparkPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="totalPrice" label="ราคา (รวม)"  required  @input="$v.totalPrice.$touch()"  @blur="$v.totalPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="evaluatePrice" label="มูลค่าประเมิน (ตร.ม)"  required  @input="$v.evaluatePrice.$touch()"  @blur="$v.evaluatePrice.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="totalEvaluatePrice" label="มูลค่า"  required  @input="$v.totalEvaluatePrice.$touch()"  @blur="$v.totalEvaluatePrice.$touch()"></v-text-field>
        </v-col>
      </v-row>
      <br><br>

      <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>

    </form>
    </v-responsive>
      </v-content>
    </v-card>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
}
</script>