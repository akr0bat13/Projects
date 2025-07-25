<template>
  <component :is="tagName" :class="['typography', sizeClass, appearenceClass]">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  tagName?: 'span' | 'p'
  weight?: 'bold' | 'normal'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  appearence?: 'muted' | 'inherit'
}

const props = defineProps<Props>()

const defaultTagName = 'p'
const defaultWeight = 'normal'
const defaultSize = 'md'
const defaultAppearence = 'inherit'

const sizeClass = computed(() => {
  const size = props.size || defaultSize
  const weight = props.weight || defaultWeight
  return weight === 'bold' ? `size_${size}_bold` : `size_${size}`
})

const appearenceClass = computed(() => {
  return props.appearence === 'muted' ? 'muted' : defaultAppearence
})

const tagName = computed(() => props.tagName || defaultTagName)
</script>

<script lang="ts">
// Экспортируем имя компонента
export default {
  name: 'my-text',
}
</script>

<style scoped>
@import './Text.scss';
</style>
