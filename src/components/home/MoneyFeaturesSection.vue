<template>
  <section id="features" class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-xl mb-20 md:mb-24">
        <p class="section-label mb-5">Product</p>
        <h2 class="headline-xl text-display-sm md:text-display-md">
          Everything your money needs.
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-px bg-kura-border border border-kura-border rounded-xl overflow-hidden">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="feature-card bg-white p-10 md:p-12"
        >
          <p class="section-label mb-8">{{ feature.number }}</p>
          <h3 class="font-display text-2xl md:text-[1.75rem] text-kura-text mb-4 font-normal tracking-[-0.02em]">
            {{ feature.title }}
          </h3>
          <p class="text-kura-text-secondary leading-relaxed max-w-sm">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    number: '01',
    title: 'Cash',
    description: 'Move money globally with bank transfers and digital dollars.',
  },
  {
    number: '02',
    title: 'Invest',
    description: 'Access US stocks and digital assets in one place.',
  },
  {
    number: '03',
    title: 'Earn',
    description: 'Put idle cash to work with transparent yield strategies.',
  },
  {
    number: '04',
    title: 'Borrow',
    description: 'Access liquidity through Morpho markets with clear rates and collateral terms.',
  },
  {
    number: '05',
    title: 'Spend',
    description: 'Use your balance like a modern financial account.',
  },
]
</script>
