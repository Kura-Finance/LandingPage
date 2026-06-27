<template>
  <component
    :is="to ? 'NuxtLink' : 'article'"
    :to="to"
    class="group card-surface p-6 transition-all duration-200 block h-full"
    :class="to ? 'hover:border-kura-primary/30 hover:shadow-card' : ''"
  >
    <div class="flex items-center justify-between mb-4 gap-3">
      <span class="text-xs uppercase tracking-widest font-semibold text-kura-primary">{{ category }}</span>
      <span
        class="text-[11px] px-2 py-1 rounded-full border shrink-0"
        :class="
          status === 'Published'
            ? 'border-kura-accent/40 text-kura-accent'
            : 'border-kura-primary/30 text-kura-primary'
        "
      >
        {{ status }}
      </span>
    </div>
    <h3
      class="text-lg font-semibold mb-2 transition-colors"
      :class="to ? 'group-hover:text-kura-primary' : ''"
    >
      {{ title }}
    </h3>
    <p class="text-sm text-kura-text-secondary leading-relaxed">{{ description }}</p>
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    category: string
    status?: string
    to?: string
  }>(),
  { status: 'Published' },
)
</script>
