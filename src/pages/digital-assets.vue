<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('digital-assets')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
