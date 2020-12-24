<template>
  <v-card class="pa-10">
    <h1 class="headline darkText--text">
      <template v-if="projectToUpdateId">Update project</template>
      <template v-else>Create project</template>
    </h1>
    <v-form @submit.prevent ref="projectForm" class="mt-10">
      <v-text-field v-model="title" tabindex="1" outlined label="Title">
      </v-text-field>
    </v-form>

    <template v-if="projectToUpdateId">
      <v-btn
        color="primary"
        tabindex="2"
        dark
        block
        @keyup.enter="updateProject"
        @click.stop="updateProject"
        >Update</v-btn
      >
    </template>

    <template v-else>
      <v-btn
        color="primary"
        tabindex="2"
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

  @Watch('formOpened', { immediate: true })
  onFormOpenChanged() {
    if (this.projectToUpdateId) {
      this.setProject()
    }
    if (!this.formOpened) {
      this.resetDataProps()
    }
  }

  resetDataProps() {
    this.title = ''
  }

  setProject() {
    const project: Project = Project.findProject(this.projectToUpdateId)
    if (project) {
      this.title = project.title
    }
  }

  updateProject() {
    console.log('update project')
  }

  async createProject() {
    console.log('create project')
    const project: ProjectDetails = { title: this.title }
    const result = Project.createProject(project)
    if (result.errors) {
      console.log('errors createing')
      this.setSnackbar('Error creating project', 'error')
    } else {
      this.setSnackbar('Project created successfully', 'success')
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss"></style>
