<template>
  <div class="w-full text-kura-text bg-white">
    <PageHero
      eyebrow="Support"
      title="Help Center"
      description="Reach our team for product, billing, and account questions."
    />

    <main class="marketing-container max-w-xl pb-20 md:pb-28">
      <div class="card-surface p-8 md:p-10 space-y-6 text-center">
        <p class="text-sm text-kura-text-secondary">Contact us</p>
        <div class="flex flex-col gap-4">
          <a
            href="mailto:support@kura-finance.com"
            class="text-lg font-semibold text-kura-primary hover:text-kura-primary-dark transition-colors"
          >
            support@kura-finance.com
          </a>
          <a
            href="mailto:hello@kura-finance.com"
            class="text-lg font-semibold text-kura-primary hover:text-kura-primary-dark transition-colors"
          >
            hello@kura-finance.com
          </a>
        </div>
        <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLink to="/docs" class="btn-secondary text-sm">Browse documentation</NuxtLink>
          <NuxtLink to="/" class="btn-primary text-sm">Back home</NuxtLink>
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
  title: 'Help Center',
  description: 'Contact Kura Finance support at support@kura-finance.com or hello@kura-finance.com for product, billing, and account help.',
  path: '/help',
  keywords: 'Kura Finance help, support, contact, customer service',
})
</script>
