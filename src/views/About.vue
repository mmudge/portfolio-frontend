<template>
  <div>
    <PageBanner
      :fullScreen="false"
      :imageName="'typing-bg.jpg'"
      :centerContent="true"
    >
      <template v-slot:content>
        <v-layout
          align-center
          justify-center
          :wrap="smAndDown"
          :nowrap="mdAndUp"
          :class="smAndDown ? 'pt-8' : ''"
        >
          <div :class="mdAndUp ? 'px-5 mr-16' : 'pb-5'">
            <Avatar size="250" :showRedBg="false" />
          </div>
          <div :class="mdAndUp ? 'px-5' : ''">
            <ContactInfo />
          </div>
        </v-layout>
      </template>
    </PageBanner>

    <PageContainer :bgColor="'#f5f5f5'">
      <template v-slot:content>
        <PageTextContent id="skills">
          <template v-slot:title>
            SKILLS
          </template>

          <template v-slot:content>
            <v-layout wrap class="pb-2">
              <template v-for="chip in technologies">
                <Chip
                  :text="chip.name"
                  :color="chip.color"
                  :icon="chip.icon"
                  :key="chip.name"
                  class="mr-3 mb-3"
                />
              </template>
            </v-layout>
          </template>
        </PageTextContent>
      </template>
    </PageContainer>

    <PageContainer>
      <template v-slot:content>
        <PageTextContent>
          <template v-slot:title>
            PROFESSIONAL
          </template>

          <template v-slot:content>
            <p>
              Building, coding, and designing software is my passion. My focus
              is full stack web development. I enjoy working with data on the
              backend, however my real passion is bringing that data to life on
              the front end. Building web applications is something I enjoy from
              start to finish, from creating a new project, planning
              architecture and design, building out features, going through user
              feedback loops to improve features, all the way to deployment.
            </p>
            <p>
              The biggest thing I have learned in my development experience is
              that I really enjoy the challenge of solving problems. It pushes
              me to constantly learn new things, research new technologies, and
              experiment with code in order to find solutions. This makes my
              work always feel fun, exciting, and more like a hobby than actual
              work.
            </p>
            <p>
              The main technologies I have experience with are JavaScript
              (ES6+), Vue.js, TypeScript, Ruby, and Ruby on Rails. I initially
              learned these skills in 2018 while attending
              <a class="red--text" href="https://www.lewagon.com/">Le Wagon</a>
              Amsterdam. After my bootcamp I was hired by one of my teachers and
              have continued my learning on the job and in my own free time.
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
      </template>
    </PageContainer>

    <PageContainer :bgColor="'#f5f5f5'">
      <template v-slot:content>
        <PageTextContent>
          <template v-slot:title>
            EDUCATION
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
      </template>
    </PageContainer>

    <PageContainer>
      <template v-slot:content>
        <ContactForm class="my-16" id="contact-form" />
      </template>
    </PageContainer>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Avatar from '@/components/Avatar.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import Chip from '@/components/Chip.vue'
import PageTextContent from '@/components/PageTextContent.vue'
import PageContainer from '@/components/PageContainer.vue'
import ContactForm from '@/components/ContactForm.vue'
import PageBanner from '@/components/PageBanner.vue'
import { Skill } from '@/types/types.ts'
import Technology from '@/models/Technology'

@Component({
  components: {
    Avatar,
    ContactInfo,
    Chip,
    PageTextContent,
    PageContainer,
    ContactForm,
    PageBanner
  }
})
export default class About extends AppComponent {
  // get skills(): Skill[] {
  //   return this.$store.getters.skills
  // }
  get eduChips() {
    return this.$store.getters.eduChips
  }

  get technologies(): Technology[] {
    return this.$store.getters['technologies/technologies']
  }

  created() {
    Technology.fetchAll()
  }
}
</script>

<style scoped></style>
