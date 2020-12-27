<template>
  <PageContainer>
    <template v-slot:content>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="pa-10 text--darkText">
            <h1>Login</h1>

            <v-form ref="loginForm" @submit.prevent lazy-validation>
              <p class="body-2 pt-10 pb-2 mb-0">Email</p>
              <v-text-field
                v-model="email"
                prepend-inner-icon="fas fa-user-circle"
                tabindex="1"
                type="email"
                required
                outlined
                background-color="white"
                color="primary"
                hide-details
                dense
              ></v-text-field>

              <p class="body-2 pb-2 pt-7 mb-0">Password</p>

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
                background-color="white"
                color="primary"
                hide-details
                dense
              ></v-text-field>
            </v-form>

            <v-btn
              color="primary"
              class="mt-10"
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
  </PageContainer>
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
