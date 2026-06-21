import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const storahuset_en_5_6: Story = {
  id: "storahuset_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Big House by the Lake",
  subtitle: "Stora Huset",
  location: { ...LOCATIONS.STORA_HUSET, label: "Stora Huset" },
  audio: "/audio/storahuset_en_5_6.mp3",
  emoji: "🏡",
  accent: "moss",
  sources: ["3"],
  ambience: "birds",
  text: `This grand house is called Stora Huset — "The Big House".

It was built in 1754 for the family who owned the ironworks.

For over 250 years, it has stood here by the lake, watching Hälleforsnäs change around it.

The house was built of wood, then later covered in brick and painted yellow and white.

Inside there were 25 rooms, with a grand hall and a beautiful staircase.

Around the house were gardens with rare trees, greenhouses, and an orangery where orange trees were kept warm in winter.

A long avenue of trees led visitors to the front door.

The people who lived here were the managers of the ironworks — first the families who owned the bruk, later the managing directors.

Today, the house is a private home.

But it still stands here, one of the most important buildings in Hälleforsnäs.

A reminder of the time when one big family ruled the ironworks.`,
  mission: [
    "Look at the yellow and white colours on the house",
    "Find the avenue of trees",
    "Imagine what it would be like to live here",
  ],
  reward: "Manor House Visitor",
};
