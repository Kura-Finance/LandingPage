<script setup lang="ts">
import { dinariCoverage } from '~/data/coverage/dinari-countries'

definePageMeta({ layout: 'default' })

const sections = [
  {
    title: 'Not available',
    description: 'These jurisdictions cannot access Dinari stock trading through Kura at this time.',
    countries: dinariCoverage.notAvailable.map((item) => item.name),
    variant: 'warning' as const,
  },
  {
    title: 'Restricted countries',
    description: 'Dinari cannot support business activities in these countries due to OFAC, FATF, and other regulatory requirements.',
    countries: dinariCoverage.restricted,
    variant: 'warning' as const,
  },
]

const notes = [
  dinariCoverage.summary,
  ...dinariCoverage.notAvailable.map((item) => `${item.name}: ${item.note}`),
  'All Dinari users must complete KYC before trading tokenized US stocks and ETFs.',
  'Availability outside restricted countries does not guarantee every security or order type is offered in your jurisdiction.',
]

usePageSeo({
  title: 'Stock Trading Countries (Dinari)',
  description: 'See which countries support tokenized US stock trading via Dinari in Kura, and which regions are restricted.',
  path: '/docs/stock-countries',
  keywords: 'Dinari countries, US stock trading, dShares availability, Kura stocks',
})
</script>

<template>
  <CoverageCountriesPage
    badge="Kura · Dinari"
    title="Stock Trading Countries"
    subtitle="Tokenized US stocks and ETFs via Dinari are available in 85+ jurisdictions outside the United States. This page lists regions where trading is not supported."
    partner="Dinari"
    partner-url="https://dinari.com"
    docs-hub-path="/docs"
    :last-updated="dinariCoverage.lastUpdated"
    :source-url="dinariCoverage.sourceUrl"
    :sections="sections"
    :notes="notes"
  />
</template>
