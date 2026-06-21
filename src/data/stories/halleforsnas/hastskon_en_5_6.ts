import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_en_5_6: Story = {
  id: "hastskon_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "Lotta the Working Moose",
  subtitle: "A Very Unusual Helper",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_en_5_6.mp3",
  emoji: "🫎",
  accent: "bark",
  sources: ["4", "9"],
  text: `Did you know a moose once lived right here?

Her name was Lotta.

Moose usually live deep in the forest.
But Lotta was special.

She was trained to pull wagons and sleds — just like a horse!

People in Hälleforsnäs knew her well.

This building was called Hästskon, because it was shaped like a horseshoe.

First it was a stable for horses and carriages.

Then in 1920, it was turned into homes for the bruk workers.

Families lived here.

Children played in the same yard where Lotta once walked.

For many years, there was even a library inside.

Then on a sad night in 2020, a fire destroyed the building.

Today only ruins remain. But the story lives on.

And the story says: a moose once worked right here.`,
  mission: [
    "Draw a horseshoe shape in the air",
    "Count how many windows you can see nearby",
    "Imagine what Lotta looked like",
  ],
  reward: "Moose Whisperer",
};
