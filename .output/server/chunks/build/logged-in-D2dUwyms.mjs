import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './AppFooter-CwC0Fd_d.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Cg2gZTjQ.mjs';
import script from './index-BvnSa8Ke.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { u as useRuntimeConfig, g as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import '@primeuix/utils';
import './index-DI7ROuCk.mjs';
import '@primeuix/utils/dom';
import 'pinia';
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logged-in",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { siteName }
    } = useRuntimeConfig();
    const route = useRoute();
    const navigation = [
      { label: "Dashboard", to: "/" },
      { label: "Nuxt Docs", href: "https://nuxt.com/docs" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_Avatar = script;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-8 lg:flex-row"><aside class="w-full lg:max-w-xs"><div class="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"><div class="space-y-3"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"> Logged in area </p><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Avatar, {
        label: "MC",
        shape: "circle"
      }, null, _parent));
      _push(`<div><p class="font-medium text-white">${ssrInterpolate(unref(siteName))}</p><p class="text-sm text-slate-400">Authenticated app shell</p></div></div></div><nav aria-label="Logged in navigation" class="space-y-2"><!--[-->`);
      ssrRenderList(navigation.filter((item) => "to" in item), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.label,
          to: item.to,
          class: [
            "block rounded-xl border px-4 py-3 text-sm transition",
            unref(route).path === item.to ? "border-indigo-400/40 bg-indigo-500/15 text-white" : "border-white/10 bg-slate-950/40 text-slate-300 hover:border-white/20 hover:text-white"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(navigation.filter((item) => "href" in item), (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noreferrer" class="block rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></nav></div></aside><main class="min-w-0 flex-1"><div class="rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-sm sm:p-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/logged-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=logged-in-D2dUwyms.mjs.map
