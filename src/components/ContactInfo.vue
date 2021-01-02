<template>
  <div>
    <div :class="`${smAndDown ? 'text-center' : ''}`">
      <div>
        <v-layout v-if="smAndDown" align-center justify-center class="pb-16">
          <h1 class="text-h4 blackText1--text">MICHAEL</h1>
          <h1 class="text-h4 blackText1--text font-weight-bold">MUDGE</h1>
        </v-layout>
        <v-layout v-else align-center class="pb-5">
          <h1 class="text-h2 blackText1--text">MICHAEL</h1>
          <h1 class="text-h2 blackText1--text font-weight-bold">MUDGE</h1>
        </v-layout>
        <p class="text-h5 mb-0 pb-1 darkGray--text font-weight-regular">
          michaeltmudge@gmail.com
        </p>
        <p
          :class="
            `${
              smAndDown ? 'mt-5' : ''
            } text-h5 mb-0 pb-1 darkGray--text font-weight-regular`
          "
        >
          951 323 1876
        </p>
      </div>
      <v-btn
        color="red lighten-1"
        href="#contact-form"
        class="font-weight-bold mt-5"
        dark
        small
      >
        <v-icon small class="mr-3">far fa-envelope</v-icon>Send me a message
      </v-btn>
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
      run: () => {
        null
      }
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
      run: () => this.copyToClipboard('951 323 1876')
    },
    {
      title: 'Location',
      content: 'Southern California',
      icon: 'far fa-compass',
      color: 'light-blue darken-1',
      run: () => {
        null
      }
    }
  ]
}
</script>
