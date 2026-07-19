<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      description="Last updated: July 16, 2026. How Kura collects, uses, and protects information."
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
        <section>
          <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
            This Privacy Policy explains how Kura Finance LLC (“Kura,” “we,” “us,” or “our”) handles personal information when you use our websites, applications, and related services (the “Service”). It should be read with our
            <NuxtLink to="/tos" class="text-kura-primary hover:text-kura-accent">Terms of Service</NuxtLink>
            and
            <NuxtLink to="/compliance" class="text-kura-primary hover:text-kura-accent">Trust &amp; Security Center</NuxtLink>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Who We Are</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Controller: Kura Finance LLC, registered in Wyoming, USA. Mailing address: 1007 N Orange St. 4th Floor 5629, Wilmington, DE 19801. Privacy contact:
            <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>
            (or
            <a href="mailto:support@kura-finance.com" class="text-kura-primary hover:text-kura-accent">support@kura-finance.com</a>).
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Information We Collect</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We follow a minimization-first policy and collect only what is needed to operate the Service:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Account data</span> — authentication identifiers from our login partner (such as email) and your public wallet addresses.</li>
            <li><span class="font-semibold text-kura-text">Financial data you connect</span> — balances, transactions, and holdings from banks, brokerages, read-only exchange API connections, and on-chain wallets you link in TrackFi. Sensitive TrackFi content uses zero-access encryption and is stored only as ciphertext on our servers.</li>
            <li><span class="font-semibold text-kura-text">Verification data</span> — when you use Card, fiat ramps, or securities features, identity (KYC) information is collected and processed by regulated partners (such as Bridge, Sumsub, or Dinari), not held in readable form by Kura.</li>
            <li><span class="font-semibold text-kura-text">Subscription &amp; billing data</span> — plan tier, payment status, and billing identifiers processed by Stripe or app-store processors.</li>
            <li><span class="font-semibold text-kura-text">Referral data</span> — referral codes, referred-user relationships, payout status, and related identifiers needed to operate the referral program.</li>
            <li><span class="font-semibold text-kura-text">Card display data</span> — if a virtual card is shown in-app, we may temporarily receive masked or full card details from the card partner solely to display them to you. We do not store full PAN except as required to render the display session, and we do not use card numbers for marketing.</li>
            <li><span class="font-semibold text-kura-text">Technical data</span> — device, app version, diagnostics, IP address, approximate location derived from IP, crash logs, and security signals needed for reliability and fraud prevention.</li>
            <li><span class="font-semibold text-kura-text">Communications</span> — messages you send to support or legal inboxes, and related metadata.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. How We Use Information</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We use information to: provide and secure the Service; provision wallets; facilitate trading, transfers, earn/borrow, card, and ramp flows through partners; operate subscriptions and referrals; prevent fraud and abuse; comply with law; improve reliability; and communicate service notices. We do not sell your personal or financial data, and we do not use TrackFi financial records for advertising, ad targeting, or behavioral profiling.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Legal Bases (EEA / UK)</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Where GDPR or UK GDPR applies, we process personal data on these bases as applicable: (a) performance of a contract (providing the Service you request); (b) legitimate interests (security, fraud prevention, product improvement, limited analytics) balanced against your rights; (c) legal obligation (tax, accounting, lawful requests); and (d) consent where required (for example certain cookies or optional communications). You may withdraw consent without affecting prior lawful processing.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Third-Party Processors and Partners</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            When you use a feature, the relevant partner processes data under its own privacy policy. Current categories include:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Privy</span> — authentication, OAuth, embedded wallet MPC key management.</li>
            <li><span class="font-semibold text-kura-text">Bridge / MoonPay</span> — fiat ramps and related KYC.</li>
            <li><span class="font-semibold text-kura-text">Li.Fi</span> — swaps and bridges.</li>
            <li><span class="font-semibold text-kura-text">Morpho</span> — DeFi vaults and borrow markets (on-chain).</li>
            <li><span class="font-semibold text-kura-text">Dinari</span> — tokenized assets / equities KYC and brokerage flows.</li>
            <li><span class="font-semibold text-kura-text">Sumsub / card partners</span> — card KYC, issuance, and processing.</li>
            <li><span class="font-semibold text-kura-text">Stripe / app stores</span> — subscription billing.</li>
            <li><span class="font-semibold text-kura-text">Plaid / CEX APIs</span> — read-only account connectivity for TrackFi.</li>
            <li><span class="font-semibold text-kura-text">DeBank / CoinGecko / Pimlico / WalletConnect (Reown)</span> — market data, on-chain data, AA infrastructure, wallet sessions.</li>
            <li><span class="font-semibold text-kura-text">Infrastructure / analytics</span> — hosting, CDN, error monitoring, and security tooling as needed to run the Service.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. Zero-Access Security Model</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Your wallet keys are controlled by you. TrackFi sensitive content is encrypted on-device with a key unlocked by your passkey; our servers hold ciphertext. Biometric unlock data stays on your device. Data in transit uses TLS. Because we do not maintain broad plaintext access to TrackFi ciphertext, we are structurally limited in what readable financial content we can produce — including after a breach or when responding to third-party requests.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. Legal Requests and Disclosures</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We may disclose information when we believe in good faith that disclosure is required by law, regulation, legal process, or governmental request; to enforce our Terms; or to protect Kura, users, or the public. What we can disclose depends on what is technically accessible. Typically this may include account identifiers, wallet addresses, device/IP logs, billing and referral records, and support correspondence — not TrackFi ciphertext plaintext. Partners that hold KYC may respond separately under their own obligations. On-chain transactions are public.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Retention</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We retain personal information only as long as needed for the purposes collected, including to provide the Service, resolve disputes, enforce agreements, and meet legal, tax, and accounting requirements. Typical periods (subject to longer legal holds):
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Account and authentication records — for the life of the account, then a reasonable wind-down period.</li>
            <li>Billing and subscription records — generally up to seven (7) years where tax/accounting rules require.</li>
            <li>Referral and payout records — for the program life plus a reasonable audit period.</li>
            <li>Security and access logs — generally 12–24 months unless needed longer for investigations.</li>
            <li>Support tickets — generally up to three (3) years after closure.</li>
            <li>TrackFi ciphertext — until you delete it or close your account, subject to backup rotation.</li>
          </ul>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Partner-held KYC may be retained by those partners under AML rules beyond Kura’s control.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">9. International Transfers</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We are based in the United States and may process data in the U.S. and other countries where our providers operate. Where required, we use appropriate transfer mechanisms such as Standard Contractual Clauses or provider certifications. By using the Service from outside the U.S., you understand your information may be transferred to jurisdictions with different data-protection laws.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">10. Your Rights and Choices</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Depending on your location, you may have rights to access, correct, delete, port, or restrict processing of personal data, or to object to certain processing. You can disconnect accounts, delete encrypted TrackFi caches where the product allows, and request account deletion. Some records may be retained where legally required. To exercise rights, email
            <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>.
            We may need to verify your identity. You may lodge a complaint with your local supervisory authority.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">11. U.S. State Privacy Notices (including CCPA)</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            If you are a California resident (or resident of a state with similar laws), you may have rights to know, delete, correct, and opt out of certain sharing. Categories of personal information we collect are described in Section 2. We do not sell personal information as “sale” is commonly defined, and we do not share personal information for cross-context behavioral advertising. We do not use or disclose sensitive personal information for purposes that require a right to limit under CCPA beyond what is necessary to provide the Service. You may submit requests to
            <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>.
            Authorized agents may submit requests with proof of authority. We will not discriminate against you for exercising privacy rights.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">12. Cookies, SDKs, and Analytics</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Our websites and apps may use cookies, local storage, and mobile SDKs for authentication, security, preferences, performance, and limited product analytics. Essential cookies are required for the Service to function. Where required by law, we will request consent for non-essential cookies. You can control cookies through browser settings; blocking some cookies may break features. Mobile OS settings may limit ad or tracking identifiers; we do not use TrackFi data for ads.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">13. Children</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            The Service is not directed to children under 18 (or under 13 where that higher protection standard applies). We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it. Contact us if you believe a child has provided information.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">14. Business Transfers</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, personal information may be transferred as part of that transaction, subject to confidentiality and continuing privacy commitments consistent with this Policy.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">15. Changes to This Policy</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We may update this Policy from time to time. We will revise the “Last updated” date and may provide additional notice for material changes. Continued use after the effective date constitutes acceptance of the updated Policy where permitted by law.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">16. Contact</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Privacy requests:
            <a href="mailto:privacy@kura-finance.com" class="text-kura-primary hover:text-kura-accent">privacy@kura-finance.com</a>
            · Support:
            <a href="mailto:support@kura-finance.com" class="text-kura-primary hover:text-kura-accent">support@kura-finance.com</a>
            · Legal:
            <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>.
          </p>
        </section>
      </div>

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
})

usePageSeo({
  title: 'Privacy Policy',
  description:
    'Kura privacy policy covering self-custody wallet, TrackFi encryption, partner integrations, retention, and zero-access data handling.',
  path: '/privacy',
  keywords: 'privacy policy, GDPR, CCPA, zero-access, data protection, Kura Finance LLC legal',
})
</script>
