<template>
  <div>
    <v-container>
      <div>
        <h1>Projects</h1>
        <template v-for="project in projects">
          <p :key="project.id">{{ project.title }}</p>
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
    return this.$store.getters.projects
  }
}
</script>

<style></style>
