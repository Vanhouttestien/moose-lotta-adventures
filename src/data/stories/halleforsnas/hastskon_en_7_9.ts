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
  text: `This building had more lives than a cat.

It was built around 1850 by Lars von Celsing, the owner of the bruk.

First, it was a stable, a riding house, and a carriage shed.

Horses stomped and whinnied here.

Carriages rolled in and out.

But the most famous resident wasn't a horse at all.

It was a tame moose named Lotta.

She was trained to pull wagons and sleds — a working animal in a town full of industry.

In 1920, the building was completely transformed.

It became homes for the bruk workers.

Single men got small rooms.

Families got apartments.

A canteen was opened where workers could eat together.

And for several decades, the building even housed the town library.

Imagine checking out books in a former stable!

For 170 years, this horseshoe-shaped building stood here.

Then on May 28, 2020, a fire tore through it.

Nothing could be saved.

But the site has been purchased and plans exist to restore it.

One day, a new chapter may begin.`,
  mission: [
    "Find the outline of where the building once stood",
    "List three different uses this building had",
    "Imagine what Lotta the moose would do here today",
  ],
  reward: "History Detective",
};
