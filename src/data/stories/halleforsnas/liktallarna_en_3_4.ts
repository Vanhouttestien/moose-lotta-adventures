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
  ambience: "wind",
  audio: "/audio/liktallarna_en_3_4.mp3",
  image: "/images/stories/liktalarna.jpeg",
  emoji: "🌲",
  accent: "moss",
  sources: ["4"],
  text: `Look at the old tree trunks.

A long, long time ago, these were tall pine trees.

They grew here for hundreds of years.

They watched the seasons change.

Snow fell around them.

Birds rested on their branches.

And the wind whispered through their needles.

Today, only parts of the trees remain.

But they still have a story to tell.

Can you touch the old wood?

It feels different from a young tree.

These trees were already old before your grandparents were born.

That is a very long time.

Maybe the old trunks are like forest grandpas.

Quietly standing here.

Remembering all the things they have seen.

Take a close look.

Can you find a crack?

A pattern?

A tiny insect hiding nearby?

Even though the trees are no longer growing tall, they are still part of the forest.

And they still have visitors.

Including you.`,
  mission: ["Hug a tree", "Listen to the wind", "Find something soft in nature"],
  reward: "Pine Tree Friend",
};
