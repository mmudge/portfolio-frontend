<template>
  <v-container :style="containerStyle">
    <slot name="content" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class PageContainer extends AppComponent {
  get containerStyle() {
    if (this.lgAndUp) {
      return 'padding-left: 250px; padding-right: 250px; padding-top: 150px;'
    } else if (this.md) {
      return 'padding-left: 100px; padding-right: 100px; padding-top: 150px;'
    } else {
      return 'padding-left: 25px; padding-right: 25px; padding-top: 150px;'
    }
  }
}
</script>

<style scoped></style>
