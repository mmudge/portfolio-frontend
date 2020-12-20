import Vue from 'vue'
import Vuex from 'vuex'
import Project from '@/models/Project'
import User from '@/models/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: "Mike's Portfolio",
    projects: [] as Project[],
    loggedInUser: (null as unknown) as User,
    navBarHeight: '126' as string,
    skillChipsState: {
      javascript: {
        text: 'JavaScript',
        color: 'amber darken-2',
        icon: 'fab fa-js-square'
      },
      typescript: {
        text: 'TypeScript',
        color: 'blue darken-3',
        icon: 'fas fa-code'
      },
      vue: { text: 'Vue.js', color: 'green darken-1', icon: 'fab fa-vuejs' },
      vuetify: {
        text: 'Vuetify',
        color: 'blue darken-1',
        icon: 'fab fa-vuejs'
      },
      rails: {
        text: 'Ruby on Rails',
        color: 'pink darken-1',
        icon: 'fas fa-code'
      },
      ruby: { text: 'Ruby', color: 'pink darken-2', icon: 'fas fa-code' },
      html: { text: 'HTML5', color: 'orange darken-4', icon: 'fab fa-html5' },
      css: { text: 'CSS3', color: 'blue darken-3', icon: 'fab fa-css3-alt' },
      rspec: { text: 'RSpec', color: 'pink darken-3', icon: 'fas fa-code' },
      cesium: {
        text: 'Cesium.js',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      bootstrap: {
        text: 'Bootstrap 4',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      mobile: {
        text: 'Mobile Responsive Design',

        color: 'deep-purple',
        icon: 'fas fa-code'
      },
      git: {
        text: 'git',
        color: 'deep-orange darken-4',
        icon: 'fab fa-git-square'
      },
      github: { text: 'GitHub', color: 'grey darken-3', icon: 'fab fa-github' },
      gitlab: {
        text: 'GitLab',
        color: 'deep-purple darken-4',
        icon: 'fab fa-gitlab'
      },
      sql: {
        text: 'SQL',
        color: 'blue darken-2',
        icon: 'fas fa-database'
      },
      postgres: {
        text: 'Postgresql',
        color: 'indigo darken-4',
        icon: 'fas fa-database'
      },
      heroku: {
        text: 'Heroku',
        color: 'deep-purple lighten-2',
        icon: 'fas fa-code'
      },
      figma: { text: 'Figma', color: 'yellow darken-3', icon: 'fab fa-figma' },
      sketch: {
        text: 'Sketch',
        color: 'orange darken-2',
        icon: 'fab fa-sketch'
      },
      // aws: { text: 'AWS S3', color: 'light-blue darken-1', icon: 'fab fa-aws' },
      googleCloud: {
        text: 'Google Cloud Services',
        color: 'light-blue darken-1',
        icon: 'fab fa-google'
      },
      mvc: {
        text: 'MVC Design Pattern',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      scrum: {
        text: 'Agile Work Flow',
        color: 'deep-orange accent-1',
        icon: 'fas fa-briefcase'
      },
      jira: {
        text: 'Jira',
        color: 'deep-orange accent-2',
        icon: 'fab fa-jira'
      },
      trello: {
        text: 'Trello',
        color: 'deep-purple accent-2',
        icon: 'fab fa-trello'
      }
    },
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
    setProjects(state, projects: Project[]) {
      state.projects = projects
    },
    setLoggedInUser(state, user: User) {
      state.loggedInUser = user
    },
    setNavBarHeight(state, height: string) {
      state.navBarHeight = height
    }
  },
  actions: {},
  modules: {},
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
    projects: state => {
      return state.projects
    },
    skillChips: state => {
      return state.skillChipsState
    },
    eduChips: state => {
      return state.eduChipsState
    }
  }
})
