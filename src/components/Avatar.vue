<template>
  <div style="position: relative;">
    <div id="avatar-bg" class=""></div>
    <div v-if="style" style="position: relative;" class="elevation-10">
      <div id="avatar" :style="style"></div>
    </div>
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

#avatar-bg {
  /* background-color: #efefef; */
  width: 0px;
  height: 0px;
  border-top: 160px solid transparent;
  border-right: 160px solid transparent;
  border-left: 160px solid #e53935;
  border-bottom: 160px solid #e53935;
  border-radius: 2px;
  position: absolute;
  /* background-color: #e53935; */
  bottom: -35px;
  left: -35px;
}
</style>
