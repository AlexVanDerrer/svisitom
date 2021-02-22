<template>
  <div class="container">
    <div class="Table--table-container">
      <b-table
        small
        hover
        :items="items"
        :fields="fields"
      >
        <template #cell(checkbox)="data">
          <b-form-checkbox
            :id="`checkbox-${data.item.id}`"
            v-model="selectData"
            :name="`checkbox-${data.item.id}`"
            :value="data.item.id"
          />
        </template>
        <template #cell(status)="data">
          <b-form-select
            v-model="data.item.status"
            :options="options"
            size="sm"
          />
        </template>
        <template #cell(name)="data">
          <div class="d-flex">
            <div class="mr-3">
              <span>{{ data.item.name }}</span>
            </div>
            <EditPopoverComponent :item-data="data" />
          </div>
        </template>

        <template #cell(date)="data">
          {{ data.item.date }}
        </template>
      </b-table>
      <b-button @click.stop.prevent="selectAllItems">
        Выбрать все
      </b-button>
      <b-button
        v-show="selectData.length"
        @click.stop.prevent="clearSelect"
      >
        Отменить выбор
      </b-button>
      <span v-show="selectData.length">
        <strong>Выбрано: </strong>{{ selectData }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['checkAuth'],
  data () {
    return {
      selectData: [],
      options: [
        { value: true, text: 'true' },
        { value: false, text: 'false' }

      ],
      fields: [
        {
          key: 'checkbox',
          label: ''
        },
        {
          key: 'id',
          label: 'Номер',
          sortable: true
        },
        {
          key: 'name',
          label: 'Название',
          sortable: true
        },
        {
          key: 'date',
          label: 'Дата',
          sortable: true
        },
        {
          key: 'status',
          label: 'Статус',
          sortable: true

        }
      ]
    }
  },
  async fetch () {
    try {
      await this.$store.dispatch('getData')
    } catch (error) {
      console.error(error)
      throw error
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.getters.getData
      },
      set (data) {
        this.$store.commit('setData', data)
      }
    }
  },
  methods: {
    selectAllItems () {
      if (this.selectData.length < this.items.length) {
        this.showClearSelect = true
        this.items.forEach(element => {
          if ((this.selectData.indexOf(element.id)) === -1) {
            this.selectData.push(element.id)
          }
        })
      }
    },
    clearSelect () {
      this.selectData = []
    }

  }
}
</script>

<style>

</style>
