<template>
  <v-card class="pa-10">
    <h1 class="headline darkText--text">
      <template v-if="technologyToUpdateId">Update technology</template>
      <template v-else>Create technology</template>
    </h1>
    <v-form @submit.prevent ref="technologyForm" class="mt-10">
      <v-text-field v-model="name" tabindex="1" outlined label="Name">
      </v-text-field>

      <v-text-field
        v-model="icon"
        tabindex="2"
        outlined
        label="Icon"
      ></v-text-field>
      <v-text-field
        v-model="color"
        tabindex="3"
        outlined
        label="Color"
      ></v-text-field>
    </v-form>

    <template v-if="technologyToUpdateId">
      <v-btn
        color="primary"
        tabindex="4"
        dark
        block
        class="mt-5"
        @keyup.enter="updateTechnology"
        @click.stop="updateTechnology"
        >Update</v-btn
      >
    </template>

    <template v-else>
      <v-btn
        color="primary"
        tabindex="4"
        class="mt-5"
        dark
        block
        @keyup.enter="createTechnology"
        @click.stop="createTechnology"
        >Create</v-btn
      >
    </template>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Technology from '@/models/Technology'
import { TechnologyDetails } from '@/types/types'

@Component({
  components: {}
})
export default class CreateOrUpdateTechnology extends AppComponent {
  @Prop() formOpened!: boolean
  @Prop() technologyToUpdateId!: number

  name: string = ''
  icon: string = ''
  color: string = ''

  @Watch('formOpened', { immediate: true })
  onFormOpenChanged() {
    if (this.technologyToUpdateId) {
      this.setTechnology()
    } else if (!this.formOpened) {
      this.resetDataProps()
    }
  }

  resetDataProps() {
    this.name = ''
    this.icon = ''
    this.color = ''
  }

  setTechnology() {
    const technology: Technology = Technology.findTechnology(
      this.technologyToUpdateId
    )
    if (technology) {
      this.name = technology.name
      this.icon = technology.icon
      this.color = technology.color
    }
  }

  async updateTechnology() {
    const technology: TechnologyDetails = {
      name: this.name,
      icon: this.icon,
      color: this.color
    }

    const result = await Technology.updateTechnology(
      this.technologyToUpdateId,
      technology
    )
    if (result.errors) {
      console.log('errors updating')
      this.setSnackbar('Error updating technology', 'error')
    } else {
      this.setSnackbar('Technology updated successfully', 'success')
      this.$emit('closeDialog')
    }
  }

  async createTechnology() {
    const technology: TechnologyDetails = {
      name: this.name,
      icon: this.icon,
      color: this.color
    }

    const result = await Technology.createTechnology(technology)
    if (result.errors) {
      console.log('errors creating')
      this.setSnackbar('Error creating technology', 'error')
    } else {
      this.setSnackbar('Technology created successfully', 'success')
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="scss"></style>
