import { w as writable } from "./index.js";
const selectedLanguage = writable();
const translationToggle = writable(true);
export {
  selectedLanguage as s,
  translationToggle as t
};
