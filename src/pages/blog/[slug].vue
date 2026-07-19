<template>
  <div class="w-full text-kura-text bg-white">
    <div class="marketing-container pt-28 pb-8 md:pt-32">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </NuxtLink>
    </div>

    <main class="marketing-container max-w-3xl pb-16 md:pb-20">
      <article v-if="article">
        <header class="mb-10 pb-8 border-b border-kura-border">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="section-label !text-xs">{{ article.category }}</span>
            <span v-if="article.readingTime" class="text-xs text-kura-text-secondary">{{ article.readingTime }} min read</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{{ article.title }}</h1>
          <p class="text-lg text-kura-text-secondary leading-relaxed mb-6">{{ article.description }}</p>
          <div class="flex items-center gap-4 text-sm text-kura-text-secondary">
            <span>{{ article.author }}</span>
            <span aria-hidden="true">·</span>
            <time :datetime="article.date">{{ formatDate(article.date) }}</time>
          </div>
        </header>

        <div class="prose prose-lg max-w-none">
          <ContentRenderer :value="article" />
        </div>
      </article>
    </main>

    <CTASection
      title="Get Kura on your phone"
      description="Trade, spend, and track — all in one app."
    />
  </div>
</template>

<script setup lang="ts">
import { formatBlogDate as formatDate } from '~/utils/site'

definePageMeta({
  layout: 'default',
})

interface BlogArticle {
  title: string
  description: string
  date: string
  author: string
  category: string
  readingTime?: number
  body?: unknown
}

const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryContent<BlogArticle>('/blog', slug).findOne(),
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

usePageSeo({
  title: () => article.value?.title ?? 'Blog Post',
  description: () => article.value?.description ?? '',
  path: () => `/blog/${slug}`,
  ogType: 'article',
  article: () =>
    article.value
      ? {
          publishedTime: article.value.date,
          author: article.value.author,
        }
      : undefined,
  jsonLd: () =>
    article.value
      ? [
          articleSchema({
            title: article.value.title,
            description: article.value.description,
            path: `/blog/${slug}`,
            date: article.value.date,
            author: article.value.author,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: article.value.title, path: `/blog/${slug}` },
          ]),
        ]
      : undefined,
})
</script>
