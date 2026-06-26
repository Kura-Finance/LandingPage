export const SITE = {
  name: 'Kura Finance',
  tagline: 'The Super Financial App',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kura-finance.com',
  locale: 'en_US',
  defaultDescription:
    'Trade crypto, RWA, and US stocks. Spend with Kura Card. Track all your finances in one self-custody super app.',
  defaultKeywords:
    'super financial app, crypto trading, RWA, US stocks, Kura Card, TrackFi, self-custody wallet, Kura Wallet',
  defaultOgImage: '/og.jpg',
} as const

export function absoluteUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}`
}

export function pageTitle(title: string, path = '/') {
  if (path === '/') return title
  return `${title} | ${SITE.name}`
}
