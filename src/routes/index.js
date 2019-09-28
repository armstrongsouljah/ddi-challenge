import VueRouter from 'vue-router'
import Vue from 'vue';
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes: [
      {
          path: '/home',
          name: 'home',
          component: Dashboard,
          meta:{
              requireLogin : true
          },
      },
      {
        path:'/',
        name: 'landing',
        component: Login
    },
  ]
})


export default router;
