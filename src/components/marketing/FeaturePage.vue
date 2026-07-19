<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      :eyebrow="hero.eyebrow"
      :title="hero.title"
      :description="hero.description"
      :tags="hero.tags"
    >
      <div v-if="heroActions?.length" class="flex flex-wrap gap-3">
        <template v-for="action in heroActions" :key="action.label">
          <a
            v-if="isExternalLink(action.to)"
            :href="action.to"
            target="_blank"
            rel="noopener noreferrer"
            :class="action.primary ? 'btn-primary' : 'btn-secondary'"
          >
            {{ action.label }}
          </a>
          <NuxtLink
            v-else
            :to="action.to"
            :class="action.primary ? 'btn-primary' : 'btn-secondary'"
          >
            {{ action.label }}
          </NuxtLink>
        </template>
      </div>
    </PageHero>

    <main class="marketing-container pb-20 md:pb-28">
      <section v-if="callout" class="mb-14 md:mb-16">
        <div class="rounded-3xl border border-kura-primary/20 bg-kura-primary/5 p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p v-if="callout.label" class="section-label mb-3">{{ callout.label }}</p>
          <h2 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{{ callout.title }}</h2>
          <p class="text-kura-text-secondary leading-relaxed mb-6">{{ callout.description }}</p>
          <a
            v-if="callout.ctaLabel && callout.ctaTo && isExternalLink(callout.ctaTo)"
            :href="callout.ctaTo"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            {{ callout.ctaLabel }}
          </a>
          <NuxtLink v-else-if="callout.ctaLabel && callout.ctaTo" :to="callout.ctaTo" class="btn-primary">
            {{ callout.ctaLabel }}
          </NuxtLink>
        </div>
      </section>

      <section
        v-for="section in sections"
        :key="section.title"
        class="mb-20 md:mb-28"
        :class="section.id ? 'scroll-mt-24' : ''"
        :id="section.id"
      >
        <div class="max-w-2xl mb-12">
          <p v-if="section.label" class="section-label mb-3">{{ section.label }}</p>
          <h2 class="headline-xl text-display-sm md:text-[2.5rem] mb-4">{{ section.title }}</h2>
          <p v-if="section.description" class="text-kura-text-secondary leading-relaxed text-lg">
            {{ section.description }}
          </p>
        </div>
        <div
          class="grid gap-5"
          :class="sectionColumnsClass(section.columns ?? 3)"
        >
          <component
            :is="feature.to ? 'NuxtLink' : 'div'"
            v-for="feature in section.features"
            :key="feature.title"
            :to="feature.to"
            class="card-surface p-7 transition-all duration-200"
            :class="feature.to ? 'group hover:border-kura-primary/30 hover:shadow-card' : 'hover:shadow-card'"
          >
            <h3
              class="text-lg font-semibold mb-3"
              :class="feature.to ? 'group-hover:text-kura-primary transition-colors' : ''"
            >
              {{ feature.title }}
            </h3>
            <p v-if="feature.subtitle" class="text-sm text-kura-primary font-medium mb-3">{{ feature.subtitle }}</p>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
            <span v-if="feature.to" class="inline-flex items-center gap-1 mt-4 text-sm font-medium text-kura-primary">
              Learn more
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </component>
        </div>
      </section>

      <section v-if="principles?.length" class="card-surface p-8 md:p-12 bg-kura-surface">
        <h2 v-if="principlesTitle" class="headline-xl text-display-sm mb-4 text-center tracking-[-0.02em]">
          {{ principlesTitle }}
        </h2>
        <p v-if="principlesDescription" class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ principlesDescription }}
        </p>
        <div class="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div
            v-for="item in principles"
            :key="item.title"
            class="rounded-2xl border border-kura-border p-6 bg-white"
          >
            <p class="text-lg font-semibold mb-2">{{ item.title }}</p>
            <p class="text-sm text-kura-text-secondary leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </section>
    </main>

    <CTASection
      :title="cta.title"
      :description="cta.description"
      :primary-label="cta.primaryLabel"
      :primary-to="cta.primaryTo"
      :secondary-label="cta.secondaryLabel"
      :secondary-to="cta.secondaryTo"
    />
  </div>
</template>

<script setup lang="ts">
import type { FeaturePageConfig } from '~/data/feature-pages'
import { isExternalLink } from '~/utils/site'

defineProps<FeaturePageConfig>()

function sectionColumnsClass(columns: 2 | 3) {
  return columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
}
</script>
