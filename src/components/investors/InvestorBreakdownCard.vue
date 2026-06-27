<template>
  <section class="investor-breakdown card-surface p-6 md:p-7">
    <h2 class="investor-breakdown__title">{{ title }}</h2>
    <ul v-if="rows.length" class="investor-breakdown__list">
      <li v-for="row in rows" :key="row.key" class="investor-breakdown__row">
        <div class="investor-breakdown__row-head">
          <span class="investor-breakdown__name">{{ row.label }}</span>
          <span class="investor-breakdown__value">{{ row.primary }}</span>
        </div>
        <div v-if="row.share != null" class="investor-breakdown__track" aria-hidden="true">
          <div class="investor-breakdown__bar" :style="{ width: `${Math.round(row.share * 100)}%` }" />
        </div>
        <p v-if="row.secondary" class="investor-breakdown__secondary">{{ row.secondary }}</p>
      </li>
    </ul>
    <p v-else class="investor-breakdown__empty">No data for this period.</p>
  </section>
</template>

<script setup lang="ts">
export interface BreakdownRow {
  key: string
  label: string
  primary: string
  secondary?: string
  share?: number
}

defineProps<{
  title: string
  rows: BreakdownRow[]
}>()
</script>

<style scoped>
.investor-breakdown__title {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #9499a8;
  margin-bottom: 1.25rem;
}

.investor-breakdown__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.investor-breakdown__row-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.investor-breakdown__name {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #12131a;
}

.investor-breakdown__value {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #12131a;
  white-space: nowrap;
}

.investor-breakdown__track {
  height: 4px;
  border-radius: 999px;
  background: #f0f2f7;
  overflow: hidden;
}

.investor-breakdown__bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #7c5cfc, #9d85fd);
}

.investor-breakdown__secondary {
  margin-top: 0.375rem;
  font-size: 0.75rem;
  color: #9499a8;
}

.investor-breakdown__empty {
  font-size: 0.875rem;
  color: #64687a;
}
</style>
