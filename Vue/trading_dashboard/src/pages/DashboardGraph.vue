<template>
  <div>
    <my-stack gap="sm">
      <my-text size="xs">DashboardGraph</my-text>
      <my-text size="sm">DashboardGraph</my-text>
      <my-text size="sm" weight="bold" appearence="muted">DashboardGraph</my-text>
      <my-text size="lg">DashboardGraph</my-text>
      <my-text size="xl">DashboardGraph</my-text>
      <my-text size="2xl">DashboardGraph</my-text>
      <my-text tagName="span">DashboardGraph</my-text>
      <my-heading size="xl">DashboardGraph</my-heading>
      <my-button>
        <template v-slot:leftIcon>
          <my-icon-container><Icon type="globe" /></my-icon-container>
        </template>
        DashboardGraph
      </my-button>
      <my-select
        :options="[
          { label: 'Option 1', value: 'value1' },
          { label: 'Option 2', value: 'value2' },
        ]"
      />
    </my-stack>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui/Icons'
</script>
