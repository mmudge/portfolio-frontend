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
        title: 'JavaScript',
        text:
          'Brings data to life and can run both on the client and server sides.',
        color: 'amber darken-2',
        icon: 'fab fa-js-square'
      },
      {
        title: 'TypeScript',
        text: 'Reduces developer errors and makes JavaScript more reliable.',
        color: 'blue darken-3',
        icon: 'fas fa-code'
      },
      {
        title: 'Vue JS',
        text:
          'Easy and fun to learn, has great documentation, and single file components make seperation of concerns easy.',
        color: 'green darken-1',
        icon: 'fab fa-vuejs'
      },

      {
        title: 'Ruby on Rails',
        text:
          'Great framework that makes it easy to turn an idea into a business, fast!',
        color: 'pink darken-1',
        icon: 'fas fa-code'
      },
      {
        title: 'Ruby',
        text:
          'Developer frienldy language that favors convention over configuration.',
        color: 'pink darken-2',
        icon: 'fas fa-code'
      },
      {
        title: 'RSpec',
        text:
          'Easy to use test framework for Rails, gives developers confidence in their code.',
        color: 'pink darken-3',
        icon: 'fas fa-code'
      },
      {
        title: 'HTML5',
        text: 'Semantic tags make for better accessibility and cleaner code.',
        color: 'orange darken-4',
        icon: 'fab fa-html5'
      },
      {
        title: 'CSS3',
        text:
          'Allows developers show their artistic side, making web pages beautiful.',
        color: 'blue darken-3',
        icon: 'fab fa-css3-alt'
      },
      {
        title: 'Web Components',
        text:
          'Easily manage different parts of codes by seperating it into components and injecting them in and out of the DOM.',
        color: 'green darken-4',
        icon: 'fas fa-code'
      },
      {
        title: 'Mobile Responsive',
        text:
          'Mobile web browsing is just as popular as on a desktop so apps must function just as well with a smaller viewport.',
        color: 'deep-purple',
        icon: 'fas fa-code'
      },
      {
        title: 'Bootstrap 4+',
        text: 'Quick and uniform design styles for an app.',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        title: 'Vuetify',
        text:
          'Great component library to use along side Vue JS apps which makes styling and building out apps easy.',
        color: 'blue darken-1',
        icon: 'fab fa-vuejs'
      },
      {
        title: 'git',
        text:
          'Makes it possible for many developers to work on the same code base at the same time.',
        color: 'deep-orange darken-4',
        icon: 'fab fa-git-square'
      },
      {
        title: 'GitHub',
        text: 'Industry leader in managing code bases.',
        color: 'mediumGray',
        icon: 'fab fa-github'
      },
      {
        title: 'GitLab',
        text: 'Open source project management.',
        color: 'deep-purple lighten-1',
        icon: 'fab fa-gitlab'
      },
      {
        title: 'RESTful APIs',
        text:
          'Following best practices for end point naming, returning JSON, and proper response codes give uniformity to APIs making them easy to use.',
        color: 'orange darken-1',
        icon: 'fas fa-code'
      },
      {
        title: 'TDD',
        text:
          'Gives developers confidence in the code they write, and also makes changing or refactoring code easy.',
        color: 'deep-purple darken-2',
        icon: 'fas fa-code'
      },
      {
        title: 'MVC Design',
        text: 'Easy way to seperate code into logical pieces',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        title: 'SQL',
        text: 'Get data efficiently from the database.',
        color: 'blue darken-2',
        icon: 'fas fa-database'
      },
      {
        title: 'PostgreSQL',
        text: 'Easy to use database.',
        color: 'indigo lighten-2',
        icon: 'fas fa-database'
      },
      {
        title: 'Cesium JS',
        text:
          'Fun easy to use library making it possible to run 3D engines in the browser.',
        color: 'blue darken-1',
        icon: 'fas fa-code'
      },
      {
        title: 'Agile Work Flow',
        text:
          'Keeps teams motivated by constatly setting and achieving small goals.',
        color: 'deep-orange accent-1',
        icon: 'fas fa-briefcase'
      },
      {
        title: 'Jira',
        text:
          'Great way to manage a projects, work towards goals, and keep teams productive.',
        color: 'deep-orange accent-2',
        icon: 'fab fa-jira'
      },
      {
        title: 'Trello',
        text: 'Easy way to track project progress and manage team goals.',
        color: 'deep-purple accent-2',
        icon: 'fab fa-trello'
      },
      {
        title: 'Heroku',
        text: 'Automates DevOp processes which makes it easy to deploy an app.',
        color: 'deep-purple lighten-2',
        icon: 'fas fa-code'
      },
      {
        title: 'GCS',
        text: 'Powerful toolkit for almost everything web related.',
        color: 'light-blue darken-1',
        icon: 'fab fa-google'
      },
      {
        title: 'AWS',
        text: 'Powerful toolkit for almost everything web related.',
        color: 'orange darken-1',
        icon: 'fab fa-aws'
      },
      {
        title: 'Figma',
        text: 'Collaborate with your team to build designs together.',
        color: 'yellow darken-3',
        icon: 'fab fa-figma'
      },
      {
        title: 'Sketch',
        text: 'Create amazing designs to make products look beautiful.',
        color: 'orange darken-2',
        icon: 'fab fa-sketch'
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
