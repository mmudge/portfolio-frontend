<template>
  <div>
    <PageBanner
      :fullScreen="false"
      :imageName="'laptop-2'"
      :centerContent="true"
    >
      <template v-slot:content>
        <v-layout align-center justify-center>
          <div class="text-center">
            <h1 class="text-h3 font-weight-bold grayText--text">
              PROJECTS
            </h1>
            <p class="text-h6 pt-5 font-weight-light mediumGray--text">
              Some of my recent work
            </p>
          </div>
        </v-layout>
      </template>
    </PageBanner>

    <template v-for="(project, index) in publishedProjects">
      <PageContainer
        :key="project.id"
        :bgColor="evenIndex(index) ? '#f5f5f5' : '#fafafa'"
      >
        <template v-slot:content>
          <ProjectSection
            :project="project"
            :evenIndex="evenIndex(index)"
            :photo="photos[index]"
          />
        </template>
      </PageContainer>
    </template>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Project from '@/models/Project'
import AppComponent from '@/components/AppComponent'
import PageContainer from '@/components/PageContainer.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectSection from '@/components/projects/ProjectSection.vue'
import PageBanner from '@/components/PageBanner.vue'
import Api from '@/api'
import { PexelPhoto } from '@/types/types'

@Component({
  components: {
    PageContainer,
    ProjectCard,
    ProjectSection,
    PageBanner
  }
})
export default class Projects extends AppComponent {
  created() {
    this.fetchPhotos()
  }

  mounted() {
    Project.fetchAll()
  }

  get publishedProjects(): Project[] {
    return this.$store.getters['projects/publishedProjects']
  }

  get photos(): PexelPhoto[] {
    return this.$store.getters['projects/projectPhotos']
  }

  async fetchPhotos() {
    if (this.photos.length < 1) {
      const result = await Api.getProjectPhotos(10)
      if (result) {
        this.$store.commit('projects/setProjectPhotos', result)
      }
    }
  }

  evenIndex(index: number) {
    return index % 2 === 0
  }
}
</script>

<style></style>
