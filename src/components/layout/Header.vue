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
              :src="isMenuDark ? brandIconOnDarkUrl : brandIconUrl"
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

          <div class="relative h-full flex items-center">
            <button
              type="button"
              @click.prevent.stop="toggleDropdown('about')"
              class="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm transition-colors"
              :class="
                activeDropdown === 'about'
                  ? isMenuDark
                    ? 'bg-kura-primary/25 text-white'
                    : 'bg-kura-primary/10 text-kura-primary'
                  : isMenuDark
                    ? 'text-white/60 hover:text-white'
                    : 'text-kura-text-secondary hover:text-kura-primary'
              "
            >
              About
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200 opacity-60"
                :class="activeDropdown === 'about' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <NuxtLink
            to="/pricing"
            class="px-3 py-2 text-sm transition-colors"
            :class="isMenuDark ? 'text-white/60 hover:text-white' : 'text-kura-text-secondary hover:text-kura-primary'"
            @click="closeAll"
          >Pricing</NuxtLink>
        </nav>

        <div class="flex items-center justify-end gap-2 sm:gap-3 flex-shrink-0">
          <NuxtLink
            to="/download"
            class="hidden md:inline-flex header-cta"
            @click="closeAll"
          >
            Get Account
          </NuxtLink>

          <button
            type="button"
            @click.stop="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg transition-colors"
            :class="isMenuDark ? 'text-white hover:bg-white/10' : 'text-kura-text hover:bg-kura-surface'"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
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
          class="hidden md:block absolute top-full left-0 w-full overflow-hidden border-t"
          :class="
            activeDropdown === 'products'
              ? 'bg-kura-ink border-white/8'
              : 'bg-kura-background border-kura-border shadow-sm'
          "
        >
          <div class="marketing-container py-0">
            <ProductsMegaMenu
              v-if="activeDropdown === 'products'"
              @close="activeDropdown = null"
            />

            <ResourcesMegaMenu
              v-if="activeDropdown === 'resources'"
              @close="activeDropdown = null"
            />

            <AboutMegaMenu
              v-if="activeDropdown === 'about'"
              @close="activeDropdown = null"
            />
          </div>
        </div>
      </transition>
    </div>

    <Teleport to="body">
      <transition name="slide-down">
        <div
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          class="mobile-menu-panel md:hidden fixed inset-0 top-16 bg-kura-background overflow-y-auto z-[49]"
        >
          <nav class="marketing-container px-5 sm:px-8 py-4 space-y-3">
            <div class="border-b border-kura-border pb-3">
              <button
                type="button"
                class="w-full flex items-center justify-between py-2 text-kura-text font-medium"
                @click.stop="toggleMobileSubmenu('products')"
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
                @click.stop="toggleMobileSubmenu('resources')"
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
                <div v-if="activeMobileSubmenu === 'resources'" class="pl-2 mt-3 space-y-4">
                  <div v-for="column in mobileResourceColumns" :key="column.title">
                    <p class="text-[11px] font-semibold uppercase tracking-widest text-kura-primary mb-2">
                      {{ column.title }}
                    </p>
                    <div class="pl-2 space-y-1">
                      <NuxtLink
                        v-for="link in column.links"
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
                @click.stop="toggleMobileSubmenu('about')"
              >
                <span>About</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="activeMobileSubmenu === 'about' ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="slide-down">
                <div v-if="activeMobileSubmenu === 'about'" class="pl-2 mt-3 space-y-4">
                  <NuxtLink
                    to="/about"
                    class="block py-1.5 text-sm font-medium text-kura-text hover:text-kura-primary transition-colors"
                    @click="closeMobile"
                  >
                    Our story
                  </NuxtLink>
                  <div v-for="column in mobileAboutColumns" :key="column.label">
                    <p class="text-[11px] font-semibold uppercase tracking-widest text-kura-primary mb-2">
                      {{ column.label }}
                    </p>
                    <div class="pl-2 space-y-1">
                      <NuxtLink
                        v-for="link in column.links"
                        :key="link.name"
                        :to="link.to"
                        class="block py-1.5 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                        @click="closeMobile"
                      >
                        {{ link.name }}
                      </NuxtLink>
                    </div>
                  </div>
                  <NuxtLink
                    to="/contact"
                    class="block py-1.5 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                    @click="closeMobile"
                  >
                    Contact us
                  </NuxtLink>
                </div>
              </transition>
            </div>

            <NuxtLink
              to="/pricing"
              class="block py-2 text-kura-text font-medium border-b border-kura-border pb-3"
              @click="closeMobile"
            >Pricing</NuxtLink>

            <div class="pt-4">
              <NuxtLink to="/download" class="header-cta header-cta--mobile" @click="closeMobile">
                Get Account
              </NuxtLink>
            </div>
          </nav>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { brandIconOnDarkUrl, brandIconUrl } from '~/utils/brand'
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const activeMobileSubmenu = ref<string | null>(null)

