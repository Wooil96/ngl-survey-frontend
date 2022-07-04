<template>
  <v-container style="width: 50%; padding-top: 5%">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          id="u_email"
          v-model="user.user_email"
          label="Email"
          readonly
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          id="u_div"
          v-model="user.user_div"
          label="DIV"
          readonly
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          id="u_dept"
          v-model="user.user_dept"
          label="Dept"
          readonly
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- App Name Field -->
    <v-row style="margin-top: 1vw">
      <v-col cols="12" sm="12">
        <h2>1. App Name</h2>
      </v-col>
    </v-row>

    <div>
      <v-col cols="12" sm="12">
        <v-text-field
          v-model="survey.name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
    </div>
    <div>
      <v-col cols="12" sm="12">
        <v-text-field
          v-model="survey.name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
    </div>
    <div>
      <v-col cols="12" sm="12">
        <v-text-field
          v-model="survey.name_opt03"
          label="Option 03"
          placeholder="Option 03"
        ></v-text-field>
      </v-col>
    </div>

    <!-- App Logo Field -->
    <!-- <v-row style="margin-top: 1vw">
      <v-col cols="12" sm="12">
        <h2>2. App Logo</h2>
      </v-col>
    </v-row>
    <div>
      <v-file-input
        v-model="survey.logo_opt01"
        accept="image/*"
        label="File input (Option 01)"
        type="file"
        ref="file"
        @change="onFileSelected1"
      >
      </v-file-input>
    </div>
    <div>
      <v-file-input
        v-model="survey.logo_opt02"
        accept="image/*"
        label="File input (Option 02)"
        @change="onFileSelected2"
      >
      </v-file-input>
    </div> -->

    <!-- Button Name Fields -->
    <v-row style="margin-top: 1vw">
      <v-col cols="12" sm="12">
        <h2>3. Button Name</h2>
      </v-col>
    </v-row>

    <!-- Button 01 ~ 02 -->
    <v-row style="margin-top: 1vw">
      <!-- Button 01's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 01.</h4>
      </v-col>

      <!-- Button 02's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 02.</h4>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button01 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn01_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
      <!-- Button02 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn02_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button01 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn01_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
      <!-- Button02 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn02_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Button 03 ~ 04 -->
    <v-row style="margin-top: 1vw">
      <!-- Button 03's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 03.</h4>
      </v-col>

      <!-- Button 04's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 04.</h4>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button03 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn03_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
      <!-- Button04 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn04_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button03 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn03_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
      <!-- Button04 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn04_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Button 05 ~ 06 -->
    <v-row style="margin-top: 1vw">
      <!-- Button 05's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 05.</h4>
      </v-col>

      <!-- Button 06's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 06.</h4>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button05 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn05_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
      <!-- Button06 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn06_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button05 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn05_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
      <!-- Button06 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn06_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Button 07 ~ 08 -->
    <v-row style="margin-top: 1vw">
      <!-- Button 07's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 07.</h4>
      </v-col>

      <!-- Button 08's Name -->
      <v-col cols="6" sm="6" align-self="center">
        <h4>Button 08.</h4>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button07 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn07_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
      <!-- Button08 Name's option 01 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn08_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <!-- Button07 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn07_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
      <!-- Button08 Name's option 02 -->
      <v-col cols="6" sm="6">
        <v-text-field
          v-model="survey.btn08_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn
      @click="GoBack"
      color="blue lighten-1 text-capitalize"
      depressed
      large
      block
      dark
      class="mb-3"
    >
      Back
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      survey: {
        tms_name_opt01: "",
        tms_name_opt01_desc: "",
        tms_name_opt02: "",
        tms_name_opt02_desc: "",
        app_name_opt01: "",
        app_name_opt01_desc: "",
        app_name_opt02: "",
        app_name_opt02_desc: "",
        // name_opt03: "",
        // logo_opt01: "",
        // logo_opt02: "",
        btn01_name_opt01: "",
        btn01_name_opt02: "",
        btn02_name_opt01: "",
        btn02_name_opt02: "",
        btn03_name_opt01: "",
        btn03_name_opt02: "",
        btn04_name_opt01: "",
        btn04_name_opt02: "",
        btn05_name_opt01: "",
        btn05_name_opt02: "",
        btn06_name_opt01: "",
        btn06_name_opt02: "",
        btn07_name_opt01: "",
        btn07_name_opt02: "",
        btn08_name_opt01: "",
        btn08_name_opt02: "",
      },
      user: {
        user_email: "",
        user_dept: "",
        user_div: "",
      },
    };
  },
  created() {
 
    // Check if survey already has been taken.
    this.$http
      .get("/api/survey/:"+`${user_email}`)
      .then((res) => {
        // const isSurveyed = res.data.isSurveyed;
        // const survey_data = res.data.survey_data;

        // if (isSurveyed) {
        //   this.survey.name_opt01 = survey_data.name_opt1;
        //   this.survey.name_opt02 = survey_data.name_opt2;
        //   this.survey.name_opt03 = survey_data.name_opt3;
        //   this.survey.logo_opt01 = survey_data.logo_opt1;
        //   this.survey.logo_opt02 = survey_data.logo_opt2;
        //   this.survey.btn01_name_opt01 = survey_data.btn01_opt1;
        //   this.survey.btn01_name_opt02 = survey_data.btn01_opt2;
        //   this.survey.btn02_name_opt01 = survey_data.btn02_opt1;
        //   this.survey.btn02_name_opt02 = survey_data.btn02_opt2;
        //   this.survey.btn03_name_opt01 = survey_data.btn03_opt1;
        //   this.survey.btn03_name_opt02 = survey_data.btn03_opt2;
        //   this.survey.btn04_name_opt01 = survey_data.btn04_opt1;
        //   this.survey.btn04_name_opt02 = survey_data.btn04_opt2;
        //   this.survey.btn05_name_opt01 = survey_data.btn05_opt1;
        //   this.survey.btn05_name_opt02 = survey_data.btn05_opt2;
        //   this.survey.btn06_name_opt01 = survey_data.btn06_opt1;
        //   this.survey.btn06_name_opt02 = survey_data.btn06_opt2;
        //   this.survey.btn07_name_opt01 = survey_data.btn07_opt1;
        //   this.survey.btn07_name_opt02 = survey_data.btn07_opt2;
        //   this.survey.btn08_name_opt01 = survey_data.btn08_opt1;
        //   this.survey.btn08_name_opt02 = survey_data.btn08_opt2;
        //   console.log(this.survey.logo_opt01)
        // }
      })
      .catch((err) => {
        console.log(err);
      });

      //Check if the Login user is an admin
      
  },
  // Methods
  methods: {

  },
};
</script>
