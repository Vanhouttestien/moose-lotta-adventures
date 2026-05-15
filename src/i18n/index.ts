export { t } from "./t";
export { sv } from "./sv";
export { en } from "./en";
export { ageGroups, getAgeGroupLabel } from "./age";
export type { Language, TranslationDict, LeafPaths, Structure } from "./types";

export const languages: { code: "sv" | "en"; label: string; flag: string }[] = [
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
];
