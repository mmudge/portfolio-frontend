import Api from '@/api'
import store from '@/store'

export default class User {
  id!: number
  email!: string
  token!: string

  static async loggedInUser() {
    const result: User = await Api.getLoggedInUser()
    if (result) {
      console.log('Current logged in user: ', result.email)
      store.commit('setLoggedInUser', result)
    }
  }

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
    username: string,
    password: string,
    password_confirmation: string
  ) {
    const userInfo = {
      email,
      username,
      password,
      password_confirmation
    }
    const result: User = await Api.postSignUpUser(userInfo)
    if (!result) {
      localStorage.removeItem('token')
      store.commit('setLoggedInUser', null)
    }

    return result
  }

  static async signOut() {
    console.log('signing out user')
    const currentUser: User = store.getters.loggedInUser
    if (currentUser) {
      console.log('current user signing out: ', currentUser)
      const result = await Api.deleteSignOutUser(store.getters.getLoggedInUser)
      if (result) {
        localStorage.removeItem('token')
        console.log('setting logged in user to null')
        store.commit('setLoggedInUser', null)
      }
      return result
    } else {
      console.log('no current user to sign out')
    }
  }
}
