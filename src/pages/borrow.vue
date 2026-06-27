<script setup lang="ts">
definePageMeta({ layout: 'default' })

const page = useFeaturePage('borrow')
</script>

<template>
  <FeaturePage v-bind="page" />
</template>
