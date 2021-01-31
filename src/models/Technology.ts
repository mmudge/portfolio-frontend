import store from '@/store'
import Api from '@/api'
import { TechnologyDetails } from '@/types/types'

export default class Technology {
  id!: number
  name!: string
  text!: string
  color!: string
  icon!: string
  hierarchy!: number
  errors!: string[]

  static async fetchAll() {
    const technologies: Technology[] = await Api.getAllTechnologies()
    if (technologies) {
      store.commit('technologies/setTechnologies', technologies)
    }
  }

  static async createTechnology(technologyDetails: TechnologyDetails) {
    const technology: Technology = await Api.createTechnology(technologyDetails)
    if (technology && !technology.errors) {
      store.commit('technologies/addTechnology', technology)
    }
    return technology
  }

  static async updateTechnology(
    technologyId: number,
    technologyDetails: TechnologyDetails
  ) {
    const technology: Technology = await Api.updateTechnology(
      technologyId,
      technologyDetails
    )
    if (technology && !technology.errors) {
      store.commit('technologies/updateTechnology', technology)
    }
    return technology
  }

  static async deleteTechnology(technologyId: number) {
    const result = await Api.deleteTechnology(technologyId)
    if (result) {
      store.commit('technologies/removeTechnology', technologyId)
    }

    return result
  }

  static findTechnology(technologyId: number) {
    return store.getters['technologies/technologies'].find(
      (t: Technology) => t.id === technologyId
    )
  }
}
