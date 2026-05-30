import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_en_5_6: Story = {
  id: "folketshus_en_5_6",
  villageId: "halleforsnas",
  language: "en",

  ageGroups: ["3-4", "5-6", "7-9"],
  title: "House of all people",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "",
  emoji: "🏛️",
  accent: "bark",
  text: `Listen… do you hear it?

I am Lotta the moose, and I'm standing here with you in front of the big building in Hälleforsnäs.

This is Folkets Hus.

A long time ago, the people here worked in a nearby factory.
They were strong… but often very tired after long days of work.

But after work, they dreamed of something more.

A place where everyone could gather.
A place for laughter, dancing, music, and movies.

So they decided to build this house together.

In 1961, construction began.

People helped after finishing their jobs.
They carried wood, painted walls, and worked side by side.

Everyone helped.

In 1964, the house was finished.

When the doors opened, the whole village came.

The children came to watch movies and laugh together.

And even today… if you listen very carefully…

you can almost hear that the house remembers everything that has happened here.`,
  mission: ["Find something old", "Listen for 10 seconds", "Wave at the building"],
  reward: "Folkets Hus friend",
};
