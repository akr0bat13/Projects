<template>
  <div :class="['flex', props.className]" :style="computedStyles">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSpacing } from '@/shared/lib/hooks'

interface Props {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'start' | 'center' | 'end'
  className?: string
  fullWidth?: boolean
  flexWrap?: boolean
}
const props = defineProps<Props>()
const spacing = useSpacing(props.gap || 'md')

const flexWrap = computed(() => props.flexWrap ?? true)

const computedStyles = computed(() => {
  const styles: { [key: string]: string | number } = {
    width: props.fullWidth ? 'auto' : '100%',
    justifyContent: props.justify || 'start',
    alignItems: props.align || 'start',
    flexWrap: flexWrap.value ? 'wrap' : 'nowrap',
    gap: spacing.value,
  }
  return styles
})
</script>

<script lang="ts">
export default {
  name: 'my-flex',
}
</script>

<style lang="scss" scoped>
@import './Flex.scss';
</style>
