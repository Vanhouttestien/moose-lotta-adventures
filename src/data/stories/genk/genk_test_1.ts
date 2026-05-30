import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const genk_test_1: Story = {
  id: "genk_test_1",
  villageId: "genk",
  language: "en",
  ageGroups: ["adult"],
  title: "The Secret Antler Network",
  subtitle: "Point 1 — Signal Detected",
  location: { ...LOCATIONS.GENK_POINT_1, label: "Genk Point 1" },
  audio: "",
  emoji: "📡",
  accent: "moss",
  text: "What do moose use to send secret messages?\n\nAntler-net. 📡",
  mission: [
    "Point your fingers east like antlers",
    "Try to send a message to someone far away",
    "Find a pigeon and nod at it knowingly",
  ],
  reward: "Antler Operator",
};
