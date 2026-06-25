import { KURA_API_BASE } from '../../../utils/kura-api'

export default defineEventHandler(async (event) => {
  const response = await fetch(`${KURA_API_BASE}/api/platform-insights/summary`)
  const body = await response.json()
  setResponseStatus(event, response.status)
  return body
})
