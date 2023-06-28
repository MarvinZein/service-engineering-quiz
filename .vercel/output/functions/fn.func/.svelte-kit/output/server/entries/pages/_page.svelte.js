import { c as create_ssr_component, a as subscribe, d as set_store_value, v as validate_component, f as each, e as escape, b as add_attribute } from "../../chunks/index2.js";
import { L as LanguageIcon } from "../../chunks/LanguageIcon.js";
import { s as selectedLanguage, l as langs } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedLanguage, $$unsubscribe_selectedLanguage;
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => $selectedLanguage = value);
  let selected = langs[3];
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    {
      set_store_value(selectedLanguage, $selectedLanguage = selected, $selectedLanguage);
    }
  }
  $$unsubscribe_selectedLanguage();
  return `<div class="flex justify-center items-center h-full"><main class="flex gap-8 flex-col"><h1 class="text-center text-4xl font-bold">Quiz-App</h1>
		<div class="grid grid-cols-[auto_1fr] justify-center items-center gap-2">${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, {}, {}, {})}
			<select class="select select-ghost w-full max-w-xsd">${each(langs, (lang) => {
    return `<option class="cursor-pointer"${add_attribute("value", lang, 0)}>${escape(lang.flag)} ${escape(lang.name)}</option>`;
  })}</select></div>

		<a href="/game" class="btn btn-primary">${escape(selected.startTranslation)}</a></main></div>`;
});
export {
  Page as default
};
