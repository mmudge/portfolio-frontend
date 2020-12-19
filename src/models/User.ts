import Api from '@/api'
import store from '@/store'

export default class User {
  id!: number
  email!: string
  token!: string

  static async signIn(email: string, password: string) {
    const userInfo = { email, password }
    const result: User = await Api.postSignInUser(userInfo)

    if (result) {
      localStorage.setItem('token', result.token)
      store.commit('setLoggedInUser', result)
      console.log('User signed in: ', result.email)
    } else {
      localStorage.removeItem('token')
      store.commit('setLoggedInUser', null)
    }
    return result
  }

  static async signUp(
    email: string,
    password: string,
    password_confirmation: string,
    username: string
  ) {
    const userInfo = { email, password, password_confirmation, username }
    const result: User = await Api.postSignUpUser(userInfo)
    if (!result) {
      localStorage.removeItem('token')
      store.commit('setLoggedInUser', null)
    }

    return result
  }

  static async loggedInUser() {
    const result: User = await Api.getLoggedInUser()
    if (result) {
      console.log('Current logged in user: ', result.email)
      store.commit('setLoggedInUser', result)
    }
  }
}
