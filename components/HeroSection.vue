<template>
  <section class="relative min-h-screen w-full bg-kura-background overflow-hidden flex items-center justify-center pt-20">
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-kura-primary/30 bg-kura-primary/10">
        <span class="w-2 h-2 rounded-full bg-kura-accent animate-pulse" />
        <span class="text-sm font-semibold text-kura-primary">Wallet · Card · Trading · Tracking</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
        <span class="text-kura-text">The</span><br />
        <span class="bg-gradient-to-r from-kura-primary via-kura-secondary to-kura-accent bg-clip-text text-transparent">
          Super Financial App
        </span>
      </h1>

      <p class="text-lg md:text-2xl text-kura-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed font-light">
        Trade crypto, RWA, and US stocks. Spend anywhere with Kura Card. Track your entire financial life — all in one self-custody app, all private by design.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <NuxtLink to="/download" class="px-8 py-4 bg-gradient-to-r from-kura-primary to-kura-secondary rounded-lg font-bold text-white hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
          Download App
        </NuxtLink>
        <NuxtLink to="#features" class="px-8 py-4 border-2 border-kura-primary/50 rounded-lg font-bold text-kura-primary hover:bg-kura-primary/10 hover:border-kura-primary transition-all duration-300 w-full sm:w-auto text-center">
          Explore Features
        </NuxtLink>
      </div>

      <div class="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center text-sm text-kura-text-secondary">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-kura-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Trade Crypto</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-kura-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>RWA & US Stocks</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-kura-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Kura Card</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-kura-accent" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Track All Finances</span>
        </div>
      </div>
    </div>
  </section>
</template>
