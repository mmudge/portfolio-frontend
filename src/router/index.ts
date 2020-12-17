import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
