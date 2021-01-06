<template>
  <div>
    <template v-if="smAndDown">
      <v-btn
        color="white2"
        x-large
        class="mobile-hamburger"
        @click.stop="showDrawer = !showDrawer"
        dark
      >
        <v-icon color="red lighten-1">fas fa-bars</v-icon>
      </v-btn>

      <v-navigation-drawer
        v-model="showDrawer"
        temporary
        fixed
        class="py-10 px-5"
        color="white3"
      >
        <div>
          <div
            @click.stop="routeTo('landingPage')"
            style="width: fit-content;"
            class="mx-auto"
          >
            <v-layout align-center justify-center>
              <h1 class="text-h6 grayText--text">MICHAEL</h1>
              <h1 class="text-h6 grayText--text font-weight-bold">MUDGE</h1>
            </v-layout>
            <div style="height: 4px; background-color: #E53935;"></div>
          </div>
        </div>
        <v-layout column>
          <v-btn
            to="/projects"
            text
            color="darkGray"
            x-large
            class="mt-5 font-weight-bold"
            >Projects</v-btn
          >
          <v-btn
            to="/about"
            text
            color="darkGray"
            x-large
            class="mt-5 font-weight-bold"
            >About</v-btn
          >

          <template v-if="loggedInUser">
            <v-btn
              to="/admin"
              text
              color="darkGray"
              class="mt-5 font-weight-bold"
              x-large
              >Admin</v-btn
            >
            <v-btn
              @click.stop="signOutUser"
              text
              class="mt-5 font-weight-bold"
              color="darkGray"
              x-large
              >Log out</v-btn
            >
          </template>
          <template v-else>
            <v-btn
              to="/login"
              text
              color="darkGray"
              class="mt-5 font-weight-bold"
              x-large
              >Login</v-btn
            >
          </template>
        </v-layout>

        <Social class="mt-10" />
      </v-navigation-drawer>
    </template>

    <template v-if="mdAndUp">
      <v-app-bar app color="white2" elevate-on-scroll height="112px">
        <v-layout align-center justify-space-between class="app-nav-bar">
          <v-flex shrink>
            <!-- <div>
              <v-layout
                justify-start
                class="cursor-pointer-on-hover"
                @click.stop="routeTo('landingPage')"
              >
                <h1 class="text-h5 grayText--text">MICHAEL</h1>
                <h1 class="text-h5 grayText--text font-weight-bold">MUDGE</h1>
              </v-layout>
              <div class="red2" style="height: 4px; margin-top: -3px;"></div>
            </div> -->
            <NameLogo />
          </v-flex>

          <v-flex shrink>
            <v-layout>
              <v-btn
                to="/projects"
                text
                color="grayText"
                x-large
                class="font-weight-bold"
                >Projects</v-btn
              >
              <v-btn
                to="/about"
                text
                color="grayText"
                x-large
                class="font-weight-bold"
                >About</v-btn
              >

              <template v-if="loggedInUser">
                <v-btn
                  to="/admin"
                  text
                  color="grayText"
                  class="font-weight-bold"
                  x-large
                  >Admin</v-btn
                >
                <v-btn
                  @click.stop="signOutUser"
                  text
                  color="grayText"
                  class="font-weight-bold"
                  x-large
                  >Log out</v-btn
                >
              </template>
              <template v-else>
                <v-btn
                  to="/login"
                  text
                  color="grayText"
                  class="font-weight-bold"
                  x-large
                  >Login</v-btn
                >
              </template>
              <Social />
            </v-layout>
          </v-flex>
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
import NameLogo from '@/components/NameLogo.vue'

@Component({
  components: {
    Social,
    NameLogo
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

.app-nav-bar {
  /* max-width: 1170px;
  margin: 0 auto; */
  padding: 0px 116px;
}
</style>
