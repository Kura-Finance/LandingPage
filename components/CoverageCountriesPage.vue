<script setup lang="ts">
import { computed, ref } from 'vue'

export interface CoverageSection {
  title: string
  description?: string
  countries: readonly string[]
  variant?: 'default' | 'warning' | 'muted'
}

const props = defineProps<{
  badge: string
  title: string
  subtitle: string
  partner?: string
  partnerUrl?: string
  partners?: readonly { name: string; url: string }[]
  lastUpdated: string
  sourceUrl?: string
  sourceLinks?: readonly { label: string; url: string }[]
  sections: CoverageSection[]
  notes?: readonly string[]
  docsHubPath?: string
}>()

const query = ref('')

const filteredSections = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.sections

  return props.sections
    .map((section) => ({
      ...section,
      countries: section.countries.filter((country) => country.toLowerCase().includes(q)),
    }))
    .filter((section) => section.countries.length > 0)
})

const totalListed = computed(() =>
  props.sections.reduce((sum, section) => sum + section.countries.length, 0)
)

function sectionClasses(variant: CoverageSection['variant'] = 'default') {
  if (variant === 'warning') {
    return 'border-kura-warning/30 bg-kura-warning/5'
  }
  if (variant === 'muted') {
    return 'border-kura-border bg-kura-background-light/50'
  }
  return 'border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent'
}
</script>

<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <NuxtLink
          v-if="docsHubPath"
          :to="docsHubPath"
          class="inline-flex items-center gap-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors mb-6 pt-16 md:pt-20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </NuxtLink>

        <section class="mb-12 md:mb-16 text-center" :class="docsHubPath ? '' : 'pt-16 md:pt-20'">
          <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-semibold text-kura-primary">{{ badge }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">{{ title }}</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            {{ subtitle }}
          </p>
          <p class="text-sm text-kura-text-secondary mt-4">
            <template v-if="partners?.length">
              Partners:
              <template v-for="(item, index) in partners" :key="item.name">
                <a :href="item.url" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent transition-colors">{{ item.name }}</a><span v-if="index < partners.length - 1"> · </span>
              </template>
            </template>
            <template v-else>
              Partner:
              <a :href="partnerUrl" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent transition-colors">{{ partner }}</a>
            </template>
            · Last updated {{ lastUpdated }}
          </p>
        </section>

        <section class="mb-10 rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8">
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div class="flex-1">
              <label for="country-search" class="block text-sm font-semibold mb-2">Search countries</label>
              <input
                id="country-search"
                v-model="query"
                type="search"
                placeholder="Type a country name..."
                class="w-full px-4 py-3 rounded-xl border border-kura-border bg-white text-kura-text placeholder:text-kura-text-secondary/60 focus:outline-none focus:border-kura-primary/50 focus:ring-2 focus:ring-kura-primary/20"
              />
            </div>
            <div class="text-sm text-kura-text-secondary md:text-right">
              <p>{{ totalListed }} countries listed</p>
              <p v-if="query">{{ filteredSections.reduce((n, s) => n + s.countries.length, 0) }} matches</p>
            </div>
          </div>
        </section>

        <section v-for="section in filteredSections" :key="section.title" class="mb-10">
          <div class="mb-4">
            <h2 class="text-2xl font-bold">{{ section.title }}</h2>
            <p v-if="section.description" class="text-sm text-kura-text-secondary mt-2 max-w-3xl">{{ section.description }}</p>
          </div>
          <div
            class="rounded-2xl border p-6 md:p-8"
            :class="sectionClasses(section.variant)"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2">
              <div
                v-for="country in section.countries"
                :key="country"
                class="text-sm text-kura-text-secondary py-1"
              >
                {{ country }}
              </div>
            </div>
          </div>
        </section>

        <section v-if="query && filteredSections.length === 0" class="mb-10 rounded-2xl border border-kura-border p-12 text-center">
          <p class="text-kura-text-secondary">No countries match "{{ query }}".</p>
        </section>

        <section v-if="notes?.length" class="mb-10 rounded-2xl border border-kura-primary/20 bg-kura-primary/5 p-6 md:p-8">
          <h2 class="text-xl font-bold mb-4">Important notes</h2>
          <ul class="space-y-2 text-sm text-kura-text-secondary">
            <li v-for="note in notes" :key="note" class="flex gap-2">
              <span class="text-kura-primary shrink-0">•</span>
              <span>{{ note }}</span>
            </li>
          </ul>
        </section>

        <section class="rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-8 text-sm text-kura-text-secondary leading-relaxed">
          <p class="mb-3">
            Country availability can change as partners update licensing, sanctions lists, and product coverage.
            Kura displays partner-published lists for transparency — final eligibility is always confirmed during in-app KYC.
          </p>
          <p v-if="sourceLinks?.length">
            Official sources:
            <template v-for="(item, index) in sourceLinks" :key="item.url">
              <a :href="item.url" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent transition-colors">{{ item.label }}</a><span v-if="index < sourceLinks.length - 1"> · </span>
            </template>
          </p>
          <p v-else-if="sourceUrl">
            Official source:
            <a :href="sourceUrl" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent transition-colors">{{ sourceUrl }}</a>
          </p>
        </section>
      </div>
    </main>
  </div>
</template>
