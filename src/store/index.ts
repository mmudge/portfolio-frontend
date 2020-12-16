import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    }
  },
  actions: {},
  modules: {},
  getters: {
    projects: state => {
      return state.projects
    }
  }
})
