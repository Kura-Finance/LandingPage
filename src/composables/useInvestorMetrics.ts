import type {
  ApiResponse,
  BackfillResult,
  InvestorSummary,
  LifiAnalyticsSummaryData,
  LifiSyncResult,
  PlatformRevenueProductLine,
  PrivyAnalyticsSummaryData,
  PrivySyncResult,
  ProcessSourceBreakdown,
} from '~/types/platform-insights'
import {
  getBackfillSuccessMessage,
  getLazyUpdateMessage,
  getLifiSyncSuccessMessage,
  getPrivySyncSuccessMessage,
  isLazySkipped,
} from '~/utils/platform-sync'
import { formatCount, formatDate, formatUsd } from '~/utils/kura-api'

export type SyncNotice = { type: 'info' | 'success' | 'error'; text: string }

const EMPTY_SOURCE: ProcessSourceBreakdown = {
  processUsd: 0,
  platformFeeUsd: 0,
  netUsd: 0,
  count: 0,
}

/** Product display order for Platform revenue breakdown (includes reserved Card). */
const REVENUE_PRODUCT_ORDER = [
  'bridge',
  'swap',
  'dinari',
  'earn',
  'card',
  'subscriptions',
] as const

const RAMP_SOURCES = new Set([
  'bridge_va',
  'bridge_transfer',
  'bridge_liquidation_in',
  'bridge_liquidation_out',
])

function isRampSource(source: string) {
  return RAMP_SOURCES.has(source) || source.startsWith('bridge_')
}

/** Aggregate process volume only — never invent fees on the client. */
function aggregateProcessVolume(
  bySource: Record<string, ProcessSourceBreakdown>,
  match: (source: string) => boolean,
): ProcessSourceBreakdown {
  const out: ProcessSourceBreakdown = { ...EMPTY_SOURCE }
  for (const [source, row] of Object.entries(bySource)) {
    if (!match(source)) continue
    out.processUsd += row.processUsd
    out.platformFeeUsd += row.platformFeeUsd
    out.netUsd += row.netUsd
    out.count += row.count
  }
  return out
}

function formatRateLabel(rateBps: number | null | undefined): string | null {
  if (rateBps == null) return null
  if (rateBps === 0) return '0%'
  if (rateBps % 100 === 0) return `${rateBps / 100}%`
  return `${(rateBps / 100).toFixed(2)}%`
}

function productSecondary(line: PlatformRevenueProductLine & { aumUsd?: number }): string {
  const rate = formatRateLabel(line.rateBps)
  if (line.key === 'earn') {
    const aum = formatUsd(line.aumUsd ?? line.processUsd, 2)
    return rate
      ? `AUM ${aum} · ${rate} performance fee`
      : `AUM ${aum}`
  }
  if (line.status === 'reserved') {
    return 'Reserved — rate TBD'
  }
  if (line.status === 'zero_fee') {
    return `Process volume ${formatUsd(line.processUsd)} · fee ${rate ?? '0%'} for now`
  }
  const volumeBit = `Process volume ${formatUsd(line.processUsd)} · ${formatCount(line.count)} events`
  return rate ? `${volumeBit} · ${rate}` : volumeBit
}

