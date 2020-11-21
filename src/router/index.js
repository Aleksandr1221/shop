import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/vHome.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/vCart.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/vSign.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/vProfile.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/vRegister.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/vAdmin.vue')
  },
  {
    path: '/adminform',
    name: 'Admin Form',
    component: () => import('../views/vAdminForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
