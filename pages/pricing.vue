<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'Pricing',
  description: 'Kura pricing: Basic (free), Pro ($12.99/mo), and Ultimate ($29.99/mo). Trade, spend, and track with self-custody by default.',
  path: '/pricing',
  keywords: 'Kura Finance pricing, super financial app plans, Kura Card, TrackFi, crypto wallet subscription',
});

const isAnnual = ref(false);

const plans = [
  {
    name: 'Kura Basic',
    monthlyPrice: null as number | null,
    annualPrice: null as number | null,
    description: 'Your private finance command center, free forever',
    features: [
      {
        title: 'Self Custody Wallet',
        description: 'Full self-custody wallet with RWA access included.',
      },
      {
        title: 'Basic Kura Card',
        description: 'Non-custodial Visa debit card for everyday USDC spending.',
      },
      {
        title: 'Zero-Access Core',
        description: 'Encrypted account visibility without server-side raw data exposure.',
      },
      {
        title: 'Multi-Source Sync',
        description: 'Connect fiat and on-chain sources with strict read-only permissions.',
      },
      {
        title: 'Privacy Dashboard',
        description: '30-day private analytics with no ad tracking.',
      },
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Kura Pro',
    monthlyPrice: 12.99,
    annualPrice: 129.99,
    description: 'Extended history and priority sync for power users',
    features: [
      {
        title: 'Everything in Basic',
        description: 'All Basic wallet, card, and tracking features included.',
      },
      {
        title: 'Extended History',
        description: '365 days of encrypted data in your privacy dashboard.',
      },
      {
        title: 'Priority Sync',
        description: 'Stay current with 5 manual syncs per day.',
      },
      {
        title: 'Professional Website Access',
        description: 'Full access to professional market and research tools on the web.',
      },
    ],
    cta: 'Get Pro',
    highlighted: true,
  },
  {
    name: 'Kura Ultimate',
    monthlyPrice: 29.99,
    annualPrice: 299.99,
    description: 'The complete Kura experience with premium card benefits',
    features: [
      {
        title: 'Everything in Pro',
        description: 'All Pro history, sync, and website access features included.',
      },
      {
        title: 'Enhanced Kura Card Benefits',
        description: 'More with Kura Card — coming soon.',
      },
    ],
    cta: 'Get Ultimate',
    highlighted: false,
  },
];

const getPlanPrice = (plan: (typeof plans)[number]) => {
  if (plan.monthlyPrice === null) {
    return { price: 'Free', period: '', subtext: '' };
  }

  if (isAnnual.value && plan.annualPrice !== null) {
    const monthlyEquivalent = (plan.annualPrice / 12).toFixed(2);
    return {
      price: `$${plan.annualPrice.toFixed(2)}`,
      period: '/ yr',
      subtext: `$${monthlyEquivalent}/mo billed annually`,
    };
  }

  return {
    price: `$${plan.monthlyPrice.toFixed(2)}`,
    period: '/ mo',
    subtext: '',
  };
};

const displayPlans = computed(() =>
  plans.map((plan) => ({
    ...plan,
    display: getPlanPrice(plan),
  }))
);

const handlePlanAction = () => {
  navigateTo('/download');
};
</script>

<template>
  <div class="w-full text-kura-text">
    <!-- Main content -->
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <section class="mb-20 text-center pt-16 md:pt-20">
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Simple, <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Privacy-First Pricing</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose the privacy layer that fits your operation. Every plan includes zero-access architecture and data sovereignty controls.
          </p>
        </section>

        <!-- Billing Toggle -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex items-center gap-1 p-1 rounded-full border border-kura-border bg-kura-background-light">
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

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 justify-items-center max-w-6xl mx-auto">
          <div v-for="(plan, index) in displayPlans" :key="index" class="relative group flex">
            <!-- Glow effect for highlighted plan -->
            <div v-if="plan.highlighted" class="absolute inset-0 bg-gradient-to-r from-kura-primary/20 to-kura-secondary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            
            <!-- Card -->
            <div class="relative w-full bg-gradient-to-br from-white/[0.05] to-transparent border transition-all duration-300 rounded-2xl flex flex-col" :class="plan.highlighted ? 'border-kura-primary/50 xl:scale-105 z-10' : 'border-kura-border hover:border-kura-border/50'">
              <div class="p-5 lg:p-7 flex flex-col h-full">
                <!-- Plan Header (Fixed minimum height to align buttons) -->
                <div class="flex flex-col grow-0 min-h-[170px] lg:min-h-[180px]">
                  <div class="flex items-center justify-between mb-2 min-h-[28px]">
                    <h3 class="text-lg lg:text-xl font-bold">{{ plan.name }}</h3>
                    <span v-if="plan.highlighted" class="px-2 py-0.5 rounded-full bg-kura-primary/20 text-kura-primary text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ml-2 shrink-0">Popular</span>
                  </div>
                  <p class="text-kura-text-secondary mb-4 text-xs lg:text-sm">{{ plan.description }}</p>
                  
                  <!-- Price -->
                  <div class="mt-auto mb-4">
                    <span class="text-3xl lg:text-4xl font-black">{{ plan.display.price }}</span>
                    <span v-if="plan.display.period" class="text-kura-text-secondary ml-1 text-xs">{{ plan.display.period }}</span>
                    <div class="text-xs text-kura-primary mt-1 min-h-[16px]">
                      <span v-if="plan.display.subtext">{{ plan.display.subtext }}</span>
                    </div>
                  </div>
                </div>

                <!-- CTA Button (Moved up directly under price) -->
                <button @click="handlePlanAction()" class="w-full px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 mb-6 shrink-0" :class="plan.highlighted ? 'bg-gradient-to-r from-kura-primary to-kura-secondary hover:shadow-glow-primary text-white' : 'border-2 border-kura-primary/50 text-kura-primary hover:bg-kura-primary/10'">
                  {{ plan.cta }}
                </button>

                <!-- Features List -->
                <div class="space-y-4 pt-4 border-t border-kura-border flex-grow">
                  <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="flex items-start gap-2.5">
                    <svg class="w-4 h-4 text-kura-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

        <!-- FAQ Section -->
        <section class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div class="space-y-4">
            <details class="group border border-kura-border rounded-lg p-6 cursor-pointer hover:border-kura-border/70 transition-colors">
              <summary class="flex items-center justify-between font-bold text-lg">
                <span>Can I switch plans anytime?</span>
                <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p class="mt-4 text-kura-text-secondary">Yes. You can upgrade or downgrade anytime, and your data access policies stay under your control during transitions.</p>
            </details>

            <details class="group border border-kura-border rounded-lg p-6 cursor-pointer hover:border-kura-border/70 transition-colors">
              <summary class="flex items-center justify-between font-bold text-lg">
                <span>Is my data secure?</span>
                <span class="text-2xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p class="mt-4 text-kura-text-secondary">Yes. We use client-side encryption and zero-access design, so our systems cannot directly inspect your raw financial records.</p>
            </details>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
