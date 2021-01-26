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
          :key="skill.text"
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
  // skillCards: any[] = [
  //   {
  //     title: 'JAVASCRIPT',
  //     icons: ['fab fa-js'],
  //     text: 'My favorite language for bringing data to life!',
  //     skills: ['TypeScript', 'Vue JS', 'Cesium JS']
  //   },
  //   {
  //     title: 'RUBY ON RAILS',
  //     icons: ['fas fa-laptop-code'],
  //     text: 'Turn your idea into a business, fast!',
  //     skills: ['Ruby', 'Rspec', 'Devise']
  //   },
  //   {
  //     title: 'WEB DESIGN',
  //     icons: ['fab fa-html5', 'fab fa-css3-alt'],
  //     text: 'Great for designing amazing user experiences!',
  //     skills: ['HTML5', 'CSS3', 'Mobile Responsive']
  //   }
  // ]

  upperLimit: number = 3
  lowerLimit: number = 0

  active: boolean = true

  get slides() {
    return [
      this.skills.slice(0, 3),
      this.skills.slice(3, 6),
      this.skills.slice(6, 9),
      this.skills.slice(9, 12)
    ]
  }

  get skills(): Skill[] {
    return this.$store.getters.skills
  }

  get activeSkills(): Skill[] {
    return this.skills.slice(this.lowerLimit, this.upperLimit)
  }

  mounted() {
    this.startCarousel()
  }

  startCarousel() {
    this.updateActiveCards()

    setInterval(() => {
      setTimeout(() => {
        this.active = true
      }, 400)
      this.updateActiveCards()
      setTimeout(() => {
        this.active = false
      }, 400)
    }, 8000)
  }

  updateActiveCards() {
    if (this.upperLimit < this.skills.length) {
      this.lowerLimit = this.upperLimit
      this.upperLimit += 3
    } else {
      this.lowerLimit = 0
      this.upperLimit = 3
    }
  }
}
</script>

<style lang="scss">
.skill-card {
  max-width: 350px;

  &:nth-child(2) {
    margin: 0 24px;
  }
}

.skill-card {
  // opacity: 0;
  // transition: opacity 0.7s ease-in-out;
  // position: absolute;
}

// @keyframes slidein {
//   from {
//     transform: translateX(150px);
//   }

//   to {
//     transform: translateX(0);
//   }
// }

// .skill-card.active {
//   opacity: 1;
//   animation: slidein 0.6s ease-out;
//   position: static;
// }

// @keyframes slideout {
//   from {
//     transform: translateX(0);
//   }

//   to {
//     transform: translateX(-150px);
//   }
// }

// .skill-card.not-active {
//   opacity: 0;
//   animation: slideout 0.6s ease-in;
//   left: -100%;
// }
</style>
