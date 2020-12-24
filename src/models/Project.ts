import store from '@/store'
import Api from '@/api'
import { ProjectDetails } from '@/types/types'

export default class Project {
  id!: number
  title!: string

  static async fetchAll() {
    const projects: Project[] = await Api.getAllProjects()
    if (projects) {
      store.commit('projects/setProjects', projects)
    }
  }

  static async createProject(projectDetails: ProjectDetails) {
    const project: Project = await Api.createProject(projectDetails)
    if (project) {
      store.commit('projects/addProject', project)
    }
  }

  static findProject(projectId: number) {
    return store.getters['projects/projects'].filter(
      (project: Project) => project.id === projectId
    )
  }
}
