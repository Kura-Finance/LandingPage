export const SITE = {
  name: 'Kura',
  tagline: 'Modern Finance, Redesigned',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kura-finance.com',
  locale: 'en_US',
  defaultDescription:
    'One account to save, spend, invest, earn, and move money globally. A premium financial experience with the simplicity of a bank.',
  defaultKeywords:
    'modern finance, fintech, global money, invest stocks, earn yield, financial account, Kura',
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
