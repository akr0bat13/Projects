<template>
  <component :is="order" :class="['heading', sizeClass, appearenceClass]">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  weight?: 'bold' | 'normal'
  order?: 1 | 2 | 3 | 4 | 5 | 6
  appearence?: 'inherit' | 'muted'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = defineProps<Props>()

const defaultOrder = 1
const defaultWeight = 'normal'
const defaultAppearence = 'inherit'
const defaultSize = 'md'

const sizeClass = computed(() => {
  const size = props.size || defaultSize
  const weight = props.weight || defaultWeight
  return weight === 'bold' ? `size_${size}_bold` : `size_${size}`
})

const appearenceClass = computed(() => {
  return props.appearence === 'muted' ? 'muted' : defaultAppearence
})

const order = computed(() => `h${props.order || defaultOrder}`)
</script>

<script lang="ts">
// Экспортируем имя компонента
export default {
  name: 'my-heading',
}
</script>

<style scoped>
@import './Heading.scss';
</style>
