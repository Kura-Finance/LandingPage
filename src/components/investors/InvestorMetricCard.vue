<template>
  <article class="investor-metric" :class="featured ? 'investor-metric--featured' : ''">
    <p class="investor-metric__label">{{ label }}</p>
    <p class="investor-metric__value">{{ value }}</p>
    <p v-if="detail" class="investor-metric__detail">{{ detail }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
  detail?: string
  featured?: boolean
}>()
</script>

<style scoped>
.investor-metric {
  padding: 1.5rem 1.75rem;
  border-radius: 1rem;
  border: 1px solid #e1e4ec;
  background: #fff;
}

.investor-metric--featured {
  background: linear-gradient(180deg, #fff 0%, #faf9ff 100%);
  border-color: rgba(124, 92, 252, 0.18);
}

.investor-metric__label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
  margin-bottom: 0.75rem;
}

.investor-metric__value {
  font-family: "Newsreader", Georgia, serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #12131a;
}

.investor-metric--featured .investor-metric__value {
  font-size: 2.25rem;
}

.investor-metric__detail {
  margin-top: 0.625rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #64687a;
}
</style>
