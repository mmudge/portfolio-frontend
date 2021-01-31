<template>
  <v-dialog v-model="createTechnologyDialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="red2" dark v-on="on">
        Create Technology
      </v-btn>
    </template>

    <CreateOrUpdateTechnology
      :formOpened="createTechnologyDialog"
      @closeDialog="onCloseDialog"
    />
  </v-dialog>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent.ts'
import CreateOrUpdateTechnology from '@/components/technologies/CreateOrUpdateTechnology.vue'

@Component({
  components: {
    CreateOrUpdateTechnology
  }
})
export default class CreateTechnologyButton extends AppComponent {
  createTechnologyDialog: boolean = false

  onCloseDialog() {
    this.createTechnologyDialog = false
  }
}
</script>

<style></style>
