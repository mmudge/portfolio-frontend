<template>
  <v-card
    :class="`${smAndDown ? 'pa-5' : 'pa-16'}`"
    flat
    outlined
    color="white3"
  >
    <div style="width: fit-content;" class="pb-5">
      <h1 class="blackText1--text">Contact me</h1>
      <div class="red2" style="height: 4px;"></div>
    </div>
    <v-layout align-center wrap>
      <v-flex sm12 md4>
        <p class="body-1 mediumGray--text">
          If you have any questions or would like to get in contact with me
          about anything please send me a message!
        </p>
        <div class="py-5 darkGray--text">
          <p class="body-1 font-weight-bold mb-0 pb-2">Michael Mudge</p>
          <p class="body-1 font-weight-bold mb-0 pb-2">
            michaeltmudge@gmail.com
          </p>
          <p class="body-1 font-weight-bold mb-0 pb-2">951 323 1876</p>
        </div>
      </v-flex>

      <v-flex :class="mdAndUp ? 'px-16' : ''" sm12 md8>
        <v-form @submit.prevent ref="contactForm">
          <p class="body-2 pb-2 pt-4 mb-0 blackText1--text font-weight-medium">
            Your name
          </p>
          <v-text-field
            v-model="name"
            tabindex="1"
            background-color="white2"
            color="darkGray"
            outlined
            hide-details
            dense
          >
          </v-text-field>
          <p class="body-2 pb-2 pt-4 mb-0 blackText1--text font-weight-medium">
            Your email
          </p>
          <v-text-field
            v-model="email"
            tabindex="2"
            background-color="white2"
            color="darkGray"
            outlined
            hide-details
            dense
          >
          </v-text-field>
          <p class="body-2 pb-2 pt-4 mb-0 blackText1--text font-weight-medium">
            Message
          </p>
          <v-textarea
            v-model="body"
            tabindex="3"
            background-color="white2"
            color="darkGray"
            outlined
            hide-details
            rows="3"
            dense
          >
          </v-textarea>
        </v-form>
        <v-btn
          color="red2"
          tabindex="4"
          class="mt-10 font-weight-bold"
          dark
          block
          x-large
          @keyup.enter="createMessage"
          @click.stop="createMessage"
        >
          <template v-if="isLoading">
            <v-progress-circular
              indeterminate
              color="white"
              class="mr-5"
            ></v-progress-circular>
            Sending Message...
          </template>
          <template v-else>
            Send Message
          </template>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Message from '@/models/Message'
import { MessageDetails } from '@/types/types'

@Component({
  components: {}
})
export default class ContactForm extends AppComponent {
  name: string = ''
  email: string = ''
  body: string = ''

  isLoading: boolean = false

  resetDataProps() {
    this.name = ''
    this.email = ''
    this.body = ''
  }

  async createMessage() {
    const message: MessageDetails = {
      name: this.name,
      email: this.email,
      body: this.body
    }

    this.isLoading = true
    const result = await Message.createMessage(message)
    this.isLoading = false

    if (result.errors) {
      this.setSnackbar('Error creating message', 'error')
    } else {
      this.setSnackbar('Message successfully sent', 'success')
      this.resetDataProps()
    }
  }
}
</script>

<style lang="scss"></style>
