<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SHUTDOWN } from '~/utils/site'

const STORAGE_KEY = 'kura-shutdown-notice-dismissed'
const isOpen = ref(false)

function close() {
  isOpen.value = false
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Storage unavailable (private mode etc.) — the notice just reappears next load.
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) close()
}

onMounted(() => {
  let dismissed = false
  try {
    dismissed = sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    dismissed = false
  }
  isOpen.value = !dismissed
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-kura-ink/60 backdrop-blur-sm p-4"
        @click.self="close"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="shutdown-notice-title"
          class="flex flex-col w-full max-w-lg max-h-full rounded-xl bg-white shadow-device border border-kura-border"
        >
          <div class="overflow-y-auto p-6 sm:p-8 text-[15px] sm:text-base">
            <p class="section-label mb-4">Notice</p>
            <h2 id="shutdown-notice-title" class="headline-xl text-2xl sm:text-3xl mb-5">
              Kura Finance LLC has shut down.
            </h2>
            <p class="text-kura-text-secondary leading-relaxed mb-3">
              Only basic wallet features are still maintained. You can keep using the basics, including but not limited to:
            </p>
            <ul class="list-disc pl-5 space-y-1 text-kura-text-secondary leading-relaxed mb-4">
              <li>Holding and sending digital dollars and crypto</li>
              <li>Swapping tokens through public aggregators</li>
              <li>Earning and borrowing on Morpho markets (rates are variable and you can lose money)</li>
            </ul>
            <p class="font-medium text-kura-text leading-relaxed mb-4">
              If you need to export your private keys, you can do so on Privy.
            </p>
            <p class="text-kura-text-secondary leading-relaxed">
              <strong class="font-medium text-kura-text">The entire project is open source on GitHub.</strong>
              Anyone can fork it and run their own version, including the Bridge (fiat ramp) and Dinari (US stocks) integrations. To run those, you need your own partner contracts, licenses and KYC.
            </p>
          </div>

          <div class="flex flex-shrink-0 items-center justify-between gap-3 border-t border-kura-border px-6 py-4 sm:px-8">
            <button type="button" class="btn-secondary px-5 py-2.5" @click="close">
              Close
            </button>
            <div class="flex items-center gap-3">
              <a :href="SHUTDOWN.privyUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary px-5 py-2.5">
                Privy
              </a>
              <a :href="SHUTDOWN.githubUrl" target="_blank" rel="noopener noreferrer" class="btn-primary px-5 py-2.5">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
