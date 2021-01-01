<template>
  <v-card v-if="cardInfo" flat class="pa-10">
    <v-icon size="50" color="green1">{{ cardInfo.icon }}</v-icon>
    <h1 class="py-5 blackText1--text">{{ cardInfo.title }}</h1>

    <div v-for="skill in cardInfo.skills" :key="skill" class="mb-0">
      <v-layout align-center>
        <v-icon x-small class="mr-2" color="green1">fas fa-greater-than</v-icon>
        <p class="mb-0">{{ skill }}</p>
      </v-layout>
    </div>

    <!-- <v-btn x-small text class="mt-5" to="/about#skills">view more</v-btn> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component({
  components: {}
})
export default class LandingPageSkillCard extends AppComponent {
  @Prop() cardInfo!: number
}
</script>

<style scoped></style>
