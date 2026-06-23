<script setup lang="ts">
import { gnosisPayCoverage, gnosisPaySupportedCountries } from '~/data/coverage/gnosis-pay-countries'

definePageMeta({ layout: 'default' })

const sections = [
  {
    title: 'Supported countries of residency (36)',
    description: 'Legal residents of these countries can apply for Kura Card through Gnosis Pay permissionless onboarding.',
    countries: gnosisPaySupportedCountries,
  },
  {
    title: 'Coming soon',
    description: 'Gnosis Pay is actively expanding. These markets are announced but not yet open for card residency.',
    countries: gnosisPayCoverage.comingSoon,
    variant: 'muted' as const,
  },
]

usePageSeo({
  title: 'Kura Card Countries (Gnosis Pay)',
  description: 'Eligible countries for Kura Card via Gnosis Pay permissionless onboarding across Europe and Latin America.',
  path: '/docs/card-countries',
  keywords: 'Gnosis Pay countries, Kura Card availability, crypto debit card regions',
})
</script>

<template>
  <CoverageCountriesPage
    badge="Kura Card · Gnosis Pay"
    title="Card Supported Countries"
    subtitle="Kura Card uses Gnosis Pay permissionless integration. You must be a legal resident of a supported country to complete card onboarding and receive a virtual Visa."
    partner="Gnosis Pay"
    partner-url="https://gnosispay.com"
    docs-hub-path="/docs"
    :last-updated="gnosisPayCoverage.lastUpdated"
    :source-url="gnosisPayCoverage.sourceUrl"
    :sections="sections"
    :notes="gnosisPayCoverage.notes"
  />
</template>
