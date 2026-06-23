<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'Kura Wallet',
  description: 'Non-custodial smart wallet on Base with Privy MPC, Safe accounts, USDC payments, crypto swaps, RWA, and US stock trading via Dinari.',
  path: '/kura-wallet',
  keywords: 'Kura Wallet, non-custodial wallet, MPC wallet, Safe smart account, Base USDC, Dinari stocks',
});

const features = [
  {
    title: 'Privy MPC Signer',
    description: 'Your private key is secured by Multi-Party Computation — split across secure enclaves so no single server ever holds the full key.',
  },
  {
    title: 'Safe Smart Account on Base',
    description: 'Funds live in a Safe 1.4.1 smart wallet with ERC-4337 account abstraction — batched transactions and optional gas sponsorship via Paymaster.',
  },
  {
    title: 'Send, Swap & Bridge',
    description: 'Move USDC and ERC-20 tokens on Base. Swap and bridge across chains via Li.Fi, all signed from your smart account.',
  },
  {
    title: 'Fiat On & Off Ramp',
    description: 'Deposit fiat in USD, EUR, GBP, BRL, or MXN and convert to USDC automatically. Withdraw to your bank via ACH or SEPA when you want.',
  },
  {
    title: 'WalletConnect on Base',
    description: 'Connect your Kura Smart Account to dApps on Base. Your Safe address is shared — your keys never leave the app.',
  },
  {
    title: 'Export Anytime',
    description: 'Your funds are never locked in Kura. Export your signer key and load your Safe in MetaMask, Rabby, or any compatible wallet.',
  },
];

const architecture = [
  {
    label: 'EOA (Signer)',
    sub: 'Privy Embedded Wallet',
    detail: 'Signs transactions. MPC-backed key shards backed up via iCloud Keychain or Google Password Manager.',
  },
  {
    label: 'SCA (Smart Account)',
    sub: 'Safe 1.4.1 · ERC-4337 · Base',
    detail: 'Your on-chain spending wallet. Holds USDC, pays gas via Paymaster, and supports batched operations.',
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
            <span class="text-sm font-semibold text-kura-primary">Non-Custodial · Base Network</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Kura Wallet</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            A non-custodial smart wallet on Base. Hold stablecoins, send and swap on-chain, connect to dApps, and move money between fiat and crypto — secured by MPC, controlled only by you.
          </p>
        </section>

        <section class="mb-20">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="border border-kura-border rounded-2xl p-8 hover:border-kura-primary/30 transition-colors bg-gradient-to-br from-white/[0.04] to-transparent"
            >
              <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
              <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </section>

        <section class="mb-20 rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">Two Addresses, One Wallet</h2>
          <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10">
            Separating the signer from the spending wallet gives you smart-account flexibility with passkey-secured key management. Your SCA address — and your funds — stay the same even if you change signers.
          </p>
          <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              v-for="item in architecture"
              :key="item.label"
              class="rounded-xl border border-kura-border p-6"
            >
              <p class="text-xs uppercase tracking-widest font-bold text-kura-primary mb-2">{{ item.label }}</p>
              <p class="text-lg font-semibold mb-2">{{ item.sub }}</p>
              <p class="text-sm text-kura-text-secondary leading-relaxed">{{ item.detail }}</p>
            </div>
          </div>
        </section>

        <section class="text-center py-16 border-t border-kura-border">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Your Keys, Your Money</h2>
          <p class="text-lg text-kura-text-secondary mb-8 max-w-2xl mx-auto">
            Download Kura and take control of your on-chain finances — private, portable, and entirely yours.
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
