import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_en_7_9: Story = {
  id: "hastskon_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Stable That Became a Home",
  subtitle: "Hästskon's Many Lives",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_en_7_9.mp3",
  emoji: "🫎",
  accent: "ember",
  sources: ["4", "9"],
  text: "This building had more lives than a cat.\n\nIt was built around 1850 by Lars von Celsing, the owner of the bruk.\n\nFirst, it was a stable, a riding house, and a carriage shed.\n\nHorses stomped and whinnied here.\n\nCarriages rolled in and out.\n\nBut the most famous resident wasn't a horse at all.\n\nIt was a tame moose named Lotta.\n\nShe was trained to pull wagons and sleds — a working animal in a town full of industry.\n\nIn 1920, the building was completely transformed.\n\nIt became homes for the bruk workers.\n\nSingle men got small rooms.\n\nFamilies got apartments.\n\nA canteen was opened where workers could eat together.\n\nAnd for several decades, the building even housed the town library.\n\nImagine checking out books in a former stable!\n\nFor 170 years, this horseshoe-shaped building stood here.\n\nThen on May 28, 2020, a fire tore through it.\n\nNothing could be saved.\n\nBut the site has been purchased and plans exist to restore it.\n\nOne day, a new chapter may begin.",
  mission: [
    "Find the outline of where the building once stood",
    "List three different uses this building had",
    "Imagine what Lotta the moose would do here today",
  ],
  reward: "History Detective",
};
