<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('multi-currency')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
