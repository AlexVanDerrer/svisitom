<template>
    <div>
        <b-icon :id="`editName-${itemData.item.id}`"  icon="pencil-square"></b-icon>
        <b-popover
            :target="`editName-${itemData.item.id}`"
            triggers="focus"
            placement="auto"
            container="my-container"
            :ref="`popover-${itemData.item.id}`"
        >
            <template #title>
                Редактировать
            </template>

            <div>
                <b-form-group
                    class="mb-1"
                    description="Введите новое название"
                    invalid-feedback="This field is required"
                >
                <b-form-input
                    :ref="`input${itemData.item.id}`"
                    :id="`popover-input-${itemData.item.id}`"
                    v-model="itemData.item.name"
                    size="sm"
                ></b-form-input>
                </b-form-group>   
            </div>
        </b-popover>
    </div>
</template>

<script>
export default {
    props: {
        itemData: {
            type: Object
        }
    },
    data(){
        return {
            popoverShow: false,
        }
    },
    methods: {
        onClose() {
            this.$refs[`popover-${itemData.item.id}`].hide();
            // this.popoverShow = false
        },
        onOk() {
            this.onClose()
        },

      onShown() {
        // Called just after the popover has been shown
        // Transfer focus to the first input
        this.focusRef(this.$refs.input1)
      },
      onHidden() {
        // Called just after the popover has finished hiding
        // Bring focus back to the button
        this.focusRef(this.$refs.button)
      },
      focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated & popover positioned first
        this.$nextTick(() => {
          this.$nextTick(() => {
            ;(ref.$el || ref).focus()
          })
        })
      }
    }
}
</script>

<style>

</style>