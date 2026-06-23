<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'TrackFi',
  description: 'Connect banking, brokerage, and on-chain accounts in one passkey-encrypted dashboard. Zero-access sync keeps your financial data private.',
  path: '/trackfi',
  keywords: 'TrackFi, portfolio tracker, net worth, Plaid, DeBank, zero-access finance, encrypted dashboard',
});

const pillars = [
  {
    title: 'Banking',
    subtitle: 'Connected accounts, spending & transactions via Plaid',
    description: 'Link banks and credit cards with read-only permissions. View balances, categorize spending, build budgets, and track cash flow — all encrypted before it leaves your device.',
    accent: 'from-indigo-500/10 to-indigo-500/5',
    border: 'hover:border-indigo-500/30',
  },
  {
    title: 'Brokers',
    subtitle: 'Stocks, ETFs & broker-held assets',
    description: 'Connect investment accounts through Plaid and link major crypto exchanges including Binance, OKX, Bybit, Coinbase, Kraken, and more. See holdings across tradFi and CEX in one view.',
    accent: 'from-emerald-500/10 to-emerald-500/5',
    border: 'hover:border-emerald-500/30',
  },
  {
    title: 'DeFi',
    subtitle: 'On-chain tokens & DeFi protocol positions',
    description: 'Track EVM wallet tokens and protocol positions across Ethereum, Base, Arbitrum, and more. Connect via WalletConnect or add your Kura Wallet with one tap.',
    accent: 'from-amber-500/10 to-amber-500/5',
    border: 'hover:border-amber-500/30',
  },
];

const securityFeatures = [
  {
    title: 'Passkey-Protected E2EE',
    description: 'TrackFi uses Face ID or Touch ID to unlock your encryption key. Financial data is encrypted end-to-end — the server stores ciphertext only and cannot read your records.',
  },
  {
    title: 'Zero-Access Architecture',
    description: 'Plaid snapshots, exchange balances, DeBank positions, and net-worth history are encrypted with your key before sync. Readable data never sits on our servers.',
  },
  {
    title: 'Net Worth Over Time',
    description: 'Encrypted time-series snapshots show your full financial picture across fiat, brokerage, and on-chain assets — with history depth based on your plan.',
  },
  {
    title: 'Background Sync',
    description: 'Stay current with scheduled background sync for connected accounts while your session is unlocked. Manual refresh limits scale with your subscription tier.',
  },
];
</script>

<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <section class="mb-20 text-center pt-16 md:pt-20">
          <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-semibold text-kura-primary">Financial Tracking · Zero-Access E2EE</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">TrackFi</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            Your complete financial picture — banking, brokerage, and on-chain — in one dashboard. Encrypted end-to-end with your Passkey, so only you can read your data.
          </p>
        </section>

        <section class="mb-20">
          <p class="text-xs uppercase tracking-widest font-bold text-kura-primary text-center mb-8">Three Pillars</p>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="pillar in pillars"
              :key="pillar.title"
              class="border border-kura-border rounded-2xl p-8 transition-colors bg-gradient-to-br"
              :class="[pillar.accent, pillar.border]"
            >
              <h3 class="text-2xl font-bold mb-2">{{ pillar.title }}</h3>
              <p class="text-sm text-kura-primary font-medium mb-4">{{ pillar.subtitle }}</p>
              <p class="text-kura-text-secondary leading-relaxed text-sm">{{ pillar.description }}</p>
            </div>
          </div>
        </section>

        <section class="mb-20">
          <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Privacy by Architecture</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="feature in securityFeatures"
              :key="feature.title"
              class="border border-kura-border rounded-2xl p-8 hover:border-kura-primary/30 transition-colors bg-gradient-to-br from-white/[0.04] to-transparent"
            >
              <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
              <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </section>

        <section class="mb-20 rounded-2xl border border-kura-primary/30 bg-gradient-to-r from-kura-primary/10 to-kura-secondary/10 p-8 md:p-10 text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Free to Start, Pro for More</h2>
          <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
            Kura Basic includes TrackFi with unlimited account connections and 30 days of encrypted history. Upgrade to Pro or Ultimate for deeper history, priority sync, budgeting, and market intelligence.
          </p>
          <NuxtLink
            to="/pricing"
            class="inline-block text-kura-primary hover:text-kura-accent transition-colors font-semibold"
          >
            View pricing →
          </NuxtLink>
        </section>

        <section class="text-center py-16 border-t border-kura-border">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">See Everything in One Place</h2>
          <p class="text-lg text-kura-text-secondary mb-8 max-w-2xl mx-auto">
            Download Kura, set up your Passkey, and connect your accounts in minutes.
          </p>
          <NuxtLink
            to="/download"
            class="inline-block px-8 py-3 bg-gradient-to-r from-kura-primary to-kura-secondary hover:shadow-glow-primary text-white font-bold rounded-lg transition-all duration-300"
          >
            Download Kura
          </NuxtLink>
        </section>
      </div>
    </main>
  </div>
</template>
