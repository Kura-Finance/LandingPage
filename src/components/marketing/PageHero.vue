<template>
  <section
    class="relative bg-kura-background overflow-hidden"
    :class="divider ? 'border-b border-kura-border' : ''"
  >
    <div class="relative marketing-container pt-32 pb-20 md:pt-36 md:pb-24">
      <div class="max-w-2xl">
        <p v-if="eyebrow" class="section-label mb-5">{{ eyebrow }}</p>
        <h1 class="headline-xl text-display-sm md:text-display-md mb-6">{{ title }}</h1>
        <p class="prose-lead mb-8 max-w-lg">{{ description }}</p>
        <div v-if="tags?.length" class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tag in tags"
            :key="tag"
            class="px-3 py-1 text-xs font-medium border border-kura-border bg-white text-kura-text-muted rounded-md"
          >
            {{ tag }}
          </span>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  eyebrow?: string
  tags?: string[]
  divider?: boolean
}>()
</script>
