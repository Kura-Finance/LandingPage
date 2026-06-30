import { KURA_API_BASE } from '~/utils/kura-api'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = new URL(`${KURA_API_BASE}/api/privy-analytics/sync`)

  if (query.force === 'true' || query.force === '1') {
    url.searchParams.set('force', 'true')
  }

  for (const key of ['from', 'to'] as const) {
    const value = query[key]
    if (typeof value === 'string' && value) {
      url.searchParams.set(key, value)
    }
  }

  const response = await fetch(url.toString(), { method: 'POST' })
  const body = await response.json()
  setResponseStatus(event, response.status)
  return body
})
