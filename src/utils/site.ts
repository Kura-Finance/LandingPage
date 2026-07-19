export const SITE = {
  name: 'Kura',
  tagline: 'Modern Finance, Redesigned',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kura-finance.com',
  locale: 'en_US',
  defaultDescription:
    'One account to save, spend, invest, earn, and move money globally. A premium financial experience with the simplicity of a bank.',
  defaultOgImage: '/og.jpg',
} as const

/** Official app store listings — use for download CTAs site-wide. */
export const APP_STORE = {
  ios: 'https://apps.apple.com/us/app/kura-modern-usd-finance/id6779338000',
  android: 'https://play.google.com/store/apps/details?id=com.kurafinance.app&hl=en',
} as const

/** Pro web dashboard — use for Pro Dashboard CTAs site-wide. */
export const WEB_APP_URL = 'https://app.kura-finance.com' as const

export function absoluteUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}`
}

export function pageTitle(title: string, path = '/') {
  if (path === '/') return title
  return `${title} | ${SITE.name}`
}

export function isExternalLink(url: string) {
  return url.startsWith('mailto:') || url.startsWith('http://') || url.startsWith('https://')
}

/** Blog / marketing date-only formatter (UTC calendar day). */
export function formatBlogDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
