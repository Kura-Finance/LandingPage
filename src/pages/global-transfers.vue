<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('global-transfers')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
