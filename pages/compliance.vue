<template>
  <div class="min-h-screen bg-kura-background text-kura-text">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-kura-text">Trust & Security Center</h1>
        <p class="text-kura-text-secondary text-sm mb-2">Last Updated: June 2026</p>
        <p class="text-kura-text-secondary text-lg">Kura is a non-custodial super financial app built around Zero-Access privacy, so sensitive user data remains unreadable to operators by default and outside monetization pipelines.</p>
      </div>

      <!-- Content -->
      <div class="prose prose-invert max-w-none space-y-8">
        <!-- Corporate Entity -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Corporate Entity</h2>
          <div class="space-y-3">
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Legal Name:</span> Kura Finance LLC
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Jurisdiction:</span> Registered in the State of Wyoming, USA
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Mailing Address:</span> 1007 N Orange St. 4th Floor 5629
              <br />
              Wilmington, DE 19801
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">D-U-N-S® Number:</span> 14-499-3126
            </p>
          </div>
        </section>

        <!-- Cryptographic Privacy & Infrastructure -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Cryptographic Privacy & Infrastructure</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Non-Custodial by Design:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                We are a software provider, not a custodian. Your Kura Wallet is secured by Multi-Party Computation through our authentication partner, so no single party holds your full key. Our systems cannot move your funds, and only you can authorize transactions.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Zero-Access Architecture:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Financial data you connect in TrackFi is encrypted end-to-end with a key unlocked by your device passkey. Our servers store only ciphertext, so we intentionally limit operator visibility into sensitive financial content.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Data Computation Posture:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Data in transit is encrypted via TLS 1.2/1.3, and sensitive data handling follows strict access minimization with strong computation boundaries. We do not operate broad plaintext access pipelines for user financial records.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Disclosure Boundary by Design:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Because we do not hold universal plaintext capability for sensitive user data, we may be technically unable to provide readable data beyond what our architecture actually stores in accessible form, including if systems are breached or under lawful government request processes. We do not sell user data.
              </p>
            </div>
          </div>
        </section>

        <!-- Regulated Partners -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Regulated Partners</h2>
          <p class="text-kura-text-secondary leading-relaxed mb-4">
            Regulated financial functions are delivered through established third-party providers, each operating under its own licenses, compliance programs, and terms:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Privy</span> — wallet authentication and MPC key management.</li>
            <li><span class="font-semibold text-kura-text">Bridge</span> — fiat on/off ramp and virtual accounts.</li>
            <li><span class="font-semibold text-kura-text">MoonPay</span> — card-based crypto purchases.</li>
            <li><span class="font-semibold text-kura-text">Dinari</span> — tokenized real-world assets and equities.</li>
            <li><span class="font-semibold text-kura-text">Gnosis Pay</span> — non-custodial debit card issuance and processing.</li>
            <li><span class="font-semibold text-kura-text">Plaid</span> — read-only bank and investment account connectivity.</li>
            <li><span class="font-semibold text-kura-text">DeBank</span> — on-chain token and DeFi position data.</li>
            <li><span class="font-semibold text-kura-text">WalletConnect</span> — secure wallet-to-dApp sessions.</li>
          </ul>
        </section>

        <!-- Regulatory Framework & Compliance Stance -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Regulatory Framework & Compliance Stance</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Identity Verification (KYC/AML):</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Where required, identity verification for the Kura Card and fiat ramps is performed by our regulated partners. KYC data is processed by those partners to meet their anti-money-laundering obligations and is not held by Kura in readable form.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Global Sanctions (OFAC) Compliance:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                We are committed to operating within the legal frameworks of the United States. We and our partners adhere to international sanctions and use screening to block addresses or users associated with illicit activities or comprehensively sanctioned jurisdictions (OFAC) from accessing relevant services.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Regional Availability:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Certain features, including the Kura Card and fiat ramps, are available only in supported regions and to users who meet partner eligibility requirements.
              </p>
            </div>
          </div>
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
  title: 'Compliance & Trust Center',
  description: 'Kura Finance trust center: security architecture, partner disclosures, compliance framework, and zero-access privacy controls.',
  path: '/compliance',
  keywords: 'compliance, trust center, security architecture, Kura Finance partners',
});
</script>
