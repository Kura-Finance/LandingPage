<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Trust & security"
      title="Trust & Security Center"
      description="Kura is a non-custodial, open-source wallet built around Zero-Access privacy, so sensitive user data remains unreadable to operators by default. Last updated: October 2026"
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
        <!-- Operator & Ownership -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Operator &amp; Ownership</h2>
          <div class="space-y-3">
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Operator:</span> Rick Weng, an individual
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Source code &amp; copyright:</span> Rick Weng, published on
              <a href="https://github.com/Kura-Finance" target="_blank" rel="noopener noreferrer" class="text-kura-primary hover:text-kura-accent">GitHub</a>
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Former operator:</span> Kura Finance LLC, a Wyoming limited liability company (dissolved)
            </p>
            <p class="text-kura-text-secondary">
              <span class="font-semibold text-kura-text">Contact:</span>
              <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
            </p>
          </div>
        </section>

        <!-- Service Status -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">Service Status</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura Finance LLC has shut down. Kura is now an open-source project with only basic wallet features maintained, on a best-effort basis and without a support team. Bank transfers and fiat ramps, US stocks, cards, KYC, TrackFi, subscriptions, and referrals are permanently discontinued, and we no longer accept sign-ups or deposits. The Service is provided “as is” and used at your own risk; see the
            <NuxtLink to="/tos" class="text-kura-primary hover:text-kura-accent">Terms of Service</NuxtLink>
            and
            <NuxtLink to="/disclaimer" class="text-kura-primary hover:text-kura-accent">Risk Disclosure</NuxtLink>.
          </p>
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
          <h2 class="text-2xl font-bold text-kura-text mb-4">Third-Party Providers</h2>
          <p class="text-kura-text-secondary leading-relaxed mb-4">
            Kura relies on independent third-party providers, each operating under its own licenses, compliance programs, and terms. Providers marked “discontinued” are no longer integrated with Kura:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Privy</span> — wallet authentication, OAuth sign-in, MPC key management, and private-key export.</li>
            <li><span class="font-semibold text-kura-text">Bridge</span> — fiat on/off ramp and virtual accounts (discontinued).</li>
            <li><span class="font-semibold text-kura-text">MoonPay</span> — card-based crypto purchases (discontinued).</li>
            <li><span class="font-semibold text-kura-text">Li.Fi</span> — crypto swaps and cross-chain bridges.</li>
            <li><span class="font-semibold text-kura-text">Morpho</span> — DeFi yield vaults and lending/borrow markets on Base.</li>
            <li><span class="font-semibold text-kura-text">Dinari</span> — tokenized real-world assets and US equities (discontinued).</li>
            <li><span class="font-semibold text-kura-text">Sumsub</span> — identity verification for card partner onboarding (discontinued).</li>
            <li><span class="font-semibold text-kura-text">Card partners</span> — non-custodial debit card issuance and processing (discontinued).</li>
            <li><span class="font-semibold text-kura-text">Stripe</span> — subscription billing (discontinued).</li>
            <li><span class="font-semibold text-kura-text">Plaid</span> — read-only bank and investment account connectivity (discontinued).</li>
            <li><span class="font-semibold text-kura-text">CEX partners</span> — read-only exchange API connections for TrackFi balance tracking (discontinued).</li>
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
                Kura no longer offers any feature that requires identity verification. While those features were available, identity verification was performed by regulated partners — not Kura: Bridge for fiat ramps (including business KYB where supported), Sumsub for card partner onboarding, and Dinari for US securities access. KYC data was processed by those partners to meet their anti-money-laundering obligations, is not held by Kura in readable form, and may be retained by those partners under their own obligations.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-kura-text mb-2">Subscriptions & Referrals:</h3>
              <p class="text-kura-text-secondary leading-relaxed">
                Paid tiers (Basic, Pro, Ultimate) and the referral program have been permanently discontinued. Past participation remains subject to the
                <NuxtLink to="/referral-terms" class="text-kura-primary hover:text-kura-accent">Referral Program Terms</NuxtLink>.
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
                The Kura Card, fiat ramps, and Dinari securities are discontinued. Remaining features, including Morpho Earn and Morpho Borrow, may be unavailable in some regions and depend on third-party protocols and providers.
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
