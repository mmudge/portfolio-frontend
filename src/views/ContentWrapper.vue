<template>
  <div id="content-wrapper">
    <AppNavBar />
    <v-main class="pb-16">
      <v-slide-x-transition>
        <router-view> </router-view>
      </v-slide-x-transition>
    </v-main>
    <Footer />
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
  /* background-color: #f4f7f5; */
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Oxygen', sans-serif !important;
}

.cursor-pointer-on-hover:hover {
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
  color: #202030;
  font-family: 'Oxygen', sans-serif !important;
}
</style>
