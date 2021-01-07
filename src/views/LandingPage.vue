<template>
  <div>
    <PageBanner :fullScreen="true" :imageName="'laptop'">
      <template v-slot:content>
        <div :class="smAndDown ? 'text-center' : ''">
          <h1
            :class="
              `${
                smAndDown ? 'text-h3' : 'text-h2'
              } grayText--text font-weight-bold mb-0`
            "
          >
            WEB DEVELOPER
          </h1>

          <h2
            :class="
              `${
                smAndDown ? 'text-h6' : 'text-h5 pt-3'
              } grayText--text font-weight-light mb-0`
            "
          >
            Full Stack - Front End - UI/UX Design
          </h2>
          <v-layout class="mt-10" wrap>
            <v-btn
              color="red2"
              dark
              :class="`${mdAndUp ? 'mr-3' : 'mb-5'} font-weight-bold`"
              x-large
              :block="smAndDown"
              :to="{ name: 'projects' }"
            >
              <v-icon class="mr-3">fas fa-long-arrow-alt-right</v-icon>

              Projects</v-btn
            >

            <v-btn
              color="grayText"
              outlined
              :class="`${mdAndUp ? '' : ''}`"
              :block="smAndDown"
              x-large
              href="#contact-form"
            >
              Contact me</v-btn
            >
          </v-layout>
        </div>
      </template>
    </PageBanner>

    <PageContainer :style="mdAndUp ? '' : ''">
      <template v-slot:content>
        <v-layout align-center :wrap="smAndDown">
          <v-flex shrink :class="smAndDown ? 'mx-auto' : ''">
            <Avatar :size="300" :showRedBg="true" />
          </v-flex>
          <v-flex :class="smAndDown ? 'pt-16' : ''">
            <div class="mx-auto" :style="mdAndUp ? 'max-width: 60%;' : ''">
              <p class="text-h3 grayText--text">
                Hello, I'm Mike!
              </p>
              <p class="text-h6 font-weight-regular grayText--text">
                I'm a software developer who specializes in building web
                applications and custom websites. Let's build something
                together!
              </p>
              <SendMessageButton :anchor="'contact-form'" />
            </div>
          </v-flex>
        </v-layout>
      </template>
    </PageContainer>

    <PageContainer :bgColor="'#f5f5f5'" :style="mdAndUp ? '' : ''">
      <template v-slot:content>
        <div class="mx-auto text-center">
          <p class="body-2 mb-0 mediumGray--text">My favorite and most used</p>
          <h1 class="text-h4 font-weight-bold grayText--text">TECHNOLOGIES</h1>
        </div>
        <v-layout align-center class="pt-16" wrap>
          <template v-for="card in skillCards">
            <v-flex
              sm12
              md4
              :class="mdAndUp ? 'pr-1' : 'pb-5'"
              :key="card.title"
            >
              <LandingPageSkillCard :cardInfo="card" />
            </v-flex>
          </template>
        </v-layout>
      </template>
    </PageContainer>

    <PageContainer id="contact-form">
      <template v-slot:content>
        <ContactForm />
      </template>
    </PageContainer>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import User from '@/models/User'
import Project from '@/models/Project'
import Avatar from '@/components/Avatar.vue'
import PageContainer from '@/components/PageContainer.vue'
import AppComponent from '@/components/AppComponent'
import ContactForm from '@/components/ContactForm.vue'
import LandingPageSkillCard from '@/components/LandingPageSkillCard.vue'
import SendMessageButton from '@/components/SendMessageButton.vue'
import PageBanner from '@/components/PageBanner.vue'

@Component({
  components: {
    Avatar,
    PageContainer,
    ContactForm,
    LandingPageSkillCard,
    SendMessageButton,
    PageBanner
  }
})
export default class LandingPage extends AppComponent {
  skillCards: any[] = [
    {
      title: 'JAVASCRIPT',
      icons: ['fab fa-js'],
      text: 'My favorite language for bringing data to life!',
      skills: ['TypeScript', 'Vue JS', 'Cesium JS']
    },
    {
      title: 'RUBY ON RAILS',
      icons: ['fas fa-laptop-code'],
      text: 'Turn your idea into a business, fast!',
      skills: ['Ruby', 'Rspec', 'Devise']
    },
    {
      title: 'WEB DESIGN',
      icons: ['fab fa-html5', 'fab fa-css3-alt'],
      text: 'Great for designing amazing user experiences!',
      skills: ['HTML5', 'CSS3', 'Mobile Responsive']
    }
  ]

  signInUser() {
    this.$router.push({ name: 'login' })
  }
}
</script>

<style>
.x-wide {
  padding-left: 100px !important;
  padding-right: 100px !important;
}
</style>
