import { _ as __nuxt_component_0$1 } from './nuxt-link-Cg2gZTjQ.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { siteName }
    } = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b border-white/10 bg-slate-950/70 backdrop-blur" }, _attrs))}><div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-lg font-semibold tracking-tight text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(siteName))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(siteName)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav aria-label="Primary" class="flex items-center gap-5 text-sm text-slate-300">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "transition hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://nuxt.com/docs" target="_blank" rel="noreferrer" class="transition hover:text-white"> Docs </a></nav></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { siteName }
    } = useRuntimeConfig();
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-white/10 bg-slate-950/70" }, _attrs))}><div class="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© ${ssrInterpolate(unref(year))} ${ssrInterpolate(unref(siteName))}</p><p>Built with Nuxt, Tailwind CSS, PrimeVue, and Pinia.</p></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "AppFooter" });

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=AppFooter-CwC0Fd_d.mjs.map
