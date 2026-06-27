<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('invest')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
