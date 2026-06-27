<script setup lang="ts">
import { bridgeCoverage } from '~/data/coverage/bridge-countries'
import { moonpayCoverage } from '~/data/coverage/moonpay-countries'

definePageMeta({ layout: 'default' })

const sections = [
  {
    title: 'USD on/off-ramp (ACH & Wire)',
    description: 'Countries where Bridge supports USD virtual accounts and transfers for Kura fiat deposits and withdrawals.',
    countries: bridgeCoverage.usd,
  },
  {
    title: 'EUR & GBP on/off-ramp (SEPA & Faster Payments)',
    description: 'Countries where Bridge supports EUR SEPA and GBP Faster Payments rails used in Kura.',
    countries: bridgeCoverage.eurGbp,
  },
  {
    title: 'MXN, BRL & COP on/off-ramp (SPEI, Pix, Bre-B)',
    description: 'Countries where Bridge supports Mexico SPEI, Brazil Pix, and Colombia Bre-B / bank transfer rails.',
    countries: bridgeCoverage.mxnBrlCop,
  },
  {
    title: 'Debit/Credit Card (MoonPay)',
    description: 'Countries where MoonPay supports debit and credit card purchases for crypto on-ramp in Kura.',
    countries: moonpayCoverage.debitCreditCard,
  },
  {
    title: 'Not available for Bridge onboarding',
    description: 'Bridge services are unavailable for individuals and businesses located in these countries.',
    countries: bridgeCoverage.unavailable,
    variant: 'warning' as const,
  },
  {
    title: 'Not available for MoonPay card purchases',
    description: 'MoonPay debit and credit card on-ramp is unavailable for residents of these countries.',
    countries: moonpayCoverage.unavailable,
    variant: 'warning' as const,
  },
  {
    title: 'Prohibited jurisdictions',
    description: 'Bridge will not facilitate services for these jurisdictions under any rail.',
    countries: bridgeCoverage.prohibited,
    variant: 'warning' as const,
  },
]

const notes = [
  'Kura on/off-ramps support USD, EUR, GBP, MXN, BRL, and COP via Bridge.xyz. Additional endorsements may be required for non-USD fiat rails after KYC.',
  'Debit and credit card crypto purchases in Kura are powered by MoonPay. Availability may vary by card issuer, asset, and local regulations.',
  'United States: Bridge supports most states except New York based on principal residential or operating address. Business eligibility has additional rules — see Bridge documentation.',
  'United States: MoonPay card purchases are unavailable for residents of the U.S. Virgin Islands. Sell (off-ramp) has additional state restrictions — see MoonPay documentation.',
  'USDT and Bridge-issued stablecoins are not supported for users in the European Economic Area (EEA) due to regulatory restrictions.',
  'Inclusion on these lists does not guarantee every payment method or currency is available for your specific customer profile.',
]

usePageSeo({
  title: 'On/Off-Ramp Countries (Bridge & MoonPay)',
  description: 'Fiat on-ramp and off-ramp country coverage for Kura Wallet — Bridge.xyz bank rails and MoonPay debit/credit card purchases.',
  path: '/docs/on-off-ramp-countries',
  keywords: 'Bridge.xyz countries, MoonPay countries, fiat on-ramp, off-ramp, Kura Wallet deposits',
})
</script>

<template>
  <CoverageCountriesPage
    badge="Kura Wallet · Bridge.xyz & MoonPay"
    title="On/Off-Ramp Countries"
    subtitle="Fiat deposits and withdrawals in Kura are powered by Bridge.xyz bank rails and MoonPay debit/credit card purchases. Coverage varies by payment method — search below or browse by rail."
    :partners="[
      { name: 'Bridge.xyz', url: 'https://bridge.xyz' },
      { name: 'MoonPay', url: 'https://moonpay.com' },
    ]"
    docs-hub-path="/docs"
    :last-updated="moonpayCoverage.lastUpdated"
    :source-links="[
      { label: 'Bridge.xyz supported countries', url: bridgeCoverage.sourceUrl },
      { label: 'MoonPay countries API', url: moonpayCoverage.sourceUrl },
    ]"
    :sections="sections"
    :notes="notes"
  />
</template>
