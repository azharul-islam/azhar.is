import { D as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out.push(`<div class="app svelte-12qhfyh">`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<!---->`);
    slot($$payload, $$props, "default", {});
    $$payload.out.push(`<!---->`);
  }
  $$payload.out.push(`<!--]--></div>`);
}
export {
  _layout as default
};
