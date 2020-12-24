import axios from 'axios'
import store from '@/store'
import User from '@/models/User'
import { ProjectDetails } from '@/types/types'

let baseUrl = ''
console.log('Env: ', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  baseUrl = 'http://127.0.0.1:3000/'
} else {
  baseUrl = 'https://mmudge-portfolio-api.herokuapp.com/'
}

// const devBackendUrl = 'http://127.0.0.1:3000/'
// const prodBackendUrl = 'https://mmudge-portfolio-api.herokuapp.com/'

const activeUrl = baseUrl

export default class Api {
  static get authTokenString() {
    return `Bearer ${localStorage.getItem('token')}`
  }

  static getLoggedInUser() {
    const url = activeUrl + 'current_user'
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.authTokenString
        }
      })
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('Error: get logged in user failed!', error)
        localStorage.removeItem('token')
        store.commit('setLoggedInUser', null)
      })
  }

  static postSignInUser(userInfo: { email: string; password: string }) {
    const url = activeUrl + 'login'

    return axios
      .post(
        url,
        {
          user: userInfo
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        console.log('POST sign in response', response, response.data)
        return response.data
      })
      .catch(error => {
        console.log('error signing in user', error)
        localStorage.removeItem('token')
        store.commit('setLoggedInUser', null)
      })
  }

  static postSignUpUser(userInfo: {
    email: string
    password: string
    password_confirmation: string
    username: string
  }) {
    const url = activeUrl + 'signup'

    return axios
      .post(
        url,
        {
          user: userInfo
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        console.log('POST sign up response', response, response.data)
        return response.data
      })
      .catch(error => {
        console.log('error signing up user', error)
        localStorage.removeItem('token')
        store.commit('setLoggedInUser', null)
      })
  }

  static deleteSignOutUser(user: User) {
    const url = activeUrl + 'logout'

    return axios
      .delete(url, {
        headers: {
          Authorization: this.authTokenString
        },
        data: user
      })
      .then(response => {
        console.log('DELETE sign out response', response, response.data)
        return response.data
      })
      .catch(error => {
        console.log('error signing out user', error)
      })
  }

  static getAllProjects() {
    let url = activeUrl

    url += 'projects'
    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.authTokenString
        }
      })
      .then((response: any) => {
        return response.data
      })
      .catch(error => console.log('error fetching projects', error))
  }

  static createProject(projectDetails: ProjectDetails) {
    const url = activeUrl + 'projects'

    return axios
      .post(
        url,
        {
          project: projectDetails
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.authTokenString
          }
        }
      )
      .then(response => {
        console.log('POST create project response', response, response.data)
        return response.data
      })
      .catch(error => {
        console.log('Error creating project', error)
      })
  }
}
