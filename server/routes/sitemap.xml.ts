import { serverQueryContent } from '#content/server'
import { SITE, absoluteUrl } from '../../utils/site'

interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

interface BlogPost {
  _path: string
  date?: string
}

const STATIC_ROUTES: SitemapEntry[] = [
  { loc: absoluteUrl('/'), lastmod: '2026-06-21', changefreq: 'weekly', priority: 1.0 },
  { loc: absoluteUrl('/download'), lastmod: '2026-06-21', changefreq: 'weekly', priority: 0.95 },
  { loc: absoluteUrl('/kura-wallet'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.9 },
  { loc: absoluteUrl('/kura-card'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.9 },
  { loc: absoluteUrl('/trackfi'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.9 },
  { loc: absoluteUrl('/pricing'), lastmod: '2026-06-21', changefreq: 'weekly', priority: 0.9 },
  { loc: absoluteUrl('/about'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.85 },
  { loc: absoluteUrl('/blog'), lastmod: '2026-06-21', changefreq: 'weekly', priority: 0.8 },
  { loc: absoluteUrl('/docs'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.75 },
  { loc: absoluteUrl('/help'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.7 },
  { loc: absoluteUrl('/business'), lastmod: '2026-06-23', changefreq: 'monthly', priority: 0.65 },
  { loc: absoluteUrl('/investors'), lastmod: '2026-06-23', changefreq: 'daily', priority: 0.7 },
  { loc: absoluteUrl('/docs/stock-countries'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.65 },
  { loc: absoluteUrl('/docs/card-countries'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.65 },
  { loc: absoluteUrl('/docs/on-off-ramp-countries'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.65 },
  { loc: absoluteUrl('/compliance'), lastmod: '2026-06-21', changefreq: 'monthly', priority: 0.55 },
  { loc: absoluteUrl('/privacy'), lastmod: '2026-06-21', changefreq: 'yearly', priority: 0.5 },
  { loc: absoluteUrl('/tos'), lastmod: '2026-06-21', changefreq: 'yearly', priority: 0.5 },
  { loc: absoluteUrl('/disclaimer'), lastmod: '2026-06-21', changefreq: 'yearly', priority: 0.5 },
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function renderUrl(entry: SitemapEntry) {
  return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`
}

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent<BlogPost>(event, '/blog')
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find()

  const blogEntries: SitemapEntry[] = posts.map((post) => ({
    loc: absoluteUrl(post._path),
    lastmod: post.date?.slice(0, 10) ?? '2026-06-21',
    changefreq: 'monthly' as const,
    priority: 0.7,
  }))

  const urls = [...STATIC_ROUTES, ...blogEntries].map(renderUrl).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return xml
})
