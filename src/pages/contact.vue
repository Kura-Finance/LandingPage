<script setup lang="ts">
definePageMeta({ layout: 'default' })

usePageSeo({
  title: 'Contact Us',
  description: 'Get in touch with the Kura team. General inquiries, support, and partnership questions welcome.',
  path: '/contact',
  keywords: 'contact Kura, support, hello, help',
})

const channels = [
  {
    title: 'General inquiries',
    description: 'Questions about Kura, partnerships, or press.',
    email: 'hello@kura-finance.com',
  },
  {
    title: 'Support',
    description: 'Help with your account, app, or TrackFi setup.',
    email: 'support@kura-finance.com',
  },
]
</script>

<template>
  <div class="w-full text-kura-text bg-kura-background">
    <PageHero
      eyebrow="Support"
      title="Contact us"
      description="We are here to help. Reach out for general inquiries, account support, or partnership questions."
    />

    <main class="marketing-container pb-20 md:pb-28">
      <div class="grid md:grid-cols-2 gap-5 max-w-3xl mb-14">
        <div v-for="channel in channels" :key="channel.title" class="card-surface p-7">
          <h2 class="text-lg font-semibold mb-2">{{ channel.title }}</h2>
          <p class="text-sm text-kura-text-secondary leading-relaxed mb-4">{{ channel.description }}</p>
          <a :href="`mailto:${channel.email}`" class="text-kura-primary font-medium hover:text-kura-primary-dark transition-colors">
            {{ channel.email }}
          </a>
        </div>
      </div>

      <section class="card-surface p-8 md:p-10 max-w-2xl">
        <h2 class="text-xl font-semibold mb-3">More ways to connect</h2>
        <ul class="space-y-3 text-sm text-kura-text-secondary">
          <li>
            <NuxtLink to="/help" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              Help center →
            </NuxtLink>
            — guides and FAQs
          </li>
          <li>
            <NuxtLink to="/community" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              Community →
            </NuxtLink>
            — connect with other Kura users
          </li>
          <li>
            <NuxtLink to="/investors" class="text-kura-primary hover:text-kura-primary-dark transition-colors font-medium">
              Investors →
            </NuxtLink>
            — funding and company updates
          </li>
        </ul>
      </section>
    </main>

    <CTASection
      title="Prefer self-service?"
      description="Browse the help center for guides on accounts, investing, TrackFi, and more."
      primary-label="Visit help center"
      primary-to="/help"
    />
  </div>
</template>
