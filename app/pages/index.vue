<script setup lang="ts">
import { nextTick, onMounted } from 'vue'

const {
  public: { siteName, siteDescription }
} = useRuntimeConfig()

useSeoMeta({
  title: siteName,
  description: siteDescription
})

onMounted(async () => {
  await nextTick()

  const container = document.querySelector('.container-fixed')
  const grid = document.querySelector('.grid-row')
  const matt = document.querySelector('.matt')
  const inlineUtilitySection = document.querySelector('[data-debug-inline-utility]')

  // #region agent log
  fetch('http://127.0.0.1:7479/ingest/c3d3a665-ba54-4522-8811-1840f35d7676', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'cdf822'
    },
    body: JSON.stringify({
      sessionId: 'cdf822',
      runId: 'initial',
      hypothesisId: 'H3',
      location: 'app/pages/index.vue:16',
      message: 'DOM targets present for Tailwind apply debug',
      data: {
        containerExists: Boolean(container),
        gridExists: Boolean(grid),
        mattExists: Boolean(matt),
        containerClass: container?.getAttribute('class'),
        gridClass: grid?.getAttribute('class'),
        mattClass: matt?.getAttribute('class')
      },
      timestamp: Date.now()
    })
  }).catch(() => {})
  // #endregion

  const bodyStyle = window.getComputedStyle(document.body)

  // #region agent log
  fetch('http://127.0.0.1:7479/ingest/c3d3a665-ba54-4522-8811-1840f35d7676', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'cdf822'
    },
    body: JSON.stringify({
      sessionId: 'cdf822',
      runId: 'initial',
      hypothesisId: 'H1',
      location: 'app/pages/index.vue:37',
      message: 'Global SCSS computed styles',
      data: {
        bodyMarginTop: bodyStyle.marginTop,
        bodyColor: bodyStyle.color,
        bodyBackgroundImage: bodyStyle.backgroundImage,
        bodyFontFamily: bodyStyle.fontFamily
      },
      timestamp: Date.now()
    })
  }).catch(() => {})
  // #endregion

  const mattStyle = matt ? window.getComputedStyle(matt) : null
  const gridStyle = grid ? window.getComputedStyle(grid) : null
  const containerStyle = container ? window.getComputedStyle(container) : null
  const inlineUtilityStyle = inlineUtilitySection
    ? window.getComputedStyle(inlineUtilitySection)
    : null
  const emittedRuleDetails = Array.from(document.styleSheets).flatMap((sheet) => {
    try {
      return Array.from(sheet.cssRules)
        .filter((rule): rule is CSSStyleRule => 'selectorText' in rule)
        .filter((rule) =>
          ['.matt', '.grid-row', '.container-fixed'].some((target) =>
            String(rule.selectorText || '').includes(target)
          )
        )
        .map((rule) => ({
          selector: rule.selectorText,
          cssText: rule.cssText
        }))
    } catch {
      return []
    }
  })
  const emittedSelectors = Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) =>
          'selectorText' in rule ? String(rule.selectorText || '') : ''
        )
      } catch {
        return []
      }
    })
    .filter(Boolean)
    .filter((selector) =>
      ['.matt', '.grid-row', '.container-fixed'].some((target) => selector.includes(target))
    )

  // #region agent log
  fetch('http://127.0.0.1:7479/ingest/c3d3a665-ba54-4522-8811-1840f35d7676', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'cdf822'
    },
    body: JSON.stringify({
      sessionId: 'cdf822',
      runId: 'initial',
      hypothesisId: 'H1-H2-H4',
      location: 'app/pages/index.vue:74',
      message: 'Tailwind apply rule emission and computed result',
      data: {
        emittedSelectors,
        mattBackgroundColor: mattStyle?.backgroundColor,
        mattPaddingTop: mattStyle?.paddingTop,
        gridDisplay: gridStyle?.display,
        gridTemplateColumns: gridStyle?.gridTemplateColumns,
        containerMaxWidth: containerStyle?.maxWidth,
        containerBorderTopWidth: containerStyle?.borderTopWidth,
        containerPaddingLeft: containerStyle?.paddingLeft,
        inlineUtilityMaxWidth: inlineUtilityStyle?.maxWidth,
        inlineUtilityDisplay: inlineUtilityStyle?.display,
        inlineUtilityRuleDetails: emittedRuleDetails
      },
      timestamp: Date.now()
    })
  }).catch(() => {})
  // #endregion
})
</script>

<template>
  <main>
    <div class="container-fixed">
      <div class="grid-row">
        <div class="col-span-12">

          <div class="matt">
            Hello world
          </div>

      <section data-debug-inline-utility class="max-w-3xl space-y-6">
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
