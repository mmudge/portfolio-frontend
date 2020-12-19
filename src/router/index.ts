import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Api from '@/api'
import store from '@/store'
import LandingPage from '@/views/LandingPage.vue'
import Projects from '@/views/Projects.vue'
import Admin from '@/views/Admin.vue'
import ContentWrapper from '@/views/ContentWrapper.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/app',
    name: 'contentWrapper',
    component: ContentWrapper,
    children: [
      {
        path: '/projects',
        name: 'projects',
        component: Projects
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    Api.getLoggedInUser().then(() => {
      if (!store.state.loggedInUser) {
        console.log('no logged in user in router, going to login')
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
