<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="loginForm" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.stop="signIn">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Api from '@/api.js'
import User from '@/models/User'

@Component
export default class Login extends Vue {
  valid: boolean = false
  email = ''
  password = ''

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
