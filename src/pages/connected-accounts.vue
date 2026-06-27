<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('connected-accounts')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
