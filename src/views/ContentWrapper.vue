<template>
  <div>
    <h1>nav bar here</h1>
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContentWrapper extends Vue {}
</script>

<style></style>
