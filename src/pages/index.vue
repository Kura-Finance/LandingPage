<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

usePageSeo({
  title: 'Kura — Modern Finance, Redesigned',
  description:
    'One account to save, spend, invest, earn, and move money globally. A premium financial experience with the simplicity of a bank and the freedom of modern finance.',
  path: '/',
  keywords:
    'modern finance, fintech, global money, invest stocks, earn yield, financial account, Kura',
  jsonLd: websiteSchema(),
})
</script>

<template>
  <div>
    <HeroSection />
    <MoneyFeaturesSection />
    <DesignedForHumansSection />
    <EcosystemSection />
    <ComparisonSection />
    <CTASection />
  </div>
</template>
