import { KURA_API_BASE } from '~/utils/kura-api'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const force = query.force === 'true' || query.force === '1'

  const url = new URL(`${KURA_API_BASE}/api/sca-analytics/scan`)
  if (force) url.searchParams.set('force', 'true')

  const response = await fetch(url.toString(), { method: 'POST' })
  const body = await response.json()
  setResponseStatus(event, response.status)
  return body
})
