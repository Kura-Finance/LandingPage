<template>
  <footer class="relative z-20 border-t border-kura-border bg-kura-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 mb-8 md:mb-12">
        <!-- Brand Section -->
        <div class="space-y-4 col-span-1 md:col-span-2">
          <h3 class="text-xl font-bold text-kura-text flex items-center gap-2">
            <img src="/icon.webp" alt="Kura Logo" width="32" height="32" loading="lazy" decoding="async" class="w-8 h-8" />
            Kura
          </h3>
          <p class="text-sm text-kura-text-secondary leading-relaxed">
            The super financial app — trade crypto and stocks, spend with Kura Card, and track everything in one place. Non-custodial and private by design.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="https://x.com/kurafinance?s=21" target="_blank" rel="noopener noreferrer" class="text-kura-text-secondary hover:text-kura-primary transition-colors">
              <span class="sr-only">X</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://github.com/Kura-Finance" target="_blank" rel="noopener noreferrer" class="text-kura-text-secondary hover:text-kura-primary transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.586 9.586 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div class="space-y-4">
          <h4 class="font-semibold text-kura-text text-sm uppercase tracking-widest">Product</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/kura-wallet" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Kura Wallet</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kura-card" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Kura Card</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/trackfi" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">TrackFi</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div class="space-y-4">
          <h4 class="font-semibold text-kura-text text-sm uppercase tracking-widest">Company</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">About</NuxtLink>
            </li>
            <li>
              <a href="mailto:hello@kura-finance.com" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Contact</a>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Blog</NuxtLink>
            </li>
            <li>
              <a href="#careers" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors cursor-pointer">Careers</a>
            </li>
          </ul>
        </div>

        <!-- Legal & Compliance -->
        <div class="space-y-4">
          <h4 class="font-semibold text-kura-text text-sm uppercase tracking-widest">Legal</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/tos" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Terms of Service</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Privacy Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/disclaimer" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Disclaimer</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/compliance" class="text-sm text-kura-text-secondary hover:text-kura-text transition-colors">Compliance</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-kura-border my-8" />

      <!-- Footer Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p class="text-kura-text-secondary font-mono">© 2026 KURA FINANCE LLC. All rights reserved.</p>
        <div class="flex items-center gap-2 text-kura-text-secondary">
          <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse"></span>
          <span>Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>
