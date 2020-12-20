<template>
  <v-footer app color="backgroundGray" class="text--darkText">
    <v-container>
      <v-layout align-center justify-space-around wrap>
        <v-flex shrink>
          <p :class="`${smAndDown ? 'text-center pb-5' : ''} mb-0`">
            Michael Mudge Copyright
            {{ year }}, all rights reserved.
          </p>
        </v-flex>

        <v-flex shrink>
          <p @click="copyEmailToClipBoard" class="mb-0 cursor-pointer-on-hover">
            michaeltmudge@gmail.com
          </p>
        </v-flex>

        <v-flex shrink>
          <Social />
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Social from '@/components/Social.vue'
import AppComponent from '@/components/AppComponent'

@Component({
  components: {
    Social
  }
})
export default class Footer extends AppComponent {
  get year() {
    return new Date().getFullYear()
  }

  copyEmailToClipBoard() {
    this.copyToClipboard('michaeltmudge@gmail.com')
  }
}
</script>
