<template>
  <section class="section-padding bg-kura-surface">
    <div class="marketing-container">
      <div class="max-w-xl mb-20 md:mb-24">
        <p class="section-label mb-5">Principles</p>
        <h2 class="headline-xl text-display-sm md:text-display-md">
          Designed for humans.
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
        <div
          v-for="(pillar, index) in pillars"
          :key="pillar.title"
          class="space-y-5"
          :class="index > 0 ? 'md:border-l md:border-kura-border md:pl-12 lg:pl-16' : ''"
        >
          <h3 class="font-display text-2xl text-kura-text font-normal tracking-[-0.02em]">
            {{ pillar.title }}
          </h3>
          <p class="text-kura-text-secondary leading-relaxed">
            {{ pillar.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    title: 'Beautiful UI',
    description: 'A financial experience people actually enjoy using.',
  },
  {
    title: 'Privacy by default',
    description: 'Your assets and identity remain under your control.',
  },
  {
    title: 'Global access',
    description: 'Borderless finance without unnecessary complexity.',
  },
]
</script>
