import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_5_6: Story = {
  id: "liktallarna_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Trees That Remember",
  subtitle: "Liktallarna",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  audio: "/audio/liktallarna_en_5_6.mp3",
  emoji: "🌲",
  accent: "shadow",
  sources: ["4"],
  text: "Shhh…\n\nCan you hear the wind moving through the trees?\n\nThese pine trees are more than 400 years old.\n\nThey stood here long before cars, streetlights, and modern houses.\n\nAnd over the years, many strange stories grew around them.\n\nSome people said this was once the very edge of the village.\nA place where frightening things happened long ago.\n\nOthers told a different story.\n\nThey said funeral wagons once stopped here to rest during long journeys.\n\nThe horses breathed clouds into the cold air.\nThe wagons creaked.\nAnd the trees watched silently.\n\nBut there is another story too.\n\nThat these trees hold magic.\n\nNot wizard magic.\n\nOld forest magic.\n\nThe kind only very ancient trees can carry.\n\nLong ago, fire damaged the trees.\nThe flames blackened their trunks.\n\nBut the trees never fell.\n\nThey are still standing.\n\nLike guardians from another age.",
  mission: [
    "Look for signs of fire",
    "Stand completely still for 15 seconds",
    "Place your hand on the bark",
  ],
  reward: "Tree Guardian",
};
