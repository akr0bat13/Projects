<template>
  <div :class="['stack', props.className]" :style="computedStyles">
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
}
const props = defineProps<Props>()

const fullWidth = computed(() => props.fullWidth ?? true)
const spacing = useSpacing(props.gap || 'md')

const computedStyles = computed(() => {
  const styles: { [key: string]: string | number } = {
    width: fullWidth.value ? '100%' : 'auto%',
    justifyContent: props.justify || 'start',
    alignItems: props.align || 'start',
    gap: spacing.value,
  }
  return styles
})
</script>

<script lang="ts">
export default {
  name: 'my-stack',
}
</script>

<style lang="scss" scoped>
@import './Stack.scss';
</style>
