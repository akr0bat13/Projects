<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { cva } from 'class-variance-authority'

const iconVariants = cva('icon__base', {
  variants: {
    size: {
      sm: 'size__small',
      md: 'size__medium',
      lg: 'size__large',
      xl: 'size__extra-large',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

const props = defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>()

const containerClass = computed(() => {
  return iconVariants({ size: props.size })
})
</script>

<script lang="ts">
export default {
  name: 'my-icon-container',
}
</script>

<style scoped>
@import './IconContainer.scss';
</style>
