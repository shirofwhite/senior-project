<template>
  <div class="container" style="width:75%">
    <v-card>
      <v-content>
        <v-responsive :aspect-ratio="16/9">
          <form class="fluid form" style="margin:2%">
            <h1>Project01</h1>
            <br />
            <v-divider></v-divider>
            <br />
            <br />
            

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ประเภททรัพย์สิน :</p>
              <p class="text-lg-right">{{typeRealEstate}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>GPS.- :</p>
              <p class="text-lg-right">{{gps}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ห้องชุดเลขที่ :</p>
              <p class="text-lg-right">{{roomNo}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>อาคารชุด :</p>
              <p class="text-lg-right">{{buildingNo}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ชั้น :</p>
              <p class="text-lg-right">{{roomFloors}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ซอย :</p>
              <p class="text-lg-right">{{bypath}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ถนน :</p>
              <p class="text-lg-right">{{street}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>(แขวง/ตำบล) :</p>
              <p class="text-lg-right">{{subDistrict}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>(เขต/อำเภอ) :</p>
              <p class="text-lg-right">{{district}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>(กรุงเทพมหานคร/จังหวัด) :</p>
              <p class="text-lg-right">{{province}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ลูกค้าราย :</p>
              <p class="text-lg-right">{{customerName}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>วันที่ส่งรายงาน :</p>
              <p class="text-lg-right">{{sendDate}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>วันที่สำรวจและประเมิน :</p>
              <p class="text-lg-right">{{discoverDate}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ห่างจากสถานีรถไฟฟ้า :</p>
              <p class="text-lg-right">{{BTS}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ประมาณ :</p>
              <p class="text-lg-right">{{distanceBTS}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>อาคารชุด (สูง) :</p>
              <p class="text-lg-right">{{buildingFloors}}</p>
            </div>
            </div>

            <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>สิ่งอำนวยความสะดวกภายในโครงการ :</p>
              <p class="text-lg-right">{{facilities}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>อัตราค่าส่วนกลาง (CAM FEE) [บาท/ตร.ม./เดือน] :</p>
              <p class="text-lg-right">{{camFee}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ผู้ประเมิน :</p>
              <p class="text-lg-right">{{staff}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ผู้ตรวจสอบรายงาน :</p>
              <p class="text-lg-right">{{excutiveStaff}}</p>
            </div>
            </div>

            <!-- จะทำเป็น select  ไม่ก็ checkbox ให้เลือก -->
            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>สาธารณูปโภคให้บริการทรัพย์สิน :</p>
              <p class="text-lg-right">{{publicUtility}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>การคมนาคม :</p>
              <p class="text-lg-right">{{communication}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>หมายเหตุ :</p>
              <p class="text-lg-right">{{communicationCondition}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>รูปแบบห้องชุด :</p>
              <p class="text-lg-right">{{roomType}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>อายุอาคาร (ปี) :</p>
              <p class="text-lg-right">{{buildingAge}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>สภาพอาคาร :</p>
              <p class="text-lg-right">{{buildingStatus}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ตำแหน่งที่ตั้งห้องชุด :</p>
              <p class="text-lg-right">{{roomLocation}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ทัศนียภาพ/วิว :</p>
              <p class="text-lg-right">{{roomView}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ราคาประเมินราชการ (ห้องชุด) :</p>
              <p class="text-lg-right">{{affairPrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ข้อบังคับกฎหมายผังเมือง :</p>
              <p class="text-lg-right">{{planLaws}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ยูนิตทั้งหมด :</p>
              <p class="text-lg-right">{{totalUnit}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>พื้นที่ทั้งหมด (ตร.ม.) :</p>
              <p class="text-lg-right">{{roomArea}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>พื้นที่ภายในห้องพัก :</p>
              <p class="text-lg-right">{{indoorArea}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ราคา (พื้นที่ภายในห้องพัก) :</p>
              <p class="text-lg-right">{{indoorAreaPrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ระเบียงที่วางแอร์ :</p>
              <p class="text-lg-right">{{outdoorArea}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ราคา (ระเบียงที่วางแอร์) :</p>
              <p class="text-lg-right">{{outdoorAreaPrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ที่จอดรถส่วนตัว :</p>
              <p class="text-lg-right">{{privateCarpark}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ราคา (ที่จอดรถส่วนตัว) :</p>
              <p class="text-lg-right">{{privateCarparkPrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>ราคา (รวม) :</p>
              <p class="text-lg-right">{{totalPrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>มูลค่าประเมิน (ตร.ม.) :</p>
              <p class="text-lg-right">{{evaluatePrice}}</p>
            </div>
            </div>

            <div>
            <div class="d-inline-flex pa-2" outlined tile>
              <p>มูลค่า :</p>
              <p class="text-lg-right">{{totalEvaluatePrice}}</p>
            </div>
            </div>
            <br />
            <br />

            <v-checkbox
              v-model="checkbox"
              label="Do you agree?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-btn class="mr-4" @click="submit" color="primary">OK</v-btn>
            <v-btn class="mr-4" @click="edit">Edit</v-btn>
          </form>
        </v-responsive>
      </v-content>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    typeRealEstate: { required },
    gps: { required },
    select: { required },
    roomNo: { required },
    buildingNo: { required },
    roomFloors: { required },
    bypath: { required },
    street: { required },
    subDistrict: { required },
    district: { required },
    province: { required },
    customerName: { required },
    sendDate: { required },
    discoverDate: { required },
    BTS: { required },
    distanceBTS: { required },
    buildingFloors: { required },
    facilities: { required },
    camFee: { required },
    staff: { required },
    excutiveStaff: { required },
    publicUtility: { required },
    communication: { required },
    communicationCondition: { required },
    roomType: { required },
    buildingAge: { required },
    buildingStatus: { required },
    roomLocation: { required },
    roomView: { required },
    affairPrice: { required },
    planLaws: { required },
    totalUnit: { required },
    roomArea: { required },
    indoorArea: { required },
    indoorAreaPrice: { required },
    outdoorArea: { required },
    outdoorAreaPrice: { required },
    privateCarpark: { required },
    privateCarparkPrice: { required },
    totalPrice: { required },
    evaluatePrice: { required },
    totalEvaluatePrice: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    projects: [],
    typeRealEstate: "",
    gps: "",
    roomNo: "",
    buildingNo: "",
    roomFloors: "",
    bypath: "",
    street: "",
    subDistrict: "",
    district: "",
    province: "",
    customerName: "",
    sendDate: "",
    discoverDate: "",
    BTS: "",
    distanceBTS: "",
    buildingFloors: "",
    facilities: "",
    camFee: "",
    staff: null,
    staffName: ["Staff 1", "Staff 2", "Staff 3", "Staff 4"],
    excutiveStaff: null,
    excutiveStaffName: ["ExStaff 1", "ExStaff 2", "ExStaff 3", "ExStaff 4"],
    publicUtility: "",
    communication: null,
    commuType: ["commu 1", "commu 2", "commu 3", "commu 4"],
    communicationCondition: "",
    roomType: null,
    roomtype: ["type 1", "type 2", "type 3", "type 4"],
    buildingAge: "",
    buildingStatus: null,
    buildingstatus: ["status 1", "status 2", "status 3", "status 4"],
    roomLocation: null,
    roomlocation: ["location 1", "location 2", "location 3", "location 4"],
    roomView: null,
    roomview: ["view 1", "view 2", "view 3", "view 4"],
    affairPrice: "",
    planLaws: null,
    laws: ["rules 1", "rules 2", "rules 3", "rules 4"],
    totalUnit: "",
    roomArea: "",
    indoorArea: "",
    indoorAreaPrice: "",
    outdoorArea: "",
    outdoorAreaPrice: "",
    privateCarpark: "",
    privateCarparkPrice: "",
    totalPrice: "",
    evaluatePrice: "",
    totalEvaluatePrice: "",
    checkbox: false
  }),

  computed: {
    typeRealEstateErrors() {
      const errors = [];
      if (!this.$v.typeRealEstate.$dirty) return errors;
      !this.$v.typeRealEstate.required && errors.push("Required.");
      return errors;
    },
    gpsErrors() {
      const errors = [];
      if (!this.$v.gps.$dirty) return errors;
      !this.$v.gps.required && errors.push("Required.");
      return errors;
    },
    roomNoErrors() {
      const errors = [];
      if (!this.$v.roomNo.$dirty) return errors;
      !this.$v.roomNo.required && errors.push("Required.");
      return errors;
    },
    buildingNoErrors() {
      const errors = [];
      if (!this.$v.buildingNo.$dirty) return errors;
      !this.$v.buildingNo.required && errors.push("Required.");
      return errors;
    },
    roomFloorsErrors() {
      const errors = [];
      if (!this.$v.roomFloors.$dirty) return errors;
      !this.$v.roomFloors.required && errors.push("Required.");
      return errors;
    },
    bypathErrors() {
      const errors = [];
      if (!this.$v.bypath.$dirty) return errors;
      !this.$v.bypath.required && errors.push("Required.");
      return errors;
    },
    streetErrors() {
      const errors = [];
      if (!this.$v.street.$dirty) return errors;
      !this.$v.street.required && errors.push("Required.");
      return errors;
    },
    subDistrictErrors() {
      const errors = [];
      if (!this.$v.subDistrict.$dirty) return errors;
      !this.$v.subDistrict.required && errors.push("Required.");
      return errors;
    },
    districtErrors() {
      const errors = [];
      if (!this.$v.district.$dirty) return errors;
      !this.$v.district.required && errors.push("Required.");
      return errors;
    },
    provinceErrors() {
      const errors = [];
      if (!this.$v.province.$dirty) return errors;
      !this.$v.province.required && errors.push("Required.");
      return errors;
    },
    customerNameErrors() {
      const errors = [];
      if (!this.$v.customerName.$dirty) return errors;
      !this.$v.customerName.required && errors.push("Required.");
      return errors;
    },
    sendDateErrors() {
      const errors = [];
      if (!this.$v.sendDate.$dirty) return errors;
      !this.$v.sendDate.required && errors.push("Required.");
      return errors;
    },
    discoverDateErrors() {
      const errors = [];
      if (!this.$v.discoverDate.$dirty) return errors;
      !this.$v.discoverDate.required && errors.push("Required.");
      return errors;
    },
    BTSErrors() {
      const errors = [];
      if (!this.$v.BTS.$dirty) return errors;
      !this.$v.BTS.required && errors.push("Required.");
      return errors;
    },
    distanceBTSErrors() {
      const errors = [];
      if (!this.$v.distanceBTS.$dirty) return errors;
      !this.$v.distanceBTS.required && errors.push("Required.");
      return errors;
    },
    buildingFloorsErrors() {
      const errors = [];
      if (!this.$v.buildingFloors.$dirty) return errors;
      !this.$v.buildingFloors.required && errors.push("Required.");
      return errors;
    },
    facilitiesErrors() {
      const errors = [];
      if (!this.$v.facilities.$dirty) return errors;
      !this.$v.facilities.required && errors.push("Required.");
      return errors;
    },
    camFeeErrors() {
      const errors = [];
      if (!this.$v.camFee.$dirty) return errors;
      !this.$v.camFee.required && errors.push("Required.");
      return errors;
    },
    staffErrors() {
      const errors = [];
      if (!this.$v.staff.$dirty) return errors;
      !this.$v.staff.required && errors.push("Required.");
      return errors;
    },
    excutiveStaffErrors() {
      const errors = [];
      if (!this.$v.excutiveStaff.$dirty) return errors;
      !this.$v.excutiveStaff.required && errors.push("Required.");
      return errors;
    },
    publicUtilityErrors() {
      const errors = [];
      if (!this.$v.publicUtility.$dirty) return errors;
      !this.$v.publicUtility.required && errors.push("Required.");
      return errors;
    },
    communicationErrors() {
      const errors = [];
      if (!this.$v.communication.$dirty) return errors;
      !this.$v.communication.required && errors.push("Required.");
      return errors;
    },
    communicationConditionErrors() {
      const errors = [];
      if (!this.$v.communicationCondition.$dirty) return errors;
      !this.$v.communicationCondition.required && errors.push("Required.");
      return errors;
    },
    roomTypeErrors() {
      const errors = [];
      if (!this.$v.roomType.$dirty) return errors;
      !this.$v.roomType.required && errors.push("Required.");
      return errors;
    },
    buildingAgeErrors() {
      const errors = [];
      if (!this.$v.buildingAge.$dirty) return errors;
      !this.$v.buildingAge.required && errors.push("Required.");
      return errors;
    },
    buildingStatusErrors() {
      const errors = [];
      if (!this.$v.buildingStatus.$dirty) return errors;
      !this.$v.buildingStatus.required && errors.push("Required.");
      return errors;
    },
    roomLocationErrors() {
      const errors = [];
      if (!this.$v.roomLocation.$dirty) return errors;
      !this.$v.roomLocation.required && errors.push("Required.");
      return errors;
    },
    roomViewErrors() {
      const errors = [];
      if (!this.$v.roomView.$dirty) return errors;
      !this.$v.roomView.required && errors.push("Required.");
      return errors;
    },
    affairPriceErrors() {
      const errors = [];
      if (!this.$v.affairPrice.$dirty) return errors;
      !this.$v.affairPrice.required && errors.push("Required.");
      return errors;
    },
    planLawsErrors() {
      const errors = [];
      if (!this.$v.planLaws.$dirty) return errors;
      !this.$v.planLaws.required && errors.push("Required.");
      return errors;
    },
    totalUnitErrors() {
      const errors = [];
      if (!this.$v.totalUnit.$dirty) return errors;
      !this.$v.totalUnit.required && errors.push("Required.");
      return errors;
    },
    roomAreaErrors() {
      const errors = [];
      if (!this.$v.roomArea.$dirty) return errors;
      !this.$v.roomArea.required && errors.push("Required.");
      return errors;
    },
    indoorAreaErrors() {
      const errors = [];
      if (!this.$v.indoorArea.$dirty) return errors;
      !this.$v.indoorArea.required && errors.push("Required.");
      return errors;
    },
    indoorAreaPriceErrors() {
      const errors = [];
      if (!this.$v.indoorAreaPrice.$dirty) return errors;
      !this.$v.indoorAreaPrice.required && errors.push("Required.");
      return errors;
    },
    outdoorAreaErrors() {
      const errors = [];
      if (!this.$v.outdoorArea.$dirty) return errors;
      !this.$v.outdoorArea.required && errors.push("Required.");
      return errors;
    },
    outdoorAreaPriceErrors() {
      const errors = [];
      if (!this.$v.outdoorAreaPrice.$dirty) return errors;
      !this.$v.outdoorAreaPrice.required && errors.push("Required.");
      return errors;
    },
    privateCarparkErrors() {
      const errors = [];
      if (!this.$v.privateCarpark.$dirty) return errors;
      !this.$v.privateCarpark.required && errors.push("Required.");
      return errors;
    },
    privateCarparkPriceErrors() {
      const errors = [];
      if (!this.$v.privateCarparkPrice.$dirty) return errors;
      !this.$v.privateCarparkPrice.required && errors.push("Required.");
      return errors;
    },
    totalPriceErrors() {
      const errors = [];
      if (!this.$v.totalPrice.$dirty) return errors;
      !this.$v.totalPrice.required && errors.push("Required.");
      return errors;
    },
    evaluatePriceErrors() {
      const errors = [];
      if (!this.$v.evaluatePrice.$dirty) return errors;
      !this.$v.evaluatePrice.required && errors.push("Required.");
      return errors;
    },
    totalEvaluatePriceErrors() {
      const errors = [];
      if (!this.$v.totalEvaluatePrice.$dirty) return errors;
      !this.$v.totalEvaluatePrice.required && errors.push("Required.");
      return errors;
    }
  },

  methods: {
    edit () {
        // this.$v.$touch()
        this.$router.push('/Editinfo')
      },
    clear() {
      this.$v.$reset();

      this.typeRealEstate = "";
      this.gps = "";
      this.roomNo = "";
      this.buildingNo = "";
      this.roomFloors = "";
      this.bypath = "";
      this.street = "";
      this.subDistrict = "";
      this.district = "";
      this.province = "";
      this.customerName = "";
      this.sendDate = "";
      this.discoverDate = "";
      this.BTS = "";
      this.distanceBTS = "";
      this.buildingFloors = "";
      this.facilities = "";
      this.camFee = "";
      this.staff = null;
      this.excutiveStaff = null;
      this.publicUtility = "";
      this.communication = null;
      this.communicationCondition = "";
      this.roomType = null;
      this.buildingAge = "";
      this.buildingStatus = null;
      this.roomLocation = null;
      this.roomView = null;
      this.affairPrice = "";
      this.planLaws = null;
      this.totalUnit = "";
      this.roomArea = "";
      this.indoorArea = "";
      this.indoorAreaPrice = "";
      this.outdoorArea = "";
      this.outdoorAreaPrice = "";
      this.privateCarpark = "";
      this.privateCarparkPrice = "";
      this.totalPrice = "";
      this.evaluatePrice = "";
      this.totalEvaluatePrice = "";
      this.checkbox = false;
    },
    submit (){
        this.$router.push('/Repositories')
    }
  },
  mounted() {
    (this.typeRealEstate = "ห้องชุดพักอาศัย"),
      (this.gps = "[13.701626, 100.516623]"),
      (this.roomNo = "29/193"),
      (this.buildingNo = "ศุภาลัย ไลท์ สาทร-เจริญราษฎร์"),
      (this.roomFloors = "11"),
      (this.bypath = "-"),
      (this.street = "เจริญราษฎร์"),
      (this.subDistrict = "แขวงบางโคล่"),
      (this.district = "เขตบางคอแหลม"),
      (this.province = "กรุงเทพมหานคร"),
      (this.customerName = "Bob"),
      (this.sendDate = "01/01/19"),
      (this.discoverDate = "01/01/19"),
      (this.BTS = "BTS สุรศักดิ์ "),
      (this.distanceBTS = "2.00 km"),
      (this.buildingFloors = "26"),
      (this.facilities =
        "ร้านค้า ล็อบบี้  ลิฟท์ สระว่ายน้ำ ฟิตเนส ซาวน์น่า  ห้องสมุด สวน สนามเด็กเล่น ที่จอดรถ "),
      (this.camFee = "45"),
      (this.staff = "Staff 1"),
      (this.excutiveStaff = "ExStaff 2"),
      (this.publicUtility = "ไฟฟ้า ประปา โทรศัพท์ ท่อระบายน้ำ ไฟฟ้าส่องสว่าง"),
      (this.communication = "commu 1"),
      (this.communicationCondition = "-"),
      (this.roomType = "type 4"),
      (this.buildingAge = "15"),
      (this.buildingStatus = "status 1"),
      (this.roomLocation = "location 4"),
      (this.roomView = "view 1"),
      (this.affairPrice = "4670530"),
      (this.planLaws = "rules 1"),
      (this.totalUnit = "565"),
      (this.roomArea = "91.07"),
      (this.indoorArea = "69.63"),
      (this.indoorAreaPrice = "4163874"),
      (this.outdoorArea = "9.44"),
      (this.outdoorAreaPrice = "282256"),
      (this.privateCarpark = "12.00"),
      (this.privateCarparkPrice = "224400"),
      (this.totalPrice = "4670530"),
      (this.evaluatePrice = "60200"),
      (this.totalEvaluatePrice = "5400000");
  }
};
/* eslint-enable */
</script>