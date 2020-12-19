<template>
  <div>
    <AppNavBar />
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppNavBar from '@/components/AppNavBar.vue'

@Component({
  components: {
    AppNavBar
  }
})
export default class ContentWrapper extends Vue {}
</script>

<style></style>
