# Nuxt Starter

Nuxt 4 starter with common developer defaults already wired:

- Tailwind CSS v4 via the Vite plugin
- PrimeVue with the Aura preset and auto-imported components
- Pinia module registration
- global SCSS support
- baseline SEO, Open Graph, and Twitter metadata
- starter favicon and social share image assets

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the dev server at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and adjust the public site metadata as needed:

```bash
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=Nuxt Starter
NUXT_PUBLIC_SITE_DESCRIPTION=Nuxt 4 starter with Tailwind CSS, PrimeVue, Pinia, and baseline SEO metadata.
NUXT_PUBLIC_SOCIAL_IMAGE=/social-card.svg
```

## Where Things Live

- `nuxt.config.ts`: app metadata, Tailwind, PrimeVue, Pinia, and runtime config
- `app/assets/scss/main.scss`: Tailwind entry point plus shared global SCSS
- `app/pages/index.vue`: starter screen that exercises Tailwind and PrimeVue together
- `public/favicon.svg` and `public/social-card.svg`: starter metadata assets

## Notes

- PrimeVue components are auto-imported by `@primevue/nuxt-module`.
- Tailwind utilities are available globally.
- SCSS works out of the box through `sass-embedded`.
- Update the placeholder metadata values before deploying a real site.
