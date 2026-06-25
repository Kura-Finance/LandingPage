<template>
  <section class="relative bg-kura-ink text-white overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.35),transparent)]" />

    <div class="relative marketing-container pt-28 pb-16 md:pt-36 md:pb-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="max-w-xl">
          <p class="section-label text-kura-primary-light mb-5">Fintech for the on-chain era</p>

          <h1 class="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] mb-6">
            One app to manage all your finances, from tradFi to crypto.
          </h1>

          <p class="text-lg text-kura-ink-subtle leading-relaxed mb-8 max-w-lg">
            Trade crypto and US stocks, earn yield, spend with Kura Card, and track every account — in a self-custody super app built for founders and builders.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 mb-10">
            <NuxtLink to="/download" class="btn-primary">
              Download App
            </NuxtLink>
            <NuxtLink to="#products" class="btn-ghost-light">
              Explore products
            </NuxtLink>
          </div>

          <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-kura-ink-muted">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-kura-accent shrink-0" />
              Non-custodial MPC wallet
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-kura-accent shrink-0" />
              US stocks via Dinari
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-kura-accent shrink-0" />
              Morpho Earn on Base
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-kura-accent shrink-0" />
              Passkey-protected zero access encryption
            </li>
          </ul>
        </div>

        <div class="relative lg:pl-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-soft backdrop-blur-sm">
            <NuxtImg
              src="/Unified-finance-dashboard.webp"
              alt="Kura app dashboard showing portfolio, card, and TrackFi"
              width="1448"
              height="1086"
              fetchpriority="high"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 560px"
              class="w-full rounded-xl"
            />
          </div>
          <div class="absolute -bottom-4 -left-2 sm:left-4 card-surface px-4 py-3 shadow-card hidden sm:flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
            <span class="text-sm font-medium text-kura-text">Self-custody · Zero server access to keys</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
