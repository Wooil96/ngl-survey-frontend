import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';
import VueCookies from "vue-cookies"

// Use Cookies
Vue.use(VueCookies);
// Set expire day
Vue.$cookies.config("1d");

// Use Axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
