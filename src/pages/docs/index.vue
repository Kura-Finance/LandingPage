<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Trust, security & architecture"
      title="Documentation Center"
      description="Policies, legacy coverage pages, and source code for Kura, now an open-source project."
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
        <h2 class="text-2xl font-bold tracking-tight mb-5">Source code</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <DocLinkCard
            title="Kura on GitHub"
            description="The full Kura stack is open source. Read, fork, and run it yourself. Copyright Prism Capital LLC."
            category="Open source"
            to="https://github.com/Kura-Finance"
          />
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Legal or privacy question?</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
          Kura has no support team. For legal or privacy matters about the Service, email us.
        </p>
        <a href="mailto:legal@kura-finance.com" class="btn-primary">
          Contact legal
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
    description: 'Legacy reference: Dinari dShares coverage. US stock trading in Kura has been discontinued.',
    category: 'Dinari',
    status: 'Discontinued',
    to: '/docs/stock-countries',
  },
  {
    title: 'On/Off-Ramp Countries',
    description: 'Legacy reference: Bridge.xyz and MoonPay coverage. Fiat deposits and withdrawals in Kura have been discontinued.',
    category: 'Bridge & MoonPay',
    status: 'Discontinued',
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
    description: 'Legal terms for using Kura products, including arbitration and service boundaries.',
    category: 'Legal',
    to: '/tos',
  },
  {
    title: 'Risk Disclosure',
    description: 'Material risks of non-custodial wallets, DeFi, bridges, cards, and partner services.',
    category: 'Legal',
    to: '/disclaimer',
  },
  {
    title: 'Referral Program Terms',
    description: 'Program discontinued. Rules that applied to past referral participation.',
    category: 'Legal',
    to: '/referral-terms',
  },
  {
    title: 'Prohibited Activities',
    description: 'Sanctions, financial crime, platform abuse, and digital-asset misuse restrictions.',
    category: 'Legal',
    to: '/prohibited-activities',
  },
]

usePageSeo({
  title: 'Documentation',
  description: 'Kura documentation: legal policies, legacy coverage pages, and the open-source code on GitHub.',
  path: '/docs',
  keywords: 'Kura documentation, privacy policy, compliance, open source, trust center',
})
</script>
