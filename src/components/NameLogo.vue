<template>
  <div>
    <v-layout
      justify-start
      class="cursor-pointer-on-hover"
      @click.stop="routeTo('landingPage')"
    >
      <h1 class="text-h5 grayText--text">MICHAEL</h1>
      <h1 class="text-h5 grayText--text font-weight-bold">MUDGE</h1>
    </v-layout>
    <div class="red2" style="height: 3px; margin-top: -3px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component({
  components: {}
})
export default class NameLogo extends AppComponent {}
</script>

<style scoped></style>
