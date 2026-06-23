<template>
  <div class="min-h-screen bg-kura-background text-kura-text">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-kura-text">Terms of Service</h1>
        <p class="text-kura-text-secondary text-lg">Last Updated: June 2026</p>
      </div>

      <!-- Content -->
      <div class="prose prose-invert max-w-none space-y-8">
        <!-- 1. Acceptance of Terms -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Acceptance of Terms</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            By accessing or using the Kura application and related websites ("Service"), operated by Kura Finance LLC ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our Service. You must be at least 18 years old and legally permitted to use the Service in your jurisdiction.
          </p>
        </section>

        <!-- 2. Description of Service -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Description of Service</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is a non-custodial financial technology application that brings together several self-directed tools in one interface:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Kura Wallet</span> — a self-custody smart wallet on the Base network that you control. We never hold your private keys or move funds on your behalf.</li>
            <li><span class="font-semibold text-kura-text">Trading & Assets</span> — self-directed swaps, transfers, and access to tokenized real-world assets and equities, executed on-chain or through licensed third-party providers.</li>
            <li><span class="font-semibold text-kura-text">Kura Card</span> — access to a non-custodial debit card issued by a regulated card partner and funded from a smart contract wallet you own.</li>
            <li><span class="font-semibold text-kura-text">Fiat On/Off Ramp</span> — deposits and withdrawals between fiat and stablecoins, provided by regulated payment partners.</li>
            <li><span class="font-semibold text-kura-text">TrackFi</span> — read-only aggregation of your connected fiat and on-chain accounts for tracking and analytics.</li>
          </ul>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Kura is a software provider. We are not a bank, broker-dealer, money transmitter, custodian, exchange, or investment adviser, and we do not provide financial, legal, or tax advice.
          </p>
        </section>

        <!-- 3. Non-Custodial Wallet & User Responsibility -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Non-Custodial Wallet & User Responsibility</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Your Kura Wallet is non-custodial. Your signing key is generated and secured through Multi-Party Computation by our authentication partner, and only you can authorize transactions. You are solely responsible for safeguarding your device, login credentials, passkeys, and any exported keys or recovery phrases. Blockchain transactions are irreversible; we cannot reverse, cancel, freeze, or recover funds once a transaction is broadcast, nor can we restore access if you lose control of your keys.
          </p>
        </section>

        <!-- 4. Third-Party Services & Partners -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Third-Party Services & Partners</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Card issuance, fiat on/off ramps, tokenized assets, identity verification, account connectivity, and on-chain data are provided by independent third parties, including Privy, Bridge, MoonPay, Dinari, Gnosis Pay, Plaid, DeBank, and WalletConnect. These services are governed by their own terms and policies, and may require identity verification (KYC), eligibility checks, or geographic restrictions. We do not control and are not responsible for the availability, accuracy, performance, or actions of these third parties. The Service also relies on blockchain networks and RPC nodes whose uptime and data accuracy we do not guarantee.
          </p>
        </section>

        <!-- 5. Eligibility, Compliance & Acceptable Use -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Eligibility, Compliance & Acceptable Use</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Certain features, such as the Kura Card and fiat ramps, are available only in supported regions and to users who complete required verification with our partners. You agree not to use the Service for unlawful activity, money laundering, sanctions evasion, fraud, or any purpose prohibited by applicable law. We and our partners screen against sanctions lists (including OFAC) and may decline, suspend, or restrict access to comply with legal obligations.
          </p>
        </section>

        <!-- 6. No Investment, Legal, or Tax Advice -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. No Investment, Legal, or Tax Advice</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            All content, analytics, market data, and asset information in the Service are provided for informational purposes only and are not investment, legal, or tax advice. Digital assets and tokenized securities are volatile and may lose value. You are solely responsible for your own decisions and for evaluating the merits and risks of any transaction.
          </p>
        </section>

        <!-- 7. Limitation of Liability -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. Limitation of Liability</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            To the maximum extent permitted by law, Kura Finance LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, digital assets, or funds lost due to smart contract vulnerabilities, third-party service failures, or your own handling of keys, resulting from your use of the Service. In no event shall our total liability exceed the amount you paid to us in the past twelve (12) months.
          </p>
        </section>

        <!-- 8. Zero-Access Disclosure Boundary -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Zero-Access Disclosure Boundary</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is designed with a Zero-Access architecture and strict access boundaries, and does not maintain universal plaintext capability for sensitive financial content you store in TrackFi. As a result, any disclosure response is technically limited to data that is actually accessible within our architecture at the time of request, including under breach conditions or government requests.
          </p>
        </section>

        <!-- 9. Governing Law & Jurisdiction -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">9. Governing Law & Jurisdiction</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the state or federal courts located in Wyoming.
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
  title: 'Terms of Service',
  description: 'Kura Finance Terms of Service governing use of Kura Wallet, Kura Card, TrackFi, and related partner services.',
  path: '/tos',
  keywords: 'terms of service, user agreement, Kura Finance legal',
});
</script>
