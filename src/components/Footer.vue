<template>
  <v-footer app color="backgroundGray">
    <v-container>
      <v-layout align-center justify-space-between wrap>
        <v-flex flex-shrink>
          <p :class="`{ smAndDown ? 'text-center pb-5' : '' } mb-0`">
            Michael Mudge Copyright {{ year }}, all rights reserved.
          </p>
        </v-flex>

        <v-flex flex-shrink>
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
}
</script>
