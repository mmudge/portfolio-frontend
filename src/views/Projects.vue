<template>
  <div>
    <v-container v-if="loggedInUser">
      <div>
        <h1>Projects</h1>
        <template v-for="project in projects">
          <p :key="project.id">{{ project.title }}</p>
        </template>
      </div>
    </v-container>
    <v-container v-else>
      <v-layout align-center justify-center>
        <h1>This page is currently under construction</h1>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Project from '@/models/Project'
import AppComponent from '@/components/AppComponent'

@Component
export default class Projects extends AppComponent {
  mounted() {
    Project.fetchAll()
  }

  get projects() {
    return this.$store.getters['projects/projects']
  }
}
</script>

<style></style>
