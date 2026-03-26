<script setup lang="ts">
const {
  public: { siteName }
} = useRuntimeConfig()

const route = useRoute()

const navigation = [
  { label: 'Dashboard', to: '/' },
  { label: 'Nuxt Docs', href: 'https://nuxt.com/docs' }
]
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />

    <div class="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-8 lg:flex-row">
      <aside class="w-full lg:max-w-xs">
        <div class="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Logged in area
            </p>

            <div class="flex items-center gap-3">
              <Avatar label="MC" shape="circle" />

              <div>
                <p class="font-medium text-white">{{ siteName }}</p>
                <p class="text-sm text-slate-400">Authenticated app shell</p>
              </div>
            </div>
          </div>

          <nav aria-label="Logged in navigation" class="space-y-2">
            <NuxtLink
              v-for="item in navigation.filter((item) => 'to' in item)"
              :key="item.label"
              :to="item.to"
              class="block rounded-xl border px-4 py-3 text-sm transition"
              :class="
                route.path === item.to
                  ? 'border-indigo-400/40 bg-indigo-500/15 text-white'
                  : 'border-white/10 bg-slate-950/40 text-slate-300 hover:border-white/20 hover:text-white'
              "
            >
              {{ item.label }}
            </NuxtLink>

            <a
              v-for="item in navigation.filter((item) => 'href' in item)"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noreferrer"
              class="block rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>
      </aside>

      <main class="min-w-0 flex-1">
        <div class="rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-sm sm:p-8">
          <slot />
        </div>
      </main>
    </div>

    <AppFooter />
  </div>
</template>
