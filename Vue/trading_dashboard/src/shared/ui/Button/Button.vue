<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { cva } from 'class-variance-authority'

interface Props {
  appearence?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  uncontained?: boolean
  fullWidth?: boolean
  iconOnly?: boolean
}

const slots = useSlots()
const props = defineProps<Props>()

const buttonVariants = cva('button', {
  variants: {
    size: {
      sm: 'size__small',
      md: 'size__medium',
      lg: 'size__large',
      xl: 'size__extra-large',
    },
    uncontained: {
      true: 'uncontained',
    },
    iconOnly: {
      true: 'icon-only',
    },
    fullWidth: {
      true: 'width__full',
      false: 'width__fit',
    },
    appearence: {
      primary: 'appearence__primary',
      secondary: 'appearence__secondary',
      ghost: 'appearence__ghost',
    },
  },
  defaultVariants: {
    size: 'md',
    uncontained: false,
    appearence: 'primary',
    fullWidth: true,
    iconOnly: false,
  },
})

const buttonClass = computed(() => {
  return buttonVariants({
    size: props.size,
    uncontained: props.uncontained,
    appearence: props.appearence,
  })
})
</script>

<template>
  <button :class="buttonClass" :disabled="props.disabled">
    <slot name="leftIcon"></slot>
    <slot v-if="slots.default" class="button__text"></slot>
    <slot v-else class="button__icon"></slot>
    <slot name="rightIcon"></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
}
</script>

<style scoped>
@import './Button.scss';
</style>
