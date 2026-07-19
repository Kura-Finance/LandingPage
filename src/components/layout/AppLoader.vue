<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="app-loader"
      :class="{ 'app-loader--exit': exiting }"
      aria-hidden="true"
    >
      <div class="app-loader__glow" />

      <div class="app-loader__inner">
        <div class="app-loader__brand">
          <img
            :src="brandIconUrl"
            alt=""
            width="48"
            height="48"
            class="app-loader__logo"
            decoding="async"
          />
          <span class="app-loader__wordmark">Kura</span>
        </div>

        <div class="app-loader__track">
          <div class="app-loader__bar" />
        </div>
      </div>

      <div class="app-loader__curtain" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { brandIconUrl } from '~/utils/brand'

const visible = ref(false)
const exiting = ref(false)

onMounted(() => {
  if (import.meta.server) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) return

  visible.value = true
  document.body.style.overflow = 'hidden'

  const exitAt = 1600
  const removeAt = 2200

  setTimeout(() => {
    exiting.value = true
  }, exitAt)

  setTimeout(() => {
    visible.value = false
    document.body.style.overflow = ''
  }, removeAt)
})
</script>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fc;
  overflow: hidden;
}

.app-loader__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 60% 50% at 50% 45%,
    rgba(124, 92, 252, 0.14) 0%,
    transparent 70%
  );
  animation: loader-glow 1.6s ease-out forwards;
}

.app-loader__inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  animation: loader-brand-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.app-loader__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.app-loader__logo {
  width: 52px;
  height: 52px;
  animation: loader-logo-pulse 1.4s ease-in-out infinite;
}

.app-loader__wordmark {
  font-family: "Newsreader", Georgia, serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #12131a;
  opacity: 0;
  animation: loader-word-in 0.5s ease 0.15s forwards;
}

.app-loader__track {
  width: 120px;
  height: 2px;
  background: rgba(124, 92, 252, 0.15);
  border-radius: 999px;
  overflow: hidden;
}

.app-loader__bar {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #7c5cfc, #9d85fd);
  border-radius: 999px;
  animation: loader-bar 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.35s forwards;
}

.app-loader__curtain {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: #f8f9fc;
  transform: translateY(100%);
  pointer-events: none;
}

.app-loader--exit .app-loader__curtain {
  animation: loader-curtain 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.app-loader--exit .app-loader__inner {
  animation: loader-brand-out 0.4s ease forwards;
}

@keyframes loader-glow {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes loader-brand-in {
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes loader-brand-out {
  to { opacity: 0; transform: translateY(-8px) scale(0.98); }
}

@keyframes loader-word-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes loader-logo-pulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
  50% { transform: scale(1.04); filter: drop-shadow(0 0 20px rgba(124, 92, 252, 0.35)); }
}

@keyframes loader-bar {
  to { width: 100%; }
}

@keyframes loader-curtain {
  from { transform: translateY(100%); }
  to { transform: translateY(-100%); }
}

@media (prefers-reduced-motion: reduce) {
  .app-loader__inner,
  .app-loader__bar,
  .app-loader__curtain,
  .app-loader__glow,
  .app-loader__logo,
  .app-loader__wordmark {
    animation: none !important;
  }
}
</style>
