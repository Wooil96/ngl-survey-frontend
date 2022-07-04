<!-- This interface is for the Admin to see about submitted survey form. -->
<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4" style="padding: 0px">
      <!-- Login Component -->
      <v-container style="max-width: 100%" fill-height>
        <v-layout align-center row wrap>
          <v-flex>
            <v-card>
              <v-data-table
                :headers="headers"
                :items="survey_list"
                :items-per-page="5"
                @click:row="rowClick"
              >
                <template v-slot:item.path="{ item }">
                  <v-select v-model="cSel" :items="item.path"></v-select>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      cSel: 'Select',
      
      headers: [
        {
          text: "User",
          align: "start",
          value: "usr_email",
        },
        { text: "Division", value: "usr_division" },
        { text: "Dept.", value: "usr_dept" },
        { text: "TMS Name", value: "tms_name" },
        { text: "App Name", value: "app_name" },
        { text: "Button Name", value: "btn_name" },
        { text: 'Create  ', value: 'path', width: '200' },
      ],

      survey_list: [{}],
    };
  },
  created() {
    this.$http
      .get("/api/survey/surveylist")
      .then((res) => {
        const row = res.data.list;
        this.survey_list.splice(0, 0);

        if (row) {
          for (var i = 0; i < row.length; i++) {
            var survey_array = new Array();

            survey_array.usr_email = row[i].user_email;
            survey_array.usr_division = row[i].user_div;
            survey_array.usr_dept = row[i].user_dept;
            survey_array.tms_name = row[i].tms_name_opt1;
            survey_array.app_name = row[i].app_name_opt1;
            survey_array.btn_name = row[i].btn01_opt1;
            survey_array.path = [1,2,3];
            this.survey_list[i] = survey_array;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    rowClick(item, row) {
      var user_email = item.usr_email;
      console.log(this.$cookies);
      this.$router.push(`/${user_email}`);
      // this.$http.get(`api/survey/${user_email}`, {
      //   user: user_email,
      // })
    },
  },
};
</script>

<style></style>
