<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('net-worth')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
