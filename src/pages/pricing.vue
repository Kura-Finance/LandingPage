<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Pricing',
  description: 'Simple, transparent pricing. Basic is free. Pro and Ultimate add extended history, priority sync, and premium card benefits.',
  path: '/pricing',
  keywords: 'Kura pricing, financial account plans, TrackFi, Kura Card subscription',
})

const isAnnual = ref(false)

const plans = [
  {
    name: 'Basic',
    monthlyPrice: null as number | null,
    annualPrice: null as number | null,
    description: 'Everything you need to manage your money — free',
    features: [
      {
        title: 'Financial account',
        description: 'Send, receive, invest, and earn from one unified account.',
      },
      {
        title: 'Kura Card access',
        description: 'Join the card waitlist and spend globally when available.',
      },
      {
        title: 'TrackFi dashboard',
        description: 'Connect accounts with zero access encryption — 30 days of history.',
      },
      {
        title: 'Global transfers',
        description: 'Move money across borders with bank transfers and digital dollars.',
      },
      {
        title: 'Privacy by default',
        description: 'No ads, no data selling. Your finances stay yours.',
      },
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 12.99,
    annualPrice: 129.99,
    description: 'Extended history and priority sync for active users',
    features: [
      {
        title: 'Everything in Basic',
        description: 'Full account, card waitlist, and TrackFi included.',
      },
      {
        title: 'Extended history',
        description: '365 days of encrypted financial history.',
      },
      {
        title: 'Priority sync',
        description: 'Stay current with 5 manual syncs per day.',
      },
      {
        title: 'Web access',
        description: 'Full access to market and research tools on the web.',
      },
    ],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    name: 'Ultimate',
    monthlyPrice: 29.99,
    annualPrice: 299.99,
    description: 'The complete Kura experience with premium benefits',
    features: [
      {
        title: 'Everything in Pro',
        description: 'All Pro history, sync, and web access features.',
      },
      {
        title: 'Enhanced card benefits',
        description: 'Premium Kura Card perks when the card launches.',
      },
    ],
    cta: 'Get Ultimate',
    highlighted: false,
  },
]

const getPlanPrice = (plan: (typeof plans)[number]) => {
  if (plan.monthlyPrice === null) {
    return { price: 'Free', period: '', subtext: '' }
  }

  if (isAnnual.value && plan.annualPrice !== null) {
    const monthlyEquivalent = (plan.annualPrice / 12).toFixed(2)
    return {
      price: `$${plan.annualPrice.toFixed(2)}`,
      period: '/ yr',
      subtext: `$${monthlyEquivalent}/mo billed annually`,
    }
  }

  return {
    price: `$${plan.monthlyPrice.toFixed(2)}`,
    period: '/ mo',
    subtext: '',
  }
}

const displayPlans = computed(() =>
  plans.map((plan) => ({
    ...plan,
    display: getPlanPrice(plan),
  })),
)

const handlePlanAction = () => {
  navigateTo('/download')
}
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Pricing"
      title="Simple, transparent pricing"
      description="Start free. Upgrade when you need more history, sync, or premium card benefits. No hidden fees."
    />

    <main class="marketing-container pb-20 md:pb-28">
      <div class="flex justify-center mb-12">
        <div class="inline-flex items-center gap-1 p-1 rounded-full border border-kura-border bg-kura-surface">
          <button
            type="button"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            :class="!isAnnual ? 'bg-white text-kura-text shadow-sm' : 'text-kura-text-secondary hover:text-kura-text'"
            @click="isAnnual = false"
          >
            Monthly
          </button>
          <button
            type="button"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            :class="isAnnual ? 'bg-white text-kura-text shadow-sm' : 'text-kura-text-secondary hover:text-kura-text'"
            @click="isAnnual = true"
          >
            Annual
            <span class="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-kura-primary/15 text-kura-primary">
              Save ~17%
            </span>
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 justify-items-center max-w-6xl mx-auto">
        <div v-for="(plan, index) in displayPlans" :key="index" class="relative group flex w-full">
          <div
            class="relative w-full card-surface rounded-3xl transition-all duration-300 flex flex-col"
            :class="plan.highlighted ? 'border-kura-primary/50 xl:scale-105 z-10 shadow-card' : 'hover:border-kura-primary/20'"
          >
            <div class="p-5 lg:p-7 flex flex-col h-full">
              <div class="flex flex-col grow-0 min-h-[170px] lg:min-h-[180px]">
                <div class="flex items-center justify-between mb-2 min-h-[28px]">
                  <h3 class="text-lg lg:text-xl font-bold">{{ plan.name }}</h3>
                  <span v-if="plan.highlighted" class="px-2 py-0.5 rounded-full bg-kura-primary/20 text-kura-primary text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ml-2 shrink-0">Popular</span>
                </div>
                <p class="text-kura-text-secondary mb-4 text-xs lg:text-sm">{{ plan.description }}</p>

                <div class="mt-auto mb-4">
                  <span class="text-3xl lg:text-4xl font-black">{{ plan.display.price }}</span>
                  <span v-if="plan.display.period" class="text-kura-text-secondary ml-1 text-xs">{{ plan.display.period }}</span>
                  <div class="text-xs text-kura-primary mt-1 min-h-[16px]">
                    <span v-if="plan.display.subtext">{{ plan.display.subtext }}</span>
                  </div>
                </div>
              </div>

              <button
                class="w-full px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 mb-6 shrink-0"
                :class="plan.highlighted ? 'btn-primary !w-full' : 'btn-secondary !w-full'"
                @click="handlePlanAction()"
              >
                {{ plan.cta }}
              </button>

              <div class="space-y-4 pt-4 border-t border-kura-border flex-grow">
                <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="flex items-start gap-2.5">
                  <svg class="w-4 h-4 text-kura-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <p class="text-kura-text text-xs font-semibold leading-relaxed">{{ feature.title }}</p>
                    <p class="text-kura-text-secondary text-xs leading-relaxed mt-0.5">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Frequently asked questions</h2>

        <div class="space-y-4">
          <details class="group card-surface rounded-2xl p-6 cursor-pointer hover:border-kura-primary/20 transition-colors">
            <summary class="flex items-center justify-between font-bold text-lg">
              <span>Can I switch plans anytime?</span>
              <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
            </summary>
            <p class="mt-4 text-kura-text-secondary">Yes. Upgrade or downgrade whenever you need — your data and account stay under your control throughout.</p>
          </details>

          <details class="group card-surface rounded-2xl p-6 cursor-pointer hover:border-kura-primary/20 transition-colors">
            <summary class="flex items-center justify-between font-bold text-lg">
              <span>Is my data secure?</span>
              <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
            </summary>
            <p class="mt-4 text-kura-text-secondary">Yes. TrackFi uses zero access encryption — your financial records are encrypted on your device before sync, and Kura cannot read them.</p>
          </details>
        </div>
      </section>
    </main>

    <CTASection
      primary-label="Download Kura"
    />
  </div>
</template>
