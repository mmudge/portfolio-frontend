<template>
  <v-card v-if="project" class="px-10 py-5" color="black2" flat>
    <v-layout align-center justify-space-between class="mb-5">
      <h2 class="blue1--text text-h4">{{ project.title }}</h2>

      <v-layout justify-end>
        <v-btn
          v-if="project.github_link"
          class="mr-3"
          color="white"
          icon
          target="_blank"
          :href="project.github_link"
        >
          <v-icon>fab fa-github</v-icon>
        </v-btn>

        <v-btn color="white" icon target="_blank" :href="project.link">
          <v-icon>fas fa-link</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>
    <p class="lightGray--text">{{ project.description }}</p>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Project from '@/models/Project'

@Component({
  components: {}
})
export default class ProjectCard extends AppComponent {
  @Prop() project!: Project
}
</script>

<style scoped></style>
