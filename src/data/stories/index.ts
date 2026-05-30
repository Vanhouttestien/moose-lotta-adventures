export type { Story, StoryLocation, Village, AgeGroup, Language } from "./types";
export { villages } from "./villages";
import type { Story, AgeGroup } from "./types";

const villageLoaders: Record<string, () => Promise<Story[]>> = {
  halleforsnas: () => import("./halleforsnas").then((m) => m.stories),
  genk: () => import("./genk").then((m) => m.stories),
  leuven: () => import("./leuven").then((m) => m.stories),
};

function storyIdToVillage(id: string): string {
  if (id.startsWith("genk_")) return "genk";
  if (id.startsWith("leuven_")) return "leuven";
  return "halleforsnas";
}

export async function getStories(filter?: {
  language?: string;
  ageGroup?: AgeGroup;
  villageId?: string;
}): Promise<Story[]> {
  const villageId = filter?.villageId;
  if (!villageId) return [];
  const loader = villageLoaders[villageId];
  if (!loader) return [];
  let stories = await loader();
  if (filter?.language) stories = stories.filter((s) => s.language === filter.language);
  if (filter?.ageGroup) stories = stories.filter((s) => s.ageGroups.includes(filter.ageGroup!));
  return stories;
}

export async function getStoryById(id: string): Promise<Story | undefined> {
  const villageId = storyIdToVillage(id);
  const loader = villageLoaders[villageId];
  if (!loader) return undefined;
  const stories = await loader();
  return stories.find((s) => s.id === id);
}
