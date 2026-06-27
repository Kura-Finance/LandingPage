<template>
  <section class="section-padding section-divider bg-kura-background">
    <div class="marketing-container">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
          {{ title }}
        </h2>
        <p class="prose-lead mb-12 max-w-lg mx-auto">
          {{ description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a v-if="isExternalLink(primaryTo)" :href="primaryTo" class="btn-primary">
            {{ primaryLabel }}
          </a>
          <NuxtLink v-else :to="primaryTo" class="btn-primary">
            {{ primaryLabel }}
          </NuxtLink>
          <a v-if="secondaryTo && isExternalLink(secondaryTo)" :href="secondaryTo" class="btn-secondary">
            {{ secondaryLabel }}
          </a>
          <NuxtLink v-else-if="secondaryTo" :to="secondaryTo" class="btn-secondary">
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
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
    title: 'The future of money starts here.',
    description: 'Join Kura and experience finance designed for the internet generation.',
    primaryLabel: 'Download Kura',
    primaryTo: '/download',
    secondaryLabel: '',
    secondaryTo: '',
  },
)

function isExternalLink(url: string) {
  return url.startsWith('mailto:') || url.startsWith('http://') || url.startsWith('https://')
}
</script>
