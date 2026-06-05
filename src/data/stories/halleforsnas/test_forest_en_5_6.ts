import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_en_5_6: Story = {
  id: "test_forest_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Secret Signal",
  subtitle: "Forest Signal",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_en_5_6.mp3",
  emoji: "📡",
  accent: "moss",
  text: "Look! Over there in the forest, there is something strange.\n\nA signal. A point where the forest talks to the outside world.\n\nA long time ago, before mobile phones existed, people used other ways to send messages.\n\nSmoke signals.\nMirrors flashing in the sun.\nFlags on poles.\n\nToday, modern signals are everywhere. But this place is different.\n\nHere in the forest, surrounded by trees and silence, the signal feels almost magical.\n\nMaybe it is the forest itself sending a message.\n\nWhat do you think it wants to say?\n\nListen carefully. Maybe you will hear the answer.",
  mission: [
    "Find the signal point",
    "Listen to the forest for 10 seconds",
    "Draw a signal in the air",
  ],
  reward: "Signal Spotter",
  sources: [],
};
