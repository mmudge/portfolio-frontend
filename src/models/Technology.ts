import store from '@/store'
import Api from '@/api'
import { TechnologyDetails } from '@/types/types'

export default class Technology {
  id!: number
  name!: string
  color!: string
  icon!: string
  errors!: string[]

  static async fetchAll() {
    const technologies: Technology[] = await Api.getAllTechnologies()
    console.log('fetched technologies', technologies)
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
    // const project: Project = await Api.updateProject(projectId, projectDetails)
    // if (project && !project.errors) {
    //   store.commit('projects/updateProject', project)
    // }
    // return project
  }

  static findTechnology(technologyId: number) {
    return store.getters['technologies/technologies'].find(
      (t: Technology) => t.id === technologyId
    )
  }
}
