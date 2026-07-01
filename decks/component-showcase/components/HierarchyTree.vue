<template>
  <SharedHierarchyTree v-bind="{ ariaLabel: 'Hierarchy tree', root, branches, ...$attrs }" />
</template>

<script setup>
import SharedHierarchyTree from '../../../shared/components/HierarchyTree.vue'

const root = { label: 'Root', title: 'Experience system' }
const branches = [
  { label: 'Level 1', title: 'Narrative', detail: 'Primary domain' },
  { label: 'Level 2', title: 'Components', detail: 'Team or capability' },
  { label: 'Level 3', title: 'Assets', detail: 'Service or artifact' }
]
</script>
