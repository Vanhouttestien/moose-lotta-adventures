import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const edstromsvallen_en_7_9: Story = {
  id: "edstromsvallen_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "Built on Fire",
  subtitle: "Edströmsvallen",
  location: { ...LOCATIONS.EDSTROMSVALLEN, label: "Edströmsvallen" },
  audio: "/audio/edstromsvallen_en_7_9.mp3",
  emoji: "⚽",
  accent: "bark",
  sources: ["1", "6"],
  text: `In August 1934, fire destroyed most of the ironworks.

Only the charcoal house and the manor survived.

The rest was rubble, ash, and twisted metal.

But the people of Hälleforsnäs saw something in the destruction.

They took the slag, the debris, and the ash from the fire and used it as fill.

On top of it, they built a sports field.

They named it after Sigfrid Edström, an industrialist who worked at the mill.

Edströmsvallen became the heart of the town's sports life.

In summer, football.
In winter, bandy.

The local club, Hälleforsnäs IF — nicknamed Brukets Blå — played here.

In 1958, 7,826 people packed the stands to watch a bandy match.

That was more people than the entire population of the town.

The team's finest season was 1978/79, when they reached the semi-final of the Swedish championship.

But without an artificial frozen rink, the team struggled to keep up.

In 2005, the bandy section was discontinued.

Today the field is still used for football and floorball.

But if you walk across the grass, you are walking on the ashes of the old bruk.`,
  mission: [
    "Walk across the field",
    "Imagine 7,826 people cheering",
    "Find a spot where you can see the whole field",
  ],
  reward: "History in the Ground",
};
