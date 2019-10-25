<template>
  <div class="container" style="width:75%">
    <v-card >
      <v-content >
    <v-responsive :aspect-ratio="16/9">
    <form class="fluid form" style="margin:2%">
      <h1>Project01</h1>
      <br> <v-divider></v-divider> <br><br>
    
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="typeRealEstate" :error-messages="typeRealEstateErrors" label="ประเภททรัพย์สิน" required @input="$v.typeRealEstate.$touch()" @blur="$v.typeRealEstate.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field  v-model="gps" label="GPS.-" :error-messages="gpsErrors" required  @input="$v.gps.$touch()"  @blur="$v.gps.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="2">
            <v-text-field  v-model="roomNo" label="ห้องชุดเลขที่" :error-messages="roomNoErrors" required  @input="$v.roomNo.$touch()"  @blur="$v.roomNo.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">    
            <v-text-field  v-model="buildingNo" label="อาคารชุด" :error-messages="buildingNoErrors"  required  @input="$v.buildingNo.$touch()"  @blur="$v.buildingNo.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="1">       
            <v-text-field  v-model="roomFloors" label="ชั้น" :error-messages="roomFloorsErrors"  required  @input="$v.roomFloors.$touch()"  @blur="$v.roomFloors.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9" md="2">
            <v-text-field  v-model="bypath" :error-messages="bypathErrors" label="ซอย" required @input="$v.bypath.$touch()"  @blur="$v.bypath.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">
            <v-text-field  v-model="street" :error-messages="streetErrors" label="ถนน"  required  @input="$v.street.$touch()"  @blur="$v.street.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">    
            <v-text-field  v-model="subDistrict" :error-messages="subDistrictErrors" label="(แขวง/ตำบล)"  required  @input="$v.subDistrict.$touch()"  @blur="$v.subDistrict.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">    
            <v-text-field  v-model="district" :error-messages="districtErrors" label="(เขต/อำเภอ)"  required  @input="$v.district.$touch()"  @blur="$v.district.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="3">    
            <v-text-field  v-model="province" :error-messages="provinceErrors" label="(กรุงเทพมหานคร/จังหวัด)"  required  @input="$v.province.$touch()"  @blur="$v.province.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="18" md="6">
            <v-text-field  v-model="customerName" :error-messages="customerNameErrors" label="ลูกค้าราย:"  required  @input="$v.customerName.$touch()"  @blur="$v.customerName.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">    
            <v-text-field  v-model="sendDate" :error-messages="sendDateErrors" label="วันที่ส่งรายงาน"  required  @input="$v.sendDate.$touch()"  @blur="$v.sendDate.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">    
            <v-text-field  v-model="discoverDate" :error-messages="discoverDateErrors" label="วันที่สำรวจและประเมิน"  required  @input="$v.discoverDate.$touch()"  @blur="$v.discoverDate.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">   
          <v-text-field  v-model="BTS" :error-messages="BTSErrors" label="ห่างจากสถานีรถไฟฟ้า"  required  @input="$v.BTS.$touch()"  @blur="$v.BTS.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">  
          <v-text-field  v-model="distanceBTS" :error-messages="distanceBTSErrors" label="ประมาณ"  required  @input="$v.distanceBTS.$touch()"  @blur="$v.distanceBTS.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="2">
          <v-text-field  v-model="buildingFloors"  :error-messages="buildingFloorsErrors" label="อาคารชุด(สูง)"  required  @input="$v.buildingFloors.$touch()"  @blur="$v.buildingFloors.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
          <v-text-field  v-model="facilities" :error-messages="facilitiesErrors" label="สิ่งอำนวยความสะดวกภายในโครงการ"  required  @input="$v.facilities.$touch()"  @blur="$v.facilities.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field  v-model="camFee" :error-messages="camFeeErrors" label="อัตราค่าส่วนกลาง (CAM FEE) [บาท/ตร.ม./เดือน]"  required  @input="$v.camFee.$touch()"  @blur="$v.camFee.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="5">
          <v-select v-model="staff" :items="staffName" :error-messages="staffErrors" label="ผู้ประเมิน"  required  @change="$v.staff.$touch()"  @blur="$v.staff.$touch()"></v-select>
        </v-col>
        <v-col cols="12" md="5">
          <v-select v-model="excutiveStaff" :items="excutiveStaffName" :error-messages="excutiveStaffErrors" label="ผู้ตรวจสอบรายงาน"  required  @change="$v.excutiveStaff.$touch()"  @blur="$v.excutiveStaff.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="5">
          <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
          <v-text-field  v-model="publicUtility" :error-messages="publicUtilityErrors"  label="สาธารณูปโภคที่ให้บริการทรัพย์สิน"  required  @input="$v.publicUtility.$touch()"  @blur="$v.publicUtility.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="communication" :items="commuType" :error-messages="communicationErrors" label="การคมนาคม"  required  @change="$v.communication.$touch()"  @blur="$v.communication.$touch()"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="communicationCondition" :error-messages="communicationConditionErrors" label="หมายเหตุ" required @change="$v.communicationCondition.$touch()"  @blur="$v.communicationCondition.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9" md="2">
          <v-select v-model="roomType" :items="roomtype" :error-messages="roomTypeErrors" label="รูปแบบห้องชุด"  required  @change="$v.roomType.$touch()"  @blur="$v.roomType.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-text-field  v-model="buildingAge" :error-messages="buildingAgeErrors" label="อายุอาคาร (ปี)"  required  @input="$v.buildingAge.$touch()"  @blur="$v.buildingAge.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="buildingStatus" :items="buildingstatus" :error-messages="buildingStatusErrors" label="สภาพอาคาร"  required  @change="$v.buildingStatus.$touch()"  @blur="$v.buildingStatus.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="roomLocation" :items="roomlocation" :error-messages="roomLocationErrors" label="ตำแหน่งที่ตั้งห้องชุด"  required  @change="$v.roomLocation.$touch()"  @blur="$v.roomLocation.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="roomView" :items="roomview" :error-messages="roomViewErrors" label="ทัศนียภาพ / วิว"  required  @change="$v.roomView.$touch()"  @blur="$v.roomView.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="affairPrice" :error-messages="affairPriceErrors" label="ราคาประเมินราชการ (ห้องชุด)"  required  @input="$v.affairPrice.$touch()"  @blur="$v.affairPrice.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-select v-model="planLaws" :items="laws" :error-messages="planLawsErrors" label="ข้อบังคับกฎหมายผังเมือง"  required  @change="$v.planLaws.$touch()"  @blur="$v.planLaws.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="totalUnit" :error-messages="totalUnitErrors" label="ยูนิตทั้งหมด"  required  @input="$v.totalUnit.$touch()"  @blur="$v.totalUnit.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="roomArea" :error-messages="roomAreaErrors" label="พื้นที่ทั้งหมด (ตร.ม.)"  required  @input="$v.roomArea.$touch()"  @blur="$v.roomArea.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="indoorArea" :error-messages="indoorAreaErrors" label="พื้นที่ภายในห้องพัก"  required  @input="$v.indoorArea.$touch()"  @blur="$v.indoorArea.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="indoorAreaPrice" :error-messages="indoorAreaPriceErrors" label="ราคา (พื้นที่ภายในห้องพัก)"  required  @input="$v.indoorAreaPrice.$touch()"  @blur="$v.indoorAreaPrice.$touch()"></v-text-field> 
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">    
          <v-text-field  v-model="outdoorArea" :error-messages="outdoorAreaErrors" label="ระเบียงที่วางแอร์"  required  @input="$v.outdoorArea.$touch()"  @blur="$v.outdoorArea.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">    
          <v-text-field  v-model="outdoorAreaPrice" :error-messages="outdoorAreaPriceErrors" label="ราคา (ระเบียงที่วางแอร์)"  required  @input="$v.outdoorAreaPrice.$touch()"  @blur="$v.outdoorAreaPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="privateCarpark" :error-messages="privateCarparkErrors" label="ที่จอดรถส่วนตัว"  required  @input="$v.privateCarpark.$touch()"  @blur="$v.privateCarpark.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="privateCarparkPrice" :error-messages="privateCarparkPriceErrors" label="ราคา (ที่จอดรถส่วนตัว)"  required  @input="$v.privateCarparkPrice.$touch()"  @blur="$v.privateCarparkPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="totalPrice" :error-messages="totalPriceErrors" label="ราคา (รวม)"  required  @input="$v.totalPrice.$touch()"  @blur="$v.totalPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3"> 
          <v-text-field  v-model="evaluatePrice" :error-messages="evaluatePriceErrors" label="มูลค่าประเมิน (ตร.ม)"  required  @input="$v.evaluatePrice.$touch()"  @blur="$v.evaluatePrice.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="totalEvaluatePrice" :error-messages="totalEvaluatePriceErrors" label="มูลค่า"  required  @input="$v.totalEvaluatePrice.$touch()"  @blur="$v.totalEvaluatePrice.$touch()"></v-text-field>
        </v-col>
      </v-row>
      <br><br>

      <v-checkbox
      v-model="checkbox"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit" color="primary">submit</v-btn>
    <v-btn class="mr-4" @click="clear">clear</v-btn>

    </form>
    </v-responsive>
      </v-content>
    </v-card>
    </div>
