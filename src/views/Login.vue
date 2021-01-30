<template>
  <v-layout align-center justify-center>
    <v-flex shrink>
      <v-card
        class="pa-10 grayText--text"
        color="white2"
        style="width: 400px; margin-top: 100px;"
      >
        <h1 class="text-h4 font-weight-bold grayText--text">Login</h1>

        <v-form ref="loginForm" @submit.prevent lazy-validation>
          <p class="darkGray--text body-2 pt-10 pb-2 mb-0">Email</p>
          <v-text-field
            v-model="email"
            prepend-inner-icon="fas fa-user-circle"
            tabindex="1"
            type="email"
            required
            outlined
            color="darkGray"
            hide-details
            dense
          ></v-text-field>

          <p class="darkGray--text body-2 pb-2 pt-7 mb-0">Password</p>

          <v-text-field
            v-model="password"
            :prepend-inner-icon="
              showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
            "
            @click:prepend-inner="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            tabindex="2"
            required
            outlined
            color="darkGray"
            hide-details
            dense
          ></v-text-field>
        </v-form>

        <v-btn
          color="red2"
          class="mt-10 font-weight-bold"
          dark
          block
          tabindex="3"
          @keyup.enter="signIn"
          @click.stop="signIn"
          >Login</v-btn
        >
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Api from '@/api.js'
import User from '@/models/User'
import PageContainer from '@/components/PageContainer.vue'

@Component({
  components: {
    PageContainer
  }
})
export default class Login extends Vue {
  valid: boolean = false
  email: string = ''
  password: string = ''

  showPassword: boolean = false

  async signIn() {
    const signInForm = this.$refs.loginForm as HTMLFormElement
    if (signInForm.validate()) {
      const result = await User.signIn(this.email, this.password)

      console.log('results from user login', result)
      if (result) {
        // this.$store.commit('setSnackbar', {
        //   text: `Logged in ${this.email}`,
        //   color: 'success'
        // })
        this.$router.push('/admin')
      } else {
        // this.$store.commit('setSnackbar', {
        //   text: 'Invalid username / password',
        //   color: 'error'
        // })
      }
    }
  }
}
</script>

<style scoped></style>
