import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../../chunks/index2.js";
import { L as LanguageIcon } from "../../../chunks/LanguageIcon.js";
import { t as translationToggle } from "../../../chunks/stores.js";
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $translationToggle, $$unsubscribe_translationToggle;
  $$unsubscribe_translationToggle = subscribe(translationToggle, (value) => $translationToggle = value);
  $$unsubscribe_translationToggle();
  return `<nav class="p-2 flex justify-between items-center bg-base-300 h-[3rem]"><a href="/" class="btn btn-ghost">${validate_component(HomeIcon, "HomeIcon").$$render($$result, {}, {}, {})}</a>
	<label class="label cursor-pointer w-fit flex gap-2"><span class="label-text">${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, {}, {}, {})}</span>
		<input type="checkbox" class="toggle"${add_attribute("checked", $translationToggle, 1)}></label></nav>
<div class="min-h-[calc(100vh-3rem)] flex justify-center items-center p-4">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
