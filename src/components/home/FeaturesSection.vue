<template>
  <section id="products" class="py-20 md:py-28 bg-white">
    <div class="marketing-container">
      <div class="max-w-2xl mb-14 md:mb-16">
        <p class="section-label mb-3">Product</p>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-kura-text mb-4">
          Everything your money needs
        </h2>
        <p class="text-lg text-kura-text-secondary leading-relaxed">
          Cash, investing, spending, and portfolio tracking — designed to work together in one account.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <NuxtLink
          v-for="product in products"
          :key="product.name"
          :to="product.to"
          class="group card-surface rounded-3xl p-6 md:p-7 hover:border-kura-primary/30 hover:shadow-card transition-all duration-200"
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
    name: 'Account',
    description: 'Send money globally, hold digital dollars, and manage your balance in one financial account.',
    to: '/account',
    iconBg: 'bg-kura-primary/10',
    icon: icon('M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'),
  },
  {
    name: 'Invest',
    description: 'Access US stocks and digital assets in one unified portfolio view.',
    to: '/invest',
    iconBg: 'bg-kura-secondary/10',
    icon: icon('M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'),
  },
  {
    name: 'Earn',
    description: 'Put idle cash to work with transparent yield strategies powered by Morpho.',
    to: '/earn',
    iconBg: 'bg-emerald-50',
    icon: icon('M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'),
  },
  {
    name: 'Borrow',
    description: 'Access liquidity through Morpho markets with transparent rates and collateral terms.',
    to: '/borrow',
    iconBg: 'bg-amber-50',
    icon: icon('M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'),
  },
  {
    name: 'Kura Card',
    description: 'Spend your balance anywhere Visa is accepted — join the waitlist in-app.',
    to: '/kura-card',
    iconBg: 'bg-violet-50',
    icon: icon('M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'),
  },
  {
    name: 'TrackFi',
    description: 'Connect banks and investment accounts in one zero access encrypted dashboard.',
    to: '/trackfi',
    iconBg: 'bg-indigo-50',
    icon: icon('M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'),
  },
]
</script>
