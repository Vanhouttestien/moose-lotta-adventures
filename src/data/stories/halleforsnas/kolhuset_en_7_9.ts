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
  text: `In the early 1800s, the bruk needed enormous amounts of charcoal.

Charcoal was made in forest piles called milor by crofters and small farmers. In winter, it was hauled here across ice and snow.

The building you are looking at was built to store it all.

And by "all," we mean a full year's supply for the entire blast furnace.

The floor covers nearly 4,000 square metres.

The roof was the largest free-span wooden roof in Europe when it was built.

The walls are made of slag stone — a waste product from iron-making — held together with lime plaster. If you look closely, you can see small pieces of coal embedded in the plaster.

In August 1934, a huge fire swept through the bruk. Almost every building burned down.

Except this one.

And the manor house.

That's it.

Nothing else survived.

For decades after, the charcoal house was used as a junk room.

Then in 1992, someone had an idea.

"Let's turn it into a theatre!"

They cleared out 175 years of junk and washed coal dust off every wall, ceiling, and beam.

Today, Kolhusteatern performs here every summer.

Some coal dust remains.

It's part of the story.`,
  mission: [
    "Look for coal bits in the plaster",
    "Count how many windows you see high up",
    "Imagine the building full of charcoal up to the roof",
  ],
  reward: "Coal Explorer",
};
