<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <!-- Login Component -->
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Sign Up</h1>
                <!-- Email -->
                <v-text-field
                  id="email"
                  v-model="regi.email"
                  label="Email"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
                <!-- Password -->
                <v-text-field
                  id="pwd"
                  v-model="regi.pwd"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  label="Password"
                >
                </v-text-field>
                <!-- Confirm Password -->
                <v-text-field
                  id="cfm_pwd"
                  v-model="regi.cfm_pwd"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  label="Re-enter password"
                >
                </v-text-field>
                <v-select
                  :items="regi.ngl_div"
                  id="ngl_div"
                  v-model="regi.division"
                  label="DIV"
                  return-object
                ></v-select>
                <v-select
                  :items="regi.ngl_dept"
                  id="ngl_dept"
                  v-model="regi.dept"
                  label="Dept."
                  return-object
                ></v-select>
                <v-btn
                  @click="UserRegister"
                  color="purple lighten-4 text-capitalize"
                  depressed
                  large
                  block
                  dark
                  class="mb-3"
                >
                  Sign Up
                </v-btn>
                <v-btn
                  @click="GoBack"
                  color="red lighten-1 text-capitalize"
                  depressed
                  large
                  block
                  dark
                >
                  Cancel
                </v-btn>
              </div>
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
      regi: {
        email: "",
        pwd: "",
        cfm_pwd: "",
        division: "",
        dept: "",
        ngl_div: ["HOU", "LA", "PHX", "SAV", "KOR"],
        ngl_dept: ["IT", "DSP", "CS", "ACCT", "MNG"],
      },
    };
  },
  methods: {
    // Check Email rather it ends with @ngltrans.net
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(ngltrans.net)/;
      return re.test(email);
    },
    GoBack: function () {
      this.$router.push("/");
    },
    UserRegister: function () {
      if(this.regi.email == "" || this.regi.pwd == "" || this.regi.cfm_pwd == "" || this.regi.division == "" || this.regi.dept == "" ) {
        alert("Please input all the information.")
      } else if(!this.validEmail(this.regi.email)) {
        alert("Please input company Email.")
      } else if(this.regi.pwd != this.regi.cfm_pwd) {
        alert("Password must match.")
      } else {
        console.log("success")
        console.log(this.regi)
        this.$http.post("/api/users/register", {
          regi: this.regi,
        })
        .then((res) => {
          if(res.data.success == true) {
            alert(res.data.message);
            this.$router.push("/");
          }
          if(res.data.success == false) {
            alert(res.data.message);
          }
        })
        .catch(function(error) {
          alert("error")
        })
      }
    },
  },
};
</script>

<style></style>
