<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'Business Solutions',
  description: 'Enterprise and team solutions for the Kura Super Financial App. Custom deployment, compliance documentation, and dedicated support.',
  path: '/business',
  keywords: 'Kura Finance business, enterprise finance, B2B fintech, self-custody infrastructure',
});

const handleContactSales = () => {
  navigateTo('mailto:sales@kura-finance.com', { external: true });
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
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Business Solutions</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed">
            Build on Zero-Access infrastructure for teams that need control, auditability, and strict data sovereignty.
          </p>
        </section>

        <!-- Features Grid -->
        <section class="mb-20">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-kura-border rounded-2xl p-8 hover:border-kura-border/70 transition-colors">
              <h3 class="text-2xl font-bold mb-4">Custom Private Infrastructure</h3>
              <p class="text-kura-text-secondary mb-4">Dedicated environments, scoped key controls, and configurable deployment boundaries for sensitive operations.</p>
              <ul class="space-y-2 text-sm text-kura-text-secondary">
                <li>✓ Dedicated Node Access</li>
                <li>✓ Custom Rate Limits</li>
                <li>✓ White-Label Options</li>
              </ul>
            </div>

            <div class="border border-kura-border rounded-2xl p-8 hover:border-kura-border/70 transition-colors">
              <h3 class="text-2xl font-bold mb-4">Developer API with Privacy Controls</h3>
              <p class="text-kura-text-secondary mb-4">Integrate via APIs and webhooks while enforcing least-privilege data access across internal systems.</p>
              <ul class="space-y-2 text-sm text-kura-text-secondary">
                <li>✓ REST & WebSocket APIs</li>
                <li>✓ Webhook Support</li>
                <li>✓ Real-Time Streaming</li>
              </ul>
            </div>

            <div class="border border-kura-border rounded-2xl p-8 hover:border-kura-border/70 transition-colors">
              <h3 class="text-2xl font-bold mb-4">Dedicated Security Support</h3>
              <p class="text-kura-text-secondary mb-4">Work directly with specialists on architecture reviews, rollout strategy, and incident readiness plans.</p>
              <ul class="space-y-2 text-sm text-kura-text-secondary">
                <li>✓ Dedicated Account Manager</li>
                <li>✓ Priority Support</li>
                <li>✓ SLA Guarantees</li>
              </ul>
            </div>

            <div class="border border-kura-border rounded-2xl p-8 hover:border-kura-border/70 transition-colors">
              <h3 class="text-2xl font-bold mb-4">Compliance & Disclosure Boundaries</h3>
              <p class="text-kura-text-secondary mb-4">Zero-access architecture and operational controls designed to minimize readable data production.</p>
              <ul class="space-y-2 text-sm text-kura-text-secondary">
                <li>✓ Zero-Access Architecture</li>
                <li>✓ Strict Access Boundary</li>
                <li>✓ Compliance Ready Workflows</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="text-center py-16 border-t border-kura-border">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-lg text-kura-text-secondary mb-8 max-w-2xl mx-auto">
            Contact sales to design a ZA deployment where readable data is not available for operator resale or handover.
          </p>
          <button @click="handleContactSales" class="px-8 py-3 bg-gradient-to-r from-kura-primary to-kura-secondary hover:shadow-glow-primary text-white font-bold rounded-lg transition-all duration-300">
            Contact Sales
          </button>
        </section>
      </div>
    </main>
  </div>
</template>
