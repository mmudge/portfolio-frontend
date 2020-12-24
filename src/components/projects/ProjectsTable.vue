<template>
  <div>
    <v-data-table
      :items="projects"
      :headers="projectHeaders"
      hide-default-footer
      disable-pagination
      :loading="loadingProjects"
      loading-text="Loading... one moment please"
      no-data-text="No data"
      no-results-text="No results"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" text dark small @click="updateProject(item.id)"
          ><v-icon>far fa-edit</v-icon></v-btn
        >
        <v-btn
          class="ml-1"
          color="red lighten-1"
          text
          dark
          small
          @click="deleteProject(item.id)"
        >
          <v-icon>
            far fa-trash-alt
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="updateProjectDialog" width="500">
      <CreateOrUpdateProject
        @closeDialog="onCloseDialog"
        :projectToUpdateId="projectToUpdateId"
        :formOpened="updateProjectDialog"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Project from '@/models/Project'
import CreateOrUpdateProject from '@/components/projects/CreateOrUpdateProject.vue'

@Component({
  components: {
    CreateOrUpdateProject
  }
})
export default class ProjectsTable extends AppComponent {
  loadingProjects: boolean = false
  projectHeaders: any[] = [
    {
      text: 'Title',
      align: 'left',
      sortable: false,
      value: 'title'
    },
    {
      text: 'Actions',
      align: 'right',
      sortable: false,
      value: 'actions'
    }
  ]

  updateProjectDialog: boolean = false
  projectToUpdateId: number | null = null

  get projects(): Project[] {
    return this.$store.getters['projects/projects']
  }

  mounted() {
    this.loadProjects()
  }

  async loadProjects() {
    this.loadingProjects = true
    await Project.fetchAll()
    this.loadingProjects = false
  }

  updateProject(projectId: number) {
    this.projectToUpdateId = projectId
    this.updateProjectDialog = true
  }

  onCloseDialog() {
    this.updateProjectDialog = false
  }

  beforeDestroy() {
    this.projectToUpdateId = null
  }
}
</script>

<style scoped></style>
