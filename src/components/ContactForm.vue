<template>
  <v-card :class="`${smAndDown ? 'pa-5' : 'pa-16'}`" flat dark>
    <h1 class="blue1--text pb-2">Contact me</h1>
    <p class="mediumGray--text">
      If you have any questions or would like to get in contact with me about
      anything please send me a message!
    </p>
    <v-form @submit.prevent ref="contactForm">
      <p class="body-2 pb-2 pt-4 mb-0 blue1--text font-weight-medium">
        Your name
      </p>
      <v-text-field
        v-model="name"
        tabindex="1"
        background-color="black2"
        outlined
        hide-details
      >
      </v-text-field>
      <p class="body-2 pb-2 pt-4 mb-0 blue1--text font-weight-medium">
        Your email
      </p>
      <v-text-field
        v-model="email"
        tabindex="2"
        background-color="black2"
        outlined
        hide-details
      >
      </v-text-field>
      <p class="body-2 pb-2 pt-4 mb-0 blue1--text font-weight-medium">
        Message
      </p>
      <v-textarea
        v-model="body"
        tabindex="3"
        background-color="black2"
        outlined
        hide-details
        rows="3"
      >
      </v-textarea>
    </v-form>

    <v-btn
      color="blue1"
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
