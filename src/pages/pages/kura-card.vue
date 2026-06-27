<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Visa · USDC"
      title="Kura Card"
      description="A non-custodial Visa debit card on waitlist. 0.5% cashback on eligible spend and 0% foreign exchange fees — spend USDC while your funds stay in a smart wallet you control."
      :tags="['Waitlist', 'Non-custodial', 'USDC spending']"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-14 md:mb-16">
        <div class="rounded-2xl border border-kura-primary/20 bg-kura-primary/5 p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p class="section-label mb-3">Waitlist</p>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Join the Kura Card waitlist</h2>
          <p class="text-kura-text-secondary leading-relaxed text-sm mb-6">
            Kura Card is on waitlist. Download the app to reserve your spot and spend USDC with a non-custodial Visa debit card backed by your Kura wallet.
          </p>
          <NuxtLink to="/download" class="btn-primary">Join waitlist in app</NuxtLink>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="rounded-2xl border border-kura-primary/20 bg-kura-primary/5 p-8 md:p-10 max-w-3xl mx-auto">
          <p class="section-label mb-3">Card benefits</p>
          <h2 class="text-2xl font-bold mb-4">Built into every Kura Card</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            <li v-for="benefit in cardBenefits" :key="benefit" class="flex items-start gap-2 text-sm text-kura-text-secondary">
              <span class="text-kura-primary mt-0.5">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in features" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-12 mb-14 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center">How onboarding will work</h2>
        <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed text-sm">
          Your Kura wallet will be the sole owner of your card smart wallet. Setup gas will be covered by Kura.
        </p>
        <ol class="max-w-xl mx-auto space-y-4">
          <li v-for="(step, index) in onboardingSteps" :key="step" class="flex items-start gap-4">
            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-kura-primary/10 text-kura-primary font-semibold text-sm flex items-center justify-center">
              {{ index + 1 }}
            </span>
            <span class="text-kura-text-secondary pt-1 text-sm">{{ step }}</span>
          </li>
        </ol>
        <p class="text-sm text-kura-text-secondary text-center mt-8 max-w-lg mx-auto">
          Regional availability will be confirmed at launch. Card and fiat services are provided through regulated partners.
        </p>
      </section>
    </main>

    <CTASection
      title="Be first in line"
      description="Download Kura and join the card waitlist today."
      primary-label="Download App"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Kura Card',
  description:
    'Spend USDC with a non-custodial Visa debit card. Join the Kura Card waitlist in the app.',
  path: '/kura-card',
  keywords: 'Kura Card, crypto debit card, USDC spending, card waitlist',
})

const features = [
  {
    title: 'Non-Custodial Spending',
    description:
      'Your card will be backed by a smart contract wallet you own. Kura cannot freeze your funds or move your balance without your authorization.',
  },
  {
    title: 'USDC-Powered Visa',
    description:
      'Spend your USDC balance in the real world with a Visa debit card — 0.5% cashback on eligible spend and 0% foreign exchange fees.',
  },
  {
    title: 'Permissionless Onboarding',
    description:
      'Connect your Kura wallet, verify identity via Sumsub, and issue your card — no gas required for setup.',
  },
  {
    title: 'Freeze & Unfreeze',
    description:
      'Instant card controls from the app. Lock your card with one tap when you need to, and restore it just as quickly.',
  },
  {
    title: 'Top Up Your Way',
    description:
      'Fund your card wallet with USDC on Base, card deposit via MoonPay, or fiat deposit through regulated on-ramp partners.',
  },
  {
    title: 'Full Transaction History',
    description:
      'Track every authorization, clearance, and refund in-app. See merchant details and on-chain settlement references.',
  },
]

const cardBenefits = [
  '0.5% cashback on eligible spend',
  '0% foreign exchange fees',
  'Non-custodial Visa debit card',
  'Spend USDC from your smart wallet',
]

const onboardingSteps = [
  'Connect your Kura wallet',
  'Create account & accept terms',
  'Identity verification (KYC)',
  'Source of funds declaration',
  'Phone verification',
  'Deploy card smart wallet',
  'Issue virtual Visa card',
]
</script>
