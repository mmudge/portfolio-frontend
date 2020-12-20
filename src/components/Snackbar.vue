<template>
  <v-snackbar bottom v-model="showSnackbar" :color="color" :timeout="3000">
    {{ text }}
    <v-btn color="white" text @click="showSnackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'

@Component
export default class Snackbar extends Vue {
  showSnackbar = false
  text: string = ''
  color: string = ''

  created() {
    store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'setSnackbar':
          this.showSnackbar = true

          this.text = state.snackbar.text
          this.color = state.snackbar.color
          break
      }
    })
  }
}
</script>
