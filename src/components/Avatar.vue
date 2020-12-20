<template>
  <div v-if="style">
    <div id="avatar" :style="style"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Avatar extends Vue {
  @Prop() size!: number

  get style(): string | null {
    if (this.size) {
      return `height: ${this.size}px; width: ${this.size}px;`
    } else {
      return null
    }
  }
}
</script>

<style scoped>
#avatar {
  background-image: url('../assets/profilepic.jpg');
  background-repeat: no-repeat;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-position: -50px;
}
</style>
