<template>
  <select v-model="selectedValue" :placeholder="placeholder" :class="['select', appearenceClass]">
    <option value="value1" disabled>Значение 1</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface SelectOption {
  value: string | number
  label: string
}

export default defineComponent({
  name: 'MySelect',
  props: {
    modelValue: {
      // v-model binding
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'asdfsadf',
    },
  },
  emits: ['update:modelValue'], // Обязательно объявляем emits
  computed: {
    selectedValue: {
      get(): string | number {
        return this.modelValue
      },
      set(newValue: string | number) {
        this.$emit('update:modelValue', newValue)
      },
    },
  },
})
</script>
<style lang="scss" scoped>
@import './Select.scss';
</style>
