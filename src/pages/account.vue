<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('account')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
