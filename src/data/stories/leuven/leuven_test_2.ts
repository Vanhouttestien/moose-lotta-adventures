import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const leuven_test_2: Story = {
  id: "leuven_test_2",
  villageId: "leuven",
  language: "en",
  ageGroups: ["adult"],
  title: "The Moose-byte Startup",
  subtitle: "Point 2 — Series A",
  location: { ...LOCATIONS.LEUVEN_POINT_2, label: "Leuven Point 2" },
  audio: "",
  emoji: "💻",
  accent: "shadow",
  text: 'What do you get if you cross a moose with a computer?\n\nA "moose-byte." 💻',
  mission: [
    "Invent a startup idea involving nature",
    "Pitch it to someone nearby",
    "Try paying for something with a random object",
  ],
  reward: "Moose-byte CEO",
};
