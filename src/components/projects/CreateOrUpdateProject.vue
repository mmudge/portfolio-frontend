<template>
  <v-card class="pa-10">
    <h1 class="headline darkText--text">
      <template v-if="projectToUpdateId">Update project</template>
      <template v-else>Create project</template>
    </h1>
    <v-form @submit.prevent ref="projectForm" class="mt-10">
      <v-text-field v-model="title" tabindex="1" outlined label="Title">
      </v-text-field>
      <v-textarea
        v-model="description"
        tabindex="2"
        outlined
        label="Description"
        rows="3"
      >
      </v-textarea>
      <v-text-field
        v-model="link"
        tabindex="3"
        outlined
        label="Link"
      ></v-text-field>
      <v-text-field
        v-model="githubLink"
        tabindex="4"
        outlined
        label="Github Link"
      ></v-text-field>
      <v-text-field
        v-model="hierarchy"
        tabindex="5"
        outlined
        label="Hierarchy"
      ></v-text-field>
      <v-switch
        v-model="published"
        label="Published"
        color="success"
        tabindex="6"
      ></v-switch>
      <v-select
        v-model="projectTechnologies"
        :items="technologies"
        item-text="name"
        :return-object="true"
        attach
        chips
        label="Technologies"
        multiple
        outlined
        tabindex="7"
        menu-props="auto, overflowY"
      ></v-select>
    </v-form>

    <template v-if="projectToUpdateId">
      <v-btn
        color="primary"
        tabindex="8"
        dark
        block
        class="mt-5"
        @keyup.enter="updateProject"
        @click.stop="updateProject"
        >Update</v-btn
      >
    </template>

    <template v-else>
      <v-btn
        color="primary"
        tabindex="8"
        class="mt-5"
        dark
        block
        @keyup.enter="createProject"
        @click.stop="createProject"
        >Create</v-btn
      >
    </template>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Project from '@/models/Project'
import { ProjectDetails } from '@/types/types'
import Technology from '@/models/Technology'

@Component({
  components: {}
})
export default class CreateOrUpdateProject extends AppComponent {
  @Prop() formOpened!: boolean
  @Prop() projectToUpdateId!: number

  title: string = ''
  description: string = ''
  link: string = ''
  githubLink: string = ''
  published: boolean = false
  projectTechnologies: Technology[] = []
  hierarchy: number = 0

  @Watch('formOpened', { immediate: true })
  onFormOpenChanged(newOpened: boolean) {
    if (this.projectToUpdateId) {
      this.setProject()
    } else if (!this.formOpened) {
      this.resetDataProps()
    }
  }

  get technologies() {
    console.log(
      'technologies',
      this.$store.getters['technologies/technologies']
    )
    return this.$store.getters['technologies/technologies']
  }

  resetDataProps() {
    this.title = ''
    this.description = ''
    this.link = ''
    this.published = false
    this.githubLink = ''
    this.projectTechnologies = []
    this.hierarchy = 0
  }

  setProject() {
    const project: Project = Project.findProject(this.projectToUpdateId)
    if (project) {
      this.title = project.title
      this.description = project.description
      this.link = project.link
      this.published = project.published
      this.githubLink = project.github_link
      this.hierarchy = project.hierarchy
      this.projectTechnologies = project.technologies
    }
  }

  async updateProject() {
    const project: ProjectDetails = {
      title: this.title,
      description: this.description,
      link: this.link,
      published: this.published,
      github_link: this.githubLink,
      hierarchy: this.hierarchy,
      technology_ids: this.projectTechnologies.map((t: Technology) => t.id)
    }

    const result = await Project.updateProject(this.projectToUpdateId, project)
    if (result.errors) {
      console.log('errors updating')
      this.setSnackbar('Error updating project', 'error')
    } else {
      this.setSnackbar('Project updated successfully', 'success')
      this.$emit('closeDialog')
    }
  }

  async createProject() {
    const project: ProjectDetails = {
      title: this.title,
      description: this.description,
      link: this.link,
      published: this.published,
      github_link: this.githubLink,
      hierarchy: this.hierarchy,
      technology_ids: this.projectTechnologies.map((t: Technology) => t.id)
    }

    const result = await Project.createProject(project)
    if (result.errors) {
      console.log('errors creating')
      this.setSnackbar('Error creating project', 'error')
    } else {
      this.setSnackbar('Project created successfully', 'success')
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss"></style>
