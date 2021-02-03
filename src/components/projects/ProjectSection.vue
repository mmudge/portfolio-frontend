<template>
  <v-layout>
    <v-flex grow>
      <div>
        <h1 class="display-1">{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <template v-for="chip in project.technologies">
          <Chip
            :text="chip.title"
            :color="chip.color"
            :icon="chip.icon"
            :key="chip.text"
            class="mr-4 mb-3"
          />
        </template>
      </div>
    </v-flex>
    <v-flex grow> </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Project from '@/models/Project'
import Chip from '@/components/Chip.vue'

@Component({
  components: {
    Chip
  }
})
export default class ProjectSection extends AppComponent {
  @Prop() project!: Project

  mounted() {
    console.log('project', this.project)
  }

  // get getHref() {
  //   if (this.project.link?.length) {
  //     return this.project.link
  //   } else if (this.project.github_link?.length) {
  //     return this.project.github_link
  //   } else {
  //     return ''
  //   }
  // }
}
</script>

<style scoped></style>
