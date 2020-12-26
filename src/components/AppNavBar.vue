<template>
  <v-app-bar
    app
    color="backgroundGray"
    :height="navBarHeight"
    elevate-on-scroll
  >
    <v-layout align-center justify-center>
      <v-btn to="/" text color="primary" x-large class="mr-10">
        <v-icon large>fab fa-creative-commons-sampling</v-icon></v-btn
      >
      <v-btn to="/projects" text color="primary" x-large class="mr-10"
        >Projects</v-btn
      >
      <v-btn to="/about" text color="primary" x-large class="mr-10"
        >About</v-btn
      >

      <template v-if="loggedInUser">
        <v-btn to="/admin" text color="primary" class="mr-10" x-large
          >Admin</v-btn
        >
        <v-btn @click.stop="signOutUser" text color="primary" x-large
          >Log out</v-btn
        >
      </template>
      <template v-else>
        <v-btn to="/login" text color="primary" x-large>Login</v-btn>
      </template>
    </v-layout>
  </v-app-bar>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import User from '@/models/User'

@Component
export default class AppNavBar extends AppComponent {
  showDrawer: boolean = true
  navDropItems = [{ title: 'Menu' }, { title: 'About' }]

  get appName() {
    return this.$store.getters.appName
  }

  get navBarHeight() {
    return this.$store.getters.navBarHeight
  }

  async signOutUser() {
    await User.signOut()
    this.$router.push({ name: 'login' })
  }
}
</script>

<style lang="css"></style>
