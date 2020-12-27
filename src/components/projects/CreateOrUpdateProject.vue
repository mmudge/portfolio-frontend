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
        label="Link"
      ></v-text-field>
      <v-switch
        v-model="published"
        label="Published"
        color="success"
        tabindex="5"
      ></v-switch>
    </v-form>

    <template v-if="projectToUpdateId">
      <v-btn
        color="primary"
        tabindex="6"
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
        tabindex="6"
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

  @Watch('formOpened', { immediate: true })
  onFormOpenChanged() {
    if (this.projectToUpdateId) {
      this.setProject()
    } else if (!this.formOpened) {
      this.resetDataProps()
    }
  }

  resetDataProps() {
    this.title = ''
    this.description = ''
    this.link = ''
    this.published = false
    this.githubLink = ''
  }

  setProject() {
    const project: Project = Project.findProject(this.projectToUpdateId)
    if (project) {
      this.title = project.title
      this.description = project.description
      this.link = project.link
      this.published = project.published
      this.githubLink = project.github_link
    }
  }

  async updateProject() {
    const project: ProjectDetails = {
      title: this.title,
      description: this.description,
      link: this.link,
      published: this.published,
      github_link: this.githubLink
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
      github_link: this.githubLink
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
