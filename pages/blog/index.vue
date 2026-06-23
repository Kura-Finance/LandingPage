<template>
  <div class="w-full text-kura-text">
    <main class="relative z-10 w-full px-4 sm:px-6 py-16 md:py-24">
      <div class="max-w-7xl mx-auto">
        <section class="mb-14 md:mb-20 text-center pt-16 md:pt-20">
          <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-semibold text-kura-primary">Product Updates & Insights</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span class="bg-gradient-to-r from-kura-primary to-kura-secondary bg-clip-text text-transparent">Kura Blog</span>
          </h1>
          <p class="text-lg md:text-xl text-kura-text-secondary max-w-3xl mx-auto leading-relaxed mb-6">
            News, security deep-dives, and guides for getting the most out of the Super Financial App.
          </p>
          <a
            href="/feed.xml"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-kura-border text-sm text-kura-text-secondary hover:text-kura-primary hover:border-kura-primary/40 transition-colors"
            title="Subscribe via RSS"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
            </svg>
            Subscribe via RSS
          </a>
        </section>

        <section v-if="posts?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <NuxtLink
            v-for="post in posts"
            :key="post._path"
            :to="post._path"
            class="group rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:border-kura-primary/40 transition-all duration-300 flex flex-col"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs uppercase tracking-widest font-bold text-kura-primary">{{ post.category }}</span>
              <span v-if="post.readingTime" class="text-[11px] text-kura-text-secondary">{{ post.readingTime }} min read</span>
            </div>
            <h2 class="text-xl font-bold mb-3 group-hover:text-kura-primary transition-colors">{{ post.title }}</h2>
            <p class="text-sm text-kura-text-secondary leading-relaxed mb-5 flex-1">{{ post.description }}</p>
            <div class="flex items-center justify-between text-xs text-kura-text-secondary pt-4 border-t border-kura-border">
              <span>{{ post.author }}</span>
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            </div>
          </NuxtLink>
        </section>

        <section v-else class="rounded-2xl border border-kura-border bg-gradient-to-br from-white/[0.04] to-transparent p-12 text-center mb-16">
          <p class="text-kura-text-secondary">No posts yet. Check back soon.</p>
        </section>

        <section class="rounded-2xl border border-kura-primary/30 bg-gradient-to-r from-kura-primary/10 to-kura-secondary/10 p-8 md:p-10 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to try Kura?</h2>
          <p class="text-kura-text-secondary max-w-2xl mx-auto mb-6">
            Download the Super Financial App and start trading, spending, and tracking in one place.
          </p>
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
    .find()
)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

usePageSeo({
  title: 'Blog',
  description: 'Product updates, security insights, and guides from the Kura Finance team.',
  path: '/blog',
  keywords: 'Kura Finance blog, super financial app news, crypto fintech guides',
});
</script>
