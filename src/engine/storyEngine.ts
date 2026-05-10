import type { Story } from "@/data/stories";
import { distanceMeters } from "@/hooks/useGeolocation";

export interface StoryStatus {
  story: Story;
  distance: number | null;
  unlocked: boolean;
  completed: boolean;
}

export function getStoryStatuses(
  stories: Story[],
  position: { lat: number; lng: number } | null,
  completedIds: string[],
): StoryStatus[] {
  return stories.map((story) => {
    const distance = position ? distanceMeters(position, story.location) : null;
    const unlocked = distance != null && distance <= story.location.radius;
    return { story, distance, unlocked, completed: completedIds.includes(story.id) };
  });
}
