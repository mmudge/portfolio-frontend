import Api from '@/api'
import store from '@/store'

export default class User {
  id!: number
  email!: string

  static signIn() {
    Api.postSignInUser()
  }
}
