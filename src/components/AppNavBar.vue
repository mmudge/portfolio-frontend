<template>
  <v-app-bar app color="blue darken-4" dark clipped-left>
    <!-- <v-icon class="hidden-md-and-up" @click="toggleShowDrawer">menu</v-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn dark text to="/">
        <v-toolbar-title>{{ appName }}</v-toolbar-title>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn to="/menu" text class="hidden-sm-and-down">Menu</v-btn>

      <v-btn to="/about" text class="hidden-sm-and-down">About us</v-btn>
      <v-btn class="red lighten-3 hidden-sm-and-down">Order now</v-btn> -->

    <!-- <v-icon class="" @click="toggleShowDrawer">menu</v-icon> -->
    <!-- <v-spacer class=""></v-spacer> -->
    <v-btn dark text to="/">
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
    </v-btn>

    <v-spacer></v-spacer>
    <v-btn to="/projects" text>Projects</v-btn>
    <v-btn to="/about" text>About</v-btn>
    <template v-if="loggedInUser">
      <v-btn @click.stop="signOutUser" text>Log out</v-btn>
    </template>
    <template v-else>
      <v-btn to="/login" text>Login</v-btn>
      <v-btn to="/sign_up" text>Sign up</v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import User from '@/models/User'

@Component
export default class AppNavBar extends AppComponent {
  showDrawer = true
  navDropItems = [{ title: 'Menu' }, { title: 'About' }]

  get appName() {
    return this.$store.getters.appName
  }

  toggleShowDrawer(): void {
    this.showDrawer = !this.showDrawer
  }

  async signOutUser() {
    await User.signOut()
    this.$router.push({ name: 'login' })
  }
}
</script>
