<template>
  <section class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-2xl mb-16 md:mb-20">
        <p class="section-label mb-5">Infrastructure</p>
        <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
          One experience. Powered by the best infrastructure.
        </h2>
        <p class="prose-lead max-w-lg">
          Kura combines the best financial infrastructure behind one simple interface. You never need to think about what's happening behind the scenes.
        </p>
      </div>

      <div class="border-t border-kura-border pt-12">
        <div class="flex flex-wrap items-center gap-x-14 gap-y-6 md:gap-x-20">
          <span
            v-for="partner in partners"
            :key="partner"
            class="text-sm font-medium tracking-[0.12em] uppercase text-kura-primary/30 select-none"
          >
            {{ partner }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  'Circle',
  'Base',
  'Dinari',
  'Morpho',
  'MoonPay',
  'Bridge',
]
</script>