</template>

<script>
/* eslint-disable */
import { validationMixin } from 'vuelidate'
import { required} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
      typeRealEstate: { required },
      gps: { required },
      select: { required },
      roomNo:{required},
      buildingNo:{required},
      roomFloors:{required},
      bypath:{required},
      street:{required},
      subDistrict:{required},
      district:{required},
      province:{required},
      customerName:{required},
      sendDate:{required},
      discoverDate:{required},
      BTS:{required},
      distanceBTS:{required},
      buildingFloors:{required},
      facilities:{required},
      camFee:{required},
      staff:{required},
      excutiveStaff:{required},
      publicUtility:{required},
      communication:{required},
      communicationCondition:{required},
      roomType:{required},
      buildingAge:{required},
      buildingStatus:{required},
      roomLocation:{required},
      roomView:{required},
      affairPrice:{required},
      planLaws:{required},
      totalUnit:{required},
      roomArea:{required},
      indoorArea:{required},
      indoorAreaPrice:{required},
      outdoorArea:{required},
      outdoorAreaPrice:{required},
      privateCarpark:{required},
      privateCarparkPrice:{required},
      totalPrice:{required},
      evaluatePrice:{required},
      totalEvaluatePrice:{required},
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      projects:[],
      typeRealEstate: '',
      gps: '',
      roomNo:'',
      buildingNo:'',
      roomFloors:'',
      bypath:'',
      street:'',
      subDistrict:'',
      district:'',
      province:'',
      customerName:'',
      sendDate:'',
      discoverDate:'',
      BTS:'',
      distanceBTS:'',
      buildingFloors:'',
      facilities:'',
      camFee:'',
      staff: null,
      staffName: [
        'Staff 1',
        'Staff 2',
        'Staff 3',
        'Staff 4',
      ],
      excutiveStaff: null,
      excutiveStaffName: [
        'ExStaff 1',
        'ExStaff 2',
        'ExStaff 3',
        'ExStaff 4',
      ],
      publicUtility:'',
      communication: null,
      commuType: [
        'commu 1',
        'commu 2',
        'commu 3',
        'commu 4',
      ],
      communicationCondition:'',
      roomType: null,
      roomtype: [
        'type 1',
        'type 2',
        'type 3',
        'type 4',
      ],
      buildingAge:'',
      buildingStatus: null,
      buildingstatus: [
        'status 1',
        'status 2',
        'status 3',
        'status 4',
      ],
      roomLocation: null,
      roomlocation: [
        'location 1',
        'location 2',
        'location 3',
        'location 4',
      ],
      roomView: null,
      roomview: [
        'view 1',
        'view 2',
        'view 3',
        'view 4',
      ],
      affairPrice:'',
      planLaws: null,
      laws: [
        'rules 1',
        'rules 2',
        'rules 3',
        'rules 4',
      ],
      totalUnit:'',
      roomArea:'',
      indoorArea:'',
      indoorAreaPrice:'',
      outdoorArea:'',
      outdoorAreaPrice:'',
      privateCarpark:'',
      privateCarparkPrice:'',
      totalPrice:'',
      evaluatePrice:'',
      totalEvaluatePrice:'',
      checkbox: false,
    }),
  
    computed: {
      typeRealEstateErrors () {
        const errors = []
        if (!this.$v.typeRealEstate.$dirty) return errors
        !this.$v.typeRealEstate.required && errors.push('Required.')
        return errors
      },
      gpsErrors () {
        const errors = []
        if (!this.$v.gps.$dirty) return errors
        !this.$v.gps.required && errors.push('Required.')
        return errors
      },
      roomNoErrors () {
        const errors = []
        if (!this.$v.roomNo.$dirty) return errors
        !this.$v.roomNo.required && errors.push('Required.')
        return errors
      },
      buildingNoErrors () {
        const errors = []
        if (!this.$v.buildingNo.$dirty) return errors
        !this.$v.buildingNo.required && errors.push('Required.')
        return errors
      },
      roomFloorsErrors () {
        const errors = []
        if (!this.$v.roomFloors.$dirty) return errors
        !this.$v.roomFloors.required && errors.push('Required.')
        return errors
      },
      bypathErrors () {
        const errors = []
        if (!this.$v.bypath.$dirty) return errors
        !this.$v.bypath.required && errors.push('Required.')
        return errors
      },
      streetErrors () {
        const errors = []
        if (!this.$v.street.$dirty) return errors
        !this.$v.street.required && errors.push('Required.')
        return errors
      },
      subDistrictErrors () {
        const errors = []
        if (!this.$v.subDistrict.$dirty) return errors
        !this.$v.subDistrict.required && errors.push('Required.')
        return errors
      },
      districtErrors () {
        const errors = []
        if (!this.$v.district.$dirty) return errors
        !this.$v.district.required && errors.push('Required.')
        return errors
      },
      provinceErrors () {
        const errors = []
        if (!this.$v.province.$dirty) return errors
        !this.$v.province.required && errors.push('Required.')
        return errors
      },
      customerNameErrors () {
        const errors = []
        if (!this.$v.customerName.$dirty) return errors
        !this.$v.customerName.required && errors.push('Required.')
        return errors
      },
      sendDateErrors () {
        const errors = []
        if (!this.$v.sendDate.$dirty) return errors
        !this.$v.sendDate.required && errors.push('Required.')
        return errors
      },
      discoverDateErrors () {
        const errors = []
        if (!this.$v.discoverDate.$dirty) return errors
        !this.$v.discoverDate.required && errors.push('Required.')
        return errors
      },
      BTSErrors () {
        const errors = []
        if (!this.$v.BTS.$dirty) return errors
        !this.$v.BTS.required && errors.push('Required.')
        return errors
      },
      distanceBTSErrors () {
        const errors = []
        if (!this.$v.distanceBTS.$dirty) return errors
        !this.$v.distanceBTS.required && errors.push('Required.')
        return errors
      },
      buildingFloorsErrors () {
        const errors = []
        if (!this.$v.buildingFloors.$dirty) return errors
        !this.$v.buildingFloors.required && errors.push('Required.')
        return errors
      },
      facilitiesErrors () {
        const errors = []
        if (!this.$v.facilities.$dirty) return errors
        !this.$v.facilities.required && errors.push('Required.')
        return errors
      },
      camFeeErrors () {
        const errors = []
        if (!this.$v.camFee.$dirty) return errors
        !this.$v.camFee.required && errors.push('Required.')
        return errors
      },
      staffErrors () {
        const errors = []
        if (!this.$v.staff.$dirty) return errors
        !this.$v.staff.required && errors.push('Required.')
        return errors
      },
      excutiveStaffErrors () {
        const errors = []
        if (!this.$v.excutiveStaff.$dirty) return errors
        !this.$v.excutiveStaff.required && errors.push('Required.')
        return errors
      },
      publicUtilityErrors () {
        const errors = []
        if (!this.$v.publicUtility.$dirty) return errors
        !this.$v.publicUtility.required && errors.push('Required.')
        return errors
      },
      communicationErrors () {
        const errors = []
        if (!this.$v.communication.$dirty) return errors
        !this.$v.communication.required && errors.push('Required.')
        return errors
      },
      communicationConditionErrors () {
        const errors = []
        if (!this.$v.communicationCondition.$dirty) return errors
        !this.$v.communicationCondition.required && errors.push('Required.')
        return errors
      },
      roomTypeErrors () {
        const errors = []
        if (!this.$v.roomType.$dirty) return errors
        !this.$v.roomType.required && errors.push('Required.')
        return errors
      },
      buildingAgeErrors () {
        const errors = []
        if (!this.$v.buildingAge.$dirty) return errors
        !this.$v.buildingAge.required && errors.push('Required.')
        return errors
      },
      buildingStatusErrors () {
        const errors = []
        if (!this.$v.buildingStatus.$dirty) return errors
        !this.$v.buildingStatus.required && errors.push('Required.')
        return errors
      },
      roomLocationErrors () {
        const errors = []
        if (!this.$v.roomLocation.$dirty) return errors
        !this.$v.roomLocation.required && errors.push('Required.')
        return errors
      },
      roomViewErrors () {
        const errors = []
        if (!this.$v.roomView.$dirty) return errors
        !this.$v.roomView.required && errors.push('Required.')
        return errors
      },
      affairPriceErrors () {
        const errors = []
        if (!this.$v.affairPrice.$dirty) return errors
        !this.$v.affairPrice.required && errors.push('Required.')
        return errors
      },
      planLawsErrors () {
        const errors = []
        if (!this.$v.planLaws.$dirty) return errors
        !this.$v.planLaws.required && errors.push('Required.')
        return errors
      },
      totalUnitErrors () {
        const errors = []
        if (!this.$v.totalUnit.$dirty) return errors
        !this.$v.totalUnit.required && errors.push('Required.')
        return errors
      },
      roomAreaErrors () {
        const errors = []
        if (!this.$v.roomArea.$dirty) return errors
        !this.$v.roomArea.required && errors.push('Required.')
        return errors
      },
      indoorAreaErrors () {
        const errors = []
        if (!this.$v.indoorArea.$dirty) return errors
        !this.$v.indoorArea.required && errors.push('Required.')
        return errors
      },
      indoorAreaPriceErrors () {
        const errors = []
        if (!this.$v.indoorAreaPrice.$dirty) return errors
        !this.$v.indoorAreaPrice.required && errors.push('Required.')
        return errors
      },
      outdoorAreaErrors () {
        const errors = []
        if (!this.$v.outdoorArea.$dirty) return errors
        !this.$v.outdoorArea.required && errors.push('Required.')
        return errors
      },
      outdoorAreaPriceErrors () {
        const errors = []
        if (!this.$v.outdoorAreaPrice.$dirty) return errors
        !this.$v.outdoorAreaPrice.required && errors.push('Required.')
        return errors
      },
      privateCarparkErrors () {
        const errors = []
        if (!this.$v.privateCarpark.$dirty) return errors
        !this.$v.privateCarpark.required && errors.push('Required.')
        return errors
      },
      privateCarparkPriceErrors () {
        const errors = []
        if (!this.$v.privateCarparkPrice.$dirty) return errors
        !this.$v.privateCarparkPrice.required && errors.push('Required.')
        return errors
      },
      totalPriceErrors () {
        const errors = []
        if (!this.$v.totalPrice.$dirty) return errors
        !this.$v.totalPrice.required && errors.push('Required.')
        return errors
      },
      evaluatePriceErrors () {
        const errors = []
        if (!this.$v.evaluatePrice.$dirty) return errors
        !this.$v.evaluatePrice.required && errors.push('Required.')
        return errors
      },
      totalEvaluatePriceErrors () {
        const errors = []
        if (!this.$v.totalEvaluatePrice.$dirty) return errors
        !this.$v.totalEvaluatePrice.required && errors.push('Required.')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
        if (this.$v.typeRealEstate.required == true && this.$v.gps.required == true && this.$v.roomNo.required == true && this.$v.buildingNo.required == true && 
          this.$v.roomFloors.required == true && this.$v.bypath.required == true && this.$v.street.required == true && this.$v.subDistrict.required == true && 
          this.$v.district.required == true && this.$v.province.required == true && this.$v.customerName.required == true && this.$v.sendDate.required == true &&
          this.$v.discoverDate.required == true && this.$v.BTS.required == true && this.$v.distanceBTS.required == true && this.$v.buildingFloors.required == true && 
          this.$v.facilities.required == true && this.$v.camFee.required == true && this.$v.staff.required == true && this.$v.excutiveStaff.required == true &&
          this.$v.publicUtility.required == true && this.$v.communication.required == true && this.$v.communicationCondition.required == true && this.$v.roomType.required == true &&
          this.$v.buildingAge.required == true && this.$v.buildingStatus.required == true && this.$v.roomLocation.required == true && this.$v.roomView.required == true &&
          this.$v.affairPrice.required == true && this.$v.planLaws.required == true && this.$v.totalUnit.required == true && this.$v.roomArea.required == true &&
          this.$v.indoorArea.required == true && this.$v.indoorAreaPrice.required == true && this.$v.outdoorArea.required == true && this.$v.outdoorAreaPrice.required == true &&
          this.$v.privateCarpark.required == true && this.$v.privateCarparkPrice.required == true && this.$v.totalPrice.required == true && this.$v.evaluatePrice.required == true &&
          this.$v.totalEvaluatePrice.required == true){
          
              this.$router.push('/Repositories')
        }
      },
      clear () {
        this.$v.$reset()

        this.typeRealEstate = ''
        this.gps = ''
        this.roomNo = ''
        this.buildingNo = ''
        this.roomFloors = ''
        this.bypath = ''
        this.street = ''
        this.subDistrict = ''
        this.district = ''
        this.province = ''
        this.customerName = ''
        this.sendDate = ''
        this.discoverDate = ''
        this.BTS = ''
        this.distanceBTS = ''
        this.buildingFloors = ''
        this.facilities = ''
        this.camFee = ''
        this.staff =  null
        this.excutiveStaff = null
        this.publicUtility = ''
        this.communication = null
        this.communicationCondition = ''
        this.roomType = null
        this.buildingAge = ''
        this.buildingStatus = null
        this.roomLocation = null
        this.roomView = null
        this.affairPrice = ''
        this.planLaws = null
        this.totalUnit = ''
        this.roomArea = ''
        this.indoorArea = ''
        this.indoorAreaPrice = ''
        this.outdoorArea = ''
        this.outdoorAreaPrice = ''
        this.privateCarpark = ''
        this.privateCarparkPrice = ''
        this.totalPrice  =''
        this.evaluatePrice = ''
        this.totalEvaluatePrice = ''
        this.checkbox = false
      },
    },
    mounted() {
      this.typeRealEstate =  'ห้องชุดพักอาศัย',
      this.gps = '[13.701626, 100.516623]',
      this.roomNo = '29/193',
      this.buildingNo = 'ศุภาลัย ไลท์ สาทร-เจริญราษฎร์',
      this.roomFloors = '11',
      this.bypath = '-',
      this.street = 'เจริญราษฎร์',
      this.subDistrict = 'แขวงบางโคล่',
      this.district = 'เขตบางคอแหลม',
      this.province = 'กรุงเทพมหานคร',
      this.customerName = 'Bob',
      this.sendDate = '01/01/19',
      this.discoverDate = '01/01/19',
      this.BTS = 'BTS สุรศักดิ์ ',
      this.distanceBTS = '2.00 km',
      this.buildingFloors = '26',
      this.facilities = 'ร้านค้า ล็อบบี้  ลิฟท์ สระว่ายน้ำ ฟิตเนส ซาวน์น่า  ห้องสมุด สวน สนามเด็กเล่น ที่จอดรถ ',
      this.camFee = '45',
      this.staff = 'Staff 1',
      this.excutiveStaff = 'ExStaff 2',
      this.publicUtility = 'ไฟฟ้า ประปา โทรศัพท์ ท่อระบายน้ำ ไฟฟ้าส่องสว่าง',
      this.communication =  'commu 1',
      this.communicationCondition = '-',
      this.roomType = 'type 4',
      this.buildingAge = '15',
      this.buildingStatus = 'status 1',
      this.roomLocation = 'location 4',
      this.roomView = 'view 1',
      this.affairPrice = '4670530',
      this.planLaws = 'rules 1',
      this.totalUnit = '565',
      this.roomArea = '91.07',
      this.indoorArea = '69.63',
      this.indoorAreaPrice = '4163874',
      this.outdoorArea = '9.44',
      this.outdoorAreaPrice = '282256',
      this.privateCarpark = '12.00',
      this.privateCarparkPrice = '224400',
      this.totalPrice = '4670530',
      this.evaluatePrice = '60200',
      this.totalEvaluatePrice = '5400000'
    }
}
/* eslint-enable */ 
</script>