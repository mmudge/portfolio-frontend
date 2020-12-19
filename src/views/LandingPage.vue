<template>
  <div class="landing-page darkText--text">
    <v-container>
      <v-card class="pa-10">
        <v-layout justify-center align-center style="background-color: white;">
          <div class="text-center pa-5">
            <p class="mb-0 py-2 headline">
              Welcome!
            </p>
            <p class="display-1 py-5 mb-0">
              I'm Mike, a software developer with a passion for coding and
              design.
            </p>
          </div>
        </v-layout>
        <v-layout justify-center align-center>
          <v-btn
            color="primary"
            outlined
            class="mr-3"
            :to="{ name: 'projects' }"
            >Projects</v-btn
          >
          <v-btn color="primary" outlined class="mr-3" :to="{ name: 'about' }"
            >About me</v-btn
          >
          <v-btn color="primary" outlined @click.stop="signInUser">Login</v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '@/models/User'
import Project from '@/models/Project'

@Component
export default class LandingPage extends Vue {
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
  background-color: #fafafa;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
