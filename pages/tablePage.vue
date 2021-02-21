<template>
  <div class="container">
      <div class="Table--table-container">
            <b-table striped hover :items="items"></b-table>
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
      return {}
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
    async mounted(){

    }
}
</script>

<style>


</style>