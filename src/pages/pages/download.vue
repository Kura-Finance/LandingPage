<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Available on iOS & Android"
      title="Download Kura"
      description="Your private finance command center — a non-custodial wallet, crypto debit card, portfolio tracker, and earn in one app."
    />

    <main class="marketing-container pb-20 md:pb-28 -mt-4">
      <section class="grid sm:grid-cols-2 gap-5 mb-10">
        <a
          href="https://testflight.apple.com/join/RvJ6k8sv"
          target="_blank"
          rel="noopener noreferrer"
          class="group card-surface p-8 hover:border-kura-primary/30 hover:shadow-card transition-all text-center"
        >
          <div class="w-14 h-14 mx-auto mb-5 rounded-2xl bg-kura-primary/10 flex items-center justify-center">
            <svg class="w-8 h-8 text-kura-text" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold mb-2 group-hover:text-kura-primary transition-colors">Download for iOS</h2>
          <p class="text-sm text-kura-text-secondary mb-6 leading-relaxed">
            Join the beta on TestFlight. Install TestFlight first, then open the link on your iPhone or iPad.
          </p>
          <span class="btn-primary text-sm gap-2">
            Join on TestFlight
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.kurafinance.app&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          class="group card-surface p-8 hover:border-kura-primary/30 hover:shadow-card transition-all text-center"
        >
          <div class="w-14 h-14 mx-auto mb-5 rounded-2xl bg-kura-primary/10 flex items-center justify-center">
            <svg class="w-8 h-8 text-kura-text" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.002 1.002 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold mb-2 group-hover:text-kura-primary transition-colors">Download for Android</h2>
          <p class="text-sm text-kura-text-secondary mb-6 leading-relaxed">
            Get Kura on Google Play. Non-custodial wallet, card, and portfolio tracking — all in one app.
          </p>
          <span class="btn-primary text-sm gap-2">
            Get it on Google Play
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </a>
      </section>

      <section class="card-surface p-8 md:p-10 text-center bg-kura-surface">
        <p class="text-sm text-kura-text-secondary leading-relaxed max-w-2xl mx-auto">
          Kura is a financial technology app, not a bank. Card and fiat on/off-ramp services are provided through regulated partners. Crypto assets are volatile and not insured.
        </p>
        <NuxtLink to="/help" class="inline-block mt-6 text-kura-primary hover:text-kura-primary-dark transition-colors font-semibold text-sm">
          Need help? Contact support →
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Download',
  description: 'Download Kura for iOS (TestFlight) and Android (Google Play). The Super Financial App for trading, spending, and tracking.',
  path: '/download',
  keywords: 'download Kura, Kura app iOS, Kura Android, TestFlight, Google Play',
})
</script>
