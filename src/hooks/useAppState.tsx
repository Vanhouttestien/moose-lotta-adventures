import { createContext, useContext, useCallback, useEffect, useState } from "react";
import { loadProfiles, saveProfiles, saveActiveProfile, loadActiveProfile, type Profile, type ProfileData } from "@/services/storage";
import type { AgeGroup, Language, Story } from "@/data/stories";

interface AppStateContextValue {
  profiles: Profile[];
  activeProfile: Profile | null;
  selectProfile: (name: string) => void;
  createProfile: (name: string, ageGroup: AgeGroup, language: Language) => boolean;
  deleteProfile: (name: string) => void;
  updateProfileData: (patch: Partial<ProfileData>) => void;
  state: ProfileData;
}

const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [profiles, setProfiles] = useState<Profile[]>(() => loadProfiles());
  const [activeProfileName, setActiveProfileName] = useState<string | null>(() => {
    const saved = loadActiveProfile();
    if (saved && loadProfiles().some((p) => p.name === saved)) return saved;
    return null;
  });

  useEffect(() => {
    saveProfiles(profiles);
  }, [profiles]);

  useEffect(() => {
    saveActiveProfile(activeProfileName);
  }, [activeProfileName]);

  const activeProfile = activeProfileName
    ? (profiles.find((p) => p.name === activeProfileName) ?? null)
    : null;

  const state: ProfileData = activeProfile?.data ?? {
    ageGroup: "5-6",
    language: "sv",
    completedStoryIds: [],
    rewards: [],
    onboarded: false,
  };

  const selectProfile = useCallback((name: string) => {
    setActiveProfileName(name);
  }, []);

  const createProfile = useCallback(
    (name: string, ageGroup: AgeGroup, language: Language): boolean => {
      let exists = false;
      setProfiles((prev) => {
        if (prev.some((p) => p.name === name)) {
          exists = true;
          return prev;
        }
        const newProfile: Profile = {
          name,
          data: {
            ageGroup,
            language,
            completedStoryIds: [],
            rewards: [],
            onboarded: false,
          },
          createdAt: new Date().toISOString(),
        };
        return [...prev, newProfile];
      });
      if (!exists) setActiveProfileName(name);
      return !exists;
    },
    [],
  );

  const deleteProfile = useCallback((name: string) => {
    setProfiles((prev) => prev.filter((p) => p.name !== name));
    setActiveProfileName((current) => (current === name ? null : current));
  }, []);

  const updateProfileData = useCallback(
    (patch: Partial<ProfileData>) => {
      setProfiles((prev) =>
        prev.map((p) =>
          p.name === activeProfileName ? { ...p, data: { ...p.data, ...patch } } : p,
        ),
      );
    },
    [activeProfileName],
  );

  return (
    <AppStateContext.Provider
      value={{
        profiles,
        activeProfile,
        selectProfile,
        createProfile,
        deleteProfile,
        updateProfileData,
        state,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");

  const { state, updateProfileData, activeProfile } = ctx;

  const update = useCallback(
    (patch: Partial<ProfileData>) => {
      updateProfileData(patch);
    },
    [updateProfileData],
  );

  const completeStory = useCallback(
    (story: Story) => {
      if (!activeProfile) return;
      if (state.completedStoryIds.includes(story.id)) return;
      updateProfileData({
        completedStoryIds: [...state.completedStoryIds, story.id],
        rewards: state.rewards.includes(story.reward)
          ? state.rewards
          : [...state.rewards, story.reward],
      });
    },
    [activeProfile, state, updateProfileData],
  );

  return { ...ctx, update, completeStory };
}
