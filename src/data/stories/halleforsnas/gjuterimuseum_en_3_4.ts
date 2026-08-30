import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const gjuterimuseum_en_3_4: Story = {
  id: "gjuterimuseum_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "Fire and Iron",
  subtitle: "The Foundry Museum",
  location: { ...LOCATIONS.FOUNDRY_MUSEUM, label: "Hälleforsnäs Foundry Museum" },
  audio: "/audio/gjuterimuseum_en_3_4.mp3",
  image: "images/stories/gjuterimuseet.jpeg",
  emoji: "⚒️",
  accent: "ember",
  sources: ["1", "5"],
  text: `Look at the big building!

A very long time ago, many people worked here.

They made things out of iron.

Iron is super strong!

The machines banged and roared.

Fire and heat were everywhere.

Today it is quiet.

But inside the museum, you can see the tools people used.

And maybe… if you listen very carefully…

you can hear the echo of everyone who worked here.`,
  mission: ["Look at the building", "Find something made of iron", "Pretend to be a worker"],
  reward: "Little Iron Worker",
};
