import type {
  BackfillExecuted,
  LazyUpdateSkipped,
  LifiSyncExecuted,
  PrivySyncExecuted,
} from '~/types/platform-insights'
import { formatCount, formatDate } from '~/utils/kura-api'

export function isLazySkipped<T extends { skipped: boolean }>(
  result: T
): result is T & LazyUpdateSkipped {
  return result.skipped === true
}

export function getLazyUpdateMessage(result: LazyUpdateSkipped): string {
  if (result.reason === 'sync_in_progress') {
    return 'Sync in progress — please try again in a few minutes.'
  }
  if (result.nextEligibleAt) {
    return `Data is up to date. Next refresh available: ${formatDate(result.nextEligibleAt)}`
  }
  return 'Data is up to date.'
}

export function getBackfillSuccessMessage(result: BackfillExecuted): string {
  const parts: string[] = []
  if (result.created > 0) parts.push(`${formatCount(result.created)} new`)
  if (result.updated && result.updated > 0) parts.push(`${formatCount(result.updated)} updated`)
  if (parts.length === 0) return 'Platform sync complete — records refreshed.'
  return `Platform sync complete — ${parts.join(', ')} records.`
}

export function getPrivySyncSuccessMessage(result: PrivySyncExecuted): string {
  return `Privy sync complete — ${formatCount(result.activeUsers)} active of ${formatCount(result.totalUsers)} total users.`
}

export function getLifiSyncSuccessMessage(result: LifiSyncExecuted): string {
  return `Swap sync complete — ${formatCount(result.transferred)} transfers imported.`
}
