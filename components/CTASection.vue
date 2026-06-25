<template>
  <section class="bg-kura-ink text-white py-20 md:py-24">
    <div class="marketing-container text-center">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {{ title }}
      </h2>
      <p class="text-lg text-kura-ink-subtle max-w-xl mx-auto mb-8">
        {{ description }}
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a v-if="isExternalLink(primaryTo)" :href="primaryTo" class="btn-primary">
          {{ primaryLabel }}
        </a>
        <NuxtLink v-else :to="primaryTo" class="btn-primary">
          {{ primaryLabel }}
        </NuxtLink>
        <a v-if="secondaryTo && isExternalLink(secondaryTo)" :href="secondaryTo" class="btn-ghost-light">
          {{ secondaryLabel }}
        </a>
        <NuxtLink v-else-if="secondaryTo" :to="secondaryTo" class="btn-ghost-light">
          {{ secondaryLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    title: 'Ready to simplify your finances?',
    description: 'Download Kura and manage tradFi and crypto from one self-custody app.',
    primaryLabel: 'Download App',
    primaryTo: '/download',
    secondaryLabel: 'View pricing',
    secondaryTo: '/pricing',
  },
)

function isExternalLink(url: string) {
  return url.startsWith('mailto:') || url.startsWith('http://') || url.startsWith('https://')
}
</script>
