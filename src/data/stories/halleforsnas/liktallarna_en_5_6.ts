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
  ambience: "wind",
  audio: "/audio/liktallarna_en_5_6.mp3",
  image: "/images/stories/liktalarna.jpeg",
  emoji: "🌲",
  accent: "shadow",
  sources: ["4"],
  text: `Shhh…

Can you hear the wind moving through the trees?

These pine trees are more than 400 years old.

They stood here long before cars, streetlights, and modern houses.

And over the years, many strange stories grew around them.

Some people said this was once the very edge of the village.
A place where frightening things happened long ago.

Others told a different story.

They said funeral wagons once stopped here to rest during long journeys.

The horses breathed clouds into the cold air.
The wagons creaked.
And the trees watched silently.

But there is another story too.

That these trees hold magic.

Not wizard magic.

Old forest magic.

The kind only very ancient trees can carry.

Long ago, fire damaged the trees.
The flames blackened their trunks.

But the trees never fell.

They are still standing.

Like guardians from another age.`,
  mission: [
    "Look for signs of fire",
    "Stand completely still for 15 seconds",
    "Place your hand on the bark",
  ],
  reward: "Tree Guardian",
};
