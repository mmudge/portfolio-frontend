<template>
  <v-layout
    justify-space-between
    :class="`${evenIndex ? 'flex-row-reverse' : 'flex-row'}`"
    :wrap="smAndDown"
  >
    <v-flex md6 class="px-10">
      <div class="grayText--text">
        <v-layout justify-start align-baseline :wrap="smAndDown">
          <h1 class="display-1 font-weight-medium">
            <a :href="getHref" target="_blank" class="project-title-btn">
              {{ project.title }}
            </a>
          </h1>
          <v-btn
            icon
            v-if="project.github_link"
            target="_blank"
            :href="project.github_link"
            color="grayText"
            :class="mdAndUp ? 'ml-10' : 'mt-3'"
            ><v-icon>fab fa-github</v-icon></v-btn
          >
        </v-layout>
        <p class="title font-weight-regular mb-14 mt-7">
          {{ project.description }}
        </p>

        <h6 style="font-size: 18px;" class="font-weight-bold pb-3">
          SKILLS USED
        </h6>
        <template v-for="chip in project.sortedTechnologies">
          <Chip
            :text="chip.name"
            :color="chip.color"
            :icon="chip.icon"
            :key="chip.name"
            :small="true"
            class="mr-2 mb-2"
          />
        </template>
      </div>
    </v-flex>
    <v-flex md6 v-if="photo" :class="mdAndDown ? 'd-none' : ''">
      <v-layout align-center :class="photoClass">
        <div>
          <v-img
            :src="photo.src.medium"
            :height="mdAndDown ? 0 : 300"
            :width="mdAndDown ? 0 : 450"
          ></v-img>

          <v-layout class="pt-3" justify-center align-center>
            <div style="width: 50px;" class="mr-5">
              <a href="https://www.pexels.com">
                <v-img src="https://images.pexels.com/lib/api/pexels.png" />
              </a>
            </div>

            <p class="gratText--text mb-0 caption">
              This
              <a :href="photo.url">Photo</a>
              was taken by
              <a :href="photo.photographer_url">{{ photo.photographer }}</a> on
              Pexels.
            </p>
          </v-layout>
        </div>
      </v-layout>
    </v-flex>
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
  @Prop() photo!: any
  @Prop() evenIndex!: boolean

  get getHref() {
    if (this.project.link?.length) {
      return this.project.link
    } else if (this.project.github_link?.length) {
      return this.project.github_link
    } else {
      return ''
    }
  }

  get photoClass() {
    if (this.mdAndDown) {
      return 'justify-center'
    } else if (this.evenIndex) {
      return 'justify-start'
    } else {
      return 'justify-end'
    }
    // ${evenIndex ? 'justify-start' : 'justify-end'}
  }
}
</script>

<style scoped lang="css">
.project-title-btn {
  text-decoration: none;
  color: var(--grayText);
  transition: color bold 0.2s ease-in-out;
}

.project-title-btn:hover {
  color: #df2f4d;
  font-weight: bold;
}
</style>
