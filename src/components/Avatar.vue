<template>
  <div v-if="style" class="elevation-5">
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
  background-image: url('../assets/profilepic-cutout.png');
  /* background-color: #0077b6; */
  background-color: #efefef;
  background-repeat: no-repeat;
  /* border-radius: 10%; */
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-position: -50px;
}
</style>
