export type PlatformRecordCategory = 'revenue' | 'waitlist' | 'aum'

export type PlatformRecordSource =
  | 'stripe'
  | 'bridge_va'
  | 'bridge_transfer'
  | 'bridge_liquidation_in'
  | 'bridge_liquidation_out'
  | 'card'
  | 'waitlist'
  | 'dinari'

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

export interface PlatformRecord {
  id: string
  category: PlatformRecordCategory
  userId: string | null
  source: string
  eventType: string
  idempotencyKey: string
  email: string | null
  product: string | null
  grossAmount: number | null
  platformFee: number | null
  netAmount: number | null
  currency: string
  externalId: string | null
  depositId: string | null
  scaAddress: string | null
  occurredAt: string
  metadata: Record<string, unknown> | null
  createdAt: string
}

export interface RecordsResponseData {
  records: PlatformRecord[]
  total: number
  count: number
}

export interface RevenueSourceBreakdown {
  grossUsd: number
  platformFeeUsd: number
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

export interface PlatformSummaryData {
  period: { from: string; to: string }
  revenue: {
    totalGrossUsd: number
    totalPlatformFeeUsd: number
    totalNetUsd: number
    eventCount: number
    bySource: Record<string, RevenueSourceBreakdown>
  }
  waitlist: {
    totalSignups: number
    byProduct: Record<string, number>
  }
  subscriptions: {
    activeCount: number
    byTier: Record<string, number>
  }
  activeUsers: ActiveUsersSummary
}

export type PrivyAnalyticsSummaryData = ActiveUsersSummary

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