const isMenuDark = computed(
  () => activeDropdown.value === 'products' && !isMobileMenuOpen.value,
)

const mobileProductCategories = [
  {
    title: 'Cash & Transfers',
    links: [
      { name: 'Account', to: '/account' },
      { name: 'Global Transfers', to: '/global-transfers' },
      { name: 'Multi-Currency', to: '/multi-currency' },
    ],
  },
  {
    title: 'Cards & Spending',
    links: [
      { name: 'Kura Card', to: '/kura-card' },
      { name: 'Join Waitlist', to: '/card-waitlist' },
    ],
  },
  {
    title: 'Investing & Earn',
    links: [
      { name: 'Invest', to: '/invest' },
      { name: 'US Stocks', to: '/us-stocks' },
      { name: 'Earn', to: '/earn' },
      { name: 'Borrow', to: '/borrow' },
    ],
  },
  {
    title: 'Portfolio & Business',
    links: [
      { name: 'TrackFi', to: '/trackfi' },
      { name: 'Connected Accounts', to: '/connected-accounts' },
      { name: 'Net Worth', to: '/net-worth' },
      { name: 'Business & Team', to: '/business' },
    ],
  },
]

const mobileResourceColumns = [
  {
    title: 'Blog',
    links: [
      { name: 'All posts', to: '/blog' },
      { name: 'Product updates', to: '/blog/product-updates' },
      { name: 'Company news', to: '/blog/company-news' },
    ],
  },
  {
    title: 'Documentation',
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
    links: [
      { name: 'Help center', to: '/help' },
      { name: 'Community', to: '/community' },
      { name: 'Contact us', to: '/contact' },
      { name: 'Investors', to: '/investors' },
    ],
  },
]

const mobileAboutColumns = [
  {
    label: 'Connect',
    links: [
      { name: 'Community', to: '/community' },
      { name: 'Blog', to: '/blog' },
    ],
  },
  {
    label: 'Company',
    links: [
      { name: 'Compliance', to: '/compliance' },
    ],
  },
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    activeMobileSubmenu.value = null
  }
}

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
  unlockBodyScroll()
}

function closeMobile() {
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
  unlockBodyScroll()
}

function lockBodyScroll() {
  if (import.meta.client) document.body.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  if (import.meta.client) document.body.style.overflow = ''
}

function closeDropdowns(e: Event) {
  const target = e.target as HTMLElement
  if (target.closest('.dropdown-container') || target.closest('.mobile-menu-panel')) {
    return
  }
  activeDropdown.value = null
  if (isMobileMenuOpen.value) {
    closeMobile()
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdowns)
  unlockBodyScroll()
})

watch(isMobileMenuOpen, (open) => {
  if (open) lockBodyScroll()
  else unlockBodyScroll()
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

.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  background: #7c5cfc;
  color: #fff;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgb(124 92 252 / 0.2);
  transition: background-color 0.15s ease;
}

.header-cta:hover {
  background: #6b4de0;
}

.header-cta--mobile {
  display: flex;
  width: 100%;
  padding: 0.85rem 1rem;
}
</style>
