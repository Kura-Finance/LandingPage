<template>
  <div class="w-full text-kura-text bg-white">
    <div class="marketing-container pt-28 pb-6 md:pt-32">
      <NuxtLink
        v-if="docsHubPath"
        :to="docsHubPath"
        class="inline-flex items-center gap-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Documentation
      </NuxtLink>
    </div>

    <PageHero
      :eyebrow="badge"
      :title="title"
      :description="subtitle"
    />

    <main class="marketing-container pb-20 md:pb-28 -mt-4">
      <p class="text-sm text-kura-text-secondary text-center mb-10">
        <template v-if="partners?.length">
          Partners:
          <template v-for="(item, index) in partners" :key="item.name">
            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-primary-dark transition-colors">{{ item.name }}</a><span v-if="index < partners.length - 1"> · </span>
          </template>
        </template>
        <template v-else-if="partner">
          Partner:
          <a :href="partnerUrl" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-primary-dark transition-colors">{{ partner }}</a>
        </template>
        · Last updated {{ lastUpdated }}
      </p>

      <section class="card-surface p-6 md:p-8 mb-10">
        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div class="flex-1">
            <label for="country-search" class="block text-sm font-semibold mb-2">Search countries</label>
            <input
              id="country-search"
              v-model="query"
              type="search"
              placeholder="Type a country name..."
              class="w-full px-4 py-3 rounded-xl border border-kura-border bg-kura-surface text-kura-text placeholder:text-kura-text-secondary/60 focus:outline-none focus:border-kura-primary/50 focus:ring-2 focus:ring-kura-primary/20"
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
          <h2 class="text-xl font-bold">{{ section.title }}</h2>
          <p v-if="section.description" class="text-sm text-kura-text-secondary mt-2 max-w-3xl">{{ section.description }}</p>
        </div>
        <div class="card-surface p-6 md:p-8" :class="sectionVariantClass(section.variant)">
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

      <section v-if="query && filteredSections.length === 0" class="card-surface p-12 text-center mb-10">
        <p class="text-kura-text-secondary">No countries match "{{ query }}".</p>
      </section>

      <section v-if="notes?.length" class="rounded-2xl border border-kura-primary/20 bg-kura-primary/5 p-6 md:p-8 mb-10">
        <h2 class="text-lg font-semibold mb-4">Important notes</h2>
        <ul class="space-y-2 text-sm text-kura-text-secondary">
          <li v-for="note in notes" :key="note" class="flex gap-2">
            <span class="text-kura-primary shrink-0">•</span>
            <span>{{ note }}</span>
          </li>
        </ul>
      </section>

      <section class="card-surface p-6 md:p-8 text-sm text-kura-text-secondary leading-relaxed bg-kura-surface">
        <p class="mb-3">
          Country availability can change as partners update licensing, sanctions lists, and product coverage.
          Kura displays partner-published lists for transparency — final eligibility is always confirmed during in-app KYC.
        </p>
        <p v-if="sourceLinks?.length">
          Official sources:
          <template v-for="(item, index) in sourceLinks" :key="item.url">
            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-primary-dark transition-colors">{{ item.label }}</a><span v-if="index < sourceLinks.length - 1"> · </span>
          </template>
        </p>
        <p v-else-if="sourceUrl">
          Official source:
          <a :href="sourceUrl" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-primary-dark transition-colors">{{ sourceUrl }}</a>
        </p>
      </section>
    </main>
  </div>
</template>

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
  props.sections.reduce((sum, section) => sum + section.countries.length, 0),
)

function sectionVariantClass(variant: CoverageSection['variant'] = 'default') {
  if (variant === 'warning') return 'border-kura-warning/30 bg-kura-warning/5'
  if (variant === 'muted') return 'bg-kura-surface'
  return ''
}
</script>
