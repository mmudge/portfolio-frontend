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

      <div
        :style="centerdContent ? centeredContentStyle : landingPageStyle"
        class="cover-content"
      >
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
  @Prop() centerContent!: boolean

  get centeredContentStyle(): string {
    return (
      'display: flex; justify-content: center; align-items: center;' +
      ' ' +
      this.heightStyle
    )
  }

  get landingPageStyle(): string {
    let styleString = 'display: flex; align-items: center;'
    if (this.mdAndUp) {
      styleString += ' padding: 0px 132px;'
    }
    return styleString + ' ' + this.heightStyle
  }

  get heightStyle(): string {
    if (this.smAndDown) {
      return 'height: 100vh;'
    } else if (this.fullScreen) {
      return 'height: calc(100vh - 112px);'
    } else {
      return 'height: 55vh;'
    }
  }

  get bgImage(): string {
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
  background-color: #efefef;
  background-image: url('../assets/typing2.jpg');
  background-blend-mode: luminosity;
}

.laptop-bg .image-overlay {
  opacity: 0.7;
}

.typing-bg {
  background-color: #efefef;
  background-image: url('../assets/typing-bg.jpg');
  background-blend-mode: luminosity;
}

.typing-bg .image-overlay {
  opacity: 0.825;
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
}

.cover-content {
  position: relative;
}

.cover-content > div {
  /* height: 100%; */
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing-page {
  display: flex;
  align-items: center;
  padding: 0px 132px;
}
</style>
