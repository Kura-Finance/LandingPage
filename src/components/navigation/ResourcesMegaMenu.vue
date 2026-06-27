<template>
  <div class="resources-mega">
    <div class="resources-mega__grid">
      <div
        v-for="(column, index) in columns"
        :key="column.title"
        class="resources-mega__column"
        :class="index > 0 ? 'resources-mega__column--bordered' : ''"
      >
        <h3 class="resources-mega__title">{{ column.title }}</h3>
        <p class="resources-mega__desc">{{ column.description }}</p>
        <p class="resources-mega__label">Jump to</p>
        <ul class="resources-mega__links">
          <li v-for="link in column.links" :key="link.name">
            <a
              v-if="link.external"
              :href="link.to"
              class="resources-mega__link"
              @click="$emit('close')"
            >
              {{ link.name }}
            </a>
            <NuxtLink v-else :to="link.to" class="resources-mega__link" @click="$emit('close')">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ close: [] }>()

const columns = [
  {
    title: 'Blog',
    description: 'News, product updates, and perspectives on modern finance.',
    links: [
      { name: 'All posts', to: '/blog' },
      { name: 'Product updates', to: '/blog/product-updates' },
      { name: 'Company news', to: '/blog/company-news' },
    ],
  },
  {
    title: 'Documentation',
    description: 'Policies, security docs, and supported regions.',
    links: [
      { name: 'Documentation center', to: '/docs' },
      { name: 'Stock countries', to: '/docs/stock-countries' },
      { name: 'On & off-ramp countries', to: '/docs/on-off-ramp-countries' },
      { name: 'Compliance', to: '/compliance' },
      { name: 'Privacy policy', to: '/privacy' },
    ],
  },
  {
    title: 'Support',
    description: 'Help, community, and ways to reach our team.',
    links: [
      { name: 'Help center', to: '/help' },
      { name: 'Community', to: '/community' },
      { name: 'Contact us', to: '/contact' },
      { name: 'Investors', to: '/investors' },
    ],
  },
]
</script>

<style scoped>
.resources-mega {
  background: #f8f9fc;
  color: #12131a;
}

.resources-mega__grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .resources-mega__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.resources-mega__column {
  padding: 2rem 1.5rem;
}

@media (min-width: 1024px) {
  .resources-mega__column {
    padding: 2.25rem 2.5rem;
  }
}

.resources-mega__column--bordered {
  border-top: 1px solid #e1e4ec;
}

@media (min-width: 768px) {
  .resources-mega__column--bordered {
    border-top: none;
    border-left: 1px solid #e1e4ec;
  }
}

.resources-mega__title {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
  color: #12131a;
}

.resources-mega__desc {
  font-size: 0.875rem;
  line-height: 1.55;
  color: #64687a;
  margin-bottom: 1.5rem;
  max-width: 280px;
}

.resources-mega__label {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
  margin-bottom: 0.75rem;
}

.resources-mega__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.resources-mega__link {
  font-size: 0.9375rem;
  color: #52566a;
  transition: color 0.15s;
}

.resources-mega__link:hover {
  color: #7c5cfc;
}
</style>
