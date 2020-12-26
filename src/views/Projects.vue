<template>
  <div>
    <PageContainer>
      <template v-slot:content>
        <h1>This page is currently under construction.</h1>

        <template v-for="project in publishedProjects">
          <p class="d-none" :key="project.id">{{ project.title }}</p>
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

@Component({
  components: {
    PageContainer
  }
})
export default class Projects extends AppComponent {
  mounted() {
    Project.fetchAll()
  }

  get publishedProjects() {
    return this.$store.getters['projects/publishedProjects']
  }
}
</script>

<style></style>
