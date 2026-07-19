# 02 — Product Overview

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Summary

The **Kura Landing Page** is the public marketing and documentation site at **`kura-finance.com`**. It is a Nuxt 3 application that presents product narrative, pricing, legal policies, partner coverage references, blog content, and an internal investors metrics surface.

Production hostname: **`kura-finance.com`**.

This repository does **not** implement wallet custody, auth sessions, or on-chain execution. Those live in WebClients, mobile-app, and backendserver.

## Capability matrix

| Capability | User surface | Backend required? |
|------------|--------------|-------------------|
| Marketing pages | `/`, product feature pages, `/pricing`, `/download`, `/business` | No (prerendered) |
| Blog | `/blog`, `/blog/[slug]` | No (`@nuxt/content` at build) |
| Docs / coverage | `/docs`, country lists | No (static data in repo) |
| Legal / trust | `/privacy`, `/tos`, `/disclaimer`, `/compliance`, … | No |
| Investors metrics | `/investors` | **Yes** — proxies to `api.kura-finance.com` |
| Sitemap / RSS | `/sitemap.xml`, `/feed.xml` | No (Nitro routes, prerendered) |

## Explicit product boundaries

| Included in this repo | Not included / separate |
|------------------------|-------------------------|
| Public marketing UI & copy | Web dashboard / mobile wallet UX |
| SEO, Open Graph, JSON-LD | Auth, wallets, passkeys |
| Partner country reference tables | Partner KYC/KYB engines |
| Investor dashboard UI + API proxies | Stripe secrets, Privy app secrets |
| Cloudflare Pages deploy config | DNS / CF account credentials |

## Commercial packaging notes

- Source and branding are **proprietary** ([LICENSE](../LICENSE)).  
- White-label / source license / acquisition: **security@kura-finance.com**.  
- Investor metrics require a licensed **backendserver** deployment with platform-insights / Li.Fi / Privy analytics enabled.
