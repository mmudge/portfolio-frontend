<template>
  <div>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          v-if="project"
          class="cursor-pointer-on-hover px-10 py-5"
          outlined
          flat
          :elevation="hover ? 4 : 1"
          :href="getHref"
        >
          <v-layout align-center justify-space-between class="mb-5" wrap>
            <v-flex grow>
              <div style="width: fit-content;">
                <h2 class="blackText1--text text-h4">{{ project.title }}</h2>
                <v-slide-x-transition>
                  <div v-if="hover" class="red2" style="height: 4px;"></div>
                </v-slide-x-transition>
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

                <v-btn
                  color="blackText1"
                  icon
                  target="_blank"
                  :href="project.link"
                >
                  <v-icon>fas fa-link</v-icon>
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
          <p class="darkGray--text">{{ project.description }}</p>
        </v-card>
      </template>
    </v-hover>
  </div>
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

  get getHref() {
    if (this.project.link?.length) {
      return this.project.link
    } else if (this.project.github_link?.length) {
      return this.project.github_link
    } else {
      return ''
    }
  }
}
</script>

<style scoped>
.project-card:hover {
}
</style>
