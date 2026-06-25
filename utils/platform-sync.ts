import type {
  BackfillExecuted,
  LazyUpdateSkipped,
  ScanExecuted,
} from '~/types/platform-insights'
import { formatCount, formatDate } from '~/utils/kura-api'

export function isLazySkipped<T extends { skipped: boolean }>(
  result: T
): result is T & LazyUpdateSkipped {
  return result.skipped === true
}

export function getLazyUpdateMessage(result: LazyUpdateSkipped): string {
  if (result.reason === 'scan_in_progress') {
    return 'Scan in progress — please try again in a few minutes.'
  }
  if (result.nextEligibleAt) {
    return `Data is up to date. Next refresh available: ${formatDate(result.nextEligibleAt)}`
  }
  return 'Data is up to date.'
}

export function getBackfillSuccessMessage(result: BackfillExecuted): string {
  if (result.created === 0) return 'Platform sync complete — no new records.'
  return `Platform sync complete — ${formatCount(result.created)} new records added.`
}

export function getScanSuccessMessage(result: ScanExecuted): string {
  return `AUM scan complete — ${formatCount(result.walletsScanned)} wallets, ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result.totalAumUsd)} total AUM.`
}
