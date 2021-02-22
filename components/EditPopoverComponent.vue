<template>
  <div>
    <div class="EditIcon">
      <div class="mr-3">
        <button
          :id="`editName-${itemData.item.id}`"
          class="btn"
        >
          {{ itemData.item.name }}
        </button>
      </div>
    </div>
    <b-popover
      :ref="`popover-${itemData.item.id}`"
      :target="`editName-${itemData.item.id}`"
      triggers="focus"
      placement="auto"
      container="my-container"
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
            :id="`popover-input-${itemData.item.id}`"
            :ref="`input${itemData.item.id}`"
            v-model="itemData.item.name"
            size="sm"
          />
        </b-form-group>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.EditIcon{
    cursor: pointer;
}
</style>
