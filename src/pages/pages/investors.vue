<script setup lang="ts">
import type {
  ApiResponse,
  BackfillResult,
  PlatformSummaryData,
  ScanResult,
  ScaAnalyticsSummaryData,
} from '~/types/platform-insights'
import { formatCount, formatDate, formatUsd } from '~/utils/kura-api'
import {
  getBackfillSuccessMessage,
  getLazyUpdateMessage,
  getScanSuccessMessage,
  isLazySkipped,
} from '~/utils/platform-sync'

definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Investors — Platform Insights',
  description:
    'Live platform metrics for investors — revenue, waitlist signups, active subscriptions, and SCA AUM on Kura Finance.',
  path: '/investors',
  keywords: 'Kura Finance investors, platform metrics, SCA AUM, revenue, waitlist',
})

const { data: platformRes, status: platformStatus, refresh: refreshPlatform } = await useFetch<
  ApiResponse<PlatformSummaryData>
>('/api/platform-insights/summary', {
  key: 'platform-insights-summary',
})

const { data: scaRes, status: scaStatus, refresh: refreshSca } = await useFetch<
  ApiResponse<ScaAnalyticsSummaryData>
>('/api/sca-analytics/summary', {
  key: 'sca-analytics-summary',
})

const platformSummary = computed(() =>
  platformRes.value?.success ? platformRes.value.data : null
)
const scaSummary = computed(() => (scaRes.value?.success ? scaRes.value.data : null))

const metricsLoading = computed(
  () => platformStatus.value === 'pending' || scaStatus.value === 'pending'
)
const metricsUnavailable = computed(
  () =>
    !metricsLoading.value &&
    (!platformRes.value?.success || !scaRes.value?.success)
)

const periodLabel = computed(() => {
  const period = platformSummary.value?.period
  if (!period) return null
  return `${formatDate(period.from)} → ${formatDate(period.to)}`
})

const revenueBySource = computed(() => {
  const bySource = platformSummary.value?.revenue.bySource ?? {}
  return Object.entries(bySource)
    .filter(([, v]) => v.count > 0)
    .sort((a, b) => b[1].netUsd - a[1].netUsd)
})

const waitlistByProduct = computed(() => {
  const byProduct = platformSummary.value?.waitlist.byProduct ?? {}
  return Object.entries(byProduct).sort((a, b) => b[1] - a[1])
})

const subscriptionsByTier = computed(() => {
  const byTier = platformSummary.value?.subscriptions.byTier ?? {}
  return Object.entries(byTier).sort((a, b) => b[1] - a[1])
})

type SyncNotice = { type: 'info' | 'success' | 'error'; text: string }

const syncing = ref(false)
const syncNotices = ref<SyncNotice[]>([])

async function postSync<T>(path: string): Promise<ApiResponse<T>> {
  return $fetch<ApiResponse<T>>(path, { method: 'POST' })
}

async function refreshMetrics() {
  syncing.value = true
  syncNotices.value = []

  try {
    const backfillRes = await postSync<BackfillResult>('/api/platform-insights/backfill')
    if (!backfillRes.success) {
      throw new Error(backfillRes.error.message)
    }
    syncNotices.value.push({
      type: isLazySkipped(backfillRes.data) ? 'info' : 'success',
      text: isLazySkipped(backfillRes.data)
        ? getLazyUpdateMessage(backfillRes.data)
        : getBackfillSuccessMessage(backfillRes.data),
    })

    const scanRes = await postSync<ScanResult>('/api/sca-analytics/scan')
    if (!scanRes.success) {
      throw new Error(scanRes.error.message)
    }
    syncNotices.value.push({
      type: isLazySkipped(scanRes.data) ? 'info' : 'success',
      text: isLazySkipped(scanRes.data)
        ? getLazyUpdateMessage(scanRes.data)
        : getScanSuccessMessage(scanRes.data),
    })

    await Promise.all([refreshPlatform(), refreshSca()])
  } catch {
    syncNotices.value = [{ type: 'error', text: 'Sync failed. Please try again later.' }]
  } finally {
    syncing.value = false
  }
}

function noticeClasses(type: SyncNotice['type']) {
  if (type === 'error') return 'border-kura-error/30 bg-kura-error/5 text-kura-text'
  if (type === 'success') return 'border-kura-success/30 bg-kura-success/5 text-kura-text'
  return 'border-kura-primary/20 bg-kura-primary/5 text-kura-text-secondary'
}
</script>

