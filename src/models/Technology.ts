import store from '@/store'
import Api from '@/api'
import { ProjectDetails } from '@/types/types'

export default class Technology {
  id!: number
  name!: string
  color!: string
  icon!: string
  errors!: string[]

  // static async fetchAll() {
  //   const technologies: Technology[] = await Api.getAllTechnologies()
  //   if (technologies) {
  //     store.commit('technologies/setTechnologies', technologies)
  //   }
  // }
}
