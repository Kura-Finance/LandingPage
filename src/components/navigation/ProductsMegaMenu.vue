<template>
  <div class="products-mega">
    <div class="products-mega__layout">
      <!-- Left hero -->
      <aside class="products-mega__hero">
        <NuxtLink to="/financial-account" class="products-mega__hero-link group" @click="$emit('close')">
          <h2 class="products-mega__hero-title">Financial Account</h2>
        </NuxtLink>
        <p class="products-mega__hero-desc">
          Save, spend, invest, and earn from one beautiful account — at every stage of your financial life.
        </p>
        <NuxtLink to="/download" class="products-mega__cta" @click="$emit('close')">
          Download the app
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </NuxtLink>
      </aside>

      <!-- 2×2 grid -->
      <div class="products-mega__grid">
        <div
          v-for="category in categories"
          :key="category.title"
          class="products-mega__cell"
        >
          <h3 class="products-mega__cell-title">{{ category.title }}</h3>
          <p class="products-mega__cell-desc">{{ category.description }}</p>
          <p class="products-mega__label">Products</p>
          <ul class="products-mega__links">
            <li v-for="link in category.links" :key="link.name">
              <NuxtLink :to="link.to" class="products-mega__link" @click="$emit('close')">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom banner -->
    <NuxtLink to="/compare" class="products-mega__banner" @click="$emit('close')">
      <div class="products-mega__banner-inner">
        <span class="products-mega__banner-title">
          Compare Kura
          <span class="products-mega__banner-arrow" aria-hidden="true">→</span>
        </span>
        <p class="products-mega__banner-desc">
          See how Kura stacks up against traditional banks, exchanges, and wallets.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ close: [] }>()

const categories = [
  {
    title: 'Cash & Transfers',
    description: 'Move money globally with bank transfers and digital dollars.',
    links: [
      { name: 'Account', to: '/account' },
      { name: 'Global Transfers', to: '/global-transfers' },
      { name: 'Multi-Currency', to: '/multi-currency' },
    ],
  },
  {
    title: 'Cards & Spending',
    description: 'Spend your balance anywhere Visa is accepted.',
    links: [
      { name: 'Kura Card', to: '/kura-card' },
      { name: 'Join Waitlist', to: '/card-waitlist' },
    ],
  },
  {
    title: 'Investing & Earn',
    description: 'Build wealth with stocks, digital assets, yield, and borrowing.',
    links: [
      { name: 'Invest', to: '/invest' },
      { name: 'US Stocks', to: '/us-stocks' },
      { name: 'Earn', to: '/earn' },
      { name: 'Borrow', to: '/borrow' },
    ],
  },
  {
    title: 'Portfolio & Business',
    description: 'Personal net worth and shared company cash in one product family.',
    links: [
      { name: 'TrackFi', to: '/trackfi' },
      { name: 'Connected Accounts', to: '/connected-accounts' },
      { name: 'Net Worth', to: '/net-worth' },
      { name: 'Business & Team', to: '/business' },
    ],
  },
]
</script>

<style scoped>
.products-mega {
  color: #f0f2f7;
}

.products-mega__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

@media (min-width: 1024px) {
  .products-mega__layout {
    grid-template-columns: minmax(220px, 280px) 1fr;
  }
}

.products-mega__hero {
  padding: 2rem 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 1024px) {
  .products-mega__hero {
    padding: 2.5rem 2.5rem 2.5rem 0;
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }
}

.products-mega__hero-link {
  display: block;
  transition: opacity 0.15s;
}

.products-mega__hero-link:hover {
  opacity: 0.85;
}

.products-mega__hero-title {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.products-mega__hero-desc {
  font-size: 0.875rem;
  line-height: 1.65;
  color: rgba(240, 242, 247, 0.55);
  margin-bottom: 1.75rem;
  max-width: 240px;
}

.products-mega__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.125rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  font-size: 0.8125rem;
  font-weight: 500;
  color: #f0f2f7;
  transition: background-color 0.2s, border-color 0.2s;
}

.products-mega__cta:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.4);
}

.products-mega__grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .products-mega__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.products-mega__cell {
  padding: 1.75rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 640px) {
  .products-mega__cell:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }

  .products-mega__cell:nth-child(3),
  .products-mega__cell:nth-child(4) {
    border-bottom: none;
  }
}

@media (min-width: 1024px) {
  .products-mega__cell {
    padding: 2rem 2.5rem;
  }
}

.products-mega__cell-title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  letter-spacing: -0.01em;
}

.products-mega__cell-desc {
  font-size: 0.8125rem;
  line-height: 1.55;
  color: rgba(240, 242, 247, 0.45);
  margin-bottom: 1.25rem;
  max-width: 280px;
}

.products-mega__label {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(240, 242, 247, 0.35);
  margin-bottom: 0.625rem;
}

.products-mega__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.products-mega__link {
  font-size: 0.875rem;
  color: rgba(240, 242, 247, 0.75);
  transition: color 0.15s;
}

.products-mega__link:hover {
  color: #f0f2f7;
}

.products-mega__banner {
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.25rem 1.5rem;
  transition: background-color 0.2s;
}

.products-mega__banner:hover {
  background: rgba(255, 255, 255, 0.03);
}

@media (min-width: 1024px) {
  .products-mega__banner {
    padding: 1.25rem 0;
  }
}

.products-mega__banner-inner {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media (min-width: 640px) {
  .products-mega__banner-inner {
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
  }
}

.products-mega__banner-title {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  white-space: nowrap;
}

.products-mega__banner-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  line-height: 1;
}

.products-mega__banner-desc {
  font-size: 0.8125rem;
  color: rgba(240, 242, 247, 0.45);
  line-height: 1.5;
}
</style>
