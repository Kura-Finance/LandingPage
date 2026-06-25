<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Business Solutions',
  description: 'Enterprise and team solutions for the Kura Super Financial App. Custom deployment, compliance documentation, and dedicated support.',
  path: '/business',
  keywords: 'Kura Finance business, enterprise finance, B2B fintech, self-custody infrastructure',
})

const features = [
  {
    title: 'Custom Private Infrastructure',
    description: 'Dedicated environments, scoped key controls, and configurable deployment boundaries for sensitive operations.',
    items: ['Dedicated node access', 'Custom rate limits', 'White-label options'],
  },
  {
    title: 'Developer API with Privacy Controls',
    description: 'Integrate via APIs and webhooks while enforcing least-privilege data access across internal systems.',
    items: ['REST & WebSocket APIs', 'Webhook support', 'Real-time streaming'],
  },
  {
    title: 'Dedicated Security Support',
    description: 'Work directly with specialists on architecture reviews, rollout strategy, and incident readiness plans.',
    items: ['Dedicated account manager', 'Priority support', 'SLA guarantees'],
  },
  {
    title: 'Compliance & Disclosure Boundaries',
    description: 'Zero-access architecture and operational controls designed to minimize readable data production.',
    items: ['Zero-access architecture', 'Strict access boundary', 'Compliance-ready workflows'],
  },
]

const handleContactSales = () => {
  navigateTo('mailto:sales@kura-finance.com', { external: true })
}
</script>

<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Enterprise"
      title="Business Solutions"
      description="Build on Zero-Access infrastructure for teams that need control, auditability, and strict data sovereignty."
    />

    <main class="marketing-container pb-20 md:pb-28">
      <section class="grid md:grid-cols-2 gap-5 mb-14">
        <div v-for="feature in features" :key="feature.title" class="card-surface p-8">
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-kura-text-secondary text-sm leading-relaxed mb-4">{{ feature.description }}</p>
          <ul class="space-y-2 text-sm text-kura-text-secondary">
            <li v-for="item in feature.items" :key="item" class="flex gap-2">
              <span class="text-kura-primary">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    </main>

    <CTASection
      title="Ready to get started?"
      description="Contact sales to design a deployment where readable data is not available for operator resale or handover."
      primary-label="Contact sales"
      primary-to="mailto:sales@kura-finance.com"
      secondary-label=""
      secondary-to=""
    />
  </div>
</template>
