<template>
  <div>
    <PageContainer>
      <template v-slot:content>
        <h1 v-if="smAndDown" class="text-center pb-5 blackText1--text">
          Projects
        </h1>
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

@Component({
  components: {
    PageContainer,
    ProjectCard
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
