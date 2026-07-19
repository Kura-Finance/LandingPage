# 06 — Third-Party Dependencies

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Runtime / browser

| Dependency | Role | Notes |
|------------|------|-------|
| Cloudflare Pages | Hosting + Pages Functions | Production edge |
| Google Fonts | Inter + Newsreader | Loaded via CSS link |
| Cloudflare Insights | Optional RUM | Zone-level; CSP allowlist present |

## Build-time npm (direct)

| Package | Role |
|---------|------|
| `nuxt` / `vue` | App framework |
| `@nuxt/content` | Blog Markdown |
| `@nuxt/image` | Image optimization |
| `@nuxtjs/tailwindcss` / `tailwindcss` | Styling |
| `wrangler` | Local CF preview / deploy CLI |

Full lockfile: `package-lock.json`. Review transitive CVEs as part of release hygiene.

## Partner coverage data (content, not SDKs)

Country lists under `src/data/coverage/` reference official partner docs:

| File | Partner | Page |
|------|---------|------|
| `bridge-countries.ts` | Bridge.xyz | `/docs/on-off-ramp-countries` |
| `moonpay-countries.ts` | MoonPay | `/docs/on-off-ramp-countries` |
| `dinari-countries.ts` | Dinari | `/docs/stock-countries` |

Each file should keep `lastUpdated` and `sourceUrl` current. Lists are **marketing references**, not contractual eligibility guarantees.

## Backend integrations (investor proxies only)

| Proxy prefix | Upstream |
|--------------|----------|
| `/api/platform-insights/*` | `api.kura-finance.com/api/platform-insights/*` |
| `/api/lifi-analytics/*` | `api.kura-finance.com/api/lifi-analytics/*` |
| `/api/privy-analytics/*` | `api.kura-finance.com/api/privy-analytics/*` |

Outbound CTAs (not integrations): App Store, Google Play, `app.kura-finance.com`.
