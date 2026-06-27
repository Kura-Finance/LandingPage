<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Trust, security & architecture"
      title="Documentation Center"
      description="Product documentation, supported regions, privacy policies, and security architecture for Kura."
      :divider="false"
    />

    <main class="marketing-container pb-20 md:pb-28 space-y-14 md:space-y-16 pt-2 md:pt-4">
      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">Supported countries</h2>
        <div class="grid md:grid-cols-2 gap-5">
          <DocLinkCard
            v-for="doc in countryDocs"
            :key="doc.title"
            v-bind="doc"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">Trust & policy</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            v-for="doc in trustDocs"
            :key="doc.title"
            v-bind="doc"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">Investors</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            title="Investor Metrics"
            description="Live revenue, waitlist, subscription, and SCA AUM figures from the Kura platform."
            category="Platform Insights"
            to="/investors"
          />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold tracking-tight mb-5">Architecture & technical</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            v-for="doc in architectureDocs"
            :key="doc.title"
            :title="doc.title"
            :description="doc.description"
            :category="doc.category"
            status="Coming soon"
          />
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Need a specific document?</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
          Contact us if you need a dedicated security brief, procurement packet, or custom compliance documentation for your team.
        </p>
        <a href="mailto:support@kura-finance.com" class="btn-primary">
          Request documentation
        </a>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const countryDocs = [
  {
    title: 'Stock Trading Countries',
    description: 'Dinari dShares availability and restricted regions for tokenized US stock trading.',
    category: 'Dinari',
    to: '/docs/stock-countries',
  },
  {
    title: 'On/Off-Ramp Countries',
    description: 'Bridge.xyz bank rails and MoonPay debit/credit card coverage for fiat deposits and withdrawals.',
    category: 'Bridge & MoonPay',
    to: '/docs/on-off-ramp-countries',
  },
]

const trustDocs = [
  {
    title: 'Privacy Policy',
    description: 'How Kura collects, uses, and protects user data under a zero-access operating model.',
    category: 'Policy',
    to: '/privacy',
  },
  {
    title: 'Trust & Security Center',
    description: 'Core security controls, cryptographic posture, and compliance operating framework.',
    category: 'Security',
    to: '/compliance',
  },
  {
    title: 'Terms of Service',
    description: 'Legal terms for using Kura products and service boundaries.',
    category: 'Legal',
    to: '/tos',
  },
]

const architectureDocs = [
  {
    title: 'Security Architecture Overview',
    description: 'System-level view of encryption boundaries, access controls, and Zero-Access design.',
    category: 'Architecture',
  },
  {
    title: 'Data Disclosure & Lawful Request Policy',
    description: 'What data can and cannot be disclosed based on architectural accessibility.',
    category: 'Legal / Security',
  },
  {
    title: 'Incident Response & Transparency',
    description: 'How Kura handles security incidents, user notifications, and transparency reporting.',
    category: 'Operations',
  },
]

usePageSeo({
  title: 'Documentation',
  description: 'Kura documentation for trust policies, privacy controls, partner integrations, and zero-access security architecture.',
  path: '/docs',
  keywords: 'Kura documentation, privacy policy, compliance, security architecture, trust center',
})
</script>
