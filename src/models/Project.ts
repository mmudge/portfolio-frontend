import store from '@/store'
import Api from '@/api'
import { ProjectDetails } from '@/types/types'
import Technology from '@/models/Technology'

export default class Project {
  constructor(
    id: number,
    title: string,
    description: string,
    link: string,
    github_link: string,
    published: boolean,
    technologies: Technology[],
    errors: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.link = link
    this.github_link = github_link
    this.published = published
    this.technologies = technologies
    this.errors = errors
  }

  id!: number
  title!: string
  description!: string
  link!: string
  github_link!: string
  published!: boolean
  technologies!: Technology[]

  errors!: string[]

  static async fetchAll() {
    const projects: Project[] = await Api.getAllProjects()
    if (projects) {
      store.commit(
        'projects/setProjects',
        projects.map((p: Project) => Project.newProject(p))
      )
      projects.forEach((project: Project) => {
        if (project.technologies?.length) {
          store.commit('technologies/addTechnologies', project.technologies)
        }
      })
    }
  }

  static async createProject(projectDetails: ProjectDetails) {
    const project: Project = await Api.createProject(projectDetails)
    if (project && !project.errors) {
      store.commit('projects/addProject', Project.newProject(project))
    }
    return project
  }

  static async updateProject(
    projectId: number,
    projectDetails: ProjectDetails
  ) {
    const project: Project = await Api.updateProject(projectId, projectDetails)
    if (project && !project.errors) {
      store.commit('projects/updateProject', Project.newProject(project))
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

  get prettyTechnologies(): string {
    if (this.technologies?.length) {
      let nameString = ''
      this.technologies.forEach((t: Technology, index: number) => {
        if (index === 0) {
          nameString += t.name
        } else {
          nameString += `, ${t.name}`
        }
      })

      return nameString
    } else {
      return 'No technologies'
    }
  }

  static newProject(p: Project) {
    return new Project(
      p.id,
      p.title,
      p.description,
      p.link,
      p.github_link,
      p.published,
      p.technologies,
      p.errors
    )
  }
}
