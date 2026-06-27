export type PlatformRecordCategory = 'revenue' | 'waitlist' | 'aum'

export type PlatformRecordSource =
  | 'stripe'
  | 'bridge_va'
  | 'bridge_transfer'
  | 'bridge_liquidation_in'
  | 'bridge_liquidation_out'
  | 'card'
  | 'waitlist'
  | 'debank'
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
  scaAum: {
    totalUsd: number
    walletCount: number
    lastSnapshotAt: string | null
    lastScanAt: string | null
  }
}

export interface ScaScanSummary {
  id: string
  status: string
  walletsScanned: number
  walletsFailed: number
  totalAumUsd: number
  startedAt: string
  completedAt: string | null
}

export interface ScaAnalyticsSummaryData {
  totalUsd: number
  spotUsd: number
  defiUsd: number
  walletCount: number
  lastSnapshotAt: string | null
  lastScan: ScaScanSummary | null
}

export interface ScaSnapshot {
  id: string
  userId: string
  scaAddress: string
  spotUsd: number
  defiUsd: number
  totalUsd: number
  snapshotAt: string
}

export interface LazyUpdateSkipped {
  skipped: true
  reason: 'fresh' | 'scan_in_progress'
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

export interface ScanExecuted {
  skipped: false
  runId: string
  walletsScanned: number
  walletsFailed: number
  totalAumUsd: number
}

export type ScanResult = LazyUpdateSkipped | ScanExecuted
