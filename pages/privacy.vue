<template>
  <div class="min-h-screen bg-kura-background text-kura-text">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-kura-text">Privacy Policy</h1>
        <p class="text-kura-text-secondary text-lg">Last Updated: June 2026</p>
      </div>

      <!-- Content -->
      <div class="prose max-w-none space-y-8">
        <!-- 1. Information We Collect -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Information We Collect</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We follow a minimization-first policy and collect only what is needed to operate the Service:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Account data</span> — authentication identifiers from our login partner (such as email) and your public wallet addresses.</li>
            <li><span class="font-semibold text-kura-text">Financial data you connect</span> — balances, transactions, and holdings from banks, exchanges, and on-chain wallets you link in TrackFi. This sensitive content is encrypted end-to-end and stored only as ciphertext.</li>
            <li><span class="font-semibold text-kura-text">Verification data</span> — when you use the Kura Card or fiat ramps, identity (KYC) information is collected and processed directly by our regulated partners, not held in readable form by Kura.</li>
            <li><span class="font-semibold text-kura-text">Technical data</span> — limited device, app, and diagnostic information needed for security and reliability.</li>
          </ul>
        </section>

        <!-- 2. How We Use Your Information -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. How We Use Your Information</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We use data solely to provide and secure the Service — including wallet provisioning, trading and transfers, card and fiat ramp facilitation, account aggregation, and analytics you request. We do not sell your personal or financial data, and we do not use your financial records for advertising, ad targeting, or behavioral profiling.
          </p>
        </section>

        <!-- 3. Third-Party Data Processors & Partners -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Third-Party Data Processors & Partners</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura integrates independent providers to deliver specific features. When you use a feature, the relevant partner processes the data needed for that function under its own privacy policy:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Privy</span> — authentication and embedded wallet key management (MPC).</li>
            <li><span class="font-semibold text-kura-text">Bridge</span> — fiat on/off ramp, virtual accounts, and related identity verification.</li>
            <li><span class="font-semibold text-kura-text">MoonPay</span> — card-based purchases of crypto.</li>
            <li><span class="font-semibold text-kura-text">Dinari</span> — tokenized real-world assets and equities access.</li>
            <li><span class="font-semibold text-kura-text">Gnosis Pay</span> — issuance and processing of the non-custodial debit card, including KYC.</li>
            <li><span class="font-semibold text-kura-text">Plaid</span> — read-only connections to your bank and investment accounts.</li>
            <li><span class="font-semibold text-kura-text">DeBank</span> — on-chain token and DeFi position data for addresses you add.</li>
            <li><span class="font-semibold text-kura-text">WalletConnect</span> — secure pairing between your wallet and external dApps.</li>
          </ul>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            These integrations are scoped to the minimum data required and are designed to avoid unnecessary exposure of readable sensitive content to Kura.
          </p>
        </section>

        <!-- 4. Zero-Access Security Model -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Zero-Access Security Model</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura follows a Zero-Access, non-custodial architecture. Your wallet keys are controlled by you, and we cannot move funds from your wallet or connected accounts. Financial data you store in TrackFi is encrypted end-to-end with a key unlocked by your device passkey, so our servers hold only ciphertext. Data in transit is protected with TLS. Because we do not maintain broad plaintext access to your sensitive data, we are structurally limited in what readable data can be produced — including if our systems are breached or when responding to third-party or government requests.
          </p>
        </section>

        <!-- 5. Your Rights -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Your Rights and Control</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You can disconnect accounts, delete your encrypted data cache, and request access to, correction of, or deletion of your personal data at any time. Some verification records held by regulated partners may be retained by those partners to meet their own legal obligations. To exercise your rights, contact us at 
            <a href="mailto:support@kura-finance.com" class="text-kura-primary hover:text-kura-accent transition-colors">support@kura-finance.com</a>.
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
  title: 'Privacy Policy',
  description: 'Kura Finance privacy policy covering self-custody wallet, TrackFi encryption, partner integrations, and zero-access data handling.',
  path: '/privacy',
  keywords: 'privacy policy, zero-access, data protection, Kura Finance legal',
});
</script>
