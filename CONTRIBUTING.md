# Contributing to Kura Finance Landing Page

Thank you for your interest in contributing. This repository contains the public marketing website for [Kura Finance](https://kura-finance.com).

## Ways to contribute

- Fix typos, broken links, or accessibility issues
- Improve SEO metadata or page performance
- Update partner coverage data in `data/coverage/`
- Add or edit blog posts in `content/blog/`
- Report bugs or suggest improvements via GitHub Issues

## Development setup

```bash
git clone https://github.com/Kura-Finance/LandingPage.git
cd LandingPage
npm install
npm run dev
```

Use Node.js **20.19+** (see `.nvmrc`).

## Before opening a PR

1. Create a branch from `main`.
2. Make focused changes — one concern per pull request when possible.
3. Run checks locally:

   ```bash
   npm run typecheck
   npm run build
   ```

4. Update `lastUpdated` in any coverage data files you change.
5. Write a clear PR description explaining what changed and why.

## Content guidelines

### Blog posts

- Place Markdown files in `content/blog/`
- Include front matter: `title`, `description`, `date`, `author`
- Keep tone consistent with existing posts — clear, factual, user-focused

### Partner coverage data

- Source lists from official partner documentation or APIs
- Include `sourceUrl` and `lastUpdated` in the data file
- Do not guess or manually invent country availability

### Legal pages

Changes to `/privacy`, `/tos`, `/disclaimer`, or `/compliance` require review from the Kura team. Open an issue first for substantive legal edits.

## Code style

- Follow existing patterns in nearby files
- Use TypeScript for new logic
- Use Tailwind utility classes and existing `kura-*` design tokens
- Prefer the `usePageSeo()` composable for page metadata

## Reporting security issues

Do **not** open public issues for security vulnerabilities. See [SECURITY.md](./SECURITY.md).

## Questions

Open a [GitHub Issue](https://github.com/Kura-Finance/LandingPage/issues) or email [support@kura-finance.com](mailto:support@kura-finance.com).
