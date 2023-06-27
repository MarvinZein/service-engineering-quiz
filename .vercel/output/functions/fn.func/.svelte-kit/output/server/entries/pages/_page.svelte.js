import { c as create_ssr_component, v as validate_component, d as each, e as escape, b as add_attribute } from "../../chunks/index2.js";
import { L as LanguageIcon } from "../../chunks/LanguageIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const langs = [
    {
      languageCode: "BG",
      name: "Български",
      englishName: "Bulgarian",
      flag: "🇧🇬",
      startTranslation: "Започни",
      countryCode: "BG"
    },
    {
      languageCode: "CS",
      name: "Čeština",
      englishName: "Czech",
      flag: "🇨🇿",
      startTranslation: "Začít",
      countryCode: "CZ"
    },
    {
      languageCode: "DA",
      name: "Dansk",
      englishName: "Danish",
      flag: "🇩🇰",
      startTranslation: "Start",
      countryCode: "DK"
    },
    {
      languageCode: "DE",
      name: "Deutsch",
      englishName: "German",
      flag: "🇩🇪",
      startTranslation: "Start",
      countryCode: "DE"
    },
    {
      languageCode: "EL",
      name: "Ελληνικά",
      englishName: "Greek",
      flag: "🇬🇷",
      startTranslation: "Έναρξη",
      countryCode: "GR"
    },
    {
      languageCode: "EN-GB",
      name: "English (British)",
      englishName: "English (British)",
      flag: "🇬🇧",
      startTranslation: "Start",
      countryCode: "GB"
    },
    {
      languageCode: "EN-US",
      name: "English (American)",
      englishName: "English (American)",
      flag: "🇺🇸",
      startTranslation: "Start",
      countryCode: "US"
    },
    {
      languageCode: "ES",
      name: "Español",
      englishName: "Spanish",
      flag: "🇪🇸",
      startTranslation: "Inicio",
      countryCode: "ES"
    },
    {
      languageCode: "ET",
      name: "Eesti",
      englishName: "Estonian",
      flag: "🇪🇪",
      startTranslation: "Alusta",
      countryCode: "EE"
    },
    {
      languageCode: "FI",
      name: "Suomi",
      englishName: "Finnish",
      flag: "🇫🇮",
      startTranslation: "Aloita",
      countryCode: "FI"
    },
    {
      languageCode: "FR",
      name: "Français",
      englishName: "French",
      flag: "🇫🇷",
      startTranslation: "Démarrer",
      countryCode: "FR"
    },
    {
      languageCode: "HU",
      name: "Magyar",
      englishName: "Hungarian",
      flag: "🇭🇺",
      startTranslation: "Indítás",
      countryCode: "HU"
    },
    {
      languageCode: "ID",
      name: "Bahasa Indonesia",
      englishName: "Indonesian",
      flag: "🇮🇩",
      startTranslation: "Mulai",
      countryCode: "ID"
    },
    {
      languageCode: "IT",
      name: "Italiano",
      englishName: "Italian",
      flag: "🇮🇹",
      startTranslation: "Avvia",
      countryCode: "IT"
    },
    {
      languageCode: "JA",
      name: "日本語",
      englishName: "Japanese",
      flag: "🇯🇵",
      startTranslation: "開始",
      countryCode: "JP"
    },
    {
      languageCode: "KO",
      name: "한국어",
      englishName: "Korean",
      flag: "🇰🇷",
      startTranslation: "시작",
      countryCode: "KR"
    },
    {
      languageCode: "LT",
      name: "Lietuvių",
      englishName: "Lithuanian",
      flag: "🇱🇹",
      startTranslation: "Pradėti",
      countryCode: "LT"
    },
    {
      languageCode: "LV",
      name: "Latviešu",
      englishName: "Latvian",
      flag: "🇱🇻",
      startTranslation: "Sākt",
      countryCode: "LV"
    },
    {
      languageCode: "NB",
      name: "Norsk (Bokmål)",
      englishName: "Norwegian (Bokmål)",
      flag: "🇳🇴",
      startTranslation: "Start",
      countryCode: "NO"
    },
    {
      languageCode: "NL",
      name: "Nederlands",
      englishName: "Dutch",
      flag: "🇳🇱",
      startTranslation: "Start",
      countryCode: "NL"
    },
    {
      languageCode: "PL",
      name: "Polski",
      englishName: "Polish",
      flag: "🇵🇱",
      startTranslation: "Start",
      countryCode: "PL"
    },
    {
      languageCode: "PT-BR",
      name: "Português (Brasil)",
      englishName: "Portuguese (Brazilian)",
      flag: "🇧🇷",
      startTranslation: "Iniciar",
      countryCode: "BR"
    },
    {
      languageCode: "PT-PT",
      name: "Português",
      englishName: "Portuguese (all Portuguese varieties excluding Brazilian Portuguese)",
      flag: "🇵🇹",
      startTranslation: "Iniciar",
      countryCode: "PT"
    },
    {
      languageCode: "RO",
      name: "Română",
      englishName: "Romanian",
      flag: "🇷🇴",
      startTranslation: "Start",
      countryCode: "RO"
    },
    {
      languageCode: "RU",
      name: "Русский",
      englishName: "Russian",
      flag: "🇷🇺",
      startTranslation: "Старт",
      countryCode: "RU"
    },
    {
      languageCode: "SK",
      name: "Slovenčina",
      englishName: "Slovak",
      flag: "🇸🇰",
      startTranslation: "Spustiť",
      countryCode: "SK"
    },
    {
      languageCode: "SL",
      name: "Slovenščina",
      englishName: "Slovenian",
      flag: "🇸🇮",
      startTranslation: "Začni",
      countryCode: "SI"
    },
    {
      languageCode: "SV",
      name: "Svenska",
      englishName: "Swedish",
      flag: "🇸🇪",
      startTranslation: "Starta",
      countryCode: "SE"
    },
    {
      languageCode: "TR",
      name: "Türkçe",
      englishName: "Turkish",
      flag: "🇹🇷",
      startTranslation: "Başlat",
      countryCode: "TR"
    },
    {
      languageCode: "UK",
      name: "Українська",
      englishName: "Ukrainian",
      flag: "🇺🇦",
      startTranslation: "Старт",
      countryCode: "UA"
    },
    {
      languageCode: "ZH",
      name: "中文",
      englishName: "Chinese (simplified)",
      flag: "🇨🇳",
      startTranslation: "开始",
      countryCode: "CN"
    }
  ];
  let selected = langs[3];
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center items-center h-full"><main class="flex gap-8 flex-col"><h1 class="text-center text-2xl font-bold">Quiz-App</h1>
		<div class="grid grid-cols-[auto_1fr] justify-center items-center gap-2">${validate_component(LanguageIcon, "LanguageIcon").$$render($$result, {}, {}, {})}
			<select class="select select-ghost w-full max-w-xsd">${each(langs, (lang) => {
    return `<option class="cursor-pointer"${add_attribute("value", lang, 0)}>${escape(lang.flag)} ${escape(lang.name)}</option>`;
  })}</select></div>

		<a href="/game" class="btn btn-primary">${escape(selected.startTranslation)}</a></main></div>`;
});
export {
  Page as default
};
