<template>
  <section class="ir-section" :aria-labelledby="headingId">
    <header class="ir-section__header">
      <p class="ir-section__index" aria-hidden="true">{{ index }}</p>
      <div class="ir-section__titles">
        <h2 :id="headingId" class="ir-section__title">{{ title }}</h2>
        <p v-if="lede" class="ir-section__lede">{{ lede }}</p>
      </div>
    </header>
    <div class="ir-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  index: string
  title: string
  lede?: string
}>()

const headingId = computed(() => `ir-section-${props.index}`)
</script>

<style scoped>
.ir-section {
  padding: 2.5rem 0;
  border-top: 1px solid #12131a;
}

.ir-section__header {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: 1rem;
  margin-bottom: 1.75rem;
  align-items: start;
}

.ir-section__index {
  margin: 0;
  padding-top: 0.2rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  color: #9499a8;
}

.ir-section__title {
  margin: 0;
  font-family: "Newsreader", Georgia, serif;
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #12131a;
}

.ir-section__lede {
  margin: 0.5rem 0 0;
  max-width: 36rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #64687a;
}

@media (min-width: 768px) {
  .ir-section {
    padding: 3rem 0;
  }

  .ir-section__header {
    grid-template-columns: 4rem minmax(0, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.25rem;
  }
}
</style>
