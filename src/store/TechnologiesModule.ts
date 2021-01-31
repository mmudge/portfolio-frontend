import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Technology from '@/models/Technology'
import Vue from 'vue'

@Module({ namespaced: true, name: 'technologies' })
export default class TechnologiesModule extends VuexModule {
  technologiesState: Technology[] | [] = []

  @Mutation setTechnologies(technologies: Technology[]): void {
    this.technologiesState = technologies
  }

  @Mutation addTechnology(technology: Technology): void {
    this.technologiesState = [...this.technologiesState, technology]
  }

  @Mutation removeTechnology(technologyId: number): void {
    this.technologiesState = this.technologiesState.filter(
      (t: Technology) => t.id != technologyId
    )
  }

  @Mutation clearTechnologies(): void {
    this.technologiesState = []
  }

  @Mutation updateTechnology(technology: Technology): void {
    const oldTechnology: Technology | undefined = this.technologiesState.find(
      (t: Technology) => t.id === technology.id
    )

    if (oldTechnology) {
      // @ts-ignore
      const oldTechnologyIndex = this.technologiesState.indexOf(oldTechnology)

      if (oldTechnologyIndex !== -1) {
        Vue.set(this.technologiesState, oldTechnologyIndex, technology)
      }
    }
  }

  get technologies(): Technology[] {
    return this.technologiesState
  }
}
