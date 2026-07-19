<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Legal"
      title="Prohibited Activities"
      description="Last updated: July 16, 2026. Activities not allowed on Kura."
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
        <section>
          <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
            This Prohibited Activities List is incorporated into the
            <NuxtLink to="/tos" class="text-kura-primary hover:text-kura-accent">Terms of Service</NuxtLink>.
            Violation may result in suspension, termination, reporting to partners or authorities, and forfeiture of referral or promotional benefits. We and our partners may apply additional restrictions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Geographic and Sanctions Restrictions</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You may not use the Service if you are located in, organized under the laws of, or ordinarily resident in a comprehensively sanctioned jurisdiction, or if you are a person or entity on an applicable sanctions list (including OFAC SDN and similar lists). You may not use the Service to evade sanctions or to transact with sanctioned persons, wallets, or jurisdictions. Additional country or feature restrictions may apply based on partner eligibility (Card, Bridge, Dinari, Morpho, and others).
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Unlawful and Financial Crime</h2>
          <p class="text-kura-text-secondary leading-relaxed">You may not use the Service to:</p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Engage in money laundering, terrorist financing, proliferation financing, or sanctions evasion.</li>
            <li>Commit fraud, identity theft, phishing, social engineering, or unauthorized account takeover.</li>
            <li>Finance, facilitate, or conceal proceeds of crime.</li>
            <li>Violate anti-bribery, anti-corruption, tax, gambling, or securities laws.</li>
            <li>Misrepresent your identity, source of funds, or beneficial ownership.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Market Abuse and Deceptive Trading</h2>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Manipulate markets, wash trade, spoof, layer, or otherwise distort prices or volumes.</li>
            <li>Use the Service to front-run, exploit non-public information unlawfully, or abuse partner APIs.</li>
            <li>Circumvent trading, spend, withdrawal, or velocity limits imposed by Kura or partners.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Platform Integrity and Security</h2>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Attempt to gain unauthorized access to systems, wallets, keys, or other users’ data.</li>
            <li>Probe, scan, reverse engineer (except as allowed by law), or interfere with the Service.</li>
            <li>Introduce malware, bots that abuse APIs, or denial-of-service attacks.</li>
            <li>Bypass authentication, geoblocking, KYC, or risk controls.</li>
            <li>Create multiple accounts to abuse promotions, referrals, or waitlists.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Intellectual Property and Content</h2>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Infringe patents, copyrights, trademarks, or trade secrets.</li>
            <li>Misuse Kura branding to imply endorsement or partnership without written consent.</li>
            <li>Upload or transmit unlawful, defamatory, or infringing content through support or community channels we operate.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. Digital-Asset and Protocol Misuse</h2>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>Exploit smart-contract vulnerabilities, oracle manipulation, or governance attacks for unlawful gain.</li>
            <li>Use bridges, swaps, or vaults to launder assets or obscure the audit trail in violation of law.</li>
            <li>Interact with mixer or obfuscation services in a manner that violates applicable law or partner rules.</li>
            <li>Use Card, ramp, or brokerage features for prohibited merchant categories under issuer or network rules.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. High-Risk Activities Requiring Enhanced Review</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Activities that may trigger enhanced due diligence or outright prohibition include: dealing in firearms or dual-use goods; adult content businesses where prohibited by partners; unlicensed money transmission or MSB activity; pyramid or deceptive investment schemes; and any business that partners designate as prohibited. We may request additional information and freeze Service access while reviewing.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Updates</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We may update this List as laws, partner rules, and risk posture change. Material updates will follow the notice practices in the Terms of Service. Questions:
            <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>.
          </p>
        </section>
      </div>

      <div class="mt-16 pt-8 border-t border-kura-border">
        <NuxtLink to="/tos" class="text-kura-primary hover:text-kura-accent transition-colors">
          ← Back to Terms of Service
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
  title: 'Prohibited Activities',
  description:
    'Kura prohibited activities list covering sanctions, financial crime, platform abuse, and digital-asset misuse.',
  path: '/prohibited-activities',
  keywords: 'prohibited activities, sanctions, AML, acceptable use, Kura Finance LLC legal',
})
</script>
