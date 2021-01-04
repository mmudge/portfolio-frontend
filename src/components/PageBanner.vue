<template>
  <div>
    <v-container
      fluid
      :class="`${smAndDown ? 'px-5' : ''} pa-0`"
      :style="heightStyle"
    >
      <div :style="heightStyle" :class="`${bgImage} cover-image`">
        <div class="image-overlay"></div>
      </div>

      <div :style="heightStyle" class="cover-content">
        <slot name="content" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'

@Component({
  components: {}
})
export default class PageBanner extends AppComponent {
  @Prop() fullScreen!: boolean
  @Prop() imageName!: string

  get heightStyle() {
    if (this.smAndDown) {
      return 'height: 100vh;'
    } else if (this.fullScreen) {
      return 'height: calc(100vh - 112px);'
    } else {
      return 'height: 55vh;'
    }
  }

  get bgImage() {
    if (this.imageName === 'laptop') {
      return 'laptop-bg'
    } else {
      return 'typing-bg'
    }
  }
}
</script>

<style>
.laptop-bg {
  background-image: url('../assets/laptop.jpg');
}

.typing-bg {
  background-image: url('../assets/typing-bg.jpg');
}
.cover-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.image-overlay {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  opacity: 0.825;
}

.cover-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
