import Vue from 'vue'
import VueRouter from 'vue-router'
import Survey from '../views/Survey.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserSurvey from '../views/SurveyList.vue'
import TestSurvey from '../views/TestSurvey.vue'
// import SurveyDetail from '../views/SurveyDetail.vue'
import AdminSurvey from '../views/AdminSurvey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  }, {
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/surveylist',
    name: 'usersurvey',
    component: UserSurvey
  }, {
    path: '/:user_email',
    name: 'adminsurvey',
    component: AdminSurvey

  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
