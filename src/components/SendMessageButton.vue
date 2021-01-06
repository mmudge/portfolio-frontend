<template>
  <v-btn
    color="red2"
    :href="anchor ? `#${anchor}` : ''"
    class="font-weight-bold"
    dark
  >
    <v-icon small class="mr-3">far fa-envelope</v-icon>Send me a message
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component({
  components: {}
})
export default class SendMessageButton extends AppComponent {
  @Prop() anchor!: string
}
</script>

<style scoped></style>
