<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Community"
      title="Coming soon"
      description="We're building a community hub for Kura users and builders. Follow the blog for product updates in the meantime."
      :tags="['Discord', 'Events', 'Builders']"
    />

    <main class="marketing-container max-w-xl pb-20 md:pb-28 text-center">
      <div class="card-surface p-8 md:p-10 space-y-6">
        <p class="text-sm text-kura-text-secondary leading-relaxed">
          Want to connect now? Follow us on X or reach out at hello@kura-finance.com.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://x.com/kurafinance?s=21"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-sm"
          >
            Follow on X
          </a>
          <NuxtLink to="/blog" class="btn-primary text-sm">Read the blog</NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Community',
  description: 'The Kura community hub is coming soon. Follow our blog for product updates in the meantime.',
  path: '/community',
  noindex: true,
})
</script>
