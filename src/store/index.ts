import Vue from 'vue'
import Vuex from 'vuex'
import Project from '@/models/Project'
import User from '@/models/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: "Mike's Portfolio",
    projects: [] as Project[],
    loggedInUser: (null as unknown) as User
  },
  mutations: {
    setProjects(state, projects: Project[]) {
      state.projects = projects
    },
    setLoggedInUser(state, user: User) {
      state.loggedInUser = user
    }
  },
  actions: {},
  modules: {},
  getters: {
    appName: state => {
      return state.appName
    },
    projects: state => {
      return state.projects
    },
    loggedInUser: state => {
      return state.loggedInUser
    }
  }
})
