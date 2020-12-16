<template>
  <div>
    <v-container>
      <div>
        <template v-for="project in projects">
          <h1 :key="project.id">{{ project.title }}</h1>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Project from '@/models/Project'

@Component
export default class Projects extends Vue {
  mounted() {
    Project.fetchAll()
  }

  get projects() {
    console.log('projects in the store', this.$store.getters.projects)
    return this.$store.getters.projects
  }
}
</script>

<style></style>
