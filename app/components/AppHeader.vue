<script setup lang="ts">
const {
  public: { siteName }
} = useRuntimeConfig()
</script>

<template>
  <header class="border-b border-white/10 bg-slate-950/70 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-white">
        {{ siteName }}
      </NuxtLink>

      <nav aria-label="Primary" class="flex items-center gap-5 text-sm text-slate-300">
        <NuxtLink to="/" class="transition hover:text-white">
          Home
        </NuxtLink>
        <a
          href="https://nuxt.com/docs"
          target="_blank"
          rel="noreferrer"
          class="transition hover:text-white"
        >
          Docs
        </a>
      </nav>
    </div>
  </header>
</template>
