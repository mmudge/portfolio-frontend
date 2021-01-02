<template>
  <v-card v-if="cardInfo" flat outlined class="pa-10">
    <h1 class="blackText1--text">{{ cardInfo.title }}</h1>
    <p class="body-2 darkGray--text pb-3">
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

    <p class="mb-0 py-5">
      Experience: <strong>{{ calcTime }} yrs</strong>
    </p>
    <div style="height: 2px; background-color: #E53935;"></div>
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
