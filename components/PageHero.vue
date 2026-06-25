<template>
  <section class="relative bg-kura-ink text-white overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.25),transparent)]" />
    <div class="relative marketing-container pt-28 pb-16 md:pt-32 md:pb-20 text-center max-w-3xl mx-auto">
      <p v-if="eyebrow" class="section-label text-kura-primary-light mb-4">{{ eyebrow }}</p>
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">{{ title }}</h1>
      <p class="text-lg text-kura-ink-subtle leading-relaxed mb-8">{{ description }}</p>
      <div v-if="tags?.length" class="flex flex-wrap justify-center gap-2 mb-8">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-kura-ink-muted"
        >
          {{ tag }}
        </span>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  eyebrow?: string
  tags?: string[]
}>()
</script>
