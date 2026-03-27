CODING GUIDELINES
=======================

STACK + STYLE
-------------
- Write simple, human readable code
- Follow Nuxt / Vue conventions.
- Use PrimeVue components before building custom components.
- Use Tailwind CSS for layout, spacing, and styling.
- If Tailwind class strings become long or repetitive:
  - Move them into <style scoped> using the @apply construct.
  - Keep styles local to the component.

LIBRARIES (PREFERRED)
--------------------
Use these libraries when they simplify code or improve clarity:
- lodash       → iteration, get/set, deep clone, path-based ops, json work, traversing objects
- dayjs        → dates and times
- numeral      → number formatting (currency)
- colorjs.io   → color conversion, color formats, ramps, color math

Do not re-implement functionality these libraries already provide.

CODE CLARITY RULES
------------------
- No ternaries.
- No shorthand cleverness.
- Prefer explicit control flow.
- Try to use lodash to filter positively for values instead of a sequence of negative selections
- Use early returns instead of nested if/else blocks.
- Prefer named helper functions over inline anonymous logic.
- use guard statements instead of ternaries to prevent bad values from passing into functions
- Prefer early returns over nested conditionals
- Expand logic even if it costs a few extra lines
- use "_" prefix for locally used vars and objects inside of functions; ex: "_key" and "_color"
- Keep UI components “dumb”:
- Move data shaping and normalization into utilities.
- All object/array structure manipulation must use _. (e.g., _.get, _.set, _.merge, _.cloneDeep); do not hand-write deep traversal or rely on spread operators for nested state.

COMMENTS + DOCUMENTATION
------------------------
- Every exported function must include a short comment describing:
  - what the function does
  - inputs
  - outputs
  - example usage
  - side effects (if any)
- For functions and plugins; provide an example usage in a comment below the code
- Comment all state mutations and data transformations.
  - Example: // MUTATION: update selectedTokenPath

DATA HANDLING
-------------
- Treat source JSON data as immutable by default.
- use lodash _.isNumber, _.isObject, _.isString etc for guard statements. 
- Do not mutate nested objects in place unless explicitly intended.
- When updating nested values:
  - Clone first (e.g., _.cloneDeep)
  - Use _.set / _.unset with explicit paths
- When passing data between components or utilities, prefer:
  - path (string or array)
  - value
  - optional meta object

VUE / NUXT PATTERNS
------------------
- Avoid complex logic in templates.
- Use computed properties for derived values.
- Do not duplicate logic between template and script.
- Use watchers only when necessary.
  - Prefer computed properties + explicit actions.

ERROR HANDLING + LOGGING
-----------------------
- Fail loudly in development.
- Use console.warn for recoverable or unexpected states.
- Throw explicit errors for impossible or invalid states.
- Validate inputs at module boundaries (adapters, APIs, file IO).

VUE COMPONENT STYLE
-------------------
- Default to the Options API for every new Vue component.
- Do not use the Composition API unless there is a clear structural reason.
- Use the Composition API for complex reusable business logic, advanced async flows, or third-party composables that fit it naturally.
- Prefer the Options API for basic components, UI rendering, forms, and standard page logic.
- Optimize for readability first, not trendiness.

FILE STRUCTURE + NAMING
----------------------
- Prefer small, boring, single-purpose modules.
  - utils/paths.js
  - utils/tokens.js
  - adapters/storage/jsonFile.js
  - adapters/storage/firebase.js
- Naming conventions:
  - Verbs for actions (buildTokenIndex, setTokenValue)
  - Nouns for data (tokenIndex, tokenPaths)

UI Layout
---------------------------
- please use the container > row > col construct in _grid.css for layouts.
- use these directly on the elements in the markup
- almost all layouts default as a full width column, and then we use the tailwind lg: utility to specify multiple columns


CSS and Tailwind
-----------------
- please do not write bespoke css, you may use classes, but use the \@apply construct with tailwind classes as much as 

CURSOR BEHAVIOR PREFERENCES
---------------------------
- Ask before introducing new dependencies outside the approved list.
- Prefer the simplest working implementation first.
- Refactor only after correctness is established.
- When generating code:
  - Include a minimal usage example.
  - Include a brief note on how to test or verify behavior.

  TYPESCRIPT
