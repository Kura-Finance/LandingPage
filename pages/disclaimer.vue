<template>
  <div class="min-h-screen bg-kura-background text-kura-text">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-kura-text">Disclaimer</h1>
        <p class="text-kura-text-secondary text-lg">Last Updated: June 2026</p>
      </div>

      <!-- Content -->
      <div class="prose prose-invert max-w-none space-y-8">
        <!-- 1. Financial Technology App, Not a Bank -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Financial Technology App, Not a Bank</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is a financial technology application, not a bank. Kura Finance LLC is a software provider and is not a bank, broker-dealer, money transmitter, exchange, custodian, or investment adviser. Card and fiat on/off-ramp services are provided through regulated third-party partners. Crypto assets and tokenized securities are volatile and are not insured by the FDIC, SIPC, or any government agency.
          </p>
        </section>

        <!-- 2. Not Financial, Legal, or Tax Advice (NFA) -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Not Financial, Legal, or Tax Advice (NFA)</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            All information, charts, market data, analytics, and asset details provided in the Service are for informational, educational, and software utility purposes only. Nothing contained herein constitutes financial, investment, legal, or tax advice. You should conduct independent diligence and consult with licensed professionals before making financial decisions.
          </p>
        </section>

        <!-- 3. Non-Custodial Nature & Self-Directed Activity -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Non-Custodial Nature & Self-Directed Activity</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura Wallet is non-custodial: you control your keys, and Kura Finance LLC does not hold, control, or custody your fiat currency or digital assets, and cannot move funds on your behalf. All trades, swaps, transfers, asset purchases, and card spending are self-directed and executed by you, on-chain or through third-party providers. Blockchain transactions are irreversible and we cannot reverse, freeze, or recover them.
          </p>
        </section>

        <!-- 4. Third-Party Services -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Third-Party Services</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Features rely on independent providers — including Privy, Bridge, MoonPay, Dinari, Gnosis Pay, Plaid, DeBank, and WalletConnect — each subject to its own terms, eligibility, and regional availability. We do not control and are not responsible for their services, and we are not liable for financial impact caused by their outages, delays, or decisions.
          </p>
        </section>

        <!-- 5. Data Accuracy & API Limitations -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Data Accuracy & API Limitations</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            While we strive to provide timely and accurate data, we rely on third-party APIs and blockchain RPC nodes. We do not guarantee complete accuracy, uptime, completeness, or timeliness of displayed data, and we are not liable for financial impact caused by synchronization delays or network outages.
          </p>
        </section>

        <!-- 6. Zero-Access Disclosure Limits -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. Zero-Access Disclosure Limits</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is operated under a Zero-Access architecture with strict access boundaries and does not maintain universal plaintext capability for sensitive financial content stored in TrackFi. Accordingly, disclosure is limited to data technically accessible within our systems, and we do not sell user financial data.
          </p>
        </section>

        <!-- 7. No Fiduciary Duty -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. No Fiduciary Duty</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Your use of Kura does not create a fiduciary, advisory, or principal-agent relationship between you and Kura Finance LLC. You are solely responsible for evaluating the merits and risks associated with any tools, assets, or information provided by our Service.
          </p>
        </section>
      </div>

      <!-- Back Link -->
      <div class="mt-16 pt-8 border-t border-kura-border">
        <NuxtLink to="/" class="text-kura-primary hover:text-kura-accent transition-colors">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

usePageSeo({
  title: 'Disclaimer',
  description: 'Legal disclaimer for Kura Finance including non-custodial limits, investment risk, and partner service boundaries.',
  path: '/disclaimer',
  keywords: 'disclaimer, legal disclaimer, non-custodial, investment risk, Kura Finance',
});
</script>
