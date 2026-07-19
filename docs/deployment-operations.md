# 07 — Deployment & Operations

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Production topology

| Item | Value |
|------|-------|
| Host | Cloudflare Pages |
| Nitro preset | `cloudflare_pages` (production) |
| Build output | `dist/` |
| Node | **22.22.2** (see `.nvmrc` / `package.json` engines) |

Static marketing routes are **prerendered**. `/investors` and `/api/*` run as **Pages Functions**.

## Build & deploy

```bash
npm ci
npm run typecheck
npm run build
npm run deploy:cf   # wrangler pages deploy dist
```

Local Functions preview:

```bash
npm run build
npm run preview:cf  # wrangler pages dev dist
```

CI (`.github/workflows/ci.yml`): `npm ci` → `typecheck` → `build` on `main` and PRs.

## Cloudflare Dashboard (Git integration)

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` |

`wrangler.toml` enables `nodejs_compat` for Nitro server routes.

## Operational notes

- Do **not** use long HTML SWR for marketing pages after deploys: hashed `/_nuxt` assets rotate; stale HTML pointing at missing chunks breaks the site.
- HTML responses use `Cache-Control: public, max-age=0, must-revalidate` (`public/_headers` + `routeRules`).
- **`public/404.html` is required.** Without it, Cloudflare Pages treats the site as an SPA and serves `index.html` (`200 text/html`) for missing URLs — including stale `/_nuxt/*.js` hashes — which causes browser MIME errors.
- Pages Function routes are limited to `/api/*` and `/investors` (`nitro.cloudflare.pages.routes`, `defaultRoutes: false`). All other paths are static.
- After a bad MIME incident, **purge Cloudflare cache** for `/_nuxt/*` (poisoned `200 text/html` responses may have been cached with long TTL).
- `/investors` uses `cache-control: public, max-age=0, must-revalidate`.
- Alternate Node host: `NITRO_PRESET=node_server npm run build` then `node .output/server/index.mjs` (not the primary production path).
