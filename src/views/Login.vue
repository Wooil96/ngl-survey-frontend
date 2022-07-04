<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <!-- Login Component -->
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Login</h1>

                <v-text-field
                  id="user_email"
                  v-model="user.email"
                  label="Email"
                  prepend-inner-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                  id="user_pwd"
                  v-model="user.pwd"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  label="Password"
                >
                </v-text-field>
                <v-btn
                  @click="UserLogin"
                  color="blue lighten-1 text-capitalize"
                  depressed
                  large
                  block
                  dark
                  class="mb-3"
                >
                  Login
                </v-btn>
                <v-btn
                  @click="addUserShow"
                  color="purple lighten-4 text-capitalize"
                  depressed
                  large
                  block
                  dark
                >
                  Sign Up
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
      user: {
        email: "",
        pwd: "",
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
    isEmailValid: function () {
      return this.user.email == ""
        ? ""
        : this.validEmail(this.user.email)
        ? "has-success"
        : "has-error";
    },
    addUserShow: function () {
      this.$router.push("/register");
    },
    UserLogin: function () {
      var userid = "";
      var userpwd = "";
      if (this.user.email == "") {
        alert("Please input your email address.");
        return;
      } else if (this.user.pwd == "") {
        alert("Please input your password.");
        return;
      } else if (!this.validEmail(this.user.email)) {
        alert("Please input your company email.");
      } else if (this.validEmail(this.user.email)) {
        // Email and Password Check
        this.$http
          .post("/api/users/usercheck", {
            user_email: this.user.email,
          })
          .then((res) => {
            if (res.data.isRegistered) {
              userid = res.data.userid;
              userpwd = res.data.userpwd;
              if (this.user.pwd != userpwd) {
                alert("Please check your password.");
              } else {
                this.$http
                  .post("/api/users/login", {
                    login: this.user,
                  })
                  .then((res) => {
                    if (res.data.auth == "admin" && res.data.islogin == true) {
                      this.$cookies.set("admin", this.user.email, "10000");
                      this.$router.push("/surveylist");
                    }
                    if (res.data.islogin == true && res.data.auth != "admin") {
                      alert(res.data.message);
                      this.$cookies.set("user", this.user.email, "10000");
                      this.$router.push("/survey");
                    }
                    if (res.data.islogin == false) {
                      alert(res.data.message);
                    }
                  })
                  .catch(function (error) {
                    alert("error");
                    console.log(error);
                  });
              }
            } else {
              alert("Invalid Email");
            }
          })
          .catch(function (err) {
            alert("error");
            console.log(err);
          });
      }
    }, 
  },
};
</script>

<style></style>
