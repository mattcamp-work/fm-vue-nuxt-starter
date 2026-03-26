export type LayoutKey = "default" | "empty" | "logged-in" | "user-flow"
declare module 'nitropack' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}
declare module 'nitropack/types' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}