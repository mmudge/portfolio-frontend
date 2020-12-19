<template>
  <v-btn
    :color="color ? color : 'light-blue lighten-1'"
    outlined
    class="cursor-pointer-on-hover"
  >
    <v-icon v-if="icon" small fab class="mr-2">{{ icon }}</v-icon>
    <p class="mb-0 font-weight-bold">{{ text }}</p>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Chip extends Vue {
  @Prop() color!: string
  @Prop() icon!: string
  @Prop() text!: string
}
</script>

<style scoped></style>
