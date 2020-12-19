<template>
  <div>
    <div v-for="info in contactInfo" :key="info.title" class="pb-3">
      <v-layout
        align-center
        justify-start
        class="pb-1 cursor-pointer-on-hover"
        @click.stop="info.run()"
      >
        <v-icon medium :color="info.color" class="mr-3">{{ info.icon }}</v-icon>
        <p class="mb-0 title font-weight-regular">{{ info.content }}</p>
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
      content: '951-323-1876',
      icon: 'fas fa-phone-square-alt',
      color: 'blue darken-2',
      run: () => this.copyToClipboard('951-323-1876')
    },
    {
      title: 'Location',
      content: 'Southern California',
      icon: 'far fa-compass',
      color: 'light-blue darken-1',
      run: () => this.copyToClipboard('Southern California')
    }
  ]
}
</script>
