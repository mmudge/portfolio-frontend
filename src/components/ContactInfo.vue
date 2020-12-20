<template>
  <div>
    <div
      v-for="(info, index) in contactInfo"
      :key="info.title"
      class="pb-2 darkText--text"
    >
      <v-layout
        align-center
        justify-start
        class="pb-1 cursor-pointer-on-hover"
        @click.stop="info.run()"
      >
        <v-icon medium :color="info.color" class="mr-3 d-none">{{
          info.icon
        }}</v-icon>

        <p
          :class="
            `${
              index === 0 ? 'display-1 font-weight-bold' : 'title '
            } mb-0 font-weight-regular`
          "
        >
          {{ info.content }}
        </p>
      </v-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
@Component
export default class ContactInfo extends AppComponent {
  contactInfo: any[] = [
    {
      title: 'Name',
      content: 'Michael Mudge',
      icon: 'far fa-user-circle',
      color: 'light-blue darken-1',
      run: () => this.copyToClipboard('Michael Mudge')
    },
    {
      title: 'Email',
      content: 'michaeltmudge@gmail.com',
      icon: 'fas fa-envelope-open-text',
      color: 'light-blue darken-1',
      run: () => this.copyToClipboard('michaeltmudge@gmail.com')
    },
    {
      title: 'Phone',
      content: '951 323 1876',
      icon: 'fas fa-phone-square-alt',
      color: 'blue darken-2',
      run: () => this.copyToClipboard('951-323-1876')
    },
    {
      title: 'Location',
      content: 'San Clemente, California',
      icon: 'far fa-compass',
      color: 'light-blue darken-1',
      run: () => this.copyToClipboard('San Clemente, California')
    }
  ]
}
</script>
