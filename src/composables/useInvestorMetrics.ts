import type {
  ApiResponse,
  BackfillResult,
  PlatformSummaryData,
  PrivyAnalyticsSummaryData,
  PrivySyncResult,
} from '~/types/platform-insights'
import {
  getBackfillSuccessMessage,
  getLazyUpdateMessage,
  getPrivySyncSuccessMessage,
  isLazySkipped,
} from '~/utils/platform-sync'
import { formatDate } from '~/utils/kura-api'

export type SyncNotice = { type: 'info' | 'success' | 'error'; text: string }

export function useInvestorMetrics() {
  const { data: platformRes, status: platformStatus, refresh: refreshPlatform } = useFetch<
    ApiResponse<PlatformSummaryData>
  >('/api/platform-insights/summary', {
    key: 'platform-insights-summary',
  })

  const { data: privyRes, status: privyStatus, refresh: refreshPrivy } = useFetch<
    ApiResponse<PrivyAnalyticsSummaryData>
  >('/api/privy-analytics/summary', {
    key: 'privy-analytics-summary',
  })

  const platformSummary = computed(() =>
    platformRes.value?.success ? platformRes.value.data : null,
  )
  const privySummary = computed(() => (privyRes.value?.success ? privyRes.value.data : null))

  const activeUsers = computed(
    () => platformSummary.value?.activeUsers ?? privySummary.value ?? null,
  )

  const metricsLoading = computed(
    () => platformStatus.value === 'pending' || privyStatus.value === 'pending',
  )
  const metricsUnavailable = computed(
    () =>
      !metricsLoading.value &&
      (!platformRes.value?.success || !privyRes.value?.success),
  )

  const periodLabel = computed(() => {
    const period = platformSummary.value?.period
    if (period) {
      return `${formatDate(period.from)} → ${formatDate(period.to)}`
    }
    const users = activeUsers.value
    if (users?.periodFrom && users?.periodTo) {
      return `${formatDate(users.periodFrom)} → ${formatDate(users.periodTo)}`
    }
    return null
  })

  const activeUserRate = computed(() => {
    const users = activeUsers.value
    if (!users?.totalUsers) return null
    return users.activeUsers / users.totalUsers
  })

  const revenueBySource = computed(() => {
    const bySource = platformSummary.value?.revenue.bySource ?? {}
    const maxNet = Math.max(...Object.values(bySource).map((row) => row.netUsd), 1)
    return Object.entries(bySource)
      .filter(([, row]) => row.count > 0)
      .sort((a, b) => b[1].netUsd - a[1].netUsd)
      .map(([source, row]) => ({
        key: source,
        label: formatSourceLabel(source),
        netUsd: row.netUsd,
        count: row.count,
        share: row.netUsd / maxNet,
      }))
  })

  const waitlistByProduct = computed(() => {
    const byProduct = platformSummary.value?.waitlist.byProduct ?? {}
    const max = Math.max(...Object.values(byProduct), 1)
    return Object.entries(byProduct)
      .sort((a, b) => b[1] - a[1])
      .map(([product, count]) => ({
        key: product,
        label: formatSourceLabel(product),
        count,
        share: count / max,
      }))
  })

  const subscriptionsByTier = computed(() => {
    const byTier = platformSummary.value?.subscriptions.byTier ?? {}
    const max = Math.max(...Object.values(byTier), 1)
    return Object.entries(byTier)
      .sort((a, b) => b[1] - a[1])
      .map(([tier, count]) => ({
        key: tier,
        label: formatSourceLabel(tier),
        count,
        share: count / max,
      }))
  })

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

      const privySyncRes = await postSync<PrivySyncResult>('/api/privy-analytics/sync')
      if (!privySyncRes.success) {
        throw new Error(privySyncRes.error.message)
      }
      syncNotices.value.push({
        type: isLazySkipped(privySyncRes.data) ? 'info' : 'success',
        text: isLazySkipped(privySyncRes.data)
          ? getLazyUpdateMessage(privySyncRes.data)
          : getPrivySyncSuccessMessage(privySyncRes.data),
      })

      await Promise.all([refreshPlatform(), refreshPrivy()])
    } catch {
      syncNotices.value = [{ type: 'error', text: 'Sync failed. Please try again later.' }]
    } finally {
      syncing.value = false
    }
  }

  return {
    platformSummary,
    privySummary,
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
  }
}

function formatSourceLabel(value: string) {
  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function syncNoticeClasses(type: SyncNotice['type']) {
  if (type === 'error') return 'border-kura-error/30 bg-kura-error/5 text-kura-text'
  if (type === 'success') return 'border-kura-success/30 bg-kura-success/5 text-kura-text'
  return 'border-kura-primary/20 bg-kura-primary/5 text-kura-text-secondary'
}
