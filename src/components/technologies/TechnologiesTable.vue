<template>
  <div>
    <v-data-table
      :items="technologies"
      :headers="technologyHeaders"
      hide-default-footer
      disable-pagination
      :loading="loadingTechnologies"
      loading-text="Loading... one moment please"
      no-data-text="No data"
      no-results-text="No results"
    >
      <template v-slot:item.icon="{ item }">
        <v-layout>
          <v-icon class="mr-5" :color="item.color">{{ item.icon }}</v-icon>
          <p class="mb-0">{{ item.icon }}</p>
        </v-layout>
      </template>

      <template v-slot:item.text="{ item }">
        <div class="py-2">
          <p class="mb-0">{{ item.text }}</p>
        </div>
      </template>

      <template v-slot:item.color="{ item }">
        <v-layout align-center>
          <div style="height: 10px; width: 20px;" :class="item.color"></div>
          <p class="mb-0 ml-2">{{ item.color }}</p>
        </v-layout>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn
          color="primary"
          text
          dark
          x-small
          @click="updateTechnology(item.id)"
          ><v-icon>far fa-edit</v-icon></v-btn
        >
        <v-btn
          class="ml-1"
          color="red2"
          text
          dark
          x-small
          @click="deleteTechnology(item.id)"
        >
          <v-icon>
            far fa-trash-alt
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="updateTechnologyDialog" width="500">
      <CreateOrUpdateTechnology
        @closeDialog="onCloseDialog"
        :technologyToUpdateId="technologyToUpdateId"
        :formOpened="updateTechnologyDialog"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import AppComponent from '@/components/AppComponent'
import Technology from '@/models/Technology'
import CreateOrUpdateTechnology from '@/components/technologies/CreateOrUpdateTechnology.vue'

@Component({
  components: {
    CreateOrUpdateTechnology
  }
})
export default class TechnologiesTable extends AppComponent {
  loadingTechnologies: boolean = false
  technologyHeaders: any[] = [
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Text',
      align: 'left',
      sortable: false,
      value: 'text',
      width: '25%'
    },
    {
      text: 'Icon',
      align: 'left',
      sortable: false,
      value: 'icon'
    },
    {
      text: 'Color',
      align: 'left',
      sortable: false,
      value: 'color'
    },
    {
      text: 'Hierarchy',
      align: 'left',
      sortable: false,
      value: 'hierarchy'
    },
    {
      text: 'Actions',
      align: 'right',
      sortable: false,
      value: 'actions'
    }
  ]

  updateTechnologyDialog: boolean = false
  technologyToUpdateId: number | null = null

  get technologies(): Technology[] {
    return this.$store.getters['technologies/technologies']
  }

  mounted() {
    this.loadTechnologies()
  }

  async loadTechnologies() {
    this.loadingTechnologies = true
    await Technology.fetchAll()
    this.loadingTechnologies = false
  }

  updateTechnology(technologyId: number) {
    this.technologyToUpdateId = technologyId
    this.updateTechnologyDialog = true
  }

  async deleteTechnology(technologyId: number) {
    const deleted = await Technology.deleteTechnology(technologyId)
    if (deleted) {
      this.setSnackbar('Technology deleted', 'warning')
    }
  }

  onCloseDialog() {
    this.updateTechnologyDialog = false
  }

  beforeDestroy() {
    this.technologyToUpdateId = null
  }
}
</script>

<style scoped></style>
