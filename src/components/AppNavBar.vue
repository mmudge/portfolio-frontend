<template>
  <div>
    <template v-if="smAndDown">
      <v-btn
        color="white"
        x-large
        class="mobile-hamburger"
        @click.stop="showDrawer = !showDrawer"
      >
        <v-icon color="primary">fas fa-bars </v-icon>
      </v-btn>

      <v-navigation-drawer
        v-model="showDrawer"
        temporary
        fixed
        class="py-10 px-5"
      >
        <h1 class="text-center">Michael Mudge</h1>
        <v-layout column>
          <v-btn to="/" text color="primary" x-large class="mt-5">
            <v-icon large>far fa-compass</v-icon>
          </v-btn>

          <v-btn to="/projects" text color="primary" x-large class="mt-5"
            >Projects</v-btn
          >
          <v-btn to="/about" text color="primary" x-large class="mt-5"
            >About</v-btn
          >

          <template v-if="loggedInUser">
            <v-btn to="/admin" text color="primary" class="mt-5" x-large
              >Admin</v-btn
            >
            <v-btn
              @click.stop="signOutUser"
              text
              class="mt-5"
              color="primary"
              x-large
              >Log out</v-btn
            >
          </template>
          <template v-else>
            <v-btn to="/login" text color="primary" class="mt-5" x-large
              >Login</v-btn
            >
          </template>
        </v-layout>

        <Social class="mt-10" />
      </v-navigation-drawer>
    </template>

    <template v-if="mdAndUp">
      <v-app-bar
        app
        color="backgroundGray"
        :height="navBarHeight"
        elevate-on-scroll
      >
        <v-layout align-center justify-center>
          <v-btn to="/" text color="primary" x-large class="mr-10">
            <v-icon large>far fa-compass</v-icon>
          </v-btn>

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
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import User from '@/models/User'
import Social from '@/components/Social.vue'

@Component({
  components: {
    Social
  }
})
export default class AppNavBar extends AppComponent {
  showDrawer: boolean = false
  navDropItems = [{ title: 'Menu' }, { title: 'About' }]

  items: any[] = [{ title: 'nav 1' }, { title: 'nav 2' }, { title: 'nav 3' }]

  navItems: {
    title: string
    run: any
    show?: boolean
    icon?: string
  }[] = [
    {
      title: 'Home',
      run: () => this.routeTo('landingPage'),
      icon: 'far fa-compass'
    },
    {
      title: 'Projects',
      run: () => this.routeTo('projects')
    },
    { title: 'About', run: () => this.routeTo('about') },
    {
      title: 'Admin',
      run: () => this.routeTo('admin')
    },
    {
      title: 'Logout',
      run: () => this.signOutUser()
    },
    {
      title: 'Log in',
      run: () => this.routeTo('login')
    }
  ]

  get getNavItems() {
    return this.navItems.map((item: any) => {
      if (item.title === 'Admin' || item.title === 'Logout') {
        if (this.loggedInUser) {
          const show = { show: true }
          return { ...item, ...show }
        } else {
          const show = { show: false }
          return { ...item, ...show }
        }
      } else if (item.title === 'Log in') {
        if (this.loggedInUser) {
          const show = { show: false }
          return { ...item, ...show }
        } else {
          const show = { show: true }
          return { ...item, ...show }
        }
      } else {
        const show = { show: true }
        return { ...item, ...show }
      }
    })
  }

  get filteredItems() {
    return this.getNavItems.filter((item: any) => item.show)
  }

  //   get selectedMainToolbarItems() {
  //   return this.mainToolbarItems.map((item: any) => {
  //     if (item.name === this.activeTool) {
  //       const selected = { selected: true }
  //       return { ...item, ...selected }
  //     } else {
  //       const notSelected = { selected: false }
  //       return { ...item, ...notSelected }
  //     }
  //   })
  // }

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

  get checkLoggedInUser(): boolean {
    if (this.loggedInUser) {
      return true
    } else {
      return false
    }
  }
}
</script>

<style lang="css">
.mobile-hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;
}
</style>
