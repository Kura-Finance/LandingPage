<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('us-stocks')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