---------------------------
- Add explicit types at module boundaries (params + return values).
- Allow inference inside functions.
- Never use `any`; use `unknown` and narrow it.
- Guard `null` and `undefined` early.
- Prefer `type` by default; use `interface` only when extending object contracts is clearly helpful.

- Treat API/JSON/Firebase data as `unknown` until validated.
- Prefer `type` over `interface`.
- Use optional properties (`?`) instead of `T | undefined`.
- Do not mutate input parameters.

- Prefer small pure functions.
- Use early returns instead of nested conditionals.
- Avoid boolean flags that change behavior.

- Prefer type guards over casting.
- `as` is a last resort.

- Arrays = ordered lists; objects = keyed lookup.
- Prefer `map/filter/reduce` over manual loops.

- Use `async/await`, not `.then()`.
- Handle errors in async functions.

- Prefer string unions over enums.
- Store reusable literals in `const ... as const`.

- Optimize for readability, not cleverness.

DEFAULT TYPE PATTERNS
---------------------
- Prefer these patterns first before inventing new ones:
- Small local objects: inline type annotations.
- Shared object shapes: `type` aliases.
- Keyed dictionaries: `Record<string, T>`.
- Finite value sets: string unions.
- Function contracts: explicit param types + explicit return types at module boundaries.

TYPE COMPLEXITY LIMIT
---------------------
- Reuse the simplest valid type pattern.
- Do not introduce advanced generics, conditional types, mapped types, or utility-type chains unless they are clearly necessary.
- If a type takes more effort to read than the implementation, simplify it.
- Do not create “helper types” for one-off situations unless they improve clarity immediately.
- Default to 4-5 repeatable type patterns, not custom type machinery.
- Do not solve routine app code with elaborate TypeScript abstractions.


## When working with Nuxt routing, slugs, or navigation (CRITICAL)

This project uses Nuxt 4.

Nuxt routing is subtle and AI assistants frequently apply patterns from
Next.js, Remix, or SvelteKit that DO NOT exist in Nuxt.

Before creating or modifying ANY of the following:

- dynamic routes `[param]`
- slug systems
- nested routes
- shared route UI
- layouts
- route middleware
- navigation helpers

You MUST first consult the official Nuxt 4 documentation and confirm the
pattern exists in the Nuxt 4 Pages Router.

Primary reference (Nuxt 4):
https://nuxt.com/docs/4.x/guide/directory-structure/pages

Secondary references (Nuxt 4):
https://nuxt.com/docs/4.x/guide/directory-structure/layouts
https://nuxt.com/docs/4.x/guide/directory-structure/middleware
https://nuxt.com/docs/4.x/api/composables/use-route
https://nuxt.com/docs/4.x/api/composables/navigate-to

### Mandatory verification checklist

Before writing code, explicitly verify:

1) Does Nuxt 4 (Pages Router) support this feature?
2) Is this a Nuxt/Vue Router pattern or an App Router / Next.js concept?
3) Will the file I am creating produce a real URL?

If the answer is uncertain:
STOP and ask for clarification instead of generating code.

### Known incorrect patterns (do NOT generate)

The following are common hallucinations and must never be used:

- `pages/**/layout.vue` as a nested layout wrapper
- route groups `(group)` folders
- `loading.tsx`-style route loaders
- file-based server actions inside pages
- dynamic route segment configs from Next.js

### Expected mental model

Nuxt 4 Pages Router is a thin file-based layer over Vue Router.
Folders create URL segments.
Files create actual routes.

Every page component under `app/pages/` (excluding layout.vue) MUST correspond to a real navigable URL.
If it does not produce a URL, it is wrong.

### Slug handling requirements

When working with `projectSlug`:

- The slug comes from `route.params.projectSlug`
- It must be treated as URL state, not store state
- Pages must render even before data resolves
- Data loading happens after navigation, not before route creation
- Shared UI across slug routes belongs in:
  `app/pages/get/[projectSlug].vue` (parent route), not a layout file

Never invent a routing abstraction when Vue Router already provides it.
Prefer explicit URLs over “magic routing”.

