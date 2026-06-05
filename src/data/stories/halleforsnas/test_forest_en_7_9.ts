import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const test_forest_en_7_9: Story = {
  id: "test_forest_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Forest's Secret Language",
  subtitle: "Forest Signal",
  location: { ...LOCATIONS.FOREST_SIGNAL_POINT, label: "Forest Signal Point" },
  audio: "/audio/test_forest_en_7_9.mp3",
  emoji: "📡",
  accent: "moss",
  text: "Deep in the forest, there is a place where signals gather.\n\nA point where people have been able to send and receive messages for generations.\n\nLong before the internet and mobile phones, the ironworks workers used the forest to communicate. From this hill, you could see the entire mill area — and with the help of fires or signal flags, send messages quickly across the valley.\n\nToday, the signals are invisible. Radio waves, wifi, mobile signals — they pass through the air without us seeing them.\n\nBut this place still has something special.\n\nStand still for a moment.\nDo you feel it? As if the forest is listening.\n\nJust as messengers of old used this point to send their messages, you now stand in the same place — ready to receive.\n\nMaybe you can pick up something that others miss.",
  mission: [
    "Stand still at the signal point and listen",
    "Find the view of the mill area",
    "Consider: how would you send a message without words?",
  ],
  reward: "Forest Messenger",
  sources: [],
};
