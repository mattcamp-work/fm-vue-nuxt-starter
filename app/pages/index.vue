<template>
  <main>
    <div class="container-fixed">
      <div class="grid-row">
        <div class="col-span-12 flex flex-col gap-6">


      <section class="flex flex-col gap-6">
        <span
          class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200"
        >
          Nuxt 4 starter
        </span>

        <h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          {{ siteName }}
        </h1>

        <p class="max-w-2xl text-lg leading-8 text-slate-300">
          {{ siteDescription }}
        </p>

        <div class="flex flex-wrap gap-3">
          <Button label="PrimeVue ready" icon="pi pi-check" />
          <Button
            label="Tailwind ready"
            icon="pi pi-sparkles"
            severity="secondary"
            variant="outlined"
          />
        </div>
      </section>

      <section class="grid gap-4 md:grid-cols-3">
        <Card>
          <template #title>SEO metadata sdfsd</template>
          <template #content>
            Baseline Open Graph, Twitter, theme color, favicon, and social card defaults are
            configured in the Nuxt app head.
          </template>
        </Card>

        <Card>
          <template #title>Global styles</template>
          <template #content>
            Tailwind CSS loads globally, and SCSS is available for shared variables, resets, and
            app-level styling.
          </template>
        </Card>

        <Card>
          <template #title>PrimeVue module</template>
          <template #content>
            The Nuxt module auto-imports components and ships with the Aura preset so new screens
            look polished immediately.
          </template>
        </Card>
      </section>
    
        
        </div>
      </div>

    </div>
  </main>
</template>



<script lang="ts">
import { defineNuxtComponent, useRuntimeConfig } from '#imports'

export default defineNuxtComponent({
  data() {
    const _runtimeConfig = useRuntimeConfig()

    return {
      siteName: _runtimeConfig.public.siteName,
      siteDescription: _runtimeConfig.public.siteDescription
    }
  },
  head() {
    return {
      title: this.siteName,
      meta: [
        {
          name: 'description',
          content: this.siteDescription
        }
      ]
    }
  }
})
</script>
