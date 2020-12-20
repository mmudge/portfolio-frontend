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

<style></style>
