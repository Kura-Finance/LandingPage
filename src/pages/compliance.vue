<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Trust & security"
      title="Trust & Security Center"
      description="Kura is a non-custodial super financial app built around Zero-Access privacy, so sensitive user data remains unreadable to operators by default. Last updated: June 2026"
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
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
                We are a software provider, not a custodian. Kura is secured by Multi-Party Computation through our authentication partner, so no single party holds your full key. Our systems cannot move your funds, and only you can authorize transactions.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Zero-Access Architecture:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Financial data you connect in TrackFi uses zero access encryption with a key unlocked by your device passkey. Our servers store only ciphertext, so we intentionally limit operator visibility into sensitive financial content. Biometric unlock data remains on your device.
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
            <li><span class="font-semibold text-kura-text">Privy</span> — wallet authentication, OAuth sign-in, and MPC key management.</li>
            <li><span class="font-semibold text-kura-text">Bridge</span> — fiat on/off ramp and virtual accounts.</li>
            <li><span class="font-semibold text-kura-text">MoonPay</span> — card-based crypto purchases.</li>
            <li><span class="font-semibold text-kura-text">Li.Fi</span> — crypto swaps and cross-chain bridges.</li>
            <li><span class="font-semibold text-kura-text">Morpho</span> — DeFi yield vaults and lending/borrow markets on Base.</li>
            <li><span class="font-semibold text-kura-text">Dinari</span> — tokenized real-world assets and US equities.</li>
            <li><span class="font-semibold text-kura-text">Sumsub</span> — identity verification for card partner onboarding.</li>
            <li><span class="font-semibold text-kura-text">Card partners</span> — non-custodial debit card issuance and processing.</li>
            <li><span class="font-semibold text-kura-text">Stripe</span> — subscription billing.</li>
            <li><span class="font-semibold text-kura-text">Plaid</span> — read-only bank and investment account connectivity.</li>
            <li><span class="font-semibold text-kura-text">CEX partners</span> — read-only exchange API connections for TrackFi balance tracking.</li>
            <li><span class="font-semibold text-kura-text">DeBank</span> — on-chain token and DeFi position data.</li>
            <li><span class="font-semibold text-kura-text">CoinGecko</span> — cryptocurrency market data.</li>
            <li><span class="font-semibold text-kura-text">Pimlico</span> — smart-account transaction infrastructure on Base.</li>
            <li><span class="font-semibold text-kura-text">WalletConnect (Reown)</span> — secure wallet-to-dApp sessions.</li>
          </ul>
        </section>

        <!-- Regulatory Framework & Compliance Stance -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Regulatory Framework & Compliance Stance</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Identity Verification (KYC/AML):</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Where required, identity verification is performed by our regulated partners — not Kura. Separate flows may apply: Bridge for fiat ramps (including business KYB where supported), Sumsub for card partner onboarding, and Dinari for US securities access. KYC data is processed by those partners to meet their anti-money-laundering obligations and is not held by Kura in readable form.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Subscriptions & Referrals:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Paid tiers (Basic, Pro, Ultimate) are processed through Stripe or applicable app-store billing. The referral program pays eligible referrers up to 10% revenue share on eligible platform revenue generated by users they invite, subject to in-app program rules including eligibility, pending periods, and reversal on refunds or chargebacks.
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
                Certain features, including the Kura Card (waitlist), fiat ramps, Dinari securities, Morpho Earn, and Morpho Borrow, are available only in supported regions and to users who meet partner eligibility requirements.
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
  description: 'Kura trust center: security architecture, partner disclosures, compliance framework, and zero-access privacy controls.',
  path: '/compliance',
  keywords: 'compliance, trust center, security architecture, Kura partners',
});
</script>
