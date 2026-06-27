<template>
  <header
    class="fixed top-0 w-full z-50 transition-colors duration-300 dropdown-container border-b"
    :class="
      isMenuDark
        ? 'bg-kura-ink border-kura-border-dark text-white'
        : 'bg-kura-background/95 backdrop-blur-sm border-kura-border text-kura-text'
    "
  >
    <div class="marketing-container">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center gap-2.5 group w-fit" @click="closeAll">
            <img
              src="/icon.webp"
              alt="Kura Logo"
              width="32"
              height="32"
              fetchpriority="high"
              decoding="async"
              class="w-8 h-8"
            />
            <span
              class="hidden sm:inline font-medium text-[17px] tracking-[-0.01em]"
              :class="isMenuDark ? 'text-white' : 'text-kura-text'"
            >Kura</span>
          </NuxtLink>
        </div>

        <nav class="hidden md:flex items-center gap-1 flex-1 justify-center h-full">
          <div class="relative h-full flex items-center">
            <button
              type="button"
              @click.prevent.stop="toggleDropdown('products')"
              class="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm transition-colors"
              :class="
                activeDropdown === 'products'
                  ? isMenuDark
                    ? 'bg-kura-primary/25 text-white'
                    : 'bg-kura-primary/10 text-kura-primary'
                  : isMenuDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-kura-text-secondary hover:text-kura-primary'
              "
            >
              Products
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200 opacity-60"
                :class="activeDropdown === 'products' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div class="relative h-full flex items-center">
            <button
              type="button"
              @click.prevent.stop="toggleDropdown('resources')"
              class="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm transition-colors"
              :class="
                activeDropdown === 'resources'
                  ? isMenuDark
                    ? 'bg-kura-primary/25 text-white'
                    : 'bg-kura-primary/10 text-kura-primary'
                  : isMenuDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-kura-text-secondary hover:text-kura-primary'
              "
            >
              Resources
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200 opacity-60"
                :class="activeDropdown === 'resources' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <NuxtLink
            to="/about"
            class="px-3 py-2 text-sm transition-colors"
            :class="isMenuDark ? 'text-white/60 hover:text-white' : 'text-kura-text-secondary hover:text-kura-primary'"
            @click="closeAll"
          >About</NuxtLink>
          <NuxtLink
            to="/pricing"
            class="px-3 py-2 text-sm transition-colors"
            :class="isMenuDark ? 'text-white/60 hover:text-white' : 'text-kura-text-secondary hover:text-kura-primary'"
            @click="closeAll"
          >Pricing</NuxtLink>
        </nav>

        <div class="flex items-center justify-end gap-3 flex-shrink-0">
          <NuxtLink
            to="/download"
            class="btn-primary !py-2.5 !px-5 text-[13px]"
            @click="closeAll"
          >
            Download App
          </NuxtLink>

          <button
            type="button"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg transition-colors"
            :class="isMenuDark ? 'text-white hover:bg-white/10' : 'text-kura-text hover:bg-kura-surface'"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mega Menu (Desktop) -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1 pointer-events-none"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1 pointer-events-none"
      >
        <div
          v-show="activeDropdown && !isMobileMenuOpen"
          class="hidden md:block absolute top-full left-0 w-full bg-kura-ink border-t border-white/8 overflow-hidden"
        >
          <div class="marketing-container py-0">
            <ProductsMegaMenu
              v-if="activeDropdown === 'products'"
              @close="activeDropdown = null"
            />

            <div
              v-if="activeDropdown === 'resources'"
              class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border-b border-white/8"
            >
              <NuxtLink
                v-for="resource in resources"
                :key="resource.name"
                :to="resource.to"
                class="group/item flex flex-col gap-1.5 p-6 lg:p-8 bg-kura-ink hover:bg-white/[0.03] transition-colors"
                @click="activeDropdown = null"
              >
                <div class="text-[15px] font-medium text-white group-hover/item:text-kura-primary-light transition-colors">
                  {{ resource.name }}
                </div>
                <div class="text-sm text-white/45 line-clamp-2 leading-relaxed">
                  {{ resource.description }}
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </transition>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden fixed inset-0 top-16 bg-kura-background overflow-y-auto z-40"
        >
          <nav class="px-4 py-4 space-y-3">
            <div class="border-b border-kura-border pb-3">
              <button
                type="button"
                class="w-full flex items-center justify-between py-2 text-kura-text font-medium"
                @click="toggleMobileSubmenu('products')"
              >
                <span>Products</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="activeMobileSubmenu === 'products' ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="slide-down">
                <div v-if="activeMobileSubmenu === 'products'" class="pl-2 mt-3 space-y-4">
                  <div v-for="category in mobileProductCategories" :key="category.title">
                    <p class="text-[11px] font-semibold uppercase tracking-widest text-kura-primary mb-2">
                      {{ category.title }}
                    </p>
                    <div class="pl-2 space-y-1">
                      <NuxtLink
                        v-for="link in category.links"
                        :key="link.name"
                        :to="link.to"
                        class="block py-1.5 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                        @click="closeMobile"
                      >
                        {{ link.name }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <div class="border-b border-kura-border pb-3">
              <button
                type="button"
                class="w-full flex items-center justify-between py-2 text-kura-text font-medium"
                @click="toggleMobileSubmenu('resources')"
              >
                <span>Resources</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="activeMobileSubmenu === 'resources' ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="slide-down">
                <div v-if="activeMobileSubmenu === 'resources'" class="pl-4 space-y-2 mt-2">
                  <NuxtLink
                    v-for="resource in resources"
                    :key="resource.name"
                    :to="resource.to"
                    class="block py-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                    @click="closeMobile"
                  >
                    {{ resource.name }}
                  </NuxtLink>
                </div>
              </transition>
            </div>

            <NuxtLink
              to="/about"
              class="block py-2 text-kura-text font-medium border-b border-kura-border pb-3"
              @click="closeMobile"
            >About</NuxtLink>
            <NuxtLink
              to="/pricing"
              class="block py-2 text-kura-text font-medium border-b border-kura-border pb-3"
              @click="closeMobile"
            >Pricing</NuxtLink>

            <div class="pt-4">
              <NuxtLink to="/download" class="block text-center btn-primary w-full" @click="closeMobile">
                Download App
              </NuxtLink>
            </div>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const activeMobileSubmenu = ref<string | null>(null)

const isMenuDark = computed(
  () => !!activeDropdown.value && !isMobileMenuOpen.value,
)

const mobileProductCategories = [
  {
    title: 'Cash & Transfers',
    links: [
      { name: 'Account', to: '/kura-wallet' },
      { name: 'Global Transfers', to: '/kura-wallet' },
    ],
  },
  {
    title: 'Cards & Spending',
    links: [
      { name: 'Kura Card', to: '/kura-card' },
    ],
  },
  {
    title: 'Investing & Earn',
    links: [
      { name: 'Invest', to: '/kura-wallet#discover' },
      { name: 'Earn', to: '/kura-wallet#earn' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { name: 'TrackFi', to: '/trackfi' },
    ],
  },
]

const resources = [
  { name: 'Documentation', description: 'Policies, security docs, and supported regions', to: '/docs' },
  { name: 'Blog', description: 'Latest news and insights', to: '/blog' },
  { name: 'Help Center', description: 'Support and FAQs', to: '/help' },
  { name: 'Community', description: 'Join our community', to: '/community' },
]

function toggleDropdown(menu: string) {
  activeDropdown.value = activeDropdown.value === menu ? null : menu
}

function toggleMobileSubmenu(menu: string) {
  activeMobileSubmenu.value = activeMobileSubmenu.value === menu ? null : menu
}

function closeAll() {
  activeDropdown.value = null
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
}

function closeMobile() {
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
}

function closeDropdowns(e: Event) {
  const target = e.target as HTMLElement
  if (!target.closest('.dropdown-container')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
