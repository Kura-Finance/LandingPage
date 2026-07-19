<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Compare Kura',
  description:
    'See how Kura stacks up against traditional banks, exchanges, and wallets — one account for cash, investing, and earning.',
  path: '/compare',
  keywords: 'compare Kura, vs banks, vs exchange, vs wallet, financial account',
})
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Compare"
      title="Finance without the complexity"
      description="See how Kura stacks up against traditional banks, exchanges, and wallets — one unified account for cash, investing, and earning."
      :tags="['Traditional banks', 'Exchange', 'Wallet', 'Kura']"
    />

    <ComparisonSection />

    <CTASection
      title="Ready for a better way to manage money?"
      description="Download Kura and experience finance designed for the internet generation."
      primary-label="Download Kura"
    />
  </div>
</template>
