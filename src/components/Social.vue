<template>
  <v-layout justify-center align-center>
    <template v-for="s in socialLinks">
      <v-btn
        color="grayText"
        :class="extraMargin ? 'mr-5' : 'mr-1'"
        :href="s.link"
        :key="s.icon"
        icon
      >
        <v-icon>{{ s.icon }}</v-icon>
      </v-btn>
    </template>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Social extends Vue {
  @Prop() color!: string
  @Prop() extraMargin!: boolean

  socialLinks: any[] = [
    {
      text: 'GitLab',
      icon: 'fab fa-gitlab',
      // color: "#2962ff",
      link: 'https://gitlab.com/mmudge'
    },
    {
      text: 'GitHub',
      icon: 'fab fa-github',
      // color: "#673ab7",
      link: 'https://github.com/mmudge'
    },
    {
      text: 'LinkedIn',
      icon: 'fab fa-linkedin',
      // color: "#09FDD9",
      link: 'https://www.linkedin.com/in/michaeltmudge/'
    }
  ]
}
</script>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
}
</style>
