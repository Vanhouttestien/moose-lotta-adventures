import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const genk_test_2: Story = {
  id: "genk_test_2",
  villageId: "genk",
  language: "en",
  ageGroups: ["adult"],
  title: "The Great Moose-byte Disaster",
  subtitle: "Point 2 — System Crash",
  location: { ...LOCATIONS.GENK_POINT_2, label: "Genk Point 2" },
  audio: "",
  emoji: "💻",
  accent: "ember",
  text: 'What do you get if you cross a moose with a computer?\n\nA "moose-byte." 💻',
  mission: [
    "Try typing with your nose (sanitize first)",
    "Invent an app name by combining an animal with a tech term",
    "Find something in nature that could replace a mouse",
  ],
  reward: "Moose-byte Developer",
};
