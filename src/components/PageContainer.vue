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
      return 'padding-left: 250px; padding-right: 250px;'
    } else if (this.md) {
      return 'padding-left: 100px; padding-right: 100px;'
    } else {
      return 'padding-left: 50px; padding-right: 50px;'
    }
  }
}
</script>

<style scoped></style>
