<template>
  <div>
    <v-container>
      <v-tabs
        v-model="tab"
        background-color="white3"
        color="mediumGray"
        left
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-0">
          Projects
          <v-icon>fas fa-project-diagram</v-icon>
        </v-tab>

        <v-tab href="#tab-1">
          Technologies
          <v-icon>fas fa-code</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-0'">
          <div class="white3 py-5 ">
            <v-btn dark color="red2" @click="createProject"
              >Create Project</v-btn
            >
          </div>
          <v-card class="pa-5">
            <ProjectsTable />
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'tab-1'">
          <div class="white3 py-5 ">
            <!-- <v-btn dark color="red2" @click="createTechnology"
              >Create Technology</v-btn
            > -->
            <CreateTechnologyButton />
          </div>

          <v-card class="pa-5">
            <TechnologiesTable />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>

    <v-dialog v-model="createProjectDialog" width="500">
      <CreateOrUpdateProject
        @closeDialog="onCloseDialog"
        :formOpened="createProjectDialog"
      />
    </v-dialog>

    <v-dialog v-model="createProjectDialog" width="500">
      <CreateOrUpdateProject
        @closeDialog="onCloseDialog"
        :formOpened="createProjectDialog"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent.ts'
import ProjectsTable from '@/components/projects/ProjectsTable.vue'
import CreateOrUpdateProject from '@/components/projects/CreateOrUpdateProject.vue'
import TechnologiesTable from '@/components/technologies/TechnologiesTable.vue'
import CreateTechnologyButton from '@/components/technologies/CreateTechnologyButton.vue'
import Technology from '@/models/Technology'

@Component({
  components: {
    ProjectsTable,
    CreateOrUpdateProject,
    TechnologiesTable,
    CreateTechnologyButton
  }
})
export default class Admin extends AppComponent {
  tab = 'tab-0'
  createProjectDialog: boolean = false

  createProject() {
    this.createProjectDialog = true
  }

  createTechnology() {
    console.log('create technology')
  }

  onCloseDialog() {
    this.createProjectDialog = false
  }

  created() {
    Technology.fetchAll()
  }
}
</script>

<style></style>
