<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('earn')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
