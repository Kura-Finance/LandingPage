<script setup lang="ts">
import { brandIconUrl } from '~/utils/brand'
</script>

<template>
  <footer class="relative z-20 bg-kura-ink text-white border-t border-kura-border-dark">
    <div class="marketing-container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 mb-8 md:mb-12">
        <div class="space-y-4 col-span-1 md:col-span-2">
          <h3 class="text-xl font-bold flex items-center gap-2">
            <img :src="brandIconUrl" alt="Kura Logo" width="32" height="32" loading="lazy" decoding="async" class="w-8 h-8" />
            Kura
          </h3>
          <p class="text-sm text-kura-ink-subtle leading-relaxed max-w-sm">
            One account to save, spend, invest, earn, and move money globally — private, secure, and beautifully designed.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="https://x.com/kurafinance?s=21" target="_blank" rel="noopener noreferrer" class="text-kura-ink-subtle hover:text-white transition-colors">
              <span class="sr-only">X</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">Product</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/account" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Account</NuxtLink></li>
            <li><NuxtLink to="/kura-card" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Kura Card</NuxtLink></li>
            <li><NuxtLink to="/trackfi" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">TrackFi</NuxtLink></li>
            <li><NuxtLink to="/business" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Business &amp; Team</NuxtLink></li>
            <li><NuxtLink to="/compare" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Compare</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Pricing</NuxtLink></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">Company</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/investors" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Investors</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Blog</NuxtLink></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-sm uppercase tracking-widest text-kura-ink-muted">Legal</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/docs" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Documentation</NuxtLink></li>
            <li><NuxtLink to="/tos" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/disclaimer" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Risk Disclosure</NuxtLink></li>
            <li><NuxtLink to="/referral-terms" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Referral Terms</NuxtLink></li>
            <li><NuxtLink to="/prohibited-activities" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Prohibited Activities</NuxtLink></li>
            <li><NuxtLink to="/compliance" class="text-sm text-kura-ink-subtle hover:text-white transition-colors">Compliance</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-kura-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p class="text-kura-ink-subtle font-mono">© 2026 KURA FINANCE LLC. All rights reserved.</p>
        <div class="flex items-center gap-2 text-kura-ink-subtle">
          <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
          <span>Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>
