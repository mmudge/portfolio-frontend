<template>
  <v-container fluid :style="containerStyle">
    <slot name="content" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class PageContainer extends AppComponent {
  @Prop({ default: '#fafafa' }) bgColor!: string

  get containerStyle() {
    if (this.lgAndUp) {
      return `padding-left: 250px; padding-right: 250px; padding-top: 200px; padding-bottom: 200px; background-color: ${this.bgColor}`
    } else if (this.md) {
      return `padding-left: 100px; padding-right: 100px; padding-top: 200px; padding-bottom: 200px; background-color: ${this.bgColor}`
    } else {
      return `padding-left: 25px; padding-right: 25px; padding-top: 200px; padding-bottom: 200px; background-color: ${this.bgColor}`
    }
  }
}
</script>

<style scoped></style>
