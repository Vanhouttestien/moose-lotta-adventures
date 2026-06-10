import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_en_5_6: Story = {
  id: "folketshus_en_5_6",
  villageId: "halleforsnas",
  language: "en",

  ageGroups: ["5-6", "7-9"],
  title: "House of all people",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_en_5_6.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  text: `Listen… do you hear it?

I am Lotta the moose, and I'm standing here with you in front of the big building in Hälleforsnäs.

This is Folkets Hus.

A long time ago, the people here worked in a nearby factory.
They were strong… but often very tired after long days of work.

But after work, they dreamed of something more.

A place where everyone could gather.
A place for laughter, dancing, music, and movies.

So they decided to build this house together.

Everyone helped.

When the doors opened, the whole village came.

The children came to watch movies and laugh together.

And even today… if you listen very carefully…

you can almost hear that the house remembers everything that has happened here.`,
  mission: ["Find something old", "Listen for 10 seconds", "Wave at the building"],
  reward: "Folkets Hus friend",
};