<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Platform Insights"
      title="Investor Metrics"
      description="Live revenue, growth, and AUM figures from the Kura platform."
    >
      <p v-if="periodLabel" class="text-sm text-kura-ink-subtle mb-6">
        Reporting period: {{ periodLabel }}
      </p>
      <button
        type="button"
        :disabled="syncing"
        class="btn-ghost-light text-sm gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="refreshMetrics"
      >
        <svg
          class="w-4 h-4"
          :class="syncing ? 'animate-spin' : ''"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
    </PageHero>

    <main class="marketing-container max-w-5xl pb-20 md:pb-28">
      <div v-if="syncNotices.length" class="space-y-2 mb-8">
        <p
          v-for="(notice, index) in syncNotices"
          :key="index"
          class="rounded-xl border px-4 py-3 text-sm"
          :class="noticeClasses(notice.type)"
        >
          {{ notice.text }}
        </p>
      </div>

      <div
        v-if="metricsLoading"
        class="card-surface p-10 text-center text-kura-text-secondary"
      >
        Loading platform metrics…
      </div>

      <div
        v-else-if="metricsUnavailable"
        class="rounded-2xl border border-kura-warning/30 bg-kura-warning/5 p-6 text-sm text-kura-text-secondary text-center"
      >
        Metrics are temporarily unavailable. Please try again later.
      </div>

      <template v-else>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">Net Revenue</p>
            <p class="text-2xl font-bold">{{ formatUsd(platformSummary?.revenue.totalNetUsd) }}</p>
            <p class="text-xs text-kura-text-secondary mt-1">
              Gross {{ formatUsd(platformSummary?.revenue.totalGrossUsd) }} ·
              Fees {{ formatUsd(platformSummary?.revenue.totalPlatformFeeUsd) }}
            </p>
          </div>
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">Revenue Events</p>
            <p class="text-2xl font-bold">{{ formatCount(platformSummary?.revenue.eventCount) }}</p>
          </div>
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">Waitlist Signups</p>
            <p class="text-2xl font-bold">{{ formatCount(platformSummary?.waitlist.totalSignups) }}</p>
          </div>
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">Active Subscriptions</p>
            <p class="text-2xl font-bold">{{ formatCount(platformSummary?.subscriptions.activeCount) }}</p>
          </div>
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">SCA AUM</p>
            <p class="text-2xl font-bold">{{ formatUsd(platformSummary?.scaAum.totalUsd, 2) }}</p>
            <p class="text-xs text-kura-text-secondary mt-1">
              {{ formatCount(platformSummary?.scaAum.walletCount) }} wallets
            </p>
          </div>
          <div class="card-surface p-5">
            <p class="text-xs uppercase tracking-widest text-kura-text-secondary mb-2">DeBank Scan AUM</p>
            <p class="text-2xl font-bold">{{ formatUsd(scaSummary?.totalUsd, 2) }}</p>
            <p class="text-xs text-kura-text-secondary mt-1">
              Spot {{ formatUsd(scaSummary?.spotUsd, 2) }} · DeFi {{ formatUsd(scaSummary?.defiUsd, 2) }}
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-12">
          <div v-if="revenueBySource.length" class="card-surface p-5">
            <h2 class="font-semibold mb-3 text-sm uppercase tracking-widest text-kura-text-secondary">Revenue by Source</h2>
            <div class="space-y-2">
              <div
                v-for="[source, row] in revenueBySource"
                :key="source"
                class="flex items-center justify-between text-sm gap-4"
              >
                <span class="font-medium">{{ source }}</span>
                <span class="text-kura-text-secondary shrink-0">
                  {{ formatUsd(row.netUsd) }} · {{ formatCount(row.count) }}
                </span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div v-if="waitlistByProduct.length" class="card-surface p-5">
              <h2 class="font-semibold mb-3 text-sm uppercase tracking-widest text-kura-text-secondary">Waitlist by Product</h2>
              <div class="space-y-2">
                <div
                  v-for="[product, count] in waitlistByProduct"
                  :key="product"
                  class="flex items-center justify-between text-sm"
                >
                  <span>{{ product }}</span>
                  <span>{{ formatCount(count) }}</span>
                </div>
              </div>
            </div>

            <div v-if="subscriptionsByTier.length" class="card-surface p-5">
              <h2 class="font-semibold mb-3 text-sm uppercase tracking-widest text-kura-text-secondary">Subscriptions by Tier</h2>
              <div class="space-y-2">
                <div
                  v-for="[tier, count] in subscriptionsByTier"
                  :key="tier"
                  class="flex items-center justify-between text-sm"
                >
                  <span>{{ tier }}</span>
                  <span>{{ formatCount(count) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <section class="card-surface p-8 text-center bg-kura-surface">
        <h2 class="text-2xl font-bold mb-3">Investor inquiries</h2>
        <p class="text-kura-text-secondary text-sm mb-6 max-w-xl mx-auto">
          For data room access or partnership discussions, contact our team.
        </p>
        <a href="mailto:hello@kura-finance.com" class="btn-primary">
          hello@kura-finance.com
        </a>
      </section>
    </main>
  </div>
</template>
