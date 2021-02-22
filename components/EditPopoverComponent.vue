<template>
    <div>
        <div class="EditIcon">
            <b-icon :id="`editName-${itemData.item.id}`"  icon="pencil"></b-icon>
        </div>
        <b-popover
            :target="`editName-${itemData.item.id}`"
            triggers="focus"
            placement="auto"
            container="my-container"
            :ref="`popover-${itemData.item.id}`"
        >
            <template #title>
                Изменить название
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
}
</script>

<style>
.EditIcon{
    cursor: pointer;
}
</style>