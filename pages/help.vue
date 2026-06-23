<template>
  <div class="text-white min-h-screen flex items-center justify-center px-4">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <div class="space-y-4">
        <div class="inline-block">
          <span class="text-7xl md:text-8xl">💬</span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold">Help Center</h1>
      </div>
      <div class="space-y-3">
        <p class="text-lg text-gray-400">Contact us</p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
          <a href="mailto:support@kura-finance.com" class="text-kura-primary hover:text-kura-accent transition-colors">
            support@kura-finance.com
          </a>
          <a href="mailto:hello@kura-finance.com" class="text-kura-primary hover:text-kura-accent transition-colors">
            hello@kura-finance.com
          </a>
        </div>
      </div>
      <NuxtLink to="/" class="inline-block px-8 py-4 bg-gradient-to-r from-kura-primary to-kura-secondary rounded-lg font-semibold text-white hover:shadow-glow-primary transition-all duration-300">
        Back Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});

usePageSeo({
  title: 'Help Center',
  description: 'Contact Kura Finance support at support@kura-finance.com or hello@kura-finance.com for product, billing, and account help.',
  path: '/help',
  keywords: 'Kura Finance help, support, contact, customer service',
});
</script>

