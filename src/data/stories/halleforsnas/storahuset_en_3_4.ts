import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const storahuset_en_3_4: Story = {
  id: "storahuset_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The Big House",
  subtitle: "Stora Huset",
  location: { ...LOCATIONS.STORA_HUSET, label: "Stora Huset" },
  audio: "/audio/storahuset_en_3_4.mp3",
  emoji: "🏡",
  accent: "moss",
  sources: ["3"],
  ambience: "birds",
  text: `Look at this big, beautiful house.

It is called Stora Huset.

That means "the big house".

A long time ago, the person who owned the factory lived here.

The house has lovely gardens with flowers and tall trees.

There is even a small building called an orangery where orange trees grew in winter.

Can you imagine living in a house this big?

What would you put in all those rooms?

The house is very old — more than 250 years.

But it is still standing.

And it is still one of the most special houses in Hälleforsnäs.`,
  mission: [
    "Count how many windows you can see",
    "Find something green in the garden",
    "Pretend you live here and wave from the door",
  ],
  reward: "Stora Huset Explorer",
};
