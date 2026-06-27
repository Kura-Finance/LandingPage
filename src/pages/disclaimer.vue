<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Legal"
      title="Disclaimer"
      description="Last updated: June 2026"
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
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
            Kura Wallet is non-custodial: you control your keys via a Safe smart account on Base, and Kura Finance LLC does not hold, control, or custody your fiat currency or digital assets, and cannot move funds on your behalf. All trades, swaps, bridges, yield deposits, borrow transactions, transfers, asset purchases, and card spending are self-directed and executed by you, on-chain or through third-party providers. Blockchain and smart-contract transactions are irreversible and we cannot reverse, freeze, or recover them.
          </p>
        </section>

        <!-- 4. Third-Party Services -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Third-Party Services</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Features rely on independent providers — including Privy, Bridge, MoonPay, Li.Fi, Morpho, Dinari, Sumsub, Stripe, Plaid, DeBank, CoinGecko, Pimlico, and WalletConnect (Reown) — each subject to its own terms, eligibility, and regional availability. TrackFi exchange connections are read-only; Kura cannot execute trades on connected accounts. We do not control and are not responsible for their services, and we are not liable for financial impact caused by their outages, delays, or decisions.
          </p>
        </section>

        <!-- 5. Data Accuracy & API Limitations -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Data Accuracy & API Limitations</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            While we strive to provide timely and accurate data, we rely on third-party APIs and blockchain RPC nodes. We do not guarantee complete accuracy, uptime, completeness, or timeliness of displayed data, and we are not liable for financial impact caused by synchronization delays or network outages.
          </p>
        </section>

        <!-- 6. DeFi Yield, Borrowing & Smart-Contract Risk -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. DeFi Yield, Borrowing & Smart-Contract Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Morpho Earn and other yield features involve third-party DeFi protocols and smart contracts. Yield rates vary, are not guaranteed, and may differ from displayed estimates. Morpho Borrow and other lending features involve collateralized debt positions subject to variable interest rates, liquidation risk, and protocol governance changes. If collateral value falls below required thresholds, collateral may be liquidated automatically. Deposits and borrowed positions are not bank deposits and are not insured by the FDIC, SIPC, or any government agency. Smart-contract bugs, oracle failures, or protocol changes can result in partial or total loss of deposited or collateral assets.
          </p>
        </section>

        <!-- 7. Waitlists & Feature Availability -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. Waitlists & Feature Availability</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Joining a waitlist — including for Kura Card — does not guarantee access, timing, or specific benefits. Features described in the app or on this website may change, launch in phases, or be unavailable in your region. Partner eligibility and KYC requirements apply independently to each product.
          </p>
        </section>

        <!-- 8. Zero-Access Disclosure Limits -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Zero-Access Disclosure Limits</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is operated under a Zero-Access architecture with strict access boundaries. TrackFi uses zero access encryption and we do not maintain universal plaintext capability for sensitive financial content stored in TrackFi. Accordingly, disclosure is limited to data technically accessible within our systems, and we do not sell user financial data.
          </p>
        </section>

        <!-- 9. No Fiduciary Duty -->
        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">9. No Fiduciary Duty</h2>
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
