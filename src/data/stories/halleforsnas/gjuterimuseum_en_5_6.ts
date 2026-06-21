import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_5_6: Story = {
  id: "gjuterimuseum_en_5_6",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["5-6"],
  title: "The Foundry That Built the Town",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_5_6.mp3",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Inside here, you would once have heard a deafening noise.

Hammering hammers.
Hissing steam.
People shouting to each other.

For more than 300 years, things were made of iron here — everything from stoves to machine parts.

People came from near and far to work.

They got sweaty and sooty.
But they had each other.

It was hard work.
The heat from the furnaces was enormous.

Today, the foundry is a museum.
You can see the tools that were used, photographs from the past, and even a laboratory.

And if you ask someone who worked here — they can tell you exactly what it sounded like.`,
  mission: ["Look inside the museum", "Find something rusty", "Imagine the sound of the machines"],
  reward: "Foundry Explorer",
};
