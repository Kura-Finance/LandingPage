import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { SITE, absoluteUrl, pageTitle } from '~/utils/site'

export interface PageSeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  path: MaybeRefOrGetter<string>
  keywords?: MaybeRefOrGetter<string | undefined>
  ogType?: MaybeRefOrGetter<'website' | 'article'>
  ogImage?: MaybeRefOrGetter<string | undefined>
  noindex?: MaybeRefOrGetter<boolean | undefined>
  article?: MaybeRefOrGetter<{
    publishedTime: string
    modifiedTime?: string
    author?: string
  } | undefined>
  jsonLd?: MaybeRefOrGetter<Record<string, unknown> | Record<string, unknown>[] | undefined>
}

export function usePageSeo(options: PageSeoOptions) {
  const path = computed(() => toValue(options.path))
  const title = computed(() => toValue(options.title))
  const description = computed(() => toValue(options.description))
  const keywords = computed(() => toValue(options.keywords))
  const ogType = computed(() => toValue(options.ogType) ?? 'website')
  const noindex = computed(() => toValue(options.noindex) ?? false)
  const article = computed(() => toValue(options.article))
  const jsonLd = computed(() => toValue(options.jsonLd))

  const fullTitle = computed(() => pageTitle(title.value, path.value))
  const url = computed(() => absoluteUrl(path.value))
  const image = computed(() => absoluteUrl(toValue(options.ogImage) ?? SITE.defaultOgImage))

  useSeoMeta({
    title: () => fullTitle.value,
    description: () => description.value,
    keywords: () => keywords.value,
    robots: () => (noindex.value ? 'noindex, follow' : 'index, follow'),
    ogTitle: () => fullTitle.value,
    ogDescription: () => description.value,
    ogUrl: () => url.value,
    ogType: () => ogType.value,
    ogSiteName: SITE.name,
    ogLocale: SITE.locale,
    ogImage: () => image.value,
    ogImageType: 'image/jpeg',
    ogImageAlt: () => `${SITE.name} — ${SITE.tagline}`,
    twitterCard: 'summary_large_image',
    twitterTitle: () => fullTitle.value,
    twitterDescription: () => description.value,
    twitterImage: () => image.value,
    articlePublishedTime: () => article.value?.publishedTime,
    articleModifiedTime: () => article.value?.modifiedTime,
    articleAuthor: () => (article.value?.author ? [article.value.author] : undefined),
  })

  useHead({
    link: [{ rel: 'canonical', href: () => url.value }],
    script: computed(() => {
      const schemas = jsonLd.value
      if (!schemas) return []
      const list = Array.isArray(schemas) ? schemas : [schemas]
      return list.map((schema) => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      }))
    }),
  })
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl('/favicon.svg'),
    description: SITE.defaultDescription,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleSchema(input: {
  title: string
  description: string
  path: string
  date: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    author: { '@type': 'Organization', name: input.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/favicon.svg') },
    },
    mainEntityOfPage: absoluteUrl(input.path),
    image: absoluteUrl(SITE.defaultOgImage),
  }
}