export function useInvestorMetrics() {
  const { data: platformRes, status: platformStatus, refresh: refreshPlatform } = useFetch<
    ApiResponse<InvestorSummary>
  >('/api/platform-insights/summary', {
    key: 'platform-insights-summary',
  })

  const { data: privyRes, status: privyStatus, refresh: refreshPrivy } = useFetch<
    ApiResponse<PrivyAnalyticsSummaryData>
  >('/api/privy-analytics/summary', {
    key: 'privy-analytics-summary',
  })

  const { data: lifiRes, refresh: refreshLifi } = useFetch<ApiResponse<LifiAnalyticsSummaryData>>(
    '/api/lifi-analytics/summary',
    {
      key: 'lifi-analytics-summary',
    },
  )

  const platformSummary = computed(() =>
    platformRes.value?.success ? platformRes.value.data : null,
  )
  const privySummary = computed(() => (privyRes.value?.success ? privyRes.value.data : null))
  const lifiSummary = computed(() => (lifiRes.value?.success ? lifiRes.value.data : null))

  const activeUsers = computed(
    () => platformSummary.value?.activeUsers ?? privySummary.value ?? null,
  )

  /** Canonical Platform revenue — read only; never re-estimate fees on the client. */
  const platformRevenue = computed(() => platformSummary.value?.platformRevenue ?? null)

  const platformRevenueTotalUsd = computed((): number | null => {
    const total = platformRevenue.value?.totalUsd
    return typeof total === 'number' ? total : null
  })

  const byProduct = computed(() => platformRevenue.value?.byProduct ?? null)

  const swapMetrics = computed((): ProcessSourceBreakdown => {
    const line = byProduct.value?.swap
    if (line) {
      return {
        processUsd: line.processUsd,
        platformFeeUsd: line.revenueUsd,
        netUsd: line.revenueUsd,
        count: line.count,
      }
    }
    // Volume fallback from process.bySource — revenue fields are backend mirrors, not client estimates.
    return platformSummary.value?.process?.bySource?.lifi ?? EMPTY_SOURCE
  })

  const rampMetrics = computed((): ProcessSourceBreakdown => {
    const line = byProduct.value?.bridge
    if (line) {
      return {
        processUsd: line.processUsd,
        platformFeeUsd: line.revenueUsd,
        netUsd: line.revenueUsd,
        count: line.count,
      }
    }
    return aggregateProcessVolume(
      platformSummary.value?.process?.bySource ?? {},
      isRampSource,
    )
  })

  const cardMetrics = computed((): ProcessSourceBreakdown & { status: string } => {
    const line = byProduct.value?.card
    if (line) {
      return {
        processUsd: line.processUsd,
        platformFeeUsd: line.revenueUsd,
        netUsd: line.revenueUsd,
        count: line.count,
        status: line.status,
      }
    }
    return { ...EMPTY_SOURCE, status: 'reserved' }
  })

  /** Live FeeWarp AUM from summary.earn (not period-scoped). */
  const earn = computed(() => platformSummary.value?.earn ?? null)

  const earnUnavailable = computed(() => Boolean(earn.value?.error))

  const earnVaultRows = computed(() => {
    const vaults = earn.value?.vaults ?? []
    const total = vaults.reduce((sum, v) => sum + v.totalAssetsUsd, 0)
    return vaults
      .slice()
      .sort((a, b) => b.totalAssetsUsd - a.totalAssetsUsd)
      .map((vault) => ({
        key: vault.feeWrapperAddress,
        label: vault.name ?? vault.symbol ?? vault.feeWrapperAddress,
        primary: formatUsd(vault.totalAssetsUsd, 2),
        secondary: vault.symbol
          ? `${vault.symbol} · ${shortAddress(vault.feeWrapperAddress)}`
          : shortAddress(vault.feeWrapperAddress),
        share: total > 0 ? vault.totalAssetsUsd / total : 0,
        tvlUsd: vault.totalAssetsUsd,
        wrapperAddress: vault.feeWrapperAddress,
        innerVaultAddress: vault.innerVaultAddress,
      }))
  })

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

  const subscriptionRate = computed(() => {
    const users = activeUsers.value
    const activeCount = platformSummary.value?.subscriptions?.activeCount
    if (!users?.totalUsers || activeCount == null) return null
    return activeCount / users.totalUsers
  })

  /**
   * Platform revenue by product from `platformRevenue.byProduct` only.
   * Empty until backend ships the block — do not rebuild from process.bySource fees.
   */
  const revenueByProduct = computed(() => {
    const products = byProduct.value
    if (!products) return []

    const rows = REVENUE_PRODUCT_ORDER.map((key) => {
      const line = products[key]
      return {
        key: line.key,
        label: line.label,
        processUsd: line.processUsd,
        revenueUsd: line.revenueUsd,
        count: line.count,
        status: line.status,
        rateBps: line.rateBps,
        secondary: productSecondary(line),
      }
    })

    const totalRevenue = rows.reduce((sum, row) => sum + row.revenueUsd, 0)
    return rows.map((row) => ({
      ...row,
      share: totalRevenue > 0 ? row.revenueUsd / totalRevenue : 0,
    }))
  })

  /** @deprecated Prefer revenueByProduct */
  const processBySource = revenueByProduct

  const waitlistByProduct = computed(() => {
    const byProductMap = platformSummary.value?.waitlist?.byProduct ?? {}
    const total = Object.values(byProductMap).reduce((sum, n) => sum + n, 0)
    return Object.entries(byProductMap)
      .sort((a, b) => b[1] - a[1])
      .map(([product, count]) => ({
        key: product,
        label: formatSourceLabel(product),
        count,
        share: total > 0 ? count / total : 0,
      }))
  })

  const subscriptionsByTier = computed(() => {
    const byTier = platformSummary.value?.subscriptions?.byTier ?? {}
    const total = Object.values(byTier).reduce((sum, n) => sum + n, 0)
    return Object.entries(byTier)
      .sort((a, b) => b[1] - a[1])
      .map(([tier, count]) => ({
        key: tier,
        label: formatSourceLabel(tier),
        count,
        share: total > 0 ? count / total : 0,
      }))
  })

  const syncing = ref(false)
  const syncNotices = ref<SyncNotice[]>([])

  async function postSync<T>(path: string): Promise<ApiResponse<T>> {
    try {
      return await $fetch<ApiResponse<T>>(path, { method: 'POST' })
    } catch (error: unknown) {
      const data = (error as { data?: ApiResponse<T> })?.data
      if (data && typeof data === 'object' && 'success' in data) {
        return data
      }
      throw error
    }
  }

  async function syncLifi(force = true): Promise<SyncNotice | null> {
    const path = force
      ? '/api/lifi-analytics/sync?force=true'
      : '/api/lifi-analytics/sync'
    const lifiSyncRes = await postSync<LifiSyncResult>(path)

    if (!lifiSyncRes.success) {
      if (lifiSyncRes.error.code === 'LIFI_NOT_CONFIGURED') {
        return { type: 'error', text: 'Swap analytics is not configured.' }
      }
      throw new Error(lifiSyncRes.error.message)
    }

    return {
      type: isLazySkipped(lifiSyncRes.data) ? 'info' : 'success',
      text: isLazySkipped(lifiSyncRes.data)
        ? getLazyUpdateMessage(lifiSyncRes.data)
        : getLifiSyncSuccessMessage(lifiSyncRes.data),
    }
  }

  async function refreshMetrics() {
    syncing.value = true
    syncNotices.value = []

    try {
      const lifiNotice = await syncLifi(true)
      if (lifiNotice) syncNotices.value.push(lifiNotice)

      const backfillRes = await postSync<BackfillResult>('/api/platform-insights/backfill?force=true')
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

      await Promise.all([refreshPlatform(), refreshPrivy(), refreshLifi()])
    } catch {
      syncNotices.value = [{ type: 'error', text: 'Sync failed. Please try again later.' }]
    } finally {
      syncing.value = false
    }
  }

  onMounted(() => {
    void (async () => {
      try {
        const notice = await syncLifi(true)
        if (notice?.type === 'error') {
          syncNotices.value = [notice]
        }
        await Promise.all([refreshPlatform(), refreshLifi()])
      } catch {
        // Keep SSR payload; user can retry via Refresh.
      }
    })()
  })

  return {
    platformSummary,
    platformRevenue,
    platformRevenueTotalUsd,
    privySummary,
    lifiSummary,
    swapMetrics,
    rampMetrics,
    cardMetrics,
    earn,
    earnUnavailable,
    earnVaultRows,
    activeUsers,
    subscriptionRate,
    metricsLoading,
    metricsUnavailable,
    periodLabel,
    revenueByProduct,
    processBySource,
    waitlistByProduct,
    subscriptionsByTier,
    syncing,
    syncNotices,
    refreshMetrics,
  }
}

function shortAddress(address: string) {
  if (address.length < 12) return address
  return `${address.slice(0, 6)}…${address.slice(-4)}`
}

function formatSourceLabel(value: string) {
  if (value === 'swap' || value === 'lifi') return 'Swap'
  if (value === 'bridge' || value === 'crypto_fiat') return 'Crypto <> Fiat'
  if (value === 'stripe' || value === 'subscriptions') return 'Subscriptions'
  if (value === 'dinari') return 'US Stocks'
  if (value === 'card') return 'Card'
  if (value === 'earn') return 'Kura Earn'
  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}
