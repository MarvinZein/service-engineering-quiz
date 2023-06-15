import { writable, derived } from "svelte/store";

export const selectedLanguage = writable("en");
export const availableLangs = writable(['de', 'en', 'bg']);