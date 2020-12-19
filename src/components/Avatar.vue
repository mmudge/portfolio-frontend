<template>
  <div v-if="height && width">
    <div id="avatar" :style="style"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Avatar extends Vue {
  @Prop() height!: number
  @Prop() width!: number

  get style() {
    if (this.height && this.width) {
      return `height: ${this.height}px; width: ${this.width}px;`
    } else {
      return ''
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
