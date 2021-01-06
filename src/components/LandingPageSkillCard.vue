<template>
  <v-card v-if="cardInfo" flat outlined class="pa-10">
    <v-layout align-center justify-start>
      <v-icon
        size="85"
        color="red2"
        class="pr-5"
        v-for="icon in cardInfo.icons"
        :key="icon"
        >{{ icon }}</v-icon
      >
    </v-layout>

    <h1 class="text-h5 grayText--text pt-10 font-weight-bold">
      {{ cardInfo.title }}
    </h1>
    <p class="body-2 mediumGray--text pt-2 pb-3">
      {{ cardInfo.text }}
    </p>

    <div v-for="skill in cardInfo.skills" :key="skill" class="mb-0">
      <v-layout align-center>
        <v-icon x-small class="mr-5" color="red2"
          >fas fa-long-arrow-alt-right</v-icon
        >
        <p class="mb-0 font-weight-bold grayText--text">{{ skill }}</p>
      </v-layout>
    </div>

    <p class="mb-0 py-5">
      Exp: <strong>{{ calcTime }} yrs</strong>
    </p>
    <div class="red2" style="height: 1px;"></div>
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
