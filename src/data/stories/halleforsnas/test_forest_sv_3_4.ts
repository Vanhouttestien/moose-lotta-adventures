import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_sv_3_4: Story = {
  id: "test_forest_sv_3_4",
  villageId: "halleforsnas",
  language: "sv",
  ageGroups: ["3-4"],
  title: "Signal i skogen",
  subtitle: "Skogssignalen",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Skogssignalen" },
  audio: "/audio/test_forest_sv_3_4.mp3",
  emoji: "📡",
  accent: "moss",
  text: "I skogen finns det hemliga signaler.\n\nVinden viskar mellan träden.\nFåglarna sjunger sina sånger.\nKanske finns det en signal gömd här?\n\nFör länge sedan använde människor signaler för att prata med varandra på långt håll.\n\nIdag kan du vara den som upptäcker signalen!\n\nTitta upp mot himlen.\nLyssna på vinden.\nKanske blinkar signalen till just dig.",
  mission: ["Titta upp mot träden", "Lyssna efter fåglar", "Skicka en signal med handen"],
  reward: "Signalupptäckare",
  sources: [],
};
