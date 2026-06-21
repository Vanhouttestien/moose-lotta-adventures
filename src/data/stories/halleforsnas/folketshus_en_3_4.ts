import { LOCATIONS } from "../../coordinates";
import type { Story } from "..";

export const folketshus_en_3_4: Story = {
  id: "folketshus_en_3_4",
  villageId: "halleforsnas",
  language: "en",
  ageGroups: ["3-4"],
  title: "The House for Everyone",
  subtitle: "Folkets Hus",
  location: { ...LOCATIONS.FOLKETS_HUS, label: "Folkets Hus" },
  audio: "/audio/folketshus_en_3_4.mp3",
  image: "/images/stories/folketshus.jpeg",
  emoji: "🏛️",
  accent: "bark",
  sources: ["1"],
  ambience: "library",
  text: `Look at this big building.

It is called Folkets Hus.

That means "the people's house".

A long time ago, the workers in the factory wanted a place where everyone could meet.

So they built this house together.

People came here to dance, watch movies, and laugh.

Children came with their families.

The house is still here today.

It has seen so many happy moments.

Can you imagine the music and laughter inside?`,
  mission: ["Look at the big windows", "Listen quietly", "Smile at the building"],
  reward: "Folkets Hus Friend",
};
