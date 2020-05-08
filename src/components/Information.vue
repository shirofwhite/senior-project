<template>
<div>
   <menubar/>

    <v-tabs background-color="grey lighten-3" color="deep-purple accent-4" right>
    <v-tab> Room </v-tab>
    <v-tab>   Real Estate </v-tab>
    <v-tab>  Property </v-tab> 
    <v-tab>  Evaluation </v-tab>      
    <!-- <v-spacer></!--> 
    <v-btn  color="orange darken-2" large dark  @click="isEditing = !isEditing">
        <v-icon v-if="isEditing">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>

    <v-tab-item>
        <v-card flat>
          <div style="margin-left:30%">
          <v-card-text>
            <br><br>
            <v-row>
              <v-col cols="4" md="5"> 
                <v-text-field  v-model="projectname" :disabled="!isEditing" label="รายงานเลขที่" :error-messages="projectNameErrors"  required  @input="$v.projectname.$touch()"  @blur="$v.projectname.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="3"> 
                <v-select v-model="roomCategory" :items="roomcategory" :error-messages="roomCategoryErrors" :disabled="!isEditing" label="ประเภททรัพย์สิน"  required  @change="$v.roomCategory.$touch()"  @blur="$v.roomCategory.$touch()"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="2" md="1"> 
                <v-text-field  v-model="roomFloors" :disabled="!isEditing" label="ชั้น" :error-messages="roomFloorsErrors"  required  @input="$v.roomFloors.$touch()"  @blur="$v.roomFloors.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="2"> 
                <v-select v-model="roomType" :items="roomtype" :error-messages="roomTypeErrors" :disabled="!isEditing" label="รูปแบบห้องชุด"  required  @change="$v.roomType.$touch()"  @blur="$v.roomType.$touch()"></v-select>
              </v-col>
              <v-col cols="4" md="2">   
                <v-select v-model="roomLocation" :items="roomlocation" :error-messages="roomLocationErrors" :disabled="!isEditing" label="ตำแหน่งที่ตั้งห้องชุด"  required  @change="$v.roomLocation.$touch()"  @blur="$v.roomLocation.$touch()"></v-select>
              </v-col> 
              <v-col cols="4" md="3">   
                <v-select v-model="roomView" :items="roomview" :error-messages="roomViewErrors" :disabled="!isEditing" label="ทัศนียภาพ / วิว"  required  @change="$v.roomView.$touch()"  @blur="$v.roomView.$touch()"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4" md="4">
                <v-select v-model="mainCondition" :items="maincondition" :disabled="!isEditing" label="สภาพการดูแลรักษา"></v-select>
              </v-col>
              <v-col cols="4" md="4">
                <v-select v-model="materialD" :items="materiald" :error-messages="materialDErrors" :disabled="!isEditing" label="วัสดุ / รูปแบบห้อง"  required  @change="$v.materialD.$touch()"  @blur="$v.materialD.$touch()"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" md="2">
                <v-text-field  v-model="roomArea" :error-messages="roomAreaErrors" :disabled="!isEditing" label="พื้นที่ทั้งหมด (ตร.ม.)"  required  @input="$v.roomArea.$touch()"  @blur="$v.roomArea.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="3">
                <v-text-field  v-model="fireInsurance" :disabled="!isEditing" label="มูลค่าประกันอัคคีภัย (บาท/ตร.ม)" ></v-text-field>
              </v-col>
              <v-col cols="4" md="3">
                <v-text-field  v-model="affairPrice" :error-messages="affairPriceErrors" :disabled="!isEditing" label="ราคาประเมินราชการ (บาท)"  required  @input="$v.affairPrice.$touch()"  @blur="$v.affairPrice.$touch()"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          </div>
        </v-card>
    </v-tab-item>

    <v-tab-item>
        <v-card flat>
          <div style="margin-left:30%">
          <v-card-text>
            <br><br>
            <v-row>
              <v-col cols="4" md="3">
                <v-text-field  v-model="buildingNo" :disabled="!isEditing" label="อาคารชุด" :error-messages="buildingNoErrors"  required  @input="$v.buildingNo.$touch()"  @blur="$v.buildingNo.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="2">
                <v-text-field  v-model="buildingFloors"  :error-messages="buildingFloorsErrors" :disabled="!isEditing" label="อาคารชุดสูง(ชั้น)"  required  @input="$v.buildingFloors.$touch()"  @blur="$v.buildingFloors.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="3">
                <v-text-field  v-model="totalUnit" :error-messages="totalUnitErrors" :disabled="!isEditing" label="จำนวนห้องชุดในโครงการ (ยูนิต)"  required  @input="$v.totalUnit.$touch()"  @blur="$v.totalUnit.$touch()"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4" md="3">
                <v-select v-model="buildingStatus" :items="buildingstatus" :error-messages="buildingStatusErrors" :disabled="!isEditing" label="สภาพอาคาร"  required  @change="$v.buildingStatus.$touch()"  @blur="$v.buildingStatus.$touch()"></v-select>
              </v-col>
              <v-col cols="4" md="2">  
                <v-text-field  v-model="buildingAge" :error-messages="buildingAgeErrors" :disabled="!isEditing" label="อายุอาคาร (ปี)"  required  @input="$v.buildingAge.$touch()"  @blur="$v.buildingAge.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="3">  
                <v-text-field  v-model="camFee" :error-messages="camFeeErrors" :disabled="!isEditing" label="อัตราค่าส่วนกลาง (บาท/ตร.ม./เดือน)"  required  @input="$v.camFee.$touch()"  @blur="$v.camFee.$touch()"></v-text-field>
              </v-col>
            </v-row>

            <div class="grey--text">สิ่งอำนวยความสะดวก</div>
            <v-row >
              <v-col cols="6" md="2">
              <v-switch v-model="lobby" :disabled="!isEditing"  label="ลอบบี้"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="lift" :disabled="!isEditing"  label="ลิฟต์"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="swimmingpool" :disabled="!isEditing" label="สระว่ายน้ำ"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="fitness" :disabled="!isEditing" label="ฟิตเนส"></v-switch>
              </v-col>
            </v-row>
            <v-row >
              <v-col cols="6" md="2">
              <v-switch v-model="suana" :disabled="!isEditing" label="ซาวนา"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="jacuzzi" :disabled="!isEditing" label="จากุซซี"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="steam" :disabled="!isEditing" label="อบไอน้ำ"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="library" :disabled="!isEditing" label="ห้องสมุด"></v-switch>
              </v-col>
            </v-row>
            <v-row >
              <v-col cols="6" md="2">
              <v-switch v-model="garden" :disabled="!isEditing" label="สวนหย่อม"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="kidplay" :disabled="!isEditing" label="สนามเด็กเล่น"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="golfcourse" :disabled="!isEditing" label="สนามกอล์ฟ"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="movieroom" :disabled="!isEditing" label="โรงภาพยนตร์"></v-switch>
              </v-col>
            </v-row>
            <v-row >
              <v-col cols="6" md="2">
                <v-switch v-model="shop" :disabled="!isEditing" label="ร้านสะดวกซื้อ"></v-switch>
              </v-col>
              <v-col cols="6" md="2">
              <v-switch v-model="parklot" :disabled="!isEditing" label="ลานจอดรถ"></v-switch>
              </v-col>
              <v-col cols="6" md="3">
              <v-switch v-model="automateparklot" :disabled="!isEditing" label="ลานจอดรถอัตโนมัติ"></v-switch>
              </v-col>
            </v-row>
          </v-card-text>
          </div>
        </v-card>
    </v-tab-item>

    <v-tab-item>
        <v-card flat>
          <div style="margin-left:30%">
          <v-card-text>
            <br><br>
            <v-row>
              <v-col cols="4" md="8">
                <v-text-field  v-model="gps" :disabled="!isEditing" label="GPS.-" :error-messages="gpsErrors" required  @input="$v.gps.$touch()"  @blur="$v.gps.$touch()"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4" md="3">
                <v-select v-model="province" :items="prov" :error-messages="provinceErrors" :disabled="!isEditing" label="(กรุงเทพมหานคร/จังหวัด)"  required  @input="$v.province.$touch()"  @blur="$v.province.$touch()"></v-select>
              </v-col>
              <v-col cols="4" md="2">
                <v-select v-model="district" :items="dist"  :error-messages="districtErrors" :disabled="!isEditing" label="(เขต/อำเภอ)" required @change="$v.district.$touch()"  @blur="$v.district.$touch()"></v-select>
                <!-- <v-text-field  v-model="district" :error-messages="districtErrors" :disabled="!isEditing" label="(เขต/อำเภอ)"  required  @input="$v.district.$touch()"  @blur="$v.district.$touch()"></v-text-field> -->
              </v-col>
              <v-col cols="4" md="3">  
                <div v-if="district == 'วัฒนา'"> 
                  <v-select v-model="subdistrict" :items="sub0"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตสาทร'"> 
                  <v-select v-model="subdistrict" :items="sub1"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตดุสิต'"> 
                  <v-select v-model="subdistrict" :items="sub2"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางนา'"> 
                  <v-select v-model="subdistrict" :items="sub3"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางแค'"> 
                  <v-select v-model="subdistrict" :items="sub4"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตพญาไท'"> 
                  <v-select v-model="subdistrict" :items="sub5"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตจอมทอง'"> 
                  <v-select v-model="subdistrict" :items="sub6"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตดินแดง'"> 
                  <v-select v-model="subdistrict" :items="sub7"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตธนบุรี'"> 
                  <v-select v-model="subdistrict" :items="sub8"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางบอน'"> 
                  <v-select v-model="subdistrict" :items="sub9"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางรัก'"> 
                  <v-select v-model="subdistrict" :items="sub10"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางเขน'"> 
                  <v-select v-model="subdistrict" :items="sub11"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตประเวศ'"> 
                  <v-select v-model="subdistrict" :items="sub12"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตพระนคร'"> 
                  <v-select v-model="subdistrict" :items="sub13"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตสายไหม'"> 
                  <v-select v-model="subdistrict" :items="sub14"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตคลองสาน'"> 
                  <v-select v-model="subdistrict" :items="sub15"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตคลองเตย'"> 
                  <v-select v-model="subdistrict" :items="sub16"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตจตุจักร'"> 
                  <v-select v-model="subdistrict" :items="sub17"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตทุ่งครุ'"> 
                  <v-select v-model="subdistrict" :items="sub18"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางกะปิ'"> 
                  <v-select v-model="subdistrict" :items="sub19"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางซื่อ'"> 
                  <v-select v-model="subdistrict" :items="sub20"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางพลัด'"> 
                  <v-select v-model="subdistrict" :items="sub21"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบึงกุ่ม'"> 
                  <v-select v-model="subdistrict" :items="sub22"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตปทุมวัน'"> 
                  <v-select v-model="subdistrict" :items="sub23"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตพระโขนง'"> 
                  <v-select v-model="subdistrict" :items="sub24"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตมีนบุรี'"> 
                  <v-select v-model="subdistrict" :items="sub25"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตยานนาวา'"> 
                  <v-select v-model="subdistrict" :items="sub26"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตราชเทวี'"> 
                  <v-select v-model="subdistrict" :items="sub27"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตสวนหลวง'"> 
                  <v-select v-model="subdistrict" :items="sub28"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตหนองจอก'"> 
                  <v-select v-model="subdistrict" :items="sub29"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตหนองแขม'"> 
                  <v-select v-model="subdistrict" :items="sub30"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตหลักสี่'"> 
                  <v-select v-model="subdistrict" :items="sub31"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตคันนายาว'"> 
                  <v-select v-model="subdistrict" :items="sub32"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตดอนเมือง'"> 
                  <v-select v-model="subdistrict" :items="sub33"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตตลิ่งชัน'"> 
                  <v-select v-model="subdistrict" :items="sub34"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตทวีวัฒนา'"> 
                  <v-select v-model="subdistrict" :items="sub35"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตลาดพร้าว'"> 
                  <v-select v-model="subdistrict" :items="sub36"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตสะพานสูง'"> 
                  <v-select v-model="subdistrict" :items="sub37"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตห้วยขวาง'"> 
                  <v-select v-model="subdistrict" :items="sub38"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตคลองสามวา'"> 
                  <v-select v-model="subdistrict" :items="sub39"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางคอแหลม'"> 
                  <v-select v-model="subdistrict" :items="sub40"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตภาษีเจริญ'"> 
                  <v-select v-model="subdistrict" :items="sub41"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตลาดกระบัง'"> 
                  <v-select v-model="subdistrict" :items="sub42"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางกอกน้อย'"> 
                  <v-select v-model="subdistrict" :items="sub43"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางกอกใหญ่'"> 
                  <v-select v-model="subdistrict" :items="sub44"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตวังทองหลาง'"> 
                  <v-select v-model="subdistrict" :items="sub45"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตบางขุนเทียน'"> 
                  <v-select v-model="subdistrict" :items="sub46"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตราษฎร์บูรณะ'"> 
                  <v-select v-model="subdistrict" :items="sub47"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตสัมพันธวงศ์'"> 
                  <v-select v-model="subdistrict" :items="sub48"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
                <div v-if="district == 'เขตป้อมปราบศัตรูพ่าย'"> 
                  <v-select v-model="subdistrict" :items="sub49"  :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)" required @change="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-select>
                </div> 
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4"> 
                <v-select v-model="planLaws" :items="laws" :error-messages="planLawsErrors" :disabled="!isEditing" label="ข้อบังคับกฎหมายผังเมือง"  required  @change="$v.planLaws.$touch()"  @blur="$v.planLaws.$touch()"></v-select>
              </v-col>
            <!-- </v-row>
            <v-row> -->
              <v-col cols="12" md="2">   
                <div v-if="haveBTS == 1">
                  <v-select v-model="nearestBTS" :items="nearestbts"  :error-messages="nearestBTSErrors" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า" required @change="$v.nearestBTS.$touch()"  @blur="$v.nearestBTS.$touch()"></v-select>
                </div>
                <div v-if="haveMRT == 1">
                  <v-select v-model="nearestBTS" :items="nearestmrt" :error-messages="nearestBTSErrors" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า" required @change="$v.nearestBTS.$touch()"  @blur="$v.nearestBTS.$touch()"></v-select>
                </div>
                <div v-if="haveBRT == 1">
                  <v-select v-model="nearestBTS" :items="nearestbrt" :error-messages="nearestBTSErrors" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า" required @change="$v.nearestBTS.$touch()"  @blur="$v.nearestBTS.$touch()"></v-select>
                </div>
                <div v-if="haveBTS == 0 && haveMRT == 0 && haveBRT == 0">
                  <v-select v-model="nearestbts[0]" :items="nearestbts" :error-messages="nearestBTSErrors" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า" required @change="$v.nearestBTS.$touch()"  @blur="$v.nearestBTS.$touch()"></v-select>
                </div>
              </v-col>
              <v-col cols="12" md="2">  
                <v-text-field  v-model="distanceBTS" :disabled="!isEditing" label="ประมาณ (เมตร)"   @input="$v.distanceBTS.$touch()"  @blur="$v.distanceBTS.$touch()"></v-text-field>
              </v-col>
            </v-row>

            <div class="grey--text">สถานีรถไฟฟ้าใกล้เคียง</div>
              <v-row >
                <v-col cols="9" md="3">
                  <div v-if="haveMRT == 0 && haveBRT == 0">
                    <v-switch v-model="haveBTS" :disabled="!isEditing"  label="BTS"></v-switch>
                  </div>
                  <div v-if="haveMRT == 1 || haveBRT == 1">
                    <v-switch v-model="haveBTS" :disabled="!doEditing"  label="BTS"></v-switch>
                  </div>
                </v-col>
                <v-col cols="9" md="3">
                  <div v-if="haveBTS == 0 && haveBRT == 0">
                    <v-switch v-model="haveMRT" :disabled="!isEditing"  label="MRT"></v-switch>
                  </div>
                  <div v-if="haveBTS == 1 || haveBRT == 1">
                    <v-switch v-model="haveMRT" :disabled="!doEditing"  label="MRT"></v-switch>
                  </div>
                </v-col>
                <v-col cols="9" md="3">
                  <div v-if="haveMRT == 0 && haveBTS == 0">
                    <v-switch v-model="haveBRT" :disabled="!isEditing" label="BRT"></v-switch>
                  </div>
                  <div v-if="haveMRT == 1 || haveBTS == 1">
                    <v-switch v-model="haveBRT" :disabled="!doEditing" label="BRT"></v-switch>
                  </div>
                </v-col>
              </v-row>                 
          </v-card-text>
          </div>
        </v-card>
    </v-tab-item>

    <v-tab-item>
      <v-card flat>
          <div style="margin-left:30%">
          <v-card-text>
            <br><br>
              <v-row>
                <v-col cols="4" md="4"> 
                  <v-text-field  v-model="marketprice" :disabled="!isEditing" label="มูลค่าตลาดของทรัพย์สิน" @input="calsqm(marketprice, roomArea)"></v-text-field>
                </v-col>
                <v-col cols="4" md="4"> 
                  <v-text-field  v-model="marketpricesqm" :disabled="!doEditing" label="มูลค่าตลาดของทรัพย์สิน (ต่อตารางเมตร)" ></v-text-field>
                </v-col>
              </v-row>
              <br>
              <v-row>
                <v-col cols="4" md="4"> 
                  <div v-if="marketpriceclass != ''">
                    <div class="grey--text">ช่วงของมูลค่าตลาดของทรัพย์สิน</div>
                    <br>
                    <v-chip :color="getColor(marketpriceclass)" dark> {{marketpriceclass}} </v-chip>
                  </div>
                </v-col>
                <v-col cols="4" md="4"> 
                  <div v-if="predictedprice != ''">
                    <div class="grey--text">ช่วงของราคาประเมินของทรัพย์สิน</div> 
                    <br>
                    <v-chip :color="getColor(predictedprice)" dark > {{predictedprice}} </v-chip>
                  </div>  
                </v-col>
              </v-row>
              <br>
          </v-card-text>
          </div>
      </v-card>
    </v-tab-item>
    </v-tabs>
    <br><br>
    <div style="margin-left:45%">
    <v-btn class="mr-4 primary--text" color="white" large  @click="back" >
        Back
      </v-btn>
    <v-btn class="mr-4"  color="primary" large  @click="submit">
        Submit
      </v-btn>
    </div>
    <br>
 
