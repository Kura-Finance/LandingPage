<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'Kura Card',
  description: 'Spend USDC with a non-custodial Visa debit card on Gnosis Pay. Permissionless onboarding, freeze controls, and on-chain settlement.',
  path: '/kura-card',
  keywords: 'Kura Card, Gnosis Pay, crypto debit card, USDC spending, non-custodial Visa card',
});

const features = [
  {
    title: 'Non-Custodial Spending',
    description: 'Your card is backed by a smart contract wallet you own. Kura cannot freeze your funds or move your balance without your authorization.',
  },
  {
    title: 'USDC-Powered Visa',
    description: 'Spend your USDC balance in the real world. Virtual Visa card — instantly available for online payments worldwide.',
  },
  {
    title: 'Permissionless Onboarding',
    description: 'Apply in about two minutes. Connect your Kura wallet, verify identity via Sumsub, and issue your virtual card — no gas required for setup.',
  },
  {
    title: 'Freeze & Unfreeze',
    description: 'Instant card controls from the app. Lock your card with one tap when you need to, and restore it just as quickly.',
  },
  {
    title: 'Top Up Your Way',
    description: 'Fund your card wallet with USDC on Base, card deposit via MoonPay, or fiat deposit through regulated on-ramp partners.',
  },
  {
    title: 'Full Transaction History',
    description: 'Track every authorization, clearance, and refund in-app. See merchant details and on-chain settlement references.',
  },
];

const onboardingSteps = [
  'Connect your Kura wallet',
  'Create account & accept terms',
  'Identity verification (KYC)',
  'Source of funds declaration',
  'Phone verification',
  'Deploy card smart wallet',
  'Issue virtual Visa card',
];
</script>

<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <section class="mb-20 text-center pt-16 md:pt-20">
          <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-semibold text-kura-primary">Gnosis Pay · Visa · USDC</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Kura Card</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            A non-custodial Visa debit card powered by Gnosis Pay. Spend USDC anywhere Visa is accepted while your funds stay in a smart wallet only you control.
          </p>
          <div class="flex flex-wrap justify-center gap-3 mt-8">
            <span class="px-3 py-1 rounded-full text-xs font-semibold border border-kura-primary/30 text-kura-primary">Permissionless</span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold border border-kura-primary/30 text-kura-primary">USDC Spending</span>
            <span class="px-3 py-1 rounded-full text-xs font-semibold border border-kura-primary/30 text-kura-primary">Visa Accepted</span>
          </div>
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
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">Get Your Card in Minutes</h2>
          <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10">
            Your Kura wallet is the sole owner of your card smart wallet. Setup is free — we cover the gas.
          </p>
          <ol class="max-w-xl mx-auto space-y-4">
            <li
              v-for="(step, index) in onboardingSteps"
              :key="step"
              class="flex items-start gap-4"
            >
              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-kura-primary/20 text-kura-primary font-bold text-sm flex items-center justify-center">
                {{ index + 1 }}
              </span>
              <span class="text-kura-text-secondary pt-1">{{ step }}</span>
            </li>
          </ol>
          <p class="text-sm text-kura-text-secondary text-center mt-8 max-w-lg mx-auto">
            Currently available for EU and UK residents. Card and fiat services are provided through regulated partners.
          </p>
        </section>

        <section class="text-center py-16 border-t border-kura-border">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Spend Without Surrendering Custody</h2>
          <p class="text-lg text-kura-text-secondary mb-8 max-w-2xl mx-auto">
            Download Kura, fund your wallet, and start spending with your virtual Visa card.
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
