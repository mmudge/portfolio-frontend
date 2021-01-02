<template>
  <div>
    <v-container
      fluid
      :class="`${smAndDown ? 'px-5' : ''} main-content-container pa-0`"
    >
      <div class="cover-image">
        <div class="image-overlay"></div>
      </div>
      <div class="cover-content text-center">
        <v-layout v-if="smAndDown" align-center justify-center class="pb-16">
          <h1 class="text-h4 blackText1--text">MICHAEL</h1>
          <h1 class="text-h4 blackText1--text font-weight-bold">MUDGE</h1>
        </v-layout>
        <v-layout align-center justify-center wrap>
          <v-flex shrink>
            <p
              :class="
                `${
                  smAndDown ? 'text-h3' : 'text-h1'
                } blackText1--text font-weight-bold text-center mb-0`
              "
            >
              WEB DEVELOPER
            </p>

            <p
              :class="
                `${
                  smAndDown ? 'text-h5' : 'text-h3'
                } mb-0 black2--text font-weight-bold pt-5`
              "
            >
              Full Stack - Front End - UX/UI Design
            </p>

            <v-layout justify-center wrap :class="`pt-10`">
              <v-btn
                color="red lighten-1"
                tile
                dark
                :class="`${mdAndUp ? 'mr-3 x-wide' : 'mb-5'} font-weight-bold`"
                x-large
                :block="smAndDown"
                :to="{ name: 'projects' }"
                >Projects</v-btn
              >
              <v-btn
                color="blackText1"
                tile
                outlined
                :class="`${mdAndUp ? 'x-wide' : ''}`"
                :block="smAndDown"
                x-large
                href="#contact-form"
              >
                Contact me</v-btn
              >
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <PageContainer :style="mdAndUp ? '' : ''">
      <template v-slot:content>
        <v-layout align-center :wrap="smAndDown">
          <v-flex shrink :class="smAndDown ? 'mx-auto' : ''">
            <Avatar :size="300" />
          </v-flex>
          <v-flex :class="smAndDown ? 'pt-10' : ''">
            <div class="mx-auto" :style="mdAndUp ? 'max-width: 60%;' : ''">
              <p class="text-h3">
                Hello, I'm Mike!
              </p>
              <p class="text-h6 font-weight-regular">
                I'm a software developer who specializes in building web
                applications and custom websites. Let's build something
                together!
              </p>
              <v-btn
                color="red lighten-1"
                href="#contact-form"
                class="font-weight-bold"
                dark
                small
                tile
              >
                <v-icon small class="mr-3">far fa-envelope</v-icon>Send me a
                message
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </template>
    </PageContainer>

    <PageContainer :bgColor="'#f5f5f5'" :style="mdAndUp ? '' : ''">
      <template v-slot:content>
        <div class="mx-auto text-center">
          <p class="body-1 mb-0">My favorite and most used</p>
          <h1 class="text-h3 font-weight-medium">Technologies</h1>
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

@Component({
  components: {
    Avatar,
    PageContainer,
    ContactForm,
    LandingPageSkillCard
  }
})
export default class LandingPage extends AppComponent {
  skillCards: any[] = [
    {
      title: 'JavaScript',
      icon: 'fab fa-js',
      text: 'My favorite coding language for bringing data to life',
      skills: ['TypeScript', 'Vue JS', 'Cesium JS']
    },
    {
      title: 'Ruby on Rails',
      icon: 'fas fa-code',
      text: 'Great for getting projects up and running fast',
      skills: ['Ruby', 'Rspec', 'Devise']
    },
    {
      title: 'Web Design',
      icon: 'fas fa-code',
      text: 'Express yourself with your own personal style',
      skills: ['HTML5', 'CSS3', 'Mobile Responsive']
    }
  ]

  signInUser() {
    this.$router.push({ name: 'login' })
  }

  fetchProjects() {
    Project.fetchAll()
  }

  clearLocalStorage() {
    console.log('local storage token before clear', localStorage.token)
    localStorage.removeItem('token')
    console.log('local storage token after clear', localStorage.token)
  }
}
</script>

<style>
.x-wide {
  padding-left: 100px !important;
  padding-right: 100px !important;
}

.md-padding {
  padding: 150px 100px;
}

.sm-padding {
  padding: 150px 0 150px 0;
}

.main-content-container {
  height: calc(100vh - 64px);
}

.cover-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/laptop.jpg');
  height: calc(100vh - 64px);
  filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.image-overlay {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  opacity: 0.6;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 64px); */
}

.cover-content {
  padding-top: 150px;
  position: relative;
}
</style>