</div>
</template>

<script>
/* eslint-disable */
import menubar from '@/components/menubar'

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  mixins: [validationMixin],

  validations: {
    projectname: { required },
    roomCategory: { required },
    gps: { required },
    buildingNo: { required },
    roomFloors: { required },
    subdistrict: { required},
    district: { required },
    province: { required },
    // sendDate: { required },
    nearestBTS: { required },
    // distanceBTS: { required },
    buildingFloors: { required },
    // facilities: { required },
    camFee: { required },
    // staff: { required },
    roomType: { required },
    buildingAge: { required },
    buildingStatus: { required },
    roomLocation: { required },
    roomView: { required },
    affairPrice: { required },
    planLaws: { required },
    totalUnit: { required },
    roomArea: { required },
    materialD: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

   components: {
      menubar,
  },

  data: () => ({
    isEditing : null,
    doEditing : null,
    projects: [],
    projectname: "",
    roomCategory: null,
    roomcategory: ["ห้องชุดพักอาศัย"],
    gps: "",
    buildingNo: "",
    roomFloors: "",
    subdistrict: null,
    sub0: ['คลองเตยเหนือ', 'คลองตันเหนือ', 'พระโขนงเหนือ'],
    sub1: ['ทุ่งมหาเมฆ', 'ทุ่งวัดดอน', 'ยานนาวา'],
    sub2: ['ดุสิต', 'ถนนนครไชยศรี', 'วชิรพยาบาล', 'สวนจิตรลดา', 'สี่แยกมหานาค'],
    sub3: ['บางนา'],
    sub4: ['บางแค', 'บางแคเหนือ', 'บางไผ่', 'หลักสอง'],
    sub5: ['สามเสนใน'],
    sub6: ['จอมทอง', 'บางขุนเทียน', 'บางค้อ', 'บางมด'],
    sub7: ['ดินแดง'],
    sub8: ['ดาวคะนอง', 'ตลาดพลู', 'บางยี่เรือ', 'บุคคโล', 'วัดกัลยาณ์', 'สำเหร่', 'หิรัญรูจี'],
    sub9: ['บางบอน'],
    sub10: ['บางรัก', 'มหาพฤฒาราม', 'สี่พระยา', 'สีลม', 'สุริยวงศ์'],
    sub11: ['ท่าแร้ง', 'อนุสาวรีย์'],
    sub12: ['ดอกไม้', 'ประเวศ', 'หนองบอน'],
    sub13: ['ชนะสงคราม', 'ตลาดยอด', 'บวรนิเวศ', 'บางขุนพรหม', 'บ้านพานถม', 'พระบรมมหาราชวัง', 'วังบูรพาภิรมย์','สำราญราษฎร์', 'เสาชิงช้า'],
    sub14: ['คลองถนน', 'สายไหม', 'ออเงิน'],
    sub15: ['คลองต้นไทร', 'คลองสาน', 'บางลำภูล่าง', 'สมเด็จเจ้าพระยา'],
    sub16: ['คลองเตยเหนือ', 'คลองตัน', 'พระโขนง'],
    sub17: ['จตุจักร', 'จอมพล', 'จันทรเกษม', 'ลาดยาว', 'เสนานิคม'],
    sub18: ['ทุ่งครุ', 'บางมด'],
    sub19: ['คลองจั่น', 'หัวหมาก'],
    sub20: ['บางซื่อ'],
    sub21: ['บางบำหรุ', 'บางพลัด', 'บางยี่ขัน', 'บางอ้อ'],
    sub22: ['คลองกุ่ม'],
    sub23: ['ปทุมวัน', 'รองเมือง', 'ลุมพินี', 'วังใหม่'],
    sub24: ['บางจาก'],
    sub25: ['มีนบุรี', 'แสนแสบ'],
    sub26: ['ช่องนนทรี', 'บางโพงพาง'],
    sub27: ['ถนนเพชรบุรี', 'ถนนพญาไท', 'ทุ่งพญาไท', 'มักกะสัน'],
    sub28: ['สวนหลวง'],
    sub29: ['กระทุ่มราย', 'คลองสิบ', 'คลองสิบสอง', 'คู้ฝั่งเหนือ', 'โคกแฝด', 'ลำต้อยติ่ง', 'ลำผักชี', 'หนองจอก'],
    sub30: ['หนองแขม', 'หนองค้างพลู'],
    sub31: ['ตลาดบางเขน', 'ทุ่งสองห้อง'],
    sub32: ['คันนายาว'],
    sub33: ['สีกัน'],
    sub34: ['คลองชักพระ', 'ฉิมพลี', 'ตลิ่งชัน', 'บางเชือกหนัง', 'บางพรม', 'บางระมาด'],
    sub35: ['ทวีวัฒนา', 'ศาลาธรรมสพน์'],
    sub36: ['จรเข้บัว', 'ลาดพร้าว'],
    sub37: ['สะพานสูง'],
    sub38: ['บางกะปิ', 'สามเสนนอก', 'ห้วยขวาง'],
    sub39: ['ทรายกองดิน', 'ทรายกองดินใต้', 'บางชัน', 'สามวาตะวันตก', 'สามวาตะวันออก'],
    sub40: ['บางโคล่', 'บางคอแหลม', 'วัดพระยาไกร'],
    sub41: ['คลองขวาง', 'คูหาสวรรค์', 'บางจาก', 'บางด้วน', 'บางแวก', 'บางหว้า', 'ปากคลองภาษีเจริญ'],
    sub42: ['ขุมทอง', 'คลองสองต้นนุ่น', 'คลองสามประเวศ', 'ทับยาว', 'ลาดกระบัง', 'ลำปลาทิว'],
    sub43: ['บางขุนนนท์', 'บางขุนศรี', 'บ้านช่างหล่อ', 'ศิริราช', 'อรุณอมรินทร์'],
    sub44: ['วัดท่าพระ', 'วัดอรุณ'],
    sub45: ['วังทองหลาง'],
    sub46: ['ท่าข้าม', 'แสมดำ'],
    sub47: ['บางปะกอก', 'ราษฎร์บูรณะ'],
    sub48: ['จักรวรรดิ', 'ตลาดน้อย', 'สัมพันธวงศ์'],
    sub49: ['คลองมหานาค', 'บ้านบาตร', 'ป้อมปราบ', 'วัดเทพศิรินทร์', 'วัดโสมนัส'],

    district: null,
    dist: ['วัฒนา', 'เขตสาทร', 'เขตดุสิต', 'เขตบางนา', 'เขตบางแค', 'เขตพญาไท', 'เขตจอมทอง', 'เขตดินแดง', 'เขตธนบุรี', 'เขตบางบอน', 'เขตบางรัก', 'เขตบางเขน', 'เขตประเวศ', 'เขตพระนคร', 'เขตสายไหม',
            'เขตคลองสาน', 'เขตคลองเตย', 'เขตจตุจักร', 'เขตทุ่งครุ', 'เขตบางกะปิ', 'เขตบางซื่อ', 'เขตบางพลัด', 'เขตบึงกุ่ม', 'เขตปทุมวัน', 'เขตพระโขนง', 'เขตมีนบุรี', 'เขตยานนาวา', 'เขตราชเทวี', 'เขตสวนหลวง',
            'เขตหนองจอก', 'เขตหนองแขม', 'เขตหลักสี่', 'เขตคันนายาว', 'เขตดอนเมือง', 'เขตตลิ่งชัน', 'เขตทวีวัฒนา', 'เขตลาดพร้าว', 'เขตสะพานสูง', 'เขตห้วยขวาง', 'เขตคลองสามวา', 'เขตบางคอแหลม',
            'เขตภาษีเจริญ', 'เขตลาดกระบัง', 'เขตบางกอกน้อย', 'เขตบางกอกใหญ่', 'เขตวังทองหลาง', 'เขตบางขุนเทียน', 'เขตราษฎร์บูรณะ', 'เขตสัมพันธวงศ์', 'เขตป้อมปราบศัตรูพ่าย'],
    province: null,
    prov: ['กรุงเทพมหานคร'],
    // sendDate: "",
    nearestBTS: null,
    nearestbts: ["NA", 'BTS มหาวิทยาลัยเกษตรศาสตร์', 'BTS เสนานิคม', 'BTS รัชโยธิน', 'BTS พหลโยธิน 24', 'BTS ห้าแยกลาดพร้าว', 'BTS หมอชิต', 'BTS สะพานควาย', 'BTS อารีย์', 'BTS สนามเป้า', 
                  'BTS อนุสาวรีย์ชัยสมรภูมิ', 'BTS พญาไท', 'BTS ราชเทวี', 'BTS สยาม', 'BTS ชิดลม', 'BTS เพลินจิต', 'BTS นานา', 'BTS อโศก', 'BTS พร้อมพงษ์', 'BTS ทองหล่อ', 'BTS เอกมัย', 
                  'BTS พระโขนง', 'BTS อ่อนนุช', 'BTS บางจาก', 'BTS ปุณณวิถี', 'BTS อุดมสุข', 'BTS บางนา', 'BTS แบริ่ง', 'BTS สำโรง', 'BTS ปู่เจ้า', 'BTS ช้างเอราวัณ', 'BTS โรงเรียนนายเรือ',
                  'BTS ปากน้ำ', 'BTS ศรีนครินทร์', 'BTS แพรกษา', 'BTS สายลวด', 'BTS เคหะฯ', 'BTS สนามกีฬาแห่งชาติ', 'BTS ราชดำริ', 'BTS ศาลาแดง', 'BTS ช่องนนทรี', 'BTS สุรศักดิ์', 'BTS สะพานตากสิน',
                  'BTS กรุงธนบุรี', 'BTS วงเวียนใหญ่', 'BTS โพธิ์นิมิตร', 'BTS ตลาดพลู', 'BTS วุฒากาศ','BTS บางหว้า'], 
    nearestmrt: ["NA", 'MRT บางโพ', 'MRT เตาปูน', 'MRT บางซื่อ', 'MRT กำแพงเพชร', 'MRT สวนจตุจักร','MRT พหลโยธิน', 'MRT ลาดพร้าว', 'MRT รัชดาภิเษก', 'MRT สุทธิสาร', 'MRT ห้วยขวาง', 
                  'MRT ศูนย์วัฒนธรรมแห่งประเทศไทย', 'MRT พระราม 9', 'MRT เพชรบุรี', 'MRT สุขุมวิท', 'MRT ศูนย์การประชุมแห่งชาติสิริกิติ์','MRT คลองเตย', 'MRT ลุมพินี', 'MRT สีลม', 'MRT สามย่าน', 'MRT หัวลำโพง', 
                  'MRT วัดมังกร', 'MRT สามยอด', 'MRT สนามไชย', 'MRT อิสรภาพ', 'MRT บางไผ่', 'MRT บางหว้า', 'MRT เพชรเกษม 48', 'MRT ภาษีเจริญ', 'MRT บางแค', 'MRT หลักสอง', 'MRT คลองบางไผ่',
                  'MRT ตลาดบางใหญ่', 'MRT สามแยกบางใหญ่', 'MRT บางพลู', 'MRT บางรักใหญ่', 'MRT บางรักน้อยท่าอิฐ', 'MRT ไทรม้า', 'MRT สะพานพระนั่งเกล้า', 'MRT แยกนนทบุรี 1', 'MRT บางกระสอ',
                  'MRT ศุนย์ราชการนนทบุรี', 'MRT กระทรวงสาธารณสุข', 'MRT แยกติวานนท์', 'MRT วงศ์สว่าง', 'MRT บางช่อน'],
    nearestbrt: ["NA", 'BRT สาทร', 'BRT เทคนิคกรุงเทพ', 'BRT ถนนจันทน์', 'BRT นราราม 3', 'BRT วัดด่าน', 'BRT วัดปริวาส', 'BRT วัดดอกไม้', 'BRT สะพานพระราม 9', 'BRT เจริญราษฎร์', 'BRT สะพานพระราม 3', 'BRT ราชพฤกษ์'],
    distanceBTS: "",
    buildingFloors: "",
    // facilities: "",
    camFee: "",
    // staff: null,
    // staffName: ["เกรียงศักดิ์ ศักดิ์ปรีดา", "วรวิช ชัยอรุณ"],
    roomType: null,
    roomtype: ["1 ห้องนอน", "2 ห้องนอน", "3 ห้องนอน", "Duplex", "Penthouse"],
    buildingAge: "",
    buildingStatus: null,
    buildingstatus: ["ควรปรับปรุง", "พอใช้", "ดี", "ดีเยี่ยม"],
    roomLocation: null,
    roomlocation: ["ห้องกลาง", "ห้องริม", "ห้องมุม"],
    roomView: null,
    roomview: ["วิวติดอาคาร/ทางด่วน", "วิวเมือง/เปิดโล่ง", "วิวสวนสาธารณะ" , "วิวสระว่ายน้ำ", "วิวแม่น้ำ"],
    affairPrice: "",
    planLaws: null,
    laws: ["สีแดง (พาณิชยกรรม)", "สีเหลือง (ที่อยู่อาศัยหนาแน่นน้อย)", "สีส้ม (ที่อยู่อาศัยหนาแน่นปานกลาง)", "สีน้ำตาล (ที่อยู่อาศัยหนาแน่นมาก)"],
    totalUnit: "",
    roomArea: "",
    lobby: 0,
    lift: 0,
    swimmingpool: 0,
    fitness: 0,
    suana: 0,
    jacuzzi: 0,
    steam: 0,
    library: 0,
    garden: 0,
    kidplay: 0,
    parklot: 0,
    automateparklot: 0,
    golfcourse: 0,
    movieroom: 0,
    movieroom: 0,
    shop: 0,
    haveBTS: 0,
    haveMRT: 0,
    haveBRT: 0,
    mainCondition: null,
    maincondition: ["แย่", "ปานกลาง", "ดี"],
    fireInsurance: "",
    materialD: null,
    materiald: ["ควรปรับปรุง", "พอใช้", "ดี", "ดีเยี่ยม"],
    marketprice: '',
    marketpricesqm: '',
    marketpriceclass: '',
    predictedprice: '',
    checkbox: false
  }),

  computed: {
    projectNameErrors(){
      const errors = [];
      if (!this.$v.projectname.$dirty) return errors;
      !this.$v.projectname.required && errors.push("Required.");
      return errors;
    },
    roomCategoryErrors() {
      const errors = [];
      if (!this.$v.roomCategory.$dirty) return errors;
      !this.$v.roomCategory.required && errors.push("Required.");
      return errors;
    },
    gpsErrors() {
      const errors = [];
      if (!this.$v.gps.$dirty) return errors;
      !this.$v.gps.required && errors.push("Required.");
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
    subdistrictErrors(){
      const errors = [];
      if (!this.$v.subdistrict.$dirty) return errors;
      !this.$v.subdistrict.required && errors.push("Required.");
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
    sendDateErrors() {
      const errors = [];
      if (!this.$v.sendDate.$dirty) return errors;
      !this.$v.sendDate.required && errors.push("Required.");
      return errors;
    },
    buildingFloorsErrors() {
      const errors = [];
      if (!this.$v.buildingFloors.$dirty) return errors;
      !this.$v.buildingFloors.required && errors.push("Required.");
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
    materialDErrors() {
      const errors = [];
      if (!this.$v.materialD.$dirty) return errors;
      !this.$v.materialD.required && errors.push("Required.");
      return errors;
    },
    nearestBTSErrors() {
      const errors = [];
      if (!this.$v.nearestBTS.$dirty) return errors;
      !this.$v.nearestBTS.required && errors.push("Required.");
      return errors;
    },
  },

  methods: {
     getColor (price) {
        if (price === 'Ultimate') return '#BD0026'
        else if (price === 'Luxury') return '#FC4E2A'
        else if (price === 'High') return '#FD8D3C'
        else if (price === 'Economy') return '#FBC02D'
      },

    calsqm(marketprice, roomArea){
        function precisionRound(number, precision) {
          var factor = Math.pow(10, precision);
          return Math.round(number * factor) / factor;
        }

        this.marketpricesqm = precisionRound(marketprice/roomArea,2)
        if (this.marketpricesqm < 100000){
          this.marketpriceclass = 'Economy'
        } 
        else if (this.marketpricesqm >= 100000 && this.marketpricesqm < 120000){
          this.marketpriceclass = 'High'
        } 
        else if (this.marketpricesqm >= 120000 && this.marketpricesqm < 160000 ){
          this.marketpriceclass = 'Luxury'
        }
        else{
          this.marketpriceclass = 'Ultimate'
        }
        console.log(this.marketpricesqm )
    },

    submit (){

      if( this.district == 'วัฒนา' ) { this.district = 0 }
      if( this.district == 'เขตสาทร' ) { this.district = 1 }
      if( this.district == 'เขตดุสิต' ) { this.district = 2 }
      if( this.district == 'เขตบางนา' ) { this.district = 3 }
      if( this.district == 'เขตบางแค' ) { this.district = 4 }
      if( this.district == 'เขตพญาไท' ) { this.district = 5 }
      if( this.district == 'เขตจอมทอง' ) { this.district = 6 }
      if( this.district == 'เขตดินแดง' ) { this.district = 7 }
      if( this.district == 'เขตธนบุรี' ) { this.district = 8 }
      if( this.district == 'เขตบางบอน' ) { this.district = 9 }
      if( this.district == 'เขตบางรัก' ) { this.district = 10 }
      if( this.district == 'เขตบางเขน' ) { this.district = 11 }
      if( this.district == 'เขตประเวศ' ) { this.district = 12 }
      if( this.district == 'เขตพระนคร' ) { this.district = 13 }
      if( this.district == 'เขตสายไหม' ) { this.district = 14 }
      if( this.district == 'เขตคลองสาน' ) { this.district = 15 }
      if( this.district == 'เขตคลองเตย' ) { this.district = 16 }
      if( this.district == 'เขตจตุจักร' ) { this.district = 17 }
      if( this.district == 'เขตทุ่งครุ' ) { this.district = 18 }
      if( this.district == 'เขตบางกะปิ' ) { this.district = 19 }
      if( this.district == 'เขตบางซื่อ' ) { this.district = 20 }
      if( this.district == 'เขตบางพลัด' ) { this.district = 21 }
      if( this.district == 'เขตบึงกุ่ม' ) { this.district =  22 }
      if( this.district == 'เขตปทุมวัน' ) { this.district = 23 }
      if( this.district == 'เขตพระโขนง' ) { this.district = 24 }
      if( this.district == 'เขตมีนบุรี' ) { this.district = 25 }
      if( this.district == 'เขตยานนาวา' ) { this.district = 26 }
      if( this.district == 'เขตราชเทวี' ) { this.district = 27 }
      if( this.district == 'เขตสวนหลวง' ) { this.district = 28 }
      if( this.district == 'เขตหนองจอก' ) { this.district = 29 }
      if( this.district == 'เขตหนองแขม' ) { this.district = 30}
      if( this.district == 'เขตหลักสี่' ) { this.district = 31 }
      if( this.district == 'เขตคันนายาว' ) { this.district = 32 }
      if( this.district == 'เขตดอนเมือง' ) { this.district = 33 }
      if( this.district == 'เขตตลิ่งชัน' ) { this.district = 34 }
      if( this.district == 'เขตทวีวัฒนา' ) { this.district = 35}
      if( this.district == 'เขตลาดพร้าว' ) { this.district = 36 }
      if( this.district == 'เขตสะพานสูง' ) { this.district = 37 }
      if( this.district == 'เขตห้วยขวาง' ) { this.district = 38 }
      if( this.district == 'เขตคลองสามวา' ) { this.district = 39 }
      if( this.district == 'เขตบางคอแหลม' ) { this.district = 40 }
      if( this.district == 'เขตภาษีเจริญ' ) { this.district = 41 }
      if( this.district == 'เขตลาดกระบัง' ) { this.district = 42 }
      if( this.district == 'เขตบางกอกน้อย' ) { this.district = 43 }
      if( this.district == 'เขตบางกอกใหญ่' ) { this.district = 44 }
      if( this.district == 'เขตวังทองหลาง' ) { this.district = 45 }
      if( this.district == 'เขตบางขุนเทียน' ) { this.district = 46 }
      if( this.district == 'เขตราษฎร์บูรณะ' ) { this.district = 47 }
      if( this.district == 'เขตสัมพันธวงศ์' ) { this.district = 48 }
      if( this.district == 'เขตป้อมปราบศัตรูพ่าย' ) { this.district = 49 }

      if (this.subdistrict == 'คลองเตยเหนือ') { this.subdistrict = 0 }
      if ( this.subdistrict == 'คลองตันเหนือ') { this.subdistrict = 1 }
      if ( this.subdistrict == 'พระโขนงเหนือ') { this.subdistrict = 2 }
      if ( this.subdistrict == 'ทุ่งมหาเมฆ') { this.subdistrict = 3 }
      if ( this.subdistrict == 'ทุ่งวัดดอน') { this.subdistrict = 4 }
      if ( this.subdistrict == 'ยานนาวา') { this.subdistrict = 5 }
      if ( this.subdistrict == 'ดุสิต') { this.subdistrict = 6 }
      if ( this.subdistrict == 'ถนนนครไชยศรี') { this.subdistrict = 7 }
      if ( this.subdistrict == 'วชิรพยาบาล') { this.subdistrict = 8 }
      if ( this.subdistrict == 'สวนจิตรลดา') { this.subdistrict = 9 }
      if ( this.subdistrict == 'สี่แยกมหานาค') { this.subdistrict = 10 }
      if ( this.subdistrict == 'บางนา') { this.subdistrict = 11 }
      if ( this.subdistrict == 'บางแค') { this.subdistrict = 12 }
      if ( this.subdistrict == 'บางแคเหนือ') { this.subdistrict = 13 }
      if ( this.subdistrict == 'บางไผ่') { this.subdistrict = 14 }
      if ( this.subdistrict == 'หลักสอง') { this.subdistrict = 15 }
      if ( this.subdistrict == 'สามเสนใน') { this.subdistrict = 16 }
      if ( this.subdistrict == 'จอมทอง') { this.subdistrict = 17 }
      if ( this.subdistrict == 'บางขุนเทียน') { this.subdistrict = 18 }
      if ( this.subdistrict == 'บางค้อ') { this.subdistrict = 19 }
      if ( this.subdistrict == 'บางมด') { this.subdistrict = 20 }
      if ( this.subdistrict == 'ดินแดง') { this.subdistrict = 21 }
      if ( this.subdistrict == 'ดาวคะนอง') { this.subdistrict = 22 }
      if ( this.subdistrict == 'ตลาดพลู') { this.subdistrict = 23 }
      if ( this.subdistrict == 'บางยี่เรือ') { this.subdistrict = 24 }
      if ( this.subdistrict == 'บุคคโล') { this.subdistrict = 25 }
      if ( this.subdistrict == 'วัดกัลยาณ์') { this.subdistrict = 26 }
      if ( this.subdistrict == 'สำเหร่') { this.subdistrict = 27 }
      if ( this.subdistrict == 'หิรัญรูจี') { this.subdistrict = 28 }
      if ( this.subdistrict == 'บางบอน') { this.subdistrict = 29 }
      if ( this.subdistrict == 'บางรัก') { this.subdistrict = 30 }
      if ( this.subdistrict == 'มหาพฤฒาราม') { this.subdistrict = 31 }
      if ( this.subdistrict == 'สี่พระยา') { this.subdistrict = 32 }
      if ( this.subdistrict == 'สีลม') { this.subdistrict = 33 }
      if ( this.subdistrict == 'สุริยวงศ์') { this.subdistrict = 34 }
      if ( this.subdistrict == 'ท่าแร้ง') { this.subdistrict = 35 }
      if ( this.subdistrict == 'อนุสาวรีย์') { this.subdistrict = 36 }
      if ( this.subdistrict == 'ดอกไม้') { this.subdistrict = 37 }
      if ( this.subdistrict == 'ประเวศ') { this.subdistrict = 38 }
      if ( this.subdistrict == 'หนองบอน') { this.subdistrict = 39 }
      if ( this.subdistrict == 'ชนะสงคราม') { this.subdistrict = 40 }
      if ( this.subdistrict == 'ตลาดยอด') { this.subdistrict = 41 }
      if ( this.subdistrict == 'บวรนิเวศ') { this.subdistrict = 42 }
      if ( this.subdistrict == 'บางขุนพรหม') { this.subdistrict = 43 }
      if ( this.subdistrict == 'บ้านพานถม') { this.subdistrict = 44 }
      if ( this.subdistrict == 'พระบรมมหาราชวัง') { this.subdistrict = 45 }
      if ( this.subdistrict == 'วังบูรพาภิรมย์') { this.subdistrict = 46 }
      if ( this.subdistrict == 'วัดราชบพิธ') { this.subdistrict = 47 }
      if ( this.subdistrict == 'วัดสามพระยา') { this.subdistrict = 48 }
      if ( this.subdistrict == 'ศาลเจ้าพ่อเสือ') { this.subdistrict = 49 }
      if ( this.subdistrict == 'สำราญราษฎร์') { this.subdistrict = 50 }
      if ( this.subdistrict == 'เสาชิงช้า') { this.subdistrict = 51 }
      if ( this.subdistrict == 'คลองถนน') { this.subdistrict = 52 }
      if ( this.subdistrict == 'สายไหม') { this.subdistrict = 53 }
      if ( this.subdistrict == 'ออเงิน') { this.subdistrict = 54 }
      if ( this.subdistrict == 'คลองต้นไทร') { this.subdistrict = 55 }
      if ( this.subdistrict == 'คลองสาน') { this.subdistrict = 56 }
      if ( this.subdistrict == 'บางลำภูล่าง') { this.subdistrict = 57 }
      if ( this.subdistrict == 'สมเด็จเจ้าพระยา') { this.subdistrict = 58 }
      if ( this.subdistrict == 'คลองเตยเหนือ') { this.subdistrict = 59 }
      if ( this.subdistrict == 'คลองตัน') { this.subdistrict = 60 }
      if ( this.subdistrict == 'พระโขนง') { this.subdistrict = 61 }
      if ( this.subdistrict == 'จตุจักร') { this.subdistrict = 62 }
      if ( this.subdistrict == 'จอมพล') { this.subdistrict = 63 }
      if ( this.subdistrict == 'จันทรเกษม') { this.subdistrict = 64 }
      if ( this.subdistrict == 'ลาดยาว') { this.subdistrict = 65 }
      if ( this.subdistrict == 'เสนานิคม') { this.subdistrict = 66 }
      if ( this.subdistrict == 'ทุ่งครุ') { this.subdistrict = 67 }
      if ( this.subdistrict == 'บางมด') { this.subdistrict = 68 }
      if ( this.subdistrict == 'คลองจั่น') { this.subdistrict = 69 }
      if ( this.subdistrict == 'หัวหมาก') { this.subdistrict = 70 }
      if ( this.subdistrict == 'บางซื่อ') { this.subdistrict =  71}
      if ( this.subdistrict == 'บางบำหรุ') { this.subdistrict = 72 }
      if ( this.subdistrict == 'บางพลัด') { this.subdistrict = 73 }
      if ( this.subdistrict == 'บางยี่ขัน') { this.subdistrict = 74 }
      if ( this.subdistrict == 'บางอ้อ') { this.subdistrict =  75}
      if ( this.subdistrict == 'คลองกุ่ม') { this.subdistrict = 76 }   
      if ( this.subdistrict == 'ปทุมวัน') { this.subdistrict = 77 }
      if ( this.subdistrict == 'รองเมือง') { this.subdistrict = 78 }
      if ( this.subdistrict == 'ลุมพินี') { this.subdistrict = 79 }
      if ( this.subdistrict == 'วังใหม่') { this.subdistrict = 80 }
      if ( this.subdistrict == 'บางจาก') { this.subdistrict = 81 }
      if ( this.subdistrict == 'มีนบุรี') { this.subdistrict = 82 }
      if ( this.subdistrict == 'แสนแสบ') { this.subdistrict = 83 }
      if ( this.subdistrict == 'ช่องนนทรี') { this.subdistrict = 84 }
      if ( this.subdistrict == 'บางโพงพาง') { this.subdistrict = 85 }
      if ( this.subdistrict == 'ถนนเพชรบุรี') { this.subdistrict = 86 }
      if ( this.subdistrict == 'ถนนพญาไท') { this.subdistrict = 87 }
      if ( this.subdistrict == 'ทุ่งพญาไท') { this.subdistrict = 88 }
      if ( this.subdistrict == 'มักกะสัน') { this.subdistrict = 89 }
      if ( this.subdistrict == 'สวนหลวง') { this.subdistrict = 90 }
      if ( this.subdistrict == 'กระทุ่มราย') { this.subdistrict = 91 }
      if ( this.subdistrict == 'คลองสิบ') { this.subdistrict = 92 }
      if ( this.subdistrict == 'คลองสิบสอง') { this.subdistrict = 93 }
      if ( this.subdistrict == 'คู้ฝั่งเหนือ') { this.subdistrict = 94 }
      if ( this.subdistrict == 'โคกแฝด') { this.subdistrict = 95 }
      if ( this.subdistrict == 'ลำต้อยติ่ง') { this.subdistrict = 96 }
      if ( this.subdistrict == 'ลำผักชี') { this.subdistrict = 97 }
      if ( this.subdistrict == 'หนองจอก') { this.subdistrict = 98 }
      if ( this.subdistrict == 'หนองแขม') { this.subdistrict = 99 }
      if ( this.subdistrict == 'หนองค้างพลู') { this.subdistrict = 100 }
      if ( this.subdistrict == 'ตลาดบางเขน') { this.subdistrict = 101 }
      if ( this.subdistrict == 'ทุ่งสองห้อง') { this.subdistrict = 102 }
      if ( this.subdistrict == 'คันนายาว') { this.subdistrict = 103 }
      if ( this.subdistrict == 'สีกัน') { this.subdistrict = 104 }
      if ( this.subdistrict == 'คลองชักพระ'){ this.subdistrict = 105 }
      if ( this.subdistrict == 'ฉิมพลี') { this.subdistrict = 106 }
      if ( this.subdistrict == 'ตลิ่งชัน') { this.subdistrict = 107 }
      if ( this.subdistrict == 'บางเชือกหนัง'){ this.subdistrict = 108 }
      if ( this.subdistrict == 'บางพรม') { this.subdistrict = 109 }
      if ( this.subdistrict == 'บางระมาด') {  this.subdistrict = 110 }
      if ( this.subdistrict == 'ทวีวัฒนา') { this.subdistrict = 111 }
      if ( this.subdistrict == 'ศาลาธรรมสพน์') { this.subdistrict = 112 }
      if ( this.subdistrict == 'จรเข้บัว') { this.subdistrict = 113 }
      if ( this.subdistrict == 'ลาดพร้าว') { this.subdistrict = 114 }
      if ( this.subdistrict == 'สะพานสูง') { this.subdistrict = 115 }
      if ( this.subdistrict == 'บางกะปิ') { this.subdistrict = 116 }
      if ( this.subdistrict == 'สามเสนนอก') { this.subdistrict = 117 }
      if ( this.subdistrict == 'ห้วยขวาง') { this.subdistrict = 118 }
      if ( this.subdistrict == 'ทรายกองดิน') { this.subdistrict =119  }
      if ( this.subdistrict == 'ทรายกองดินใต้') { this.subdistrict = 120 }
      if ( this.subdistrict == 'บางชัน') { this.subdistrict = 121 }
      if ( this.subdistrict == 'สามวาตะวันตก') { this.subdistrict = 122 }
      if ( this.subdistrict == 'สามวาตะวันออก') { this.subdistrict = 123 }
      if ( this.subdistrict == 'บางโคล่') { this.subdistrict = 124 }
      if ( this.subdistrict == 'บางคอแหลม') { this.subdistrict = 125 }
      if ( this.subdistrict == 'วัดพระยาไกร') { this.subdistrict = 126 }
      if ( this.subdistrict == 'คลองขวาง') { this.subdistrict = 127 }
      if ( this.subdistrict == 'คูหาสวรรค์'){ this.subdistrict = 128 }
      if ( this.subdistrict == 'บางจาก') { this.subdistrict = 129 }
      if ( this.subdistrict == 'บางด้วน') { this.subdistrict = 130 }
      if ( this.subdistrict == 'บางแวก') { this.subdistrict = 131 }
      if ( this.subdistrict == 'บางหว้า') { this.subdistrict = 132 }
      if ( this.subdistrict == 'ปากคลองภาษีเจริญ') { this.subdistrict = 133 }
      if ( this.subdistrict == 'ขุมทอง') { this.subdistrict = 134 }
      if ( this.subdistrict == 'คลองสองต้นนุ่น') { this.subdistrict = 135 }
      if ( this.subdistrict == 'คลองสามประเวศ') { this.subdistrict = 136 }
      if ( this.subdistrict == 'ทับยาว') { this.subdistrict = 137 }
      if ( this.subdistrict == 'ลาดกระบัง') { this.subdistrict = 138 }
      if ( this.subdistrict == 'ลำปลาทิว') { this.subdistrict = 139 }
      if ( this.subdistrict == 'บางขุนนนท์') { this.subdistrict = 140 }
      if ( this.subdistrict == 'บางขุนศรี') { this.subdistrict = 141 }
      if ( this.subdistrict == 'บ้านช่างหล่อ') { this.subdistrict = 142 }
      if ( this.subdistrict == 'ศิริราช') { this.subdistrict = 143 }
      if ( this.subdistrict == 'อรุณอมรินทร์') { this.subdistrict = 144 }
      if ( this.subdistrict == 'วัดท่าพระ') { this.subdistrict = 145 }
      if ( this.subdistrict == 'วัดอรุณ') { this.subdistrict = 146 }
      if ( this.subdistrict == 'วังทองหลาง') { this.subdistrict = 147 }
      if ( this.subdistrict == 'ท่าข้าม' ){ this.subdistrict = 148 }
      if ( this.subdistrict == 'แสมดำ') { this.subdistrict = 149 }
      if ( this.subdistrict == 'บางปะกอก') { this.subdistrict = 150 }
      if ( this.subdistrict == 'ราษฎร์บูรณะ') { this.subdistrict =  151}
      if ( this.subdistrict == 'จักรวรรดิ') { this.subdistrict = 152 }
      if ( this.subdistrict == 'ตลาดน้อย') { this.subdistrict = 153 }
      if ( this.subdistrict == 'สัมพันธวงศ์') { this.subdistrict = 154 }
      if ( this.subdistrict == 'คลองมหานาค') { this.subdistrict = 155 }
      if ( this.subdistrict == 'บ้านบาตร') { this.subdistrict = 156 }
      if ( this.subdistrict == 'ป้อมปราบ') { this.subdistrict = 157 }
      if ( this.subdistrict == 'วัดเทพศิรินทร์') { this.subdistrict = 158 }
      if ( this.subdistrict == 'วัดโสมนัส') { this.subdistrict = 159 }
          
      if( this.roomType == '1 ห้องนอน'){ this.roomType = 1}
      if( this.roomType == '2 ห้องนอน'){ this.roomType = 2}
      if( this.roomType == '3 ห้องนอน'){ this.roomType = 3}
      if( this.roomType == 'Duplex'){ this.roomType = 4}
      if( this.roomType == 'Penthouse'){ this.roomType = 5}

      if(this.buildingStatus == 'ควรปรับปรุง'){ this.buildingStatus =1}
      if(this.buildingStatus == 'พอใช้'){this.buildingStatus =2}
      if(this.buildingStatus == 'ดี'){this.buildingStatus = 3}   
      if(this.buildingStatus == 'ดีเยี่ยม'){this.buildingStaus =4}

      if(this.roomLocation == 'ห้องกลาง'){ this.roomLocation =0}
      if(this.roomLocation == 'ห้องริม'){this.roomLocation = 1}
      if(this.roomLocation == 'ห้องมุม'){this.roomLocation =2}

      if(this.roomView == 'วิวเมือง/เปิดโล่ง'){ this.roomView =0}
      if(this.roomView == 'วิวติดอาคาร/ทางด่วน'){this.roomView =1}
      if(this.roomView == 'วิวสวน'){ this.roomView =2}
      if(this.roomView == 'วิวสระว่ายน้ำ'){ this.roomView =3}
      if(this.roomView == 'วิวแม่น้ำ'){ this.roomView =4}

      if(this.planLaws == 'สีแดง (พาณิชยกรรม)'){ this.planLaws =1}
      if(this.planLaws == 'สีเหลือง (ที่อยู่อาศัยหนาแน่นน้อย)') { this.planLaws =2}
      if(this.planLaws == 'สีส้ม (ที่อยู่อาศัยหนาแน่นปานกลาง)'){ this.planLaws =3}
      if(this.planLaws == 'สีน้ำตาล (ที่อยู่อาศัยหนาแน่นมาก)'){ this.planLaws = 4}

      if(this.mainCondition == 'แย่'){ this.mainCondition =0}
      if(this.mainCondition == 'ปานกลาง'){ this.mainCondition =1}
      if(this.mainCondition == 'ดี'){ this.mainCondition =2}
      
      if(this.materialD == 'ควรปรับปรุง'){ this.materialD =1}
      if(this.materialD == 'พอใช้'){ this.materialD =2}
      if(this.materialD == 'ดี'){ this.materialD =3}
      if(this.materialD == 'ดีเยี่ยม'){ this.materialD =4}

      if(this.nearestBTS == "NA") { this.nearestBTS = null}
      if(this.haveBTS == true) { this.haveBTS = 1}
      if(this.haveBTS == false) { this.haveBTS = 0}
      if(this.haveMRT == true) { this.haveMRT = 1}
      if(this.haveMRT == false) { this.haveMRT = 0}
      if(this.haveBRT == true) { this.haveBRT = 1}
      if(this.haveBRT == false) { this.haveBRT = 0}

      if (this.marketpriceclass == 'Ultimate') {this.marketpriceclass = 3}
      if (this.marketpriceclass == 'Luxury') {this.marketpriceclass = 2}
      if (this.marketpriceclass == 'High') {this.marketpriceclass = 1}
      if (this.marketpriceclass == 'Economy') {this.marketpriceclass = 0}

      if (this.predictedprice == 'Ultimate') {this.predictedprice = 3}
      if (this.predictedprice == 'Luxury') {this.predictedprice = 2}
      if (this.predictedprice == 'High') {this.predictedprice = 1}
      if (this.predictedprice == 'Economy') {this.predictedprice = 0}
      
      if (this.lobby == true) { this.lobby = 1}
      if (this.lobby == false) { this.lobby = 0}
      if (this.lift == true) {this.lift = 1}
      if (this.lift == false) {this.lift = 0}
      if (this.swimmingpool == true) {this.swimmingpool = 1}
      if (this.swimmingpool == false) {this.swimmingpool = 0}
      if (this.fitness == true) {this.fitness = 1}
      if (this.fitness == false) {this.fitness = 0}
      if (this.suana == true) {this.suana = 1}
      if (this.suana == false) {this.suana = 0}
      if (this.jacuzzi == true) {this.jacuzzi = 1} 
      if (this.jacuzzi == false) {this.jacuzzi = 0} 
      if (this.steam == true) {this.steam = 1}
      if (this.steam == false) {this.steam = 0}
      if (this.garden == true) {this.garden = 1}
      if (this.garden == false) {this.garden = 0}
      if (this.library == true) {this.library = 1}
      if (this.library == false) {this.library = 0}
      if (this.kidplay == true) {this.kidplay = 1}
      if (this.kidplay == false) {this.kidplay = 0}
      if (this.parklot == true) {this.parklot = 1}
      if (this.parklot == false) {this.parklot = 0}
      if (this.automateparklot == true) {this.automateparklot = 1}
      if (this.automateparklot == false) {this.automateparklot = 0}
      if (this.golfcourse == true) {this.golfcourse = 1}
      if (this.golfcourse == false) {this.golfcourse = 0}
      if (this.movieroom == true) {this.movieroom = 1}
      if (this.movieroom == false) {this.movieroom = 0}
      if (this.shop == true) {this.shop = 1}
      if (this.shop == false) {this.shop = 0}
      // if (this.haveBTS == true) {this.haveBTS = 1}
      // if (this.haveBTS == false) {this.haveBTS = 0}
      // if (this.haveMRT == true) {this.haveMRT = 1}
      // if (this.haveMRT == false) {this.haveMRT = 0}
      // if (this.haveBRT == true) {this.haveBRT = 1}
      // if (this.haveBRT == false) {this.haveBRT = 0}

      let newUser = {
        projectName: this.projectname,
        roomCategory: this.roomCategory,
        latitude: parseFloat(this.gps.split(",")[0]),
        longtitude: parseFloat(this.gps.split(",")[1]),
        buildingName: this.buildingNo,
        floor: parseInt(this.roomFloors),
        subdistrictName: this.subdistrict,
        districtName: this.district,
        province: this.province,
        nearestBTS: this.nearestBTS,
        distanceBTS: parseInt(this.distanceBTS),
        buildingFloor: parseInt(this.buildingFloors),
        camFee: parseInt(this.camFee),
        roomType: parseInt(this.roomType),
        buildingAge: parseInt(this.buildingAge),
        buildingCondition: parseInt(this.buildingStatus),
        roomPosition: parseInt(this.roomLocation),
        roomView: parseInt(this.roomView),
        pricebyGov: parseFloat(this.affairPrice),
        buildingControlAct: parseInt(this.planLaws),
        units: parseInt(this.totalUnit),
        areaRoom: parseInt(this.roomArea),
        lobby: parseInt(this.lobby),
        lift: parseInt(this.lift),
        swimmingPool: parseInt(this.swimmingpool),
        fitness: parseInt(this.fitness),
        suana: parseInt(this.suana),
        jacuzzi: parseInt(this.jacuzzi),
        steam: parseInt(this.steam),
        garden: parseInt(this.garden),
        library: parseInt(this.library),
        kidplay: parseInt(this.kidplay),
        parklot: parseInt(this.parklot),
        automateParklot: parseInt(this.automateparklot),
        golfCourse: parseInt(this.golfcourse),
        movieRoom: parseInt(this.movieroom),
        shop: parseInt(this.shop),
        haveBTS: parseInt(this.haveBTS),
        haveMRT: parseInt(this.haveMRT),
        haveBRT: parseInt(this.haveBRT),
        maintananceCondition: parseInt(this.mainCondition),
        fireInsurance: parseFloat(this.fireInsurance),
        materialDesign: parseInt(this.materialD),
        marketPrice: parseFloat(this.marketprice),
        marketPriceSQM: parseFloat(this.marketpricesqm),
        marketPriceClass: parseInt(this.marketpriceclass),
        predictedPrice: parseInt(this.predictedprice)
      }
      console.log('A',newUser)
        this.$v.$touch()
        if (this.$v.projectname.required == true &&  this.$v.roomFloors.required == true && 
          this.$v.roomType.required == true && this.$v.roomLocation.required == true && this.$v.roomView.required == true && 
          this.$v.materialD.required == true && this.$v.affairPrice.required == true && this.$v.roomArea.required == true &&

          this.$v.buildingNo.required == true && this.$v.buildingFloors.required == true && this.$v.totalUnit.required == true &&
          this.$v.buildingStatus.required == true && this.$v.buildingAge.required == true && this.$v.camFee.required == true && 

          this.$v.gps.required == true &&this.$v.planLaws.required == true && this.$v.subdistrict.required == true &&
          this.$v.district.required == true && this.$v.province.required == true ){
          
            var url = "http://localhost:3000/information/update/" +  this.projectID ;
             axios
              .post(url, newUser )
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error);
            });

            this.$router.push('/Repositories')
        }
    },
          
   back(){
      this.$router.push('/Repositories')
    }
            
      
  },
  
  mounted() {
    var url = "http://localhost:3000/information/getSomeData/'" +  this.$route.params.projectName + "'";
    console.log(this.$route.params.projectName)
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          this.projectID = response.data.rows[0].projectID
          this.projectname = response.data.rows[0].projectName
          var rc  = response.data.rows[0].roomCategory
            if(rc == 'ห้องชุดพักอาศัย'){ this.roomCategory = 'ห้องชุดพักอาศัย'}
          this.gps = response.data.rows[0].latitude + " , " + response.data.rows[0].longtitude 
          this.buildingNo = response.data.rows[0].buildingName
          this.roomFloors = response.data.rows[0].floor
          var sd =  response.data.rows[0].subdistrictID
            if ( sd == 0 ) { this.subdistrict = 'คลองเตยเหนือ'}
            if ( sd == 1 ) { this.subdistrict = 'คลองตันเหนือ'}
            if ( sd == 2 ) { this.subdistrict = 'พระโขนงเหนือ'}
            if ( sd == 3 ) { this.subdistrict = 'ทุ่งมหาเมฆ'}
            if ( sd == 4 ) { this.subdistrict = 'ทุ่งวัดดอน'}
            if ( sd == 5 ) { this.subdistrict = 'ยานนาวา'}
            if ( sd == 6 ) { this.subdistrict = 'ดุสิต'}
            if ( sd == 7 ) { this.subdistrict = 'ถนนนครไชยศรี'}
            if ( sd == 8 ) { this.subd=istrict = 'วชิรพยาบาล'}
            if ( sd == 9 ) { this.subdistrict = 'สวนจิตรลดา'}
            if ( sd == 10 ) { this.subdistrict = 'สี่แยกมหานาค'}
            if ( sd == 11 ) { this.subdistrict = 'บางนา'}
            if ( sd == 12 ) { this.subdistrict = 'บางแค'}
            if ( sd == 13 ) { this.subdistrict = 'บางแคเหนือ'}
            if ( sd == 14 ) { this.subdistrict = 'บางไผ่'}
            if ( sd == 15 ) { this.subdistrict = 'หลักสอง'}
            if ( sd == 16 ) { this.subdistrict = 'สามเสนใน'} 
            if ( sd == 17 ) { this.subdistrict = 'จอมทอง'}
            if ( sd == 18 ) { this.subdistrict = 'บางขุนเทียน'}
            if ( sd == 19 ) { this.subdistrict = 'บางค้อ'}
            if ( sd == 20 ) { this.subdistrict = 'บางมด'}
            if ( sd == 21 ) { this.subdistrict = 'ดินแดง'}
            if ( sd == 22 ) { this.subdistrict = 'ดาวคะนอง'}
            if ( sd == 23 ) { this.subdistrict = 'ตลาดพลู'}
            if ( sd == 24 ) { this.subdistrict = 'บางยี่เรือ'}
            if ( sd == 25 ) { this.subdistrict = 'บุคคโล'}
            if ( sd == 26 ) { this.subdistrict = 'วัดกัลยาณ์'}
            if ( sd == 27 ) { this.subdistrict = 'สำเหร่'}
            if ( sd == 28 ) { this.subdistrict = 'หิรัญรูจี'}
            if ( sd == 29 ) { this.subdistrict = 'บางบอน'}
            if ( sd == 30 ) { this.subdistrict = 'บางรัก'}
            if ( sd == 31 ) { this.subdistrict = 'มหาพฤฒาราม'}
            if ( sd == 32 ) { this.subdistrict = 'สี่พระยา'}
            if ( sd == 33 ) { this.subdistrict = 'สีลม'}
            if ( sd == 34 ) { this.subdistrict = 'สุริยวงศ์'}
            if ( sd == 35 ) { this.subdistrict = 'ท่าแร้ง'}
            if ( sd == 36 ) { this.subdistrict = 'อนุสาวรีย์'}
            if ( sd == 37 ) { this.subdistrict = 'ดอกไม้'}
            if ( sd == 38 ) { this.subdistrict = 'ประเวศ'}
            if ( sd == 39 ) { this.subdistrict = 'หนองบอน'}
            if ( sd == 40 ) { this.subdistrict = 'ชนะสงคราม'}
            if ( sd == 41 ) { this.subdistrict = 'ตลาดยอด'}
            if ( sd == 42 ) { this.subdistrict = 'บวรนิเวศ'}
            if ( sd == 43 ) { this.subdistrict = 'บางขุนพรหม'}
            if ( sd == 44 ) { this.subdistrict = 'บ้านพานถม'}
            if ( sd == 45 ) { this.subdistrict = 'พระบรมมหาราชวัง'}
            if ( sd == 46 ) { this.subdistrict = 'วังบูรพาภิรมย์'}
            if ( sd == 47 ) { this.subdistrict = 'วัดราชบพิธ'}
            if ( sd == 48 ) { this.subdistrict = 'วัดสามพระยา'}
            if ( sd == 49 ) { this.subdistrict = 'ศาลเจ้าพ่อเสือ'}
            if ( sd == 50 ) { this.subdistrict = 'สำราญราษฎร์'}
            if ( sd == 51 ) { this.subdistrict = 'เสาชิงช้า'}
            if ( sd == 52 ) { this.subdistrict = 'คลองถนน'}
            if ( sd == 53 ) { this.subdistrict = 'สายไหม'}
            if ( sd == 54 ) { this.subdistrict = 'ออเงิน'}
            if ( sd == 55 ) { this.subdistrict = 'คลองต้นไทร'}
            if ( sd == 56 ) { this.subdistrict = 'คลองสาน'}
            if ( sd == 57 ) { this.subdistrict = 'บางลำภูล่าง'}
            if ( sd == 58 ) { this.subdistrict = 'สมเด็จเจ้าพระยา'}
            if ( sd == 59 ) { this.subdistrict = 'คลองเตยเหนือ'}
            if ( sd == 60 ) { this.subdistrict = 'คลองตัน'}
            if ( sd == 61 ) { this.subdistrict = 'พระโขนง'}
            if ( sd == 62 ) { this.subdistrict = 'จตุจักร'}
            if ( sd == 63 ) { this.subdistrict = 'จอมพล'}
            if ( sd == 64 ) { this.subdistrict = 'จันทรเกษม'}
            if ( sd == 65 ) { this.subdistrict = 'ลาดยาว'}
            if ( sd == 66 ) { this.subdistrict = 'เสนานิคม'}
            if ( sd == 67 ) { this.subdistrict = 'ทุ่งครุ'}
            if ( sd == 68 ) { this.subdistrict = 'บางมด'}
            if ( sd == 69 ) { this.subdistrict = 'คลองจั่น'}
            if ( sd == 70 ) { this.subdistrict = 'หัวหมาก'}
            if ( sd == 71 ) { this.subdistrict = 'บางซื่อ'}
            if ( sd == 72 ) { this.subdistrict = 'บางบำหรุ'}
            if ( sd == 73 ) { this.subdistrict = 'บางพลัด'}
            if ( sd == 74 ) { this.subdistrict = 'บางยี่ขัน'}
            if ( sd == 75 ) { this.subdistrict = 'บางอ้อ'}
            if ( sd == 76 ) { this.subdistrict = 'คลองกุ่ม'}
            if ( sd == 77 ) { this.subdistrict = 'ปทุมวัน'}
            if ( sd == 78 ) { this.subdistrict = 'รองเมือง'}
            if ( sd == 79 ) { this.subdistrict = 'ลุมพินี'}
            if ( sd == 80 ) { this.subdistrict = 'วังใหม่'}
            if ( sd == 81 ) { this.subdistrict = 'บางจาก'}
            if ( sd == 82 ) { this.subdistrict = 'มีนบุรี'}
            if ( sd == 83 ) { this.subdistrict = 'แสนแสบ'}
            if ( sd == 84 ) { this.subdistrict = 'ช่องนนทรี'}
            if ( sd == 85 ) { this.subdistrict = 'บางโพงพาง'}
            if ( sd == 86 ) { this.subdistrict = 'ถนนเพชรบุรี'}
            if ( sd == 87 ) { this.subdistrict = 'ถนนพญาไท'}
            if ( sd == 88 ) { this.subdistrict = 'ทุ่งพญาไท'}
            if ( sd == 89 ) { this.subdistrict = 'มักกะสัน'}
            if ( sd == 90 ) { this.subdistrict = 'สวนหลวง'}
            if ( sd == 91 ) { this.subdistrict = 'กระทุ่มราย'}
            if ( sd == 92 ) { this.subdistrict = 'คลองสิบ'}
            if ( sd == 93 ) { this.subdistrict = 'คลองสิบสอง'}
            if ( sd == 94 ) { this.subdistrict = 'คู้ฝั่งเหนือ'}
            if ( sd == 95 ) { this.subdistrict = 'โคกแฝด'}
            if ( sd == 96 ) { this.subdistrict = 'ลำต้อยติ่ง'}
            if ( sd == 97 ) { this.subdistrict = 'ลำผักชี'}
            if ( sd == 98 ) { this.subdistrict = 'หนองจอก'}
            if ( sd == 99 ) { this.subdistrict = 'หนองแขม'}
            if ( sd == 100 ) { this.subdistrict = 'หนองค้างพลู'}
            if ( sd == 101 ) { this.subdistrict = 'ตลาดบางเขน'}
            if ( sd == 102 ) { this.subdistrict = 'ทุ่งสองห้อง'}
            if ( sd == 103 ) { this.subdistrict = 'คันนายาว'}
            if ( sd == 104 ) { this.subdistrict = 'สีกัน'}
            if ( sd == 105 ) { this.subdistrict = 'คลองชักพระ'}
            if ( sd == 106 ) { this.subdistrict = 'ฉิมพลี'}
            if ( sd == 107 ) { this.subdistrict = 'ตลิ่งชัน'}
            if ( sd == 108 ) { this.subdistrict = 'บางเชือกหนัง'}
            if ( sd == 109 ) { this.subdistrict = 'บางพรม'}
            if ( sd == 110 ) { this.subdistrict = 'บางระมาด'}
            if ( sd == 111 ) { this.subdistrict = 'ทวีวัฒนา'}
            if ( sd == 112 ) { this.subdistrict = 'ศาลาธรรมสพน์'}
            if ( sd == 113 ) { this.subdistrict = 'จรเข้บัว'}
            if ( sd == 114 ) { this.subdistrict = 'ลาดพร้าว'}
            if ( sd == 115 ) { this.subdistrict = 'สะพานสูง'}
            if ( sd == 116 ) { this.subdistrict = 'บางกะปิ'}
            if ( sd == 117 ) { this.subdistrict = 'สามเสนนอก'}
            if ( sd == 118 ) { this.subdistrict = 'ห้วยขวาง'}
            if ( sd == 119 ) { this.subdistrict = 'ทรายกองดิน'}
            if ( sd == 120 ) { this.subdistrict = 'ทรายกองดินใต้'}
            if ( sd == 121 ) { this.subdistrict = 'บางชัน'}
            if ( sd == 122 ) { this.subdistrict = 'สามวาตะวันตก'}
            if ( sd == 123 ) { this.subdistrict = 'สามวาตะวันออก'}
            if ( sd == 124 ) { this.subdistrict = 'บางโคล่'}
            if ( sd == 125 ) { this.subdistrict = 'บางคอแหลม'}
            if ( sd == 126 ) { this.subdistrict = 'วัดพระยาไกร'}
            if ( sd == 127 ) { this.subdistrict = 'คลองขวาง'}
            if ( sd == 128 ) { this.subdistrict = 'คูหาสวรรค์'}
            if ( sd == 129 ) { this.subdistrict = 'บางจาก'}
            if ( sd == 130 ) { this.subdistrict = 'บางด้วน'}
            if ( sd == 131 ) { this.subdistrict = 'บางแวก'}
            if ( sd == 132 ) { this.subdistrict = 'บางหว้า'}
            if ( sd == 133 ) { this.subdistrict = 'ปากคลองภาษีเจริญ'}
            if ( sd == 134 ) { this.subdistrict = 'ขุมทอง'}
            if ( sd == 135 ) { this.subdistrict = 'คลองสองต้นนุ่น'}
            if ( sd == 136 ) { this.subdistrict = 'คลองสามประเวศ'}
            if ( sd == 137 ) { this.subdistrict = 'ทับยาว'}
            if ( sd == 138 ) { this.subdistrict = 'ลาดกระบัง'}
            if ( sd == 139 ) { this.subdistrict = 'ลำปลาทิว'}
            if ( sd == 140 ) { this.subdistrict = 'บางขุนนนท์'}
            if ( sd == 141 ) { this.subdistrict = 'บางขุนศรี'}
            if ( sd == 142 ) { this.subdistrict = 'บ้านช่างหล่อ'}
            if ( sd == 143 ) { this.subdistrict = 'ศิริราช'}
            if ( sd == 144 ) { this.subdistrict = 'อรุณอมรินทร์'}
            if ( sd == 145 ) { this.subdistrict = 'วัดท่าพระ'}
            if ( sd == 146 ) { this.subdistrict = 'วัดอรุณ'}
            if ( sd == 147 ) { this.subdistrict = 'วังทองหลาง'}
            if ( sd == 148 ) { this.subdistrict = 'ท่าข้าม'}
            if ( sd == 149 ) { this.subdistrict = 'แสมดำ'}
            if ( sd == 150 ) { this.subdistrict = 'บางปะกอก'}
            if ( sd == 151 ) { this.subdistrict = 'ราษฎร์บูรณะ'}
            if ( sd == 152 ) { this.subdistrict = 'จักรวรรดิ'}
            if ( sd == 153 ) { this.subdistrict = 'ตลาดน้อย'}
            if ( sd == 154 ) { this.subdistrict = 'สัมพันธวงศ์'}
            if ( sd == 155 ) { this.subdistrict = 'คลองมหานาค'}
            if ( sd == 156 ) { this.subdistrict = 'บ้านบาตร'}
            if ( sd == 157 ) { this.subdistrict = 'ป้อมปราบ'}
            if ( sd == 158 ) { this.subdistrict = 'วัดเทพศิรินทร์'}
            if ( sd == 159 ) { this.subdistrict = 'วัดโสมนัส'}
            console.log(response.data.rows[0].subdistrictID)
            console.log(this.subdistrict)

          var di = response.data.rows[0].districtID
            if(di == 0){this.district = 'วัฒนา'}
            if(di == 1){this.district = 'เขตสาทร'}
            if(di == 2){this.district = 'เขตดุสิต'}
            if(di == 3){this.district = 'เขตบางนา'}
            if(di == 4){this.district = 'เขตบางแค'}
            if(di == 5){this.district = 'เขตพญาไท'}
            if(di == 6){this.district = 'เขตจอมทอง'}
            if(di == 7){this.district = 'เขตดินแดง'}
            if(di == 8){this.district = 'เขตธนบุรี'}
            if(di == 9){this.district = 'เขตบางบอน'}
            if(di == 10){this.district = 'เขตบางรัก'}
            if(di == 11){this.district = 'เขตบางเขน'}
            if(di == 12){this.district = 'เขตประเวศ'}
            if(di == 13){this.district = 'เขตพระนคร'}
            if(di == 14){this.district = 'เขตสายไหม'}
            if(di == 15){this.district = 'เขตคลองสาน'}
            if(di == 16){this.district = 'เขตคลองเตย'}
            if(di == 17){this.district = 'เขตจตุจักร'}
            if(di == 18){this.district = 'เขตทุ่งครุ'}
            if(di == 19){this.district = 'เขตบางกะปิ'}
            if(di == 20){this.district = 'เขตบางซื่อ'}
            if(di == 21){this.district = 'เขตบางพลัด'}
            if(di == 22){this.district = 'เขตบึงกุ่ม'}
            if(di == 23){this.district = 'เขตปทุมวัน'}
            if(di == 24){this.district = 'เขตพระโขนง'}
            if(di == 25){this.district = 'เขตมีนบุรี'}
            if(di == 26){this.district = 'เขตยานนาวา'}
            if(di == 27){this.district = 'เขตราชเทวี'}
            if(di == 28){this.district = 'เขตสวนหลวง'}
            if(di == 29){this.district = 'เขตหนองจอก'}
            if(di == 30){this.district = 'เขตหนองแขม'}
            if(di == 31){this.district = 'เขตหลักสี่'}
            if(di == 32){this.district = 'เขตคันนายาว'}
            if(di == 33){this.district = 'เขตดอนเมือง'}
            if(di == 34){this.district = 'เขตตลิ่งชัน'}
            if(di == 35){this.district = 'เขตทวีวัฒนา'}
            if(di == 36){this.district = 'เขตลาดพร้าว'}
            if(di == 37){this.district = 'เขตสะพานสูง'}
            if(di == 38){this.district = 'เขตห้วยขวาง'}
            if(di == 39){this.district = 'เขตคลองสามวา'}
            if(di == 40){this.district = 'เขตบางคอแหลม'}
            if(di == 41){this.district = 'เขตภาษีเจริญ'}
            if(di == 42){this.district = 'เขตลาดกระบัง'}
            if(di == 43){this.district = 'เขตบางกอกน้อย'}
            if(di == 44){this.district = 'เขตบางกอกใหญ่'}
            if(di == 45){this.district = 'เขตวังทองหลาง'}
            if(di == 46){this.district = 'เขตบางขุนเทียน'}
            if(di == 47){this.district = 'เขตราษฎร์บูรณะ'}
            if(di == 48){this.district = 'เขตสัมพันธวงศ์'}
            if(di == 49){this.district = 'เขตป้อมปราบศัตรูพ่าย'}

          var p = response.data.rows[0].province
            if(p == 'กรุงเทพมหานคร'){this.province = 'กรุงเทพมหานคร'}
          // this.sendDate = response.data.rows[0].inspectionDate
          this.BTS = response.data.rows[0].nearestBTS
          var st = response.data.rows[0].nearestBTS
            if (st == 'BTS มหาวิทยาลัยเกษตรศาสตร์' ) { this.nearestBTS = 'BTS มหาวิทยาลัยเกษตรศาสตร์' }
            if (st == 'BTS เสนานิคม' ) { this.nearestBTS = 'BTS เสนานิคม' }
            if (st == 'BTS รัชโยธิน' ) { this.nearestBTS = 'BTS รัชโยธิน' }
            if (st == 'BTS พหลโยธิน 24' ) { this.nearestBTS = 'BTS พหลโยธิน 24' }
            if (st == 'BTS ห้าแยกลาดพร้าว' ) { this.nearestBTS = 'BTS ห้าแยกลาดพร้าว' }
            if (st == 'BTS หมอชิต' ) { this.nearestBTS = 'BTS หมอชิต' }
            if (st == 'BTS สะพานควาย' ) { this.nearestBTS = 'BTS สะพานควาย' }
            if (st == 'BTS อารีย์' ) { this.nearestBTS = 'BTS อารีย์' }
            if (st == 'BTS สนามเป้า' ) { this.nearestBTS = 'BTS สนามเป้า' }
            if (st == 'BTS อนุสาวรีย์ชัยสมรภูมิ' ) { this.nearestBTS = 'BTS อนุสาวรีย์ชัยสมรภูมิ' }
            if (st == 'BTS พญาไท' ) { this.nearestBTS = 'BTS พญาไท' }
            if (st == 'BTS ราชเทวี' ) { this.nearestBTS = 'BTS ราชเทวี' }
            if (st == 'BTS สยาม' ) { this.nearestBTS = 'BTS สยาม' }
            if (st == 'BTS ชิดลม' ) { this.nearestBTS = 'BTS ชิดลม' }
            if (st == 'BTS เพลินจิต' ) { this.nearestBTS = 'BTS เพลินจิต' }
            if (st == 'BTS นานา' ) { this.nearestBTS = 'BTS นานา' }
            if (st == 'BTS อโศก' ) { this.nearestBTS = 'BTS อโศก' }
            if (st == 'BTS พร้อมพงษ์' ) { this.nearestBTS = 'BTS พร้อมพงษ์' }
            if (st == 'BTS ทองหล่อ' ) { this.nearestBTS = 'BTS ทองหล่อ' }
            if (st == 'BTS เอกมัย' ) { this.nearestBTS = 'BTS เอกมัย' }
            if (st == 'BTS พระโขนง' ) { this.nearestBTS = 'BTS พระโขนง' }
            if (st == 'BTS อ่อนนุช' ) { this.nearestBTS = 'BTS อ่อนนุช' }
            if (st == 'BTS บางจาก' ) { this.nearestBTS = 'BTS บางจาก' }
            if (st == 'BTS ปุณณวิถี' ) { this.nearestBTS = 'BTS ปุณณวิถี' }
            if (st == 'BTS อุดมสุข' ) { this.nearestBTS = 'BTS อุดมสุข' }
            if (st == 'BTS บางนา' ) { this.nearestBTS = 'BTS บางนา' }
            if (st == 'BTS แบริ่ง' ) { this.nearestBTS = 'BTS แบริ่ง' }
            if (st == 'BTS สำโรง' ) { this.nearestBTS = 'BTS สำโรง' }
            if (st == 'BTS ปู่เจ้า' ) { this.nearestBTS = 'BTS ปู่เจ้า' }
            if (st == 'BTS ช้างเอราวัณ' ) { this.nearestBTS = 'BTS ช้างเอราวัณ' }
            if (st == 'BTS โรงเรียนนายเรือ' ) { this.nearestBTS = 'BTS โรงเรียนนายเรือ' }
            if (st == 'BTS ปากน้ำ' ) { this.nearestBTS = 'BTS ปากน้ำ' }
            if (st == 'BTS ศรีนครินทร์' ) { this.nearestBTS = 'BTS ศรีนครินทร์' }
            if (st == 'BTS แพรกษา' ) { this.nearestBTS = 'BTS แพรกษา' }
            if (st == 'BTS สายลวด' ) { this.nearestBTS = 'BTS สายลวด' }
            if (st == 'BTS เคหะฯ' ) { this.nearestBTS = 'BTS เคหะฯ' }
            if (st == 'BTS สนามกีฬาแห่งชาติ' ) { this.nearestBTS = 'BTS สนามกีฬาแห่งชาติ' }
            if (st == 'BTS ราชดำริ' ) { this.nearestBTS = 'BTS ราชดำริ' }
            if (st == 'BTS ศาลาแดง' ) { this.nearestBTS = 'BTS ศาลาแดง' }
            if (st == 'BTS ช่องนนทรี' ) { this.nearestBTS = 'BTS ช่องนนทรี' }
            if (st == 'BTS สุรศักดิ์' ) { this.nearestBTS = 'BTS สุรศักดิ์' }
            if (st == 'BTS สะพานตากสิน' ) { this.nearestBTS = 'BTS สะพานตากสิน' }
            if (st == 'BTS กรุงธนบุรี' ) { this.nearestBTS = 'BTS กรุงธนบุรี' }
            if (st == 'BTS วงเวียนใหญ่' ) { this.nearestBTS = 'BTS วงเวียนใหญ่' }
            if (st == 'BTS โพธิ์นิมิตร' ) { this.nearestBTS = 'BTS โพธิ์นิมิตร' }
            if (st == 'BTS ตลาดพลู' ) { this.nearestBTS = 'BTS ตลาดพลู' }
            if (st == 'BTS วุฒากาศ' ) { this.nearestBTS = 'BTS วุฒากาศ' }
            if (st == 'BTS บางหว้า' ) { this.nearestBTS = 'BTS บางหว้า' }
            if (st == 'MRT ท่าพระ' ) { this.nearestBTS = 'MRT ท่าพระ' }
            if (st == 'MRT จรัญฯ 13' ) { this.nearestBTS = 'MRT จรัญฯ 13' }
            if (st == 'MRT ไฟฉาย' ) { this.nearestBTS = 'MRT ไฟฉาย' }
            if (st == 'MRT บางยี่ขัน' ) { this.nearestBTS = 'MRT บางยี่ขัน' }
            if (st == 'MRT สิรินธร' ) { this.nearestBTS = 'MRT สิรินธร' }
            if (st == 'MRT บางพลัด' ) { this.nearestBTS = 'MRT บางพลัด' }
            if (st == 'MRT บางอ้อ' ) { this.nearestBTS = 'MRT บางอ้อ' }
            if (st == 'MRT บางโพ' ) { this.nearestBTS = 'MRT บางโพ' }
            if (st == 'MRT เตาปูน' ) { this.nearestBTS = 'MRT เตาปูน' }
            if (st == 'MRT บางซื่อ' ) { this.nearestBTS = 'MRT บางซื่อ' }
            if (st == 'MRT กำแพงเพชร' ) { this.nearestBTS = 'MRT กำแพงเพชร' }
            if (st == 'MRT สวนจตุจักร' ) { this.nearestBTS = 'MRT สวนจตุจักร' }
            if (st == 'MRT พหลโยธิน' ) { this.nearestBTS = 'MRT พหลโยธิน' }
            if (st == 'MRT ลาดพร้าว' ) { this.nearestBTS = 'MRT ลาดพร้าว' }
            if (st == 'MRT รัชดาภิเษก' ) { this.nearestBTS = 'MRT รัชดาภิเษก' }
            if (st == 'MRT สุทธิสาร' ) { this.nearestBTS = 'MRT สุทธิสาร' }
            if (st == 'MRT ห้วยขวาง' ) { this.nearestBTS = 'MRT ห้วยขวาง' }
            if (st == 'MRT ศูนย์วัฒนธรรมแห่งประเทศไทย' ) { this.nearestBTS = 'MRT ศูนย์วัฒนธรรมแห่งประเทศไทย' }
            if (st == 'MRT พระราม 9' ) { this.nearestBTS = 'MRT พระราม 9' }
            if (st == 'MRT เพชรบุรี' ) { this.nearestBTS = 'MRT เพชรบุรี' }
            if (st == 'MRT สุขุมวิท' ) { this.nearestBTS = 'MRT สุขุมวิท' }
            if (st == 'MRT ศูนย์การประชุมแห่งชาติสิริกิติ์' ) { this.nearestBTS = 'MRT ศูนย์การประชุมแห่งชาติสิริกิติ์' }
            if (st == 'MRT คลองเตย' ) { this.nearestBTS = 'MRT คลองเตย' }
            if (st == 'MRT ลุมพินี' ) { this.nearestBTS = 'MRT ลุมพินี' }
            if (st == 'MRT สีลม' ) { this.nearestBTS = 'MRT สีลม' }
            if (st == 'MRT สามย่าน' ) { this.nearestBTS = 'MRT สามย่าน' }
            if (st == 'MRT หัวลำโพง' ) { this.nearestBTS = 'MRT หัวลำโพง' }
            if (st == 'MRT วัดมังกร' ) { this.nearestBTS = 'MRT วัดมังกร' }
            if (st == 'MRT สามยอด' ) { this.nearestBTS = 'MRT สามยอด' }
            if (st == 'MRT สนามไชย' ) { this.nearestBTS = 'MRT สนามไชย' }
            if (st == 'MRT อิสรภาพ' ) { this.nearestBTS = 'MRT อิสรภาพ' }
            if (st == 'MRT บางไผ่' ) { this.nearestBTS = 'MRT บางไผ่' }
            if (st == 'MRT บางหว้า' ) { this.nearestBTS = 'MRT บางหว้า' }
            if (st == 'MRT เพชรเกษม 48' ) { this.nearestBTS = 'MRT เพชรเกษม 48' }
            if (st == 'MRT ภาษีเจริญ' ) { this.nearestBTS = 'MRT ภาษีเจริญ' }
            if (st == 'MRT บางแค' ) { this.nearestBTS = 'MRT บางแค' }
            if (st == 'MRT หลักสอง' ) { this.nearestBTS = 'MRT หลักสอง' }
            if (st == 'MRT คลองบางไผ่' ) { this.nearestBTS = 'MRT คลองบางไผ่' }
            if (st == 'MRT ตลาดบางใหญ่' ) { this.nearestBTS = 'MRT ตลาดบางใหญ่' }
            if (st == 'MRT สามแยกบางใหญ่' ) { this.nearestBTS = 'MRT สามแยกบางใหญ่' }
            if (st == 'MRT บางพลู' ) { this.nearestBTS = 'MRT บางพลู' }
            if (st == 'MRT บางรักใหญ่' ) { this.nearestBTS = 'MRT บางรักใหญ่' }
            if (st == 'MRT บางรักน้อยท่าอิฐ' ) { this.nearestBTS = 'MRT บางรักน้อยท่าอิฐ' }
            if (st == 'MRT ไทรม้า' ) { this.nearestBTS = 'MRT ไทรม้า' }
            if (st == 'MRT สะพานพระนั่งเกล้า' ) { this.nearestBTS = 'MRT สะพานพระนั่งเกล้า' }
            if (st == 'MRT แยกนนทบุรี 1' ) { this.nearestBTS = 'MRT แยกนนทบุรี 1' }
            if (st == 'MRT บางกระสอ' ) { this.nearestBTS = 'MRT บางกระสอ' }
            if (st == 'MRT ศุนย์ราชการนนทบุรี' ) { this.nearestBTS = 'MRT ศุนย์ราชการนนทบุรี' }
            if (st == 'MRT กระทรวงสาธารณสุข' ) { this.nearestBTS = 'MRT กระทรวงสาธารณสุข' }
            if (st == 'MRT แยกติวานนท์' ) { this.nearestBTS = 'MRT แยกติวานนท์' }
            if (st == 'MRT วงศ์สว่าง' ) { this.nearestBTS = 'MRT วงศ์สว่าง' }
            if (st == 'MRT บางช่อน' ) { this.nearestBTS = 'MRT บางช่อน' }
            if (st == 'BRT สาทร' ) { this.nearestBTS = 'BRT สาทร' }
            if (st == 'BRT เทคนิคกรุงเทพ' ) { this.nearestBTS = 'BRT เทคนิคกรุงเทพ' }
            if (st == 'BRT ถนนจันทน์' ) { this.nearestBTS = 'BRT ถนนจันทน์' }
            if (st == 'BRT นราราม 3' ) { this.nearestBTS = 'BRT นราราม 3' }
            if (st == 'BRT วัดด่าน' ) { this.nearestBTS = 'BRT วัดด่าน' }
            if (st == 'BRT วัดปริวาส' ) { this.nearestBTS = 'BRT วัดปริวาส' }
            if (st == 'BRT วัดดอกไม้' ) { this.nearestBTS = 'BRT วัดดอกไม้' }
            if (st == 'BRT สะพานพระราม 9' ) { this.nearestBTS = 'BRT สะพานพระราม 9' }
            if (st == 'BRT เจริญราษฎร์' ) { this.nearestBTS = 'BRT เจริญราษฎร์' }
            if (st == 'BRT สะพานพระราม 3' ) { this.nearestBTS = 'BRT สะพานพระราม 3' }
            if (st == 'BRT ราชพฤกษ์' ) { this.nearestBTS = 'BRT ราชพฤกษ์' }
            if (st == null) { this.nearestBTS = 'NA' }
        
            console.log(st, this.nearestBTS)
          this.distanceBTS = response.data.rows[0].distanceFromBTS
          this.buildingFloors = response.data.rows[0].buildingFloor
          this.camFee = response.data.rows[0].camFee
          // this.staff = response.data.rows[0].staffName
          var rt  = response.data.rows[0].roomType
            if(rt == 1){ this.roomType = '1 ห้องนอน'}
            if(rt == 2){ this.roomType = '2 ห้องนอน'}
            if(rt == 3){ this.roomType = '3 ห้องนอน'}
            if(rt == 4){ this.roomType = 'Duplex'}
            if(rt == 5){ this.roomType = 'Penthouse'}
          this.buildingAge = response.data.rows[0].buildingAge
          var bs = response.data.rows[0].buildingCondition
            if(bs == 1){ this.buildingStatus = 'ควรปรับปรุง'}
            if(bs == 2){ this.buildingStatus = 'พอใช้'}
            if(bs == 3){ this.buildingStatus = 'ดี'}
            if(bs == 4){ this.buildingStatus = 'ดีเยี่ยม'}
          var rl = response.data.rows[0].roomPosition
            if(rl == 0){ this.roomLocation = 'ห้องกลาง'}
            if(rl == 1){ this.roomLocation = 'ห้องริม'}
            if(rl == 2){ this.roomLocation = 'ห้องมุม'}
          var rv = response.data.rows[0].roomView
            if(rv == 0){ this.roomView = 'วิวเมือง/เปิดโล่ง'}
            if(rv == 1){ this.roomView = 'วิวติดอาคาร/ทางด่วน'}
            if(rv == 2){ this.roomView = 'วิวสวน'}
            if(rv == 3){ this.roomView = 'วิวสระว่ายน้ำ'}
            if(rv == 4){ this.roomView = 'วิวแม่น้ำ'}
          this.affairPrice = response.data.rows[0].pricebyGov
          var pl = response.data.rows[0].buildingControlAct
            if(pl == 1){ this.planLaws = 'สีแดง (พาณิชยกรรม)'}
            if(pl == 2){ this.planLaws = 'สีเหลือง (ที่อยู่อาศัยหนาแน่นน้อย)'}
            if(pl == 3){ this.planLaws = 'สีส้ม (ที่อยู่อาศัยหนาแน่นปานกลาง)'}
            if(pl == 4){ this.planLaws = 'สีน้ำตาล (ที่อยู่อาศัยหนาแน่นมาก)'}
          this.totalUnit = response.data.rows[0].units
          this.roomArea = response.data.rows[0].areaRoom
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
          this.haveBTS = response.data.rows[0].haveBTS
          this.haveMRT = response.data.rows[0].haveMRT
          this.haveBRT = response.data.rows[0].haveBRT
          var mt = response.data.rows[0].maintananceCondition
            if(mt == 0) { this.mainCondition = 'แย่'}
            if(mt == 1) { this.mainCondition = 'ปานกลาง'}
            if(mt == 2) { this.mainCondition = 'ดี'}
          this.fireInsurance = response.data.rows[0].fireInsurance
          var md = response.data.rows[0].materialDesign
            if(md == 1){ this.materialD = 'ควรปรับปรุง'}
            if(md == 2){ this.materialD = 'พอใช้'}
            if(md == 3){ this.materialD = 'ดี'}
            if(md == 4){ this.materialD = 'ดีเยี่ยม'}
          this.marketprice = response.data.rows[0].marketPrice
          this.marketpricesqm = response.data.rows[0].marketPriceSQM
          var mp = response.data.rows[0].marketPriceClass
            if (mp == 3) this.marketpriceclass = 'Ultimate'
            if (mp == 2) this.marketpriceclass = 'Luxury'
            if (mp == 1) this.marketpriceclass = 'High'
            if (mp == 0) this.marketpriceclass = 'Economy'
            if (mp == null) { this.marketpriceclass = '' }
          var pp = response.data.rows[0].predictedPrice
            if (pp == 3) this.predictedprice = 'Ultimate'
            if (pp == 2) this.predictedprice = 'Luxury'
            if (pp == 1) this.predictedprice = 'High'
            if (pp == 0) this.predictedprice = 'Economy'
            if (pp == null) { this.predictedprice = '' }
            console.log(this.predictedprice);

          })
        .catch(error => {
          console.log("NOOO");
        });
  }
  
};
/* eslint-enable */
</script>