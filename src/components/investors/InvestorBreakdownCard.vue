<template>
  <section class="ir-table-block">
    <header class="ir-table-block__head">
      <h3 class="ir-table-block__title">{{ title }}</h3>
    </header>

    <div v-if="rows.length" class="ir-table" role="table">
      <div class="ir-table__header" role="row">
        <span class="ir-table__col ir-table__col--name" role="columnheader">{{ nameHeader }}</span>
        <span class="ir-table__col ir-table__col--value" role="columnheader">{{ valueHeader }}</span>
        <span class="ir-table__col ir-table__col--share" role="columnheader">Share</span>
      </div>

      <div
        v-for="row in rows"
        :key="row.key"
        class="ir-table__row"
        role="row"
      >
        <div class="ir-table__col ir-table__col--name" role="cell">
          <span class="ir-table__name">{{ row.label }}</span>
          <p v-if="row.secondary" class="ir-table__secondary">{{ row.secondary }}</p>
        </div>
        <div class="ir-table__col ir-table__col--value" role="cell">
          {{ row.primary }}
        </div>
        <div class="ir-table__col ir-table__col--share" role="cell">
          <template v-if="row.share != null">
            <span class="ir-table__share-pct">{{ formatShare(row.share) }}</span>
            <div class="ir-table__track" aria-hidden="true">
              <div
                class="ir-table__bar"
                :style="{ width: `${Math.round(row.share * 100)}%` }"
              />
            </div>
          </template>
          <span v-else class="ir-table__share-pct">—</span>
        </div>
      </div>
    </div>

    <p v-else class="ir-table-block__empty">No data for this period.</p>
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

withDefaults(
  defineProps<{
    title: string
    rows: BreakdownRow[]
    nameHeader?: string
    valueHeader?: string
  }>(),
  {
    nameHeader: 'Item',
    valueHeader: 'Amount',
  },
)

function formatShare(share: number) {
  return `${(share * 100).toFixed(1)}%`
}
</script>

<style scoped>
.ir-table-block {
  min-width: 0;
}

.ir-table-block__head {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #12131a;
}

.ir-table-block__title {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #12131a;
}

.ir-table__header,
.ir-table__row {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(4.5rem, 0.7fr) minmax(5.5rem, 0.9fr);
  gap: 0.75rem 1rem;
  align-items: start;
}

.ir-table__header {
  padding: 0 0 0.625rem;
  border-bottom: 1px solid #e1e4ec;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9499a8;
}

.ir-table__row {
  padding: 0.875rem 0;
  border-bottom: 1px solid #e8ebf2;
}

.ir-table__row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.ir-table__col--value,
.ir-table__col--share {
  text-align: right;
}

.ir-table__name {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #12131a;
}

.ir-table__secondary {
  margin: 0.25rem 0 0;
  font-size: 0.6875rem;
  line-height: 1.45;
  color: #9499a8;
}

.ir-table__col--value {
  font-size: 0.875rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: #12131a;
}

.ir-table__share-pct {
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: #64687a;
}

.ir-table__track {
  height: 1px;
  background: #e1e4ec;
  overflow: hidden;
}

.ir-table__bar {
  height: 100%;
  background: #12131a;
}

.ir-table-block__empty {
  margin: 0;
  font-size: 0.875rem;
  color: #64687a;
}

@media (max-width: 639px) {
  .ir-table__header {
    display: none;
  }

  .ir-table__row {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "name value"
      "share share";
  }

  .ir-table__col--name {
    grid-area: name;
  }

  .ir-table__col--value {
    grid-area: value;
    align-self: start;
  }

  .ir-table__col--share {
    grid-area: share;
    text-align: left;
    margin-top: 0.25rem;
  }

  .ir-table__share-pct {
    display: inline;
    margin: 0 0.5rem 0 0;
  }

  .ir-table__track {
    display: inline-block;
    width: 6rem;
    vertical-align: middle;
  }
}
</style>
