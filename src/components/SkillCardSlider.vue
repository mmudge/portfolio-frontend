<template>
  <v-carousel
    continous
    cycle
    interval="5000"
    hide-delimiter-background
    :show-arrows="false"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" light>
      <v-layout align-center justify-center>
        <SkillCard
          v-for="skill in slide"
          :key="skill.title"
          :skill="skill"
          style="width: 300px;"
          class="skill-card"
        />
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import SkillCard from '@/components/SkillCard.vue'
import { Skill } from '@/types/types.ts'

@Component({
  components: {
    SkillCard
  }
})
export default class SkillCardSlider extends AppComponent {
  // TODO make this smarter
  get slides() {
    return [
      this.skills.slice(0, 3),
      this.skills.slice(3, 6),
      this.skills.slice(6, 9),
      this.skills.slice(9, 12),
      this.skills.slice(12, 15),
      this.skills.slice(15, 18),
      this.skills.slice(18, 21),
      this.skills.slice(21, 24),
      this.skills.slice(24, 27),
      this.skills.slice(27, 29)
    ]
  }

  get skills(): Skill[] {
    return this.$store.getters.skills
  }
}
</script>

<style lang="scss">
.skill-card {
  max-width: 350px;

  &:nth-child(2) {
    margin: 0 48px;
  }
}
</style>
