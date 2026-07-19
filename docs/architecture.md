# 03 — Architecture

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Nuxt 3 (SSR + prerender), Vue 3 |
| Styling | Tailwind CSS (`kura-*` tokens), `src/styles/globals.css` |
| Content | `@nuxt/content` (Markdown blog under `src/content/blog/`) |
| Images | `@nuxt/image` |
| Deploy | Nitro `cloudflare_pages` preset → Cloudflare Pages |
| Investor APIs | Nitro server routes proxy → `https://api.kura-finance.com` |

## Logical architecture

```
┌──────────────────────────────────────────────────────────────┐
│  Browser — kura-finance.com                                  │
│  pages · layouts · marketing components · usePageSeo         │
│  CSP / cache headers via routeRules                          │
└───────────────┬────────────────────────────┬─────────────────┘
                │                            │
                ▼                            ▼
     Static / prerendered HTML        Nitro Pages Functions
     product, legal, blog, docs       /investors + /api/* proxies
                                              │
                                              ▼
                                   Kura API (backendserver)
                                   platform-insights · lifi · privy
```

## Source layout (`srcDir: src`)

| Path | Role |
|------|------|
| `src/pages/` | File-based routes |
| `src/components/` | Layout, navigation, marketing, investors |
| `src/composables/` | `usePageSeo`, `useFeaturePage`, `useInvestorMetrics` |
| `src/data/` | Feature page copy, partner coverage lists |
| `src/content/blog/` | Blog Markdown |
| `src/server/api/` | Proxies to backend analytics |
| `src/server/routes/` | `sitemap.xml`, `feed.xml` |
| `src/utils/` | Site constants, formatting, brand asset URL |
| `src/styles/` | Global CSS (Tailwind layers) |
| `public/` | Favicon, OG image, robots, static images |

## Route classes

| Class | Examples | Runtime |
|-------|----------|---------|
| Prerendered marketing | `/`, `/pricing`, `/business`, `/download`, feature pages | Static HTML at build |
| Content | `/blog/**` | Prerendered from Markdown |
| Dynamic SSR | `/investors` | Pages Function; no long SWR cache |
| Proxies | `/api/platform-insights/*`, `/api/lifi-analytics/*`, `/api/privy-analytics/*` | Pages Function → API |
| Redirects | `/kura-wallet` → `/account`, `/open-source` → `/`, legacy `/resources/*` | `routeRules` 301 |

## Shared constants

Canonical public URLs live in `src/utils/site.ts`:

- `SITE.url` — marketing origin (overridable via `NUXT_PUBLIC_SITE_URL`)
- `WEB_APP_URL` — `https://app.kura-finance.com` (Pro Dashboard CTAs)
- `APP_STORE` — iOS / Android store listings

## Security-relevant layers

| Concern | Location |
|---------|----------|
| CSP / frame-ancestors | `nuxt.config.ts` `routeRules['/**'].headers` |
| Canonical / OG URLs | `usePageSeo`, `SITE` |
| Investor data fetch | Server proxies only; browser talks to same-origin `/api/*` |
| No wallet / session secrets in this repo | By design |
