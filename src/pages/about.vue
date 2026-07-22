<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'About',
  description:
    'Kura is modern finance, redesigned — one account to save, spend, invest, earn, and move money globally, with privacy by default and the simplicity of a bank.',
  path: '/about',
  keywords:
    'about Kura, modern finance, zero-access, non-custodial, financial account, TrackFi, Kura Card',
})

const principles = [
  {
    title: 'Beautiful by default',
    description:
      'Finance should feel calm and intentional — not like a terminal. We obsess over clarity so everyday money decisions feel simple.',
  },
  {
    title: 'Privacy by architecture',
    description:
      'Zero-Access design and non-custodial control mean we do not need to hold your keys or read your connected financial life to operate the product.',
  },
  {
    title: 'Global without the friction',
    description:
      'On / off ramps, multi-currency balances, Trade, Earn, and US markets — through regulated partners — so borders feel less like barriers.',
  },
]

const pillars = [
  {
    label: 'Account',
    title: 'One place for cash',
    description: 'Hold, send, and receive with bank-like clarity — multi-currency and global transfers included.',
  },
  {
    label: 'Grow',
    title: 'Invest, earn, borrow',
    description: 'US stocks via Dinari, optional Morpho yield, and on-demand liquidity — when you want them, not because you must.',
  },
  {
    label: 'Spend',
    title: 'Kura Card',
    description: 'Spend from your balance anywhere Visa is accepted. Virtual card today; physical card on the waitlist.',
  },
  {
    label: 'See everything',
    title: 'TrackFi',
    description: 'Encrypted portfolio tracking for banks, brokerages, and on-chain positions — without giving us plaintext visibility.',
  },
]

