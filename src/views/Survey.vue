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

    <v-card
      class="pa-5"
      outlined
      tile
      style="
        text-align: center;
        font-size: 4vm;
        font-family: 'Times New Roman', Times, serif;
      "
    >
      We are developing our own Mobile App and Web TMS.<br />
      Please share your ideas for following categories.
    </v-card>

    <!-- Web TMS Name Field -->
    <v-row style="margin-top: 1vw">
      <v-col cols="12" sm="12">
        <h2>1. Web TMS Name</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" sm="6">
        <v-text-field
          v-model="survey.tms_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>

      <v-col cols="8" sm="6">
        <v-text-field
          v-model="survey.tms_name_opt01_desc"
          label="Desc."
          placeholder="Description"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" sm="6">
        <v-text-field
          v-model="survey.tms_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>

      <v-col cols="8" sm="6">
        <v-text-field
          v-model="survey.tms_name_opt02_desc"
          label="Desc."
          placeholder="Description"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- App Name Field -->
    <v-row style="margin-top: 1vw">
      <v-col cols="12" sm="12">
        <h2>2. App Name</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" sm="6">
        <v-text-field
          v-model="survey.app_name_opt01"
          label="Option 01"
          placeholder="Option 01"
        ></v-text-field>
      </v-col>

      <v-col cols="8" sm="6">
        <v-text-field
          v-model="survey.app_name_opt01_desc"
          label="Desc."
          placeholder="Description"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" sm="6">
        <v-text-field
          v-model="survey.app_name_opt02"
          label="Option 02"
          placeholder="Option 02"
        ></v-text-field>
      </v-col>

      <v-col cols="8" sm="6">
        <v-text-field
          v-model="survey.app_name_opt02_desc"
          label="Desc."
          placeholder="Description"
        ></v-text-field>
      </v-col>
    </v-row>

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
          class="thumbnail"
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

    <!-- <v-btn v-on:mouseover="mouseover">sdf</v-btn> -->

    <v-btn
      @click="SaveSurvey"
      color="blue lighten-1 text-capitalize"
      depressed
      large
      block
      dark
      class="mb-3"
    >
      Submit
    </v-btn>
    <!-- <img src="url(${survey.logo_opt01})" /> -->
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
    // Get User Info
    this.$http
      .get("/api/users/")
      .then((res) => {
        const user = res.data.user;
        if (user) {
          this.user.user_email = user.user_email;
          this.user.user_dept = user.user_dept;
          this.user.user_div = user.user_div;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Check if survey already has been taken.
    this.$http
      .get("/api/survey/")
      .then((res) => {
        const isSurveyed = res.data.isSurveyed;
        const survey_data = res.data.survey_data;

        if (isSurveyed) {
          this.survey.tms_name_opt01 = survey_data.tms_name_opt1;
          this.survey.tms_name_opt01_desc = survey_data.tms_name_opt1_desc;
          this.survey.tms_name_opt02 = survey_data.tms_name_opt2;
          this.survey.tms_name_opt02_desc = survey_data.tms_name_opt2_desc;
          this.survey.app_name_opt01 = survey_data.app_name_opt1;
          this.survey.app_name_opt01_desc = survey_data.app_name_opt1_desc;
          this.survey.app_name_opt02 = survey_data.app_name_opt2;
          this.survey.app_name_opt02_desc = survey_data.app_name_opt2_desc;
          // this.survey.name_opt02 = survey_data.name_opt2;
          // this.survey.name_opt03 = survey_data.name_opt3;
          // this.survey.logo_opt01 = survey_data.logo_opt1_name;
          // this.survey.logo_opt02 = survey_data.logo_opt2_name;
          this.survey.btn01_name_opt01 = survey_data.btn01_opt1;
          this.survey.btn01_name_opt02 = survey_data.btn01_opt2;
          this.survey.btn02_name_opt01 = survey_data.btn02_opt1;
          this.survey.btn02_name_opt02 = survey_data.btn02_opt2;
          this.survey.btn03_name_opt01 = survey_data.btn03_opt1;
          this.survey.btn03_name_opt02 = survey_data.btn03_opt2;
          this.survey.btn04_name_opt01 = survey_data.btn04_opt1;
          this.survey.btn04_name_opt02 = survey_data.btn04_opt2;
          this.survey.btn05_name_opt01 = survey_data.btn05_opt1;
          this.survey.btn05_name_opt02 = survey_data.btn05_opt2;
          this.survey.btn06_name_opt01 = survey_data.btn06_opt1;
          this.survey.btn06_name_opt02 = survey_data.btn06_opt2;
          this.survey.btn07_name_opt01 = survey_data.btn07_opt1;
          this.survey.btn07_name_opt02 = survey_data.btn07_opt2;
          this.survey.btn08_name_opt01 = survey_data.btn08_opt1;
          this.survey.btn08_name_opt02 = survey_data.btn08_opt2;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //Check if the Login user is an admin
  },
  // Methods
  methods: {
    // // Save data of logo01
    // onFileSelected1(event) {
    //   const imageFile = event;
    //   this.survey.logo_opt01 = imageFile;
    //   // console.log(this.survey.logo_opt01);
    // },
    // // Save data of logo02
    // onFileSelected2(event) {
    //   const imageFile = event;
    //   this.survey.logo_opt02 = imageFile;
    //   // console.log(this.survey.logo_opt02);
    // },

    // Save Survey
    SaveSurvey: function () {
      if (
        this.survey.tms_name_opt01 == "" ||
        this.survey.tms_name_opt01_desc == "" ||
        this.survey.app_name_opt01 == "" ||
        this.survey.app_name_opt01_desc == ""
      ) {
        alert("You must input Option1 and Desciption for TMS and App");
      } else {
        // var formData = new FormData();
        // console.log("name" + this.survey.logo_opt01.name);
        // formData.append("img01", this.survey.logo_opt01);
        // formData.append("img02", this.survey.logo_opt02);
        // console.log(this.survey.logo_opt01);
        // console.log(this.survey.logo_opt02);

        // this.$http
        //   .post("/api/survey/savesurvey", {
        //     survey: this.survey,
        //     user: this.user,
        //   })
        //   .then((res) => {
        //     if (res.data.isSaved) {
        //       this.$http
        //         .post("/api/survey/uploadimage", formData)
        //         .then((res) => {
        //           console.log(res.data.message);
        //           if (res.data.message) {
        //             alert("Thank you for sharing your thougts!");
        //             this.$router.push("/");
        //             this.$cookies.remove("user");
        //           } else {
        //             alert("Please try again");
        //             this.$router.push("/survey");
        //           }
        //         });
        //     }
        //   });

        this.$http
          .post("/api/survey/savesurvey", {
            survey: this.survey,
            user: this.user,
          })
          .then((res) => {
            console.log(res.data.isSaved);
            if (res.data.isSaved) {
              alert("Thank you for sharing your thougts!");
              this.$router.push("/");
              this.$cookies.remove("user");
            } else {
              alert("Please try again");
              this.$router.push("/survey");
              // location.reload();
            }
          });
      }
    },

    mouseover: function () {
      <img
          src="https://www.gstatic.com/webp/gallery/1.sm.jpg"
          class="thumbnail"
          height="50px"
        />
    },
  },
};
</script>
<style></style>
