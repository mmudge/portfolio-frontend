import store from '@/store'
import Api from '@/api'

export default class Project {
  id!: number
  title!: string

  static async fetchAll() {
    const projects = await Api.getAllProjects()
    store.commit('setProjects', projects)
  }
}
