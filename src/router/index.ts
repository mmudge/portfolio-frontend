import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store'
import User from '@/models/User'
import LandingPage from '@/views/LandingPage.vue'
import Projects from '@/views/Projects.vue'
import Admin from '@/views/Admin.vue'
import ContentWrapper from '@/views/ContentWrapper.vue'
import Login from '@/views/Login.vue'
import Join from '@/views/Join.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'contentWrapper',
    component: ContentWrapper,
    children: [
      {
        path: '',
        name: 'landingPage',
        component: LandingPage
      },
      {
        path: '/projects',
        name: 'projects',
        component: Projects
      },
      {
        path: '/about',
        name: 'about',
        component: About
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
      },
      {
        path: '/sign_up',
        name: 'signUp',
        component: Join
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    User.loggedInUser().then(() => {
      if (!store.getters.loggedInUser) {
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
