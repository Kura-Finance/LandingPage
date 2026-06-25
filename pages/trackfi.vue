<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'TrackFi',
  description:
    'Connect banking, brokerage, and on-chain accounts in one zero access encrypted dashboard. Plaid, CEX APIs, and DeBank with zero-access sync.',
  path: '/trackfi',
  keywords: 'TrackFi, portfolio tracker, net worth, Plaid, DeBank, zero-access finance, encrypted dashboard',
})

const pillars = [
  {
    title: 'Banking',
    subtitle: 'Plaid-connected accounts, spending & transactions',
    description:
      'Link banks and credit cards with read-only permissions. View balances, categorize spending, build budgets, and track cash flow — all protected with zero access encryption before it leaves your device.',
  },
  {
    title: 'Brokers & CEX',
    subtitle: 'Stocks, ETFs, and exchange APIs',
    description:
      'Connect investment accounts through Plaid and link major crypto exchanges including Binance, OKX, Bybit, Coinbase, Kraken, and more.',
  },
  {
    title: 'DeFi',
    subtitle: 'On-chain tokens & protocol positions',
    description:
      'Track EVM wallet tokens and protocol positions via DeBank across Ethereum, Base, Arbitrum, and more. Connect via WalletConnect or add your Kura Wallet with one tap.',
  },
]

const securityFeatures = [
  {
    title: 'Passkey-Protected Zero Access Encryption',
    description:
      'TrackFi uses Face ID or Touch ID to unlock your encryption key. Financial data uses zero access encryption — our servers store ciphertext only.',
  },
  {
    title: 'Zero-Access Architecture',
    description:
      'Plaid snapshots, exchange balances, DeBank positions, and net-worth history are encrypted with your key before sync.',
  },
  {
    title: 'Net Worth Over Time',
    description:
      'Encrypted time-series snapshots show your full financial picture across fiat, brokerage, and on-chain assets.',
  },
  {
    title: 'Background Sync',
    description:
      'Stay current with scheduled background sync for connected accounts while your session is unlocked.',
  },
]
</script>

<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Financial tracking · Zero access encryption"
      title="TrackFi"
      description="Your complete financial picture — banking, brokerage, and on-chain — in one dashboard. Protected with zero access encryption and your passkey, so only you can read your data."
      :tags="['Plaid', '9 CEX APIs', 'DeBank', 'Zero access encryption']"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-20 md:mb-24">
        <p class="section-label text-center mb-3">Three pillars</p>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="pillar in pillars" :key="pillar.title" class="card-surface p-7">
            <h3 class="text-xl font-semibold mb-2">{{ pillar.title }}</h3>
            <p class="text-sm text-kura-primary font-medium mb-4">{{ pillar.subtitle }}</p>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ pillar.description }}</p>
          </div>
        </div>
      </section>

      <section class="mb-20 md:mb-24">
        <div class="max-w-2xl mx-auto text-center mb-10">
          <p class="section-label mb-3">Security</p>
          <h2 class="text-3xl font-bold tracking-tight">Privacy by architecture</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="feature in securityFeatures" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Free to start, Pro for more</h2>
        <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed text-sm">
          Kura Basic includes TrackFi with unlimited account connections and 30 days of encrypted history. Upgrade to Pro or Ultimate for deeper history, priority sync, budgeting, and market intelligence.
        </p>
        <NuxtLink to="/pricing" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-semibold text-sm">
          View pricing →
        </NuxtLink>
      </section>
    </main>

    <CTASection
      title="See everything in one place"
      description="Download Kura, set up your passkey, and connect your accounts in minutes."
    />
  </div>
</template>
