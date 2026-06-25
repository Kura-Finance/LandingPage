<template>
  <section id="products" class="py-20 md:py-28 bg-white">
    <div class="marketing-container">
      <div class="max-w-2xl mb-14 md:mb-16">
        <p class="section-label mb-3">Product suite</p>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-kura-text mb-4">
          Everything you need to run your financial life
        </h2>
        <p class="text-lg text-kura-text-secondary leading-relaxed">
          Wallet, markets, card, yield, and portfolio tracking — designed to work together without giving up custody.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <NuxtLink
          v-for="product in products"
          :key="product.name"
          :to="product.to"
          class="group card-surface p-6 md:p-7 hover:border-kura-primary/30 hover:shadow-card transition-all duration-200"
        >
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-kura-primary"
            :class="product.iconBg"
          >
            <component :is="product.icon" class="w-5 h-5" />
          </div>
          <h3 class="text-lg font-semibold text-kura-text mb-2 group-hover:text-kura-primary transition-colors">
            {{ product.name }}
          </h3>
          <p class="text-sm text-kura-text-secondary leading-relaxed">
            {{ product.description }}
          </p>
          <span class="inline-flex items-center gap-1 mt-4 text-sm font-medium text-kura-primary">
            Learn more
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const icon = (paths: string) =>
  h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.75', d: paths }),
  ])

const products = [
  {
    name: 'Kura Wallet',
    description: 'Safe smart account on Base with MPC signing, swaps, bridges, and fiat on/off ramps via Bridge and MoonPay.',
    to: '/kura-wallet',
    iconBg: 'bg-kura-primary/10',
    icon: icon('M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'),
  },
  {
    name: 'Discover & Trade',
    description: 'Buy and sell crypto, tokenized RWAs, and US equities via Dinari — with market widgets and portfolio views.',
    to: '/kura-wallet#discover',
    iconBg: 'bg-kura-secondary/10',
    icon: icon('M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'),
  },
  {
    name: 'Morpho Earn',
    description: 'Put idle USDC to work with Morpho vaults on Base. Earn competitive yield without leaving self-custody.',
    to: '/kura-wallet#earn',
    iconBg: 'bg-kura-accent/10',
    icon: icon('M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'),
  },
  {
    name: 'Kura Card',
    description: 'Spend USDC with a non-custodial Visa debit card. 0.5% cashback and 0% FX — join the waitlist in-app.',
    to: '/kura-card',
    iconBg: 'bg-purple-100',
    icon: icon('M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'),
  },
  {
    name: 'TrackFi',
    description: 'Connect banks via Plaid, CEX APIs, and on-chain wallets. Zero access encrypted — Kura never sees your credentials.',
    to: '/trackfi',
    iconBg: 'bg-indigo-100',
    icon: icon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'),
  },
  {
    name: 'Kura Business',
    description: 'Treasury, team wallets, and compliance-ready flows for startups moving between fiat and on-chain finance.',
    to: '/business',
    iconBg: 'bg-amber-100',
    icon: icon('M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'),
  },
]
</script>
