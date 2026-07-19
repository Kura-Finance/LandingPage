# Kura Landing Page — Commercial Data Room

> **CONFIDENTIAL — Kura Finance LLC**  
> For authorized commercial diligence, licensing, and acquisition review only.  
> Not an open-source project. Unauthorized redistribution is prohibited.

| | |
|---|---|
| **Product** | Kura public website (`kura-finance.com`) |
| **Artifact** | Proprietary Nuxt 3 application (this repository) |
| **License** | [LICENSE](LICENSE) — All Rights Reserved |
| **Commercial contact** | **security@kura-finance.com** |

---

## What buyers are reviewing

The **Kura Landing Page** is the browser-facing marketing and documentation site for:

- Product narrative (account, card, TrackFi, Business & Team, pricing)
- Legal / trust pages and partner coverage references
- Blog (`@nuxt/content`)
- Investor metrics UI (proxied to the Kura API)

The **web dashboard**, **mobile wallet**, and **API** are separate proprietary products. This Data Room covers the **landing site** only.

---

## Data Room index

| # | Document | Diligence use |
|---|----------|----------------|
| 01 | [docs/README.md](docs/README.md) | Index & document control |
| 02 | [docs/product-overview.md](docs/product-overview.md) | Capability matrix & product boundaries |
| 03 | [docs/architecture.md](docs/architecture.md) | System design & module map |
| 04 | [docs/trust-model.md](docs/trust-model.md) | Trust boundaries & residual third parties |
| 05 | [docs/threat-model.md](docs/threat-model.md) | Assets, adversaries, mitigations, non-goals |
| 06 | [docs/third-party-dependencies.md](docs/third-party-dependencies.md) | Vendor matrix & data flows |
| 07 | [docs/deployment-operations.md](docs/deployment-operations.md) | Production build, CI/CD, Cloudflare Pages |
| 08 | [docs/environment-secrets.md](docs/environment-secrets.md) | Config surface & key hygiene |
| 09 | [SECURITY.md](SECURITY.md) | Vulnerability disclosure (licensed parties) |
| — | [LICENSE](LICENSE) | IP & licensing terms |

---

## Related proprietary systems (out of this repo)

| System | Role |
|--------|------|
| **WebClients** | Web dashboard (`app.kura-finance.com`) |
| **backendserver** | API (`api.kura-finance.com`) |
| **mobile-app** | React Native wallet (iOS / Android) |

---

## Local engineering (authorized developers)

```bash
git clone <private-remote-url>
cd LandingPage
nvm use          # Node 22.22.2 — see .nvmrc
npm ci
cp .env.example .env   # optional
npm run dev
```

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local Nuxt dev server |
| `npm run typecheck` | Vue / TS check |
| `npm run build` | Production Cloudflare Pages build → `dist/` |
| `npm run preview:cf` | Wrangler Pages preview |
| `npm run deploy:cf` | Deploy `dist/` to Cloudflare Pages |

Details: [docs/deployment-operations.md](docs/deployment-operations.md), [docs/environment-secrets.md](docs/environment-secrets.md).

---

## Engagement

White-label, source license, acquisition, or technical diligence scheduling:

**security@kura-finance.com**
