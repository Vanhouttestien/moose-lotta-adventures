import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_en_3_4: Story = {
  id: "test_forest_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "Signal in the Forest",
  subtitle: "Forest Signal",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_en_3_4.mp3",
  emoji: "📡",
  accent: "moss",
  text: "In the forest, there are secret signals.\n\nThe wind whispers between the trees.\nThe birds sing their songs.\nMaybe there is a signal hidden here?\n\nLong ago, people used signals to talk to each other from far away.\n\nToday, you can be the one to discover the signal!\n\nLook up at the sky.\nListen to the wind.\nMaybe the signal is blinking just for you.",
  mission: ["Look up at the trees", "Listen for birds", "Send a signal with your hand"],
  reward: "Signal Discoverer",
  sources: [],
};
