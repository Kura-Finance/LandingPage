<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('financial-account')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
