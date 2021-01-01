<template>
  <div>
    <!-- <v-container v-if="mdAndUp" class="landing-page darkText--text px-10">
      <v-card color="#F5F5F5" class="py-10" flat>
        <v-layout align-center justify-center class="py-10">
          <v-flex shrink class="px-10">
            <v-layout align-baseline>
              <p class="mb-0 hello-text primary--text font-weight-bold">
                Hello!
              </p>
              <p class="mb-0 pl-3 lightGrayText--text">I am</p>
            </v-layout>
            <h1 class="title-text dartText--text">Michael Mudge</h1>
            <v-layout align-baseline>
              <p class="mb-0 pr-5 lightGrayText--text">a</p>
              <div>
                <h2 class="sub-title-text primary--text">web developer</h2>
                <div class="yellow-underline"></div>
              </div>
            </v-layout>
            <v-layout align-baseline justify-center class="pt-3">
              <p class="mb-0 pr-2 lightGrayText--text">based in</p>
              <h3 class="main-text darkText--text">
                Southern California
              </h3>
            </v-layout>
            <v-layout class="pt-10" justify-center>
              <v-btn
                color="accent"
                class="mr-5 x-wide"
                x-large
                :to="{ name: 'projects' }"
                >Projects</v-btn
              >
              <v-btn
                color="primary"
                outlined
                class="x-wide"
                x-large
                :to="{ name: 'about' }"
                >About me</v-btn
              >
            </v-layout>
          </v-flex>
          <v-flex shrink class="px-10">
            <v-layout justify-center align-center>
              <Avatar :size="300" />
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container> -->

    <v-container
      :class="`${mdAndUp ? 'md-padding' : 'px-5 sm-padding text-center'}`"
    >
      <v-layout wrap>
        <div>
          <p class=" mb-0 text-h2 white--text font-weight-medium">
            Let's build something
          </p>
          <p class="text-h2 white--text font-weight-medium">
            together!
          </p>
          <div class="text-h5 mediumGray--text" align-center justify-start>
            <p class="mb-0 text-h3 blue1--text py-2">
              Web Developer
            </p>
            <p class="mb-0">
              Full Stack - Front End - UX/UI Design
            </p>
          </div>

          <v-layout
            class="pt-10"
            :justify-start="mdAndUp"
            :justify-center="smAndDown"
            wrap
          >
            <v-btn
              color="blue1"
              dark
              :class="`${mdAndUp ? 'mr-3 x-wide' : 'mb-5'} font-weight-bold`"
              x-large
              :block="smAndDown"
              :to="{ name: 'projects' }"
              >Projects</v-btn
            >
            <!-- <v-btn
              color="white"
              outlined
              :class="`${mdAndUp ? 'x-wide' : ''}`"
              :block="smAndDown"
              x-large
              :to="{ name: 'about' }"
            >
              <v-icon class="pr-5" small>fas fa-download</v-icon>

              Resume</v-btn
            > -->
            <v-btn
              color="white"
              outlined
              :class="`${mdAndUp ? 'x-wide' : ''}`"
              :block="smAndDown"
              x-large
              href="#contact-form"
            >
              Contact me</v-btn
            >
          </v-layout>
        </div>
        <v-flex shrink class="px-10">
          <v-layout
            :class="`${smAndDown ? 'pt-16' : ''}`"
            justify-center
            align-center
          >
            <Avatar :size="300" />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <PageContainer
      id="contact-form"
      :style="mdAndUp ? 'padding-top: 200px;' : ''"
    >
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

@Component({
  components: {
    Avatar,
    PageContainer,
    ContactForm
  }
})
export default class LandingPage extends AppComponent {
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
.landing-page {
  /* background-color: #fafafa;
  min-height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hello-text {
  font-size: 48px;
}

.title-text {
  font-size: 76px;
  line-height: 0.9;
}

.sub-title-text {
  font-size: 64px;
}

.yellow-underline {
  height: 10px;
  background-color: #f6ae2d;
  margin-top: -30px;
}

.main-text {
  font-size: 24px;
}

.x-wide {
  padding-left: 80px !important;
  padding-right: 80px !important;
}

.md-padding {
  padding-top: 150px;
  padding-left: 100px;
}

.sm-padding {
  padding-top: 150px;
}
</style>
