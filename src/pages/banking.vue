<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('banking')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
