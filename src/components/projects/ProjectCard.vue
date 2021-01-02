<template>
  <v-card v-if="project" class="px-10 py-5 elevation-1" outlined flat>
    <v-layout align-center justify-space-between class="mb-5" wrap>
      <v-flex grow>
        <div style="width: fit-content;">
          <h2 class="blackText1--text text-h4">{{ project.title }}</h2>
          <div style="height: 4px; background-color: #E53935;"></div>
        </div>
      </v-flex>

      <v-flex shrink>
        <v-layout :class="smAndDown ? 'mt-5' : ''">
          <v-btn
            v-if="project.github_link"
            class="mr-3"
            color="blackText1"
            icon
            target="_blank"
            :href="project.github_link"
          >
            <v-icon>fab fa-github</v-icon>
          </v-btn>

          <v-btn color="blackText1" icon target="_blank" :href="project.link">
            <v-icon>fas fa-link</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <p class="darkGray--text">{{ project.description }}</p>
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
