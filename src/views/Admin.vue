<template>
  <div>
    <v-container>
      <v-layout class="pb-5" align-center justify-space-between>
        <h1>Projects</h1>
        <v-btn dark color="primary" @click="createProject"
          >Create Project</v-btn
        >
      </v-layout>
      <v-card class="pa-5">
        <ProjectsTable />
      </v-card>
    </v-container>

    <v-dialog v-model="createProjectDialog" width="500">
      <CreateOrUpdateProject @closeDialog="onCloseDialog" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import ProjectsTable from '@/components/projects/ProjectsTable.vue'
import CreateOrUpdateProject from '@/components/projects/CreateOrUpdateProject.vue'

@Component({
  components: {
    ProjectsTable,
    CreateOrUpdateProject
  }
})
export default class Admin extends AppComponent {
  createProjectDialog: boolean = false

  createProject() {
    this.createProjectDialog = true
  }

  onCloseDialog() {
    this.createProjectDialog = false
  }
}
</script>

<style></style>
