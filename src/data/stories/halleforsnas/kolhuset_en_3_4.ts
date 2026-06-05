import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_en_3_4: Story = {
  id: "kolhuset_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Giant Coal Shed",
  subtitle: "A Very Big Building",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_en_3_4.mp3",
  emoji: "🏭",
  accent: "moss",
  sources: ["2", "8"],
  text: "Look at this huge building!\n\nIt is called the charcoal house.\n\nA long time ago, it was filled with charcoal.\n\nCharcoal is like the food the furnace ate to make iron.\n\nThe walls are made of stone from the factory.\n\nYou can even see little black bits in the walls.\n\nThose are pieces of coal!\n\nThen a big fire came and burned many buildings.\n\nBut this one did not burn.\n\nIt was too strong.\n\nNow people use it for theatre and music.\n\nWhat a strong building!",
  mission: [
    "Touch the wall and feel the stones",
    "Look for tiny black bits in the wall",
    "Make a big sound like a theatre voice",
  ],
  reward: "Strong Builder",
};
