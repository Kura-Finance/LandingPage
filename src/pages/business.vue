<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('business')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
