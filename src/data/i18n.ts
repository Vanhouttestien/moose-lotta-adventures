import type { Language } from "./stories";

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const ageGroups = [
  { code: "3-4" as const, label: "3–4 år" },
  { code: "5-6" as const, label: "5–6 år" },
  { code: "7-9" as const, label: "7–9 år" },
];

type Dict = Record<string, string>;
const sv: Dict = {
  appTitle: "Moose Lotta Äventyr",
  tagline: "Upptäck hemliga berättelser i Hälleforsnäs",
  start: "Starta äventyret",
  language: "Språk",
  age: "Ålder",
  map: "Karta",
  rewards: "Skatter",
  home: "Hem",
  toMap: "Till kartan",
  iAmHere: "Jag är här",
  searching: "Letar efter dig i skogen…",
  feels: "🫎 Moose Lotta känner något här…",
  unlock: "Lås upp äventyret",
  locked: "Gå hit för att låsa upp",
  done: "Klart!",
  mission: "Uppdrag",
  reward: "Belöning",
  play: "Spela",
  pause: "Pausa",
  replay: "Spela igen",
  noStories: "Inga äventyr här ännu",
  permissionTitle: "Får Moose Lotta veta var du är?",
  permissionBody:
    "Vi använder din plats för att hitta hemliga äventyr nära dig. Vi sparar ingenting.",
  enableGps: "Slå på platsen",
  gpsDenied: "Platsen är avstängd – du kan ändå trycka 'Jag är här' vid varje plats.",
  progress: "framsteg",
  collected: "samlade skatter",
  noRewards: "Inga skatter ännu. Gå ut och upptäck!",
  markComplete: "Markera som klart",
  completed: "Avklarad",
};
const en: Dict = {
  appTitle: "Moose Lotta Adventures",
  tagline: "Discover secret stories in Hälleforsnäs",
  start: "Start the adventure",
  language: "Language",
  age: "Age",
  map: "Map",
  rewards: "Treasures",
  home: "Home",
  toMap: "Back to map",
  iAmHere: "I'm here",
  searching: "Looking for you in the forest…",
  feels: "🫎 Moose Lotta senses something here…",
  unlock: "Unlock the adventure",
  locked: "Go here to unlock",
  done: "Done!",
  mission: "Mission",
  reward: "Reward",
  play: "Play",
  pause: "Pause",
  replay: "Play again",
  noStories: "No adventures here yet",
  permissionTitle: "May Moose Lotta know where you are?",
  permissionBody:
    "We use your location to find secret adventures nearby. Nothing is stored.",
  enableGps: "Enable location",
  gpsDenied: "Location is off – you can still tap 'I'm here' at each place.",
  progress: "progress",
  collected: "collected treasures",
  noRewards: "No treasures yet. Go outside and explore!",
  markComplete: "Mark as done",
  completed: "Completed",
};

const dicts: Record<Language, Dict> = { sv, en };

export function t(lang: Language, key: keyof typeof sv): string {
  return dicts[lang]?.[key] ?? sv[key] ?? key;
}