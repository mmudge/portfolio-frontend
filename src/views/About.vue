<template>
  <div class="about">
    <v-container :style="aboutPageContainerStyle">
      <v-layout align-center justify-center wrap class="mt-10">
        <div :class="mdAndUp ? 'px-5 mr-5' : 'pb-10'">
          <Avatar size="250" />
        </div>
        <div :class="mdAndUp ? 'px-5' : ''">
          <ContactInfo />
        </div>
      </v-layout>

      <PageTextContent class="pt-10">
        <template v-slot:title>
          Skills
        </template>

        <template v-slot:content>
          <v-layout wrap class="pb-2">
            <template v-for="chip in skillChips">
              <Chip
                :text="chip.text"
                :color="chip.color"
                :icon="chip.icon"
                :key="chip.text"
                class="mr-4 mb-3"
              />
            </template>
          </v-layout>
        </template>
      </PageTextContent>

      <PageTextContent class="pt-10">
        <template v-slot:title>
          Professional
        </template>

        <template v-slot:content>
          <p>
            Software development, programming, coding, and UI/UX design are all
            passions in my life. My focus is on full stack web development and
            while I do enjoy working with data on the backend, my real passion
            is bringing that data to life on the front end. Building web
            applications is something I enjoy from start to finish, from
            creating a new project, planning the architecture and design,
            building out all the features, all the way to deployment.
          </p>
          <p>
            The biggest thing I have learned in my development experience is
            that I really enjoy the challenge of solving problems. It pushes me
            to constantly learn new things, research new technologies, and
            experiment with code in order to find solutions. This makes my work
            always feel fun, exciting, and more like a fun hobby than actual
            work.
          </p>
          <p>
            The main technologies I have experience with are JavaScript (ES6+),
            Vue.js, TypeScript, and both Ruby and Ruby on Rails 5+. I initially
            learned these skills in 2018 while attending
            <a class="red--text" href="https://www.lewagon.com/">Le Wagon</a>
            Amsterdam. After my bootcamp I was hired by one of my teachers and
            have continued developing on the job and in my own free time.
          </p>

          <p>
            I’m currently working as a software developer at
            <a class="blue--text" href="https://aeroscan.nl/">AeroScan</a>,
            developing 3D real estate inspection software. We are working with
            some of the biggest real estate companies in the Netherlands with
            the goal of making digital inspections a reality.
          </p>
          <p class="mb-0">
            I’m always open to new career and business opportunities. Please
            feel free to contact me by phone, text, or email if you would like
            to have more information.
          </p>
        </template>
      </PageTextContent>

      <!-- <PageTextContent class="pt-10">
        <template v-slot:title>
          Personal

        </template>

        <template v-slot:content>
          <p class="body-1 mb-0">
            I'm an American living in the Netherlands working as a software
            developer. I moved to the Netherlands in 2018 to be with my Dutch
            girlfriend. My hobbies are playing with computers, sports, cooking,
            reading, traveling, chess, fitness, and video games. I am currently
            learning to speak Dutch.
          </p>
        </template>
      </PageTextContent> -->

      <PageTextContent class="pt-10">
        <template v-slot:title>
          Education
        </template>
        <template v-slot:content>
          <v-layout wrap class="pb-2">
            <template v-for="chip in eduChips">
              <Chip
                :text="chip.text"
                :color="chip.color"
                :icon="chip.icon"
                :key="chip.text"
                class="mr-2 my-1"
              />
            </template>
          </v-layout>
        </template>
      </PageTextContent>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Avatar from '@/components/Avatar.vue'
import Social from '@/components/Social.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import Chip from '@/components/Chip.vue'
import PageTextContent from '@/components/PageTextContent.vue'

@Component({
  components: {
    Avatar,
    Social,
    ContactInfo,
    Chip,
    PageTextContent
  }
})
export default class About extends AppComponent {
  get skillChips() {
    return this.$store.getters.skillChips
  }
  get eduChips() {
    return this.$store.getters.eduChips
  }

  get aboutPageContainerStyle() {
    if (this.lgAndUp) {
      return 'padding-left: 250px; padding-right: 250px;'
    } else if (this.md) {
      return 'padding-left: 100px; padding-right: 100px;'
    } else {
      return 'padding-left: 50px; padding-right: 50px;'
    }
  }
}
</script>

<style scoped>
.about {
  padding-top: 64px;
}
</style>
