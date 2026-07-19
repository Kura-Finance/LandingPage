<template>
  <div class="phone-mockup mx-auto shadow-device" :class="sizeClass">
    <div class="phone-mockup__frame">
      <slot>
        <NuxtImg
          :src="screenshot"
          :alt="alt"
          width="1206"
          height="2622"
          fetchpriority="high"
          decoding="async"
          sizes="(max-width: 768px) 280px, 320px"
          class="phone-mockup__img"
        />
      </slot>
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
  --phone-radius: 36px;

  position: relative;
  border-radius: var(--phone-radius);
  overflow: hidden;
  isolation: isolate;
  aspect-ratio: 1206 / 2622;
  line-height: 0;
  background: #e1e4ec;
  box-shadow:
    inset 0 0 0 3px #d4d8e4,
    inset 0 0 0 4px rgba(225, 228, 236, 0.9);
}

.phone-mockup__frame :deep(picture) {
  display: block;
  width: 100%;
  height: 100%;
}

.phone-mockup__frame :deep(img),
.phone-mockup__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
</style>
