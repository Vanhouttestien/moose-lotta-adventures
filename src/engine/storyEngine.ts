import type { Story } from "@/data/stories";
import { distanceMeters } from "@/hooks/useGeolocation";

export type DiscoveryTier = "hidden" | "hint" | "visible" | "warm" | "unlocked";

export const DISCOVERY_THRESHOLDS = {
  hint: 1000,
  visible: 300,
  warm: 100,
  unlock: 30,
} as const;

export interface StoryStatus {
  story: Story;
  distance: number | null;
  unlocked: boolean;
  completed: boolean;
  tier: DiscoveryTier;
}

export function getStoryStatuses(
  stories: Story[],
  position: { lat: number; lng: number } | null,
  completedIds: string[],
): StoryStatus[] {
  return stories.map((story) => {
    const completed = completedIds.includes(story.id);
    const distance = position ? distanceMeters(position, story.location) : null;
    const unlockRadius = Math.max(story.location.radius, DISCOVERY_THRESHOLDS.unlock);
    const unlocked = completed || (distance != null && distance <= unlockRadius);
    let tier: DiscoveryTier = "hidden";
    if (completed) tier = "visible";
    else if (distance == null) tier = "hidden";
    else if (unlocked) tier = "unlocked";
    else if (distance <= DISCOVERY_THRESHOLDS.warm) tier = "warm";
    else if (distance <= DISCOVERY_THRESHOLDS.visible) tier = "visible";
    else if (distance <= DISCOVERY_THRESHOLDS.hint) tier = "hint";
    return {
      story,
      distance,
      unlocked,
      completed,
      tier,
    };
  });
}
