import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    default: ComponentProps<typeof import("/Users/mattcamp/MattDev/fm-vue-nuxt-starter/app/layouts/default.vue").default>
    empty: ComponentProps<typeof import("/Users/mattcamp/MattDev/fm-vue-nuxt-starter/app/layouts/empty.vue").default>
    "logged-in": ComponentProps<typeof import("/Users/mattcamp/MattDev/fm-vue-nuxt-starter/app/layouts/logged-in.vue").default>
    "user-flow": ComponentProps<typeof import("/Users/mattcamp/MattDev/fm-vue-nuxt-starter/app/layouts/user-flow.vue").default>
  }
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false> | {
      [K in LayoutKey]: {
        name?: MaybeRef<K | false> | ComputedRef<K | false>
        props?: NuxtLayouts[K]
      }
    }[LayoutKey]
  }
}