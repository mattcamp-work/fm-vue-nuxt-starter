import script$1 from './index-C9G5X4o1.mjs';
import script from './index-D6Grr-ln.mjs';
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useSeoMeta } from './composables-DZXxllhb.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/styles/card';
import '@primeuix/utils';
import './index-RZE_erJD.mjs';
import './index-DxKIPVaB.mjs';
import './index-CGKzMbuq.mjs';
import '@primeuix/styles/badge';
import './index-DmGtcQDa.mjs';
import './index-Dl3T3yr5.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/button';
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
import 'node:url';
import 'pinia';
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      public: { siteName, siteDescription }
    } = useRuntimeConfig();
    useSeoMeta({
      title: siteName,
      description: siteDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_Card = script$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16"><section class="max-w-3xl space-y-6"><span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200"> Nuxt 4 starter </span><h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">${ssrInterpolate(unref(siteName))}</h1><p class="max-w-2xl text-lg leading-8 text-slate-300">${ssrInterpolate(unref(siteDescription))}</p><div class="flex flex-wrap gap-3">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "PrimeVue ready",
        icon: "pi pi-check"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Tailwind ready",
        icon: "pi pi-sparkles",
        severity: "secondary",
        variant: "outlined"
      }, null, _parent));
      _push(`</div></section><section class="grid gap-4 md:grid-cols-3">`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SEO metadata`);
          } else {
            return [
              createTextVNode("SEO metadata")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Baseline Open Graph, Twitter, theme color, favicon, and social card defaults are configured in the Nuxt app head. `);
          } else {
            return [
              createTextVNode(" Baseline Open Graph, Twitter, theme color, favicon, and social card defaults are configured in the Nuxt app head. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Global styles`);
          } else {
            return [
              createTextVNode("Global styles")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tailwind CSS loads globally, and SCSS is available for shared variables, resets, and app-level styling. `);
          } else {
            return [
              createTextVNode(" Tailwind CSS loads globally, and SCSS is available for shared variables, resets, and app-level styling. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PrimeVue module`);
          } else {
            return [
              createTextVNode("PrimeVue module")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` The Nuxt module auto-imports components and ships with the Aura preset so new screens look polished immediately. `);
          } else {
            return [
              createTextVNode(" The Nuxt module auto-imports components and ships with the Aura preset so new screens look polished immediately. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DwgV1vkL.mjs.map
