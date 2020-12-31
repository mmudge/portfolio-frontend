<template>
  <div>
    <v-container v-if="mdAndUp" class="landing-page darkText--text px-10">
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
    </v-container>

    <PageContainer v-if="smAndDown">
      <template v-slot:content>
        <p>Hello! I'm Mike</p>
        <p class="primary--text">a <strong>web developer</strong></p>
        <p>based in southern california.</p>
        <v-btn
          color="accent"
          class="mt-5"
          large
          block
          :to="{ name: 'projects' }"
          >Projects</v-btn
        >
        <v-btn
          color="primary"
          class="mt-5"
          outlined
          large
          block
          :to="{ name: 'about' }"
          >About me</v-btn
        >
      </template>
    </PageContainer>

    <PageContainer class="my-16">
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
  padding-left: 100px !important;
  padding-right: 100px !important;
}
</style>
