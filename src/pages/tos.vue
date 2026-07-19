<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Legal"
      title="Terms of Service"
      description="Last updated: July 16, 2026. These Terms govern your use of Kura. Please read them carefully."
    />

    <div class="marketing-container max-w-3xl pb-20 md:pb-28">
      <div class="prose max-w-none space-y-8">
        <section>
          <p class="text-kura-text-secondary leading-relaxed text-sm border border-kura-border rounded-xl p-4 bg-kura-background">
            <span class="font-semibold text-kura-text">Important.</span>
            These Terms include a binding arbitration agreement and class-action waiver in Section 18.
            By using the Service you agree to resolve disputes individually through arbitration, except where prohibited by law.
            Related documents:
            <NuxtLink to="/privacy" class="text-kura-primary hover:text-kura-accent">Privacy Policy</NuxtLink>,
            <NuxtLink to="/disclaimer" class="text-kura-primary hover:text-kura-accent">Risk Disclosure</NuxtLink>,
            <NuxtLink to="/prohibited-activities" class="text-kura-primary hover:text-kura-accent">Prohibited Activities</NuxtLink>,
            and
            <NuxtLink to="/referral-terms" class="text-kura-primary hover:text-kura-accent">Referral Program Terms</NuxtLink>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">1. Acceptance of Terms</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            These Terms of Service (the “Terms”) are a binding agreement between you and Kura Finance LLC, a Wyoming limited liability company (“Kura,” “Company,” “we,” “us,” or “our”). They govern your access to and use of the Kura mobile application, websites (including kura-finance.com and related subdomains), APIs, dashboards, and any other products or services we enable that link to these Terms (collectively, the “Service”).
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            By creating an account, accessing, or using the Service, you agree to these Terms and to the documents incorporated by reference. If you do not agree, do not use the Service. If you use the Service on behalf of an entity, you represent that you have authority to bind that entity, and “you” includes that entity.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">2. Changes to the Terms</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We may update these Terms from time to time. When we do, we will revise the “Last updated” date and may provide additional notice in-app, by email, or on our website. Except where a longer notice period is required by law, material changes take effect when posted. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree, you must stop using the Service.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">3. Description of the Service</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is a non-custodial financial technology application that brings together self-directed tools in one interface, including:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li><span class="font-semibold text-kura-text">Self-custody wallet</span> — a Safe smart account on Base that you control via MPC signing infrastructure. We do not hold your private keys or move funds on your behalf.</li>
            <li><span class="font-semibold text-kura-text">Discover &amp; Trading</span> — self-directed crypto swaps and cross-chain bridges, tokenized real-world assets, and US equities through licensed third-party providers.</li>
            <li><span class="font-semibold text-kura-text">Morpho Earn</span> — optional yield on supported stablecoins through Kura fee warp vaults on Morpho on Base. Kura may charge a performance fee of up to 10%. Returns depend on Morpho conditions and vault fees.</li>
            <li><span class="font-semibold text-kura-text">Morpho Borrow</span> — optional borrowing against supported collateral through third-party Morpho lending markets on Base, subject to liquidation and interest-rate risk.</li>
            <li><span class="font-semibold text-kura-text">Kura Card</span> — access to a non-custodial Visa debit card issued by a regulated card partner and funded from a smart-contract wallet you own. Availability is subject to waitlist status, partner eligibility, and a separate cardholder agreement when issued.</li>
            <li><span class="font-semibold text-kura-text">Fiat On/Off Ramp</span> — deposits and withdrawals between fiat and stablecoins via regulated payment partners.</li>
            <li><span class="font-semibold text-kura-text">TrackFi</span> — read-only aggregation of connected bank, brokerage, exchange, and on-chain accounts, protected with zero-access encryption.</li>
            <li><span class="font-semibold text-kura-text">Subscriptions</span> — optional paid tiers (Basic, Pro, Ultimate) that unlock additional features.</li>
            <li><span class="font-semibold text-kura-text">Referral Program</span> — optional revenue sharing governed by the
              <NuxtLink to="/referral-terms" class="text-kura-primary hover:text-kura-accent">Referral Program Terms</NuxtLink>.</li>
          </ul>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Kura is a software provider. We are not a bank, broker-dealer, money transmitter, custodian, exchange, or investment adviser, and we do not provide financial, legal, or tax advice. Displayed balances are visualizations of assets in wallets or accounts you control or connect — not deposits held by Kura.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">4. Eligibility; Representations and Warranties</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You represent and warrant that:
          </p>
          <ul class="list-disc pl-6 mt-3 space-y-2 text-kura-text-secondary leading-relaxed">
            <li>You are at least 18 years old (or the age of majority in your jurisdiction) and have legal capacity to enter these Terms.</li>
            <li>You are not a citizen, resident, or located in a comprehensively sanctioned jurisdiction, and you are not on any sanctions list administered by OFAC or other applicable authorities.</li>
            <li>You will use the Service only for lawful purposes and in compliance with all applicable laws, including anti-money-laundering, sanctions, tax, and securities laws.</li>
            <li>All information you provide is accurate and complete, and you will keep it updated.</li>
            <li>You are acting for yourself and not on behalf of any undisclosed third party, unless we expressly permit multi-user or business features.</li>
            <li>You understand digital assets, DeFi protocols, bridges, and tokenized securities involve substantial risk of loss, as described in our
              <NuxtLink to="/disclaimer" class="text-kura-primary hover:text-kura-accent">Risk Disclosure</NuxtLink>.</li>
          </ul>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Certain features (including Card, fiat ramps, Dinari securities, Morpho Earn, and Morpho Borrow) are available only in supported regions and to users who complete partner verification. Waitlist enrollment does not guarantee access, timing, or benefits. We and our partners may refuse, suspend, or restrict access to comply with law or partner requirements.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">5. Non-Custodial Wallet; Keys; Recovery</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is non-custodial. Signing keys are generated and secured through multi-party computation by our authentication partner (currently Privy). Only you can authorize transactions. You are solely responsible for safeguarding your device, login credentials, passkeys, exported keys, and any recovery materials.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Blockchain transactions are irreversible. We cannot reverse, cancel, freeze, or recover funds once a transaction is broadcast, and we cannot restore access if you lose control of your authentication factors or keys. Exporting keys or seed material may permanently change your security posture; you accept all related risk.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">6. Third-Party Services and Partners</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Card issuance, fiat ramps, identity verification, swaps and bridges, yield and borrow markets, securities access, billing, account connectivity, and on-chain data are provided by independent third parties, including Privy, Bridge, MoonPay, Li.Fi, Morpho, Dinari, Sumsub, Stripe, Plaid, DeBank, CoinGecko, Pimlico, and WalletConnect (Reown). TrackFi exchange connections use read-only credentials — Kura cannot execute trades on connected exchange accounts.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Those services are governed by their own terms and privacy policies and may require KYC, eligibility checks, or geographic restrictions. Separate KYC flows may apply for Bridge (fiat), Sumsub/card partners (card), and Dinari (securities). We do not control and are not responsible for the availability, accuracy, performance, fees, or decisions of third parties, blockchain networks, or RPC providers.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            When a Kura Card is issued, your relationship with the card issuer is governed by a separate cardholder agreement. In a conflict between these Terms and the cardholder agreement regarding card use, the cardholder agreement controls for card matters.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">7. User Conduct; Prohibited Activities</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You agree not to misuse the Service. Without limitation, you must not engage in activities listed in our
            <NuxtLink to="/prohibited-activities" class="text-kura-primary hover:text-kura-accent">Prohibited Activities List</NuxtLink>,
            including unlawful activity, money laundering, sanctions evasion, fraud, market abuse, unauthorized access, or interference with the Service. We and our partners screen against sanctions lists and may decline, suspend, or restrict access to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">8. Fees</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You are responsible for all fees associated with your use of the Service, including: (a) Kura subscription fees; (b) Kura performance or platform fees (including Morpho Earn performance fees of up to 10% where applicable); (c) third-party fees charged by ramps, bridges, swaps, card networks, issuers, brokers, or protocols; and (d) network gas or similar blockchain costs. Fees may change. We will disclose material Kura fees in-app or on our pricing page. Third-party and network fees are outside our control and may apply even if a transaction fails or is reversed at the protocol or partner level.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">9. Subscriptions and Billing</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Paid subscription tiers are billed through Stripe or applicable app-store payment processors. Subscriptions renew automatically unless cancelled before the renewal date according to the processor’s or store’s cancellation flow. Feature limits vary by tier as described on our pricing page. Taxes may apply. Except where required by law or store policy, fees are non-refundable.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">10. Referrals</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            If you participate in our referral program, the
            <NuxtLink to="/referral-terms" class="text-kura-primary hover:text-kura-accent">Referral Program Terms</NuxtLink>
            apply and control over these Terms for referral matters. Referral rewards are not interest, deposits, or guaranteed income, and are subject to eligibility, clawback, and fraud review.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">11. No Investment, Legal, or Tax Advice; No Fiduciary Duty</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            All content, analytics, market data, and asset information in the Service are for informational purposes only and are not investment, legal, or tax advice. Your use of Kura does not create a fiduciary, advisory, brokerage, or principal-agent relationship. You are solely responsible for your decisions and for evaluating merits and risks.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">12. Intellectual Property; License</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            The Service, including software, branding, text, graphics, and logos, is owned by Kura or its licensors and is protected by intellectual property laws. Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Service for your personal or internal business use. You may not copy, modify, distribute, reverse engineer, or create derivative works of the Service except as permitted by law. “Kura” and related marks are trademarks of Kura Finance LLC. Feedback you provide may be used by us without restriction or compensation.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">13. Zero-Access Disclosure Boundary</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            Kura is designed with a Zero-Access architecture. TrackFi encrypts sensitive financial content on your device with a key unlocked by your passkey before sync. Our servers store that content as ciphertext. Any disclosure response is limited to data that is actually accessible within our architecture at the time of request, including under breach conditions or lawful government requests. This does not limit our ability to process or disclose account metadata, wallet addresses, authentication identifiers, billing records, referral records, or other non-ciphertext operational data as described in our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">14. Monitoring, Enforcement, and Legal Process</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            We may monitor use of the Service for security, fraud prevention, and compliance. We may access, preserve, and disclose information associated with your account in response to valid legal process, to comply with law, to enforce these Terms, or to protect Kura, users, or the public. Because your wallet is non-custodial, we cannot seize, freeze, or transfer assets held in your wallet; restrictions generally apply to Service access, not to underlying on-chain assets. On-chain activity is publicly visible regardless of any action by Kura.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">15. Suspension and Termination</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You may stop using the Service at any time. We may suspend, restrict, or terminate your access immediately if we reasonably believe you violated these Terms or the Prohibited Activities List, pose fraud or sanctions risk, create security or legal exposure, or if required by a partner, network, or authority. Upon termination, your license ends. Provisions that by nature should survive (including ownership, disclaimers, limitation of liability, indemnification, arbitration, and general provisions) will survive. Termination does not delete on-chain assets you control.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">16. Disclaimer of Warranties</h2>
          <p class="text-kura-text-secondary leading-relaxed uppercase text-sm tracking-wide">
            To the maximum extent permitted by law, the Service is provided “as is” and “as available,” without warranties of any kind, whether express, implied, or statutory, including merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, error-free, or free of harmful components, or that data will be accurate or complete. You assume all risk arising from use of the Service, digital assets, smart contracts, and third-party providers.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">17. Limitation of Liability</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            To the maximum extent permitted by law, Kura Finance LLC and its officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or any loss of profits, revenue, data, goodwill, digital assets, or business opportunity, arising out of or related to the Service or these Terms, whether based in contract, tort, or otherwise, even if advised of the possibility.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Our total liability for any claim arising out of or relating to the Service or these Terms will not exceed the greater of (a) the amounts you paid to Kura for the Service in the twelve (12) months before the claim, or (b) one hundred U.S. dollars (US$100). Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the fullest extent permitted.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">18. Indemnification</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            You agree to defend, indemnify, and hold harmless Kura Finance LLC and its officers, directors, employees, agents, and partners from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising out of or related to: (a) your use of the Service; (b) your violation of these Terms or applicable law; (c) your digital assets, keys, or transactions; (d) your content or submissions; or (e) disputes between you and third parties (including partners, protocols, or other users).
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">19. Dispute Resolution; Binding Arbitration; Class-Action Waiver</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            <span class="font-semibold text-kura-text">Informal resolution.</span>
            Before filing a claim, you agree to contact us at
            <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
            and attempt to resolve the dispute informally for thirty (30) days.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            <span class="font-semibold text-kura-text">Binding arbitration.</span>
            Except for disputes that may be brought in small-claims court or claims seeking injunctive relief for intellectual property misuse, any dispute arising out of or relating to these Terms or the Service will be resolved by binding individual arbitration administered by the American Arbitration Association (“AAA”) under its Consumer Arbitration Rules (or Commercial Rules if applicable). The seat of arbitration will be Cheyenne, Wyoming, unless you and we agree otherwise. Judgment on the award may be entered in any court of competent jurisdiction.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            <span class="font-semibold text-kura-text">Class-action and jury waiver.</span>
            You and Kura agree that disputes will be brought only in an individual capacity, and not as a plaintiff or class member in any class, consolidated, or representative proceeding. You and Kura waive any right to a jury trial to the fullest extent permitted by law.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            If this arbitration agreement is found unenforceable as to a particular claim, that claim must be brought exclusively in the state or federal courts located in Wyoming, and Section 20 applies. If you are a consumer in a jurisdiction that prohibits mandatory arbitration, the dispute-resolution rules of that jurisdiction control to the extent required.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">20. Governing Law; Venue</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict-of-law principles, except that the Federal Arbitration Act governs the interpretation and enforcement of Section 19. Subject to Section 19, exclusive venue for permitted court actions lies in the state or federal courts located in Wyoming. Mandatory consumer protections of your country of residence may also apply where they cannot be waived.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">21. App Stores</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            If you download the Application from the Apple App Store or Google Play, you acknowledge that these Terms are between you and Kura, not Apple or Google. Apple and Google are not responsible for the Application or its content, maintenance, or support, except as required by their store terms. Your use must also comply with applicable store terms.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-kura-text mb-4">22. General Provisions</h2>
          <p class="text-kura-text-secondary leading-relaxed">
            These Terms, together with the Privacy Policy, Risk Disclosure, Prohibited Activities List, Referral Program Terms, and any applicable cardholder or partner terms, are the entire agreement between you and Kura regarding the Service and supersede prior agreements on that subject. If any provision is unenforceable, the remaining provisions remain in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Notices may be provided electronically to the email associated with your account or in-app. Sections intended to survive termination will survive. The English version of these Terms controls if translated.
          </p>
          <p class="text-kura-text-secondary leading-relaxed mt-3">
            Contact:
            <a href="mailto:legal@kura-finance.com" class="text-kura-primary hover:text-kura-accent">legal@kura-finance.com</a>
            · Support:
            <a href="mailto:support@kura-finance.com" class="text-kura-primary hover:text-kura-accent">support@kura-finance.com</a>
            · Mailing: Kura Finance LLC, 1007 N Orange St. 4th Floor 5629, Wilmington, DE 19801.
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
  title: 'Terms of Service',
  description:
    'Kura Terms of Service governing use of Kura, Kura Card, TrackFi, Morpho Earn/Borrow, and related partner services.',
  path: '/tos',
  keywords: 'terms of service, user agreement, Kura Finance LLC legal, arbitration',
})
</script>
