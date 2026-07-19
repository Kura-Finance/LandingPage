<script setup lang="ts">
import { formatCount, formatDate, formatUsd } from '~/utils/kura-api'
import { useInvestorMetrics, type SyncNotice } from '~/composables/useInvestorMetrics'

function noticeToneClass(type: SyncNotice['type']) {
  if (type === 'error') return 'ir-notice--error'
  if (type === 'success') return 'ir-notice--success'
  return 'ir-notice--info'
}

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Platform Performance Report',
  description:
    'Kura platform performance report for investors — revenue, waitlist signups, active subscriptions, and active users.',
  path: '/investors',
  keywords: 'Kura investors, platform metrics, active users, revenue, waitlist, annual report',
})

const {
  platformSummary,
  platformRevenue,
  platformRevenueTotalUsd,
  activeUsers,
  swapMetrics,
  rampMetrics,
  cardMetrics,
  earn,
  earnUnavailable,
  earnVaultRows,
  lifiSummary,
  subscriptionRate,
  metricsLoading,
  metricsUnavailable,
  periodLabel,
  revenueByProduct,
  waitlistByProduct,
  subscriptionsByTier,
  syncing,
  syncNotices,
  refreshMetrics,
} = useInvestorMetrics()

const subscriptionRateLabel = computed(() => {
  if (subscriptionRate.value == null) return null
  return `${(subscriptionRate.value * 100).toFixed(1)}%`
})

const platformRevenueLabel = computed(() => {
  if (platformRevenueTotalUsd.value == null) return '—'
  return formatUsd(platformRevenueTotalUsd.value, 2)
})

const platformRevenueDetail = computed(() => {
  const volume = `Processing volume ${formatUsd(platformSummary.value?.process?.totalProcessUsd)}`
  if (!platformRevenue.value) {
    return `${volume} · revenue pending backend deploy`
  }
  return volume
})

const swapDetailLabel = computed(() => {
  const base = `${formatCount(swapMetrics.value.count)} transfers`
  if (!platformRevenue.value) return base
  return `${base} · revenue ${formatUsd(swapMetrics.value.netUsd, 2)}`
})

const rampDetailLabel = computed(() => {
  const base = `${formatCount(rampMetrics.value.count)} events`
  if (!platformRevenue.value) return base
  return `${base} · revenue ${formatUsd(rampMetrics.value.netUsd, 2)}`
})

const swapSyncedLabel = computed(() => {
  if (!lifiSummary.value?.lastSyncedAt) return 'Swap data awaiting first sync'
  return `Swap last synced ${formatDate(lifiSummary.value.lastSyncedAt)}`
})

const earnAumLabel = computed(() => {
  if (!earn.value) return '—'
  if (earnUnavailable.value) return 'Unavailable'
  return formatUsd(earn.value.totalAssetsUsd, 2)
})

const earnDetailLabel = computed(() => {
  if (!earn.value) return 'FeeWarp AUM pending summary deploy'
  if (earnUnavailable.value) return 'Earn AUM temporarily unavailable'
  const feeBps = earn.value.performanceFeeBps ?? 1000
  const feePct = feeBps % 100 === 0 ? `${feeBps / 100}%` : `${(feeBps / 100).toFixed(2)}%`
  const fetched = formatDate(earn.value.fetchedAt)
  return `${formatCount(earn.value.vaultCount)} FeeWarp vaults · ${feePct} performance fee · as of ${fetched}`
})

const cardDetailLabel = computed(() => {
  if (cardMetrics.value.status === 'reserved') return 'Reserved product slot'
  return `${formatCount(cardMetrics.value.count)} events · revenue ${formatUsd(cardMetrics.value.netUsd, 2)}`
})

const documentStatus = computed(() => {
  if (metricsLoading.value) return 'Updating'
  if (metricsUnavailable.value) return 'Unavailable'
  return 'Live'
})

const revenueBreakdownRows = computed(() =>
  revenueByProduct.value.map((row) => ({
    key: row.key,
    label: row.label,
    primary:
      row.status === 'reserved' && row.revenueUsd <= 0
        ? 'Reserved'
        : formatUsd(row.revenueUsd, 2),
    secondary: row.secondary,
    share: row.share,
  })),
)

const earnBreakdownRows = computed(() => {
  if (earnUnavailable.value || !earn.value) return []
  return earnVaultRows.value.map((row) => ({
    key: row.key,
    label: row.label,
    primary: row.primary,
    secondary: row.secondary,
    share: row.share,
  }))
})

