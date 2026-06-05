import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_1: Story = {
  id: "test_forest_1",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6", "7-9"],
  title: "The First Moose Signal",
  subtitle: "Test Forest",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_1.mp3",
  text: "A strange signal appears in the forest...",
  mission: ["Walk closer", "Listen", "Observe"],
  reward: "Signal Finder",
  emoji: "📡",
  accent: "moss",
  sources: [],
};
