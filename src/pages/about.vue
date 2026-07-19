<template>
  <div class="about-container text-kura-text">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="space-y-6">
        <h1 class="hero-title">
          Privacy Is Not a Setting. It Is the Architecture.
        </h1>
        <p class="hero-subtitle">
          Kura is built on Zero-Access design, so your financial data stays inaccessible without your authorization.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="content-block">
        <h2 class="mission-title">Our Mission: Zero-Access Financial Sovereignty</h2>
        <p class="mission-text">
          We design finance software where trust does not depend on blind faith in operators. In Kura's Zero-Access architecture, sensitive data is encrypted and permissioned so our team, infrastructure operators, and unauthorized third parties cannot inspect your raw records.
        </p>
      </div>
    </section>

    <!-- Built for Utility Section -->
    <section class="utility-section">
      <div class="content-block">
        <h2 class="utility-title">Built for Privacy, Not Surveillance</h2>
        <p class="utility-text">
          We reject the common model where platforms quietly centralize user visibility to drive cross-selling and behavioral monetization. Kura follows a least-knowledge philosophy: collect less, expose less, and never hold unnecessary plaintext capability. Privacy is the product, not legal fine print.
        </p>
      </div>
    </section>

    <!-- Join the Journey Section -->
    <section class="join-section">
      <div class="content-block">
        <h2 class="join-title">Join the Journey</h2>
        <p class="join-text">
          Whether you are an individual operator, a builder, or a global team, Kura is built for people who want financial clarity without surrendering data ownership.
        </p>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="founder-section">
      <div class="founder-card">
        <div class="quote-accent"></div>
        <div class="flex flex-col md:flex-row gap-8 md:gap-12">
          <!-- Avatar -->
          <div class="flex-shrink-0">
            <NuxtImg
              src="/avatar.webp"
              alt="Rick Weng, Founder"
              width="160"
              height="160"
              loading="lazy"
              decoding="async"
              class="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-kura-primary/30"
            />
          </div>
          <!-- Content -->
          <div class="flex-1 space-y-5">
            <h2 class="founder-heading">A Note from the Founder</h2>
            <p class="founder-text">
              I am not a trader, and I am not an arbitrageur or a speculator. I just wanted a simple app to manage my bank accounts, credit card spending, stocks, crypto, and staked ETH on Ether.fi and Lido in one place.
            </p>
            <p class="founder-text">
              I searched for a long time, but I could not find a single product that truly covered everything I needed.
            </p>
            <p class="founder-text">
              So I decided to build it myself, and to do it around the privacy principles I believe in. That is how Kura came to life.
            </p>
            <div class="signature">
              <span class="name">Rick Weng</span>
              <span class="title">Founder, Kura</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <h2 class="section-label">The Evolution</h2>
      <div class="timeline-wrapper">
        <div class="timeline">
          <div
            v-for="(item, index) in milestones"
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content-wrapper">
              <div class="timeline-header">
                <h3 class="timeline-title">{{ item.title }}</h3>
                <span class="timeline-time">{{ item.time }}</span>
              </div>
              <p class="timeline-description">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Footer -->
    <section class="trust-footer">
      <div class="trust-card">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 class="trust-title">Built with Transparency</h3>
            <p class="trust-desc">See how our Zero-Access model minimizes readable data exposure across legal and operational scenarios.</p>
          </div>
          <NuxtLink to="/compliance" class="btn-primary whitespace-nowrap">
            Visit Trust Center
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'About',
  description: 'Kura builds the Super Financial App — self-custody wallet, Visa card, and encrypted portfolio tracking in one place.',
  path: '/about',
  keywords: 'about Kura, super financial app, self-custody, zero-access architecture',
});

const milestones = [
  {
    time: 'Phase 1: Privacy Foundation',
    title: 'TrackFi',
    content:
      'We started with encrypted portfolio tracking—banking, investments, and digital assets in one dashboard, with zero-access encryption so readable data stays off our servers.',
  },
  {
    time: 'Phase 2: Unified Account',
    title: 'One place for your money',
    content:
      'Kura became a single financial account: add money, send globally, and see your balance and history from a calm, bank-like home screen.',
  },
  {
    time: 'Phase 3: Grow & Access',
    title: 'Invest, earn, and borrow',
    content:
      'US stocks, transparent yield, and on-demand liquidity—Invest, Earn, and Borrow in one app, powered by regulated partners and clear terms.',
  },
  {
    time: 'Phase 4: Spend',
    title: 'The Kura Card',
    content:
      'Spendable balance meets a modern card experience: virtual card today, with a physical Kura Card waitlist for cashback and fee-free international spend.',
  },
]
</script>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 24px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 120px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, #111827 0%, #4B5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
}

/* Mission Section */
.mission-section {
  margin-bottom: 100px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 60px;
}

.mission-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
}

.mission-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #6B7280;
  margin: 0;
}

/* Utility Section */
.utility-section {
  margin-bottom: 100px;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 60px;
}

.utility-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
}

.utility-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #6B7280;
  margin: 0;
}

/* Join Section */
.join-section {
  margin-bottom: 100px;
  background: rgba(124, 58, 237, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.15);
  border-radius: 12px;
  padding: 60px;
}

.join-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111827;
}

.join-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #6B7280;
  margin: 0;
}

/* Founder Section */
.founder-section {
  margin-bottom: 160px;
}

.founder-card {
  position: relative;
  background: rgba(0, 0, 0, 0.02);
  padding: 48px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.quote-accent {
  position: absolute;
  left: 0;
  top: 48px;
  width: 4px;
  height: 80px;
  background: #7c3aed;
  border-radius: 2px;
}

.founder-heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #111827;
}

.founder-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6B7280;
}

.signature {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.signature .name {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #111827;
}

.signature .title {
  color: #9CA3AF;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* Timeline Section */
.timeline-section {
  margin-bottom: 160px;
}

.section-label {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 64px;
  font-weight: 700;
}

.timeline-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #7c3aed, transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  left: -36px;
  top: 0;
  width: 12px;
  height: 12px;
  background: #7c3aed;
  border-radius: 50%;
  border: 3px solid #ffffff;
}

.timeline-content-wrapper {
  padding-bottom: 16px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 16px;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.timeline-time {
  font-size: 0.9rem;
  color: #7c3aed;
  font-weight: 500;
  white-space: nowrap;
}

.timeline-description {
  color: #9CA3AF;
  line-height: 1.6;
  margin: 0;
}

/* Trust Card */
.trust-footer {
  margin-bottom: 120px;
}

.trust-card {
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.15);
  padding: 32px;
}

.trust-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.trust-desc {
  color: #9CA3AF;
  margin: 8px 0 0 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .about-container {
    padding: 60px 16px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-section {
    margin-bottom: 80px;
  }

  .mission-section,
  .utility-section,
  .join-section {
    margin-bottom: 60px;
    padding: 24px;
  }

  .mission-title,
  .utility-title,
  .join-title {
    font-size: 1.5rem;
  }

  .mission-text,
  .utility-text,
  .join-text {
    font-size: 0.95rem;
  }

  .founder-card {
    padding: 24px;
  }

  .section-label {
    font-size: 1.75rem;
    margin-bottom: 40px;
  }

  .founder-section {
    margin-bottom: 100px;
  }

  .timeline-section {
    margin-bottom: 100px;
  }

  .trust-card {
    padding: 24px;
  }

  .trust-title {
    font-size: 1rem;
  }
}
</style>
