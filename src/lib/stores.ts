import { writable, readable, type Writable } from "svelte/store";

interface Language {
  englishName: string,
  name: string,
  isoCode: string,
  flag: string
}

const languages: Language[] = [
  { isoCode: "BG", name: "Български", englishName: "Bulgarian", flag: "🇧🇬" },
  { isoCode: "CS", name: "Čeština", englishName: "Czech", flag: "🇨🇿" },
  { isoCode: "DA", name: "Dansk", englishName: "Danish", flag: "🇩🇰" },
  { isoCode: "DE", name: "Deutsch", englishName: "German", flag: "🇩🇪" },
  { isoCode: "EL", name: "Ελληνικά", englishName: "Greek", flag: "🇬🇷" },
  { isoCode: "EN-GB", name: "English (British)", englishName: "English (British)", flag: "🇬🇧" },
  { isoCode: "EN-US", name: "English (American)", englishName: "English (American)", flag: "🇺🇸" },
  { isoCode: "ES", name: "Español", englishName: "Spanish", flag: "🇪🇸" },
  { isoCode: "ET", name: "Eesti", englishName: "Estonian", flag: "🇪🇪" },
  { isoCode: "FI", name: "Suomi", englishName: "Finnish", flag: "🇫🇮" },
  { isoCode: "FR", name: "Français", englishName: "French", flag: "🇫🇷" },
  { isoCode: "HU", name: "Magyar", englishName: "Hungarian", flag: "🇭🇺" },
  { isoCode: "ID", name: "Bahasa Indonesia", englishName: "Indonesian", flag: "🇮🇩" },
  { isoCode: "IT", name: "Italiano", englishName: "Italian", flag: "🇮🇹" },
  { isoCode: "JA", name: "日本語", englishName: "Japanese", flag: "🇯🇵" },
  { isoCode: "KO", name: "한국어", englishName: "Korean", flag: "🇰🇷" },
  { isoCode: "LT", name: "Lietuvių", englishName: "Lithuanian", flag: "🇱🇹" },
  { isoCode: "LV", name: "Latviešu", englishName: "Latvian", flag: "🇱🇻" },
  { isoCode: "NB", name: "Norsk (Bokmål)", englishName: "Norwegian (Bokmål)", flag: "🇳🇴" },
  { isoCode: "NL", name: "Nederlands", englishName: "Dutch", flag: "🇳🇱" },
  { isoCode: "PL", name: "Polski", englishName: "Polish", flag: "🇵🇱" },
  { isoCode: "PT-BR", name: "Português (Brasil)", englishName: "Portuguese (Brazilian)", flag: "🇧🇷" },
  { isoCode: "PT-PT", name: "Português", englishName: "Portuguese (all Portuguese varieties excluding Brazilian Portuguese)", flag: "🇵🇹" },
  { isoCode: "RO", name: "Română", englishName: "Romanian", flag: "🇷🇴" },
  { isoCode: "RU", name: "Русский", englishName: "Russian", flag: "🇷🇺" },
  { isoCode: "SK", name: "Slovenčina", englishName: "Slovak", flag: "🇸🇰" },
  { isoCode: "SL", name: "Slovenščina", englishName: "Slovenian", flag: "🇸🇮" },
  { isoCode: "SV", name: "Svenska", englishName: "Swedish", flag: "🇸🇪" },
  { isoCode: "TR", name: "Türkçe", englishName: "Turkish", flag: "🇹🇷" },
  { isoCode: "UK", name: "Українська", englishName: "Ukrainian", flag: "🇺🇦" },
  { isoCode: "ZH", name: "中文", englishName: "Chinese (simplified)", flag: "🇨🇳" },
];


export const selectedLanguage: Writable<Language> = writable(languages.find(x => x.isoCode === "DE"));
export const langsToISOCode = readable(languages);