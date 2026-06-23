<script setup lang="ts">
definePageMeta({
  layout: "default",
});

usePageSeo({
  title: 'Kura Finance — The Super Financial App',
  description: 'Trade crypto, RWA, and US stocks. Spend with Kura Card. Track all your finances in one self-custody super app.',
  path: '/',
  keywords: 'super financial app, crypto trading, RWA, US stocks, Kura Card, TrackFi, self-custody wallet',
  jsonLd: websiteSchema(),
});
</script>

<template>
  <div class="bg-kura-background">
    <HeroSection />

    <section class="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl md:text-6xl font-black tracking-tight text-kura-text">
          One App. Every Financial Move.
        </h2>
        <p class="mt-6 text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto">
          Stop juggling a wallet, an exchange, a brokerage, a card, and a spreadsheet. Kura brings trading, spending, and tracking together in one super app — while you keep custody of your keys and your data.
        </p>
      </div>
    </section>

    <section class="pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-16 md:space-y-20">
        <div class="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div class="aspect-[4/3] rounded-xl overflow-hidden w-11/12 mx-auto">
            <NuxtImg
              src="/Privacy-first-architecture.webp"
              alt="Trade crypto and stocks"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 90vw, 576px"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-kura-text">
              Trade crypto and US stocks from one wallet.
            </h3>
            <p class="text-kura-text-secondary leading-relaxed">
              Swap tokens on Base, bridge across chains, and access tokenized real-world assets and US equities — all from a smart wallet that only you control.
            </p>
            <p class="text-kura-text-secondary leading-relaxed">
              No separate exchange account. No separate brokerage. Just your keys, your trades, and your portfolio.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div class="order-2 md:order-1 space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-kura-text">
              Spend with Kura Card. Track everything with TrackFi.
            </h3>
            <p class="text-kura-text-secondary leading-relaxed">
              Spend your USDC anywhere Visa is accepted with a non-custodial card backed by your own wallet — no top-up to a custodian, no surrendering custody.
            </p>
            <p class="text-kura-text-secondary leading-relaxed">
              Then connect your banks, brokers, and on-chain wallets with read-only access to see your full net worth in one passkey-encrypted dashboard.
            </p>
          </div>
          <div class="order-1 md:order-2 aspect-[4/3] rounded-xl overflow-hidden w-11/12 mx-auto">
            <NuxtImg
              src="/Unified-finance-dashboard.webp"
              alt="Kura Card and TrackFi"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 90vw, 576px"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <LazyFeaturesSection />

    <section class="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center space-y-8">
        <div class="space-y-4">
          <h2
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent"
          >
            Ready to get started?
          </h2>
          <p class="text-lg text-kura-text-secondary">
            Download Kura and trade crypto, RWA, and US stocks — spend with your card and track all your finances in one place.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <NuxtLink
            to="/download"
            class="px-8 py-4 rounded-lg bg-gradient-to-r from-kura-primary to-kura-secondary text-white font-semibold hover:shadow-lg hover:shadow-kura-primary/50 transition-all duration-300"
          >
            Download App
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="px-8 py-4 rounded-lg border-2 border-kura-accent text-kura-accent font-semibold hover:bg-kura-accent/10 transition-colors duration-300 text-center"
          >
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
