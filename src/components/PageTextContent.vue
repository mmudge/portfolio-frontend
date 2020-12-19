<template>
  <div>
    <h2 class="pb-4 darkGray--text">
      <slot name="title" />
    </h2>

    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PageTextContent extends Vue {}
</script>
