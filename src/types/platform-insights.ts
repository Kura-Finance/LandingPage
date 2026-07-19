export interface ApiError {
  code: string
  message: string
}

export interface ApiSuccess<T> {
  success: true
  data: T
}

export interface ApiFailure {
  success: false
  error: ApiError
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure

export interface ProcessSourceBreakdown {
  /** Processing volume (e.g. Bridge deposit amount). */
  processUsd: number
  /** Kura platform revenue (developer fees). Same basis as netUsd. */
  platformFeeUsd: number
  /** Kura net revenue for this source. */
  netUsd: number
  count: number
}

export interface ActiveUsersSummary {
  totalUsers: number
  activeUsers: number
  periodFrom: string
  periodTo: string
  lastSyncedAt: string | null
}

export interface InvestorEarnVault {
  /** Allowlist inner vault (listing / discovery address). */
  innerVaultAddress: string
  /** FeeWrapper deposit / AUM address. */
  feeWrapperAddress: string
  name: string | null
  symbol: string | null
  /** FeeWrapper managed assets in USD. */
  totalAssetsUsd: number
}

/** Live Morpho FeeWarp AUM — independent of summary from/to period. */
export interface InvestorEarn {
  chainId: number
  totalAssetsUsd: number
  vaultCount: number
  vaults: InvestorEarnVault[]
  /** FeeWarp performance fee; may be omitted on older payloads. */
  performanceFeeBps?: number
  /** Recognized Earn revenue (often 0 until harvest tracking). */
  revenueUsd?: number
  fetchedAt: string
  /** Present when Morpho fetch failed; amounts are usually 0 — do not treat as true $0 TVL. */
  error?: string
}

export type PlatformRevenueProductKey =
  | 'bridge'
  | 'swap'
  | 'dinari'
  | 'earn'
  | 'card'
  | 'subscriptions'

export interface PlatformRevenueProductLine {
  key: PlatformRevenueProductKey
  label: string
  processUsd: number
  revenueUsd: number
  rateBps: number | null
  count: number
  status: 'active' | 'zero_fee' | 'reserved'
}

/** Canonical Platform revenue from backend — do not re-estimate fees on the client. */
export interface PlatformRevenueSummary {
  totalUsd: number
  policy: {
    bridgeRateBps: number
    swapRateBps: number
    dinariRateBps: number
    earnPerformanceFeeBps: number
    cardRateBps: number | null
  }
  byProduct: {
    bridge: PlatformRevenueProductLine
    swap: PlatformRevenueProductLine
    dinari: PlatformRevenueProductLine
    earn: PlatformRevenueProductLine & {
      aumUsd: number
      performanceFeeBps: number
    }
    card: PlatformRevenueProductLine
    subscriptions: PlatformRevenueProductLine
  }
}

export interface InvestorSummary {
  period: { from: string; to: string }
  process: {
    /** Total processing volume across revenue events. */
    totalProcessUsd: number
    /** Legacy mirror of platformRevenue.totalUsd. */
    totalPlatformFeeUsd: number
    /** Legacy mirror of platformRevenue.totalUsd. */
    totalNetUsd: number
    eventCount: number
    bySource: Record<string, ProcessSourceBreakdown>
  }
  /** Single source of truth for Platform revenue (optional until backend deploy). */
  platformRevenue?: PlatformRevenueSummary
  waitlist: {
    totalSignups: number
    byProduct: Record<string, number>
  }
  subscriptions: {
    activeCount: number
    byTier: Record<string, number>
  }
  activeUsers: ActiveUsersSummary
  /** Live FeeWarp AUM (not period-scoped). */
  earn?: InvestorEarn
}

export type PrivyAnalyticsSummaryData = ActiveUsersSummary

export interface LifiAnalyticsSummaryData {
  transferCount: number
  processUsd: number
  platformFeeUsd: number
  periodFrom: string
  periodTo: string
  lastSyncedAt: string | null
}

export interface LifiSyncExecuted {
  skipped: false
  syncRunId: string
  transferred: number
  periodFrom: string
  periodTo: string
  integrators: string[]
}

export type LifiSyncResult = LazyUpdateSkipped | LifiSyncExecuted

export interface LazyUpdateSkipped {
  skipped: true
  reason: 'fresh' | 'sync_in_progress'
  lastUpdatedAt: string | null
  nextEligibleAt: string | null
  minIntervalMs: number
}

export interface BackfillExecuted {
  skipped: false
  created: number
  updated?: number
  skippedCount: number
  total: number
}

export type BackfillResult = LazyUpdateSkipped | BackfillExecuted

export interface PrivySyncExecuted {
  skipped: false
  totalUsers: number
  activeUsers: number
}

export type PrivySyncResult = LazyUpdateSkipped | PrivySyncExecuted
