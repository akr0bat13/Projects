<template>
  <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" disabled>Выберите из списка</option>
    <option
      :value="option.value"
      v-for="option in options"
      :key="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: "Select",

    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>