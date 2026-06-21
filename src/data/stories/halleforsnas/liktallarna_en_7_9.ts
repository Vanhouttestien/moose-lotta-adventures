import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const liktallarna_en_7_9: Story = {
  id: "liktallarna_en_7_9",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["7-9"],
  title: "The Secret of the Pine Trees",
  subtitle: "The Burned Guardians",
  location: { ...LOCATIONS.LIKTALLARNA, label: "Liktallarna" },
  ambience: "wind",
  audio: "/audio/liktallarna_en_7_9.mp3",
  image: "/images/stories/liktalarna.jpeg", 
  emoji: "🌲",
  accent: "ember",
  sources: ["4"],
  text: `Before you stand some of the oldest trees in Hälleforsnäs.

The Liktallarna.

More than 400 years old.

For centuries, people have told stories about this place.

No one knows exactly which stories are true.

One old story says funeral wagons stopped here to rest on their long journey toward the church.

Maybe that is why the place feels different.

Quiet.
Heavy.
Like the air itself remembers.

Many people also believed the trees held special powers.

In old folklore, ancient trees could protect places… or carry memories from the people who passed by.

Then came the fire.

In the 1980s or 1990s, the trees were badly damaged by flames.

And still they survived.

Blackened.
Twisted.
Alive.

Today, a memorial plaque stands nearby with a charcoal drawing made in 1966 by Edvin Axelsson.

Almost as if someone wanted to make sure the trees would never be forgotten.`,
  mission: [
    "Find marks left by the fire",
    "Read the memorial plaque together",
    "Decide which legend you believe most",
  ],
  reward: "Guardian of the Pines",
};
