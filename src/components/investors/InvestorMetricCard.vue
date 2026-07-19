<template>
  <article class="ir-kpi" :class="featured ? 'ir-kpi--featured' : ''">
    <p class="ir-kpi__label">{{ label }}</p>
    <p class="ir-kpi__value">{{ value }}</p>
    <p v-if="detail" class="ir-kpi__detail">{{ detail }}</p>
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
.ir-kpi {
  padding: 0;
  min-width: 0;
}

.ir-kpi__label {
  margin: 0 0 0.75rem;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64687a;
}

.ir-kpi__value {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #12131a;
  font-variant-numeric: tabular-nums;
}

.ir-kpi--featured .ir-kpi__value {
  font-size: clamp(2.25rem, 4vw, 3.25rem);
}

.ir-kpi__detail {
  margin: 0.75rem 0 0;
  max-width: 18rem;
  font-size: 0.75rem;
  line-height: 1.55;
  color: #64687a;
}
</style>
