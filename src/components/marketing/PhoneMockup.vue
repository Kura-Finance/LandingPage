<template>
  <div class="phone-mockup mx-auto shadow-device" :class="sizeClass">
    <div class="phone-mockup__frame">
      <div class="phone-mockup__screen">
        <slot>
          <NuxtImg
            :src="screenshot"
            :alt="alt"
            width="1170"
            height="2532"
            fetchpriority="high"
            decoding="async"
            sizes="(max-width: 768px) 280px, 320px"
            class="w-full h-full object-cover object-top"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    screenshot?: string
    alt?: string
    size?: 'default' | 'large'
  }>(),
  {
    screenshot: '/screenshot.webp',
    alt: 'Kura app home screen showing balance, spendable card, and recent activity',
    size: 'default',
  },
)

const sizeClass = computed(() =>
  props.size === 'large'
    ? 'max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]'
    : 'max-w-[260px] sm:max-w-[280px]',
)
</script>

<style scoped>
.phone-mockup__frame {
  padding: 3px;
  border-radius: 36px;
  background: linear-gradient(145deg, #e1e4ec, #d4d8e4);
}

.phone-mockup__screen {
  overflow: hidden;
  border-radius: 34px;
  aspect-ratio: 9 / 19.5;
  background: #f8f9fc;
  border: 1px solid rgba(26, 26, 26, 0.06);
}
</style>
