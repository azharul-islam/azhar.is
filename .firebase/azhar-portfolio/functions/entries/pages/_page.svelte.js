import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { F as ensure_array_like, B as pop, z as push } from "../../chunks/index.js";
import { p as portfolioData, a as attr } from "../../chunks/data.js";
function Logo($$payload) {
  $$payload.out.push(`<div id="brand" class="svelte-yshk03">AZHAR<span class="moonstone-blue svelte-yshk03">.IS</span></div>`);
}
function Content($$payload, $$props) {
  push();
  const list = Object.entries(portfolioData).map(([id, data]) => ({ id, ...data }));
  const each_array = ensure_array_like(list);
  $$payload.out.push(`<div><br/> <ul class="content svelte-1vdmqzb"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array[$$index_1];
    $$payload.out.push(`<li class="svelte-1vdmqzb"><a${attr("href", `/${item.id}`)} style="text-decoration: none;color: inherit;">`);
    if (typeof item.image === "string") {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<img${attr("src", item.image.img.src)} class="preview svelte-1vdmqzb"${attr("width", item.image.img.w)}${attr("height", item.image.img.h)}/>`);
    } else {
      $$payload.out.push("<!--[!-->");
      const each_array_1 = ensure_array_like(Object.entries(item.image.sources));
      $$payload.out.push(`<picture><!--[-->`);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let [format, srcset] = each_array_1[$$index];
        $$payload.out.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
      }
      $$payload.out.push(`<!--]--> <img${attr("src", item.image.img.src)} class="preview svelte-1vdmqzb"${attr("width", item.image.img.w)}${attr("height", item.image.img.h)}/></picture>`);
    }
    $$payload.out.push(`<!--]--> <div style="display: flex; padding: 28px 0px 24px; justify-content: space-between;"><div style="flex:1; margin-inline-end: 12px;"><div class="title svelte-1vdmqzb" style="margin-bottom: 0.2rem;">${escape_html(item.title)}</div> <div style="margin-top: 8px;" class="subtitle svelte-1vdmqzb">${escape_html(item.subtitle)}</div></div> <div class="open-icon svelte-1vdmqzb"><i class="ph-bold ph-arrow-up-right"></i></div></div></a></li>`);
  }
  $$payload.out.push(`<!--]--></ul></div>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div id="app"><div class="main-container"><div class="header-container svelte-1uha8ag"><div class="logo-container svelte-1uha8ag">`);
  Logo($$payload);
  $$payload.out.push(`<!----></div> <div class="profile-section svelte-1uha8ag"><div class="about svelte-1uha8ag"><p class="svelte-1uha8ag">Welcome to my portfolio! 👋🏻 My name is Azharul Islam. I'm a
                        Software Engineering Manager, Frontend Design and Development expert since 2016, based
                        in Qatar. Below are some of my featured projects.</p> <div class="contact-links svelte-1uha8ag"><a href="mailto:azhar.i@outlook.com?Subject=Hello" class="contact-icon email svelte-1uha8ag" title="Email Azhar" aria-label="Email Azhar"><i class="ph-duotone ph-envelope"></i></a> <a href="https://wa.me/97433338469" class="contact-icon whatsapp svelte-1uha8ag" title="Text on WhatsApp" aria-label="Text on WhatsApp"><i class="ph-duotone ph-whatsapp-logo"></i></a> <a href="tel:+97433338469" class="contact-icon whatsapp svelte-1uha8ag" title="Call Azhar" aria-label="Call Azhar"><i class="ph-duotone ph-phone"></i></a></div></div></div></div></div> `);
  Content($$payload);
  $$payload.out.push(`<!----> <footer class="svelte-1uha8ag"><p class="svelte-1uha8ag">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Azharul Islam</p></footer></div>`);
  pop();
}
export {
  _page as default
};
