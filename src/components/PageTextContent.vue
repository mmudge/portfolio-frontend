<template>
  <div :style="containerStyle">
    <h2 class="pb-4 darkGray--text page-text-title font-weight-bold">
      <slot name="title" />
    </h2>

    <div class="page-text-content darkGray--text">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component
export default class PageTextContent extends AppComponent {
  get containerStyle() {
    if (this.xl) {
      return `padding-left: 150px; padding-right: 150px;`
    } else if (this.lg) {
      return `padding-left: 100px; padding-right: 100px;`
    } else if (this.md) {
      return `padding-left: 50px; padding-right: 50px;`
    } else {
      return `padding-left: 5px; padding-right: 5px;`
    }
  }
}
</script>

<style lang="css">
.page-text-content > * {
  font-size: 20px;
}

.page-text-title {
  font-size: 18px;
}
</style>
