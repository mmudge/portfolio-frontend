<template>
  <div>
    <div :class="`${smAndDown ? 'text-center' : ''}`">
      <div>
        <v-layout
          v-if="smAndDown"
          align-center
          justify-center
          :class="mdAndUp ? 'pb-16' : 'py-4'"
        >
          <h1 class="text-h4 blackText1--text ">MICHAEL</h1>
          <h1 class="text-h4 blackText1--text font-weight-bold">MUDGE</h1>
        </v-layout>
        <v-layout v-else align-center class="pb-5">
          <h1 class="text-h4 grayText--text font-weight-bold">MICHAEL MUDGE</h1>
          <!-- <h1 class="text-h3 grayText--text">MUDGE</h1> -->
        </v-layout>
        <p class="mb-0 pt-2 body-2 font-weight-bold mediumGray--text">
          EMAIL
        </p>
        <p class="text-h5 mb-0 pb-2 darkGray--text font-weight-regular">
          michaeltmudge@gmail.com
        </p>
        <p
          :class="
            `${
              smAndDown ? '' : ''
            } mb-0 body-2 pt-2 font-weight-bold mediumGray--text`
          "
        >
          PHONE
        </p>
        <p :class="` text-h5 mb-0 pb-2 darkGray--text font-weight-regular`">
          951 323 1876
        </p>
      </div>
      <SendMessageButton :anchor="'contact-form'" class="mt-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import SendMessageButton from '@/components/SendMessageButton.vue'

@Component({
  components: {
    SendMessageButton
  }
})
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
