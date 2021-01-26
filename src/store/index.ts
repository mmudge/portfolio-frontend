import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/models/User'
import ProjectsModule from './ProjectsModule'
import { Skill } from '@/types/types.ts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: "Mike's Portfolio",
    loggedInUser: (null as unknown) as User,
    navBarHeight: '126' as string,
    snackbar: {} as { text: string; color: string },
    skillsState: [
      {
        text: 'JavaScript',
        color: 'amber darken-2',
        icon: 'fab fa-js-square'
      },
      {
        text: 'TypeScript',
        color: 'blue darken-3',
        icon: 'fas fa-code'
      },
      { text: 'Vue.js', color: 'green darken-1', icon: 'fab fa-vuejs' },
      {
        text: 'Ruby on Rails',
        color: 'pink darken-1',
        icon: 'fas fa-code'
      },
      { text: 'Ruby', color: 'pink darken-2', icon: 'fas fa-code' },
      { text: 'RSpec', color: 'pink darken-3', icon: 'fas fa-code' },
      { text: 'HTML5', color: 'orange darken-4', icon: 'fab fa-html5' },
      { text: 'CSS3', color: 'blue darken-3', icon: 'fab fa-css3-alt' },
      {
        text: 'Web Components',
        color: 'green darken-4',
        icon: 'fas fa-code'
      },
      {
        text: 'Mobile Responsive Design',
        color: 'deep-purple',
        icon: 'fas fa-code'
      },
      {
        text: 'Bootstrap 4+',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        text: 'Vuetify',
        color: 'blue darken-1',
        icon: 'fab fa-vuejs'
      },
      {
        text: 'RESTful APIs',
        color: 'orange darken-1',
        icon: 'fas fa-code'
      },
      {
        text: 'TDD',
        color: 'deep-purple darken-2',
        icon: 'fas fa-code'
      },
      {
        text: 'SQL',
        color: 'blue darken-2',
        icon: 'fas fa-database'
      },
      {
        text: 'Cesium.js',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        text: 'git',
        color: 'deep-orange darken-4',
        icon: 'fab fa-git-square'
      },
      { text: 'GitHub', color: 'mediumGray', icon: 'fab fa-github' },
      {
        text: 'GitLab',
        color: 'deep-purple lighten-1',
        icon: 'fab fa-gitlab'
      },

      {
        text: 'PostgreSQL',
        color: 'indigo lighten-2',
        icon: 'fas fa-database'
      },
      {
        text: 'Heroku',
        color: 'deep-purple lighten-2',
        icon: 'fas fa-code'
      },
      { text: 'Figma', color: 'yellow darken-3', icon: 'fab fa-figma' },
      {
        text: 'Sketch',
        color: 'orange darken-2',
        icon: 'fab fa-sketch'
      },
      {
        text: 'GCS',
        color: 'light-blue darken-1',
        icon: 'fab fa-google'
      },
      {
        text: 'MVC Design Pattern',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        text: 'Agile Work Flow',
        color: 'deep-orange accent-1',
        icon: 'fas fa-briefcase'
      },
      {
        text: 'Jira',
        color: 'deep-orange accent-2',
        icon: 'fab fa-jira'
      },
      {
        text: 'Trello',
        color: 'deep-purple accent-2',
        icon: 'fab fa-trello'
      }
    ] as Skill[],
    eduChipsState: [
      {
        text: 'University of Arizona',
        color: 'red darken-2',
        icon: 'fas fa-graduation-cap'
      },
      {
        text: 'Le Wagon Coding Bootcamp',
        color: 'red darken-1',
        icon: 'fas fa-code'
      }
    ]
  },

  mutations: {
    setLoggedInUser(state, user: User) {
      state.loggedInUser = user
    },
    setNavBarHeight(state, height: string) {
      state.navBarHeight = height
    },
    setSnackbar(state, payload: { text: string; color: string }) {
      state.snackbar = payload
    }
  },
  actions: {},
  modules: {
    projects: ProjectsModule
  },
  getters: {
    appName: state => {
      return state.appName
    },
    loggedInUser: state => {
      return state.loggedInUser
    },
    navBarHeight: state => {
      return state.navBarHeight
    },
    skills: state => {
      return state.skillsState as Skill[]
    },
    eduChips: state => {
      return state.eduChipsState
    },
    snackbar: state => {
      return state.snackbar
    }
  }
})
