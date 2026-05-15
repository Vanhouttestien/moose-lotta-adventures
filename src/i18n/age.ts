import type { Language } from "./types";

const ageGroupLabels: Record<Language, Record<string, string>> = {
  sv: {
    "3-4": "3–4 år",
    "5-6": "5–6 år",
    "7-9": "7–9 år",
    "10-12": "10–12 år",
    adult: "Vuxen",
  },
  en: {
    "3-4": "3–4 years",
    "5-6": "5–6 years",
    "7-9": "7–9 years",
    "10-12": "10–12 years",
    adult: "Adult",
  },
};

export const ageGroups: { code: "3-4" | "5-6" | "7-9" | "10-12" | "adult" }[] = [
  { code: "3-4" },
  { code: "5-6" },
  { code: "7-9" },
  { code: "10-12" },
  { code: "adult" },
];

export function getAgeGroupLabel(lang: Language, code: string): string {
  return ageGroupLabels[lang]?.[code] ?? code;
}
