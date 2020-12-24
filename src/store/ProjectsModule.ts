import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Project from '@/models/Project'

@Module({ namespaced: true, name: 'projects' })
export default class ProjectsModule extends VuexModule {
  projectsState: Project[] | [] = []

  @Mutation setProjects(projects: Project[]) {
    this.projectsState = projects
  }

  @Mutation addProject(project: Project) {
    this.projectsState = [...this.projectsState, project]
  }

  @Mutation removeProject(project: Project) {
    this.projectsState = this.projectsState.filter(
      (p: Project) => p.id != project.id
    )
  }

  @Mutation clearProjects(): void {
    this.projectsState = []
  }

  get projects(): Project[] {
    return this.projectsState
  }
}
