<template>
  <div id="content-wrapper">
    <AppNavBar />
    <v-main class="mb-10">
      <router-view> </router-view>
    </v-main>
    <Footer class="mt-16" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppNavBar from '@/components/AppNavBar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    AppNavBar,
    Footer
  }
})
export default class ContentWrapper extends Vue {}
</script>

<style>
#content-wrapper {
  background-color: #f4f7f5;
  min-height: 100vh;
  font-family: 'Oxygen', sans-serif;
}

.cursor-pointer-on-hover:hover {
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
  color: #202030;
}
</style>
