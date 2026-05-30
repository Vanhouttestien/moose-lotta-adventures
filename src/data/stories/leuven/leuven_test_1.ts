import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const leuven_test_1: Story = {
  id: "leuven_test_1",
  villageId: "leuven",
  language: "en",
  ageGroups: ["adult"],
  title: "The Antler-net Outage",
  subtitle: "Point 1 — No Signal",
  location: { ...LOCATIONS.LEUVEN_POINT_1, label: "Leuven Point 1" },
  audio: "",
  emoji: "📡",
  accent: "bark",
  text: "What do moose use to send secret messages?\n\nAntler-net. 📡",
  mission: [
    "Check your own 'signal strength' (hold up a phone)",
    "Stand on one leg for 5 seconds",
    "Send someone a message the old-fashioned way (talk to them)",
  ],
  reward: "Network Engineer",
};
