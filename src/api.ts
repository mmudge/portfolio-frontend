import axios from 'axios'
import store from '@/store'
import User from '@/models/User'
import {
  ProjectDetails,
  MessageDetails,
  TechnologyDetails
} from '@/types/types'

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

  static deleteProject(projectId: number) {
    const url = baseUrl + `projects/${projectId}`

    return axios
      .delete(url, {
        headers: {
          Authorization: this.authTokenString
        }
      })
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('error deleting project', error)
      })
  }

  static createMessage(messageDetails: MessageDetails) {
    const url = baseUrl + 'messages'

    return axios
      .post(
        url,
        {
          message: messageDetails
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
        console.log('Error creating message', error)
      })
  }

  static getAllTechnologies() {
    let url = baseUrl

    url += 'technologies'
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
      .catch(error => console.log('error fetching technologies', error))
  }

  static createTechnology(technologyDetails: TechnologyDetails) {
    const url = baseUrl + 'technologies'

    return axios
      .post(
        url,
        {
          technology: technologyDetails
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
        console.log('Error creating technology', error)
      })
  }

  static updateTechnology(
    technologyId: number,
    technologyDetails: TechnologyDetails
  ) {
    const url = baseUrl + `technologies/${technologyId}`

    return axios
      .put(
        url,
        {
          technology: technologyDetails
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
        console.log('Error updating technology', error)
      })
  }

  static deleteTechnology(technologyId: number) {
    const url = baseUrl + `technologies/${technologyId}`

    return axios
      .delete(url, {
        headers: {
          Authorization: this.authTokenString
        }
      })
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('error deleting technology', error)
      })
  }

  // static getProjectPhotos(amount: number) {
  //   const url = `https://api.pexels.com/v1/search?query=code&per_page=${amount}`
  //   return axios
  //     .get(url, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization:
  //           '563492ad6f917000010000013b80bf8234b4451aba29349e5ccbaa0e'
  //       }
  //     })
  //     .then((response: any) => {
  //       return response.data
  //     })
  //     .catch(error => console.log('error photos from pexels', error))
  // }

  static getProjectPhotos(amount?: number) {
    let url = baseUrl

    if (amount) {
      url += `project_photos?amount=${amount}`
    } else {
      url += 'project_photos'
    }

    return axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response: any) => {
        return response.data
      })
      .catch(error => console.log('error fetching photos', error))
  }
}
