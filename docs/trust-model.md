# 04 — Trust Model

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## What this site is trusted to do

| Trust | Scope |
|-------|--------|
| Serve accurate marketing & legal copy | Static / prerendered pages |
| Expose partner availability references | Curated lists in `src/data/coverage/` |
| Proxy investor metrics under Kura control | Same-origin `/api/*` → backend |

## What this site is **not** trusted with

| Non-goal | Residual owner |
|----------|----------------|
| User private keys / passkey DEKs | Mobile / WebClients |
| Stripe secret keys / webhook secrets | backendserver |
| Plaid / Bridge / Dinari credentials | backendserver + partners |
| Cloudflare account / deploy tokens | Ops (CI secrets), not git |

## Trust boundaries

```
Public internet
    │
    ▼
Cloudflare Pages (edge) ──► prerendered assets (high trust for integrity of HTML/JS)
    │
    ├──► Nitro Functions ──► api.kura-finance.com (authenticated server-to-server only as designed by backend)
    │
    └──► Third-party CDNs (fonts.googleapis.com, Cloudflare Insights) — cosmetic / analytics
```

## Residual third parties (browser)

| Party | Why present | Data |
|-------|-------------|------|
| Google Fonts | Typography | IP / UA to Google when loading fonts |
| Cloudflare Insights (if enabled on zone) | RUM | Performance beacons |
| App Store / Play / `app.kura-finance.com` | Outbound CTAs | User navigates away |

No first-party auth cookies are set by the marketing site for the consumer product.

## Investor page caveat

`/investors` displays operational metrics. Treat the page as **internal / NDA-grade** even if the route is reachable: numbers reflect backend aggregates and should not be interpreted as audited financial statements.
