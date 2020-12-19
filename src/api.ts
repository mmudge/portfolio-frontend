import axios from 'axios'
import store from '@/store'
import User from '@/models/User'

const devBackendUrl = 'http://127.0.0.1:3000/'
const prodBackendUrl = 'https://mmudge-portfolio-api.herokuapp.com/'

const activeUrl = prodBackendUrl

export default class Api {
  id!: number
  title!: string

  static get authTokenString() {
    return `Bearer ${localStorage.getItem('token')}`
  }

  static getAllProjects() {
    let url = activeUrl

    url += 'projects'
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.authTokenString
        }
      })
      .then((response: any) => {
        console.log('GET projects response', response.data)
        store.commit('setProjects', response.data)
      })
      .catch(error => console.log('error fetching projects', error))
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
}
