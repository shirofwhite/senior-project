<template>
<div>
   <menubar/>

    <v-tabs background-color="grey lighten-3" color="deep-purple accent-4" right>
    <v-tab> Room </v-tab>
    <v-tab>   Real Estate </v-tab>
    <v-tab>  Property </v-tab>      
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
                <v-select v-model="mainCondition" :items="maincondition" :disabled="!isEditing" label="สภาพการดูแลรักษา" @change="$v.mainCondition.$touch()"  @blur="$v.mainCondition.$touch()"></v-select>
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
                <v-text-field  v-model="fireInsurance" :disabled="!isEditing" label="มูลค่าประกันอัคคีภัย (บาท/ตร.ม)"  @input="$v.fireInsurance.$touch()"  @blur="$v.fireInsurance.$touch()"></v-text-field>
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
                <v-text-field  v-model="district" :error-messages="districtErrors" :disabled="!isEditing" label="(เขต/อำเภอ)"  required  @input="$v.district.$touch()"  @blur="$v.district.$touch()"></v-text-field>
              </v-col>
              <v-col cols="4" md="3">  
                <v-text-field  v-model="subdistrict" :error-messages="subdistrictErrors" :disabled="!isEditing" label="(แขวง/ตำบล)"  required  @input="$v.subdistrict.$touch()"  @blur="$v.subdistrict.$touch()"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4"> 
                <v-select v-model="planLaws" :items="laws" :error-messages="planLawsErrors" :disabled="!isEditing" label="ข้อบังคับกฎหมายผังเมือง"  required  @change="$v.planLaws.$touch()"  @blur="$v.planLaws.$touch()"></v-select>
              </v-col>
            <!-- </v-row>
            <v-row> -->
              <v-col cols="12" md="2">   
                <v-text-field  v-model="BTS" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า"  @input="$v.BTS.$touch()"  @blur="$v.BTS.$touch()"></v-text-field>
              </v-col>
              <v-col cols="12" md="2">  
                <v-text-field  v-model="distanceBTS" :disabled="!isEditing" label="ประมาณ (เมตร)"   @input="$v.distanceBTS.$touch()"  @blur="$v.distanceBTS.$touch()"></v-text-field>
              </v-col>
            </v-row>

            <div class="grey--text">สถานีรถไฟฟ้าใกล้เคียง</div>
              <v-row >
                <v-col cols="9" md="3">
                  <v-switch v-model="haveBTS" :disabled="!isEditing"  label="BTS"></v-switch>
                </v-col>
                <v-col cols="9" md="3">
                  <v-switch v-model="haveMRT" :disabled="!isEditing"  label="MRT"></v-switch>
                </v-col>
                <v-col cols="9" md="3">
                  <v-switch v-model="haveBRT" :disabled="!isEditing" label="BRT"></v-switch>
                </v-col>
              </v-row>                 
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
  <!-- <div class="container" style="width:60%">
    <v-card>
      <v-content>
          <form class="fluid form" style="margin:4%">
            <div class="headline font-weight grey--text" style="margin-top:1%;">{{projectname}}</div>
            <br />
            <v-divider></v-divider>
            <br />
            <br />
            
     <v-row>
        <v-col cols="12" md="5">    
            <v-text-field  v-model="buildingNo" :disabled="!isEditing" label="อาคารชุด" :error-messages="buildingNoErrors"  required  @input="$v.buildingNo.$touch()"  @blur="$v.buildingNo.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field  v-model="gps" :disabled="!isEditing" label="GPS.-" :error-messages="gpsErrors" required  @input="$v.gps.$touch()"  @blur="$v.gps.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">       
            <v-text-field  v-model="roomFloors" :disabled="!isEditing" label="ชั้น" :error-messages="roomFloorsErrors"  required  @input="$v.roomFloors.$touch()"  @blur="$v.roomFloors.$touch()"></v-text-field>
        </v-col>
      

      </v-row>

      <v-row>
        <v-col cols="9" md="3">    
            <v-text-field  v-model="district" :error-messages="districtErrors" :disabled="!isEditing" label="(เขต/อำเภอ)"  required  @input="$v.district.$touch()"  @blur="$v.district.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="3">    
            <v-text-field  v-model="province" :error-messages="provinceErrors" :disabled="!isEditing" label="(กรุงเทพมหานคร/จังหวัด)"  required  @input="$v.province.$touch()"  @blur="$v.province.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">    
            <v-menu v-model="sendDate" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date" :disabled="!isEditing" label="วันที่ส่งรายงาน" prepend-icon="mdi-calendar-today" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="senddate" @input="sendDate = false"></v-date-picker>
            </v-menu>
            <v-text-field  v-model="sendDate" :error-messages="sendDateErrors" :disabled="!isEditing" label="วันที่ส่งรายงาน"  required  @input="$v.sendDate.$touch()"  @blur="$v.sendDate.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-select v-model="staff" :items="staffName" :error-messages="staffErrors" :disabled="!isEditing" label="ผู้ประเมิน"  required  @change="$v.staff.$touch()"  @blur="$v.staff.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="2">
          <v-text-field  v-model="buildingFloors"  :error-messages="buildingFloorsErrors" :disabled="!isEditing" label="อาคารชุดสูง(ชั้น)"  required  @input="$v.buildingFloors.$touch()"  @blur="$v.buildingFloors.$touch()"></v-text-field>
        </v-col>
        <v-col cols="9" md="2">
          <v-text-field  v-model="buildingAge" :error-messages="buildingAgeErrors" :disabled="!isEditing" label="อายุอาคาร (ปี)"  required  @input="$v.buildingAge.$touch()"  @blur="$v.buildingAge.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-select v-model="planLaws" :items="laws" :error-messages="planLawsErrors" :disabled="!isEditing" label="ข้อบังคับกฎหมายผังเมือง"  required  @change="$v.planLaws.$touch()"  @blur="$v.planLaws.$touch()"></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="9" md="2">
          <v-select v-model="roomType" :items="roomtype" :error-messages="roomTypeErrors" :disabled="!isEditing" label="รูปแบบห้องชุด"  required  @change="$v.roomType.$touch()"  @blur="$v.roomType.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="buildingStatus" :items="buildingstatus" :error-messages="buildingStatusErrors" :disabled="!isEditing" label="สภาพอาคาร"  required  @change="$v.buildingStatus.$touch()"  @blur="$v.buildingStatus.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="2">
          <v-select v-model="roomLocation" :items="roomlocation" :error-messages="roomLocationErrors" :disabled="!isEditing" label="ตำแหน่งที่ตั้งห้องชุด"  required  @change="$v.roomLocation.$touch()"  @blur="$v.roomLocation.$touch()"></v-select>
        </v-col>
        <v-col cols="9" md="3">
          <v-select v-model="roomView" :items="roomview" :error-messages="roomViewErrors" :disabled="!isEditing" label="ทัศนียภาพ / วิว"  required  @change="$v.roomView.$touch()"  @blur="$v.roomView.$touch()"></v-select>
        </v-col>
      </v-row>

      <br />
            <v-divider></v-divider>
      <br />
      <div class="grey--text">สิ่งอำนวยความสะดวก</div>
      <br />
      <div>
        <v-row dense>
          <v-col cols="9" md="3">
          <v-switch v-model="lobby" :disabled="!isEditing"  label="ลอบบี้"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="lift" :disabled="!isEditing"  label="ลิฟต์"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="swimmingpool" :disabled="!isEditing" label="สระว่ายน้ำ"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="fitness" :disabled="!isEditing" label="ฟิตเนส"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="suana" :disabled="!isEditing" label="ซาวนา"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="jacuzzi" :disabled="!isEditing" label="จากุซซี"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="steam" :disabled="!isEditing" label="อบไอน้ำ"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="library" :disabled="!isEditing" label="ห้องสมุด"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="garden" :disabled="!isEditing" label="สวนหย่อม"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="kidplay" :disabled="!isEditing" label="สนามเด็กเล่น"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="parklot" :disabled="!isEditing" label="ลานจอดรถ"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="automateparklot" :disabled="!isEditing" label="ลานจอดรถอัตโนมัติ"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="golfcourse" :disabled="!isEditing" label="สนามกอล์ฟ"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="movieroom" :disabled="!isEditing" label="โรงภาพยนตร์"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="shop" :disabled="!isEditing" label="ร้านสะดวกซื้อ"></v-switch>
          </v-col>
        </v-row>
      </div>
    
            <v-divider></v-divider>
       <br />

      <v-row>
        <v-col cols="12" md="3">   
          <v-text-field  v-model="BTS" :disabled="!isEditing" label="ห่างจากสถานีรถไฟฟ้า"  @input="$v.BTS.$touch()"  @blur="$v.BTS.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">  
          <v-text-field  v-model="distanceBTS" :disabled="!isEditing" label="ประมาณ (เมตร)"   @input="$v.distanceBTS.$touch()"  @blur="$v.distanceBTS.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <div>
        <v-row dense>
          <v-col cols="9" md="3">
          <v-switch v-model="haveBTS" :disabled="!isEditing"  label="BTS"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="haveMRT" :disabled="!isEditing"  label="MRT"></v-switch>
          </v-col>
          <v-col cols="9" md="3">
          <v-switch v-model="haveBRT" :disabled="!isEditing" label="BRT"></v-switch>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
       <br />

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="totalUnit" :error-messages="totalUnitErrors" :disabled="!isEditing" label="ยูนิตทั้งหมด"  required  @input="$v.totalUnit.$touch()"  @blur="$v.totalUnit.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="roomArea" :error-messages="roomAreaErrors" :disabled="!isEditing" label="พื้นที่ทั้งหมด (ตร.ม.)"  required  @input="$v.roomArea.$touch()"  @blur="$v.roomArea.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field  v-model="camFee" :error-messages="camFeeErrors" :disabled="!isEditing" label="อัตราค่าส่วนกลาง [บาท/ตร.ม./เดือน]"  required  @input="$v.camFee.$touch()"  @blur="$v.camFee.$touch()"></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field  v-model="affairPrice" :error-messages="affairPriceErrors" :disabled="!isEditing" label="ราคาประเมินราชการ (บาท)"  required  @input="$v.affairPrice.$touch()"  @blur="$v.affairPrice.$touch()"></v-text-field>
        </v-col>
      </v-row>

      <br><br>

            <v-btn class="mr-4" @click="submit" color="primary">OK</v-btn>
            <v-btn class="mr-4" @click="gotoEdit">Edit</v-btn>
          </form>
      </v-content>
    </v-card>
    </div> --> 
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
    // BTS: { required },
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
    materialD: { required},
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
    projects: [],
    projectname: "",
    roomCategory: null,
    roomcategory: ["ห้องชุดพักอาศัย"],
    gps: "",
    buildingNo: "",
    roomFloors: "",
    subdistrict: "",
    district: "",
    province: null,
    prov: ['กรุงเทพมหานคร'],
    // sendDate: "",
    BTS: "",
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
    // BTSErrors() {
    //   const errors = [];
    //   if (!this.$v.BTS.$dirty) return errors;
    //   !this.$v.BTS.required && errors.push("Required.");
    //   return errors;
    // },
    // distanceBTSErrors() {
    //   const errors = [];
    //   if (!this.$v.distanceBTS.$dirty) return errors;
    //   !this.$v.distanceBTS.required && errors.push("Required.");
    //   return errors;
    // },
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
  },

  methods: {
    // gotoEdit () {
    //     // this.$v.$touch()
    //     this.$vuetify.goTo( 0, 0, 0,'linear')

    //     this.$router.push('/Editinfo/'+ this.projectname);
    //         console.log(this.projectname)
    //   },

    submit (){

      if( this.roomType == '1 ห้องนอน'){ this.roomType = 1}
      if( this.roomType == '2 ห้องนอน'){ this.roomType = 2}
      if( this.roomType == '3 ห้องนอน'){ this.roomType = 3}
      if( this.roomType == 'Duplex'){ this.roomType = 4}
      if( this.roomType == 'Penthouse'){ this.roomType = 5}

      if(this.buildingStatus == 'ควรปรับปรุง'){ this.buildingStatus =1}
      if(this.buildingStatus == 'พอใช้'){this.buildingStatus =2}
      if(this.buildingStatus == 'ดี'){this.buildingStatus =3}
      if(this.buildingStatus == 'ดีเยี่ยม'){this.buildingStatus =4}

      if(this.roomLocation == 'ห้องกลาง'){ this.roomLocation =0}
      if(this.roomLocation == 'ห้องริม'){this.roomLocation =1}
      if(this.roomLocation == 'ห้องมุม'){this.roomLocation =2}

      if(this.roomView == 'วิวเมือง/เปิดโล่ง'){ this.roomView =0}
      if(this.roomView == 'วิวติดอาคาร/ทางด่วน'){this.roomView =1}
      if(this.roomView == 'วิวสวน'){ this.roomView =2}
      if(this.roomView == 'วิวสระว่ายน้ำ'){ this.roomView =3}
      if(this.roomView == 'วิวแม่น้ำ'){ this.roomView =4}

      if(this.planLaws == 'สีแดง (พาณิชยกรรม)'){ this.planLaws =1}
      if(this.planLaws == 'สีเหลือง (ที่อยู่อาศัยหนาแน่นน้อย)'){ this.planLaws =2}
      if(this.planLaws == 'สีส้ม (ที่อยู่อาศัยหนาแน่นปานกลาง)'){ this.planLaws =3}
      if(this.planLaws == 'สีน้ำตาล (ที่อยู่อาศัยหนาแน่นมาก)'){ this.planLaws =4}

      if(this.mainCondition == 'แย่'){ this.mainCondition =0}
      if(this.mainCondition == 'ปานกลาง'){ this.mainCondition =1}
      if(this.mainCondition == 'ดี'){ this.mainCondition =2}
      
      if(this.materialD == 'ควรปรับปรุง'){ this.materialD =1}
      if(this.materialD == 'พอใช้'){ this.materialD =2}
      if(this.materialD == 'ดี'){ this.materialD =3}
      if(this.materialD == 'ดีเยี่ยม'){ this.materialD =4}

      let newUser = {
        projectName: this.projectname,
        roomCategory: this.roomCategory,
        latitude: this.gps.split(",")[0],
        longtitude: this.gps.split(",")[1],
        buildingName: this.buildingNo,
        floor: this.roomFloors,
        subdistrictName: this.subdistrict,
        districtName: this.district,
        province: this.province,
        nearestBTS: this.BTS,
        distanceBTS:this.distanceBTS,
        buildingFloor: this.buildingFloors,
        camFee: this.camFee,
        roomType: this.roomType,
        buildingAge: this.buildingAge,
        buildingCondition: this.buildingStatus,
        roomPosition: this.roomLocation,
        roomView: this.roomView,
        pricebyGov: this.affairPrice,
        buildingControlAct: this.planLaws,
        units: this.totalUnit,
        areaRoom: this.roomArea,
        lobby: this.lobby,
        lift: this.lift,
        swimmingPool: this.swimmingpool,
        fitness: this.fitness,
        suana: this.suana,
        jacuzzi: this.jacuzzi,
        steam: this.steam,
        garden: this.garden,
        library: this.library,
        kidplay: this.kidplay,
        parklot: this.parklot,
        automateParklot: this.automateparklot,
        golfCourse: this.golfcourse,
        shop: this.shop,
        haveBTS: this.haveBTS,
        haveMRT: this.haveMRT,
        haveBRT: this.haveBRT,
        maintananceCondition: this.mainCondition,
        fireInsurance: this.fireInsurance,
        materialDesign: this.materialD
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

    back () {
            this.$router.push('/Repositories')
        } 
  },
  mounted() {
    var url = "http://localhost:3000/information/getSomeData/'" +  this.$route.params.projectName + "'";
    console.log(this.$route.params.projectName)
    // console.log('2')
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
          this.subdistrict = response.data.rows[0].subdistrictName
          this.district = response.data.rows[0].districtName
          var p = response.data.rows[0].province
            if(p == 'กรุงเทพมหานคร'){this.province = 'กรุงเทพมหานคร'}
          this.sendDate = response.data.rows[0].inspectionDate
          this.BTS = response.data.rows[0].nearestBTS
          this.distanceBTS = response.data.rows[0].distanceFromBTS
          this.buildingFloors = response.data.rows[0].buildingFloor
          this.camFee = response.data.rows[0].camFee
          this.staff = response.data.rows[0].staffName
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
          })
        .catch(error => {
          console.log("NOOO");
        });
  }
};
/* eslint-enable */
</script>