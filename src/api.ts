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

export default class Api {
  static get authTokenString() {
    return `Bearer ${localStorage.getItem('token')}`
  }

  static getLoggedInUser() {
    const url = baseUrl + 'current_user'
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
    const url = baseUrl + 'login'

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
    const url = baseUrl + 'signup'

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
        return response.data
      })
      .catch(error => {
        console.log('error signing up user', error)
        localStorage.removeItem('token')
        store.commit('setLoggedInUser', null)
      })
  }

  static deleteSignOutUser(user: User) {
    const url = baseUrl + 'logout'

    return axios
      .delete(url, {
        headers: {
          Authorization: this.authTokenString
        },
        data: user
      })
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('error signing out user', error)
      })
  }

  static getAllProjects() {
    let url = baseUrl

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
    const url = baseUrl + 'projects'

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
        return response.data
      })
      .catch(error => {
        console.log('Error creating project', error)
      })
  }

  static updateProject(projectId: number, projectDetails: ProjectDetails) {
    const url = baseUrl + `projects/${projectId}`

    return axios
      .put(
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
        return response.data
      })
      .catch(error => {
        console.log('Error updating project', error)
      })
  }
}
