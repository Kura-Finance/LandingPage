<script setup lang="ts">
import { formatBlogDate as formatDate } from '~/utils/site'

definePageMeta({ layout: 'default' })

const category = 'Product'

usePageSeo({
  title: 'Product Updates',
  description: 'Latest product news, feature launches, and improvements from the Kura team.',
  path: '/blog/product-updates',
  keywords: 'Kura product updates, features, releases, blog',
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

const { data: posts } = await useAsyncData('blog-product-updates', () =>
  queryContent<BlogPost>('/blog')
    .where({ _extension: 'md', category })
    .sort({ date: -1 })
    .find(),
)
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Blog"
      title="Product updates"
      description="Feature launches, improvements, and product news from the Kura team."
      :divider="false"
    >
      <NuxtLink to="/blog" class="btn-secondary text-sm">All posts</NuxtLink>
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
        <p class="text-kura-text-secondary mb-4">No product updates yet. Check back soon.</p>
        <NuxtLink to="/blog" class="text-kura-primary font-medium hover:text-kura-primary-dark transition-colors text-sm">
          Browse all posts →
        </NuxtLink>
      </section>

      <CTASection />
    </main>
  </div>
</template>
