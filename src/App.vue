<template>
  <v-app>
    <v-app-bar app>
      <h1>NGL Survey</h1>
      <!-- <v-btn color="primary" elevation="5" large>Sign In</v-btn> -->
    </v-app-bar>

    
      <router-view></router-view>
    
  </v-app>
</template>



<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
