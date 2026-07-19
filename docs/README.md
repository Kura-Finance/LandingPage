# 01 — Data Room Index

> **CONFIDENTIAL — Kura Finance LLC**  
> Commercial diligence materials for the **Kura Landing Page**.  
> Document control: proprietary · not for public distribution.

## Purpose of this folder

This Data Room describes the **public marketing website** buyers and advisors need for technical, security, and operational diligence. It is written for:

- Corporate development / M&A  
- Enterprise / white-label licensing  
- Security & compliance reviewers under NDA  

It is **not** an open-source contributor guide.

## Document map

| Doc | File | Audience |
|-----|------|----------|
| Product overview | [product-overview.md](product-overview.md) | Product, BD, eng leads |
| Architecture | [architecture.md](architecture.md) | Engineering diligence |
| Trust model | [trust-model.md](trust-model.md) | Security / risk |
| Threat model | [threat-model.md](threat-model.md) | Security / risk |
| Third-party dependencies | [third-party-dependencies.md](third-party-dependencies.md) | Legal / security / ops |
| Deployment & operations | [deployment-operations.md](deployment-operations.md) | Platform / DevOps |
| Environment & secrets | [environment-secrets.md](environment-secrets.md) | Platform / security |
| Vulnerability disclosure | [../SECURITY.md](../SECURITY.md) | Security contacts |
| License | [../LICENSE](../LICENSE) | Legal |

## Classification

| Label | Meaning |
|-------|---------|
| **CONFIDENTIAL** | Share only under NDA or signed LOI / license process |
| **Internal** | Kura engineering / ops only (not in this room) |

Production secrets, Cloudflare credentials, and customer data are **never** included in this repository or Data Room pack.

## Related products (separate diligence)

| Product | Notes |
|---------|-------|
| Kura Web Client (`WebClients`) | Dashboard at `app.kura-finance.com` |
| Kura API (`backendserver`) | Auth, Treasuries, TrackFi, Stripe, passkeys, investor analytics |
| Kura Mobile | Separate React Native application |

## Contact

**security@kura-finance.com** — licensing, diligence Q&A, security reports.
