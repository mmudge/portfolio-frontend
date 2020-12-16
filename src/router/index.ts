import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'projects',
    component: Projects
  }
  // {
  //   path: '/',
  //   name: 'landingPage',
  //   component: LandingPage
  // },
  // {
  //   path: '/app',
  //   name: 'contentWrapper',
  //   component: ContentWrapper,
  //   children: [
  //     {
  //       path: '/projects',
  //       name: 'projects',
  //       component: Projects
  //     },
  //     {
  //       path: '/about',
  //       name: 'about',
  //       component: About
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
