import { serverQueryContent } from '#content/server'
import { escapeXml } from '../utils/xml'

const SITE_URL = 'https://kura-finance.com'

interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  author: string
  category?: string
}

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent<BlogPost>(event, '/blog')
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find()

  const latestDate = posts[0]?.date ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()

  const items = posts.map((post) => {
    const url = `${SITE_URL}${post._path}`
    const category = post.category
      ? `\n      <category>${escapeXml(post.category)}</category>`
      : ''

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(post.author)}</author>${category}
    </item>`
  }).join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kura Finance Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Product updates, security insights, and guides from Kura Finance.</description>
    <language>en-us</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/rss+xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return feed
})
