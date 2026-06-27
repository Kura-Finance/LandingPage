<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Kura Wallet',
  description:
    'Non-custodial smart wallet on Base with Privy MPC, Safe accounts, swaps, fiat ramps, Dinari stocks, and Morpho Earn.',
  path: '/kura-wallet',
  keywords:
    'Kura Wallet, non-custodial wallet, MPC wallet, Safe smart account, Base USDC, Dinari stocks, Morpho',
})

const features = [
  {
    title: 'Privy MPC Signer',
    description:
      'Your private key is secured by Multi-Party Computation — split across secure enclaves so no single server ever holds the full key.',
  },
  {
    title: 'Safe Smart Account on Base',
    description:
      'Funds live in a Safe 1.4.1 smart wallet with ERC-4337 account abstraction — batched transactions and optional gas sponsorship via Paymaster.',
  },
  {
    title: 'Send, Swap & Bridge',
    description:
      'Move USDC and ERC-20 tokens on Base. Swap and bridge across chains via Li.Fi, all signed from your smart account.',
  },
  {
    title: 'Fiat On & Off Ramp',
    description:
      'Deposit fiat in USD, EUR, GBP, BRL, or MXN via Bridge and convert to USDC. Card deposits and USDT on Tron via MoonPay.',
  },
  {
    title: 'WalletConnect on Base',
    description:
      'Connect your Kura Smart Account to dApps on Base. Your Safe address is shared — your keys never leave the app.',
  },
  {
    title: 'Export Anytime',
    description:
      'Your funds are never locked in Kura. Export your signer key and load your Safe in MetaMask, Rabby, or any compatible wallet.',
  },
]

const discoverFeatures = [
  {
    title: 'Crypto markets',
    description: 'Live prices, charts, and one-tap trading for tokens on Base and beyond.',
  },
  {
    title: 'US stocks via Dinari',
    description: 'Buy and sell tokenized US equities from your self-custody wallet with on-chain settlement.',
  },
  {
    title: 'Portfolio view',
    description: 'Unified holdings across crypto, stocks, and earn positions in one dashboard.',
  },
]

const earnFeatures = [
  {
    title: 'Morpho vaults on Base',
    description: 'Deposit USDC into Morpho-powered vaults and earn competitive yield without leaving self-custody.',
  },
  {
    title: 'Transparent APY',
    description: 'See current rates, vault details, and position history before you deposit.',
  },
  {
    title: 'Withdraw on your terms',
    description: 'Move funds back to your Safe wallet whenever you need liquidity.',
  },
]

const architecture = [
  {
    label: 'EOA (Signer)',
    sub: 'Privy Embedded Wallet',
    detail:
      'Signs transactions. MPC-backed key shards backed up via iCloud Keychain or Google Password Manager.',
  },
  {
    label: 'SCA (Smart Account)',
    sub: 'Safe 1.4.1 · ERC-4337 · Base',
    detail:
      'Your on-chain spending wallet. Holds USDC, pays gas via Paymaster, and supports batched operations.',
  },
]
</script>

<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Non-custodial · Base Network"
      title="Kura Wallet"
      description="A non-custodial smart wallet on Base. Hold stablecoins, trade markets, earn yield, connect to dApps, and move money between fiat and crypto — secured by MPC, controlled only by you."
      :tags="['Privy MPC', 'Safe 1.4.1', 'Bridge & MoonPay']"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-20 md:mb-24">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in features" :key="feature.title" class="card-surface p-7 hover:border-kura-primary/30 transition-colors">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section id="discover" class="mb-20 md:mb-24 scroll-mt-24">
        <div class="max-w-2xl mb-10">
          <p class="section-label mb-3">Discover</p>
          <h2 class="text-3xl font-bold tracking-tight mb-3">Trade crypto and US stocks in one app</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Market widgets, portfolio tracking, and Dinari-powered US equity trading — without handing custody to an exchange or broker.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="feature in discoverFeatures" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section id="earn" class="mb-20 md:mb-24 scroll-mt-24">
        <div class="max-w-2xl mb-10">
          <p class="section-label mb-3">Earn</p>
          <h2 class="text-3xl font-bold tracking-tight mb-3">Put idle USDC to work with Morpho</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Earn yield on Base through Morpho vaults while your funds stay in a smart account you control.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="feature in earnFeatures" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="mb-20 md:mb-24 card-surface p-8 md:p-12">
        <h2 class="text-3xl font-bold mb-4 text-center">Two addresses, one wallet</h2>
        <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Separating the signer from the spending wallet gives you smart-account flexibility with passkey-secured key management. Your SCA address — and your funds — stay the same even if you change signers.
        </p>
        <div class="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <div v-for="item in architecture" :key="item.label" class="rounded-xl border border-kura-border p-6 bg-kura-surface">
            <p class="text-xs uppercase tracking-widest font-semibold text-kura-primary mb-2">{{ item.label }}</p>
            <p class="text-lg font-semibold mb-2">{{ item.sub }}</p>
            <p class="text-sm text-kura-text-secondary leading-relaxed">{{ item.detail }}</p>
          </div>
        </div>
      </section>
    </main>

    <CTASection
      title="Your keys, your money"
      description="Download Kura and take control of your on-chain finances — private, portable, and entirely yours."
    />
  </div>
</template>
