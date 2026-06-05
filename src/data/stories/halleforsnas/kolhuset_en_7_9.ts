import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_en_7_9: Story = {
  id: "kolhuset_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "Fire, Coal and a Secret Theatre",
  subtitle: "The Charcoal House Story",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_en_7_9.mp3",
  emoji: "🔥",
  accent: "ember",
  sources: ["2", "8"],
  text: "In the early 1800s, the bruk needed enormous amounts of charcoal.\n\nCharcoal was made in forest piles called milor by crofters and small farmers. In winter, it was hauled here across ice and snow.\n\nThe building you are looking at was built to store it all.\n\nAnd by \"all,\" we mean a full year's supply for the entire blast furnace.\n\nThe floor covers nearly 4,000 square metres.\n\nThe roof was the largest free-span wooden roof in Europe when it was built.\n\nThe walls are made of slag stone — a waste product from iron-making — held together with lime plaster. If you look closely, you can see small pieces of coal embedded in the plaster.\n\nIn August 1934, a huge fire swept through the bruk. Almost every building burned down.\n\nExcept this one.\n\nAnd the manor house.\n\nThat's it.\n\nNothing else survived.\n\nFor decades after, the charcoal house was used as a junk room.\n\nThen in 1992, someone had an idea.\n\n\"Let's turn it into a theatre!\"\n\nThey cleared out 175 years of junk and washed coal dust off every wall, ceiling, and beam.\n\nToday, Kolhusteatern performs here every summer.\n\nSome coal dust remains.\n\nIt's part of the story.",
  mission: [
    "Look for coal bits in the plaster",
    "Count how many windows you see high up",
    "Imagine the building full of charcoal up to the roof",
  ],
  reward: "Coal Explorer",
};
