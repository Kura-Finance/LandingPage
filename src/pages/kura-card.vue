<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Kura Card',
  description:
    'Spend your balance anywhere Visa is accepted. 0.5% cashback on eligible spend and 0% foreign exchange fees — join the waitlist in the app.',
  path: '/kura-card',
  keywords: 'Kura Card, debit card, spend globally, cashback, financial account',
})

const features = [
  {
    title: 'Spend from your balance',
    description:
      'Use the money in your Kura account in the real world — online, in-store, and abroad. Your funds stay under your control.',
  },
  {
    title: 'Visa, everywhere',
    description:
      'A modern debit card accepted wherever Visa is — with 0.5% cashback on eligible spend and 0% foreign exchange fees.',
  },
  {
    title: 'Simple setup',
    description:
      'Connect your account, verify your identity, and get your card — designed to take minutes, not days.',
  },
  {
    title: 'Instant controls',
    description:
      'Freeze and unfreeze your card from the app with one tap. Full control when you need it.',
  },
  {
    title: 'Flexible top-ups',
    description:
      'Add funds by bank transfer, card deposit, or from your Kura account balance — however works best for you.',
  },
  {
    title: 'Clear transaction history',
    description:
      'Every purchase, refund, and authorization in one place. Know exactly where your money goes.',
  },
]

const cardBenefits = [
  '0.5% cashback on eligible spend',
  '0% foreign exchange fees',
  'Visa debit accepted worldwide',
  'Spend directly from your account',
]

const onboardingSteps = [
  'Open your Kura account',
  'Review and accept terms',
  'Verify your identity',
  'Confirm source of funds',
  'Verify your phone number',
  'Activate your card account',
  'Start spending with your virtual card',
]
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Spend"
      title="Kura Card"
      description="Use your balance like a modern financial account — anywhere Visa is accepted. 0.5% cashback on eligible spend and 0% foreign exchange fees."
      :tags="['Waitlist', 'Visa', 'Global spending']"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="mb-14 md:mb-16">
        <div class="rounded-3xl border border-kura-primary/20 bg-kura-primary/5 p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p class="section-label mb-3">Waitlist</p>
          <h2 class="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Join the Kura Card waitlist</h2>
          <p class="text-kura-text-secondary leading-relaxed mb-6">
            Kura Card is coming soon. Download the app to reserve your spot and be first to spend from your Kura account worldwide.
          </p>
          <NuxtLink to="/download" class="btn-primary">Join waitlist in app</NuxtLink>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="rounded-3xl border border-kura-border bg-kura-surface p-8 md:p-10 max-w-3xl mx-auto">
          <p class="section-label mb-3">Card benefits</p>
          <h2 class="text-2xl font-bold mb-4 tracking-tight">Built into every Kura Card</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            <li v-for="benefit in cardBenefits" :key="benefit" class="flex items-start gap-2 text-sm text-kura-text-secondary">
              <span class="text-kura-primary mt-0.5">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </section>

      <section class="mb-14 md:mb-16">
        <div class="max-w-2xl mb-10">
          <p class="section-label mb-3">Features</p>
          <h2 class="text-3xl font-bold tracking-tight">Designed for everyday spending</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in features" :key="feature.title" class="card-surface p-7">
            <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <section class="card-surface p-8 md:p-12 mb-14 md:mb-16 bg-white">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-center tracking-tight">How it works</h2>
        <p class="text-kura-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Getting your Kura Card is designed to be simple. Your account stays connected to your card — one experience, end to end.
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
          Regional availability will be confirmed at launch. Card and payment services are provided through regulated partners.
        </p>
      </section>
    </main>

    <CTASection
      title="Be first in line"
      description="Download Kura and join the card waitlist today."
      primary-label="Download Kura"
    />
  </div>
</template>
