import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const hastskon_en_3_4: Story = {
  id: "hastskon_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Moose That Pulled Wagons",
  subtitle: "Lotta at Hästskon",
  location: { ...LOCATIONS.HASTSKON, label: "Hästskon" },
  audio: "/audio/hastskon_en_3_4.mp3",
  image: "images/stories/hastkon.jpeg",
  emoji: "🫎",
  accent: "moss",
  sources: ["4", "9"],
  text: `Look at this place.

It looks like a big horseshoe!

A long time ago, a friendly moose named Lotta lived here.

Moose are usually wild.

But Lotta was different.

She was trained to pull wagons and sleds.

Imagine a moose helping people carry things!

Later, people lived in this building instead.

There were kitchens, bedrooms, and even a library.

Then one night, fire came.

Only ruins are left now.

But the story of Lotta the friendly moose is still here.`,
  mission: [
    "Look at the shape of the space",
    "Pretend to be a moose pulling a wagon",
    "Find something metal nearby",
  ],
  reward: "Moose Helper",
};
