<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Legal"
      title="Risk Disclosure"
      description="Last updated: July 16, 2026. Important risks of using Kura and related digital-asset products."
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
        <section>
          <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
            This Risk Disclosure is incorporated into the
            <NuxtLink to="/tos" class="text-kura-primary hover:text-kura-accent">Terms of Service</NuxtLink>.
            Digital assets and DeFi can result in total loss of funds. Only use money you can afford to lose. This is not financial, legal, or tax advice.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Financial Technology App, Not a Bank</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is a product of Kura Finance LLC, a software company. Kura Finance LLC is not a bank, broker-dealer, money transmitter, exchange, custodian, or investment adviser. Card and fiat on/off-ramp services are provided through regulated third-party partners. Crypto assets and tokenized securities are volatile and are not insured by the FDIC, SIPC, FSCS, or any government agency.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Not Financial, Legal, or Tax Advice</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            All information, charts, market data, analytics, and asset details in the Service are for informational and software-utility purposes only. Nothing constitutes financial, investment, legal, or tax advice. Conduct independent diligence and consult licensed professionals before making decisions.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Non-Custodial Nature and Irreversible Transactions</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is non-custodial: you control keys via a Safe smart account on Base. Kura does not hold, control, or custody your fiat or digital assets and cannot move funds on your behalf. All trades, swaps, bridges, yield deposits, borrow transactions, transfers, asset purchases, and card spending are self-directed. Blockchain and smart-contract transactions are generally irreversible; we cannot reverse, freeze, or recover them. Loss of passkeys, devices, or exported keys can mean permanent loss of access.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Market and Volatility Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Prices of cryptoassets, stablecoins, tokenized securities, and related instruments can move sharply and may fall to zero. Liquidity can disappear. Spreads, slippage, and failed transactions can cause losses even when markets appear orderly. Past performance is not indicative of future results.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Smart-Contract, Oracle, and Protocol Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Morpho Earn, Morpho Borrow, bridges, swaps, account abstraction, and related features depend on third-party smart contracts and oracles. Bugs, exploits, governance changes, upgrades, paused markets, or oracle failures can cause partial or total loss of deposited or collateral assets. Audits reduce but do not eliminate risk.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. DeFi Yield and Borrowing Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Displayed yield rates reflect estimated net returns after applicable fees (including Kura performance fees of up to 10% and Morpho vault fees) and may differ from protocol “gross” rates or realized returns. Yields are variable and not guaranteed. Borrowing involves variable interest rates, collateral requirements, and liquidation risk. If collateral value falls below required thresholds, collateral may be liquidated automatically with little or no notice. Earn deposits and borrowed positions are not bank deposits.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. Bridge, Swap, and Cross-Chain Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Cross-chain bridges and DEX aggregators (including Li.Fi routes) involve smart-contract, relayer, liquidity, and destination-chain risks. Transfers may be delayed, stuck, partially filled, or fail. Fees and execution prices can differ from quotes. Only DONE / successfully settled transfers are reliable records of completion.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Tokenized Securities and RWA Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Access to tokenized real-world assets and US equities (including via Dinari) is subject to partner KYC, suitability, and jurisdictional limits. Tokenized securities can lose value, may have limited secondary liquidity, and are not the same as holding traditional brokerage assets in every legal respect. Partner outages or restrictions can block trading or redemption.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">9. Card and Fiat Ramp Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Card and on/off-ramp services depend on issuers, banks, payment networks, and KYC partners. Transactions can be declined, delayed, reversed, or limited. FX rates and fees apply. Waitlist status does not guarantee a card or timing. Your relationship with the issuer is governed by a separate cardholder agreement when issued.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">10. Third-Party and Data Accuracy Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Features rely on independent providers (including Privy, Bridge, MoonPay, Li.Fi, Morpho, Dinari, Sumsub, Stripe, Plaid, DeBank, CoinGecko, Pimlico, and WalletConnect). TrackFi exchange connections are read-only. We do not control partner services and are not liable for their outages, delays, or decisions. Displayed balances and prices depend on third-party APIs and RPC nodes and may be incomplete, delayed, or inaccurate.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">11. Regulatory and Availability Risk</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Laws governing digital assets, DeFi, cards, and securities change. Features may be unavailable in your region, withdrawn, or modified to comply with law or partner requirements. Joining a waitlist does not guarantee access.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">12. Zero-Access Disclosure Limits</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            TrackFi uses zero-access encryption. We do not maintain universal plaintext capability for sensitive TrackFi content. Disclosure is limited to data technically accessible in our systems. We do not sell user financial data.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">13. No Fiduciary Duty</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Your use of Kura does not create a fiduciary, advisory, or principal-agent relationship with Kura Finance LLC. You alone evaluate the merits and risks of any tool, asset, or information.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">14. Acknowledgement</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            By using the Service, you acknowledge that you have read this Risk Disclosure and accept these risks. For liability limits and dispute resolution, see the Terms of Service.
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
  title: 'Risk Disclosure',
  description:
    'Kura risk disclosure covering non-custodial wallets, DeFi yield and borrow, bridges, tokenized securities, and partner services.',
  path: '/disclaimer',
  keywords: 'risk disclosure, disclaimer, DeFi risk, non-custodial, Kura Finance LLC legal',
})
</script>
