<template>
  <div>
    <h2 class="pb-4 darkText--text page-text-title font-weight-bold">
      <slot name="title" />
    </h2>

    <div class="page-text-content darkText--text">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PageTextContent extends Vue {}
</script>

<style lang="css">
.page-text-content > * {
  font-size: 20px;
}

.page-text-title {
  font-size: 18px;
}
</style>
