<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Kura Finance — The Super Financial App',
  description:
    'One app to manage all your finances, from tradFi to crypto. Trade, earn, spend with Kura Card, and track everything in a self-custody super app.',
  path: '/',
  keywords:
    'fintech, super financial app, crypto wallet, US stocks, Morpho earn, Kura Card, TrackFi, self-custody',
  jsonLd: websiteSchema(),
})

const pillars = [
  {
    value: 'Self-custody',
    label: 'MPC keys never held by Kura servers',
  },
  {
    value: 'Open source',
    label: 'GPL-3.0 mobile client on GitHub',
  },
  {
    value: 'Zero access encryption',
    label: 'TrackFi data encrypted on your device before sync',
  },
]

const splits = [
  {
    image: '/Privacy-first-architecture.webp',
    alt: 'Kura wallet trading interface',
    title: 'Trade across crypto, RWAs, and US stocks',
    body: [
      'Swap and bridge on Base via Li.Fi. Access tokenized real-world assets and US equities through Dinari — all from a Safe smart account you control.',
      'Fiat ramps in USD, EUR, GBP, BRL, and MXN via Bridge. Card deposits and USDT on Tron via MoonPay when you need more on-ramps.',
    ],
    reverse: false,
  },
  {
    image: '/Unified-finance-dashboard.webp',
    alt: 'Kura Card and TrackFi dashboard',
    title: 'Spend globally. See everything in one place.',
    body: [
      'Kura Card lets you spend USDC anywhere Visa is accepted — with 0.5% cashback on eligible spend and 0% foreign exchange fees. Join the waitlist in the app.',
      'TrackFi connects Plaid banks, nine major CEX APIs, DeBank, and your on-chain wallets into one zero access encrypted net-worth view.',
    ],
    reverse: true,
  },
]
</script>

<template>
  <div>
    <HeroSection />
    <TrustBar />

    <section class="py-20 md:py-24 bg-white">
      <div class="marketing-container">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="section-label mb-3">Why Kura</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-kura-text">
            Built like a modern fintech, secured like a wallet
          </h2>
          <p class="mt-4 text-lg text-kura-text-secondary leading-relaxed">
            Founders shouldn't need five apps to move money. Kura combines trading, yield, spending, and tracking — with the privacy and control you'd expect from self-custody infrastructure.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.value"
            class="card-surface p-6 text-center md:text-left"
          >
            <p class="text-2xl font-bold text-kura-text mb-2">{{ pillar.value }}</p>
            <p class="text-sm text-kura-text-secondary leading-relaxed">{{ pillar.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24 bg-kura-surface border-y border-kura-border">
      <div class="marketing-container space-y-20 md:space-y-28">
        <div
          v-for="split in splits"
          :key="split.title"
          class="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
        >
          <div :class="split.reverse ? 'md:order-2' : ''">
            <div class="rounded-2xl overflow-hidden border border-kura-border shadow-card bg-white">
              <NuxtImg
                :src="split.image"
                :alt="split.alt"
                width="1448"
                height="1086"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 520px"
                class="w-full"
              />
            </div>
          </div>
          <div :class="split.reverse ? 'md:order-1' : ''" class="space-y-5">
            <p class="section-label">Product</p>
            <h3 class="text-2xl md:text-3xl font-bold tracking-tight text-kura-text">
              {{ split.title }}
            </h3>
            <p
              v-for="(paragraph, i) in split.body"
              :key="i"
              class="text-kura-text-secondary leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <FeaturesSection />
    <CTASection />
  </div>
</template>
