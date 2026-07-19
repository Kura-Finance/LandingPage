import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  srcDir: 'src',
  serverDir: 'src/server',
  dir: {
    public: join(rootDir, 'public'),
  },
  ssr: true,
  compatibilityDate: '2026-04-18',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content'],
  css: ['~/styles/globals.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://kura-finance.com',
    },
  },
  experimental: {
    // Inline payload in HTML; avoid preloading /_payload.json on dynamic routes (Safari MIME/CSP issues).
    payloadExtraction: false,
    appManifest: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Kura — Modern Finance, Redesigned',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'One account to save, spend, invest, earn, and move money globally. A premium financial experience with the simplicity of a bank.' },
        { name: 'author', content: 'Kura' },
        { name: 'theme-color', content: '#f8f9fc' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Kura' },
        { property: 'og:site_name', content: 'Kura' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://kura-finance.com/og.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:alt', content: 'Kura — Modern Finance, Redesigned' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://kura-finance.com/og.jpg' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/icon.webp' },
        { rel: 'mask-icon', href: '/favicon.svg', color: '#7C5CFC' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap' },
        { rel: 'sitemap', href: '/sitemap.xml', type: 'application/xml' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'Kura Blog RSS', href: '/feed.xml' },
      ],
    },
  },
  image: {
    format: ['webp'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/feed.xml'],
      autoSubfolderIndex: false,
    },
    compressPublicAssets: true,
    // Only invoke the Pages Function for dynamic surfaces. Everything else
    // (including /_nuxt/*) is static. Missing static files must 404 — without
    // public/404.html Cloudflare Pages SPA-falls-back to index.html (text/html)
    // for missing .js URLs and browsers throw MIME errors.
    cloudflare: {
      pages: {
        defaultRoutes: false,
        routes: {
          version: 1,
          include: ['/api/*', '/investors', '/investors/*'],
          exclude: [],
        },
      },
    },
  },
  $production: {
    nitro: {
      preset: 'cloudflare_pages',
    },
  },
  routeRules: {
    '/**': {
      headers: {
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self' https://api.kura-finance.com https://static.cloudflareinsights.com https://cloudflareinsights.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
        // HTML / document responses: never long-cache (chunk hashes rotate each deploy).
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
    '/': { prerender: true },
    '/about': { prerender: true },
    '/pricing': { prerender: true },
    '/download': { prerender: true },
    '/account': { prerender: true },
    '/financial-account': { prerender: true },
    '/global-transfers': { prerender: true },
    '/multi-currency': { prerender: true },
    '/card-waitlist': { prerender: true },
    '/invest': { prerender: true },
    '/us-stocks': { prerender: true },
    '/earn': { prerender: true },
    '/borrow': { prerender: true },
    '/connected-accounts': { prerender: true },
    '/net-worth': { prerender: true },
    '/banking': { prerender: true },
    '/investments': { prerender: true },
    '/digital-assets': { prerender: true },
    '/compare': { prerender: true },
    '/contact': { prerender: true },
    '/open-source': { redirect: { to: '/', statusCode: 301 } },
    '/kura-wallet': { redirect: { to: '/account', statusCode: 301 } },
    '/kura-card': { prerender: true },
    '/trackfi': { prerender: true },
    '/help': { prerender: true },
    '/docs': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/blog/product-updates': { prerender: true },
    '/blog/company-news': { prerender: true },
    '/feed.xml': { prerender: true },
    '/sitemap.xml': { prerender: true },
    '/docs/stock-countries': { prerender: true },
    '/docs/on-off-ramp-countries': { prerender: true },
    '/docs/card-countries': { redirect: { to: '/kura-card', statusCode: 301 } },
    '/resources/stock-countries': { redirect: { to: '/docs/stock-countries', statusCode: 301 } },
    '/resources/card-countries': { redirect: { to: '/kura-card', statusCode: 301 } },
    '/resources/on-off-ramp-countries': { redirect: { to: '/docs/on-off-ramp-countries', statusCode: 301 } },
    '/business': { prerender: true },
    '/community': { prerender: true },
    // Missing /_nuxt/*.js must 404 (server/middleware/01-static-asset-404.ts), not HTML.
    '/investors': {
      prerender: false,
      headers: { 'cache-control': 'public, max-age=0, must-revalidate' },
    },
    '/privacy': { prerender: true },
    '/tos': { prerender: true },
    '/disclaimer': { prerender: true },
    '/referral-terms': { prerender: true },
    '/prohibited-activities': { prerender: true },
    '/compliance': { prerender: true },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/icon.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/favicon.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/og.jpg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/screenshot.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    viewer: false,
  },
  devtools: { enabled: false },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },
});
