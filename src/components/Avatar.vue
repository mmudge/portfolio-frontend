<template>
  <div style="position: relative;">
    <div v-if="showRedBg" id="avatar-bg" :style="redTriangleStyle"></div>
    <div v-if="style" style="position: relative;" class="elevation-10">
      <div id="avatar" :style="style"></div>
    </div>
    <div class="avatar-overlay"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Avatar extends Vue {
  @Prop() size!: number
  @Prop() showRedBg!: boolean

  get style(): string | null {
    if (this.size) {
      return `height: ${this.size}px; width: ${this.size}px;`
    } else {
      return null
    }
  }

  get redTriangleStyle(): string {
    return ''
    // if (this.size) {
    //   const borderSize: number = this.size * 0.59
    //   const offset: number = this.size * 0.116
    //   // return `border-top: ${borderSize}px solid transparent; border-right: ${borderSize}px solid transparent; border-left: ${borderSize}px solid #e53935; border-bottom: ${borderSize}px solid #e53935; bottom: -${offset}px; left: -${offset}px;`
    //   return `border-top: ${borderSize}px solid transparent; border-right: ${borderSize}px solid transparent; border-left: ${borderSize}px solid #DF2F4D; border-bottom: ${borderSize}px solid #DF2F4D; bottom: -${offset}px; left: -${offset}px;`
    // } else {
    //   return ''
    // }
  }
}
</script>

<style scoped>
#avatar {
  /* background-image: url('../assets/profilepic-cutout.png'); */
  background-image: url('../assets/profilepic.jpg');
  background-color: #efefef;
  background-repeat: no-repeat;
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-position: -50px;
  /* border: 4px solid #2e404c; */
  border-radius: 2px;
}

#avatar-bg {
  width: 0px;
  height: 0px;
  border-radius: 2px;
  position: absolute;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