const waitlistBreakdownRows = computed(() =>
  waitlistByProduct.value.map((row) => ({
    key: row.key,
    label: row.label,
    primary: formatCount(row.count),
    share: row.share,
  })),
)

const subscriptionBreakdownRows = computed(() =>
  subscriptionsByTier.value.map((row) => ({
    key: row.key,
    label: row.label,
    primary: formatCount(row.count),
    share: row.share,
  })),
)
</script>

<template>
  <div class="ir-page">
    <div class="marketing-container ir-page__inner">
      <header class="ir-masthead">
        <div class="ir-masthead__brand-row">
          <p class="ir-masthead__brand">Kura</p>
          <p class="ir-masthead__doc-type">Investor Relations</p>
        </div>

        <div class="ir-masthead__title-row">
          <div class="ir-masthead__titles">
            <h1 class="ir-masthead__title">Platform Performance Report</h1>
            <p class="ir-masthead__subtitle">
              Live operating metrics across revenue, growth, and engagement.
            </p>
          </div>

          <button
            type="button"
            class="ir-refresh"
            :disabled="syncing"
            @click="refreshMetrics"
          >
            <svg
              class="ir-refresh__icon"
              :class="syncing ? 'ir-refresh__icon--spin' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.75"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {{ syncing ? 'Syncing…' : 'Refresh' }}
          </button>
        </div>

        <dl class="ir-masthead__meta">
          <div class="ir-masthead__meta-item">
            <dt>Reporting period</dt>
            <dd>{{ periodLabel || 'Awaiting period' }}</dd>
          </div>
          <div class="ir-masthead__meta-item">
            <dt>Document status</dt>
            <dd>{{ documentStatus }}</dd>
          </div>
          <div class="ir-masthead__meta-item">
            <dt>Prepared for</dt>
            <dd>Investors &amp; partners</dd>
          </div>
        </dl>
      </header>

      <div v-if="syncNotices.length" class="ir-notices" role="status">
        <p
          v-for="(notice, index) in syncNotices"
          :key="index"
          class="ir-notice"
          :class="noticeToneClass(notice.type)"
        >
          {{ notice.text }}
        </p>
      </div>

      <div v-if="metricsLoading" class="ir-state">
        <p>Compiling platform metrics…</p>
      </div>

      <div v-else-if="metricsUnavailable" class="ir-state ir-state--warn">
        <p>Metrics are temporarily unavailable. Refresh to retry.</p>
      </div>

      <template v-else>
        <InvestorReportSection
          index="01"
          title="Highlights"
          lede="Headline figures for the current reporting window."
        >
          <div class="ir-highlights">
            <InvestorMetricCard
              featured
              label="Platform revenue"
              :value="platformRevenueLabel"
              :detail="platformRevenueDetail"
            />
            <InvestorMetricCard
              featured
              label="Waitlist signups"
              :value="formatCount(platformSummary?.waitlist?.totalSignups)"
            />
            <InvestorMetricCard
              featured
              label="Active users"
              :value="formatCount(activeUsers?.activeUsers)"
              :detail="`${formatCount(activeUsers?.totalUsers)} total users · trailing 30 days`"
            />
          </div>
        </InvestorReportSection>

        <InvestorReportSection
          index="02"
          title="Operating metrics"
          lede="Product volumes pulled out for the report — then engagement and subscription context."
        >
          <div class="ir-ops ir-ops--volumes">
            <InvestorMetricCard
              label="Swap volume"
              :value="formatUsd(swapMetrics.processUsd)"
              :detail="swapDetailLabel"
            />
            <InvestorMetricCard
              label="Crypto <> Fiat volume"
              :value="formatUsd(rampMetrics.processUsd)"
              :detail="rampDetailLabel"
            />
            <InvestorMetricCard
              label="Kura Earn AUM"
              :value="earnAumLabel"
              :detail="earnDetailLabel"
            />
            <InvestorMetricCard
              label="Card"
              :value="cardMetrics.status === 'reserved' ? 'Reserved' : formatUsd(cardMetrics.processUsd)"
              :detail="cardDetailLabel"
            />
          </div>
          <div class="ir-ops ir-ops--secondary">
            <InvestorMetricCard
              label="Revenue events"
              :value="formatCount(platformSummary?.process?.eventCount)"
            />
            <InvestorMetricCard
              label="Active subscriptions"
              :value="formatCount(platformSummary?.subscriptions?.activeCount)"
            />
            <InvestorMetricCard
              label="Subscription rate"
              :value="subscriptionRateLabel ?? '—'"
              :detail="`${formatCount(platformSummary?.subscriptions?.activeCount)} active · ${formatCount(activeUsers?.totalUsers)} total users`"
            />
          </div>
          <p class="ir-footnote-inline">{{ swapSyncedLabel }}</p>
          <p v-if="earnUnavailable" class="ir-footnote-inline ir-footnote-inline--warn">
            Earn AUM could not be fetched from Morpho. Figures above are not a true $0 TVL.
          </p>
        </InvestorReportSection>

        <InvestorReportSection
          index="03"
          title="Composition"
          lede="How headline metrics break down across sources, products, and tiers."
        >
          <div class="ir-composition">
            <div class="ir-composition__stack">
              <InvestorBreakdownCard
                title="Platform revenue by product"
                name-header="Product"
                value-header="Revenue"
                :rows="revenueBreakdownRows"
              />
              <p v-if="!platformRevenue" class="ir-table-note">
                Platform revenue by product awaits the backend
                <em>platformRevenue</em>
                block. The UI does not estimate fees from process volume.
              </p>
              <InvestorBreakdownCard
                title="Subscriptions by tier"
                name-header="Tier"
                value-header="Active"
                :rows="subscriptionBreakdownRows"
              />
            </div>
            <div class="ir-composition__stack">
              <InvestorBreakdownCard
                title="Kura Earn by vault"
                name-header="Vault"
                value-header="AUM"
                :rows="earnBreakdownRows"
              />
              <p v-if="earnUnavailable" class="ir-table-note">
                Vault AUM temporarily unavailable.
              </p>
              <p v-else-if="!earn" class="ir-table-note">
                Earn block not yet present on this deployment.
              </p>
              <InvestorBreakdownCard
                title="Waitlist by product"
                name-header="Product"
                value-header="Signups"
                :rows="waitlistBreakdownRows"
              />
            </div>
          </div>
        </InvestorReportSection>

        <InvestorReportSection index="04" title="Notes">
          <ol class="ir-notes">
            <li>
              <span class="ir-notes__mark">1</span>
              <span>
                <strong>Processing volume (Process)</strong>
                is the total transaction amount across Crypto <> Fiat ramps, Swap transfers, and similar period-scoped flows.
              </span>
            </li>
            <li>
              <span class="ir-notes__mark">2</span>
              <span>
                <strong>Platform revenue</strong>
                comes only from
                <em>platformRevenue.totalUsd</em>
                /
                <em>byProduct.*.revenueUsd</em>
                . Policy is backend-owned (Bridge / Swap 0.25%, Dinari 0%, Earn 10% performance fee recognized at $0 until harvest, Card reserved, Subscriptions = Stripe). The UI never re-estimates fees.
              </span>
            </li>
            <li>
              <span class="ir-notes__mark">3</span>
              <span>
                <strong>Kura Earn AUM</strong>
                is live FeeWrapper managed assets on Base (not the reporting-period window). The
                as-of time is the Earn
                <em>fetchedAt</em>
                timestamp; Morpho failures must not be read as $0 TVL.
              </span>
            </li>
            <li>
              <span class="ir-notes__mark">4</span>
              <span>
                <strong>Refresh</strong>
                forces platform backfill, Swap analytics sync, and Privy sync without re-issuing referral payouts. Earn AUM refreshes with the summary response.
              </span>
            </li>
          </ol>
        </InvestorReportSection>
      </template>

      <footer class="ir-correspondence">
        <div class="ir-correspondence__grid">
          <div>
            <p class="ir-correspondence__label">Correspondence</p>
            <h2 class="ir-correspondence__title">Investor inquiries</h2>
            <p class="ir-correspondence__body">
              For data room access, partnership discussions, or custom reporting, contact the team directly.
            </p>
          </div>
          <div class="ir-correspondence__contact">
            <a href="mailto:hello@kura-finance.com" class="ir-correspondence__email">
              hello@kura-finance.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.ir-page {
  width: 100%;
  min-height: 100vh;
  color: #12131a;
  background:
    linear-gradient(180deg, #f3f4f8 0%, #f8f9fc 18%, #f8f9fc 100%);
}

.ir-page__inner {
  padding-top: 7.5rem;
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .ir-page__inner {
    padding-top: 8.5rem;
    padding-bottom: 6.5rem;
  }
}

/* —— Masthead —— */
.ir-masthead {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #12131a;
}

.ir-masthead__brand-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.ir-masthead__brand {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.ir-masthead__doc-type {
  margin: 0;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-masthead__title-row {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .ir-masthead__title-row {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
  }
}

.ir-masthead__title {
  margin: 0 0 0.75rem;
  max-width: 18ch;
  font-family: "Newsreader", Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.02;
  color: #12131a;
}

.ir-masthead__subtitle {
  margin: 0;
  max-width: 28rem;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #64687a;
}

.ir-refresh {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.625rem 0.875rem;
  border: 1px solid #12131a;
  background: transparent;
  color: #12131a;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.ir-refresh:hover:not(:disabled) {
  background: #12131a;
  color: #fff;
}

.ir-refresh:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.ir-refresh__icon {
  width: 0.875rem;
  height: 0.875rem;
}

.ir-refresh__icon--spin {
  animation: ir-spin 0.8s linear infinite;
}

@keyframes ir-spin {
  to {
    transform: rotate(360deg);
  }
}

.ir-masthead__meta {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 2rem;
  margin: 0;
}

@media (min-width: 640px) {
  .ir-masthead__meta {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.ir-masthead__meta-item {
  min-width: 0;
  padding-top: 0.75rem;
  border-top: 1px solid #d5d9e4;
}

.ir-masthead__meta-item dt {
  margin: 0 0 0.35rem;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-masthead__meta-item dd {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: #12131a;
  font-variant-numeric: tabular-nums;
}

/* —— Notices / states —— */
.ir-notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.ir-notice {
  margin: 0;
  padding: 0.75rem 0 0.75rem 0.875rem;
  border-left: 2px solid #d5d9e4;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #64687a;
}

.ir-notice--info {
  border-left-color: #7c5cfc;
}

.ir-notice--success {
  border-left-color: #1f7a4d;
  color: #1f7a4d;
}

.ir-notice--error {
  border-left-color: #b42318;
  color: #8a1c14;
}

.ir-state {
  margin: 2rem 0;
  padding: 2.5rem 0;
  border-top: 1px solid #e1e4ec;
  border-bottom: 1px solid #e1e4ec;
  text-align: center;
}

.ir-state p {
  margin: 0;
  font-size: 0.875rem;
  color: #64687a;
}

.ir-state--warn {
  border-color: rgba(180, 120, 40, 0.35);
}

.ir-state--warn p {
  color: #8a5a12;
}

/* —— Section grids —— */
.ir-highlights {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem 1.5rem;
}

@media (min-width: 768px) {
  .ir-highlights {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5rem 2rem;
  }

  .ir-highlights > :not(:first-child) {
    padding-left: 2rem;
    border-left: 1px solid #e1e4ec;
  }
}

.ir-ops {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem 1.25rem;
}

.ir-ops--volumes {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .ir-ops--volumes {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .ir-ops--secondary {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }

  .ir-ops--volumes > :nth-child(even),
  .ir-ops--secondary > :not(:first-child) {
    padding-left: 1.5rem;
    border-left: 1px solid #e1e4ec;
  }
}

@media (min-width: 960px) {
  .ir-ops--volumes {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .ir-ops--volumes > :nth-child(even) {
    padding-left: 0;
    border-left: none;
  }

  .ir-ops--volumes > :not(:first-child) {
    padding-left: 1.5rem;
    border-left: 1px solid #e1e4ec;
  }
}

.ir-footnote-inline {
  margin: 1.5rem 0 0;
  font-size: 0.75rem;
  color: #9499a8;
}

.ir-footnote-inline--warn {
  color: #8a5a12;
}

.ir-composition {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.ir-composition__stack {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.ir-table-note {
  margin: -1.5rem 0 0;
  font-size: 0.75rem;
  color: #9499a8;
}

@media (min-width: 1024px) {
  .ir-composition {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem 2.5rem;
  }
}

/* —— Notes —— */
.ir-notes {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 48rem;
}

.ir-notes li {
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  gap: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.65;
  color: #64687a;
}

.ir-notes__mark {
  font-size: 0.6875rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: #9499a8;
}

.ir-notes strong {
  font-weight: 600;
  color: #12131a;
}

/* —— Correspondence —— */
.ir-correspondence {
  margin-top: 1rem;
  padding-top: 2.5rem;
  border-top: 1px solid #12131a;
}

.ir-correspondence__grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .ir-correspondence__grid {
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 3rem;
  }
}

.ir-correspondence__label {
  margin: 0 0 0.75rem;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-correspondence__title {
  margin: 0 0 0.75rem;
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
}

.ir-correspondence__body {
  margin: 0;
  max-width: 28rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #64687a;
}

.ir-correspondence__email {
  display: inline-block;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #12131a;
  text-decoration: none;
  border-bottom: 1px solid #12131a;
  padding-bottom: 0.15rem;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ir-correspondence__email:hover {
  color: #7c5cfc;
  border-bottom-color: #7c5cfc;
}
</style>
