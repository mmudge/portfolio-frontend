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
      <template v-slot:item.description="{ item }">
        <div class="py-3">{{ item.description }}</div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" text dark x-small @click="updateProject(item.id)"
          ><v-icon>far fa-edit</v-icon></v-btn
        >
        <v-btn
          class="ml-1"
          color="red2"
          text
          dark
          x-small
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
      value: 'title',
      width: '15%'
    },
    {
      text: 'Description',
      align: 'left',
      sortable: false,
      value: 'description',
      width: '30%'
    },
    {
      text: 'Link',
      align: 'left',
      sortable: false,
      value: 'link',
      width: '10%'
    },
    {
      text: 'Github',
      align: 'left',
      sortable: false,
      value: 'github_link',
      width: '10%'
    },
    {
      text: 'Technologies',
      align: 'left',
      sortable: false,
      value: 'prettyTechnologies',
      width: '15%'
    },
    {
      text: 'Published',
      align: 'left',
      sortable: false,
      value: 'published',
      width: '5%'
    },
    {
      text: 'Hierarchy',
      align: 'left',
      sortable: false,
      value: 'hierarchy',
      width: '5%'
    },
    {
      text: 'Actions',
      align: 'right',
      sortable: false,
      value: 'actions',
      width: '10%'
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

  async deleteProject(projectId: number) {
    const deleted = await Project.deleteProject(projectId)
    if (deleted) {
      this.setSnackbar('Project deleted', 'warning')
    }
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
