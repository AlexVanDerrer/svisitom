<template>
  <div class="container">
      <div class="Table--table-container">
            <b-table small hover :items="items" :fields="fields">
                    <template #cell(cb)="data">
                        <b-form-checkbox
                            :id="`checkbox-${data.item.cb}`"
                            v-model="selectData"
                            :name="`checkbox-${data.item.cb}`"
                            :value="data.item.id"
                            >
                        </b-form-checkbox>
                    </template>
                    <template #cell(status)="data">
                        <b-form-select 
                            v-model="data.item.status" 
                            :options="options"
                            size="sm"
                        ></b-form-select>

                    </template>
                    <template #cell(name)="data">
                        <div class="d-flex">
                            <div class="mr-3">
                                <span>{{data.item.name}}</span>
                            </div>
                            <EditPopoverComponent :itemData="data"/>
                        </div>
                    </template>

                    <template #cell(date)="data">
                        {{ data.item.date }}
                    </template>
            </b-table>
            <b-button @click.stop.prevent="selectAllItems">Выбрать все</b-button>
            <b-button v-show="selectData.length" @click.stop.prevent="clearSelect">Отменить выбор</b-button>
            <span v-show="selectData.length">
                <strong>Выбрано: </strong>{{selectData}}
            </span>
      </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    middleware: ['checkAuth'],
    filters: {
        formatDate (date) {
        let dd = date.getDate()
        if (dd < 10) dd = '0' + dd
        let mm = date.getMonth() + 1
        if (mm < 10) mm = '0' + mm
        const yy = date.getFullYear()
        // let yy = date.getFullYear() % 100;
        // if (yy < 10) yy = '0' + yy;
        return dd + '.' + mm + '.' + yy
        }
    },
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
            options: [
                { value: true, text: 'true' },
                { value: false, text: 'false' },
               
            ],
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
    methods: {
        selectAllItems(){
            if(this.selectData.length < this.items.length){
                this.showClearSelect = true
                this.items.forEach(element => {
                    if((this.selectData.indexOf(element.id)) === -1){
                        this.selectData.push(element.id)
                    }
                });
            }

        },
        clearSelect(){
            this.selectData = []
        },

    }
}
</script>

<style>


</style>