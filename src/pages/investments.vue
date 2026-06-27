<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('investments')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
