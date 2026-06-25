<template>
  <section class="border-y border-kura-border bg-kura-surface py-8">
    <div class="marketing-container">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.18em] text-kura-text-secondary mb-6">
        Built with industry-leading partners
      </p>
      <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm font-medium text-kura-text-secondary">
        <span v-for="partner in partners" :key="partner">{{ partner }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  'Privy',
  'Safe',
  'Bridge',
  'MoonPay',
  'Li.Fi',
  'Dinari',
  'Morpho',
  'Plaid',
]
</script>
