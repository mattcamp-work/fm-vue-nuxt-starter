<script setup lang="ts">
const {
  public: { siteName }
} = useRuntimeConfig()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-c-whisper bg-slate-100">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>&copy; {{ year }} {{ siteName }}</p>
      <p>Built with Nuxt, Tailwind CSS, PrimeVue, and Pinia.</p>
    </div>
  </footer>
</template>
