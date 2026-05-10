import type { AgeGroup, Language } from "@/data/stories";

const KEY = "moose-lotta:v1";

export interface AppState {
  language: Language;
  ageGroup: AgeGroup;
  completedStoryIds: string[];
  rewards: string[];
  onboarded: boolean;
}

const defaults: AppState = {
  language: "sv",
  ageGroup: "5-6",
  completedStoryIds: [],
  rewards: [],
  onboarded: false,
};

export function loadState(): AppState {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

export function saveState(state: AppState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
}