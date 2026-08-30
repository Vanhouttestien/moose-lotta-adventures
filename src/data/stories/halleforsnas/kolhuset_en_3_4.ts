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
  ambience: "fire",
  audio: "/audio/kolhuset_en_3_4.mp3",
  image: "images/stories/kolhuset.jpeg",
  emoji: "🏭",
  accent: "moss",
  sources: ["2", "8"],
  text: `Look at this huge building!

It is called the charcoal house.

A long time ago, it was filled with charcoal.

Charcoal is like the food the furnace ate to make iron.

The walls are made of stone from the factory.

You can even see little black bits in the walls.

Those are pieces of coal!

Then a big fire came and burned many buildings.

But this one did not burn.

It was too strong.

Now people use it for theatre and music.

What a strong building!`,
  mission: [
    "Touch the wall and feel the stones",
    "Look for tiny black bits in the wall",
    "Make a big sound like a theatre voice",
  ],
  reward: "Strong Builder",
};
