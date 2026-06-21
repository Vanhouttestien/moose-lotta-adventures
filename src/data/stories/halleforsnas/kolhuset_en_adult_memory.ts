import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const kolhuset_en_adult_memory: Story = {
  id: "kolhuset_en_adult_memory",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["adult"],
  title: "The House That Refused to Die",
  subtitle: "Kolhuset",
  location: { ...LOCATIONS.KOLHUSET, label: "Kolhuset" },
  audio: "/audio/kolhuset_en_adult_memory.mp3",
  emoji: "🏭",
  accent: "shadow",
  sources: ["2", "8"],
  text: `Kolhuset was built to store enormous amounts of charcoal.

The charcoal came from the forests surrounding Hälleforsnäs.

People worked through cold, smoke, and darkness to keep the ironworks alive.

For a time, this was one of Europe's largest wooden roof structures without inner pillars.

An industrial giant made of timber, stone, and soot.

Then everything changed.

The mill fell silent.
Many buildings disappeared.

But Kolhuset remained.

Abandoned.
Dusty.
Almost forgotten.

Until people began filling it with something entirely different.

Music.
Theater.
Laughter.
Applause.

It is strange how some buildings survive by transforming.

As if the walls themselves refuse to disappear.`,
  mission: [
    "Look up at the enormous roof",
    "Listen to the echo inside the building",
    "Think about why some places are given a second life",
  ],
  reward: "Keeper of Memory",
};
