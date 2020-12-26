import store from '@/store'
import Api from '@/api'
import { ProjectDetails } from '@/types/types'

export default class Project {
  id!: number
  title!: string
  description!: string
  link!: string
  published!: boolean

  errors!: string[]

  static async fetchAll() {
    const projects: Project[] = await Api.getAllProjects()
    if (projects) {
      store.commit('projects/setProjects', projects)
    }
  }

  static async createProject(projectDetails: ProjectDetails) {
    const project: Project = await Api.createProject(projectDetails)
    if (project && !project.errors) {
      store.commit('projects/addProject', project)
    }
    return project
  }

  static async updateProject(
    projectId: number,
    projectDetails: ProjectDetails
  ) {
    const project: Project = await Api.updateProject(projectId, projectDetails)
    if (project && !project.errors) {
      store.commit('projects/updateProject', project)
    }
    return project
  }

  static async deleteProject(projectId: number) {
    const result = await Api.deleteProject(projectId)
    if (result) {
      store.commit('projects/removeProject', projectId)
    }

    return result
  }

  static findProject(projectId: number) {
    return store.getters['projects/projects'].find(
      (project: Project) => project.id === projectId
    )
  }
}
