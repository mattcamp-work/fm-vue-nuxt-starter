# Friendly Mammoth App Starter Stack

A practical Nuxt 4 starter for building apps without spending your first hour wiring the same stuff together again.

It gives you a solid default stack, a predictable project shape, and a coding-guidelines file that helps both humans and AI move faster with fewer weird decisions.

## What You Get

- Nuxt 4 with TypeScript strict mode enabled
- Tailwind CSS 3: it just works
- PrimeVue 4 with the Aura preset and auto-imported components
- Pinia already registered
- Nuxt Image ready to go
- global SCSS support
- baseline SEO, Open Graph, and Twitter metadata
- starter favicon and social card assets
- useful utility libraries already installed:
  `lodash`, `dayjs`, `numeral`, `colorjs.io`, and `@vueuse/core`
- Vercel Edge Nitro preset configured in `nuxt.config.ts`

## Why This Starter Exists

The goal is simple: reduce setup friction.

Instead of re-deciding layout patterns, styling approach, metadata defaults, and component conventions on every project, this starter gives you a clean baseline so you can start building product features right away.

## Quick Start

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Build Commands

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Generate a static build:

```bash
npm run generate
```

## Environment Variables

Set your app metadata in `.env`:

```bash
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=Friendly Mammoth App Starter Stack
NUXT_PUBLIC_SITE_DESCRIPTION=A practical Nuxt 4 starter with Tailwind 3, PrimeVue, Pinia, SCSS, and baseline SEO defaults.
NUXT_PUBLIC_SOCIAL_IMAGE=/social-card.svg
```

These values are exposed through `runtimeConfig.public` and are used for page metadata and social sharing defaults.

## Coding Guidelines Save Time

This project includes a `CODING_GUIDELINES.md` file on purpose.

It is there to reduce back-and-forth, not create process overhead.

The guidelines help by:

- making component and styling decisions more consistent
- giving AI assistants a clearer default way to write code in this repo
- reducing unnecessary rewrites during review
- keeping layout, Tailwind, TypeScript, and Nuxt patterns predictable

Highlights from the guidelines:

- prefer simple, readable code
- default to the Vue Options API for standard components
- use Tailwind first for layout and styling
- keep UI components simple and move shaping logic into utilities
- use the existing approved libraries when they solve the problem cleanly
- follow Nuxt 4 conventions instead of borrowing patterns from other frameworks

If you are working with AI in this repo, the guidelines are especially useful because they cut down on speculative architecture and help the generated code feel like it belongs here.

## Tailwind 3

Tailwind CSS `3.4.x` is already installed and configured through `@nuxtjs/tailwindcss`.

That means:

- utility classes are available immediately
- you can use Tailwind in pages, layouts, and components without extra setup
- global styling is already loaded through `app/assets/scss/main.scss`
- if class strings get repetitive, this repo prefers moving repeated patterns into local component styles with `@apply`

In short: Tailwind 3 just works.

## Everything Else

Here is the rest of the stack that is already wired in:

### PrimeVue

- provided by `@primevue/nuxt-module`
- components are auto-imported
- Aura theme preset is configured
- `primeicons` is already loaded globally

### Pinia

- installed and registered with `@pinia/nuxt`
- ready for app state when you need it

### Nuxt Image

- installed via `@nuxt/image`
- available when you want optimized image handling

### SCSS

- `sass-embedded` is installed
- global SCSS is loaded from `app/assets/scss/main.scss`

### TypeScript

- strict mode is enabled
- type checking is enabled in Nuxt config

### Metadata Defaults

- base title, description, Open Graph, and Twitter tags are set in `nuxt.config.ts`
- starter `favicon.svg` and `social-card.svg` assets are included

## Project Map

- `nuxt.config.ts`: app config, modules, metadata, runtime config, and PrimeVue setup
- `app/pages/index.vue`: starter landing page
- `app/assets/scss/main.scss`: global styles and Tailwind entry point
- `app/components/`: shared Vue components
- `app/layouts/`: app layout shells
- `public/favicon.svg`: starter favicon
- `public/social-card.svg`: starter social share image
- `CODING_GUIDELINES.md`: repo conventions for people and AI

## Good First Edits

When starting a new project from this repo, you will usually want to:

1. Update the site name and description in `.env`
2. Replace the starter content in `app/pages/index.vue`
3. Swap the starter favicon and social card assets
4. Adjust the layout shell and navigation
5. Add your first real Pinia store, API call, or route

## Notes

- This starter currently uses the Vercel Edge Nitro preset.
- PrimeVue, Tailwind, and SCSS are already configured together.
- The project is opinionated enough to save time, but small enough to reshape quickly.
