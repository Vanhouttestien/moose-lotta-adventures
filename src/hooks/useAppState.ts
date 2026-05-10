import { useCallback, useEffect, useState } from "react";
import { loadState, saveState, type AppState } from "@/services/storage";
import type { Story } from "@/data/stories";

export function useAppState() {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const update = useCallback((patch: Partial<AppState>) => {
    setState((s) => ({ ...s, ...patch }));
  }, []);

  const completeStory = useCallback((story: Story) => {
    setState((s) => {
      if (s.completedStoryIds.includes(story.id)) return s;
      return {
        ...s,
        completedStoryIds: [...s.completedStoryIds, story.id],
        rewards: s.rewards.includes(story.reward) ? s.rewards : [...s.rewards, story.reward],
      };
    });
  }, []);

  return { state, update, completeStory };
}