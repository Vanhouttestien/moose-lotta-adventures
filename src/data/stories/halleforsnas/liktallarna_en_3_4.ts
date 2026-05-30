import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_3_4: Story = {
  id: "liktallarna_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Old Pine Trees",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "",
  emoji: "🌲",
  accent: "moss",
  text: "Look at the giant pine trees.\n\nThey have stood here for a very, very long time.\nMaybe longer than great-grandparents together.\n\nPeople tell old stories about this place.\nSome say travelers once stopped here to rest.\n\nOthers say the trees are magical.\n\nMaybe they whisper with the wind.\n\nLong ago, the trees were touched by fire.\nThe flames made them dark and smoky.\n\nBut they are still standing.\n\nStrong.\nQuiet.\nWatching over the road.\n\nIf you look carefully, you might see just how old they really are.",
  mission: ["Hug a tree", "Listen to the wind", "Find something soft in nature"],
  reward: "Pine Tree Friend",
};
