<script setup lang="ts">
import { formatCount, formatDate, formatUsd } from '~/utils/kura-api'
import { syncNoticeClasses, useInvestorMetrics } from '~/composables/useInvestorMetrics'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Investor Metrics',
  description:
    'Live platform metrics for investors — revenue, waitlist signups, active subscriptions, and active users on Kura Finance.',
  path: '/investors',
  keywords: 'Kura Finance investors, platform metrics, active users, revenue, waitlist',
})

const {
  platformSummary,
  activeUsers,
  activeUserRate,
  metricsLoading,
  metricsUnavailable,
  periodLabel,
  revenueBySource,
  waitlistByProduct,
  subscriptionsByTier,
  syncing,
  syncNotices,
  refreshMetrics,
} = useInvestorMetrics()

const activeUserRateLabel = computed(() => {
  if (activeUserRate.value == null) return null
  return `${(activeUserRate.value * 100).toFixed(1)}% of total users`
})

const revenueBreakdownRows = computed(() =>
  revenueBySource.value.map((row) => ({
    key: row.key,
    label: row.label,
    primary: formatUsd(row.netUsd),
    secondary: `${formatCount(row.count)} events`,
    share: row.share,
  })),
)

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
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Platform insights"
      title="Investor metrics"
      description="Live revenue, growth, and user activity from the Kura platform — updated on demand."
      :divider="false"
    />

    <main class="marketing-container pb-20 md:pb-28">
      <div class="investor-toolbar">
        <div class="investor-toolbar__meta">
          <p v-if="periodLabel" class="investor-toolbar__period">
            Reporting period
            <span>{{ periodLabel }}</span>
          </p>
          <p v-else class="investor-toolbar__period investor-toolbar__period--muted">
            Awaiting reporting period
          </p>
        </div>
        <button
          type="button"
          :disabled="syncing"
          class="btn-secondary text-sm gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="refreshMetrics"
        >
          <svg
            class="w-4 h-4"
            :class="syncing ? 'animate-spin' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {{ syncing ? 'Syncing…' : 'Refresh data' }}
        </button>
      </div>

      <div v-if="syncNotices.length" class="space-y-2 mb-8">
        <p
          v-for="(notice, index) in syncNotices"
          :key="index"
          class="rounded-xl border px-4 py-3 text-sm"
          :class="syncNoticeClasses(notice.type)"
        >
          {{ notice.text }}
        </p>
      </div>

      <div v-if="metricsLoading" class="investor-state card-surface p-12 text-center">
        <p class="text-kura-text-secondary">Loading platform metrics…</p>
      </div>

      <div
        v-else-if="metricsUnavailable"
        class="investor-state rounded-2xl border border-kura-warning/30 bg-kura-warning/5 p-8 text-center"
      >
        <p class="text-kura-text-secondary text-sm">
          Metrics are temporarily unavailable. Try refreshing in a moment.
        </p>
      </div>

      <template v-else>
        <section class="mb-10 md:mb-12">
          <p class="section-label mb-5">Headline</p>
          <div class="grid md:grid-cols-3 gap-4">
            <InvestorMetricCard
              featured
              label="Net revenue"
              :value="formatUsd(platformSummary?.revenue.totalNetUsd)"
              :detail="`Gross ${formatUsd(platformSummary?.revenue.totalGrossUsd)} · Fees ${formatUsd(platformSummary?.revenue.totalPlatformFeeUsd)}`"
            />
            <InvestorMetricCard
              featured
              label="Waitlist signups"
              :value="formatCount(platformSummary?.waitlist.totalSignups)"
            />
            <InvestorMetricCard
              featured
              label="Active users"
              :value="formatCount(activeUsers?.activeUsers)"
              :detail="`${formatCount(activeUsers?.totalUsers)} total users · last 30 days`"
            />
          </div>
        </section>

        <section class="mb-10 md:mb-12">
          <p class="section-label mb-5">Activity</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InvestorMetricCard
              label="Revenue events"
              :value="formatCount(platformSummary?.revenue.eventCount)"
            />
            <InvestorMetricCard
              label="Active subscriptions"
              :value="formatCount(platformSummary?.subscriptions.activeCount)"
            />
            <InvestorMetricCard
              label="Active user rate"
              :value="activeUserRateLabel ?? '—'"
              :detail="activeUsers?.lastSyncedAt ? `Synced ${formatDate(activeUsers.lastSyncedAt)}` : 'Awaiting Privy sync'"
            />
          </div>
        </section>

        <section class="grid lg:grid-cols-2 gap-4 mb-12">
          <InvestorBreakdownCard
            title="Revenue by source"
            :rows="revenueBreakdownRows"
          />
          <div class="space-y-4">
            <InvestorBreakdownCard
              title="Waitlist by product"
              :rows="waitlistBreakdownRows"
            />
            <InvestorBreakdownCard
              title="Subscriptions by tier"
              :rows="subscriptionBreakdownRows"
            />
          </div>
        </section>
      </template>

      <section class="investor-contact card-surface p-8 md:p-10 text-center bg-white">
        <p class="section-label mb-4">Contact</p>
        <h2 class="headline-xl text-display-sm mb-4">Investor inquiries</h2>
        <p class="text-kura-text-secondary text-sm mb-6 max-w-lg mx-auto leading-relaxed">
          For data room access, partnership discussions, or custom reporting, reach out to our team directly.
        </p>
        <a href="mailto:hello@kura-finance.com" class="btn-primary">
          hello@kura-finance.com
        </a>
      </section>
    </main>
  </div>
</template>

<style scoped>
.investor-toolbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .investor-toolbar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.investor-toolbar__period {
  font-size: 0.875rem;
  color: #64687a;
}

.investor-toolbar__period span {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #12131a;
}

@media (min-width: 640px) {
  .investor-toolbar__period span {
    display: inline;
    margin-top: 0;
    margin-left: 0.5rem;
  }
}

.investor-toolbar__period--muted {
  color: #9499a8;
}

.investor-state {
  margin-bottom: 2rem;
}

.investor-contact {
  border-color: rgba(124, 92, 252, 0.12);
  background: linear-gradient(180deg, #fff 0%, #faf9ff 100%);
}
</style>
