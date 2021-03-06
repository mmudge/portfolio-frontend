import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Project from '@/models/Project'
import Vue from 'vue'
import { PexelPhoto } from '@/types/types'

@Module({ namespaced: true, name: 'projects' })
export default class ProjectsModule extends VuexModule {
  projectsState: Project[] | [] = []
  projectPhotosState: PexelPhoto[] = []

  @Mutation setProjects(projects: Project[]): void {
    this.projectsState = projects
  }

  @Mutation addProject(project: Project): void {
    this.projectsState = [...this.projectsState, project]
  }

  @Mutation removeProject(projectId: number): void {
    this.projectsState = this.projectsState.filter(
      (p: Project) => p.id != projectId
    )
  }

  @Mutation clearProjects(): void {
    this.projectsState = []
  }

  @Mutation updateProject(project: Project): void {
    const oldProject: Project | undefined = this.projectsState.find(
      (p: Project) => p.id === project.id
    )

    if (oldProject) {
      // @ts-ignore
      const oldProjectIndex = this.projectsState.indexOf(oldProject)

      if (oldProjectIndex !== -1) {
        Vue.set(this.projectsState, oldProjectIndex, project)
      }
    }
  }

  @Mutation setProjectPhotos(photos: PexelPhoto[]): void {
    this.projectPhotosState = photos
  }

  get projects(): Project[] {
    return this.projectsState
  }

  get publishedProjects(): Project[] {
    return this.projectsState
      .filter((p: Project) => p.published)
      .sort((a: Project, b: Project) => {
        return a.hierarchy - b.hierarchy
      })
  }

  get projectPhotos(): PexelPhoto[] {
    return this.projectPhotosState
  }
}
