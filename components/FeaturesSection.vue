<template>
  <section id="features" class="w-full bg-kura-background py-20 md:py-32 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 md:mb-20">
        <h2 class="text-4xl md:text-5xl font-black mb-4 text-kura-text">
          Everything You Need in One App
        </h2>
        <p class="text-lg md:text-xl text-kura-text-secondary max-w-2xl mx-auto">
          From trading and spending to tracking your full financial picture — Kura brings it all together.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <NuxtLink to="/kura-wallet" class="group relative block">
          <div class="absolute inset-0 bg-gradient-to-r from-kura-primary/10 to-kura-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="relative bg-gradient-to-br from-kura-background-light to-transparent border border-kura-border rounded-2xl p-8 hover:border-kura-primary/30 transition-all duration-300 h-full">
            <div class="w-12 h-12 rounded-lg bg-kura-primary/20 flex items-center justify-center mb-6 group-hover:bg-kura-primary/30 transition-colors text-2xl">
              ₿
            </div>
            <h3 class="text-2xl font-bold text-kura-text mb-4 group-hover:text-kura-primary transition-colors">Trade Crypto</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">
              Buy, sell, swap, and bridge tokens on Base with your self-custody smart wallet. Full control, no custody handoff.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink to="/kura-wallet" class="group relative block">
          <div class="absolute inset-0 bg-gradient-to-r from-kura-secondary/10 to-kura-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="relative bg-gradient-to-br from-kura-background-light to-transparent border border-kura-border rounded-2xl p-8 hover:border-kura-secondary/30 transition-all duration-300 h-full">
            <div class="w-12 h-12 rounded-lg bg-kura-secondary/20 flex items-center justify-center mb-6 group-hover:bg-kura-secondary/30 transition-colors text-2xl">
              📈
            </div>
            <h3 class="text-2xl font-bold text-kura-text mb-4 group-hover:text-kura-primary transition-colors">RWA & US Stocks</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">
              Access tokenized real-world assets and US equities from your wallet. Self-custody trading with on-chain settlement.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink to="/kura-card" class="group relative block">
          <div class="absolute inset-0 bg-gradient-to-r from-kura-accent/10 to-kura-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="relative bg-gradient-to-br from-kura-background-light to-transparent border border-kura-border rounded-2xl p-8 hover:border-kura-accent/30 transition-all duration-300 h-full">
            <div class="w-12 h-12 rounded-lg bg-kura-accent/20 flex items-center justify-center mb-6 group-hover:bg-kura-accent/30 transition-colors text-2xl">
              💳
            </div>
            <h3 class="text-2xl font-bold text-kura-text mb-4 group-hover:text-kura-primary transition-colors">Kura Card</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">
              Spend USDC anywhere Visa is accepted. A non-custodial debit card backed by your smart wallet — online, worldwide.
            </p>
          </div>
        </NuxtLink>

        <NuxtLink to="/trackfi" class="group relative block">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="relative bg-gradient-to-br from-kura-background-light to-transparent border border-kura-border rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 h-full">
            <div class="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors text-2xl">
              📊
            </div>
            <h3 class="text-2xl font-bold text-kura-text mb-4 group-hover:text-kura-primary transition-colors">TrackFi</h3>
            <p class="text-kura-text-secondary leading-relaxed text-sm">
              Track all your finances in one place — banking, brokerage, and on-chain accounts with passkey-encrypted privacy.
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
