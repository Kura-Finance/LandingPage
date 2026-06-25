# Kura Finance — Landing Page

[![CI](https://github.com/Kura-Finance/LandingPage/actions/workflows/ci.yml/badge.svg)](https://github.com/Kura-Finance/LandingPage/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](./LICENSE)

Official marketing website for [Kura Finance](https://kura-finance.com), the self-custody super financial app. Built with Nuxt 3, Vue 3, and Tailwind CSS.

**Live site:** [kura-finance.com](https://kura-finance.com)

## Overview

This repository powers Kura's public-facing web presence — product pages, documentation hub, blog, legal policies, and partner coverage reference pages. It is separate from the Kura app dashboard.

### What's included

| Section | Routes | Description |
| --- | --- | --- |
| **Product** | `/`, `/kura-wallet`, `/kura-card`, `/trackfi`, `/pricing`, `/download` | Core product marketing pages |
| **Blog** | `/blog`, `/blog/[slug]` | Markdown-powered blog via `@nuxt/content` |
| **Documentation** | `/docs`, `/docs/stock-countries`, `/docs/card-countries`, `/docs/on-off-ramp-countries` | Supported regions for Dinari, Gnosis Pay, Bridge.xyz, and MoonPay |
| **Trust & Legal** | `/privacy`, `/tos`, `/disclaimer`, `/compliance` | Privacy, terms, and compliance disclosures |
| **Company** | `/about`, `/business`, `/community`, `/help` | About, business inquiries, community, and help |

Dynamic server routes:

- `/sitemap.xml` — auto-generated sitemap (static pages + blog posts)
- `/feed.xml` — RSS feed for the blog

Legacy `/resources/*` URLs redirect to `/docs/*` with 301.

## Tech stack

- **[Nuxt 3](https://nuxt.com)** — SSR with prerendered static routes
- **[Vue 3](https://vuejs.org)** — Composition API
- **[Tailwind CSS](https://tailwindcss.com)** — Custom `kura-*` design tokens
- **[@nuxt/content](https://content.nuxt.com)** — Markdown blog
- **[@nuxt/image](https://image.nuxt.com)** — Optimized WebP images
- **TypeScript**

## Getting started

### Prerequisites

- Node.js **22.12+** (see `.nvmrc`)
- npm

### Install

```bash
git clone https://github.com/Kura-Finance/LandingPage.git
cd LandingPage
npm install
cp .env.example .env   # optional — override site URL for staging
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build    # Production SSR build (.output/)
npm run preview  # Preview production build locally
npm run generate # Full static export (if needed)
npm run typecheck # TypeScript / Vue type checking
```

## Project structure

```
├── app.vue                    # Root app shell
├── components/                # Reusable Vue components
│   ├── CoverageCountriesPage.vue
│   ├── Header.vue / Footer.vue
│   └── ...
├── composables/
│   └── usePageSeo.ts          # Per-page SEO meta, Open Graph, JSON-LD
├── content/blog/              # Blog posts (Markdown)
├── css/globals.css            # Global styles
├── data/coverage/             # Partner country lists (Bridge, MoonPay, Dinari, Gnosis Pay)
├── layouts/default.vue
├── pages/                     # File-based routing
├── public/                    # Static assets (favicon, images, robots.txt)
├── server/routes/             # sitemap.xml, feed.xml
├── utils/site.ts              # Site constants and URL helpers
├── nuxt.config.ts
└── tailwind.config.ts
```

## Configuration

### Environment variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Default | Description |
| --- | --- | --- |
| `NUXT_PUBLIC_SITE_URL` | `https://kura-finance.com` | Canonical site URL for SEO, sitemap, and Open Graph |

### SEO

Pages use the `usePageSeo()` composable for title, description, Open Graph, Twitter cards, canonical URLs, and optional JSON-LD. Global defaults live in `utils/site.ts`.

Most marketing routes are prerendered at build time via `routeRules` in `nuxt.config.ts`.

## Content

### Blog posts

Add a Markdown file under `content/blog/`:

```markdown
---
title: Your Post Title
description: Short summary for SEO and listings.
date: 2026-06-22
author: Kura Finance
---

Your content here.
```

Posts appear automatically on `/blog`, in `/feed.xml`, and in `/sitemap.xml`.

### Partner coverage data

Country availability lists are maintained in `data/coverage/`:

| File | Partner | Used on |
| --- | --- | --- |
| `bridge-countries.ts` | Bridge.xyz | `/docs/on-off-ramp-countries` |
| `moonpay-countries.ts` | MoonPay | `/docs/on-off-ramp-countries` |
| `gnosis-pay-countries.ts` | Gnosis Pay | `/docs/card-countries` |
| `dinari-countries.ts` | Dinari | `/docs/stock-countries` |

Each file includes `lastUpdated` and `sourceUrl` pointing to the partner's official reference.

## Deployment

### Cloudflare Pages (recommended)

This site uses the Nitro `cloudflare_pages` preset — static pages are prerendered, while `/investors` and API proxy routes run as **Pages Functions**.

**Cloudflare Dashboard (Git integration)**

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` |

**Manual deploy**

```bash
npm run build
npm run deploy:cf
```

**Local preview (Pages Functions)**

```bash
npm run build
npm run preview:cf
```

Configuration lives in `wrangler.toml` (`nodejs_compat` enabled for Nitro server routes).

### Other Node hosts

```bash
npm run build
node .output/server/index.mjs
```

Use `NITRO_PRESET=node_server npm run build` if you need the default Node server bundle instead of `dist/`.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

For security issues, see [SECURITY.md](./SECURITY.md) — do not file public issues for vulnerabilities.

## Design tokens

Primary brand colors (Tailwind `kura-*` namespace):

| Token | Value | Usage |
| --- | --- | --- |
| `kura-primary` | `#8B5CF6` | Primary accent |
| `kura-secondary` | `#3B82F6` | Secondary accent |
| `kura-accent` | `#00D9FF` | Highlights |
| `kura-background` | `#FAF8F3` | Page background |
| `kura-text` | `#111827` | Body text |

## License

This project is licensed under the [MIT License](./LICENSE).

## Links

- [Website](https://kura-finance.com)
- [Documentation hub](https://kura-finance.com/docs)
- [GitHub](https://github.com/Kura-Finance/LandingPage)
- [Report an issue](https://github.com/Kura-Finance/LandingPage/issues)
