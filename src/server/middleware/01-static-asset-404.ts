/**
 * Belt-and-suspenders for Worker-handled paths. Production CF Pages only
 * invokes the Function for `/api/*` and `/investors` (`nitro.cloudflare.pages`),
 * so `/_nuxt/*` is static. Missing static assets must return real 404 via
 * `public/404.html` + `dist/_redirects` (`/* /404.html 404`) — without that,
 * CF SPA-fallback serves index.html as `200 text/html` for stale `.js` URLs.
 */
export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  if (!path.startsWith('/_nuxt/')) {
    return
  }

  setResponseStatus(event, 404)
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setHeader(event, 'cache-control', 'no-store')
  return 'Not Found'
})
