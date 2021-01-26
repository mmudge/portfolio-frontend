<template>
  <v-card v-if="skill" class="pa-10">
    <v-icon size="70" :color="skill.color">{{ skill.icon }}</v-icon>
    <h2
      :class="
        `${
          smallTextTitle ? 'text-h5' : 'text-h5'
        } pb-4 pt-6 font-weight-bold grayText--text`
      "
    >
      {{ skill.title }}
    </h2>

    <p class="mb-0 pt-1 mediumGray--text" style="height: 120px;">
      {{ skill.text }}
    </p>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import moment from 'moment'
import { Skill } from '@/types/types.ts'

@Component({
  components: {}
})
export default class SkillCard extends AppComponent {
  @Prop() skill!: Skill

  get calcTime() {
    const a = moment()
    const b = moment([2018, 9])

    return a.diff(b, 'years', true).toFixed(2) // 1.75
  }

  get smallTextTitle() {
    return this.skill.title.split('').length > 10
  }
}
</script>

<style lang="css">
.smaller-text {
  font-size: 0.5em;
}
</style>
