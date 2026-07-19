# 05 — Threat Model

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Assets

| Asset | Sensitivity | Notes |
|-------|-------------|-------|
| Marketing brand / copy | Medium | Tampering damages trust |
| Legal page integrity | High | Misstatement → compliance risk |
| Investor metrics | High | Confidential commercial data |
| Build pipeline / deploy credentials | Critical | Not stored in git |
| User PII via this site | Low | Contact forms are mailto; no app accounts here |

## Adversaries

| Adversary | Interest |
|-----------|----------|
| Script kiddie / defacement | Replace homepage / inject scripts |
| SEO / phishing mimic | Clone branding off-site (out of repo scope) |
| Curious internet user | Scrape `/investors` metrics |
| Supply-chain attacker | Compromised npm dependency at build |

## Mitigations

| Threat | Mitigation |
|--------|------------|
| XSS / clickjacking | CSP (`frame-ancestors 'none'`), limited `script-src` |
| HTML/JS cache poisoning after deploy | Hashed `/_nuxt` assets; HTML `must-revalidate` on `/investors` |
| Accidental secret commit | `.gitignore` for `.env*`; no production secrets in tree |
| Dead / unused assets confusing reviews | Pruned unused public images and orphan components |

## Non-goals

- Protecting WebClients / mobile wallet attack surface (separate Data Rooms)
- Stopping copy of public marketing content
- Bug bounty without a separate commercial agreement
