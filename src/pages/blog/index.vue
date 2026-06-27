<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Product updates & insights"
      title="Kura Blog"
      description="News, security deep-dives, and guides for getting the most out of the Super Financial App."
      :divider="false"
    >
      <a
        href="/feed.xml"
        class="btn-secondary text-sm gap-2 inline-flex"
        title="Subscribe via RSS"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
        </svg>
        Subscribe via RSS
      </a>
    </PageHero>

    <main class="marketing-container pb-20 md:pb-28 pt-2 md:pt-4">
      <section v-if="posts?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="group card-surface p-6 hover:border-kura-primary/30 hover:shadow-card transition-all flex flex-col"
        >
          <div class="flex items-center justify-between mb-4 gap-2">
            <span class="text-xs uppercase tracking-widest font-semibold text-kura-primary">{{ post.category }}</span>
            <span v-if="post.readingTime" class="text-[11px] text-kura-text-secondary">{{ post.readingTime }} min</span>
          </div>
          <h2 class="text-lg font-semibold mb-3 group-hover:text-kura-primary transition-colors">{{ post.title }}</h2>
          <p class="text-sm text-kura-text-secondary leading-relaxed mb-5 flex-1">{{ post.description }}</p>
          <div class="flex items-center justify-between text-xs text-kura-text-secondary pt-4 border-t border-kura-border">
            <span>{{ post.author }}</span>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
        </NuxtLink>
      </section>

      <section v-else class="card-surface p-12 text-center mb-14">
        <p class="text-kura-text-secondary">No posts yet. Check back soon.</p>
      </section>

      <CTASection />
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readingTime?: number
}

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent<BlogPost>('/blog')
    .where({ _extension: 'md' })
    .sort({ date: -1 })
    .find(),
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

usePageSeo({
  title: 'Blog',
  description: 'Product updates, security insights, and guides from the Kura Finance team.',
  path: '/blog',
  keywords: 'Kura Finance blog, super financial app news, crypto fintech guides',
})
</script>
