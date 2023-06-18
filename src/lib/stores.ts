import { writable, type Writable } from "svelte/store";
import type { Language } from "./types";

export const selectedLanguage: Writable<Language> = writable();
export const translationToggle = writable(true);