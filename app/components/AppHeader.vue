
<template>
  <header class="border-b border-c-whisper bg-slate-100 ">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-c-strong">
        {{ siteName }}
      </NuxtLink>

      <nav aria-label="Primary" class="flex items-center gap-5 text-sm text-c-medium">
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


<script setup lang="ts">
const {
  public: { siteName }
} = useRuntimeConfig()
</script>

