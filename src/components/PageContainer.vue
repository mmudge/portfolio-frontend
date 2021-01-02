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
    if (this.xl) {
      return `padding-left: 350px; padding-right: 350px; padding-top: 200px; padding-bottom: 150px; background-color: ${this.bgColor}`
    } else if (this.lg) {
      return `padding-left: 275px; padding-right: 275px; padding-top: 150px; padding-bottom: 150px; background-color: ${this.bgColor}`
    } else if (this.md) {
      return `padding-left: 100px; padding-right: 100px; padding-top: 150px; padding-bottom: 150px; background-color: ${this.bgColor}`
    } else {
      return `padding-left: 25px; padding-right: 25px; padding-top: 150px; padding-bottom: 150px; background-color: ${this.bgColor}`
    }
  }
}
</script>

<style scoped></style>
