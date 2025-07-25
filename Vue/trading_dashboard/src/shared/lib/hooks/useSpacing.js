import { computed } from 'vue'

export function useSpacing(size) {
  const spacingValues = {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
  }

  return computed(() => spacingValues[size] || '0') // Возвращает 0, если размер не найден
}
