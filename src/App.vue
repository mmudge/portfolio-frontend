<template>
  <v-app>
    <Snackbar />
    <router-view> </router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Snackbar from '@/components/Snackbar.vue'

@Component({
  components: {
    Snackbar
  }
})
export default class App extends Vue {}
</script>

<style>
.v-application .text-h1,
.v-application .text-h2,
.v-application .text-h3,
.v-application .text-h4,
.v-application .text-h5,
.v-application .text-h6,
.v-application .body-1,
.v-application .body-2 {
  font-family: 'Oxygen', sans-serif !important;
}
</style>
