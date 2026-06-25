<template>
  <header
    class="fixed top-0 w-full z-50 transition-colors duration-300 dropdown-container"
    :class="
      isDarkNav
        ? 'bg-transparent border-b border-transparent'
        : isScrolled || activeDropdown || isMobileMenuOpen
          ? 'bg-white border-b border-kura-border shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-kura-border/60'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo (Left) -->
        <div class="flex-shrink-0 flex items-center md:w-[200px]">
          <NuxtLink to="/" class="flex items-center gap-2 group w-fit">
            <img
              src="/icon.webp"
              alt="Kura Logo"
              width="40"
              height="40"
              fetchpriority="high"
              decoding="async"
              class="w-10 h-10"
            />
            <span
              class="hidden sm:inline font-bold text-xl transition-colors"
              :class="isDarkNav ? 'text-white group-hover:text-white/80' : 'text-kura-text group-hover:text-kura-primary'"
              >Kura</span
            >
          </NuxtLink>
        </div>

        <!-- Desktop Navigation (Center) -->
        <nav
          class="hidden md:flex items-center gap-2 flex-1 justify-center h-full"
        >
          <!-- Products Button -->
          <div class="relative h-full flex items-center group">
            <button
              @click.prevent.stop="toggleDropdown('products')"
              class="flex items-center gap-1 rounded-lg px-3 py-2 transition-colors duration-200 text-sm font-medium"
              :class="
                isDarkNav
                  ? activeDropdown === 'products'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  : activeDropdown === 'products'
                    ? 'bg-kura-surface text-kura-text'
                    : 'text-kura-text-secondary hover:text-kura-text hover:bg-kura-surface'
              "
            >
              Products
              <svg
                class="w-4 h-4 transition-transform duration-300"
                :class="[
                  activeDropdown === 'products' ? 'rotate-180' : '',
                  isDarkNav ? 'text-white/70' : 'text-kura-text-secondary group-hover:text-kura-text',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Resources Button -->
          <div class="relative h-full flex items-center group">
            <button
              @click.prevent.stop="toggleDropdown('resources')"
              class="flex items-center gap-1 rounded-lg px-3 py-2 transition-colors duration-200 text-sm font-medium"
              :class="
                isDarkNav
                  ? activeDropdown === 'resources'
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  : activeDropdown === 'resources'
                    ? 'bg-kura-surface text-kura-text'
                    : 'text-kura-text-secondary hover:text-kura-text hover:bg-kura-surface'
              "
            >
              Resources
              <svg
                class="w-4 h-4 transition-transform duration-300"
                :class="[
                  activeDropdown === 'resources' ? 'rotate-180' : '',
                  isDarkNav ? 'text-white/70' : 'text-kura-text-secondary group-hover:text-kura-text',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>

          <NuxtLink
            to="/about"
            class="rounded-lg px-3 py-2 transition-colors duration-200 text-sm font-medium"
            :class="isDarkNav ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-kura-text-secondary hover:text-kura-text hover:bg-kura-surface'"
            >About</NuxtLink
          >
          <NuxtLink
            to="/pricing"
            class="rounded-lg px-3 py-2 transition-colors duration-200 text-sm font-medium"
            :class="isDarkNav ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-kura-text-secondary hover:text-kura-text hover:bg-kura-surface'"
            >Pricing</NuxtLink
          >
          <NuxtLink
            to="/business"
            class="rounded-lg px-3 py-2 transition-colors duration-200 text-sm font-medium hidden lg:inline-flex"
            :class="isDarkNav ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-kura-text-secondary hover:text-kura-text hover:bg-kura-surface'"
            >Business</NuxtLink
          >
        </nav>

        <!-- Right Actions (Right) -->
        <div
          class="flex items-center justify-end gap-3 md:gap-4 md:w-[200px] flex-shrink-0"
        >
          <!-- CTA Button -->
          <NuxtLink
            to="/download"
            class="px-4 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200"
            :class="isDarkNav ? 'bg-white text-kura-ink hover:bg-white/90' : 'btn-primary !py-2 md:!py-2.5 !px-4 md:!px-5'"
          >
            Download App
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg transition-colors"
            :class="isDarkNav ? 'text-white hover:bg-white/10' : 'text-kura-text hover:bg-kura-surface'"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mega Menu (Desktop) -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2 pointer-events-none"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2 pointer-events-none"
      >
        <div
          v-show="activeDropdown && !isMobileMenuOpen"
          class="hidden md:block absolute top-full left-0 w-full bg-white border-t border-kura-border shadow-lg overflow-hidden"
        >
          <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[180px]"
          >
            <!-- Products Menu -->
            <div
              v-show="activeDropdown === 'products'"
              class="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <NuxtLink
                v-for="product in products"
                :key="product.name"
                :to="product.to"
                class="group/item flex flex-col gap-2 p-4 rounded-xl hover:bg-kura-surface transition-colors border border-transparent hover:border-kura-border"
                @click="activeDropdown = null"
              >
                <div
                  class="text-base font-semibold text-kura-text group-hover/item:text-kura-primary transition-colors"
                >
                  {{ product.name }}
                </div>
                <div class="text-sm text-kura-text-secondary line-clamp-2">
                  {{ product.description }}
                </div>
              </NuxtLink>
            </div>

            <!-- Resources Menu -->
            <div
              v-show="activeDropdown === 'resources'"
              class="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <NuxtLink
                v-for="resource in resources"
                :key="resource.name"
                :to="resource.to"
                class="group/item flex flex-col gap-2 p-4 rounded-xl hover:bg-kura-surface transition-colors border border-transparent hover:border-kura-border"
                @click="activeDropdown = null"
              >
                <div
                  class="text-base font-semibold text-kura-text group-hover/item:text-kura-primary transition-colors"
                >
                  {{ resource.name }}
                </div>
                <div class="text-sm text-kura-text-secondary line-clamp-2">
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
          class="md:hidden fixed inset-0 top-16 bg-white overflow-y-auto z-40"
        >
          <nav class="px-4 py-4 space-y-3">
            <!-- Products Mobile -->
            <div class="border-b border-kura-border pb-3">
              <button
                @click="toggleMobileSubmenu('products')"
                class="w-full flex items-center justify-between py-2 text-kura-text font-medium hover:text-kura-primary transition-colors"
              >
                <span>Products</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="
                    activeMobileSubmenu === 'products' ? 'rotate-180' : ''
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <transition name="slide-down">
                <div
                  v-if="activeMobileSubmenu === 'products'"
                  class="pl-4 space-y-2 mt-2"
                >
                  <NuxtLink
                    v-for="product in products"
                    :key="product.name"
                    :to="product.to"
                    @click="
                      isMobileMenuOpen = false;
                      activeMobileSubmenu = null;
                    "
                    class="block py-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                  >
                    {{ product.name }}
                  </NuxtLink>
                </div>
              </transition>
            </div>

            <!-- Resources Mobile -->
            <div class="border-b border-kura-border pb-3">
              <button
                @click="toggleMobileSubmenu('resources')"
                class="w-full flex items-center justify-between py-2 text-kura-text font-medium hover:text-kura-primary transition-colors"
              >
                <span>Resources</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="
                    activeMobileSubmenu === 'resources' ? 'rotate-180' : ''
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <transition name="slide-down">
                <div
                  v-if="activeMobileSubmenu === 'resources'"
                  class="pl-4 space-y-2 mt-2"
                >
                  <NuxtLink
                    v-for="resource in resources"
                    :key="resource.name"
                    :to="resource.to"
                    @click="
                      isMobileMenuOpen = false;
                      activeMobileSubmenu = null;
                    "
                    class="block py-2 text-sm text-kura-text-secondary hover:text-kura-primary transition-colors"
                  >
                    {{ resource.name }}
                  </NuxtLink>
                </div>
              </transition>
            </div>

            <!-- Other Links -->
            <NuxtLink
              to="/about"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-kura-text font-medium hover:text-kura-primary transition-colors border-b border-kura-border pb-3"
              >About</NuxtLink
            >
            <NuxtLink
              to="/pricing"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-kura-text font-medium hover:text-kura-primary transition-colors border-b border-kura-border pb-3"
              >Pricing</NuxtLink
            >
            <NuxtLink
              to="/business"
              @click="isMobileMenuOpen = false"
              class="block py-2 text-kura-text font-medium hover:text-kura-primary transition-colors border-b border-kura-border pb-3"
              >Business</NuxtLink
            >

            <div class="pt-4">
              <NuxtLink
                to="/download"
                @click="isMobileMenuOpen = false"
                class="block text-center btn-primary w-full"
              >
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
import { ref, computed, onMounted, onUnmounted } from "vue";

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const activeMobileSubmenu = ref<string | null>(null);

