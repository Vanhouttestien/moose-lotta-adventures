import type { AgeGroup, Language } from "@/data/stories";

const KEY = "moose-lotta:v1";
const PROFILES_KEY = "moose-lotta:profiles";

export interface ProfileData {
  ageGroup: AgeGroup;
  language: Language;
  completedStoryIds: string[];
  rewards: string[];
  onboarded: boolean;
}

export interface Profile {
  name: string;
  data: ProfileData;
  createdAt: string;
}

const defaultProfileData: ProfileData = {
  ageGroup: "5-6",
  language: "sv",
  completedStoryIds: [],
  rewards: [],
  onboarded: false,
};

function migrateOldState(): Profile[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    const old = JSON.parse(raw);
    if (!old || old.profiles) return [];
    const profile: Profile = {
      name: "",
      data: {
        ageGroup: old.ageGroup ?? defaultProfileData.ageGroup,
        language: old.language ?? defaultProfileData.language,
        completedStoryIds: old.completedStoryIds ?? [],
        rewards: old.rewards ?? [],
        onboarded: old.onboarded ?? false,
      },
      createdAt: new Date().toISOString(),
    };
    localStorage.removeItem(KEY);
    return [profile];
  } catch {
    return [];
  }
}

export function loadProfiles(): Profile[] {
  if (typeof window === "undefined") return [];
  try {
    const migrated = migrateOldState();
    if (migrated.length > 0) {
      saveProfiles(migrated);
      return migrated;
    }
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveProfiles(profiles: Profile[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

const ACTIVE_KEY = "moose-lotta:active";

export function saveActiveProfile(name: string | null) {
  if (typeof window === "undefined") return;
  if (name === null) {
    localStorage.removeItem(ACTIVE_KEY);
  } else {
    localStorage.setItem(ACTIVE_KEY, name);
  }
}

export function loadActiveProfile(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(ACTIVE_KEY);
  } catch {
    return null;
  }
}
