import { G as current_component, E as getContext, I as store_get, F as ensure_array_like, J as stringify, K as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "clsx";
import { g as goto } from "../../../chunks/client.js";
import { a as attr, p as portfolioData } from "../../../chunks/data.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let slug, project;
  function handleKeydown(event) {
    return;
  }
  onDestroy(() => {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  });
  slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
  project = slug && slug in portfolioData ? portfolioData[slug] : void 0;
  if (slug && !project) {
    goto();
  }
  if (
    // Open full-screen viewer
    // Close full-screen viewer
    // Navigate to next image
    // Navigate to previous image
    // Handle keyboard navigation
    // Add keyboard event listener
    project
  ) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(project.images);
    $$payload.out.push(`<div class="description-page svelte-jot9ci"><div class="header svelte-jot9ci"><a href="/" class="back-link svelte-jot9ci"><i class="ph-bold ph-arrow-left svelte-jot9ci"></i> <span>Back to Portfolio</span></a></div> <div class="content svelte-jot9ci"><div class="project-header svelte-jot9ci"><h1 class="title svelte-jot9ci">${escape_html(project.title)}</h1> <p class="subtitle svelte-jot9ci">${escape_html(project.subtitle)}</p></div> <div class="description svelte-jot9ci"><p class="svelte-jot9ci">${escape_html(project.description)}</p></div> <div class="gallery svelte-jot9ci"><h2 class="gallery-title svelte-jot9ci">Gallery</h2> <div class="image-grid svelte-jot9ci"><!--[-->`);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let image = each_array[index];
      $$payload.out.push(`<button type="button" class="image-wrapper svelte-jot9ci"${attr("aria-label", `View ${stringify(project.title)} - Image ${stringify(index + 1)} in fullscreen`)}>`);
      if (typeof image === "string") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<img${attr("src", image.img.src)}${attr("alt", `${stringify(project.title)} - Image ${stringify(index + 1)}`)} class="gallery-image svelte-jot9ci"${attr("width", image.img.w)}${attr("height", image.img.h)}/>`);
      } else {
        $$payload.out.push("<!--[!-->");
        const each_array_1 = ensure_array_like(Object.entries(image.sources));
        $$payload.out.push(`<picture><!--[-->`);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let [format, srcset] = each_array_1[$$index];
          $$payload.out.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
        }
        $$payload.out.push(`<!--]--> <img${attr("src", image.img.src)}${attr("alt", `${stringify(project.title)} - Image ${stringify(index + 1)}`)} class="gallery-image svelte-jot9ci"${attr("width", image.img.w)}${attr("height", image.img.h)}/></picture>`);
      }
      $$payload.out.push(`<!--]--> <div class="image-overlay svelte-jot9ci"><i class="ph-bold ph-magnifying-glass-plus svelte-jot9ci"></i></div></button>`);
    }
    $$payload.out.push(`<!--]--></div></div></div></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
