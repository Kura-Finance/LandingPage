<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-3xl mx-auto">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors mb-10 pt-16 md:pt-20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </NuxtLink>

        <article v-if="article">
          <header class="mb-10">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-xs uppercase tracking-widest font-bold text-kura-primary">{{ article.category }}</span>
              <span v-if="article.readingTime" class="text-xs text-kura-text-secondary">{{ article.readingTime }} min read</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">{{ article.title }}</h1>
            <p class="text-lg text-kura-text-secondary leading-relaxed mb-6">{{ article.description }}</p>
            <div class="flex items-center gap-4 text-sm text-kura-text-secondary pb-8 border-b border-kura-border">
              <span>{{ article.author }}</span>
              <span aria-hidden="true">·</span>
              <time :datetime="article.date">{{ formatDate(article.date) }}</time>
            </div>
          </header>

          <div class="prose prose-lg max-w-none">
            <ContentRenderer :value="article" />
          </div>
        </article>

        <section class="mt-16 rounded-2xl border border-kura-primary/30 bg-gradient-to-r from-kura-primary/10 to-kura-secondary/10 p-8 text-center">
          <h2 class="text-2xl font-bold mb-3">Get Kura on your phone</h2>
          <p class="text-kura-text-secondary mb-6">Trade, spend, and track — all in one app.</p>
          <NuxtLink
            to="/download"
            class="inline-block px-7 py-3 bg-gradient-to-r from-kura-primary to-kura-secondary rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300"
          >
            Download App
          </NuxtLink>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
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
  queryContent<BlogArticle>('/blog', slug).findOne()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
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