const isDarkNav = computed(
  () =>
    route.path === "/" &&
    !isScrolled.value &&
    !activeDropdown.value &&
    !isMobileMenuOpen.value,
);

const products = [
  {
    name: 'Kura Wallet',
    description: 'Safe smart account on Base with MPC signing, swaps, bridges, and fiat ramps.',
    to: '/kura-wallet',
  },
  {
    name: 'Discover & Earn',
    description: 'Trade crypto, US stocks via Dinari, and earn yield with Morpho vaults on Base.',
    to: '/kura-wallet#discover',
  },
  {
    name: 'Kura Card',
    description: 'Spend USDC with a non-custodial Visa debit card — join the waitlist in-app.',
    to: '/kura-card',
  },
  {
    name: 'TrackFi',
    description: 'Connect banks, CEX accounts, and on-chain wallets in one zero access encrypted dashboard.',
    to: '/trackfi',
  },
  {
    name: 'Kura Business',
    description: 'Treasury and team wallet flows for startups bridging tradFi and on-chain finance.',
    to: '/business',
  },
];

const resources = [
  {
    name: 'Documentation',
    description: 'Policies, security docs, and supported regions',
    to: '/docs',
  },
  {
    name: 'Blog',
    description: 'Latest news and insights',
    to: '/blog',
  },
  {
    name: 'Help Center',
    description: 'Support and FAQs',
    to: '/help',
  },
  {
    name: 'Community',
    description: 'Join our community',
    to: '/community',
  },
];

const toggleDropdown = (menu: string) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};

const toggleMobileSubmenu = (menu: string) => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === menu ? null : menu;
};

const closeDropdowns = (e: Event) => {
  const target = e.target as HTMLElement;
  if (!target.closest(".dropdown-container")) {
    activeDropdown.value = null;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("click", closeDropdowns);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", closeDropdowns);
});

let scrollTicking = false;
const handleScroll = () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 10;
    scrollTicking = false;
  });
};
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
