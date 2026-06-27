<template>
  <section id="compare" class="section-padding bg-kura-surface">
    <div class="marketing-container">
      <div class="max-w-xl mb-16 md:mb-20">
        <p class="section-label mb-5">Compare</p>
        <h2 class="headline-xl text-display-sm md:text-display-md">
          Finance without the complexity.
        </h2>
      </div>

      <div class="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px min-w-[640px] sm:min-w-0 bg-kura-border border border-kura-border rounded-xl overflow-hidden">
          <div
            v-for="column in columns"
            :key="column.title"
            class="comparison-panel p-8 md:p-9"
            :class="column.highlight ? 'bg-kura-primary text-white' : 'bg-white'"
          >
            <h3
              class="text-sm font-medium uppercase tracking-[0.14em] mb-8 md:mb-10"
              :class="column.highlight ? 'text-white/60' : 'text-kura-text-muted'"
            >
              {{ column.title }}
            </h3>
            <ul class="space-y-4 md:space-y-5">
              <li
                v-for="item in column.items"
                :key="item"
                class="flex items-start gap-3 text-[14px] md:text-[15px] leading-snug"
                :class="column.highlight ? 'text-white/95' : 'text-kura-text-secondary'"
              >
                <span
                  class="mt-0.5 shrink-0"
                  :class="column.highlight ? 'text-white/50' : 'text-kura-text-muted'"
                  aria-hidden="true"
                >{{ column.highlight ? '+' : '—' }}</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'Traditional Banks',
    highlight: false,
    items: [
      'Limited geography',
      'Slow settlement',
      'Multiple accounts',
      'Limited investment access',
    ],
  },
  {
    title: 'Exchange',
    highlight: false,
    items: [
      'Trading only — no everyday account',
      'Complex, trader-first interfaces',
      'No bank transfers or card spending',
      'Assets held on platform',
    ],
  },
  {
    title: 'Wallet',
    highlight: false,
    items: [
      'Digital assets only',
      'No US stocks or earn products',
      'No fiat on-ramps in one place',
      'Another app to manage',
    ],
  },
  {
    title: 'Kura',
    highlight: true,
    items: [
      'Global by default',
      'Instant digital money',
      'One unified account',
      'Cash, investing and earning together',
    ],
  },
]
</script>
