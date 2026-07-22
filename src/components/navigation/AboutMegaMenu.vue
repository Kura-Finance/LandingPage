<template>
  <div class="about-mega">
    <div class="about-mega__layout">
      <aside class="about-mega__story">
        <NuxtLink to="/about" class="about-mega__story-link group" @click="$emit('close')">
          <h2 class="about-mega__story-title">Our story</h2>
          <p class="about-mega__story-desc">
            Modern finance, redesigned — one account, Zero-Access privacy, and the people building it.
          </p>
        </NuxtLink>
      </aside>

      <div class="about-mega__columns">
        <div
          v-for="(column, index) in columns"
          :key="column.label"
          class="about-mega__column"
          :class="index > 0 ? 'about-mega__column--bordered' : ''"
        >
          <p class="about-mega__label">{{ column.label }}</p>
          <ul class="about-mega__links">
            <li v-for="link in column.links" :key="link.name">
              <a
                v-if="link.external"
                :href="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="about-mega__link about-mega__link--external"
                @click="$emit('close')"
              >
                {{ link.name }}
                <svg class="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <NuxtLink v-else :to="link.to" class="about-mega__link" @click="$emit('close')">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <NuxtLink to="/contact" class="about-mega__footer" @click="$emit('close')">
      <span class="about-mega__footer-title">
        Contact us
        <span class="about-mega__footer-arrow" aria-hidden="true">→</span>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ close: [] }>()

const columns = [
  {
    label: 'Connect',
    links: [
      { name: 'Community', to: '/community' },
      { name: 'Blog', to: '/blog' },
      { name: 'X', to: 'https://x.com/kurafinance', external: true },
    ],
  },
  {
    label: 'Company',
    links: [
      { name: 'Compliance', to: '/compliance' },
    ],
  },
]
</script>

<style scoped>
.about-mega {
  background: #f8f9fc;
  color: #12131a;
}

.about-mega__layout {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .about-mega__layout {
    grid-template-columns: minmax(240px, 1fr) 2fr;
  }
}

.about-mega__story {
  padding: 2rem 1.5rem;
  border-bottom: 1px solid #e1e4ec;
}

@media (min-width: 1024px) {
  .about-mega__story {
    padding: 2.25rem 2.5rem 2.25rem 0;
    border-bottom: none;
    border-right: 1px solid #e1e4ec;
  }
}

.about-mega__story-link {
  display: block;
  transition: opacity 0.15s;
}

.about-mega__story-link:hover {
  opacity: 0.75;
}

.about-mega__story-title {
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
  color: #12131a;
}

.about-mega__story-desc {
  font-size: 0.875rem;
  line-height: 1.55;
  color: #64687a;
  max-width: 280px;
}

.about-mega__columns {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .about-mega__columns {
    grid-template-columns: 1fr 1fr;
  }
}

.about-mega__column {
  padding: 2rem 1.5rem;
}

@media (min-width: 1024px) {
  .about-mega__column {
    padding: 2.25rem 2.5rem;
  }
}

.about-mega__column--bordered {
  border-top: 1px solid #e1e4ec;
}

@media (min-width: 640px) {
  .about-mega__column--bordered {
    border-top: none;
    border-left: 1px solid #e1e4ec;
  }
}

.about-mega__label {
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
  margin-bottom: 1rem;
}

.about-mega__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.about-mega__link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.9375rem;
  color: #52566a;
  transition: color 0.15s;
}

.about-mega__link:hover {
  color: #7c5cfc;
}

.about-mega__footer {
  display: block;
  border-top: 1px solid #e1e4ec;
  padding: 1.25rem 1.5rem;
  transition: background-color 0.15s;
}

.about-mega__footer:hover {
  background: rgba(124, 92, 252, 0.04);
}

@media (min-width: 1024px) {
  .about-mega__footer {
    padding: 1.25rem 0;
  }
}

.about-mega__footer-title {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #12131a;
}

.about-mega__footer-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
  border: 1px solid #e1e4ec;
  font-size: 0.75rem;
  line-height: 1;
}
</style>
