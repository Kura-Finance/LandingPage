<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('card-waitlist')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
