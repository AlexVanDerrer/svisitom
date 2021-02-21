<template>
  <div class="container">
      <div class="Table--table-container">
            <b-table striped hover :items="items" :fields="fields">
                    <template #cell(cb)="data">
                        <b-form-checkbox
                            :id="`checkbox-${data.item.cb}`"
                            v-model="selectData"
                            :name="`checkbox-${data.item.cb}`"
                            :value="data"
                            >
                        </b-form-checkbox>
                    </template>
            </b-table>
      </div>
  </div>
</template>

<script>
export default {
    middleware: ['checkAuth'],
    async fetch(){
        try {
            await this.$store.dispatch('getData')
        } catch (error) {
            console.error(error);
            throw error
        }
    },
    data() {
      return {
          selectData: [],
          fields: [
            {
                key: 'cb',
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
                sortable: true,
            },
            {
                key: 'status',
                label: 'Статус',
                sortable: true

            }
        ],
      }
    },
    computed: {
        items: {
            get(){
                return this.$store.getters.getData
            },
            set(data){
                this.$store.commit('setData', data)
            }
        }
    },
}
</script>

<style>


</style>