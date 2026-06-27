<template>
  <div class="flex flex-col flex-grow">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <LazyFooter />
  </div>
</template>
