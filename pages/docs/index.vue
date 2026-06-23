<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <section class="mb-14 md:mb-20 text-center pt-16 md:pt-20">
          <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-semibold text-kura-primary">Trust, Security & Architecture Docs</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Documentation Center</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            Product documentation, supported regions, privacy policies, and security architecture for Kura.
          </p>
        </section>

        <section class="mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Supported Countries</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="doc in countryDocs"
              :key="doc.title"
              :to="doc.to"
              class="group rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:border-kura-primary/40 transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs uppercase tracking-widest font-bold text-kura-primary">{{ doc.category }}</span>
                <span class="text-[11px] px-2 py-1 rounded-full border border-kura-accent/40 text-kura-accent">
                  Published
                </span>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-kura-primary transition-colors">{{ doc.title }}</h3>
              <p class="text-sm text-kura-text-secondary leading-relaxed">{{ doc.description }}</p>
            </NuxtLink>
          </div>
        </section>

        <section class="mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Trust & Policy</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="doc in trustDocs"
              :key="doc.title"
              :to="doc.to"
              class="group rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:border-kura-primary/40 transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs uppercase tracking-widest font-bold text-kura-primary">{{ doc.category }}</span>
                <span class="text-[11px] px-2 py-1 rounded-full border" :class="doc.status === 'Published' ? 'border-kura-accent/40 text-kura-accent' : 'border-kura-primary/40 text-kura-primary'">
                  {{ doc.status }}
                </span>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-kura-primary transition-colors">{{ doc.title }}</h3>
              <p class="text-sm text-kura-text-secondary leading-relaxed">{{ doc.description }}</p>
            </NuxtLink>
          </div>
        </section>

        <section class="mb-10 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">Architecture & Technical</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article
              v-for="doc in architectureDocs"
              :key="doc.title"
              class="rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs uppercase tracking-widest font-bold text-kura-primary">{{ doc.category }}</span>
                <span class="text-[11px] px-2 py-1 rounded-full border border-kura-primary/40 text-kura-primary">
                  {{ doc.status }}
                </span>
              </div>
              <h3 class="text-xl font-bold mb-3">{{ doc.title }}</h3>
              <p class="text-sm text-kura-text-secondary leading-relaxed mb-5">{{ doc.description }}</p>
              <button class="text-sm font-semibold text-kura-primary cursor-default">
                Coming Soon
              </button>
            </article>
          </div>
        </section>

        <section class="rounded-2xl border border-kura-primary/30 bg-gradient-to-r from-kura-primary/10 to-kura-secondary/10 p-8 md:p-10 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Need a Specific Document?</h2>
          <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6">
            Contact us if you need a dedicated security brief, procurement packet, or custom compliance documentation for your team.
          </p>
          <a
            href="mailto:support@kura-finance.com"
            class="inline-block px-7 py-3 bg-gradient-to-r from-kura-primary to-kura-secondary rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300"
          >
            Request Documentation
          </a>
        </section>
      </div>
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
    title: 'Card Supported Countries',
    description: 'Gnosis Pay residency requirements for Kura Card permissionless onboarding.',
    category: 'Gnosis Pay',
    to: '/docs/card-countries',
  },
  {
    title: 'On/Off-Ramp Countries',
    description: 'Bridge.xyz bank rails and MoonPay debit/credit card coverage for fiat deposits and withdrawals.',
    category: 'Bridge.xyz & MoonPay',
    to: '/docs/on-off-ramp-countries',
  },
]

const trustDocs = [
  {
    title: 'Privacy Policy',
    description: 'How Kura collects, uses, and protects user data under a zero-access operating model.',
    category: 'Policy',
    status: 'Published',
    to: '/privacy',
  },
  {
    title: 'Trust & Security Center',
    description: 'Core security controls, cryptographic posture, and compliance operating framework.',
    category: 'Security',
    status: 'Published',
    to: '/compliance',
  },
  {
    title: 'Terms of Service',
    description: 'Legal terms for using Kura products and service boundaries.',
    category: 'Legal',
    status: 'Published',
    to: '/tos',
  },
]

const architectureDocs = [
  {
    title: 'Security Architecture Overview',
    description: 'System-level view of encryption boundaries, access controls, and Zero-Access design.',
    category: 'Architecture',
    status: 'Draft',
  },
  {
    title: 'Data Disclosure & Lawful Request Policy',
    description: 'What data can and cannot be disclosed based on architectural accessibility.',
    category: 'Legal/Security',
    status: 'Draft',
  },
  {
    title: 'Incident Response & Transparency',
    description: 'How Kura handles security incidents, user notifications, and transparency reporting.',
    category: 'Operations',
    status: 'Draft',
  },
]

usePageSeo({
  title: 'Documentation',
  description: 'Kura documentation for trust policies, privacy controls, partner integrations, and zero-access security architecture.',
  path: '/docs',
  keywords: 'Kura documentation, privacy policy, compliance, security architecture, trust center',
})
</script>