const milestones = [
  {
    phase: '01',
    title: 'TrackFi',
    time: 'Privacy foundation',
    content:
      'Encrypted portfolio tracking for banking, investments, and digital assets — Zero-Access so readable financial data stays off our servers.',
  },
  {
    phase: '02',
    title: 'Unified financial account',
    time: 'One home screen',
    content:
      'Cash, transfers, and a calm bank-like experience in one place — add money, send globally, and see balance and history clearly.',
  },
  {
    phase: '03',
    title: 'Invest, Earn & Borrow',
    time: 'Grow & access',
    content:
      'US equities, transparent yield, and Morpho liquidity — powered by regulated and protocol partners with terms you can read.',
  },
  {
    phase: '04',
    title: 'Kura Card',
    time: 'Spend',
    content:
      'Turn balance into everyday spend: virtual card live, physical Kura Card waitlist for cashback and fee-free international use.',
  },
  {
    phase: '05',
    title: 'Business & Team',
    time: 'Pro web dashboard',
    content:
      'Shared Treasury, Approvals, Team roles, and Reports on the Pro web dashboard — company cash without a second stack of tools.',
  },
]
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="About Kura"
      title="Modern finance, redesigned."
      description="One account to save, spend, invest, earn, and move money globally — with the simplicity of a bank and the freedom of modern finance."
    />

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-20">
          <p class="section-label mb-5">Mission</p>
          <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
            A financial life that stays yours.
          </h2>
          <p class="prose-lead max-w-xl">
            We build software, not a vault. Kura is non-custodial and Zero-Access by design: you authorize moves, partners handle regulated rails, and we never need universal plaintext access to your money or TrackFi connections to ship a beautiful product.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          <article
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="about-principle"
            :class="index > 0 ? 'md:border-l md:border-kura-border md:pl-10 lg:pl-12' : ''"
          >
            <h3 class="font-display text-2xl text-kura-text font-normal tracking-[-0.02em] mb-4">
              {{ principle.title }}
            </h3>
            <p class="text-kura-text-secondary leading-relaxed text-[0.9375rem]">
              {{ principle.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding bg-kura-surface border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-20">
          <p class="section-label mb-5">Product</p>
          <h2 class="headline-xl text-display-sm md:text-display-md mb-6">
            One account. Pick what you need.
          </h2>
          <p class="prose-lead max-w-xl">
            Cash, Trade, On / Off Ramps, Earn, US stocks, card spend, and portfolio tracking work better together — and never force you to take the whole stack.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-16">
          <article v-for="pillar in pillars" :key="pillar.title" class="about-pillar">
            <p class="section-label mb-3">{{ pillar.label }}</p>
            <h3 class="font-display text-xl md:text-2xl text-kura-text font-normal tracking-[-0.02em] mb-3">
              {{ pillar.title }}
            </h3>
            <p class="text-kura-text-secondary leading-relaxed text-[0.9375rem]">
              {{ pillar.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="about-founder">
          <NuxtImg
            src="/avatar.webp"
            alt="Rick Weng, Founder of Kura"
            width="160"
            height="160"
            loading="lazy"
            decoding="async"
            class="about-founder__avatar"
          />
          <div class="about-founder__body">
            <p class="section-label mb-4">Founder</p>
            <h2 class="headline-xl text-display-sm mb-6">A note from Rick</h2>
            <div class="space-y-5 text-kura-text-secondary leading-relaxed">
              <p>
                I am not a trader, and I am not an arbitrageur. I wanted a simple place to manage bank accounts, card spending, stocks, crypto, and on-chain yield — without juggling five apps or surrendering privacy for convenience.
              </p>
              <p>
                I could not find that product. So I built Kura: modern finance with a bank-like calm, Zero-Access privacy, and partners for the rails that must be regulated.
              </p>
            </div>
            <div class="about-founder__sign">
              <span class="about-founder__name">Rick Weng</span>
              <span class="about-founder__role">Founder, Kura Finance LLC</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white border-t border-kura-border">
      <div class="marketing-container">
        <div class="max-w-2xl mb-14 md:mb-16">
          <p class="section-label mb-5">Evolution</p>
          <h2 class="headline-xl text-display-sm md:text-display-md">
            How Kura grew into one account.
          </h2>
        </div>

        <ol class="about-timeline">
          <li v-for="item in milestones" :key="item.phase" class="about-timeline__item">
            <p class="about-timeline__phase" aria-hidden="true">{{ item.phase }}</p>
            <div class="about-timeline__content">
              <div class="about-timeline__head">
                <h3 class="about-timeline__title">{{ item.title }}</h3>
                <span class="about-timeline__time">{{ item.time }}</span>
              </div>
              <p class="about-timeline__body">{{ item.content }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="section-padding border-t border-kura-border">
      <div class="marketing-container">
        <div class="about-trust">
          <div class="about-trust__copy">
            <p class="section-label mb-4">Trust</p>
            <h2 class="headline-xl text-display-sm mb-4">Built in the open where it matters.</h2>
            <p class="text-kura-text-secondary leading-relaxed max-w-lg">
              Corporate details, Zero-Access posture, and the partner stack that powers regulated functions live in our Trust &amp; Security Center.
            </p>
          </div>
          <div class="about-trust__actions">
            <NuxtLink to="/compliance" class="btn-primary">
              Trust Center
            </NuxtLink>
            <NuxtLink to="/download" class="btn-secondary">
              Get Account
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Start with one account"
      description="Download Kura for iPhone or Android — or open the Pro web dashboard when your team is ready."
    />
  </div>
</template>

<style scoped>
.about-founder {
  display: grid;
  gap: 2rem;
  align-items: start;
  max-width: 52rem;
}

@media (min-width: 768px) {
  .about-founder {
    grid-template-columns: 10rem minmax(0, 1fr);
    gap: 3rem;
  }
}

.about-founder__avatar {
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  object-fit: cover;
  border: 1px solid #e1e4ec;
}

@media (min-width: 768px) {
  .about-founder__avatar {
    width: 10rem;
    height: 10rem;
  }
}

.about-founder__sign {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.about-founder__name {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.375rem;
  font-style: italic;
  font-weight: 500;
  color: #12131a;
}

.about-founder__role {
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  color: #9499a8;
}

.about-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid #12131a;
}

.about-timeline__item {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 1rem 1.25rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .about-timeline__item {
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
  }
}

.about-timeline__phase {
  margin: 0;
  padding-top: 0.2rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  color: #9499a8;
}

.about-timeline__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.5rem;
}

.about-timeline__title {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.about-timeline__time {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7c5cfc;
}

.about-timeline__body {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: #64687a;
}

.about-trust {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem 0;
}

@media (min-width: 768px) {
  .about-trust {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 3rem;
  }
}

.about-trust__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-shrink: 0;
}
</style>
