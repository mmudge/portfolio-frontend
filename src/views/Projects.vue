<template>
  <div>
    <PageBanner :fullScreen="false" :imageName="'laptop-2'">
      <template v-slot:content>
        <v-layout align-center justify-center>
          <div class="text-center">
            <h1 class="text-h2 font-weight-medium blackText1--text">
              Projects
            </h1>
            <p class="text-h6 pt-5 font-weight-light mediumGray--text">
              Some of my work over the past few years
            </p>
          </div>
        </v-layout>
      </template>
    </PageBanner>
    <PageContainer>
      <template v-slot:content>
        <!-- <h1 v-if="smAndDown" class="text-center pb-5 blackText1--text">
          Projects
        </h1> -->
        <template v-for="project in publishedProjects">
          <ProjectCard :key="project.id" :project="project" class="mb-5" />
        </template>
      </template>
    </PageContainer>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Project from '@/models/Project'
import AppComponent from '@/components/AppComponent'
import PageContainer from '@/components/PageContainer.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import PageBanner from '@/components/PageBanner.vue'

@Component({
  components: {
    PageContainer,
    ProjectCard,
    PageBanner
  }
})
export default class Projects extends AppComponent {
  mounted() {
    Project.fetchAll()
  }

  get publishedProjects(): Project[] {
    return this.$store.getters['projects/publishedProjects']
  }
}
</script>

<style></style>
