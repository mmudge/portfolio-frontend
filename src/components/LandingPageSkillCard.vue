<template>
  <v-card v-if="cardInfo" flat outlined class="pa-10">
    <h1 class="blackText1--text">{{ cardInfo.title }}</h1>
    <p class="darkGray--text pb-3">
      {{ cardInfo.text }}
    </p>

    <div v-for="skill in cardInfo.skills" :key="skill" class="mb-0">
      <v-layout align-center>
        <v-icon x-small class="mr-2" color="red lighten-1"
          >fas fa-greater-than</v-icon
        >
        <p class="mb-0">{{ skill }}</p>
      </v-layout>
    </div>

    <p class="mb-0 pt-5">Experience: {{ calcTime }} yrs</p>

    <!-- <v-layout class="pt-10">
      <v-flex grow></v-flex>
      <v-flex shrink>
        <v-icon size="65" color="green1">{{ cardInfo.icon }}</v-icon>
      </v-flex>
    </v-layout> -->

    <!-- <v-btn x-small text class="mt-5" to="/about#skills">view more</v-btn> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import moment from 'moment'

@Component({
  components: {}
})
export default class LandingPageSkillCard extends AppComponent {
  @Prop() cardInfo!: number

  get calcTime() {
    const a = moment()
    const b = moment([2018, 9])

    return a.diff(b, 'years', true).toFixed(2) // 1.75
  }
}
</script>

<style scoped></style>
