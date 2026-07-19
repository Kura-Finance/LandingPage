<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'TrackFi',
  description:
    'Your complete financial picture in one dashboard. Connect banks, investments, and accounts — protected with zero access encryption.',
  path: '/trackfi',
  keywords: 'TrackFi, portfolio, net worth, financial dashboard, privacy, account tracking',
})

const pillars = [
  {
    title: 'Banking',
    subtitle: 'Checking, savings, and credit',
    description:
      'Link bank accounts and credit cards with read-only access. View balances, track spending, and understand your cash flow — encrypted before it ever leaves your device.',
    to: '/banking',
  },
  {
    title: 'Investments',
    subtitle: 'Stocks, ETFs, and exchange accounts',
    description:
      'Connect brokerage and investment accounts alongside major exchange platforms. See your full investment picture in one place.',
    to: '/investments',
  },
  {
    title: 'Digital assets',
    subtitle: 'Portfolio and account positions',
    description:
      'Track digital asset holdings across supported networks. Connect external accounts or link your Kura account with one tap.',
    to: '/digital-assets',
  },
]

const securityFeatures = [
  {
    title: 'Zero access encryption',
    description:
      'Your financial data is encrypted on your device before sync. Kura stores ciphertext only — we cannot read your records.',
  },
  {
    title: 'Passkey protection',
    description:
      'Unlock your dashboard with Face ID or Touch ID. Your encryption key never leaves your device unprotected.',
  },
  {
    title: 'Unified dashboard',
    description:
      'Banking, investments, and digital holdings in one calm screen — without switching apps.',
  },
  {
    title: 'Always up to date',
    description:
      'Scheduled background sync keeps connected accounts current while your session is active.',
  },
]
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Portfolio"
      title="See everything in one place"
      description="Your complete financial picture — banking, investments, and accounts — in one beautiful dashboard. Private by default, encrypted by design."
      :tags="['Banking', 'Investments', 'Zero access encryption']"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-20 md:mb-28">
        <div class="max-w-2xl mb-12">
          <p class="section-label mb-3">Overview</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
            One dashboard for all your money
          </h2>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <NuxtLink
            v-for="pillar in pillars"
            :key="pillar.title"
            :to="pillar.to"
            class="group card-surface p-7 hover:border-kura-primary/30 hover:shadow-card transition-all"
          >
            <h3 class="text-xl font-semibold mb-2 group-hover:text-kura-primary transition-colors">{{ pillar.title }}</h3>
            <p class="text-sm text-kura-primary font-medium mb-4">{{ pillar.subtitle }}</p>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ pillar.description }}</p>
            <span class="inline-flex items-center gap-1 mt-4 text-sm font-medium text-kura-primary">
              Learn more
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </section>

      <section class="mb-20 md:mb-28">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <p class="section-label mb-3">Privacy</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">Private by design</h2>
          <p class="text-kura-text-secondary mt-4 leading-relaxed">
            Your assets and identity remain under your control. TrackFi is built so your data stays yours.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="feature in securityFeatures" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface rounded-3xl">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Free to start, Pro for more</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
          Kura Basic includes TrackFi with unlimited account connections and 30 days of encrypted history. Upgrade for deeper history, priority sync, and advanced insights.
        </p>
        <NuxtLink to="/pricing" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-semibold text-sm">
          View pricing →
        </NuxtLink>
      </section>
    </main>

    <CTASection
      title="Your money, one view"
      description="Download Kura, set up your passkey, and connect your accounts in minutes."
      primary-label="Download Kura"
    />
  </div>
</template>
